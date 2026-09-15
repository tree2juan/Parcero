/*
 * Course handbook tests.
 *
 * data/course-plan.js is the file an administrator reads before deciding
 * whether this course may be timetabled, and it is the only file in the repo
 * that makes claims instead of teaching. Claims rot: the weighting drifts away
 * from what the engine actually does, a limit stops being true, a paragraph
 * gets written in one language and pasted into the other.
 *
 * So these tests check three different kinds of thing. That the structure is
 * whole, because a missing section renders as nothing at all rather than as an
 * error. That the two languages are genuinely two languages, because a
 * translation pair with the same text on both sides is the failure this repo
 * keeps producing. And that the numbers agree with the code they describe —
 * the handbook says a checkpoint is worth 40% and an exam 60%, and if
 * assessment.js ever disagrees, one of them is lying to a registrar.
 */
const test = require("node:test");
const assert = require("node:assert");

const { COURSE_PLAN } = require("../data/course-plan.js");
const { classify } = require("../scripts/prose-language.js");

/* Every {en, es} pair in the file, with a trail so a failure names itself. */
function pairs(node, trail, out) {
  out = out || [];
  if (!node || typeof node !== "object") return out;
  if (typeof node.en === "string" && typeof node.es === "string") {
    out.push({ trail, en: node.en, es: node.es });
    return out;
  }
  if (Array.isArray(node)) {
    node.forEach((item, i) => pairs(item, `${trail}[${i}]`, out));
    return out;
  }
  for (const key of Object.keys(node)) pairs(node[key], trail ? `${trail}.${key}` : key, out);
  return out;
}
const ALL = pairs(COURSE_PLAN, "", []);

test("the handbook has every section the teach view renders", () => {
  for (const key of ["about", "hours", "assessment", "running", "limits"]) {
    assert.ok(COURSE_PLAN[key], `COURSE_PLAN.${key} is missing`);
  }
  for (const key of ["title", "summary", "audience", "approach"]) {
    assert.ok(COURSE_PLAN.about[key], `about.${key} is missing`);
  }
  for (const key of ["basis", "assessment", "pacing"]) {
    assert.ok(COURSE_PLAN.hours[key], `hours.${key} is missing`);
  }
  for (const key of ["lead", "pieces", "speaking", "honesty"]) {
    assert.ok(COURSE_PLAN.assessment[key], `assessment.${key} is missing`);
  }
  assert.ok(Array.isArray(COURSE_PLAN.running.classroom), "running.classroom is not a list");
  assert.ok(Array.isArray(COURSE_PLAN.running.alone), "running.alone is not a list");
  assert.ok(Array.isArray(COURSE_PLAN.limits), "limits is not a list");
});

test("both languages are present, written out, and not each other", () => {
  assert.ok(ALL.length > 25, `expected a handbook, found ${ALL.length} bilingual strings`);
  for (const { trail, en, es } of ALL) {
    assert.ok(en.trim().length > 0, `${trail}.en is empty`);
    assert.ok(es.trim().length > 0, `${trail}.es is empty`);
    /*
     * The handbook is the one part of the teaching layer that IS a translation
     * pair — unlike the module notes, where the two sides plan two different
     * classes. So the sides must say the same thing, which means they must not
     * be the same string.
     */
    assert.notStrictEqual(en, es, `${trail} is the same text in both languages`);
  }
});

test("the English side reads as English and the Spanish side as Spanish", () => {
  /*
   * classify() answers "unknown" on anything short, and that is fine: the
   * failure being hunted is a whole paragraph pasted into the wrong slot, not
   * a four-word label.
   */
  let judged = 0;
  for (const { trail, en, es } of ALL) {
    const enLang = classify(en);
    const esLang = classify(es);
    if (enLang !== "unknown") judged += 1;
    assert.notStrictEqual(enLang, "spanish", `${trail}.en is written in Spanish`);
    assert.notStrictEqual(esLang, "english", `${trail}.es is written in English`);
  }
  assert.ok(judged > 15, `the classifier could only judge ${judged} strings, so it proved little`);
});

test("the assessment weights are a whole grade and match the engine", () => {
  const pieces = COURSE_PLAN.assessment.pieces;
  const total = pieces.reduce((sum, piece) => sum + piece.weight, 0);
  assert.strictEqual(total, 100, `the weights add up to ${total}, not 100`);

  const byId = Object.fromEntries(pieces.map((p) => [p.id, p]));
  for (const id of ["practice", "checkpoint", "exam"]) {
    assert.ok(byId[id], `the handbook never describes ${id}`);
  }
  /*
   * Practice is deliberately worth nothing. It is the one place a student is
   * supposed to be wrong, and weighting it would teach them to avoid it.
   */
  assert.strictEqual(byId.practice.weight, 0, "practice must not carry a grade");
  assert.ok(byId.exam.weight > byId.checkpoint.weight,
    "the band exam should outweigh a single module checkpoint");
});

test("the pass marks the handbook quotes are the pass marks the engine uses", () => {
  /*
   * assessment.js is a browser script: it hangs itself off the global rather
   * than off module.exports, so requiring it returns an empty object and every
   * constant read from that object is undefined. Which is exactly what the
   * first draft of this test did — it compared a handbook figure against NaN
   * and would have passed for any number the handbook cared to print.
   */
  const vm = require("node:vm");
  const fs = require("node:fs");
  const path = require("node:path");
  const sandbox = { window: {} };
  sandbox.window.window = sandbox.window;
  vm.runInNewContext(
    fs.readFileSync(path.join(__dirname, "..", "assessment.js"), "utf8"),
    sandbox,
    { filename: "assessment.js" }
  );
  const engine = sandbox.window.ParceroAssessment;
  assert.ok(engine, "assessment.js did not publish ParceroAssessment");

  const percent = Math.round(engine.EXAM_PASS * 100);
  assert.ok(Number.isFinite(percent), "the engine has no exam pass mark to compare against");
  const say = COURSE_PLAN.assessment.pieces.find((p) => p.id === "exam").use.en;
  assert.ok(say.includes(`${percent}%`),
    `the handbook does not quote the exam pass mark the engine enforces (${percent}%)`);
  assert.ok(engine.EXAM_PASS > engine.CHECKPOINT_PASS,
    "the handbook says the exam is the harder paper, so the engine must agree");
});

test("every list uses ids, and the ids are unique", () => {
  const lists = {
    "assessment.pieces": COURSE_PLAN.assessment.pieces,
    "running.classroom": COURSE_PLAN.running.classroom,
    "running.alone": COURSE_PLAN.running.alone,
    limits: COURSE_PLAN.limits
  };
  for (const [name, list] of Object.entries(lists)) {
    assert.ok(list.length >= 3, `${name} has only ${list.length} entries`);
    const ids = list.map((item) => item.id);
    for (const id of ids) assert.ok(id, `${name} has an entry with no id`);
    assert.strictEqual(new Set(ids).size, ids.length, `${name} repeats an id`);
  }
});

test("the handbook never offers C1 or C2", () => {
  /*
   * The course stops at B2 and says so. This is the file most likely to grow a
   * casual "and on to C1" in a sentence about progression, which would be a
   * promise nothing in the repo can keep.
   *
   * The one place the names may appear is the limit that exists to deny them,
   * so that entry is lifted out and checked separately rather than the whole
   * file being scanned for a bare substring — which is what the first draft
   * did, and it failed on the sentence "There is no C1 or C2 here".
   */
  const ceiling = COURSE_PLAN.limits.find((l) => l.id === "ceiling");
  assert.ok(ceiling, "the handbook does not state where the course stops");
  assert.match(ceiling.text.en, /B2/, "the ceiling limit does not name B2");
  assert.match(ceiling.text.en, /no C1 or C2/i, "the ceiling limit does not rule out C1 and C2");

  const rest = COURSE_PLAN.limits.filter((l) => l.id !== "ceiling");
  const text = JSON.stringify({ ...COURSE_PLAN, limits: rest });
  assert.ok(!/\bC1\b/.test(text), "the handbook mentions C1 outside the limit that rules it out");
  assert.ok(!/\bC2\b/.test(text), "the handbook mentions C2 outside the limit that rules it out");
});

test("the limits state the things a school has to decide about", () => {
  const ids = COURSE_PLAN.limits.map((l) => l.id);
  /*
   * Each of these is a question a department has actually asked, and each has
   * an answer a school needs before adopting rather than after.
   */
  for (const id of ["ceiling", "audio", "variety", "mature", "privacy"]) {
    assert.ok(ids.includes(id), `the handbook never addresses "${id}"`);
  }
});

test("the handbook does not claim the app assesses speaking", () => {
  /*
   * There is no audio and no recording, so any speaking mark is a human
   * judgment against the rubric. The handbook has to say that out loud,
   * because a school that assumes otherwise reports a score nobody measured.
   */
  const speaking = COURSE_PLAN.assessment.speaking.en;
  assert.match(speaking, /not (scored|assessed|marked)/i,
    "the handbook does not say that the app cannot score speaking");
  assert.match(COURSE_PLAN.assessment.speaking.es, /no la califica|no se califica|no puede/i,
    "the Spanish side does not say that the app cannot score speaking");
});
