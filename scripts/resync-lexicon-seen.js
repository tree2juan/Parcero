/*
 * Re-synchronise the `seen` counts in data/lexicon/*.js with the corpus.
 *
 * WHY THIS EXISTS
 * The lexicon gate demands that `seen` equal the real number of times a term
 * is spoken in the lesson dialogue. That is the check which keeps the file
 * honest, but it makes `seen` a derived value with a dependency on every
 * lesson block: adding one lesson can change counts in a file nobody touched.
 * That is not hypothetical. While the lexicon was being written, a new lesson
 * landed and moved `el hambre` from 4 to 5 and `la ventanilla` from 1 to 2.
 *
 * So `seen` needs a recompute step, not hand-editing. Hand-editing a derived
 * number across 243 entries is how a plausible-looking wrong number gets in,
 * which is exactly what the gate was built to stop.
 *
 * This script never invents an entry, never removes one, and never edits any
 * slot except `seen`. If a term is not spoken at all it leaves the entry alone
 * and reports it, because that is a content error for a human to resolve, not
 * a number to quietly patch.
 *
 * Run: node scripts/resync-lexicon-seen.js [--dry]
 */
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const { read, dataSource, lexiconBlockFiles } = require(path.join(root, "test", "data-source.js"));

const dryRun = process.argv.includes("--dry");

/* Every word the course says, counted the same way the gate counts it. If
   these two ever disagree the resync would "fix" files into failing. */
const { lessons } = vm.runInNewContext(`${dataSource({ schema: true })}\n({ lessons });`);
const spoken = new Map();
for (const lesson of lessons) {
  for (const row of lesson.es && lesson.es.dialogue ? lesson.es.dialogue : []) {
    for (const word of String(row.target || "").toLowerCase().match(/[a-záéíóúñü]+/g) || []) {
      spoken.set(word, (spoken.get(word) || 0) + 1);
    }
  }
}

const corpusCount = (term) => {
  const bare = term.toLowerCase().replace(/^(el|la|los|las|un|una)\s+/, "");
  return bare
    .split(/[\s/]+/)
    .filter(Boolean)
    .reduce((sum, word) => sum + (spoken.get(word) || 0), 0);
};

/* The `seen` slot is an integer sitting between the level and the note. Level
   is a closed three-value set, so this anchor cannot drift onto another field.
   A line-level rewrite keeps every byte of the note, accents and CRLF intact,
   which a parse-and-reserialise pass would not. */
const SEEN_ON_LINE = /("(?:foundation|independent|extension)",\s*)(\d+)(\s*,)/;

let filesChanged = 0;
let entriesChanged = 0;
const unspoken = [];
const unmatched = [];

for (const relative of lexiconBlockFiles()) {
  const full = path.join(root, relative);
  const original = fs.readFileSync(full, "utf8");

  const block = vm.runInNewContext(
    `${read("data/taxonomy.js")}\n${read("data/lexicon.js")}\n${original}\n({ lexiconItems, LEXICON_SLOTS });`,
    {},
    { filename: relative }
  );
  const termIndex = block.LEXICON_SLOTS.indexOf("term");
  const seenIndex = block.LEXICON_SLOTS.indexOf("seen");

  /* Walk the entries and the matching lines in step, so each rewrite is tied
     to the entry it belongs to rather than to whichever line matched next. */
  const lines = original.split(/\r?\n/);
  const eol = original.includes("\r\n") ? "\r\n" : "\n";
  const entryLines = [];
  lines.forEach((line, index) => {
    if (SEEN_ON_LINE.test(line)) entryLines.push(index);
  });

  if (entryLines.length !== block.lexiconItems.length) {
    unmatched.push(`${relative}: ${block.lexiconItems.length} entries but ${entryLines.length} rewritable lines`);
    continue;
  }

  let changedHere = 0;
  block.lexiconItems.forEach((item, i) => {
    const term = String(item[termIndex]);
    const actual = corpusCount(term);
    if (actual === 0) {
      unspoken.push(`${relative}: "${term}" is not spoken in any dialogue`);
      return;
    }
    if (actual === item[seenIndex]) return;

    const at = entryLines[i];
    lines[at] = lines[at].replace(SEEN_ON_LINE, `$1${actual}$3`);
    changedHere += 1;
    console.log(`  ${relative}: ${term} ${item[seenIndex]} -> ${actual}`);
  });

  if (changedHere && !dryRun) fs.writeFileSync(full, lines.join(eol), "utf8");
  if (changedHere) {
    filesChanged += 1;
    entriesChanged += changedHere;
  }
}

for (const problem of unmatched) console.error(`UNSAFE ${problem}`);
for (const problem of unspoken) console.error(`CONTENT ${problem}`);

console.log(
  `${dryRun ? "[dry] " : ""}${entriesChanged} seen value(s) resynced across ${filesChanged} file(s)` +
    `${unspoken.length ? `; ${unspoken.length} unspoken term(s) left for a human` : ""}`
);
process.exit(unmatched.length || unspoken.length ? 1 : 0);
