/*
 * Which lesson prose was machine-translated, recorded so that it can be checked.
 *
 * This used to drive a badge on the page telling readers a lesson had not been
 * checked by a native speaker. That disclosure is gone -- errors are reported
 * through the in-app reporting feature instead of being pre-announced -- and
 * data/provenance.js is no longer loaded by the page at all.
 *
 * The record is kept because the coverage check at the bottom of this file is
 * load-bearing on its own: it walks every string a lesson renders and requires
 * each one to be either recorded as translated or argued out by slot. That is
 * what caught `title` and `situation` shipping untranslated, and it works the
 * same whether or not anything is displayed to a reader.
 */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const { lessonSource, read } = require("./data-source.js");
const { NOT_TRANSLATED, slotOf } = require("../scripts/translated-slots.js");

const root = path.join(__dirname, "..");

/*
 * Every lesson file, not just data/lessons.js. The block files under
 * data/lessons/ hold lessons too, and reading only the declaration file meant
 * a whole block could ship untranslated English prose to a Spanish reader with
 * this suite green -- which is exactly how the first block did ship.
 */
const bundle = `${lessonSource()}\n${read("data/provenance.js")}\n({ lessons, provenance });`;
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

test("the record is not loaded by the page", () => {
  /*
   * The badge this record used to feed is gone, so the file must not be shipped
   * to readers either -- leaving the script tag in place would keep sending a
   * translation-status record to every visitor for nothing.
   */
  const html = read("index.html");
  assert.ok(!html.includes("data/provenance.js"), "the page must not load the provenance record any more");
  assert.ok(!html.includes("lesson-provenance"), "the provenance badge markup must be gone from the page");
  assert.ok(!read("app.js").includes("renderProvenance"), "app.js must not still render the badge");
  assert.ok(!read("i18n.js").includes('"provenance.'), "the provenance interface strings must be gone");
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
/* The slot spec lives in scripts/translated-slots.js, shared with the writer. */

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

/*
 * The record is generated, so the only way it can be wrong is by being stale.
 * Regenerating is one command, but nobody runs a command they do not know
 * exists -- so failing here is what makes a new lesson's unreviewed Spanish
 * impossible to ship silently.
 */
test("the provenance record is not stale", () => {
  const result = require("node:child_process").spawnSync(
    process.execPath, [path.join(root, "scripts", "record-provenance.js"), "--check"],
    { encoding: "utf8" }
  );
  assert.strictEqual(result.status, 0,
    `${result.stdout || ""}${result.stderr || ""}`.trim() || "provenance check failed");
});
