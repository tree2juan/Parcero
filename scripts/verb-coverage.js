/*
 * What of the verb curriculum is taught, and what is next.
 *
 *   node scripts/verb-coverage.js            # summary + the next block to write
 *   node scripts/verb-coverage.js --list     # every verb still unclaimed
 *   node scripts/verb-coverage.js --check    # fail if any verb is claimed twice
 *
 * data/curriculum.js lists 200 verbs and the app renders all of them, which
 * makes it look like all 200 are taught. They are not: a verb is taught only
 * when a lesson names it in its `verb` field. Coverage used to be guessed by
 * searching lesson prose for the infinitive, which counts a verb as taught when
 * it merely appears in a sentence about something else.
 *
 * The block grouping below is derived, not stored. A stored plan goes stale the
 * moment someone writes a lesson out of order, and a stale plan is worse than
 * none because it hands two authors the same verb.
 */
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

function lessonFiles() {
  const dir = path.join(root, "data", "lessons");
  const blocks = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((name) => name.endsWith(".js")).sort().map((name) => `data/lessons/${name}`)
    : [];
  return ["data/lessons.js", ...blocks];
}

const bundle = [read("data/curriculum.js"), ...lessonFiles().map(read)].join("\n");
const { lessons, curriculum } = vm.runInNewContext(`${bundle}\n({ lessons, curriculum });`, {}, { filename: "coverage.js" });

const claimedBy = new Map();
const duplicates = [];
for (const lesson of lessons) {
  if (!lesson.verb) continue;
  if (claimedBy.has(lesson.verb)) duplicates.push([lesson.verb, claimedBy.get(lesson.verb), lesson.id]);
  else claimedBy.set(lesson.verb, lesson.id);
}

const LEVELS = ["foundation", "independent", "extension"];
const remaining = curriculum.filter((verb) => !claimedBy.has(verb.spanish));

if (process.argv.includes("--check")) {
  if (duplicates.length) {
    for (const [verb, first, second] of duplicates) console.error(`"${verb}" is claimed by both ${first} and ${second}`);
    process.exit(1);
  }
  const unknown = [...claimedBy.keys()].filter((verb) => !curriculum.some((entry) => entry.spanish === verb));
  if (unknown.length) {
    console.error(`lessons claim verbs that are not in the curriculum: ${unknown.join(", ")}`);
    process.exit(1);
  }
  console.log(`${claimedBy.size} verb(s) claimed, no collisions.`);
  process.exit(0);
}

const withoutVerb = lessons.filter((lesson) => !lesson.verb).length;

console.log(`Verb coverage: ${claimedBy.size} of ${curriculum.length} taught, ${remaining.length} remaining.\n`);
for (const level of LEVELS) {
  const total = curriculum.filter((verb) => verb.level === level).length;
  const done = curriculum.filter((verb) => verb.level === level && claimedBy.has(verb.spanish)).length;
  const bar = "#".repeat(Math.round((done / total) * 24)).padEnd(24, ".");
  console.log(`  ${level.padEnd(12)} ${bar} ${String(done).padStart(3)}/${total}`);
}
if (withoutVerb) {
  console.log(`\n  ${withoutVerb} lesson(s) predate the one-verb-per-lesson rule and claim nothing.`);
  console.log("  They still teach verbs; they just do not say which, so they cannot be counted.");
}

if (!remaining.length) {
  console.log("\nEvery verb in the curriculum is taught by exactly one lesson.");
  process.exit(0);
}

if (process.argv.includes("--list")) {
  console.log("\nStill unclaimed:");
  for (const level of LEVELS) {
    const verbs = remaining.filter((verb) => verb.level === level);
    if (verbs.length) console.log(`\n  ${level} (${verbs.length}):\n    ${verbs.map((verb) => verb.spanish).join(", ")}`);
  }
  process.exit(0);
}

/*
 * Three verbs per block, matching the block files already written. Blocks are
 * numbered from the highest existing file so a new author never collides with
 * one already on disk, even mid-branch.
 */
const existing = fs.existsSync(path.join(root, "data", "lessons"))
  ? fs.readdirSync(path.join(root, "data", "lessons")).filter((name) => /^\d+-/.test(name))
  : [];
const nextNumber = existing.reduce((highest, name) => Math.max(highest, Number(name.split("-")[0])), 0) + 1;
const next = remaining.slice(0, 3);

console.log(`\nNext block — ${String(nextNumber).padStart(2, "0")}, ${next.length} lesson(s):`);
for (const verb of next) console.log(`  ${verb.spanish.padEnd(14)} ${verb.english.padEnd(16)} ${verb.level} · ${verb.domain}`);
console.log(`\n  file:  data/lessons/${String(nextNumber).padStart(2, "0")}-<theme>.js`);
console.log(`  check: node scripts/check-lesson-block.js data/lessons/${String(nextNumber).padStart(2, "0")}-<theme>.js`);
console.log(`\n  At three lessons per block, ${Math.ceil(remaining.length / 3)} more block(s) finish the curriculum.`);
