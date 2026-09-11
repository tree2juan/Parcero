/*
 * The exam tasks, and the one way a model answer can be actively harmful.
 *
 * A workbook that teaches "write 60 to 70 words" and then prints a model
 * answer of 57 is worse than one that says nothing, because the learner
 * calibrates against the example rather than the rule. The first draft of
 * data/exam-tasks.js did exactly that in one of its eight tasks, and every
 * other check in this repository passed it: the Spanish was correct, the
 * language was right, the spelling was American, the shape was valid. Nothing
 * but arithmetic could have caught it.
 *
 * So the tests below are mostly arithmetic, and they are deliberately aimed at
 * the claims the prose makes about itself. `every word count a note cites is
 * the real one` exists because a note saying "67 words" above a 65-word answer
 * is the same defect wearing different clothes, and eight of them were wrong
 * on first measurement.
 *
 * The language assertions are exact rather than permissive on purpose. An
 * earlier bug in this project let an English string through a language gate
 * because the classifier abstained with "unknown" on a short input and the
 * check treated abstention as a pass. Every text here is long enough for the
 * classifier to commit, so the test demands a committed answer and fails on
 * "unknown" like any other wrong result.
 */
const test = require("node:test");
const assert = require("node:assert");
const vm = require("node:vm");
const fs = require("node:fs");
const path = require("node:path");

const { dataSource } = require("./data-source.js");
const { classify } = require("../scripts/prose-language.js");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const { EXAM_TASKS } = require("../data/exam-tasks.js");
const MODULES = vm.runInNewContext(`${read("data/modules.js")}\n;COURSE_MODULES;`);

const { lessons } = vm.runInNewContext(`${dataSource({ schema: true })}\n({ lessons });`, {}, {
  filename: "lessons-bundle.js"
});

/* workbook.js reads EXAM_TASKS off its global, so the sandbox has to carry it
   exactly the way index.html does — data file first, then the consumer. */
const sandbox = {};
vm.runInNewContext(`${read("data/exam-tasks.js")}\n${read("workbook.js")}`, sandbox, {
  filename: "workbook-with-exams.js"
});
const Workbook = sandbox.ParceroWorkbook;

const BANDS = ["A1", "A2", "B1", "B2"];
const DIRECTIONS = ["es", "en"];

/* The language being produced is the direction; the language being read is its
   opposite. Both halves of every task are checked against this. */
const PRODUCED = { es: "spanish", en: "english" };
const READ = { es: "english", en: "spanish" };

const words = (text) => String(text)
  .trim()
  .split(/\s+/)
  .filter((token) => /[\p{L}\p{N}]/u.test(token))
  .length;

/* "100–120 words" / "25 palabras como mínimo" / "140-190 palabras" */
const boundsOf = (label) => {
  const found = String(label).match(/\d+/g) || [];
  const numbers = found.map(Number);
  if (!numbers.length) return null;
  return { low: numbers[0], high: numbers.length > 1 ? numbers[1] : null };
};

const everyTask = [];
for (const band of BANDS) {
  for (const direction of DIRECTIONS) {
    everyTask.push({ band, direction, task: EXAM_TASKS[band][direction] });
  }
}

test("the exam tasks cover exactly the bands the course teaches", () => {
  /* C1 and C2 are deliberately absent: the course stops at B2, and an exam
     task for a band with no lessons behind it would be a promise it cannot
     keep. */
  assert.deepStrictEqual(Object.keys(EXAM_TASKS).sort(), BANDS.slice().sort());
  for (const band of BANDS) {
    assert.deepStrictEqual(Object.keys(EXAM_TASKS[band]).sort(), DIRECTIONS.slice().sort(),
      `${band} is missing a direction`);
  }
});

test("every task states the things a candidate has to know before starting", () => {
  for (const { band, direction, task } of everyTask) {
    const where = `${band}.${direction}`;
    for (const field of ["exam", "task", "words", "countRule", "brief"]) {
      assert.ok(task[field] && String(task[field]).trim(), `${where}.${field} is empty`);
    }
    assert.ok(Number.isInteger(task.minutes) && task.minutes > 0,
      `${where}.minutes must be a positive whole number of minutes`);
    assert.ok(["minimum", "range", "approximate"].includes(task.countRule),
      `${where}.countRule is not one of minimum/range/approximate`);
    for (const list of ["criteria", "checklist"]) {
      assert.ok(Array.isArray(task[list]) && task[list].length >= 3,
        `${where}.${list} needs at least three entries`);
      for (const line of task[list]) {
        assert.ok(String(line).trim().length > 20, `${where}.${list} has a throwaway entry`);
      }
    }
    for (const kind of ["weak", "strong"]) {
      assert.ok(task[kind] && task[kind].text && Array.isArray(task[kind].notes),
        `${where}.${kind} needs a text and notes`);
      assert.ok(task[kind].notes.length >= 3,
        `${where}.${kind} needs at least three notes — the notes are the teaching`);
    }
  }
});

test("the exam gets longer and harder as the band rises", () => {
  for (const direction of DIRECTIONS) {
    for (let i = 1; i < BANDS.length; i += 1) {
      const lower = EXAM_TASKS[BANDS[i - 1]][direction];
      const upper = EXAM_TASKS[BANDS[i]][direction];
      assert.ok(upper.minutes >= lower.minutes,
        `${BANDS[i]}.${direction} allows less time than ${BANDS[i - 1]}`);
      assert.ok(boundsOf(upper.words).low > boundsOf(lower.words).low,
        `${BANDS[i]}.${direction} asks for no more words than ${BANDS[i - 1]}`);
    }
  }
});

test("the model answer obeys the word count it is teaching", () => {
  /*
   * The whole point of the section. A strong answer that breaks its own rule
   * teaches the learner to break it too, and it is invisible to every other
   * check in this repository.
   */
  for (const { band, direction, task } of everyTask) {
    const count = words(task.strong.text);
    const { low, high } = boundsOf(task.words);
    const where = `${band}.${direction} strong answer (${count} words, brief says "${task.words}")`;

    assert.ok(count >= low, `${where} is under the minimum`);
    if (task.countRule === "range") {
      assert.ok(count <= high, `${where} is over the range`);
    }
    if (task.countRule === "approximate") {
      assert.ok(count <= Math.round(low * 1.25), `${where} is far over the stated length`);
    }
  }
});

test("the weak answer is measurably weaker, not just asserted to be", () => {
  for (const { band, direction, task } of everyTask) {
    const weak = words(task.weak.text);
    const strong = words(task.strong.text);
    assert.ok(weak < strong,
      `${band}.${direction}: the weak answer is not shorter than the strong one, so the contrast is not visible`);
  }
});

test("every word count a note cites is the real one", () => {
  /*
   * Notes make claims like "165 words, inside the range". Eight of these were
   * wrong when first measured — off by one or two, which is exactly the error
   * a human proofreader slides past and a learner trusts.
   */
  const wrong = [];
  for (const { band, direction, task } of everyTask) {
    for (const kind of ["weak", "strong"]) {
      const actual = words(task[kind].text);
      for (const note of task[kind].notes) {
        const cited = String(note).match(/(\d+)\s+(?:words|palabras)/i);
        if (!cited) continue;
        if (Number(cited[1]) !== actual) {
          wrong.push(`${band}.${direction}.${kind}: note says ${cited[1]}, text is ${actual}`);
        }
      }
    }
  }
  assert.deepStrictEqual(wrong, [], "notes citing a word count that is not the one on the page");
});

test("each half of a task is in the language its reader needs", () => {
  /*
   * The sample answers are the thing being produced, so they are in the
   * language being studied. Everything explaining them is in the language the
   * learner already has. "unknown" is a failure here, not a pass.
   */
  for (const { band, direction, task } of everyTask) {
    for (const kind of ["weak", "strong"]) {
      assert.strictEqual(classify(task[kind].text), PRODUCED[direction],
        `${band}.${direction}.${kind}.text should be the language being studied`);
    }
    assert.strictEqual(classify(task.brief), READ[direction],
      `${band}.${direction}.brief should be the language the learner reads`);
    assert.strictEqual(classify(task.criteria.join(" ")), READ[direction],
      `${band}.${direction}.criteria should be the language the learner reads`);
    assert.strictEqual(classify(task.checklist.join(" ")), READ[direction],
      `${band}.${direction}.checklist should be the language the learner reads`);
  }
});

test("every module carries the exam task for its own band, in both directions", () => {
  for (const module of MODULES) {
    for (const direction of DIRECTIONS) {
      const group = Workbook.lessonsFor(module, lessons);
      const book = Workbook.build({ module, lessons: group, direction });
      assert.ok(book, `${module.id} produced no workbook`);
      assert.ok(book.examTask, `${module.id} (${direction}) has no exam task`);
      assert.strictEqual(book.examTask.band, module.band,
        `${module.id} (${direction}) carries the wrong band's exam task`);
      assert.strictEqual(book.examTask.exam, EXAM_TASKS[module.band][direction].exam);
    }
  }
});

test("the phrases a module hands to the exam really come from that module", () => {
  /*
   * `useThese` is what makes one authored task per band into 78 different
   * pieces of practice. If it drifted from the module's own lessons it would
   * be telling the learner to reuse language they have not met.
   */
  for (const module of MODULES) {
    for (const direction of DIRECTIONS) {
      const group = Workbook.lessonsFor(module, lessons);
      const book = Workbook.build({ module, lessons: group, direction });
      const available = new Set();
      for (const lesson of group) {
        for (const line of lesson[direction].dialogue || []) available.add(line.target);
      }
      assert.ok(book.examTask.useThese.length > 0,
        `${module.id} (${direction}) offers no phrases to build the answer from`);
      for (const phrase of book.examTask.useThese) {
        assert.ok(available.has(phrase),
          `${module.id} (${direction}) points at "${phrase}", which is not in its lessons`);
      }
    }
  }
});

test("the Spanish a Colombian learner reads is not peninsular", () => {
  /*
   * The guidance for direction "en" is addressed to Colombian readers, and the
   * first draft of the B2 brief said "en tu clase habéis discutido". Nobody in
   * Colombia says habéis. The corpus elsewhere discusses peninsular forms on
   * purpose, so this ban is scoped to the exam tasks rather than repo-wide.
   */
  const peninsular = /\b(?:hab[ée]is|ten[ée]is|sois|vosotros|vuestr[oa]s?)\b/i;
  const offenders = [];
  for (const { band, task } of everyTask.filter((entry) => entry.direction === "en")) {
    const prose = [task.brief, task.task, task.words]
      .concat(task.criteria, task.checklist)
      .concat(task.weak.notes, task.strong.notes)
      .join(" ");
    const hit = prose.match(peninsular);
    if (hit) offenders.push(`${band}.en uses "${hit[0]}"`);
  }
  assert.deepStrictEqual(offenders, [], "peninsular forms in Spanish written for Colombian readers");
});

test("the exam task survives a page that never loaded the data file", () => {
  /* index.html loads data/exam-tasks.js before workbook.js, but a test harness
     or a partial page might not. It has to degrade to no section, not throw. */
  const bare = {};
  vm.runInNewContext(read("workbook.js"), bare, { filename: "workbook.js" });
  const module = MODULES[1];
  const group = bare.ParceroWorkbook.lessonsFor(module, lessons);
  const book = bare.ParceroWorkbook.build({ module, lessons: group, direction: "es" });
  assert.ok(book, "the workbook should still build without exam data");
  assert.strictEqual(book.examTask, null);
});

test("the exam data is wired into the page before the code that reads it", () => {
  const html = read("index.html");
  const data = html.indexOf('src="data/exam-tasks.js"');
  const consumer = html.indexOf('src="workbook.js"');
  assert.ok(data > -1, "index.html never loads data/exam-tasks.js");
  assert.ok(consumer > data, "workbook.js is loaded before the exam data it reads");
});
