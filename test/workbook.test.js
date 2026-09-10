/*
 * The workbook, and the one thing that makes a generated exercise worthless.
 *
 * A derived exercise is only as good as its answer. It is entirely possible to
 * generate 2,688 activities that look right on the page, print an answer key
 * beside them, and have the two disagree — and nothing about the rendered
 * output would show it. A student would find out, which is the worst possible
 * place to find out.
 *
 * So most of what follows does not check that a workbook was produced. It
 * checks that each answer can be used to reconstruct the source material it
 * came from: that a gap-fill answer really does restore the dialogue line it
 * was cut out of, that a match key pairs a term with its own meaning and not
 * a neighbor's, and that the reorder key really does rebuild the conversation
 * in its authored order. These caught a real defect on first run — an English
 * vocabulary list that taught "change" twice, once as a verb and once as a
 * noun, making its match exercise unanswerable.
 *
 * The determinism test exists for a related reason. Seeded shuffling is what
 * lets a printed workbook stay valid: with Math.random the page and the key
 * would be regenerated independently and silently diverge.
 */
const test = require("node:test");
const assert = require("node:assert");
const vm = require("node:vm");
const fs = require("node:fs");
const path = require("node:path");

const { dataSource } = require("./data-source.js");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const { lessons } = vm.runInNewContext(`${dataSource({ schema: true })}\n({ lessons });`, {}, {
  filename: "lessons-bundle.js"
});

const MODULES = vm.runInNewContext(`${read("data/modules.js")}\n;COURSE_MODULES;`);

const sandbox = {};
vm.runInNewContext(read("workbook.js"), sandbox, { filename: "workbook.js" });
const Workbook = sandbox.ParceroWorkbook;

const LETTERS = "abcdefghijklmnopqrstuvwxyz";
const DIRECTIONS = ["es", "en"];

/* Every workbook, built once, reused by the assertions below. */
const built = [];
for (const module of MODULES) {
  for (const direction of DIRECTIONS) {
    const group = Workbook.lessonsFor(module, lessons);
    built.push({ module, direction, group, book: Workbook.build({ module, lessons: group, direction }) });
  }
}

const sideOf = (lessonId, direction) => lessons.find((l) => l.id === lessonId)[direction];

test("every lesson block on disk is a module, and every module is a block", () => {
  const blocks = new Set(lessons.map((l) => l.sourceFile));
  const listed = new Set(MODULES.map((m) => m.block));
  const orphanBlocks = [...blocks].filter((b) => !listed.has(b));
  const orphanModules = [...listed].filter((b) => !blocks.has(b));
  assert.deepStrictEqual(orphanBlocks, [], "lesson blocks with no module entry");
  assert.deepStrictEqual(orphanModules, [], "module entries naming a block that holds no lessons");
});

test("every lesson belongs to exactly one module", () => {
  const counts = new Map();
  for (const module of MODULES) {
    for (const lesson of Workbook.lessonsFor(module, lessons)) {
      counts.set(lesson.id, (counts.get(lesson.id) || 0) + 1);
    }
  }
  const missing = Array.from(lessons.filter((l) => !counts.has(l.id)).map((l) => l.id));
  const doubled = [...counts.entries()].filter(([, n]) => n !== 1).map(([id]) => id);
  assert.deepStrictEqual(missing, [], "lessons in no module");
  assert.deepStrictEqual(doubled, [], "lessons claimed by more than one module");
  assert.strictEqual(counts.size, lessons.length);
});

test("module ids are unique and carry a title in both interface languages", () => {
  const ids = MODULES.map((m) => m.id);
  assert.strictEqual(new Set(ids).size, ids.length, "duplicate module id");
  for (const module of MODULES) {
    for (const lang of ["en", "es"]) {
      const title = module.title && module.title[lang];
      assert.ok(title && title.trim().length > 2, `${module.id} has no ${lang} title`);
    }
    assert.notStrictEqual(
      module.title.en,
      module.title.es,
      `${module.id} has the same string for both languages, which means one was never translated`
    );
  }
});

test("every module produces a workbook in both directions", () => {
  for (const entry of built) {
    assert.ok(entry.book, `${entry.module.id} (${entry.direction}) built nothing`);
    assert.ok(entry.book.units.length > 0, `${entry.module.id} has no units`);
    assert.strictEqual(entry.book.lessonIds.length, entry.group.length);
    assert.strictEqual(entry.book.uiLang, entry.direction === "es" ? "en" : "es");
  }
  assert.strictEqual(built.length, MODULES.length * 2);
});

test("a gap-fill answer restores the exact line it was cut from", () => {
  let checked = 0;
  for (const { book, direction } of built) {
    for (const unit of book.units) {
      const terms = new Set(
        sideOf(unit.lessonId, direction).vocabulary.map((v) => String(v.term).toLowerCase())
      );
      for (const activity of unit.activities.filter((a) => a.kind === "gap-fill")) {
        for (const item of activity.items) {
          const restored = item.text.replace("__________", item.answer);
          const found = sideOf(unit.lessonId, direction).dialogue.some((d) => d.target === restored);
          assert.ok(
            found,
            `${unit.lessonId} (${direction}): filling the blank gives "${restored}", which is not a line in the dialogue`
          );
          /*
           * Round-tripping alone is not enough, and a mutation proved it:
           * shifting the cut by one character still restores the line
           * perfectly, because the answer is whatever was removed. The blank
           * also has to be a word the lesson actually teaches, or the exercise
           * quietly tests nothing.
           */
          assert.ok(
            terms.has(String(item.answer).toLowerCase()),
            `${unit.lessonId} (${direction}): the blank removed "${item.answer}", which is not a vocabulary term`
          );
          checked += 1;
        }
      }
    }
  }
  assert.ok(checked > 800, `only ${checked} gap-fill answers checked`);
});

test("a match key pairs each term with its own meaning", () => {
  let checked = 0;
  for (const { book, direction } of built) {
    for (const unit of book.units) {
      for (const activity of unit.activities.filter((a) => a.kind === "match")) {
        for (const pair of activity.answer.split(", ")) {
          const [n, letter] = pair.split("-");
          const term = activity.left[Number(n) - 1].term;
          const meaning = activity.right[LETTERS.indexOf(letter)].literal;
          const entry = sideOf(unit.lessonId, direction).vocabulary.find((v) => v.term === term);
          assert.ok(entry, `${unit.lessonId}: match lists a term the lesson does not teach`);
          assert.strictEqual(
            entry.literal,
            meaning,
            `${unit.lessonId} (${direction}): key says ${pair}, but "${term}" does not mean "${meaning}"`
          );
          checked += 1;
        }
      }
    }
  }
  assert.ok(checked > 2000, `only ${checked} match pairs checked`);
});

test("a reorder key rebuilds the conversation in its authored order", () => {
  let checked = 0;
  for (const { book, direction } of built) {
    for (const unit of book.units) {
      for (const activity of unit.activities.filter((a) => a.kind === "order")) {
        /*
         * Array.from on both sides is not decoration. The lessons come out of
         * a vm sandbox, so `dialogue.map(...)` carries that realm's
         * Array.prototype while `answer.split(...)` carries this one's, and
         * deepStrictEqual compares prototypes — it fails on two identical
         * lists of strings.
         */
        const original = Array.from(
          sideOf(unit.lessonId, direction).dialogue.slice(0, 6).map((d) => d.target)
        );
        const rebuilt = Array.from(
          activity.answer.split(" → ").map((letter) => activity.items[LETTERS.indexOf(letter)].text)
        );
        assert.deepStrictEqual(
          rebuilt,
          original,
          `${unit.lessonId} (${direction}): the reorder key does not reproduce the dialogue`
        );
        checked += 1;
      }
    }
  }
  assert.ok(checked > 400, `only ${checked} reorder keys checked`);
});

test("a multiple-choice key marks the option the lesson marks correct", () => {
  let checked = 0;
  for (const { book, direction } of built) {
    for (const unit of book.units) {
      for (const activity of unit.activities.filter((a) => a.kind === "choice")) {
        const side = sideOf(unit.lessonId, direction);
        const bank = [{ prompt: side.prompt, choices: side.choices, answer: side.answer }]
          .concat(side.practiceExtra || []);
        for (const item of activity.items) {
          const source = bank.find((q) => q.prompt === item.prompt);
          assert.ok(source, `${unit.lessonId}: choice prompt is not from the lesson`);
          assert.strictEqual(
            item.choices[LETTERS.indexOf(item.answer)].text,
            source.choices[source.answer],
            `${unit.lessonId} (${direction}): marked option is not the lesson's answer`
          );
          checked += 1;
        }
      }
    }
  }
  assert.ok(checked > 800, `only ${checked} choice items checked`);
});

test("no lesson teaches the same term twice in one vocabulary list", () => {
  /*
   * The match exercise cannot be answered when two rows share a headword, and
   * a pooled glossary silently drops the second. This started as a real defect
   * in the English side of changing-a-bill-in-san-antonio, which listed
   * "change" as both the verb and the noun while the Spanish side correctly
   * separated cambiar from cambio.
   */
  const offenders = [];
  for (const lesson of lessons) {
    for (const direction of DIRECTIONS) {
      const terms = lesson[direction].vocabulary.map((v) => v.term);
      if (new Set(terms).size !== terms.length) offenders.push(`${lesson.id} [${direction}]`);
    }
  }
  assert.deepStrictEqual(offenders, []);
});

test("building the same workbook twice gives the identical result", () => {
  for (const { module, group, direction, book } of built.slice(0, 12)) {
    const again = Workbook.build({ module, lessons: group, direction });
    assert.deepStrictEqual(
      JSON.parse(JSON.stringify(again)),
      JSON.parse(JSON.stringify(book)),
      `${module.id} (${direction}) is not deterministic, so a printed copy would stop matching the screen`
    );
  }
});

test("the answer key accounts for every activity that has an answer", () => {
  for (const { book, module, direction } of built) {
    const answerable = book.units.reduce(
      (n, unit) => n + unit.activities.filter((a) => a.answer).length + unit.comprehension.length,
      0
    );
    assert.strictEqual(
      book.answerKey.length,
      answerable,
      `${module.id} (${direction}) prints ${answerable} answerable tasks but ${book.answerKey.length} key rows`
    );
    for (const row of book.answerKey) {
      assert.ok(row.answer && String(row.answer).trim(), `${module.id}: empty answer for ${row.kind}`);
      assert.ok(book.lessonIds.includes(row.lessonId), `${module.id}: key row from outside the module`);
    }
  }
});

test("the glossary lists each term once and every entry carries a meaning", () => {
  for (const { book, module } of built) {
    const terms = book.glossary.map((g) => String(g.term).toLowerCase());
    assert.strictEqual(new Set(terms).size, terms.length, `${module.id} repeats a glossary term`);
    for (const entry of book.glossary) {
      assert.ok(entry.term && entry.literal, `${module.id}: glossary entry with no meaning`);
    }
  }
});

test("every workbook can state what the student will be able to do", () => {
  for (const { book, module, direction } of built) {
    assert.ok(book.overview.canDo.length, `${module.id} (${direction}) has no can-do list`);
    for (const line of book.overview.canDo) {
      assert.ok(line && line.trim().length > 10, `${module.id}: empty can-do line`);
    }
    assert.ok(book.overview.corePhrases.length, `${module.id} (${direction}) has no core phrases`);
  }
});

test("the workbook is wired into the page, after the data it reads", () => {
  /*
   * A generator nothing loads is the same product defect as no generator, and
   * is much harder to notice: every test above would still pass.
   *
   * The order asserted here is only modules-before-workbook, which is a real
   * dependency — workbook.js reads COURSE_MODULES. It deliberately does not
   * require workbook.js to precede app.js, because app.js loads before every
   * feature script in this page and resolves its globals lazily inside
   * handlers, exactly as it does for ParceroProgress.
   */
  const html = read("index.html");
  for (const src of ["data/modules.js", "workbook.js"]) {
    assert.ok(html.includes(`src="${src}"`), `index.html never loads ${src}`);
  }
  assert.ok(
    html.indexOf('src="data/modules.js"') < html.indexOf('src="workbook.js"'),
    "workbook.js reads COURSE_MODULES, so data/modules.js has to load first"
  );
});
