/*
 * Regenerate data/provenance.js from the lessons themselves.
 *
 *   node scripts/record-provenance.js          # write
 *   node scripts/record-provenance.js --check  # fail if the record is stale
 *
 * The record says which fields of a lesson's `en` direction hold Spanish that a
 * machine produced and no native speaker has read. `review: "pending"` is
 * per-lesson and already on for every lesson, so it cannot answer that question
 * at field level -- and in an app whose visible promise is that regional
 * wording gets settled by native speakers, unreviewed machine Spanish that
 * looks like authored Spanish is worse than no translation at all.
 *
 * Everything not excused in scripts/translated-slots.js is recorded. That is
 * deliberately the pessimistic direction: a slot nobody has thought about is
 * treated as unverified rather than assumed fine, so adding a field to a lesson
 * shows up here instead of quietly passing as human-checked prose.
 */
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const { NOT_TRANSLATED, RECORD_ANYWAY, slotOf } = require("./translated-slots.js");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

function lessonFiles() {
  const dir = path.join(root, "data", "lessons");
  const blocks = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((name) => name.endsWith(".js")).sort().map((name) => `data/lessons/${name}`)
    : [];
  return ["data/lessons.js", ...blocks];
}

const source = lessonFiles().map(read).join("\n");
const { lessons } = vm.runInNewContext(`${source}\n({ lessons });`, {}, { filename: "provenance-input.js" });

const excused = new Set(
  NOT_TRANSLATED.map(([slot]) => slot).filter((slot) => !RECORD_ANYWAY.has(slot))
);

/* Every string trail in a lesson's en direction that is not excused by slot. */
function unverifiedTrails(node, trail = "", found = []) {
  if (typeof node === "string") {
    if (node.trim() && !excused.has(slotOf(trail))) found.push(trail);
    return found;
  }
  if (Array.isArray(node)) {
    node.forEach((item, index) => unverifiedTrails(item, `${trail}[${index}]`, found));
    return found;
  }
  if (node && typeof node === "object") {
    for (const [key, value] of Object.entries(node)) {
      unverifiedTrails(value, trail ? `${trail}.${key}` : key, found);
    }
  }
  return found;
}

const fields = {};
for (const lesson of lessons) {
  const trails = unverifiedTrails(lesson.en).sort();
  if (trails.length) fields[lesson.id] = { en: trails };
}

const record = { status: "machine-written, pending native review", fields };

const header = [
  "// GENERATED FILE — do not hand-edit.",
  "//",
  "// Which lesson fields hold machine translation awaiting a native speaker.",
  "// Written by scripts/record-provenance.js, so the record cannot drift from",
  "// the content. `review: \"pending\"` is per-lesson and already on for every",
  "// lesson, so it cannot say which *fields* are unverified.",
  ""
].join("\n");

const body = `const provenance = ${JSON.stringify(record, null, 2)};\n\n`
  + "if (typeof module !== \"undefined\") module.exports = provenance;\n";

const output = `${header}${body}`;
const target = path.join(root, "data", "provenance.js");

if (process.argv.includes("--check")) {
  const current = fs.readFileSync(target, "utf8");
  if (current.replace(/\r\n/g, "\n") !== output.replace(/\r\n/g, "\n")) {
    console.error("data/provenance.js is stale. Run: node scripts/record-provenance.js");
    process.exit(1);
  }
  console.log("data/provenance.js is up to date.");
  process.exit(0);
}

fs.writeFileSync(target, output);
const total = Object.values(fields).reduce((sum, entry) => sum + entry.en.length, 0);
console.log(`data/provenance.js: ${Object.keys(fields).length} lesson(s), ${total} unverified field(s).`);
