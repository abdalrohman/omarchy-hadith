#!/usr/bin/env python3
"""Hadith library helper for the Omarchy Hadith plugin.

Downloads full hadith collections on request, caches them locally, and answers small
read queries for the panel. Every command prints exactly one JSON object on stdout.

Source: fawazahmed0/hadith-api (https://github.com/fawazahmed0/hadith-api, Unlicense),
the same dataset as the plugin's bundled hadiths.

Commands:
  status                              downloaded collections, counts, languages, sizes
  download <collection> [tr] [ru]     fetch Arabic + English (+ translations) into the cache
  delete <collection|all>             remove downloaded data
  get <collection> <number>           one hadith with prev/next numbers
  list <collection> <offset> <limit>  a page of list entries
  search <collection|all> <lang> <query>   up to 100 matches in downloaded collections
  many <id> [<id> ...]                list entries for ids (for bookmarks)
  random <collection|all>             a random downloaded hadith
"""
import json
import os
import random as rnd
import re
import shutil
import sys
import tempfile
import time
import urllib.error
import urllib.request

API = "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions"
SOURCE_URL = "https://github.com/fawazahmed0/hadith-api"

COLLECTIONS = {
    "bukhari": "Sahih al-Bukhari",
    "muslim": "Sahih Muslim",
    "abudawud": "Sunan Abu Dawud",
    "tirmidhi": "Jami at-Tirmidhi",
    "ibnmajah": "Sunan Ibn Majah",
    "nasai": "Sunan an-Nasa'i",
    "malik": "Muwatta Malik",
    "nawawi": "Nawawi's 40 Hadith",
    "qudsi": "40 Hadith Qudsi",
    "dehlawi": "Shah Waliullah's 40 Hadith",
}
# Collections whose every hadith is graded sahih by consensus.
SAHIH_COLLECTIONS = {"bukhari", "muslim"}

EDITION_PREFIX = {"ar": "ara", "en": "eng", "tr": "tur", "ru": "rus"}
# Translations available upstream. Turkish Nasa'i is left out on purpose: words inside
# parentheses were lost in that edition, so its sentences are broken.
TRANSLATIONS = {
    "tr": {"bukhari", "muslim", "abudawud", "tirmidhi", "ibnmajah", "malik", "nawawi"},
    "ru": {"bukhari", "muslim", "abudawud"},
}

MAX_DOWNLOAD_BYTES = 24 * 1024 * 1024   # largest upstream file today is ~10.2 MB
MAX_TEXT_CHARS = 60000
MAX_HADITH_NUMBER = 20000
CHUNK = 200
SEARCH_LIMIT = 100
LIST_MAX = 100
EXCERPT = 220
FORMAT_VERSION = 1

# ---------------------------------------------------------------------------
# Text cleanup: strips publisher scaffolding only, never rewords the translation.
# ---------------------------------------------------------------------------
TR_TAILS = [
    r"\s*\(?\s*Tekrar[ıi]?\s*:.*$",
    r"\s*\(?\s*Diğer\s+[Tt]ahric.*$",
    r"\s*AHMED DAVUDOĞLU ŞERHİ.*$",
    r"\s*\S*BURAYA TIKLA.*$",
    r"\s*\d+\s+numaralı hadisin kaynakları.*$",
    r"\s*Bu Hadis Sadece Muvatta da var.*$",
    r"\s*\d*\s*Yalnızca Müslim rivayet etmiştir.*$",
    r"\s*Tuhfetu'l-[EeŞş]\S*.*$",
    r"\s*Bu hadis\.?\s*sihah-ı Sitte.*$",
]


def clean_tr(t):
    t = t.replace("*", "")
    t = re.sub(r"\[\d+\]", "", t)
    for p in TR_TAILS:
        t = re.sub(p, "", t, flags=re.S)
    t = t.replace("<r—", "«—")
    t = re.sub(r"buyurdu>$", "buyurdu.", t.strip())
    return re.sub(r"[ \t]+", " ", t).strip()


def clean_ru(t):
    t = t.replace("\\n", "\n")
    t = re.sub(r"\[\d+\]", "", t)
    return re.sub(r"[ \t]+", " ", t).strip()


def clean_plain(t):
    return re.sub(r"[ \t]+", " ", t).strip()


CLEAN = {"ar": clean_plain, "en": clean_plain, "tr": clean_tr, "ru": clean_ru}

_AR_DIACRITICS = re.compile("[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED\u0640]")


def normalize(text):
    text = _AR_DIACRITICS.sub("", text or "")
    text = re.sub("[إأآٱ]", "ا", text).replace("ة", "ه").replace("ى", "ي")
    return text.lower()


# ---------------------------------------------------------------------------
# Cache layout:  <cache>/<collection>/meta.json  and  <cache>/<collection>/<k>.json
# where chunk k holds {"<number>": {"ar", "en", "tr"?, "ru"?, "g"}} for CHUNK numbers.
# ---------------------------------------------------------------------------
def cache_root():
    base = os.environ.get("XDG_CACHE_HOME") or os.path.join(os.path.expanduser("~"), ".cache")
    return os.path.join(base, "omarchy-hadith")


def coll_dir(coll):
    return os.path.join(cache_root(), coll)


def read_json(path, limit=64 * 1024 * 1024):
    if os.path.islink(path) or not os.path.isfile(path) or os.path.getsize(path) > limit:
        return None
    try:
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return None


def load_meta(coll):
    meta = read_json(os.path.join(coll_dir(coll), "meta.json"), 4 * 1024 * 1024)
    if not isinstance(meta, dict) or meta.get("format") != FORMAT_VERSION:
        return None
    if not isinstance(meta.get("numbers"), list):
        return None
    return meta


def chunk_index(number):
    return (number - 1) // CHUNK


def load_chunk(coll, k):
    data = read_json(os.path.join(coll_dir(coll), f"{k}.json"))
    return data if isinstance(data, dict) else {}


def hadith_id(coll, n):
    return f"{coll}-{n}"


def entry(coll, n, rec, full):
    item = {
        "id": hadith_id(coll, n),
        "collection": coll,
        "collectionName": COLLECTIONS[coll],
        "hadithNumber": n,
        "grade": rec.get("g") or "",
        "remote": True,
    }
    if full:
        item["arabic"] = rec.get("ar", "")
        item["english"] = rec.get("en", "")
        for lang in ("tr", "ru"):
            if rec.get(lang):
                item[lang] = rec[lang]
    else:
        item["arabic"] = (rec.get("ar", "") or "")[:EXCERPT]
    return item


# ---------------------------------------------------------------------------
# Download
# ---------------------------------------------------------------------------
def fetch_edition(edition):
    url = f"{API}/{edition}.min.json"
    last = None
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "omarchy-hadith"})
            with urllib.request.urlopen(req, timeout=60) as r:
                raw = r.read(MAX_DOWNLOAD_BYTES + 1)
            if len(raw) > MAX_DOWNLOAD_BYTES:
                raise ValueError(f"{edition} exceeds {MAX_DOWNLOAD_BYTES} bytes")
            data = json.loads(raw.decode("utf-8"), strict=False)
            hadiths = data.get("hadiths") if isinstance(data, dict) else None
            if not isinstance(hadiths, list):
                raise ValueError(f"{edition}: unexpected format")
            return hadiths
        except urllib.error.HTTPError as e:
            if e.code == 404:
                raise ValueError(f"{edition} not found upstream")
            last = e
        except (urllib.error.URLError, TimeoutError, OSError) as e:
            last = e
        time.sleep(1.5 * (attempt + 1))
    raise ValueError(f"download failed for {edition}: {last}")


def texts_by_number(hadiths, lang):
    out = {}
    for h in hadiths:
        if not isinstance(h, dict):
            continue
        n = h.get("hadithnumber")
        if isinstance(n, float) and n.is_integer():
            n = int(n)
        if not isinstance(n, int) or not 1 <= n <= MAX_HADITH_NUMBER:
            continue
        text = h.get("text")
        if not isinstance(text, str):
            continue
        text = CLEAN[lang](text[:MAX_TEXT_CHARS])
        if text:
            out[n] = text
    return out


def grade_for(coll, h):
    if coll in SAHIH_COLLECTIONS:
        return "Sahih"
    grades = h.get("grades") if isinstance(h, dict) else None
    if not isinstance(grades, list) or not grades:
        return ""
    chosen = next((g for g in grades if isinstance(g, dict) and g.get("name") == "Al-Albani"), None)
    chosen = chosen or (grades[0] if isinstance(grades[0], dict) else None)
    grade = chosen.get("grade") if chosen else ""
    return grade[:80].strip() if isinstance(grade, str) else ""


def cmd_download(coll, langs):
    existing = load_meta(coll)
    wanted = {"ar", "en"} | {l for l in langs if coll in TRANSLATIONS.get(l, set())}
    if existing:
        wanted |= set(existing.get("langs", []))

    ar_raw = fetch_edition(f"ara-{coll}")
    texts = {"ar": texts_by_number(ar_raw, "ar")}
    grades = {}
    for h in ar_raw:
        n = h.get("hadithnumber") if isinstance(h, dict) else None
        if isinstance(n, float) and n.is_integer():
            n = int(n)
        if isinstance(n, int):
            grades[n] = grade_for(coll, h)
    for lang in sorted(wanted - {"ar"}):
        texts[lang] = texts_by_number(fetch_edition(f"{EDITION_PREFIX[lang]}-{coll}"), lang)

    numbers = sorted(set(texts["ar"]) | set(texts["en"]))
    if not numbers:
        raise ValueError("no hadiths in download")

    root = cache_root()
    os.makedirs(root, mode=0o700, exist_ok=True)
    tmp = tempfile.mkdtemp(prefix=f".{coll}-", dir=root)
    try:
        chunks = {}
        for n in numbers:
            rec = {"g": grades.get(n, "")}
            for lang, by_num in texts.items():
                if n in by_num:
                    rec[lang] = by_num[n]
            chunks.setdefault(chunk_index(n), {})[str(n)] = rec
        for k, data in chunks.items():
            with open(os.path.join(tmp, f"{k}.json"), "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, separators=(",", ":"))
        meta = {
            "format": FORMAT_VERSION,
            "collection": coll,
            "count": len(numbers),
            "numbers": numbers,
            "langs": sorted(texts),
            "translated": {l: len(texts[l]) for l in texts if l in ("tr", "ru")},
            "source": SOURCE_URL,
            "downloadedAt": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
        }
        with open(os.path.join(tmp, "meta.json"), "w", encoding="utf-8") as f:
            json.dump(meta, f, ensure_ascii=False, separators=(",", ":"))
        dest = coll_dir(coll)
        old = None
        if os.path.lexists(dest):
            old = dest + ".old"
            if os.path.lexists(old):
                shutil.rmtree(old, ignore_errors=True)
            os.replace(dest, old)
        os.replace(tmp, dest)
        if old:
            shutil.rmtree(old, ignore_errors=True)
    except BaseException:
        shutil.rmtree(tmp, ignore_errors=True)
        raise
    return {"ok": True, "collection": coll, "count": len(numbers), "langs": sorted(texts)}


# ---------------------------------------------------------------------------
# Read commands
# ---------------------------------------------------------------------------
def dir_bytes(path):
    total = 0
    for name in os.listdir(path):
        p = os.path.join(path, name)
        if os.path.isfile(p) and not os.path.islink(p):
            total += os.path.getsize(p)
    return total


def cmd_status():
    out = {}
    for coll in COLLECTIONS:
        meta = load_meta(coll)
        if meta:
            out[coll] = {
                "count": meta["count"],
                "langs": meta.get("langs", []),
                "translated": meta.get("translated", {}),
                "bytes": dir_bytes(coll_dir(coll)),
                "downloadedAt": meta.get("downloadedAt", ""),
            }
    available = {l: sorted(c) for l, c in TRANSLATIONS.items()}
    return {"ok": True, "collections": out, "available": available, "cacheDir": cache_root()}


def require_meta(coll):
    meta = load_meta(coll)
    if not meta:
        raise ValueError(f"{coll} is not downloaded")
    return meta


def cmd_get(coll, n):
    meta = require_meta(coll)
    numbers = meta["numbers"]
    rec = load_chunk(coll, chunk_index(n)).get(str(n))
    if not rec:
        raise ValueError(f"{coll} #{n} not found")
    item = entry(coll, n, rec, True)
    # numbers is sorted: find neighbours by bisection
    import bisect
    i = bisect.bisect_left(numbers, n)
    item["prev"] = numbers[i - 1] if i > 0 else numbers[-1]
    item["next"] = numbers[i + 1] if i + 1 < len(numbers) else numbers[0]
    return {"ok": True, "hadith": item}


def cmd_list(coll, offset, limit):
    meta = require_meta(coll)
    numbers = meta["numbers"]
    page = numbers[offset:offset + limit]
    items, cache = [], {}
    for n in page:
        k = chunk_index(n)
        if k not in cache:
            cache[k] = load_chunk(coll, k)
        rec = cache[k].get(str(n))
        if rec:
            items.append(entry(coll, n, rec, False))
    return {"ok": True, "collection": coll, "total": len(numbers), "offset": offset, "items": items}


def cmd_search(scope, lang, query):
    q = query.strip().lower()
    nq = normalize(q)
    colls = [scope] if scope != "all" else [c for c in COLLECTIONS if load_meta(c)]
    items, truncated = [], False
    for coll in colls:
        meta = require_meta(coll)
        for k in sorted({chunk_index(n) for n in meta["numbers"]}):
            for key, rec in sorted(load_chunk(coll, k).items(), key=lambda kv: int(kv[0])):
                n = int(key)
                hit = (q.isdigit() and q == key) \
                    or (nq and nq in normalize(rec.get("ar", ""))) \
                    or q in (rec.get("en", "") or "").lower() \
                    or (lang in ("tr", "ru") and q in (rec.get(lang, "") or "").lower())
                if hit:
                    if len(items) >= SEARCH_LIMIT:
                        truncated = True
                        break
                    items.append(entry(coll, n, rec, False))
            if truncated:
                break
        if truncated:
            break
    return {"ok": True, "items": items, "truncated": truncated}


def cmd_many(ids):
    items, cache = [], {}
    for hid in ids:
        coll, n = parse_id(hid)
        if not load_meta(coll):
            continue
        k = (coll, chunk_index(n))
        if k not in cache:
            cache[k] = load_chunk(coll, k[1])
        rec = cache[k].get(str(n))
        if rec:
            items.append(entry(coll, n, rec, False))
    return {"ok": True, "items": items}


def cmd_random(scope):
    colls = [scope] if scope != "all" else [c for c in COLLECTIONS if load_meta(c)]
    colls = [c for c in colls if load_meta(c)]
    if not colls:
        raise ValueError("no downloaded collections")
    coll = rnd.choice(colls)
    n = rnd.choice(require_meta(coll)["numbers"])
    return cmd_get(coll, n)


def cmd_delete(scope):
    targets = list(COLLECTIONS) if scope == "all" else [scope]
    removed = []
    for coll in targets:
        d = coll_dir(coll)
        if os.path.isdir(d) and not os.path.islink(d):
            shutil.rmtree(d)
            removed.append(coll)
    return {"ok": True, "removed": removed}


# ---------------------------------------------------------------------------
# Argument validation & dispatch
# ---------------------------------------------------------------------------
def parse_coll(value, allow_all=False):
    if allow_all and value == "all":
        return value
    if value not in COLLECTIONS:
        raise ValueError("unknown collection")
    return value


def parse_int(value, lo, hi):
    if not re.fullmatch(r"\d{1,6}", value or ""):
        raise ValueError("invalid number")
    n = int(value)
    if not lo <= n <= hi:
        raise ValueError("number out of range")
    return n


def parse_id(value):
    m = re.fullmatch(r"([a-z]{2,16})-(\d{1,6})", value or "")
    if not m:
        raise ValueError("invalid id")
    return parse_coll(m.group(1)), parse_int(m.group(2), 1, MAX_HADITH_NUMBER)


def main(argv):
    if not argv:
        raise ValueError("missing command")
    cmd, args = argv[0], argv[1:]
    if cmd == "status":
        return cmd_status()
    if cmd == "download" and 1 <= len(args) <= 3:
        langs = [a for a in args[1:] if a in TRANSLATIONS]
        return cmd_download(parse_coll(args[0]), langs)
    if cmd == "delete" and len(args) == 1:
        return cmd_delete(parse_coll(args[0], allow_all=True))
    if cmd == "get" and len(args) == 2:
        return cmd_get(parse_coll(args[0]), parse_int(args[1], 1, MAX_HADITH_NUMBER))
    if cmd == "list" and len(args) == 3:
        return cmd_list(parse_coll(args[0]), parse_int(args[1], 0, MAX_HADITH_NUMBER),
                        parse_int(args[2], 1, LIST_MAX))
    if cmd == "search" and len(args) == 3:
        if args[1] not in ("en", "tr", "ru"):
            raise ValueError("invalid language")
        if not args[2].strip() or len(args[2]) > 100:
            raise ValueError("invalid query")
        return cmd_search(parse_coll(args[0], allow_all=True), args[1], args[2])
    if cmd == "many" and 1 <= len(args) <= 100:
        return cmd_many(args)
    if cmd == "random" and len(args) == 1:
        return cmd_random(parse_coll(args[0], allow_all=True))
    raise ValueError("invalid command")


if __name__ == "__main__":
    try:
        result = main(sys.argv[1:])
    except Exception as e:  # report every failure as JSON for the panel
        result = {"ok": False, "error": str(e)[:300]}
    sys.stdout.write(json.dumps(result, ensure_ascii=False, separators=(",", ":")))
    sys.stdout.write("\n")
