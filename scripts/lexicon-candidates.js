/*
 * Which words the course uses but does not teach.
 *
 * The lexicon exists because 56% of the word forms in the dialogue corpus
 * appear exactly once. This finds them, strips out the ones that are already
 * taught properly, and prints what is left — so the word list is chosen from
 * the course's own evidence rather than from someone's idea of what a learner
 * ought to know.
 *
 * Two kinds of word are removed. Function words (articles, pronouns,
 * prepositions, the copula) are high-frequency by nature and are learned from
 * grammar rather than from a list. Inflections of the 200 curriculum verbs
 * are removed because those verbs already have a lesson, a curriculum entry
 * and a flashcard each — "olvidaste" is not a vocabulary gap, it is olvidar.
 *
 * Run: node scripts/lexicon-candidates.js [--max=2] [--limit=400]
 */
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const { dataSource } = require(path.join(root, "test", "data-source.js"));

const arg = (name, fallback) => {
  const found = process.argv.find((item) => item.startsWith(`--${name}=`));
  return found ? Number(found.split("=")[1]) : fallback;
};
const maxSeen = arg("max", 2);
const limit = arg("limit", 400);

const { lessons, curriculum } = vm.runInNewContext(`${dataSource({ schema: true })}\n({ lessons, curriculum });`);

const bare = (value) => String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

/*
 * Function words. Deliberately hand-listed rather than frequency-derived: a
 * frequency cut would also remove genuinely useful nouns that happen to be
 * common, and keep rare function words that are pure grammar.
 */
const FUNCTION_WORDS = new Set(`
el la los las un una unos unas lo al del de a en con por para sin sobre entre hasta desde
y o u e ni que qué quien quién cual cuál como cómo cuando cuándo donde dónde porque pues
yo tú vos usted él ella nosotros ustedes ellos ellas me te se nos le les lo la mi tu su
mis tus sus nuestro nuestra suyo mío tuyo este esta esto ese esa eso aquel aquella
no sí ya muy más menos también tampoco pero sino aunque si entonces así ahí allí aquí
soy eres es somos son era eran fue fui ser estar estoy está están estaba hay he has ha
han había hemos haber tan tanto todo toda todos todas nada nadie algo alguien algún alguna
cada otro otra otros otras mismo misma bien mal ahora luego después antes siempre nunca
`.trim().split(/\s+/));

/* Stems of every taught verb, plus the principal parts the curriculum lists. */
const verbStems = new Set();
for (const entry of curriculum) {
  const infinitive = bare(entry.spanish || "").replace(/se$/, "");
  if (infinitive.length > 3) verbStems.add(infinitive.replace(/(ar|er|ir)$/, ""));
  for (const form of Object.values(entry.forms || {})) {
    const stripped = bare(form || "");
    if (stripped.length >= 4) verbStems.add(stripped.slice(0, 4));
  }
}

/*
 * Conjugation endings, so a noun that merely starts like a verb survives.
 * The check is deliberately in two parts: this one needs the word to also
 * share a stem with a taught verb, because endings alone are ambiguous —
 * "arepa", "bolsillo" and "amable" end exactly like conjugated forms.
 */
const VERB_ENDING = /(ar|er|ir|o|as|es|a|e|amos|emos|imos|an|en|é|í|ó|aste|iste|aron|ieron|aba|ía|ando|iendo|ado|ido|ara|iera|ase|iese|aré|eré|iré|aría|ería|iría)$/;

/*
 * Endings no Spanish noun or adjective has. These identify a verb form on
 * their own, which catches conjugations of verbs *outside* the 200 — real
 * words, but ones that belong in a verb list rather than in a lexicon of
 * nouns and adjectives.
 */
const UNAMBIGUOUS_VERB_ENDING = /(aste|iste|[aeií]mos|aron|ieron|ando|iendo|[aeií]r[íi]a|[aeií]ríamos|ábamos|é|í|ó)$/;

function looksConjugated(word) {
  const stripped = bare(word);
  if (!VERB_ENDING.test(stripped)) return false;
  for (const stem of verbStems) {
    if (stem.length >= 3 && stripped.startsWith(stem)) return true;
  }
  return false;
}

const counts = new Map();
for (const lesson of lessons) {
  for (const row of lesson.es && lesson.es.dialogue ? lesson.es.dialogue : []) {
    for (const word of String(row.target || "").toLowerCase().match(/[a-záéíóúñü]+/g) || []) {
      counts.set(word, (counts.get(word) || 0) + 1);
    }
  }
}

/* Where each candidate is used, so an author can see it in context. */
const homes = new Map();
for (const lesson of lessons) {
  for (const row of lesson.es && lesson.es.dialogue ? lesson.es.dialogue : []) {
    for (const word of String(row.target || "").toLowerCase().match(/[a-záéíóúñü]+/g) || []) {
      if (!homes.has(word)) homes.set(word, { lesson: lesson.id, line: row.target });
    }
  }
}

const candidates = [...counts.entries()]
  .filter(([word, seen]) => seen <= maxSeen)
  .filter(([word]) => word.length > 2)
  .filter(([word]) => !FUNCTION_WORDS.has(bare(word)))
  .filter(([word]) => !looksConjugated(word))
  /* Tested on the accented form, not the stripped one: in "acabó" and
     "aprendí" the accent *is* the tense marker, so bare() would erase the
     only evidence there is. The cost is that a handful of nouns ending in a
     stressed vowel (café, bebé, ají) are dropped from the candidate list —
     acceptable, since they are common enough to sit above the rarity cut. */
  .filter(([word]) => !UNAMBIGUOUS_VERB_ENDING.test(word))
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

const total = [...counts.values()].reduce((sum, n) => sum + n, 0);
console.log(`corpus: ${total} running words, ${counts.size} distinct forms`);
console.log(`seen <= ${maxSeen}, not a function word, not an inflection of a taught verb: ${candidates.length}`);
console.log(`showing ${Math.min(limit, candidates.length)}\n`);

for (const [word, seen] of candidates.slice(0, limit)) {
  const home = homes.get(word) || {};
  console.log(`${String(seen)}  ${word.padEnd(18)} ${String(home.line || "").slice(0, 76)}`);
}
