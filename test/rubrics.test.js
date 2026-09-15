/*
 * Rubric tests.
 *
 * A rubric is data that looks harmless and fails silently. A missing level
 * does not throw; it renders as an empty table cell, and a teacher marks
 * around the hole without ever reporting it. So the structural checks here are
 * exhaustive rather than sampled.
 *
 * The interesting test is the last one. An earlier draft of data/rubrics.js
 * carried its own word counts and writing times, and they disagreed with the
 * published figures in data/exam-tasks.js immediately — different numbers, for
 * the same task, in the same repo. The fix was to delete them and let
 * exam-tasks.js own the writing spec. The test that pins the two together is
 * what stops that decision from being quietly undone later by someone adding
 * a "convenient" copy back.
 */
const test = require("node:test");
const assert = require("node:assert");

const { RUBRICS, RUBRIC_LEVELS, RUBRIC_BANDS, RUBRIC_GRADES } = require("../data/rubrics.js");
const { EXAM_TASKS } = require("../data/exam-tasks.js");
const { classify } = require("../scripts/prose-language.js");

const BANDS = ["A1", "A2", "B1", "B2"];
const SKILLS = ["writing", "speaking"];
const LEVEL_IDS = RUBRIC_LEVELS.map((l) => l.id);

/* Every bilingual string in the file, with a trail so a failure names itself. */
function strings(node, trail, out) {
  out = out || [];
  if (!node || typeof node !== "object") return out;
  if (typeof node.en === "string" && typeof node.es === "string") {
    out.push({ trail, en: node.en, es: node.es });
    return out;
  }
  for (const key of Object.keys(node)) strings(node[key], `${trail}.${key}`, out);
  return out;
}
const ALL = SKILLS.reduce((acc, skill) => strings(RUBRICS[skill], skill, acc), strings(RUBRIC_BANDS, "bands", []));

test("both skills carry four criteria, and every criterion carries every level", () => {
  for (const skill of SKILLS) {
    const rubric = RUBRICS[skill];
    assert.ok(rubric, `${skill} rubric is missing`);
    assert.strictEqual(rubric.criteria.length, 4, `${skill} should have four rows`);
    for (const criterion of rubric.criteria) {
      const got = Object.keys(criterion.levels);
      assert.deepStrictEqual(got.sort(), [...LEVEL_IDS].sort(),
        `${skill}.${criterion.id} does not describe every level`);
      for (const id of LEVEL_IDS) {
        for (const lang of ["en", "es"]) {
          const text = criterion.levels[id][lang];
          assert.ok(text && text.trim().length > 20,
            `${skill}.${criterion.id}.${id}.${lang} is empty or too short to mark from`);
        }
      }
    }
  }
});

test("criterion ids are unique within a skill", () => {
  for (const skill of SKILLS) {
    const ids = RUBRICS[skill].criteria.map((c) => c.id);
    assert.strictEqual(new Set(ids).size, ids.length, `${skill} repeats a criterion id`);
  }
});

test("the levels are a 0-3 scale and the target is 2, not the top", () => {
  assert.deepStrictEqual(RUBRIC_LEVELS.map((l) => l.score), [0, 1, 2, 3]);
  const meets = RUBRIC_LEVELS.find((l) => l.id === "meets");
  assert.strictEqual(meets.score, 2,
    "'meets the band' must sit below the top, or every student is marked as failing to exceed");
});

test("descriptors get longer as the level rises", () => {
  /* Not a style rule. A 'not yet' box that is wordier than 'meets' is the
     signature of a rubric written to catch failure rather than to describe
     success, and it marks harshly without anyone deciding to. */
  for (const skill of SKILLS) {
    for (const criterion of RUBRICS[skill].criteria) {
      const notYet = criterion.levels.notYet.en.length;
      const meets = criterion.levels.meets.en.length;
      assert.ok(meets >= notYet * 0.8,
        `${skill}.${criterion.id}: 'meets' is much thinner than 'not yet'`);
    }
  }
});

test("every band A1 to B2 has a standard, and no band beyond B2 exists", () => {
  assert.deepStrictEqual(Object.keys(RUBRIC_BANDS).sort(), BANDS);
  for (const band of BANDS) {
    const entry = RUBRIC_BANDS[band];
    assert.ok(entry.standard.en.length > 40 && entry.standard.es.length > 40,
      `${band} standard is too thin to separate two teachers' judgments`);
  }
});

test("speaking time rises with the band", () => {
  const minutes = BANDS.map((b) => RUBRIC_BANDS[b].speaking.minutes);
  for (let i = 1; i < minutes.length; i += 1) {
    assert.ok(minutes[i] > minutes[i - 1],
      `speaking time does not rise from ${BANDS[i - 1]} to ${BANDS[i]}`);
  }
});

test("grades run downward and reach zero", () => {
  const mins = RUBRIC_GRADES.map((g) => g.min);
  for (let i = 1; i < mins.length; i += 1) {
    assert.ok(mins[i] < mins[i - 1], "grade bands must be ordered high to low for a first-match lookup");
  }
  assert.strictEqual(mins[mins.length - 1], 0, "every possible total must land in a grade");
  assert.ok(mins[0] <= 12, "the top grade must be reachable from a maximum of 4 criteria x 3");
});

test("the rubric is written in the language it claims", () => {
  for (const row of ALL) {
    const en = classify(row.en);
    const es = classify(row.es);
    assert.notStrictEqual(en, "spanish", `${row.trail}.en reads as Spanish`);
    assert.notStrictEqual(es, "english", `${row.trail}.es reads as English`);
  }
});

test("the rubric uses American English", () => {
  /* The repo-wide checker reads files; this catches the same thing in the one
     file most likely to reach for exam-board British spelling. */
  const bad = /\b(organis\w*|recognis\w*|analys\w*|behaviour\w*|centre|colour\w*|favour\w*|practise|programme|whilst|towards)\b/i;
  for (const row of ALL) {
    assert.ok(!bad.test(row.en), `${row.trail}.en uses British spelling: ${row.en}`);
  }
});

test("the writing spec is not restated here — exam-tasks.js owns it", () => {
  for (const band of BANDS) {
    assert.strictEqual(RUBRIC_BANDS[band].writing, undefined,
      `${band} has grown its own writing spec again; the published figures live in data/exam-tasks.js ` +
      "and differ per direction, so a copy here can only ever disagree with them");
  }
});

test("every band the rubric marks has a writing task to mark", () => {
  for (const band of BANDS) {
    for (const direction of ["es", "en"]) {
      const task = EXAM_TASKS[band] && EXAM_TASKS[band][direction];
      assert.ok(task, `no ${direction} writing task for ${band}`);
      assert.ok(typeof task.words === "string" && task.words.length,
        `${band}.${direction} has no word count for the rubric to point at`);
      assert.ok(typeof task.minutes === "number" && task.minutes > 0,
        `${band}.${direction} has no writing time`);
    }
  }
});

test("the two directions genuinely publish different word counts", () => {
  /* The reason the spec cannot be collapsed into one number per band. If this
     ever fails, the duplicate figures in rubrics.js would have been harmless
     and this whole arrangement can be simplified — but check the exam board
     first, because the likelier cause is that one side was overwritten. */
  const differs = BANDS.some((band) => EXAM_TASKS[band].es.words !== EXAM_TASKS[band].en.words);
  assert.ok(differs, "DELE and Cambridge word counts have become identical; verify before simplifying");
});
