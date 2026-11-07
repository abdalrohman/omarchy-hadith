// Loads the plugin's QML JS libraries in Node (stripping .pragma/.import) and checks the
// translation logic. Usage: node tests/translations.test.js [plugin_dir]
const fs = require("fs");
const path = require("path");
const dir = process.argv[2] || path.join(__dirname, "..");
const load = (f) => fs.readFileSync(path.join(dir, f), "utf8")
  .replace(/^\.pragma library$/m, "").replace(/^\.import .*$/gm, "");
const Data = new Function(load("HadithData.js") + "; return { COLLECTIONS, BUILTIN_HADITHS };")();
const Tr = new Function(load("HadithTranslations.js") + "; return { LANGUAGES, SOURCES, TRANSLATIONS };")();
const M = new Function("Data", "Tr", load("Model.js") +
  "; return { parseHadithState, getTranslation, filterHadiths, isTranslationLanguage, translationLanguageLabel, TRANSLATION_LANGUAGES," +
  " bundledCount, translationAvailable, downloadEstimateMB, formatCount, formatMB, parseHadithId, placeholderEntry };")(Data, Tr);

let fails = 0;
const ok = (cond, msg) => { console.log((cond ? "PASS " : "FAIL ") + msg); if (!cond) fails++; };
const byId = (id) => Data.BUILTIN_HADITHS.find((h) => h.id === id);

ok(M.parseHadithState("{}").translationLanguage === "en", "default language is en");
ok(M.parseHadithState('{"translationLanguage":"tr"}').translationLanguage === "tr", "tr persists");
ok(M.parseHadithState('{"translationLanguage":"ru"}').translationLanguage === "ru", "ru persists");
ok(M.parseHadithState('{"translationLanguage":"<img src=x>"}').translationLanguage === "en", "invalid language rejected");
ok(M.parseHadithState('{"translationLanguage":5}').translationLanguage === "en", "non-string language rejected");

const b1 = byId("bukhari-1");
let t = M.getTranslation(b1, "tr");
ok(t.lang === "tr" && !t.fallback && t.text.startsWith("Alkame") && !/Tekrar|Tahric/.test(t.text), "bukhari-1 tr, cleaned");
t = M.getTranslation(b1, "ru");
ok(t.lang === "ru" && t.text.includes("по намерениям") && !/\[\d\]|\\n/.test(t.text), "bukhari-1 ru, cleaned");
t = M.getTranslation(byId("qudsi-1"), "tr");
ok(t.fallback && t.lang === "en" && t.text === byId("qudsi-1").english, "qudsi-1 tr falls back to English");
t = M.getTranslation(byId("nasai-9"), "tr");
ok(t.fallback, "nasai tr excluded (damaged source) -> fallback");
t = M.getTranslation(byId("malik-1"), "ru");
ok(t.fallback, "malik ru not available -> fallback");
ok(M.getTranslation(b1, "en").text === b1.english, "en returns English");
ok(M.getTranslation(null, "tr").text === "", "null hadith safe");

ok(M.filterHadiths("all", "niyet", [], "tr").some((h) => h.id === "bukhari-1"), "search Turkish word finds bukhari-1");
ok(M.filterHadiths("all", "niyet", [], "en").length === 0, "Turkish word not matched in en mode");
ok(M.filterHadiths("all", "намерениям", [], "ru").some((h) => h.id === "bukhari-1"), "search Russian word finds bukhari-1");
ok(M.filterHadiths("all", "intentions", [], "tr").length > 0, "English search still works in tr mode");

const n = { tr: 0, ru: 0 };
for (const h of Data.BUILTIN_HADITHS) for (const l of ["tr", "ru"]) if (!M.getTranslation(h, l).fallback) n[l]++;
ok(n.tr === 64 && n.ru === 30, `coverage tr=${n.tr} ru=${n.ru}`);
ok(M.TRANSLATION_LANGUAGES.map((l) => l.code).join(",") === "en,tr,ru", "language list en,tr,ru");

// Downloaded hadiths carry translations inline and take precedence
const remote = { id: "abudawud-500", collection: "abudawud", english: "E", tr: "T-inline", remote: true };
ok(M.getTranslation(remote, "tr").text === "T-inline" && !M.getTranslation(remote, "tr").fallback, "inline downloaded translation used");
ok(M.getTranslation(remote, "ru").fallback && M.getTranslation(remote, "ru").text === "E", "missing inline ru falls back to English");

// Full-collection helpers
ok(M.bundledCount("bukhari") === 10 && M.bundledCount("nope") === 0, "bundledCount");
ok(M.translationAvailable("bukhari", "ru") && !M.translationAvailable("nasai", "tr") && !M.translationAvailable("qudsi", "ru"), "translationAvailable (Nasa'i tr excluded)");
ok(Math.abs(M.downloadEstimateMB("bukhari", "tr") - 24.4) < 0.01 && M.downloadEstimateMB("bukhari", "en") === 14.2, "downloadEstimateMB");
ok(M.formatCount(36108) === "36,108" && M.formatCount(7) === "7" && M.formatCount(1000000) === "1,000,000", "formatCount");
ok(M.formatMB(13667486, true) === "13 MB" && M.formatMB(0.1, false) === "0.1 MB", "formatMB");
ok(M.parseHadithId("bukhari-7563").number === 7563 && M.parseHadithId("../etc-1") === null && M.parseHadithId("foo-1") === null, "parseHadithId validates");
const ph = M.placeholderEntry("muslim-2564");
ok(ph && ph.placeholder && ph.collectionName === "Sahih Muslim" && ph.hadithNumber === 2564, "placeholderEntry");
ok(M.placeholderEntry("<b>x</b>-1") === null, "placeholderEntry rejects bad ids");

console.log(fails ? `${fails} FAILED` : "ALL PASSED");
process.exit(fails ? 1 : 0);
