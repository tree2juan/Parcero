/*
 * Machine-translated prose has to be distinguishable from prose a human wrote.
 *
 * `review: "pending"` is per-lesson and is already "pending" for all eight, so
 * it cannot say which *fields* no human has ever read. Without something finer,
 * unreviewed machine Spanish is indistinguishable from authored Spanish that is
 * merely awaiting sign-off, inside a feature whose whole visible promise is that
 * regional wording gets settled by native speakers. That is worse than not
 * having the translation at all, so the record below is load-bearing.
 */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const bundle = `${read("data/lessons.js")}\n${read("data/provenance.js")}\n({ lessons, provenance });`;
const { lessons, provenance } = vm.runInNewContext(bundle, {}, { filename: "parcero-provenance-bundle.js" });

// Read a recorded path without reusing the applier's own accessor. A test that
// reads through the code it is checking cannot fail when that code is wrong.
const resolve = (node, trail) => trail.split(".").reduce((current, part) => {
  if (current == null) return current;
  const match = part.match(/^([A-Za-z_$][\w$]*)((\[\d+\])*)$/);
  if (!match) return undefined;
  let value = current[match[1]];
  for (const index of match[2].match(/\d+/g) || []) {
    if (value == null) return undefined;
    value = value[Number(index)];
  }
  return value;
}, node);

test("the provenance record names real lessons and real fields", () => {
  assert.ok(provenance && typeof provenance === "object", "data/provenance.js must expose a provenance object");
  assert.ok(typeof provenance.status === "string" && provenance.status.trim(), "the record must say what it is recording");

  const ids = new Set(lessons.map((lesson) => lesson.id));
  const unknown = Object.keys(provenance.fields).filter((id) => !ids.has(id));
  assert.deepStrictEqual(unknown, [], "provenance names a lesson that does not exist");

  const unresolved = [];
  for (const [id, directions] of Object.entries(provenance.fields)) {
    const lesson = lessons.find((entry) => entry.id === id);
    for (const [direction, paths] of Object.entries(directions)) {
      assert.ok(lesson[direction], `${id} has no ${direction} block`);
      assert.ok(Array.isArray(paths), `${id}.${direction} must be an array of paths`);
      for (const trail of paths) {
        const value = resolve(lesson[direction], trail);
        if (typeof value !== "string" || !value.trim()) unresolved.push(`${id}/${direction}/${trail}`);
      }
    }
  }
  assert.deepStrictEqual(unresolved, [],
    "every recorded path must resolve to real text; a path that has moved makes the marker lie about what is unreviewed");
});

test("the provenance record is not empty while machine translation is shipped", () => {
  /*
   * The converse leg. "Every recorded path resolves" passes perfectly on an
   * empty record, so on its own it would go green the moment someone dropped
   * the record while keeping the translations -- the exact silent
   * under-coverage this file exists to prevent.
   */
  const recorded = Object.values(provenance.fields).flatMap((directions) => Object.values(directions).flat());
  assert.ok(recorded.length > 0, "provenance is empty; either nothing is machine-translated, or the record has been lost");

  const covered = new Set(Object.keys(provenance.fields));
  /*
   * `lessons` comes from a vm context, so arrays derived from it carry that
   * realm's Array.prototype and deepStrictEqual rejects them against a plain
   * [] no matter what they contain -- a red that reports nothing about the
   * property being checked. Spreading brings the value back to this realm so
   * the comparison is about content again.
   */
  const missing = [...lessons.filter((lesson) => !covered.has(lesson.id)).map((lesson) => lesson.id)];
  assert.deepStrictEqual(missing, [],
    "every lesson carrying machine-translated prose must appear in the record");
});

test("the marker is rendered, and rendered in the reader's own language", () => {
  const html = read("index.html");
  const app = read("app.js");
  const i18n = read("i18n.js");

  assert.ok(html.includes('id="lesson-provenance"'), "the page must carry the marker element");
  assert.ok(html.includes('data-i18n="provenance.machine"'), "the marker text must go through i18n");
  assert.match(app, /\$\("#lesson-provenance"\)\.hidden = /, "app.js must decide whether to show the marker");
  assert.match(app, /renderProvenance\(lesson\)/, "render() must call it for the current lesson");

  /*
   * The direction that shows this marker is "en" -- a Spanish speaker learning
   * English -- and that interface is in Spanish. A marker that appeared only in
   * English would be the same defect one layer up: an English string on a
   * Spanish page, telling the one person who can act on it, in the one language
   * they did not choose.
   */
  for (const key of ["provenance.machine", "provenance.count", "provenance.helpCheck"]) {
    const occurrences = i18n.split(`"${key}":`).length - 1;
    assert.strictEqual(occurrences, 2, `${key} must be defined in both language blocks, found ${occurrences}`);
  }
  assert.match(i18n, /"provenance\.machine": "Las explicaciones/, "the Spanish interface needs the Spanish wording");
});

test("a reader can act on the marker", () => {
  const ui = read("review-ui.js");
  assert.match(ui, /\$\("#lesson-provenance-start"\)\.addEventListener/,
    "saying the text is unverified is only useful if the reader can then report it");
});

/*
 * The converse of "everything recorded is real": is everything real recorded?
 *
 * The extractor that produced the translations built its field list by
 * inclusion, and an inclusion list omits silently -- it shipped with `title`
 * and `situation` untranslated on all eight lessons, which is the most visible
 * prose in the app (app.js renders them into the heading, and every title into
 * the lesson nav). Nothing was red, because every path the record *did* name
 * resolved perfectly.
 *
 * So this walks the direction's own data instead of a list, and requires every
 * string to be either recorded as machine-translated or argued out below by
 * slot. Adding a field to a lesson makes this fail until someone decides which
 * it is, which is the only moment the question is cheap to answer.
 */
const NOT_TRANSLATED = [
  // The English actually being taught. Translating these would delete the lesson.
  ["dialogue[].target", "the English line the learner is here to learn"],
  ["vocabulary[].term", "the English expression being taught"],
  ["vocabulary[].related[]", "further English expressions"],
  ["vocabulary[].example.target", "an English example sentence"],
  ["variations[].form", "an English variant being taught"],
  ["pitfalls[].mistake", "the English mis-phrasing being warned about"],
  ["pitfalls[].sayInstead", "the English repair for it"],

  // Authored in Spanish from the start, for this direction's Spanish reader.
  ["dialogue[].translation", "already Spanish: the gloss of the English line"],
  ["dialogue[].literal", "already Spanish: the word-for-word reading"],
  ["dialogue[].pronunciation", "a respelling aimed at Spanish readers"],
  ["vocabulary[].literal", "already Spanish"],
  ["vocabulary[].example.translation", "already Spanish"],

  // Not prose.
  ["dialogue[].speaker", "a person's name"],
  ["address.form", "an enum rendered through t() -- app.js:166 maps it to address.form.* keys"],

  /*
   * `register` is a different case and the reason matters: it is NOT routed
   * through t(). app.js:209 and app.js:228 print it raw inside a tag, so a
   * Spanish reader sees "polite neutral" in English. That is a live defect, not
   * an acceptable exclusion -- but it belongs to the i18n migration of
   * register/regionality/level already in flight, and translating the strings
   * here would mean migrating the same fields twice, with two chances for the
   * data and the labels to drift apart. Excused as out of scope, not as fine.
   */
  ["vocabulary[].register", "rendered raw in English (app.js:209); belongs to the in-flight register i18n migration"],
  ["variations[].register", "rendered raw in English (app.js:228); same migration"],

  /*
   * Options belonging to a question that asks which English utterance fits.
   * Translating them makes the question unanswerable, so three of these are
   * deliberately untouched English.
   *
   * Honest limitation: this excuses the slot, so it would not catch a question
   * whose options were *all* wrongly translated -- only the mixed state below.
   * Stating that rather than implying wider cover.
   */
  ["practiceExtra[].choices[]", "options under test in a which-utterance question"],
];

const slotOf = (trail) => trail.replace(/\[\d+\]/g, "[]");

test("every string a lesson renders is either translated or argued out", () => {
  const excused = new Map(NOT_TRANSLATED);
  const strays = [];
  let walked = 0;

  const walk = (node, trail, recorded) => {
    if (typeof node === "string") {
      walked += 1;
      if (recorded.has(trail) || excused.has(slotOf(trail))) return;
      strays.push(`${trail}: ${JSON.stringify(node).slice(0, 60)}`);
      return;
    }
    if (Array.isArray(node)) { node.forEach((item, i) => walk(item, `${trail}[${i}]`, recorded)); return; }
    if (node && typeof node === "object") {
      for (const [key, value] of Object.entries(node)) walk(value, trail ? `${trail}.${key}` : key, recorded);
    }
  };

  for (const lesson of lessons) {
    const recorded = new Set(((provenance.fields[lesson.id] || {}).en) || []);
    walk(lesson.en, "", recorded);
  }

  assert.ok(walked > 500, `the walker found only ${walked} strings; it is not reaching the content`);
  assert.deepStrictEqual([...new Set(strays.map(slotOf))], [],
    `these render to a Spanish reader but are neither translated nor excused:\n  ${strays.slice(0, 12).join("\n  ")}`);
});

test("a question's options are translated together or not at all", () => {
  const mixed = [];
  for (const lesson of lessons) {
    const recorded = new Set(((provenance.fields[lesson.id] || {}).en) || []);
    (lesson.en.practiceExtra || []).forEach((question, index) => {
      const marks = (question.choices || []).map((_, i) => recorded.has(`practiceExtra[${index}].choices[${i}]`));
      const translated = marks.filter(Boolean).length;
      // Half-translated options are a question in two languages, which reveals
      // the answer by language rather than by meaning.
      if (translated !== 0 && translated !== marks.length) {
        mixed.push(`${lesson.id} practiceExtra[${index}]: ${translated}/${marks.length}`);
      }
    });
  }
  assert.deepStrictEqual([...mixed], [], `options must share one language: ${mixed.join(", ")}`);
});
