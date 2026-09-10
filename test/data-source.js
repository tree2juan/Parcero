/*
 * One place that knows which files hold lesson content.
 *
 * Lessons no longer live in a single file. Two hundred of them at the depth
 * this app teaches would be several megabytes of one synchronous script, and —
 * more immediately — a single file that every content branch edits at once is a
 * merge conflict per lesson. So `data/lessons.js` declares the array and the
 * blocks in `data/lessons/` push onto it.
 *
 * Every test used to build its own bundle string naming `data/lessons.js`
 * literally. Left that way, adding a block file meant remembering to edit five
 * test files, and forgetting meant the new lessons were simply not tested —
 * silently, with the suite green. The list is derived from the directory here
 * instead, so a block file is covered the moment it exists.
 *
 * Load order matters and is not alphabetical by accident: `data/lessons.js`
 * must come first because it declares the binding the blocks mutate. Within
 * the directory, sorting keeps the array order stable between runs, which the
 * flashcard and review anchors depend on.
 */
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

/* Block files, in load order, as repo-relative paths. */
function lessonBlockFiles() {
  const dir = path.join(root, "data", "lessons");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".js"))
    .sort()
    .map((name) => `data/lessons/${name}`);
}

/* The same arrangement for the lexicon, and for the same reason. */
function lexiconBlockFiles() {
  const dir = path.join(root, "data", "lexicon");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".js"))
    .sort()
    .map((name) => `data/lexicon/${name}`);
}

/* Every file holding lesson content, declaration first. */
function lessonFiles() {
  return ["data/lessons.js", ...lessonBlockFiles()];
}

/* The lesson content as one concatenated source string. */
function lessonSource() {
  return lessonFiles().map(read).join("\n");
}

/*
 * The whole data layer as one source string, ready to have an export
 * expression appended and be handed to vm.runInNewContext.
 */
function dataSource({ schema = true, flashcards = false } = {}) {
  const parts = [];
  if (schema) parts.push(read("data/lesson-schema.js"));
  parts.push(lessonSource());
  parts.push(read("data/curriculum.js"));
  parts.push(read("data/structures.js"));
  parts.push(read("data/taxonomy.js"));
  parts.push(read("data/lexicon.js"));
  for (const file of lexiconBlockFiles()) parts.push(read(file));
  parts.push(read("data/slang.js"));
  parts.push(read("data/after-dark.js"));
  parts.push(read("data/mature.js"));
  if (flashcards) parts.push(read("data/flashcards.js"));
  return parts.join("\n");
}

module.exports = { root, read, lessonBlockFiles, lexiconBlockFiles, lessonFiles, lessonSource, dataSource };
