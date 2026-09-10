/*
 * The audience is American, and specifically Texan.
 *
 * The corpus was authored in British English and set in Canada before the
 * product was retargeted. Both are invisible defects to whoever writes the
 * next lesson: "neighbour" and "Toronto" read as perfectly normal English,
 * so nothing about them looks wrong in review. The only thing that reliably
 * catches a drift back is a test.
 *
 * This asserts unambiguous markers only. Context-dependent words such as
 * "lift", "flat", "queue" and "garden" have real American uses and are not
 * banned here — see scripts/check-american-english.js for why.
 */
const test = require("node:test");
const assert = require("node:assert");
const { findViolations, targetFiles, scanText, BRITISH, CANADIAN } = require("../scripts/check-american-english.js");

function summarise(violations) {
  const byTerm = new Map();
  for (const v of violations) {
    const k = v.term.toLowerCase();
    if (!byTerm.has(k)) byTerm.set(k, []);
    byTerm.get(k).push(v);
  }
  return [...byTerm.entries()]
    .sort((a, b) => b[1].length - a[1].length)
    .map(([term, list]) => `${term} x${list.length} (${list[0].file}: …${list[0].context}…)`)
    .join("\n  ");
}

test("the corpus is written in American English, not British", () => {
  const { BRITISH } = require("../scripts/check-american-english.js");
  const banned = new Set(BRITISH.map((w) => w.toLowerCase()));
  const found = findViolations().filter((v) => banned.has(v.term.toLowerCase()));
  assert.strictEqual(
    found.length, 0,
    `British spellings found — the audience is American:\n  ${summarise(found)}`
  );
});

test("the English track is set in Texas, not Canada", () => {
  const { CANADIAN } = require("../scripts/check-american-english.js");
  const banned = new Set(CANADIAN.map((w) => w.toLowerCase()));
  const found = findViolations().filter((v) => banned.has(v.term.toLowerCase()));
  assert.strictEqual(
    found.length, 0,
    `Canadian references found — the English track is set in Texas:\n  ${summarise(found)}`
  );
});

/* A guard that scans nothing would pass forever. */
test("the check actually reads the corpus", () => {
  const files = targetFiles();
  assert.ok(files.length > 70, `expected the corpus, got ${files.length} files`);
  assert.ok(files.some((f) => f.startsWith("data/lessons/")), "lesson blocks must be scanned");
  assert.ok(files.some((f) => f.startsWith("data/lexicon/")), "lexicon blocks must be scanned");
  assert.ok(files.includes("data/lessons.js"), "the aggregated corpus must be scanned");
  assert.ok(files.includes("app.js"), "UI strings must be scanned");
});

/*
 * Counting scanned files proves the guard opened the corpus. It does NOT prove
 * the matcher works, and that distinction cost us a whole migration.
 *
 * The original matcher wrapped every term in \b...\b. \b is defined against
 * ASCII [A-Za-z0-9_], so between "á" and a space there is no boundary at all
 * and /\bCanadá\b/ can never match. 173 occurrences of "Canadá" sat in the
 * corpus while the guard reported it clean, because the identical bug was
 * written into both the migration script and the guard that was supposed to
 * catch it. Two copies of one defect cannot check each other.
 *
 * So: assert against known-bad strings, including accented ones.
 */
test("the matcher actually detects the terms it bans", () => {
  const cases = [
    ["Barb está en Canadá horneando.", "canadá", "an accented term — the bug that started this"],
    ["Vive en Canadá.", "canadá", "accented term before a period"],
    ["¿Canadá o Texas?", "canadá", "accented term after punctuation"],
    ["She makes butter tarts.", "butter tarts", "a multi-word term"],
    ["He ordered a double-double.", "double-double", "a hyphenated term"],
    ["The neighbour waved.", "neighbour", "a plain British spelling"],
    ["It was cancelled.", "cancelled", "a doubled-consonant British spelling"],
    ["A labelled diagram.", "labelled", "the spelling that hid in app.js"]
  ];
  for (const [text, expected, why] of cases) {
    const hits = scanText(text, [...BRITISH, ...CANADIAN]).map((h) => h.term.toLowerCase());
    assert.ok(
      hits.includes(expected),
      `missed "${expected}" in ${JSON.stringify(text)} — ${why}. Got: [${hits.join(", ")}]`
    );
  }
});

/*
 * The mirror image: a matcher that flags everything is just as useless, because
 * the first false positive teaches everyone to ignore the guard. "continuity"
 * contains "inuit" and "withstands" contains "hst" — both were caught being
 * reported as Canadian markers by an unbounded matcher.
 */
test("the matcher does not fire on innocent words", () => {
  const innocent = [
    ["There is continuity between the two lessons.", "'inuit' inside 'continuity'"],
    ["The argument withstands scrutiny.", "'hst' inside 'withstands'"],
    ["The takeaway is that pasar bends to context.", "'takeaway' meaning 'the key point'"]
  ];
  for (const [text, why] of innocent) {
    const hits = scanText(text, [...BRITISH, ...CANADIAN]).map((h) => h.term);
    assert.strictEqual(
      hits.length, 0,
      `false positive on ${JSON.stringify(text)} (${why}). Flagged: [${hits.join(", ")}]`
    );
  }
});
