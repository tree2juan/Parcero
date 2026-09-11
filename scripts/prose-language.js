/*
 * Which language a run of prose is written in, guessed well enough to catch a
 * whole lesson written in the wrong one.
 *
 * The two directions are mirror images: the `es` direction teaches Colombian
 * Spanish to an English reader, so its explanations are English; the `en`
 * direction teaches English to a Colombian reader, so its explanations are
 * Spanish. Only the taught material is in the language being learned. Get that
 * backwards and the lesson is not slightly wrong, it is unreadable by the
 * person it is for -- and every structural test still passes, because the shape
 * is perfect and only the words are in the wrong language.
 *
 * This is a heuristic and it says so: it answers "english", "spanish" or
 * "unknown", and refuses to guess on anything short. Callers must treat
 * "unknown" as fine. A guard that fires on a five-word label would be turned
 * off within a day, and then it would be catching nothing at all.
 */
"use strict";

const SPANISH = new Set([
  "que", "de", "del", "la", "el", "los", "las", "un", "una", "unos", "unas",
  "para", "con", "cuando", "porque", "se", "su", "sus", "más", "mas", "está",
  "están", "es", "y", "pero", "si", "lo", "le", "les", "en", "por", "como",
  "esto", "esta", "este", "ese", "esa", "usted", "ustedes", "vos", "hay", "ya",
  "muy", "también", "sin", "sobre", "entre", "desde", "hasta", "aunque",
  "mientras", "algo", "alguien", "nada", "todo", "toda", "cada", "dice",
  "decir", "hace", "hacer", "puede", "usa", "usar", "suena", "aquí", "acá",
  "allá", "eso", "esos", "esas", "otro", "otra", "misma", "mismo", "según",
  "aunque", "donde", "quien", "cual", "tiene", "tener", "va", "ir", "está"
]);

const ENGLISH = new Set([
  "the", "and", "you", "that", "with", "for", "when", "this", "they", "your",
  "is", "are", "of", "to", "but", "it", "in", "on", "at", "what", "which",
  "would", "could", "should", "because", "about", "from", "than", "then",
  "there", "here", "how", "why", "not", "do", "does", "did", "have", "has",
  "had", "be", "been", "will", "can", "may", "who", "whose", "into", "out",
  "up", "off", "over", "after", "before", "while", "its", "their", "them",
  "these", "those", "someone", "something", "anything", "everything", "way",
  "says", "say", "said", "means", "meaning", "sounds", "sound", "use", "used"
]);

/*
 * Quoted runs are stripped first. Spanish explanation quotes the English it is
 * teaching -- «“run into” hace doble trabajo» -- and counting those words would
 * make correct Spanish prose look like English.
 */
const stripQuotes = (text) => text
  .replace(/[“"][^”"]*[”"]/g, " ")
  .replace(/[«][^»]*[»]/g, " ")
  .replace(/[‘'][^’']{2,}[’']/g, " ");

function classify(text) {
  if (typeof text !== "string") return "unknown";
  const stripped = stripQuotes(text);
  const words = stripped.toLowerCase().match(/[a-záéíóúüñ]+/g) || [];
  if (words.length < 8) return "unknown";

  let spanish = 0;
  let english = 0;
  for (const word of words) {
    if (SPANISH.has(word)) spanish += 1;
    if (ENGLISH.has(word)) english += 1;
  }
  // Accents and inverted punctuation are Spanish and nothing else.
  if (/[¿¡ñ]|[áéíóú]/.test(stripped)) spanish += 2;

  if (english >= 3 && english > spanish * 2) return "english";
  if (spanish >= 3 && spanish > english * 2) return "spanish";
  return "unknown";
}

/*
 * Titles are three to eight words, which is exactly the length classify()
 * refuses to judge -- so for the whole life of that map, the "title" entries
 * below have been checked by a function that always answered "unknown". The
 * guard was decorative, which is how 232 Spanish titles sat in the English
 * reader's direction without a single test going red.
 *
 * This is the same idea scaled down: strip quoted runs, count marker words,
 * and demand a clear margin before naming a language. It deliberately does not
 * weight accented characters, because English titles here legitimately carry
 * Colombian place names -- Bogotá, Montería, San Andrés -- and scoring those as
 * Spanish would fire on correct content. Inverted punctuation is kept, since
 * nothing in English uses it.
 */
const ENGLISH_TITLE = new Set([
  ...ENGLISH,
  "a", "an", "is", "are", "my", "we", "his", "her", "one", "no", "so", "too",
  "back", "down", "right", "already", "without", "another", "every", "much"
]);

function titleLanguage(text) {
  if (typeof text !== "string") return "unknown";
  const stripped = stripQuotes(text);
  const words = stripped.toLowerCase().match(/[a-záéíóúüñ]+/g) || [];
  if (!words.length) return "unknown";

  let spanish = 0;
  let english = 0;
  for (const word of words) {
    if (SPANISH.has(word)) spanish += 1;
    if (ENGLISH_TITLE.has(word)) english += 1;
  }
  if (/[¿¡]/.test(stripped)) spanish += 2;

  if (english >= 2 && english > spanish) return "english";
  if (spanish >= 2 && spanish > english) return "spanish";
  return "unknown";
}

/*
 * The language each slot must be written in, per direction.
 *
 * Derived from the eight hand-written lessons rather than assumed, because two
 * assumptions turned out to be wrong. `literal`,
 * `pronunciation` and the practice options vary by design: a pronunciation
 * respelling is neither language, and a question may deliberately offer three
 * English utterances to choose between. Those slots are left out entirely
 * rather than guessed at, because a guard with false positives gets switched
 * off and then catches nothing.
 *
 * Slots absent from these maps are not checked.
 */
const EXPECTED = {
  // Teaching Colombian Spanish to an English reader: explanation is English.
  es: {
    /* The title names the lesson in the course index; it is chrome, not taught
       material, so it belongs to the reader's own language. This said "spanish"
       until the titles were audited, which put the one string a learner reads
       before choosing a lesson in the only language they cannot read yet. */
    "title": "english",
    /* The scene-setting line is prose about the situation, not a line of the
       language being taught, so it is written in the language the reader
       already reads -- English here, Spanish on the en side below. */
    "situation": "english",
    "dialogue[].target": "spanish",
    "variations[].form": "spanish",
    "vocabulary[].example.target": "spanish",

    "note": "english",
    "setting.who": "english", "setting.what": "english", "setting.when": "english",
    "setting.where": "english", "setting.why": "english",
    "address.who": "english", "address.why": "english", "address.ifYouSwitch": "english",
    "dialogue[].translation": "english", "dialogue[].why": "english",
    "dialogue[].literal": "english",
    "vocabulary[].explanation": "english", "vocabulary[].useWhen": "english",
    "vocabulary[].avoidWhen": "english", "vocabulary[].region": "english",
    "vocabulary[].example.translation": "english",
    "culture[].label": "english", "culture[].body": "english",
    "pitfalls[].whyItFails": "english",
    "variations[].whenToUse": "english",
    "practiceExtra[].prompt": "english"
  },
  // Teaching English to a Colombian reader: explanation is Spanish.
  en: {
    "dialogue[].target": "english",
    "pitfalls[].sayInstead": "english",
    "variations[].form": "english",
    "vocabulary[].example.target": "english",

    "situation": "spanish",
    "title": "spanish",
    "note": "spanish",
    "setting.who": "spanish", "setting.what": "spanish", "setting.when": "spanish",
    "setting.where": "spanish", "setting.why": "spanish",
    "address.who": "spanish", "address.why": "spanish", "address.ifYouSwitch": "spanish",
    "dialogue[].translation": "spanish", "dialogue[].why": "spanish",
    "vocabulary[].explanation": "spanish", "vocabulary[].useWhen": "spanish",
    "vocabulary[].avoidWhen": "spanish", "vocabulary[].region": "spanish",
    "vocabulary[].example.translation": "spanish",
    "culture[].label": "spanish", "culture[].body": "spanish",
    "pitfalls[].whyItFails": "spanish",
    "variations[].region": "spanish", "variations[].whenToUse": "spanish",
    "practiceExtra[].prompt": "spanish", "practiceExtra[].tests": "spanish"
  }
};

const slotOf = (trail) => trail.replace(/\[\d+\]/g, "[]");

/*
 * Walk a direction and report every string written in the wrong language.
 * Anything the classifier cannot judge is passed over in silence.
 */
function wrongLanguage(content, direction) {
  const expected = EXPECTED[direction] || {};
  const problems = [];
  const walk = (node, trail) => {
    if (typeof node === "string") {
      const slot = slotOf(trail);
      const want = expected[slot];
      if (!want) return;
      /* Titles are too short for classify(), which would answer "unknown" for
         every one of them and quietly check nothing. */
      const got = slot === "title" ? titleLanguage(node) : classify(node);
      if (got !== "unknown" && got !== want) {
        problems.push({ trail, want, got, text: node });
      }
      return;
    }
    if (Array.isArray(node)) return node.forEach((item, index) => walk(item, `${trail}[${index}]`));
    if (node && typeof node === "object") {
      for (const [key, value] of Object.entries(node)) walk(value, trail ? `${trail}.${key}` : key);
    }
  };
  walk(content, "");
  return problems;
}

module.exports = { classify, titleLanguage, wrongLanguage, EXPECTED };

