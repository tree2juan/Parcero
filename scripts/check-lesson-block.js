/*
 * Check one lesson block file on its own.
 *
 *   node scripts/check-lesson-block.js data/lessons/02-foundation-doing.js
 *
 * The test suite is the real gate, but it loads every block at once. While the
 * catalogue is being written that is useless to an author: a half-finished file
 * three directories away fails the run and buries the error you were looking
 * for. This loads the schema, the curriculum and one block, and reports only on
 * that block.
 *
 * It deliberately repeats rules that live in test/. The duplication is the
 * point -- this has to work when the rest of the catalogue does not parse.
 */
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const { wrongLanguage } = require("./prose-language.js");

const target = process.argv[2];
if (!target) {
  console.error("usage: node scripts/check-lesson-block.js <path-to-block-file>");
  process.exit(2);
}

const problems = [];
const fail = (message) => problems.push(message);

let loaded;
try {
  const bundle = [
    read("data/lesson-schema.js"),
    read("data/curriculum.js"),
    "const lessons = [];",
    "function markSource(items, file) { for (const item of items) if (!item.sourceFile) { item.sourceFile = file; } }",
    read(target.replace(/\\/g, "/")),
    "({ lessons, curriculum, schema: ParceroLessonSchema });"
  ].join("\n");
  loaded = vm.runInNewContext(bundle, {}, { filename: "block-check.js" });
} catch (error) {
  console.error(`${target} does not load: ${error.message}`);
  process.exit(1);
}

const { lessons, curriculum, schema } = loaded;
const known = new Set(curriculum.map((entry) => entry.spanish));
const tierOf = new Map(curriculum.map((entry) => [entry.spanish, entry.level]));
const directions = ["es", "en"];

/*
 * A lesson's level label has to agree with the curriculum tier of the verb it
 * teaches. `level` is a free-form display string, so nothing stopped a lesson
 * for an `independent` verb from calling itself "Starter"; with one lesson per
 * verb across three tiers, that would quietly turn the whole level system into
 * decoration. The eight original lessons declare no verb and are unaffected.
 */
const TIER_LABEL = { foundation: "Starter", independent: "Developing", extension: "Extending" };

/*
 * Verb stems, kept deliberately in step with test/shape.test.js. Colombian
 * speech nearly always says a conjugated form, so the infinitive's root alone
 * would fail every stem-changing verb in the curriculum.
 */
const STRONG_STEMS = {
  decir: ["dij", "dic", "dig"], hacer: ["hic", "hiz", "hag"], tener: ["tuv", "tien", "teng"],
  poder: ["pud", "pued"], poner: ["pus", "pon", "pong"], saber: ["sup", "sep"],
  querer: ["quis", "quier"], venir: ["vin", "vien", "veng"], traer: ["traj", "traig"],
  conducir: ["conduj", "conduzc"], conocer: ["conozc", "conoc"], seguir: ["sig", "sigu"],
  oír: ["oig", "oy"], jugar: ["jueg", "jug"]
};
/* Verbs whose conjugations share no stem with the infinitive at all. */
const SPOKEN_EXEMPT = /^(ser|ir|estar|haber|ver|dar)$/;

function verbStems(verb) {
  const root = verb.replace(/se$/, "").replace(/[aeiouáéíóú]?[rn]$/, "").toLowerCase();
  if (!root) return [];
  const variants = new Set([root, ...(STRONG_STEMS[verb] || [])]);
  const swap = (from, to) => {
    const at = root.lastIndexOf(from);
    if (at !== -1) variants.add(root.slice(0, at) + to + root.slice(at + from.length));
  };
  swap("o", "ue");
  swap("e", "ie");
  swap("e", "i");
  swap("u", "ue");
  /* -ir stem-changers raise the vowel in the third-person preterite and gerund:
     "murió", "durmió", "pidió". Scoped to -ir, where that change actually happens. */
  if (/ir(se)?$/.test(verb)) swap("o", "u");
  return [...variants].map((variant) => variant.slice(0, 4));
}

/*
 * The stamp that tells the review tooling which file to send a native speaker
 * to. Without it every flag against this block names data/lessons.js, at an
 * index that file does not have.
 */
const relative = target.replace(/\\/g, "/").replace(/^\.\//, "");
if (!read(relative).includes(`markSource(lessons, "${relative}")`)) {
  fail(`the file must end with: markSource(lessons, "${relative}");`);
}

/*
 * Slots that must be present in both directions, and how many the tests demand.
 * `practice` is the normalized name: the schema folds the main prompt/choices/
 * answer and the practiceExtra rows into one array, so 4 here means one main
 * question plus the three extras.
 */
const MINIMUMS = {
  dialogue: 6, vocabulary: 7, culture: 3, pitfalls: 3, variations: 3, practice: 4
};
const MIRRORED = ["dialogue", "vocabulary", "culture", "pitfalls", "variations", "practice"];
const SETTING_KEYS = ["who", "what", "when", "where", "why"];
const ADDRESS_KEYS = ["form", "who", "why", "ifYouSwitch"];
const SEGMENT_MIN = 240;
const SEGMENT_MAX = 520;

if (!lessons.length) fail("the file pushed no lessons");

const answerSpread = new Map();

for (const lesson of lessons) {
  const at = lesson.id || "(a lesson with no id)";

  for (const key of ["id", "level", "domain", "register", "verb"]) {
    if (typeof lesson[key] !== "string" || !lesson[key].trim()) fail(`${at}: missing ${key}`);
  }
  if (!lesson.skills?.length) fail(`${at}: missing skills`);
  if (!lesson.pathways?.length) fail(`${at}: missing pathways`);
  if (!["pending", "reviewed"].includes(lesson.review)) {
    fail(`${at}: review must be the string "pending" or "reviewed", not ${JSON.stringify(lesson.review)}`);
  }
  if (lesson.verb && !known.has(lesson.verb)) {
    fail(`${at}: the verb "${lesson.verb}" is not in data/curriculum.js`);
  }
  if (lesson.verb && known.has(lesson.verb)) {
    const want = TIER_LABEL[tierOf.get(lesson.verb)];
    const got = String(lesson.level || "").split("·")[0].trim();
    if (want && got !== want) {
      fail(`${at}: "${lesson.verb}" is a ${tierOf.get(lesson.verb)} verb, so level must start with "${want} · ", not ${JSON.stringify(lesson.level)}`);
    }
  }

  for (const direction of directions) {
    const raw = lesson[direction];
    if (!raw) { fail(`${at}: no ${direction} direction`); continue; }
    if (Object.prototype.hasOwnProperty.call(raw, "segments")) {
      fail(`${at}.${direction}: authors a segments key; segments are computed, never written`);
    }

    const content = schema.normalizeContent(raw);
    const where = `${at}.${direction}`;

    for (const [slot, least] of Object.entries(MINIMUMS)) {
      const rows = content[slot] || [];
      if (rows.length < least) fail(`${where}: ${rows.length} ${slot}, needs at least ${least}`);
    }

    if (!content.title?.trim()) fail(`${where}: missing title`);
    if (!content.situation?.trim()) fail(`${where}: missing situation`);
    if (!content.note?.trim()) fail(`${where}: missing note`);

    for (const key of SETTING_KEYS) {
      if (!content.setting?.[key]?.trim()) fail(`${where}: the setting never answers "${key}"`);
    }
    for (const key of ADDRESS_KEYS) {
      if (!content.address?.[key]?.trim()) fail(`${where}: address is missing "${key}"`);
    }
    if (direction === "en" && content.address?.form !== "mixed") {
      fail(`${where}: English has one second-person form, so address.form must be "mixed"`);
    }

    for (const [index, row] of (content.dialogue || []).entries()) {
      for (const slot of ["speaker", "target", "translation", "pronunciation", "literal", "why"]) {
        if (!row[slot]?.trim()) fail(`${where}: dialogue ${index} is missing "${slot}"`);
      }
    }
    for (const [index, row] of (content.vocabulary || []).entries()) {
      for (const slot of ["term", "explanation", "literal", "useWhen", "avoidWhen", "register", "region"]) {
        if (!row[slot]?.trim()) fail(`${where}: vocabulary ${index} is missing "${slot}"`);
      }
      if (!row.example?.target?.trim() || !row.example?.translation?.trim()) {
        fail(`${where}: vocabulary ${index} has no worked example`);
      }
      if (!Array.isArray(row.related) || row.related.length < 3) {
        fail(`${where}: vocabulary ${index} needs at least 3 related terms`);
      }
    }

    const questions = (content.practice || []).map((row, index) => ({
      ...row,
      at: `${where} question ${index}`
    }));
    for (const question of questions) {
      if (!question.prompt?.trim()) { fail(`${question.at}: no prompt`); continue; }
      const choices = question.choices || [];
      if (choices.length < 3) fail(`${question.at}: needs at least 3 choices`);
      if (new Set(choices).size !== choices.length) fail(`${question.at}: repeats a choice`);
      if (!Number.isInteger(question.answer) || !choices[question.answer]) {
        fail(`${question.at}: answer ${question.answer} is not one of the choices`);
        continue;
      }
      answerSpread.set(question.answer, (answerSpread.get(question.answer) || 0) + 1);
      /*
       * Length has to be checked in both directions. An answer that towers over
       * its distractors is guessable, but so is one that is conspicuously
       * shorter -- which is what happens when the distractors carry the
       * explanation of why they are wrong ("Veo el cuadro, que en realidad
       * significa...") and the right answer is left as a bare form. Choices
       * must be the same kind of thing as each other: all bare forms, or all
       * explanations. The teaching point belongs in `tests`, which the page
       * renders next to the question.
       */
      const lengths = choices.map((choice) => choice.length);
      const others = lengths.filter((_, index) => index !== question.answer);
      const answerLength = lengths[question.answer];
      const longest = Math.max(...others);
      const shortest = Math.min(...others);
      if (answerLength > longest * 1.5) {
        fail(`${question.at}: the correct choice is ${answerLength} characters against a `
          + `longest distractor of ${longest}. Make the choices comparable in length and kind.`);
      }
      if (answerLength * 1.5 < shortest) {
        fail(`${question.at}: the correct choice is only ${answerLength} characters against a `
          + `shortest distractor of ${shortest}, so it can be picked out by shape alone. Do not `
          + `pad the distractors with the reason they are wrong -- strip them back to bare `
          + `alternatives and put the teaching point in "tests".`);
      }
    }

    const segments = schema.deriveSegments(content);
    if (segments.length < 3) {
      fail(`${where}: only ${segments.length} study segments; the direction is too short (aim for 1,400+ words)`);
    }
    for (const [index, segment] of segments.entries()) {
      if (segment.words < SEGMENT_MIN || segment.words > SEGMENT_MAX) {
        fail(`${where}: segment ${index} is ${segment.words} words, outside ${SEGMENT_MIN}-${SEGMENT_MAX}`);
      }
    }
  }

  for (const slot of MIRRORED) {
    const es = (schema.normalizeContent(lesson.es || {})[slot] || []).length;
    const en = (schema.normalizeContent(lesson.en || {})[slot] || []).length;
    if (es !== en) fail(`${at}: ${slot} has ${es} rows in es and ${en} in en; the directions must mirror`);
  }
  const esVocab = schema.normalizeContent(lesson.es || {}).vocabulary || [];
  const enVocab = schema.normalizeContent(lesson.en || {}).vocabulary || [];
  for (let index = 0; index < Math.min(esVocab.length, enVocab.length); index += 1) {
    const es = (esVocab[index].related || []).length;
    const en = (enVocab[index].related || []).length;
    if (es !== en) fail(`${at}: vocabulary ${index} lists ${es} related terms in es and ${en} in en`);
  }

  /*
   * Matching row counts is not the same as matching conversations. A three-hand
   * scene can keep six lines in both directions and still hand line six to a
   * different person, which is how one lesson ended up with the Colombian host
   * offering more tea in `es` while the English speaker delivered a note about
   * register in `en`. The shape test calls that drift, and it is right to: the
   * two directions are meant to be the same people having the same exchange.
   *
   * Speakers are compared as a sequence of first-appearance indexes, not by
   * name, because the names deliberately differ between directions.
   */
  const turnOrder = (content) => {
    const seen = new Map();
    return (schema.normalizeContent(content || {}).dialogue || []).map((row) => {
      const name = (row.speaker || "").trim();
      if (!seen.has(name)) seen.set(name, seen.size);
      return seen.get(name);
    }).join(",");
  };
  const esTurns = turnOrder(lesson.es);
  const enTurns = turnOrder(lesson.en);
  if (esTurns !== enTurns) {
    fail(`${at}: the turn order differs between directions (es ${esTurns} vs en ${enTurns}); `
      + "the same people must have the same conversation in both");
  }

  /*
   * Declaring the verb is cheap; putting it in someone's mouth is the lesson.
   * This mirrors test/shape.test.js so a block fails here, in front of the
   * person who can still fix it, rather than in the suite an hour later.
   */
  if (lesson.verb && !SPOKEN_EXEMPT.test(lesson.verb)) {
    const spoken = (schema.normalizeContent(lesson.es || {}).dialogue || [])
      .map((row) => row.target || "").join(" ").toLowerCase();
    const roots = verbStems(lesson.verb);
    if (roots.length && !roots.some((root) => spoken.includes(root))) {
      fail(`${at}: claims "${lesson.verb}" but no es dialogue line contains any of ${roots.join(", ")}`);
    }
  }
}

/*
 * Answer position is checked across the whole catalogue by test/practice.test.js,
 * so a single block cannot be judged against the 60% ceiling on its own. What it
 * can be judged on is whether it uses all three positions at all -- a block that
 * answers 0 every time will drag the shared spread whatever the rest does.
 */
for (const position of [0, 1, 2]) {
  if (!answerSpread.get(position)) {
    fail(`no question in this block has its answer at position ${position}; `
      + `spread is ${JSON.stringify([...answerSpread.entries()].sort())}`);
  }
}

/*
 * Prose in the wrong language. The two directions are mirrors: the `es`
 * direction explains in English, the `en` direction explains in Spanish,
 * because in each case the reader does not yet speak what is being taught.
 * Get it backwards and every structural check still passes -- the shape is
 * perfect and only the words are unreadable by the person the lesson is for.
 */
for (const lesson of lessons) {
  for (const direction of directions) {
    for (const problem of wrongLanguage(lesson[direction], direction)) {
      fail(`${lesson.id} ${direction}.${problem.trail}: must be ${problem.want}, reads as `
        + `${problem.got} — "${problem.text.slice(0, 70)}${problem.text.length > 70 ? "…" : ""}"`);
    }
  }
}

/*
 * Where the Spanish-direction scenes are set. Every brief asked authors to look
 * beyond the two biggest cities and every brief was ignored: across the first
 * 72 lessons Medellín and Bogotá drew 511 mentions while Pasto, Cúcuta, Neiva,
 * Tunja, the Llanos, Chocó and the Amazon drew none at all. A course that claims
 * to teach Colombian Spanish cannot be a course about two cities, so the
 * instruction stops being advice here and becomes a check.
 *
 * Only the `es` direction is judged. The `en` direction teaches English to
 * Colombian speakers and is deliberately set abroad, so its `where` says Toronto
 * or Manchester and has nothing to do with Colombian regional spread.
 */
const OVERUSED_SETTING = /(Bogot|Medell)/i;
const esWhere = (lesson) => lesson.es?.setting?.where || "";

/*
 * Blocks 01-22 were written before this rule existed and 18 of them break it.
 * They are not silently forgiven and they are not bulk-rewritten either: some of
 * those settings are load-bearing. Ajiaco really is a Bogotá dish and a paisa
 * sancocho really does belong in Antioquia, so find-and-replacing the city name
 * would trade a spread problem for a factual one. The incidental cases — a
 * generic corner shop, a bank counter, a bus stop that could be anywhere — are
 * being relocated one at a time under the `city-spread-backfill` todo. Until
 * then they are listed here so a sweep of the whole corpus stays quiet and a
 * genuinely new regression is visible instead of being lost in known noise.
 */
const GRANDFATHERED = new Set([
  "data/lessons/02-foundation-state.js", "data/lessons/03-foundation-ability.js",
  "data/lessons/04-foundation-perception.js", "data/lessons/05-foundation-meeting.js",
  "data/lessons/06-foundation-obligation.js", "data/lessons/07-foundation-opinion.js",
  "data/lessons/08-foundation-conversation.js", "data/lessons/09-foundation-finding.js",
  "data/lessons/10-foundation-daily-life.js", "data/lessons/11-foundation-reading-writing.js",
  "data/lessons/12-foundation-learning.js", "data/lessons/13-foundation-asking.js",
  "data/lessons/14-foundation-handling-things.js",
  "data/lessons/15-foundation-starting-finishing.js",
  "data/lessons/16-foundation-coming-and-going.js",
  "data/lessons/17-foundation-carrying-and-leaving.js",
  "data/lessons/20-foundation-buying-and-paying.js",
  "data/lessons/21-foundation-at-the-table.js"
]);

if (!GRANDFATHERED.has(relative)) {
  const overused = lessons.filter((lesson) => OVERUSED_SETTING.test(esWhere(lesson)));
  if (overused.length > 1) {
    fail(
      `${overused.length} of this block's ${lessons.length} Spanish scenes are set in Bogotá or `
      + `Medellín (${overused.map((lesson) => lesson.id).join(", ")}). At most one per block. `
      + `Those two cities already carry more than half the course while whole regions carry none. `
      + `Move the others somewhere barely represented — the Caribbean coast, Santander, Nariño, `
      + `Huila, Tolima, Caldas, the Llanos, Chocó or the Amazon — and keep the dialect general `
      + `unless you are certain a usage is genuinely local. Do not invent regionalisms to `
      + `decorate a new setting; a normal conversation that happens to be in Neiva is the goal.`
    );
  }

  /*
   * Three lessons that all open in the same place read as one long scene rather
   * than three, and it wastes the chance to show a second or third region.
   */
  const places = lessons.map((lesson) => esWhere(lesson).split(",")[0].trim().toLowerCase());
  const duplicatePlace = places.find((place, index) => place && places.indexOf(place) !== index);
  if (duplicatePlace) {
    fail(
      `more than one Spanish scene in this block is set in "${duplicatePlace}". Give each of the `
      + `three lessons its own location so the block covers three places, not one.`
    );
  }
}

if (problems.length) {
  console.error(`${target}: ${problems.length} problem(s)\n`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

const verbs = lessons.map((lesson) => lesson.verb).join(", ");
console.log(`${target}: ${lessons.length} lesson(s) OK — ${verbs}`);
