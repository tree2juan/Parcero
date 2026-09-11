/*
 * The reading room, and the claim a parallel text makes about itself.
 *
 * A bilingual story is two assertions stacked on each other: that the second
 * column really says what the first column says, and that the notes really
 * describe the text above them. Neither is visible to any other check in this
 * repository. The Spanish can be flawless, the English can be flawless, the
 * spelling can be American, the shape can be valid — and the note can still
 * quote a sentence that appears nowhere in the story it claims to explain.
 *
 * That is not hypothetical. The first draft of data/stories.js had a grammar
 * note quoting two sentences, one of which lived in the `caveat` and one of
 * which had been reworded during editing. Both read perfectly. Neither was in
 * the story. `every quoted line really appears in the story` is here because
 * of them, and it is the test this file exists for.
 *
 * The same reasoning drives the glossary check. A word list is worth nothing
 * if it lists words the learner will not meet in the next three paragraphs,
 * and nothing else can tell the difference between a glossary and a guess.
 *
 * Matching is diacritic-insensitive and stem-based on purpose: 'fusilar' is
 * taught as a lemma and appears as 'fusilaba', 'la lámina' appears as
 * 'láminas'. Demanding an exact substring would force the prose to be written
 * around the tests, which is how a gate starts corrupting the thing it guards.
 * Demanding too little is the other failure, so the stem is never shorter than
 * five characters and the term must be found in ITS OWN language's text.
 *
 * Language assertions are exact rather than permissive. classify() abstains
 * with "unknown" on short input, and an earlier bug in this project let an
 * English string through a language gate because abstention was read as a
 * pass. Every text asserted here is long enough for the classifier to commit,
 * so "unknown" fails like any other wrong answer.
 */
const test = require("node:test");
const assert = require("node:assert");
const vm = require("node:vm");
const fs = require("node:fs");
const path = require("node:path");

const { classify } = require("../scripts/prose-language.js");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8").replace(/\r\n/g, "\n");

const { storyItems } = require("../data/stories.js");
const STRUCTURES = vm.runInNewContext(`${read("data/structures.js")}\n;structureItems;`);

const BANDS = ["A1", "A2", "B1", "B2"];
const LANGS = ["es", "en"];
const EXPECTED = { es: "spanish", en: "english" };
/* Explanations are written in the language the learner ALREADY has, which is
   the opposite of the one being studied. So a note's `.en` is read by the
   Spanish learner and must itself be English. Same field, inverted job. */
const NOTE_EXPECTED = { es: "spanish", en: "english" };

const words = (text) => String(text).trim().split(/\s+/).filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
const sentences = (text) => String(text).split(/[.!?]+/).map((part) => part.trim()).filter(Boolean);
const flatten = (text) => String(text).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const ARTICLES = /^(el|la|los|las|un|una|the|a|an|to)\s+/;
/* The longest word carries the meaning; articles and prepositions do not. */
const headwordOf = (term) => {
  const bare = flatten(term).replace(ARTICLES, "");
  return bare.split(/[^a-z0-9]+/).filter(Boolean).sort((a, b) => b.length - a.length)[0] || bare;
};
const stemOf = (term) => {
  const longest = headwordOf(term);
  return longest.slice(0, Math.max(5, Math.floor(longest.length * 0.7)));
};

const textOf = (story, lang) => story.paragraphs.map((para) => para[lang]).join("\n");

test("every story sits in a band this course actually teaches", () => {
  /*
   * C1 and C2 are not covered anywhere in this product, and a story labeled
   * C1 would be the only place in the app claiming otherwise. Asserting the
   * exact set rather than "is one of" also catches a typo'd band, which would
   * otherwise silently disappear from every filter tab.
   */
  const found = [...new Set(storyItems.map((story) => story.band))].sort();
  for (const band of found) assert.ok(BANDS.includes(band), `story band ${band} is outside A1-B2, which this course does not cover`);
  assert.ok(found.length > 1, "a reading room with one band cannot show progression");
});

test("every story is complete in both languages", () => {
  const seen = new Set();
  for (const story of storyItems) {
    const where = `story ${story.id}`;
    assert.ok(story.id && !seen.has(story.id), `${where} has a missing or duplicate id`);
    seen.add(story.id);
    assert.ok(Number.isInteger(story.minutes) && story.minutes > 0, `${where} needs a positive whole minutes estimate`);
    assert.ok(story.era && String(story.era).trim(), `${where} has no era`);
    for (const lang of LANGS) {
      assert.ok(story.title[lang], `${where} has no ${lang} title`);
      assert.ok(story.blurb[lang], `${where} has no ${lang} blurb`);
      assert.ok(story.place[lang], `${where} has no ${lang} place`);
      assert.ok(story.caveat[lang], `${where} has no ${lang} caveat`);
    }
    assert.ok(story.paragraphs.length >= 5, `${where} is too short to train sustained reading`);
    for (const [index, para] of story.paragraphs.entries()) {
      for (const lang of LANGS) assert.ok(para[lang] && para[lang].trim(), `${where} paragraph ${index + 1} has no ${lang} text`);
      assert.notStrictEqual(para.es, para.en, `${where} paragraph ${index + 1} is the same string twice, so one side was never translated`);
    }
    assert.ok(story.glossary.length >= 5, `${where} needs a glossary worth reading`);
    assert.ok(story.structures.length >= 3, `${where} explains too few structures`);
    assert.ok(story.questions.length >= 3, `${where} asks too few comprehension questions`);
  }
});

test("each half of a story is in the language it claims", () => {
  /*
   * Per paragraph, not per story. Classifying the whole text at once passes a
   * story with one untranslated paragraph in it, because six right answers
   * outvote one wrong one — the aggregate hides exactly the defect worth
   * finding. Measured on the current corpus, classify() commits on 45 of 50
   * individual notes and abstains on the rest, so abstention is tolerated and
   * COUNTED: a wrong answer fails outright, and the cap below stops the check
   * quietly decaying into nothing if later prose becomes unreadable to it.
   */
  const abstained = [];
  let checked = 0;
  for (const story of storyItems) {
    for (const lang of LANGS) {
      for (const [index, para] of story.paragraphs.entries()) {
        const verdict = classify(para[lang]);
        checked += 1;
        if (verdict === "unknown") { abstained.push(`${story.id}/${lang}/${index + 1}`); continue; }
        assert.strictEqual(verdict, EXPECTED[lang],
          `story ${story.id} paragraph ${index + 1}: the ${lang} text reads as ${verdict}, not ${EXPECTED[lang]}`);
      }
      assert.strictEqual(classify(textOf(story, lang)), EXPECTED[lang],
        `story ${story.id}: the ${lang} text as a whole does not read as ${EXPECTED[lang]}`);
    }
  }
  assert.ok(abstained.length / checked <= 0.25,
    `the language check could not read ${abstained.length} of ${checked} paragraphs, so it is no longer guarding much: ${abstained.join(", ")}`);
});

test("explanations are written in the language the learner already has", () => {
  /*
   * The inversion this project gets wrong most often. A glossary note in the
   * language being studied is unreadable by definition: if the learner could
   * read the note, they would not have needed the note.
   *
   * This test was written checking all of a story's notes as one joined
   * string and was mutation-tested by flipping a single note into the wrong
   * language. It passed. One Spanish note among six English ones does not
   * move the classifier, which made this guard decorative for the single most
   * likely way it can go wrong. Hence one verdict per note.
   */
  const abstained = [];
  let checked = 0;
  for (const story of storyItems) {
    for (const lang of LANGS) {
      const notes = [
        ...story.glossary.map((entry) => [`glossary "${entry[lang]}"`, entry.note[lang]]),
        ...story.structures.map((item) => [`structure ${item.key}`, item.note[lang]])
      ];
      for (const [where, note] of notes) {
        assert.ok(note && note.trim(), `story ${story.id} is missing the ${lang} explanation for ${where}`);
        const verdict = classify(note);
        checked += 1;
        if (verdict === "unknown") { abstained.push(`${story.id}/${lang}/${where}`); continue; }
        assert.strictEqual(verdict, NOTE_EXPECTED[lang],
          `story ${story.id}: the ${lang} explanation for ${where} reads as ${verdict} — explanations go in the language the learner already has`);
      }
    }
  }
  assert.ok(abstained.length / checked <= 0.25,
    `the language check could not read ${abstained.length} of ${checked} explanations, so it is no longer guarding much`);
});

test("every quoted line really appears in the story", () => {
  /*
   * THE test in this file. A note quoting a sentence the story does not
   * contain is the exact defect this repository keeps producing: a claim that
   * passes every check because nothing measures it against the thing it
   * describes. Quotes may join two fragments with " / ", and trailing
   * punctuation is trimmed because a quote often stops mid-sentence.
   */
  let checked = 0;
  for (const story of storyItems) {
    for (const item of story.structures) {
      for (const lang of LANGS) {
        const body = flatten(textOf(story, lang));
        for (const raw of String(item.quote[lang]).split(" / ")) {
          const fragment = flatten(raw).replace(/^[\s"'“”«»]+/, "").replace(/[\s.,;:!?…"'“”«»]+$/, "");
          assert.ok(fragment.length > 10, `story ${story.id}: the ${lang} quote for ${item.key} is too short to verify`);
          assert.ok(body.includes(fragment),
            `story ${story.id}: the ${lang} quote for ${item.key} is not in the story text — "${raw}"`);
          checked += 1;
        }
      }
    }
  }
  assert.ok(checked > 10, "expected to have verified a meaningful number of quotes");
});

test("every glossary word is a word the reader is about to meet", () => {
  /*
   * Long words are matched on a stem, because a story that teaches `fusilar`
   * will say "fusilaba" and prose should not be written around a test. Short
   * words get the opposite treatment: `sal` is a legitimate thing to gloss in
   * a story about a salt cathedral, but a bare substring test for it also hits
   * "salir" and "salida", so it is matched as a whole word instead. Short
   * words used to be rejected outright as "too short to check", which blocked
   * real vocabulary rather than catching anything.
   */
  let checked = 0;
  for (const story of storyItems) {
    for (const lang of LANGS) {
      const body = flatten(textOf(story, lang));
      for (const entry of story.glossary) {
        const head = headwordOf(entry[lang]);
        const found = head.length >= 6
          ? body.includes(stemOf(entry[lang]))
          : new RegExp(`\\b${head}(s|es)?\\b`).test(body);
        assert.ok(found,
          `story ${story.id}: the glossary teaches "${entry[lang]}" but the ${lang} story never uses it`);
        checked += 1;
      }
    }
  }
  assert.ok(checked > 100, "expected to have verified a meaningful number of glossary words");
});

test("every structure note points at a structure this course teaches", () => {
  /*
   * The keys are not decoration: they are the join between a story and the
   * grammar catalog, and a key with a typo would quietly teach a structure
   * the learner can never look up.
   */
  const known = new Set(STRUCTURES.map((item) => item.key));
  assert.ok(known.size > 30, "expected to have loaded the structure catalog");
  for (const story of storyItems) {
    const used = new Set();
    for (const item of story.structures) {
      assert.ok(known.has(item.key), `story ${story.id} cites unknown structure "${item.key}"`);
      assert.ok(!used.has(item.key), `story ${story.id} explains "${item.key}" twice`);
      used.add(item.key);
      for (const lang of LANGS) assert.ok(item.label[lang], `story ${story.id}: structure ${item.key} has no ${lang} label`);
    }
  }
});

test("a story's stated reading time matches how much text it holds", () => {
  /*
   * Self-consistency, the same arithmetic that caught a model answer shorter
   * than the word count it taught. The band here is wide because this is a
   * re-reading rate for a learner, not a native skim — but a story claiming
   * four minutes for two thousand words would be lying to the reader about
   * the size of what they are starting.
   */
  for (const story of storyItems) {
    const count = words(textOf(story, "es"));
    const rate = count / story.minutes;
    assert.ok(rate >= 25 && rate <= 120,
      `story ${story.id}: ${count} words in ${story.minutes} min is ${Math.round(rate)} words/min, outside a learner's range`);
  }
});

test("the bands really do get harder", () => {
  /*
   * A label is not a level. If an A1 story and a B2 story have the same
   * sentence length, the tabs are sorting by nothing. Sentence length is a
   * crude measure and a real one, and it is the measure a reader feels first.
   */
  const byBand = new Map();
  for (const story of storyItems) {
    const body = textOf(story, "es");
    const mean = words(body) / sentences(body).length;
    byBand.set(story.band, [...(byBand.get(story.band) || []), mean]);
  }
  const present = BANDS.filter((band) => byBand.has(band));
  const average = (list) => list.reduce((sum, value) => sum + value, 0) / list.length;
  for (let i = 1; i < present.length; i += 1) {
    const lower = average(byBand.get(present[i - 1]));
    const higher = average(byBand.get(present[i]));
    assert.ok(higher > lower,
      `${present[i]} stories average ${higher.toFixed(1)} words per sentence, no more than ${present[i - 1]} at ${lower.toFixed(1)}`);
  }
});

test("the reading gets longer as well as harder", () => {
  /*
   * Sentence length alone is not enough, and the gap was not hypothetical:
   * the first A2 drafts hit their sentence window exactly and still came in at
   * 135-151 words against A1's 154-184, so an A2 reader read LESS than an A1
   * reader. Every per-story check passed. This section exists to train
   * sustained reading, so total volume has to climb with the band too.
   */
  const byBand = new Map();
  for (const story of storyItems) {
    const total = words(textOf(story, "es"));
    byBand.set(story.band, [...(byBand.get(story.band) || []), total]);
  }
  const present = BANDS.filter((band) => byBand.has(band));
  const average = (list) => list.reduce((sum, value) => sum + value, 0) / list.length;
  for (let i = 1; i < present.length; i += 1) {
    const lower = average(byBand.get(present[i - 1]));
    const higher = average(byBand.get(present[i]));
    assert.ok(higher > lower,
      `${present[i]} stories average ${Math.round(higher)} words, no more than ${present[i - 1]} at ${Math.round(lower)}`);
  }
});

test("a paragraph carries an idea, not a single line", () => {
  /*
   * One sentence per paragraph is a list wearing the shape of prose, and it
   * trains nothing the dialogues do not already train. The whole reason this
   * section exists is to make a reader follow a thought past the period.
   */
  for (const story of storyItems) {
    const perPara = sentences(textOf(story, "es")).length / story.paragraphs.length;
    assert.ok(perPara >= 2,
      `${story.id} averages ${perPara.toFixed(1)} sentences per paragraph`);
  }
});

test("the Spanish is the Spanish this course teaches", () => {
  /*
   * Scoped to this file rather than the repo: lessons teach peninsular forms
   * on purpose as contrast, so a global ban would be all false positives. A
   * story has no such excuse — it is Colombian narration, start to finish.
   */
  const source = read("data/stories.js");
  const found = source.match(/\b\w+(áis|éis|aseis|ieseis)\b|\bvosotros\b|\bvuestr[oa]s?\b/g);
  assert.deepStrictEqual(found, null, `data/stories.js uses peninsular forms: ${found && found.join(", ")}`);
});

test("the reading room is wired into the page, after the data it reads", () => {
  const html = read("index.html");
  assert.ok(html.includes('src="data/stories.js"'), "index.html never loads data/stories.js");
  assert.ok(html.indexOf('src="data/stories.js"') < html.indexOf('src="app.js"'),
    "data/stories.js must load before app.js, which reads it at startup");
  assert.ok(html.includes('id="view-stories"'), "index.html has no stories view");
  assert.ok(html.includes('href="#stories"'), "nothing in the nav reaches the reading room");
  for (const id of ["story-list", "story-count", "story-reader", "story-output", "story-back", "story-parallel"]) {
    assert.ok(html.includes(`id="${id}"`), `index.html is missing #${id}, which app.js expects`);
  }
  const app = read("app.js");
  assert.ok(/const VIEWS = \[[^\]]*"stories"/.test(app), "app.js does not register a stories view");
  assert.ok(app.includes('"#stories": "stories"'), "app.js has no route for #stories");
  assert.ok(/function render\(\)[\s\S]{0,900}renderStories\(\)/.test(app),
    "render() must call renderStories(), or switching direction leaves the reading room in the old language");
});

test("every class the reading room paints is a class the stylesheet knows", () => {
  /*
   * The renderer builds its markup as strings, so an unstyled class is not a
   * crash — it is a page that silently loses its layout. Reading the names
   * back out of the source is the only way to notice.
   */
  const sources = `${read("app.js")}\n${read("index.html")}`;
  const css = read("styles.css");
  const names = new Set();
  /* A class attribute built in a template literal contains live code, and the
     quote that opens a conditional inside it ends the attribute as far as any
     regex is concerned. So the conditional classes are harvested from the raw
     source first, and only then are the interpolations blanked out so the
     plain attributes can be read without swallowing code. */
  for (const match of sources.matchAll(/"\s(story-[\w-]+)"/g)) names.add(match[1]);
  const flat = sources.replace(/\$\{[^{}]*\}/g, "");
  for (const match of flat.matchAll(/class="([^"]*story[^"]*)"/g)) {
    for (const name of match[1].split(/\s+/)) if (name.startsWith("story")) names.add(name);
  }
  assert.ok(names.size > 15, `expected to find the reading room's classes, found ${names.size}`);
  assert.ok(names.has("story-para-parallel"), "the conditional parallel class was not harvested, so this check is not seeing everything it paints");
  const missing = [...names].filter((name) => !css.includes(`.${name}`));
  assert.deepStrictEqual(missing, [], `styles.css never mentions: ${missing.join(", ")}`);
});

test("the reading room labels exist in both interface languages", () => {
  const { UI_STRINGS } = require("../i18n.js");
  const keys = [...new Set([...read("app.js").matchAll(/t\("(stories\.[\w.]+)"/g)].map((match) => match[1]))];
  assert.ok(keys.length > 5, "expected app.js to ask for the reading room's labels");
  for (const key of [...keys, "nav.stories", "stories.title", "stories.lead", "stories.howto"]) {
    for (const lang of LANGS) {
      assert.ok(UI_STRINGS[lang][key], `${key} is missing from the ${lang} interface strings`);
    }
  }
});

test("the page still works if the stories never load", () => {
  /*
   * file:// users and a half-finished deploy both produce this. The reading
   * room going empty is acceptable; app.js throwing on startup and taking
   * every other section down with it is not.
   */
  const app = read("app.js");
  assert.match(app, /typeof storyItems === "undefined"/,
    "app.js must tolerate data/stories.js being absent rather than throwing at startup");
});
