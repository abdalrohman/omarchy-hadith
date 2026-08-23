// ============================================================================
// Model.js — Core Business Logic & State Engine for Omarchy Hadith Plugin
// ============================================================================
.pragma library
.import "HadithData.js" as Data

var BAR_FORMATS = [
  { id: "compact", label: "Icon Only", example: "📜" },
  { id: "daily", label: "Collection #Number", example: "📜 Sahih al-Bukhari #1" },
  { id: "excerpt", label: "Arabic Excerpt", example: "📜 إِنَّمَا الأَعْمَالُ…" },
  { id: "timer", label: "Next Reminder", example: "📜 03:45:00" }
];

var INTERVAL_PRESETS = [
  { label: "1h", value: 1 },
  { label: "2h", value: 2 },
  { label: "4h", value: 4 },
  { label: "8h", value: 8 },
  { label: "12h", value: 12 },
  { label: "24h", value: 24 }
];

var FONT_SIZES = [
  { label: "Normal", size: 18 },
  { label: "Large", size: 22 },
  { label: "Extra Large", size: 26 }
];

function getDefaultState() {
  return {
    dailyNotificationEnabled: true,
    dailyNotificationTime: "08:00",
    periodicNotificationEnabled: false,
    periodicIntervalHours: 4,
    soundEnabled: true,
    soundVolume: 80,
    preferredCollection: "all",
    fontSizeIndex: 1,
    barFormatIndex: 0,
    currentHadithId: "nawawi-1",
    dailyHadithDate: "",
    bookmarks: [],
    history: []
  };
}

function parseHadithState(raw) {
  var defaults = getDefaultState();
  if (!raw || typeof raw !== "string" || raw.trim() === "") return defaults;
  if (raw.length > 65536) return defaults;
  try {
    var parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return defaults;

    var barFormatIndex = (!isNaN(parsed.barFormatIndex) && parsed.barFormatIndex >= 0 && parsed.barFormatIndex < BAR_FORMATS.length)
      ? parseInt(parsed.barFormatIndex, 10)
      : defaults.barFormatIndex;

    var fontSizeIndex = (!isNaN(parsed.fontSizeIndex) && parsed.fontSizeIndex >= 0 && parsed.fontSizeIndex < FONT_SIZES.length)
      ? parseInt(parsed.fontSizeIndex, 10)
      : defaults.fontSizeIndex;

    var soundVolume = (!isNaN(parsed.soundVolume) && parsed.soundVolume >= 0 && parsed.soundVolume <= 100)
      ? parseInt(parsed.soundVolume, 10)
      : defaults.soundVolume;

    var periodicIntervalHours = (!isNaN(parsed.periodicIntervalHours) && parsed.periodicIntervalHours >= 1 && parsed.periodicIntervalHours <= 24)
      ? parseInt(parsed.periodicIntervalHours, 10)
      : defaults.periodicIntervalHours;

    var bookmarks = [];
    if (Array.isArray(parsed.bookmarks)) {
      for (var b = 0; b < parsed.bookmarks.length && bookmarks.length < 100; b++) {
        var bm = parsed.bookmarks[b];
        if (typeof bm === "string" && bm.length > 0 && bm.length <= 64) {
          bookmarks.push(bm);
        }
      }
    }

    var history = [];
    if (Array.isArray(parsed.history)) {
      for (var h = 0; h < parsed.history.length && history.length < 50; h++) {
        var hist = parsed.history[h];
        if (typeof hist === "string" && hist.length > 0 && hist.length <= 64) {
          history.push(hist);
        }
      }
    }

    var currentId = defaults.currentHadithId;
    if (typeof parsed.currentHadithId === "string" && parsed.currentHadithId.length > 0 && parsed.currentHadithId.length <= 64) {
      currentId = parsed.currentHadithId;
    } else if (parsed.currentHadith && typeof parsed.currentHadith.id === "string" && parsed.currentHadith.id.length <= 64) {
      currentId = parsed.currentHadith.id;
    }

    var prefCol = defaults.preferredCollection;
    if (typeof parsed.preferredCollection === "string" && parsed.preferredCollection.length > 0 && parsed.preferredCollection.length <= 64) {
      prefCol = parsed.preferredCollection;
    }

    var notifTime = defaults.dailyNotificationTime;
    if (typeof parsed.dailyNotificationTime === "string" && /^([01]\d|2[0-3]):[0-5]\d$/.test(parsed.dailyNotificationTime)) {
      notifTime = parsed.dailyNotificationTime;
    }

    var dailyDate = "";
    if (typeof parsed.dailyHadithDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(parsed.dailyHadithDate)) {
      dailyDate = parsed.dailyHadithDate;
    }

    return {
      dailyNotificationEnabled: parsed.dailyNotificationEnabled !== undefined ? Boolean(parsed.dailyNotificationEnabled) : defaults.dailyNotificationEnabled,
      dailyNotificationTime: notifTime,
      periodicNotificationEnabled: parsed.periodicNotificationEnabled !== undefined ? Boolean(parsed.periodicNotificationEnabled) : defaults.periodicNotificationEnabled,
      periodicIntervalHours: periodicIntervalHours,
      soundEnabled: parsed.soundEnabled !== undefined ? Boolean(parsed.soundEnabled) : defaults.soundEnabled,
      soundVolume: soundVolume,
      preferredCollection: prefCol,
      fontSizeIndex: fontSizeIndex,
      barFormatIndex: barFormatIndex,
      currentHadithId: currentId,
      dailyHadithDate: dailyDate,
      bookmarks: bookmarks,
      history: history
    };
  } catch (e) {
    return defaults;
  }
}

function getDailyHadith(dateObj, collectionKey) {
  var pool = Data.BUILTIN_HADITHS;
  if (collectionKey && collectionKey !== "all") {
    var filtered = [];
    for (var i = 0; i < pool.length; i++) {
      if (pool[i].collection === collectionKey) filtered.push(pool[i]);
    }
    if (filtered.length > 0) pool = filtered;
  }
  if (!pool || pool.length === 0) pool = Data.BUILTIN_HADITHS;

  var d = dateObj || new Date();
  var start = new Date(d.getFullYear(), 0, 0);
  var diff = d - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var dayOfYear = Math.floor(diff / oneDay);
  var idx = dayOfYear % pool.length;
  return pool[idx];
}

function getRandomHadith(collectionKey, excludeId) {
  var pool = Data.BUILTIN_HADITHS;
  if (collectionKey && collectionKey !== "all") {
    var filtered = [];
    for (var i = 0; i < pool.length; i++) {
      if (pool[i].collection === collectionKey) filtered.push(pool[i]);
    }
    if (filtered.length > 0) pool = filtered;
  }
  if (!pool || pool.length === 0) pool = Data.BUILTIN_HADITHS;

  if (pool.length === 1) return pool[0];
  var pickPool = [];
  for (var j = 0; j < pool.length; j++) {
    if (pool[j].id !== excludeId) pickPool.push(pool[j]);
  }
  if (pickPool.length === 0) pickPool = pool;
  var randIdx = Math.floor(Math.random() * pickPool.length);
  return pickPool[randIdx];
}

function findHadithById(id) {
  if (!id) return null;
  for (var i = 0; i < Data.BUILTIN_HADITHS.length; i++) {
    if (Data.BUILTIN_HADITHS[i].id === id) return Data.BUILTIN_HADITHS[i];
  }
  return null;
}

function normalizeArabic(text) {
  if (!text || typeof text !== "string") return "";
  return text
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .replace(/[إأآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .toLowerCase();
}

function filterHadiths(collectionKey, query, bookmarksList) {
  var list = Data.BUILTIN_HADITHS;
  var out = [];
  var q = (query || "").trim().toLowerCase();
  var normQ = normalizeArabic(q);

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    if (!item) continue;

    // Collection filter
    if (collectionKey && collectionKey !== "all") {
      if (collectionKey === "bookmarks") {
        if (!bookmarksList || bookmarksList.indexOf(item.id) === -1) continue;
      } else {
        if (item.collection !== collectionKey) continue;
      }
    }

    // Search query filter
    if (q.length > 0) {
      var normArabic = normalizeArabic(item.arabic || "");
      var inArabic = (item.arabic || "").toLowerCase().indexOf(q) !== -1 || (normQ.length > 0 && normArabic.indexOf(normQ) !== -1);
      var inEnglish = (item.english || "").toLowerCase().indexOf(q) !== -1;
      var inCollection = (item.collectionName || "").toLowerCase().indexOf(q) !== -1;
      var inNumber = String(item.hadithNumber || "").indexOf(q) !== -1;
      if (!inArabic && !inEnglish && !inCollection && !inNumber) continue;
    }

    out.push(item);
  }

  return out;
}

function getNextHadith(currentId, collectionKey, bookmarksList) {
  var pool = filterHadiths(collectionKey, "", bookmarksList);
  if (!pool || pool.length === 0) pool = Data.BUILTIN_HADITHS;
  var curIdx = -1;
  for (var i = 0; i < pool.length; i++) {
    if (pool[i].id === currentId) {
      curIdx = i;
      break;
    }
  }
  var nextIdx = (curIdx + 1) % pool.length;
  return pool[nextIdx];
}

function getPrevHadith(currentId, collectionKey, bookmarksList) {
  var pool = filterHadiths(collectionKey, "", bookmarksList);
  if (!pool || pool.length === 0) pool = Data.BUILTIN_HADITHS;
  var curIdx = -1;
  for (var i = 0; i < pool.length; i++) {
    if (pool[i].id === currentId) {
      curIdx = i;
      break;
    }
  }
  var prevIdx = (curIdx - 1 + pool.length) % pool.length;
  return pool[prevIdx];
}

function formatDuration(totalSeconds) {
  var s = Math.max(0, Math.floor(totalSeconds));
  var m = Math.floor(s / 60);
  var remSec = s % 60;
  if (m < 60) {
    if (m === 0) return remSec + "s";
    return m + "m " + (remSec < 10 ? "0" : "") + remSec + "s";
  }
  var h = Math.floor(m / 60);
  var remMin = m % 60;
  return h + "h " + (remMin < 10 ? "0" : "") + remMin + "m";
}

function formatBarLabel(hadith, secondsRemaining, formatIndex) {
  var icon = "📜";
  var idx = parseInt(formatIndex, 10) || 0;

  switch (idx) {
    case 0: // Icon Only (Default)
      return icon;
    case 1: // Collection #Number
      var col = (hadith && hadith.collectionName) ? hadith.collectionName : "Hadith";
      return icon + " " + col + " #" + (hadith ? hadith.hadithNumber : "1");
    case 2: // Short Excerpt
      var txt = (hadith && hadith.arabic) ? hadith.arabic : "Prophetic Hadith";
      if (txt.length > 24) txt = txt.substring(0, 22) + "…";
      return icon + " " + txt;
    case 3: // Timer countdown
      return icon + " " + formatDuration(secondsRemaining);
    default:
      return icon;
  }
}

function escapeBash(str) {
  if (typeof str !== "string") str = String(str || "");
  return "'" + str.replace(/'/g, "'\\''") + "'";
}
