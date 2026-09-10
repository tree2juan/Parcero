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
const { findViolations, targetFiles } = require("../scripts/check-american-english.js");

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
});
