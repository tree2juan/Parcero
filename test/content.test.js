const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const bundle = `${read("data/lesson-schema.js")}\n${read("data/lessons.js")}\n${read("data/curriculum.js")}\n({ lessons, curriculum, fluencyItems, matureItems, schema: ParceroLessonSchema });`;
const { lessons, curriculum, fluencyItems, matureItems, schema } = vm.runInNewContext(bundle, {}, { filename: "parcero-data-bundle.js" });

const directions = ["es", "en"];
const isText = (value) => typeof value === "string" && value.trim().length > 0;
const duplicates = (list) => [...new Set(list.filter((item, index) => list.indexOf(item) !== index))];

test("lessons are present and uniquely identified", () => {
  assert.ok(Array.isArray(lessons) && lessons.length > 1, "expected more than one lesson");
  const ids = lessons.map((lesson) => lesson.id);
  assert.deepStrictEqual(duplicates(ids), [], "lesson ids must be unique");
  for (const id of ids) assert.match(id, /^[a-z0-9-]+$/, `lesson id "${id}" must be kebab-case`);
});

test("every lesson carries its teaching metadata", () => {
  for (const lesson of lessons) {
    assert.ok(isText(lesson.level), `${lesson.id}: missing level`);
    assert.ok(isText(lesson.domain), `${lesson.id}: missing domain`);
    assert.ok(isText(lesson.register), `${lesson.id}: missing register`);
    assert.ok(lesson.skills?.length, `${lesson.id}: missing skills`);
    assert.ok(lesson.pathways?.length, `${lesson.id}: missing pathways`);
    assert.ok(["pending", "reviewed"].includes(lesson.review), `${lesson.id}: review must be "pending" or "reviewed"`);
  }
});

test("every lesson teaches in both directions", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const content = lesson[direction];
      assert.ok(content, `${lesson.id}: missing "${direction}" content`);
      assert.ok(isText(content.title), `${lesson.id}.${direction}: missing title`);
      assert.ok(isText(content.situation), `${lesson.id}.${direction}: missing situation`);
      assert.ok(isText(content.note), `${lesson.id}.${direction}: missing culture note`);
    }
  }
});

test("dialogue lines carry the target language, a translation and a pronunciation", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { dialogue } = schema.normalizeContent(lesson[direction]);
      assert.ok(dialogue.length >= 6, `${lesson.id}.${direction}: a situation needs at least six dialogue lines, found ${dialogue.length}`);
      dialogue.forEach((line, index) => {
        for (const slot of ["speaker", "target", "translation", "pronunciation"]) {
          assert.ok(isText(line[slot]), `${lesson.id}.${direction} line ${index + 1}: missing ${slot}`);
        }
      });
    }
  }
});

test("vocabulary entries teach a term in context, not just a gloss", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { vocabulary } = schema.normalizeContent(lesson[direction]);
      assert.ok(vocabulary.length >= 7, `${lesson.id}.${direction}: needs at least seven vocabulary entries, found ${vocabulary.length}`);
      vocabulary.forEach((entry, index) => {
        assert.ok(isText(entry.term), `${lesson.id}.${direction} vocabulary ${index + 1}: missing term`);
        assert.ok(isText(entry.explanation), `${lesson.id}.${direction} vocabulary ${index + 1}: missing explanation`);
        assert.ok(isText(entry.useWhen), `${lesson.id}.${direction} vocabulary ${index + 1}: missing "use it when"`);
        assert.ok(isText(entry.region), `${lesson.id}.${direction} vocabulary ${index + 1}: must say where it is used`);
        assert.ok(entry.example && isText(entry.example.target), `${lesson.id}.${direction} vocabulary ${index + 1}: missing an example sentence`);
      });
    }
  }
});

test("every lesson answers who, what, when, where and why", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { setting } = schema.normalizeContent(lesson[direction]);
      assert.ok(setting, `${lesson.id}.${direction}: missing the situation setting`);
      for (const key of schema.SETTING_KEYS) {
        assert.ok(isText(setting[key]), `${lesson.id}.${direction}: the setting never answers "${key}"`);
      }
    }
  }
});

test("every lesson names the address form it is built on", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { address } = schema.normalizeContent(lesson[direction]);
      assert.ok(address, `${lesson.id}.${direction}: missing the address form`);
      assert.ok(schema.ADDRESS_FORMS.includes(address.form), `${lesson.id}.${direction}: "${address.form}" is not a recognised address form`);
      assert.ok(isText(address.why), `${lesson.id}.${direction}: does not explain why this address form`);
      assert.ok(isText(address.ifYouSwitch), `${lesson.id}.${direction}: does not say what changes if you switch`);
    }
  }
});

test("context notes, pitfalls and variations are complete where present", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const content = schema.normalizeContent(lesson[direction]);
      assert.ok(content.culture.length >= 3, `${lesson.id}.${direction}: needs at least three context notes`);
      content.culture.forEach((row, index) => {
        for (const slot of schema.CULTURE_SLOTS) {
          assert.ok(isText(row[slot]), `${lesson.id}.${direction} context note ${index + 1}: missing ${slot}`);
        }
      });
      assert.ok(content.pitfalls.length >= 3, `${lesson.id}.${direction}: needs at least three pitfalls`);
      content.pitfalls.forEach((row, index) => {
        for (const slot of schema.PITFALL_SLOTS) {
          assert.ok(isText(row[slot]), `${lesson.id}.${direction} pitfall ${index + 1}: missing ${slot}`);
        }
      });
      assert.ok(content.variations.length >= 3, `${lesson.id}.${direction}: needs at least three variations`);
      content.variations.forEach((row, index) => {
        for (const slot of schema.VARIATION_SLOTS) {
          assert.ok(isText(row[slot]), `${lesson.id}.${direction} variation ${index + 1}: missing ${slot}`);
        }
      });
    }
  }
});

test("practice questions have a valid answer among distinct choices", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { practice } = schema.normalizeContent(lesson[direction]);
      assert.ok(practice.length >= 3, `${lesson.id}.${direction}: needs at least three practice questions, found ${practice.length}`);
      practice.forEach((question, index) => {
        assert.ok(isText(question.prompt), `${lesson.id}.${direction} question ${index + 1}: missing prompt`);
        assert.ok(question.choices.length >= 2, `${lesson.id}.${direction} question ${index + 1}: needs at least two choices`);
        assert.deepStrictEqual(duplicates(question.choices), [], `${lesson.id}.${direction} question ${index + 1}: choices must be distinct`);
        assert.ok(
          Number.isInteger(question.answer) && question.answer >= 0 && question.answer < question.choices.length,
          `${lesson.id}.${direction} question ${index + 1}: answer index ${question.answer} is out of range`
        );
      });
    }
  }
});

/*
 * A learner who never reads the target language can still score well if the
 * answer is always first, or always the longest option. Both are shape tells,
 * and both are easy to introduce by accident when writing many questions.
 */
test("practice answers are not guessable from position", () => {
  const positions = new Set();
  for (const lesson of lessons) {
    for (const direction of directions) {
      for (const question of schema.normalizeContent(lesson[direction]).practice) {
        positions.add(question.answer);
      }
    }
  }
  assert.ok(positions.size > 1, "every correct answer sits at the same index, so the set can be passed without reading it");
});

test("practice answers are not guessable from length", () => {
  const suspicious = [];
  for (const lesson of lessons) {
    for (const direction of directions) {
      schema.normalizeContent(lesson[direction]).practice.forEach((question, index) => {
        const lengths = question.choices.map((choice) => choice.length);
        const answerLength = lengths[question.answer];
        const others = lengths.filter((_, position) => position !== question.answer);
        const longest = Math.max(...others);
        const shortest = Math.min(...others);
        if (answerLength > longest * 1.6 || answerLength * 1.6 < shortest) {
          suspicious.push(`${lesson.id}.${direction} question ${index + 1}`);
        }
      });
    }
  }
  assert.deepStrictEqual(suspicious, [], `the correct answer stands out by length in: ${suspicious.join(", ")}`);
});

test("the verb curriculum is complete and uniquely identified", () => {
  assert.ok(Array.isArray(curriculum) && curriculum.length > 0);
  const ids = curriculum.map((verb) => verb.id);
  assert.deepStrictEqual(duplicates(ids), [], "verb ids must be unique");
  for (const verb of curriculum) {
    assert.ok(isText(verb.spanish) && isText(verb.english), `${verb.id}: missing translation pair`);
    for (const form of ["presentYo", "preteriteYo", "participle"]) {
      assert.ok(isText(verb.forms?.[form]), `${verb.id}: missing ${form}`);
    }
    for (const label of ["level", "register", "regionality"]) {
      assert.ok(isText(verb[label]), `${verb.id}: missing ${label}`);
    }
  }
});

test("reference lists match the shape the renderers expect", () => {
  assert.ok(fluencyItems.length > 0);
  for (const item of fluencyItems) {
    assert.strictEqual(item.length, 5, "expected [phrase, meaning, type, region, note]");
    item.forEach((cell) => assert.ok(isText(cell)));
  }
  assert.ok(matureItems.length > 0);
  for (const item of matureItems) {
    assert.strictEqual(item.length, 4, "expected [phrase, equivalent, severity, note]");
    item.forEach((cell) => assert.ok(isText(cell)));
  }
});

test("every element app.js looks up exists in index.html", () => {
  const app = read("app.js");
  const html = read("index.html");
  const ids = new Set([...app.matchAll(/\$\("#([\w-]+)"\)/g)].map((match) => match[1]));
  assert.ok(ids.size > 0, "expected app.js to query elements by id");
  for (const id of ids) {
    assert.ok(html.includes(`id="${id}"`), `index.html is missing #${id}, which app.js expects`);
  }
});

test("app.js renders the whole lesson set rather than a single hard-coded lesson", () => {
  const app = read("app.js");
  assert.doesNotMatch(app, /=\s*lessons\[0\]\s*;/, "app.js must not pin the view to lessons[0]");
  assert.match(app, /lessons\.length/, "app.js should size progress against the full lesson list");
});
