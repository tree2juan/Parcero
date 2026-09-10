/*
 * Two guardrails that only matter at scale.
 *
 * The eight lessons this app shipped with were written by hand, one at a time,
 * by someone holding both language versions in their head at once. That does
 * not survive two hundred lessons. Both properties checked here are already
 * true of the existing content — these tests exist so they stay true when the
 * catalogue grows past the point where anyone is reading it end to end.
 */
const test = require("node:test");
const assert = require("node:assert");
const vm = require("node:vm");

const { dataSource, lessonBlockFiles, read } = require("./data-source.js");

const bundle = `${dataSource({ schema: true })}\n({ lessons, curriculum, schema: ParceroLessonSchema });`;
const { lessons, curriculum, schema } = vm.runInNewContext(bundle, {}, { filename: "parcero-shape-bundle.js" });

const directions = ["es", "en"];

/*
 * Slots that are optional in the schema. A lesson that fills `literal` on the
 * Spanish side and leaves it blank on the English side is not a broken lesson,
 * but it is an unfinished one, and at scale nobody notices.
 */
const OPTIONAL_ROW_SLOTS = {
  dialogue: ["literal", "why"],
  vocabulary: ["literal", "avoidWhen"]
};

const ROW_FIELDS = ["dialogue", "vocabulary", "culture", "pitfalls", "variations"];

function counts(content, field) {
  return Array.isArray(content[field]) ? content[field].length : 0;
}

function filled(rows, slot) {
  return rows.filter((row) => {
    const value = row[slot];
    return typeof value === "string" && value.trim() !== "";
  }).length;
}

test("both directions of a lesson describe the same scene at the same length", () => {
  for (const lesson of lessons) {
    const es = schema.normalizeContent(lesson.es);
    const en = schema.normalizeContent(lesson.en);
    const where = `lesson ${lesson.id}`;

    for (const field of ROW_FIELDS) {
      assert.equal(
        es[field].length, en[field].length,
        `${where}: ${field} has ${es[field].length} rows in es but ${en[field].length} in en. ` +
        "A learner switching directions should meet the same scene, not a shorter one.");
    }

    assert.equal(
      es.practice.length, en.practice.length,
      `${where}: practice has ${es.practice.length} questions in es but ${en.practice.length} in en`);

    // `related` is a per-entry list, so drift hides inside a matching row count.
    for (let index = 0; index < es.vocabulary.length; index += 1) {
      const esRelated = es.vocabulary[index].related.length;
      const enRelated = en.vocabulary[index].related.length;
      assert.equal(
        esRelated, enRelated,
        `${where}: vocabulary entry ${index} ("${es.vocabulary[index].term}") lists ${esRelated} related ` +
        `terms in es but ${enRelated} in en`);
    }

    for (const [field, slots] of Object.entries(OPTIONAL_ROW_SLOTS)) {
      for (const slot of slots) {
        assert.equal(
          filled(es[field], slot), filled(en[field], slot),
          `${where}: ${field}.${slot} is filled on ${filled(es[field], slot)} rows in es but ` +
          `${filled(en[field], slot)} in en. Fill it in both directions or neither.`);
      }
    }
  }
});

test("the same people have the same conversation in both directions", () => {
  for (const lesson of lessons) {
    const es = schema.normalizeContent(lesson.es);
    const en = schema.normalizeContent(lesson.en);
    const where = `lesson ${lesson.id}`;

    /*
     * Speaker names are translated — a role called "Mesera" in Spanish is
     * "Server" in English — so the names cannot be compared directly. The
     * *pattern* of who speaks when can: turn three belonging to the same
     * participant in both directions is what makes it the same scene.
     */
    const pattern = (content) => {
      const order = [];
      return content.dialogue.map((line) => {
        if (!order.includes(line.speaker)) order.push(line.speaker);
        return order.indexOf(line.speaker);
      }).join(",");
    };

    assert.equal(
      pattern(es), pattern(en),
      `${where}: the turn order differs between directions (es ${pattern(es)} vs en ${pattern(en)}). ` +
      "The two versions have drifted into different conversations.");

    const speakers = (content) => new Set(content.dialogue.map((line) => line.speaker)).size;
    assert.equal(
      speakers(es), speakers(en),
      `${where}: ${speakers(es)} distinct speakers in es but ${speakers(en)} in en`);
  }
});

test("the address note is answered in both directions, but not with the same answer", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const address = schema.normalizeContent(lesson[direction]).address;
      assert.ok(
        address.why && address.ifYouSwitch,
        `lesson ${lesson.id} (${direction}): the address note is missing its explanation`);
    }
    /*
     * Deliberately not asserting that `form` matches. English has no tú/usted
     * split, so the English side is honestly "mixed" everywhere. Requiring
     * parity here would force a lie into the content — the one place these two
     * lessons should differ.
     */
  }
});

test("a lesson breaks into study segments of about three minutes", () => {
  /*
   * Bounds, not a target. The packer aims at the mean; individual segments
   * drift because a segment can only break between rows and a long vocabulary
   * entry is indivisible. These numbers are roughly two and a half to four
   * minutes at the reading speed the schema assumes — wide enough that honest
   * content passes, tight enough that a lesson with one enormous unbroken
   * section fails instead of silently shipping a nine-minute "segment".
   */
  const MIN_WORDS = 240;
  const MAX_WORDS = 520;

  let checked = 0;
  for (const lesson of lessons) {
    for (const direction of directions) {
      const segments = schema.deriveSegments(lesson[direction]);
      assert.ok(
        segments.length >= 3,
        `lesson ${lesson.id} (${direction}) produced only ${segments.length} segments`);

      for (const segment of segments) {
        assert.ok(
          segment.words >= MIN_WORDS && segment.words <= MAX_WORDS,
          `lesson ${lesson.id} (${direction}) segment ${segment.index} is ${segment.words} words ` +
          `(${segment.minutes} min), outside the ${MIN_WORDS}-${MAX_WORDS} band`);
        assert.ok(segment.units.length > 0, `lesson ${lesson.id} (${direction}) has an empty segment`);
        checked += 1;
      }
    }
  }
  assert.ok(checked > 0, "no segments were derived, so this check verifies nothing");
});

test("segmenting a lesson loses none of it and reorders none of it", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const normalized = schema.normalizeContent(lesson[direction]);
      const expected = schema.segmentUnits(normalized);
      const flattened = schema.deriveSegments(lesson[direction]).flatMap((segment) => segment.units);

      assert.equal(
        flattened.length, expected.length,
        `lesson ${lesson.id} (${direction}): segmenting dropped or duplicated content`);
      for (let index = 0; index < expected.length; index += 1) {
        assert.equal(
          `${flattened[index].field}:${flattened[index].index}`,
          `${expected[index].field}:${expected[index].index}`,
          `lesson ${lesson.id} (${direction}): segment content is out of order at position ${index}`);
      }
    }
  }
});

test("segments are derived, never authored", () => {
  /*
   * The same rule flashcards follow. A `segments` key checked into a lesson
   * would go stale the first time anyone edited a line of dialogue, and it
   * would go stale silently.
   */
  for (const lesson of lessons) {
    for (const direction of directions) {
      assert.ok(
        !(lesson[direction] && Object.prototype.hasOwnProperty.call(lesson[direction], "segments")),
        `lesson ${lesson.id} (${direction}) authors a segments key; segments are computed from the content`);
    }
  }
});

/*
 * The catalogue's whole claim is that each lesson teaches one curriculum verb.
 *
 * Before this, coverage was inferred by searching lesson prose for verb forms,
 * which credited a verb for appearing in a translation it was never taught in
 * and missed any verb taught only in a conjugated form the search did not know.
 * A declared `verb` makes the claim checkable. These tests stop it drifting:
 * a typo cannot point at a verb that does not exist, and two lessons cannot
 * quietly cover the same verb while another goes untaught.
 *
 * The legacy eight predate the field and are exempt by name rather than by a
 * blanket "skip anything without a verb" rule, so a new lesson that forgets the
 * field still fails.
 */
const VERBLESS_LEGACY = new Set([
  "greeting-at-the-cafe", "taxi-to-downtown", "market-and-la-napa", "making-plans-parche",
  "at-the-clinic", "team-standup", "seminar-discussion", "job-interview"
]);

test("every lesson names a curriculum verb it is built on", () => {
  const known = new Set(curriculum.map((entry) => entry.spanish));
  for (const lesson of lessons) {
    if (VERBLESS_LEGACY.has(lesson.id)) continue;
    assert.ok(
      typeof lesson.verb === "string" && lesson.verb.trim(),
      `lesson ${lesson.id} names no verb, so nothing proves it teaches any of the curriculum`);
    assert.ok(
      known.has(lesson.verb),
      `lesson ${lesson.id} claims the verb "${lesson.verb}", which is not in data/curriculum.js`);
  }
});

/*
 * A lesson's level label has to agree with the curriculum tier of the verb it
 * teaches. `level` is a free-form display string, so nothing stopped a lesson
 * for an `independent` verb from calling itself "Starter"; with one lesson per
 * verb across three tiers that would quietly turn the level system into
 * decoration. The eight original lessons declare no verb and are exempt.
 */
test("a lesson's level agrees with the curriculum tier of its verb", () => {
  const label = { foundation: "Starter", independent: "Developing", extension: "Extending" };
  const tierOf = new Map(curriculum.map((entry) => [entry.spanish, entry.level]));
  const wrong = [];
  for (const lesson of lessons) {
    if (!lesson.verb) continue;
    const want = label[tierOf.get(lesson.verb)];
    const got = String(lesson.level || "").split("·")[0].trim();
    if (want && got !== want) {
      wrong.push(`${lesson.id}: "${lesson.verb}" is ${tierOf.get(lesson.verb)}, so level must start "${want} · ", not ${JSON.stringify(lesson.level)}`);
    }
  }
  assert.deepStrictEqual(wrong, [], "relabel the lesson rather than loosening the tiers");
});

test("no two lessons claim the same verb", () => {
  const seen = new Map();
  for (const lesson of lessons) {
    if (!lesson.verb) continue;
    const earlier = seen.get(lesson.verb);
    assert.ok(
      !earlier,
      `lessons ${earlier} and ${lesson.id} both claim "${lesson.verb}", `
      + "so one curriculum verb is taught twice and another not at all");
    seen.set(lesson.verb, lesson.id);
  }
});

/*
 * Verbs whose real stems cannot be derived from the infinitive by rule. Colombian
 * dialogue reaches for the strong preterite constantly -- "dijo", "hizo", "tuve",
 * "puse" -- so a lesson can teach "decir" thoroughly without any form that starts
 * "dec". Listing them beats exempting them, which would switch the check off.
 */
const STRONG_STEMS = {
  decir: ["dij", "dic", "dig"],
  hacer: ["hic", "hiz", "hag"],
  tener: ["tuv", "tien", "teng"],
  poder: ["pud", "pued"],
  poner: ["pus", "pon", "pong"],
  saber: ["sup", "sep"],
  querer: ["quis", "quier"],
  venir: ["vin", "vien", "veng"],
  traer: ["traj", "traig"],
  conducir: ["conduj", "conduzc"],
  conocer: ["conozc", "conoc"],
  seguir: ["sig", "sigu"],
  oír: ["oig", "oy"],
  jugar: ["jueg", "jug"],
};

test("a lesson's declared verb is actually spoken in its dialogue", () => {
  /*
   * Declaring the verb is cheap; teaching it is not. A lesson could name
   * "conducir" and never once put it in a character's mouth, which is exactly
   * the gap the old inferred coverage hid. Stems rather than whole words,
   * because the dialogue will nearly always carry a conjugated form -- "soy",
   * "conduzco" -- not the infinitive.
   */
  /*
   * Colombian speech is full of stem-changing verbs, and the changed stem is
   * usually the only one a dialogue ever says: "poder" shows up as "puede",
   * never as "pod". Matching the infinitive's root alone would fail every
   * o->ue, e->ie, e->i and u->ue verb in the curriculum, so accept the
   * diphthongised stems too.
   */
  const stems = (verb) => {
    const root = verb.replace(/se$/, "").replace(/[aeiouáéíóú]?[rn]$/, "").toLowerCase();
    if (!root) return [];
    const variants = new Set([root, ...(STRONG_STEMS[verb] || [])]);
    const swap = (from, to) => {
      const at = root.lastIndexOf(from);
      if (at !== -1) variants.add(root.slice(0, at) + to + root.slice(at + from.length));
    };
    swap("o", "ue");
    swap("e", "ie");
    swap("e", "i");
    swap("u", "ue");
    /*
     * -ir stem-changers raise the vowel in the third-person preterite and the
     * gerund -- "murió", "durmió", "pidió", "sintió" -- and in a scene built
     * around one event that is very often the only form anybody says. Without
     * this, the morir lesson fails while containing three correct uses of it.
     *
     * Scoped to -ir because o->u does not happen in -ar or -er verbs, and an
     * unscoped rule would hand "comer" the stem "cum" and let a passing
     * mention of "cumpleaños" stand in for anybody actually eating.
     */
    if (/ir(se)?$/.test(verb)) swap("o", "u");
    return [...variants].map((variant) => variant.slice(0, 4));
  };
  for (const lesson of lessons) {
    if (!lesson.verb) continue;
    const spoken = (lesson.es?.dialogue || [])
      .map((line) => (typeof line === "string" ? line : line.target || ""))
      .join(" ")
      .toLowerCase();
    const roots = stems(lesson.verb);
    const irregular = /^(ser|ir|estar|haber|ver|dar)$/.test(lesson.verb);
    assert.ok(
      irregular || roots.some((root) => spoken.includes(root)),
      `lesson ${lesson.id} claims "${lesson.verb}" but no dialogue line contains any of ${roots.join(", ")}`);
  }
});

/*
 * The tests find block files by globbing the directory; the browser finds them
 * only if index.html has a script tag. Those two facts can disagree, and when
 * they do the suite goes green over a page that is missing lessons -- the worst
 * possible split, because every automated signal says the content shipped.
 *
 * Order matters as much as presence. data/lessons.js declares the array the
 * blocks push onto, so a block tag placed above it throws on load.
 */
test("every lesson block is loaded by the page, after the array it pushes onto", () => {
  const html = read("index.html");
  const srcs = [...html.matchAll(/<script\s+src="([^"]+)"/g)].map((match) => match[1]);
  const declaredAt = srcs.indexOf("data/lessons.js");

  assert.ok(declaredAt >= 0, "index.html never loads data/lessons.js, so no block has an array to push onto");

  for (const file of lessonBlockFiles()) {
    const at = srcs.indexOf(file);
    assert.ok(
      at >= 0,
      `${file} holds lessons that the tests load and the page does not. `
      + "Add a script tag to index.html, or the content ships only to the test suite.");
    assert.ok(
      at > declaredAt,
      `${file} is loaded before data/lessons.js, so it pushes onto an array that does not exist yet`);
  }
});

test("the page loads no lesson block that is not on disk", () => {
  const html = read("index.html");
  const srcs = [...html.matchAll(/<script\s+src="(data\/lessons\/[^"]+)"/g)].map((match) => match[1]);
  const present = new Set(lessonBlockFiles());
  for (const src of srcs) {
    assert.ok(
      present.has(src),
      `index.html loads ${src}, which does not exist. A renamed or deleted block leaves a 404 `
      + "that the tests would otherwise never see.");
  }
});

/*
 * A block file that forgets markSource still renders, still passes every
 * content check, and still sends anyone who flags its Spanish to the wrong
 * file -- so the failure is invisible until a native speaker gives up looking.
 */
test("every lesson block stamps the file it lives in", () => {
  for (const file of lessonBlockFiles()) {
    const source = read(file);
    assert.ok(
      source.includes(`markSource(lessons, "${file}")`),
      `${file} must end with markSource(lessons, "${file}"); or the review tooling will name the wrong file`);
  }
});

test("every lesson knows which file it came from", () => {
  for (const lesson of lessons) {
    assert.ok(lesson.sourceFile, `${lesson.id}: no sourceFile; markSource did not claim it`);
    assert.ok(Number.isInteger(lesson.sourceIndex), `${lesson.id}: no sourceIndex`);
  }
});
