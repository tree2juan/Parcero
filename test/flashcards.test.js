const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const bundle = [
  read("data/lessons.js"),
  read("data/curriculum.js"),
  read("data/flashcards.js"),
  "({ lessons, curriculum, fluencyItems, FLASHCARD_SET_SIZE, flashcardSlug, flashcardSplit, flashcardsFromLesson, flashcardTopics, flashcardSets });"
].join("\n");

const {
  lessons, curriculum, fluencyItems,
  FLASHCARD_SET_SIZE, flashcardSlug, flashcardSplit, flashcardsFromLesson, flashcardTopics, flashcardSets
} = vm.runInNewContext(bundle, {}, { filename: "parcero-flashcard-bundle.js" });

const directions = ["es", "en"];
const sources = { lessons, curriculum, fluencyItems };
const isText = (value) => typeof value === "string" && value.trim().length > 0;
const duplicates = (list) => [...new Set(list.filter((item, index) => list.indexOf(item) !== index))];

/* ---------- splitting ---------- */

test("a set never exceeds the set size", () => {
  for (let length = 1; length <= 240; length += 1) {
    const sets = flashcardSplit(Array.from({ length }, (unused, index) => index), FLASHCARD_SET_SIZE);
    for (const set of sets) {
      assert.ok(set.length <= FLASHCARD_SET_SIZE, `${length} cards produced a set of ${set.length}`);
    }
  }
});

test("splitting is balanced, so no round is a stub", () => {
  for (let length = 1; length <= 240; length += 1) {
    const sets = flashcardSplit(Array.from({ length }, (unused, index) => index), FLASHCARD_SET_SIZE);
    if (sets.length < 2) continue;
    const smallest = Math.min(...sets.map((set) => set.length));
    assert.ok(
      smallest * 2 >= FLASHCARD_SET_SIZE,
      `${length} cards left a round of ${smallest}, which is too short to be worth starting`
    );
  }
});

test("splitting keeps every card, once, in order", () => {
  const cards = Array.from({ length: 137 }, (unused, index) => `card-${index}`);
  const flat = Array.from(flashcardSplit(cards, FLASHCARD_SET_SIZE).flat());
  assert.deepStrictEqual(flat, cards);
});

test("an exact multiple of the set size splits evenly", () => {
  const sets = flashcardSplit(Array.from({ length: 200 }, (unused, index) => index), 10);
  assert.strictEqual(sets.length, 20);
  assert.deepStrictEqual([...new Set(sets.map((set) => set.length))], [10]);
});

test("an empty deck produces no sets at all", () => {
  assert.strictEqual(flashcardSplit([], FLASHCARD_SET_SIZE).length, 0);
  assert.strictEqual(flashcardSets("es", { lessons: [], curriculum: [], fluencyItems: [] }).length, 0);
});

/* ---------- the decks ---------- */

test("every card is complete, in both directions", () => {
  for (const direction of directions) {
    for (const topic of flashcardTopics(direction, sources)) {
      assert.ok(topic.cards.length > 0, `${topic.id}: an empty topic must not be offered`);
      for (const card of topic.cards) {
        assert.ok(isText(card.id), `${topic.id}: a card is missing its id`);
        assert.ok(isText(card.kind), `${card.id}: missing kind`);
        assert.ok(isText(card.askKey), `${card.id}: missing the question it is asking`);
        assert.ok(isText(card.front), `${card.id}: missing a front`);
        assert.ok(isText(card.back), `${card.id}: missing an answer`);
        for (const key of ["frontLang", "backLang"]) {
          assert.ok(
            card[key] === null || directions.includes(card[key]),
            `${card.id}: ${key} must be "es", "en" or null, not ${JSON.stringify(card[key])}`
          );
        }
        assert.ok(card.note === null || isText(card.note), `${card.id}: an empty note must be null`);
      }
    }
  }
});

test("card ids are unique within a direction", () => {
  for (const direction of directions) {
    const ids = flashcardTopics(direction, sources).flatMap((topic) => topic.cards.map((card) => card.id));
    assert.deepStrictEqual(duplicates(ids), [], `${direction}: two cards share an id`);
  }
});

test("a card never answers itself", () => {
  for (const direction of directions) {
    for (const topic of flashcardTopics(direction, sources)) {
      for (const card of topic.cards) {
        assert.notStrictEqual(card.front, card.back, `${card.id}: the answer is the prompt`);
      }
    }
  }
});

test("sets carry every card of their topic, once, in order", () => {
  for (const direction of directions) {
    const topics = flashcardTopics(direction, sources);
    const sets = flashcardSets(direction, sources);
    for (const topic of topics) {
      const mine = sets.filter((set) => set.topicId === topic.id);
      assert.ok(mine.length > 0, `${topic.id}: produced no sets`);
      assert.deepStrictEqual(
        mine.flatMap((set) => set.cards.map((card) => card.id)),
        topic.cards.map((card) => card.id),
        `${topic.id}: sets do not reconstruct the topic`
      );
      mine.forEach((set, index) => {
        assert.strictEqual(set.index, index);
        assert.strictEqual(set.total, mine.length);
        assert.ok(isText(set.groupKey), `${set.id}: a set needs a group a learner can read`);
      });
    }
    assert.deepStrictEqual(duplicates(sets.map((set) => set.id)), [], `${direction}: two sets share an id`);
  }
});

test("every lesson, verb level and the fluency list becomes a topic", () => {
  const topics = flashcardTopics("es", sources);
  for (const lesson of lessons) {
    assert.ok(topics.some((topic) => topic.id === `lesson-${lesson.id}`), `no flashcards for lesson ${lesson.id}`);
  }
  for (const level of new Set(curriculum.map((verb) => verb.level))) {
    assert.ok(
      topics.some((topic) => topic.id === `verbs-${flashcardSlug(level)}` && topic.metaCount > 0),
      `no verb topic for ${level}`
    );
  }
  const verbCards = topics.filter((topic) => topic.groupKey === "deck.group.verbs").reduce((total, topic) => total + topic.cards.length, 0);
  assert.strictEqual(verbCards, curriculum.length, "every verb should be drillable");
  assert.ok(topics.some((topic) => topic.id === "fluency"), "the fluency list should be drillable");
});

/*
 * Read a lesson row the way a reader of the data would, tolerating both the
 * positional tuples and the named objects. Deliberately a second, independent
 * implementation rather than the derivation's own accessor: a test that reads
 * rows through the code it is checking cannot fail when that code is wrong.
 */
function field(row, name, index) {
  if (Array.isArray(row)) return index == null ? undefined : row[index];
  return row[name];
}

test("lesson cards are drawn from the lesson, not written separately", () => {
  const lesson = lessons[0];
  const topic = flashcardTopics("es", sources).find((item) => item.id === `lesson-${lesson.id}`);
  const backs = topic.cards.map((card) => card.back);
  const fronts = topic.cards.map((card) => card.front);
  for (const row of lesson.es.vocabulary) {
    const term = field(row, "term", 0);
    const meaning = field(row, "explanation", 1);
    assert.ok(fronts.includes(term), `vocabulary "${term}" is missing from the deck`);
    assert.ok(backs.includes(meaning), `the explanation of "${term}" is missing from the deck`);
  }
  for (const row of lesson.es.dialogue) {
    const line = field(row, "target", 1);
    const translation = field(row, "translation", 2);
    const pronunciation = field(row, "pronunciation", 3);
    assert.ok(fronts.includes(line), `dialogue line "${line}" is missing from the deck`);
    assert.ok(backs.includes(translation), "a dialogue translation is missing from the deck");
    assert.ok(backs.includes(pronunciation), "a pronunciation respelling is missing from the deck");
  }
  assert.ok(backs.includes(lesson.es.note), "the culture note is missing from the deck");
  assert.ok(backs.includes(lesson.es.choices[lesson.es.answer]), "the practice answer is missing from the deck");
});

test("the direction decides which language is asked for and which is recalled", () => {
  for (const direction of directions) {
    const other = direction === "es" ? "en" : "es";
    const verbs = flashcardTopics(direction, sources).find((topic) => topic.groupKey === "deck.group.verbs");
    const [card] = verbs.cards;
    const verb = curriculum[0];
    assert.strictEqual(card.back, direction === "es" ? verb.spanish : verb.english);
    assert.strictEqual(card.front, direction === "es" ? verb.english : verb.spanish);
    assert.strictEqual(card.backLang, direction);
    assert.strictEqual(card.frontLang, other);
  }
});

test("set ids survive a change of direction, so switching keeps your place", () => {
  const [spanish, english] = directions.map((direction) => flashcardSets(direction, sources).map((set) => set.id));
  assert.deepStrictEqual(spanish, english);
});

test("new content flows into the decks with no edit here", () => {
  const before = flashcardSets("es", sources);
  const extraLesson = JSON.parse(JSON.stringify(lessons[0]));
  extraLesson.id = "a-brand-new-situation";
  const after = flashcardSets("es", {
    ...sources,
    lessons: [...lessons, extraLesson],
    curriculum: [...curriculum, { ...curriculum[0], id: "verb-new", level: "a-new-level" }]
  });
  assert.ok(after.length > before.length, "adding content should add sets");
  assert.ok(after.some((set) => set.topicId === "lesson-a-brand-new-situation"), "a new lesson should become a topic");
  assert.ok(after.some((set) => set.topicId === "verbs-a-new-level"), "a new verb level should become a topic");
});

/*
 * The shape guard.
 *
 * Lesson rows are migrating from positional tuples to named objects carrying
 * far more per entry. Reading a row positionally does not degrade when the row
 * becomes an object — it throws, because objects are not iterable — so this
 * asserts equivalence rather than merely that nothing crashed. A row read
 * positionally anywhere in the derivation fails here.
 *
 * Equivalence is over the fields a tuple can express. The object rows also
 * carry fields with no tuple slot, which are deliberately included here to
 * prove that a field feeding no card changes nothing.
 */
test("a lesson reads the same whether its rows are tuples or named objects", () => {
  const asTuples = {
    id: "shape-check",
    level: "Starter · Shapes",
    es: {
      title: "Prueba de forma",
      situation: "Una situación de prueba.",
      note: "Una nota de prueba.",
      dialogue: [["Ana", "¿Cómo vas?", "How's it going?", "KOH-moh vahs"]],
      vocabulary: [["parcero", "friend, mate"]],
      prompt: "¿Qué significa “parcero”?",
      choices: ["a stranger", "a friend", "a coffee"],
      answer: 1
    }
  };

  const asObjects = JSON.parse(JSON.stringify(asTuples));
  asObjects.es.dialogue = [{
    speaker: "Ana",
    target: "¿Cómo vas?",
    translation: "How's it going?",
    pronunciation: "KOH-moh vahs",
    literal: "How you go?",
    why: "A standard Colombian greeting."
  }];
  asObjects.es.vocabulary = [{
    term: "parcero",
    explanation: "friend, mate",
    literal: "partner",
    useWhen: "Talking to a friend.",
    related: ["parce"]
  }];

  const fromTuples = flashcardsFromLesson(asTuples, "es");
  const fromObjects = flashcardsFromLesson(asObjects, "es");

  assert.ok(fromTuples.length > 0, "the tuple shape should still produce cards");
  assert.deepStrictEqual(
    fromObjects,
    fromTuples,
    "the same lesson in either row shape must produce identical cards"
  );
});

test("extra practice questions become cards without an edit here", () => {
  const lesson = JSON.parse(JSON.stringify(lessons[0]));
  const before = flashcardsFromLesson(lesson, "es").filter((card) => card.kind === "practice");
  lesson.es.practiceExtra = (lesson.es.practiceExtra || []).concat([
    { prompt: "¿Una pregunta añadida?", choices: ["no", "sí"], answer: 1, tests: "extras become cards" }
  ]);
  const after = flashcardsFromLesson(lesson, "es").filter((card) => card.kind === "practice");

  assert.strictEqual(after.length, before.length + 1, "an added question should add a card");
  assert.ok(after.some((card) => card.back === "sí"), "the card should answer with the declared choice");
  assert.deepStrictEqual(
    duplicates(after.map((card) => card.id)),
    [],
    "extra practice cards need their own ids"
  );
});

/*
 * Kinds that current content happens not to produce are still shipped strings.
 * Deriving the checked list from real content cannot see them, so the list is
 * read out of the derivation itself: a kind added without wording fails here
 * rather than reaching a reader as a raw key.
 */
test("every card kind the derivation can emit is named and asked in both languages", () => {
  const { UI_STRINGS } = require(path.join(root, "i18n.js"));
  const source = read("data/flashcards.js");
  const kinds = [...new Set([...source.matchAll(/\bkind:\s*"([\w-]+)"/g)].map((match) => match[1]))];
  const askKeys = [...new Set([...source.matchAll(/\baskKey:\s*"(deck\.[\w.]+)"/g)].map((match) => match[1]))];
  const ui = read("flashcards.js");
  const labels = ui.slice(ui.indexOf("const KIND_LABELS"), ui.indexOf("const FALLBACK"));

  assert.ok(kinds.length > 0, "the derivation should emit at least one kind");
  const missing = [];
  for (const language of ["en", "es"]) {
    for (const kind of kinds) {
      if (UI_STRINGS[language][`deck.kind.${kind}`] === undefined) missing.push(`${language}: deck.kind.${kind}`);
    }
    for (const key of askKeys) {
      if (UI_STRINGS[language][key] === undefined) missing.push(`${language}: ${key}`);
    }
  }
  assert.deepStrictEqual(missing, [], "card kinds the string tables do not cover");

  for (const kind of kinds) {
    assert.match(labels, new RegExp(`\\b${kind}:\\s*"`), `${kind} has no English fallback label`);
  }
});

/*
 * The richer lesson fields are optional, so a lesson without them produces
 * fewer cards rather than failing. That is right, and it is also how a renamed
 * field would look: cards quietly stop being made and nothing complains. This
 * pins each field name to the card it feeds, so a shape change is loud.
 */
test("a lesson carrying the richer fields produces a card of every kind", () => {
  const rich = {
    id: "rich-shape",
    level: "Starter · Rich",
    es: {
      title: "Lección rica",
      situation: "Una situación de prueba.",
      note: "Una nota de contexto.",
      setting: { who: "Dos vecinos que se ven a diario.", what: "Un saludo.", when: "Por la mañana.", where: "La tienda.", why: "Cortesía." },
      address: { form: "tú", who: "Vecinos.", why: "Es el trato normal entre vecinos.", ifYouSwitch: "Usted marca distancia." },
      dialogue: [{ speaker: "Ana", target: "¿Cómo vas?", translation: "How's it going?", pronunciation: "KOH-moh vahs", literal: "How you go?", why: "Saludo corriente." }],
      vocabulary: [{
        term: "parcero",
        explanation: "friend, mate",
        literal: "partner",
        useWhen: "Con amigos.",
        avoidWhen: "En una entrevista.",
        register: "casual",
        region: "General Colombian.",
        related: ["parce"],
        example: { target: "¿Todo bien, parcero?", translation: "All good, mate?" }
      }],
      culture: [{ label: "El diminutivo es cortesía", body: "Añadir -ito suaviza la frase, no encoge la cosa." }],
      pitfalls: [{ mistake: "Saying “un café” and expecting a tinto", whyItFails: "It is vague in a tienda.", sayInstead: "¿Me regalas un tinto?" }],
      variations: [{ form: "¿Me regala un tinto?", register: "polite (usted)", region: "General", whenToUse: "With someone much older." }],
      prompt: "¿Qué significa “parcero”?",
      choices: ["a stranger", "a friend", "a coffee"],
      answer: 1
    }
  };

  const cards = flashcardsFromLesson(rich, "es");
  const byKind = new Map(cards.map((card) => [card.kind, card]));

  for (const kind of ["vocabulary", "meaning", "pronunciation", "example", "region", "context", "address", "culture", "pitfall", "variation", "practice"]) {
    assert.ok(byKind.has(kind), `the rich lesson should produce a ${kind} card`);
  }

  // Each new kind reads the field it is meant to read, front and back.
  assert.strictEqual(byKind.get("example").front, "¿Todo bien, parcero?");
  assert.strictEqual(byKind.get("example").back, "All good, mate?");
  assert.strictEqual(byKind.get("region").front, "parcero");
  assert.strictEqual(byKind.get("region").back, "General Colombian.");
  assert.strictEqual(byKind.get("pitfall").back, "¿Me regalas un tinto?");
  assert.strictEqual(byKind.get("pitfall").note, "It is vague in a tienda.");
  assert.strictEqual(byKind.get("variation").back, "¿Me regala un tinto?");
  assert.strictEqual(byKind.get("culture").back, "Añadir -ito suaviza la frase, no encoge la cosa.");
  assert.strictEqual(byKind.get("address").back, "tú");

  // The address card is cued by the relationship, not the scene, so it does not
  // ask the same question the context card already asks.
  assert.strictEqual(byKind.get("address").front, "Dos vecinos que se ven a diario.");
  assert.notStrictEqual(byKind.get("address").front, byKind.get("context").front);

  assert.deepStrictEqual(duplicates(cards.map((card) => card.id)), [], "rich cards need unique ids");
  for (const card of cards) {
    assert.ok(isText(card.front) && isText(card.back), `${card.kind} card is incomplete`);
    assert.notStrictEqual(card.front, card.back, `${card.kind} card answers itself`);
  }
});

test("a lesson without the richer fields still builds, and adds no empty cards", () => {
  const plain = {
    id: "plain-shape",
    level: "Starter · Plain",
    es: {
      title: "Lección sencilla",
      situation: "Una situación.",
      note: "Una nota.",
      dialogue: [["Ana", "¿Cómo vas?", "How's it going?", "KOH-moh vahs"]],
      vocabulary: [["parcero", "friend, mate"]],
      prompt: "¿Qué significa “parcero”?",
      choices: ["a stranger", "a friend"],
      answer: 1
    }
  };

  const kinds = new Set(flashcardsFromLesson(plain, "es").map((card) => card.kind));
  assert.deepStrictEqual(
    [...kinds].sort(),
    ["context", "meaning", "practice", "pronunciation", "vocabulary"],
    "a lesson without the richer fields should produce only the older kinds"
  );
});

/* ---------- interface language ---------- */

test("every string the deck asks for is translated in both languages", () => {
  const { UI_STRINGS } = require(path.join(root, "i18n.js"));
  const missing = [];
  const want = (key) => {
    for (const language of ["en", "es"]) {
      if (UI_STRINGS[language][key] === undefined) missing.push(`${language}: ${key}`);
    }
  };

  // Keys the derived decks emit, taken from the real content rather than a list
  // here, so new lessons and new verb levels are checked too.
  for (const direction of directions) {
    for (const topic of flashcardTopics(direction, sources)) {
      for (const key of [topic.groupKey, topic.titleKey, topic.levelKey, topic.metaKey]) {
        if (key) want(key);
      }
      for (const card of topic.cards) {
        want(card.askKey);
        want(`deck.kind.${card.kind}`);
      }
    }
  }

  // Keys the swipe UI asks for. Matched as literals rather than by call shape,
  // so both arms of t(flag ? "deck.a" : "deck.b") are checked, not only the key
  // that happens to sit directly after the parenthesis.
  const ui = read("flashcards.js");
  const plurals = new Set([...ui.matchAll(/\btp\("(deck\.[\w.]+)"/g)].map((match) => match[1]));
  for (const key of plurals) {
    want(`${key}.one`);
    want(`${key}.other`);
  }
  for (const [, key] of ui.matchAll(/"(deck\.[\w.]+)"/g)) {
    if (!plurals.has(key)) want(key);
  }

  assert.deepStrictEqual([...new Set(missing)], [], "untranslated flashcard strings");
});

/*
 * The fallback stands in for i18n.js when it is absent, so it has to say the
 * same thing i18n.js would. Asserting only that the table is non-empty passes
 * just as happily when the wording has drifted or the key no longer exists,
 * which is the failure that would actually reach a reader.
 */
test("the English fallback says the same thing as the table it stands in for", () => {
  const { UI_STRINGS } = require(path.join(root, "i18n.js"));
  const ui = read("flashcards.js");
  const block = ui.slice(ui.indexOf("const FALLBACK"), ui.indexOf("function t("));
  const entries = [...block.matchAll(/"(deck\.[\w.]+)":\s*"([^"]+)"/g)];

  assert.ok(entries.length > 0, "the UI should keep an English fallback for when i18n.js is absent");
  for (const [, key, wording] of entries) {
    assert.notStrictEqual(
      UI_STRINGS.en[key],
      undefined,
      `${key} is a fallback for a key i18n.js does not have`
    );
    assert.strictEqual(
      wording,
      UI_STRINGS.en[key],
      `the fallback wording for ${key} has drifted from i18n.js`
    );
  }
});

test("the flashcards section is marked up for translation", () => {
  const html = read("index.html");
  const section = html.slice(html.indexOf('id="flashcards"'), html.indexOf('id="placement"'));
  const untranslated = [...section.matchAll(/<(h2|h3|p|span|button|strong)\b([^>]*)>([^<]+)</g)]
    .filter(([, , attrs, text]) => text.trim() && !attrs.includes("data-i18n"))
    .map(([, tag, , text]) => `<${tag}> ${text.trim()}`);
  assert.deepStrictEqual(untranslated, [], "authored text in the flashcards section needs a data-i18n key");
});

/* ---------- the page ---------- */

test("every element flashcards.js looks up exists in index.html", () => {
  const ui = read("flashcards.js");
  const html = read("index.html");
  const ids = new Set([...ui.matchAll(/\$\("#([\w-]+)"\)/g)].map((match) => match[1]));
  assert.ok(ids.size > 10, "expected flashcards.js to query elements by id");
  for (const id of ids) {
    assert.ok(html.includes(`id="${id}"`), `index.html is missing #${id}, which flashcards.js expects`);
  }
});

test("every class flashcards.js paints exists in the card it builds", () => {
  const ui = read("flashcards.js");
  const shell = ui.slice(ui.indexOf("CARD_SHELL"), ui.indexOf("const deck"));
  const classes = new Set([...ui.matchAll(/querySelector\("\.([\w-]+)"\)/g)].map((match) => match[1]));
  assert.ok(classes.size > 5, "expected flashcards.js to fill the card by class");
  for (const name of classes) {
    assert.ok(shell.includes(`"${name}"`) || shell.includes(`class="${name}`) || shell.includes(` ${name}"`),
      `the card shell has no .${name} to fill`);
  }
});

test("index.html loads the flashcard scripts in dependency order", () => {
  const html = read("index.html");
  for (const file of ["data/flashcards.js", "flashcards.js"]) {
    assert.ok(html.includes(`src="${file}"`), `index.html does not load ${file}`);
  }
  assert.ok(
    html.indexOf('src="data/flashcards.js"') > html.indexOf('src="data/curriculum.js"'),
    "the deck builder reads the curriculum, so it must load after it"
  );
  assert.ok(
    html.indexOf('src="flashcards.js"') > html.indexOf('src="data/flashcards.js"'),
    "flashcards.js depends on data/flashcards.js"
  );
  assert.ok(
    html.indexOf('src="flashcards.js"') < html.indexOf('src="review.js"'),
    "the review scripts stay last so review mode decorates a rendered page"
  );
});

test("the card is reachable without a pointer", () => {
  const html = read("index.html");
  const ui = read("flashcards.js");
  assert.match(html, /id="deck-card"[^>]*tabindex="0"/, "the card must be focusable");
  assert.match(html, /id="deck-card"[^>]*role="button"/, "the card announces itself as operable");
  for (const key of ["ArrowLeft", "ArrowRight", "Enter"]) {
    assert.ok(ui.includes(`"${key}"`), `${key} should drive the deck from the keyboard`);
  }
  for (const id of ["deck-known", "deck-review", "deck-flip", "deck-reset"]) {
    assert.ok(html.includes(`id="${id}"`), `#${id} is the pointer-free equivalent of a swipe`);
  }
});

test("the card leaves vertical scrolling to the page", () => {
  assert.match(
    read("styles.css"),
    /\.flashcard\s*\{[^}]*touch-action:\s*pan-y/,
    "without touch-action: pan-y a swipe deck traps vertical scrolling on a phone"
  );
});
