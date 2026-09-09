/*
 * Flashcards are derived, never authored.
 *
 * Nothing in this file is content. Every card is built from what already
 * exists elsewhere in the app — lesson vocabulary, dialogue, culture notes and
 * practice questions, the verb curriculum, and the fluency list. Add a lesson
 * to data/lessons.js or a verb to data/curriculum.js and the matching cards
 * appear here on the next load, in both directions, with no edit to make.
 *
 * That also means there is exactly one place to correct a mistake: the source
 * content. Flashcards carry no separate wording to drift out of sync.
 */

/* Cards are dealt in sets of this size so a round stays short enough to finish. */
const FLASHCARD_SET_SIZE = 10;

/*
 * Split into sets of at most `size`, balanced rather than greedy.
 *
 * Greedy chunking turns 13 cards into a set of 10 and a stub of 3, and a
 * three-card round is not a review — it is an interruption. Balancing spreads
 * the same cards over 7 and 6. Exact multiples are unaffected: 200 verbs are
 * still 20 sets of 10.
 */
function flashcardSplit(cards, size = FLASHCARD_SET_SIZE) {
  const list = Array.isArray(cards) ? cards.slice() : [];
  const limit = Math.max(1, Math.floor(size) || FLASHCARD_SET_SIZE);
  if (list.length <= limit) return list.length ? [list] : [];
  const count = Math.ceil(list.length / limit);
  const base = Math.floor(list.length / count);
  const remainder = list.length % count;
  const sets = [];
  let cursor = 0;
  for (let index = 0; index < count; index += 1) {
    const take = base + (index < remainder ? 1 : 0);
    sets.push(list.slice(cursor, cursor + take));
    cursor += take;
  }
  return sets;
}

/* The language the learner is reaching for, and the one they lean on. */
function flashcardLanguages(direction) {
  const target = direction === "en" ? "en" : "es";
  return { target, support: target === "es" ? "en" : "es" };
}

function flashcardSlug(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function flashcardSentenceCase(value) {
  const text = String(value).trim();
  return text ? text[0].toUpperCase() + text.slice(1) : text;
}

/*
 * One lesson becomes a topic: its vocabulary, what each line means, how each
 * line sounds, the context note, and the practice question. Cards are ordered
 * by kind so that splitting a lesson keeps the same line's meaning and
 * pronunciation cards out of the same set.
 */
function flashcardsFromLesson(lesson, direction) {
  const content = lesson && lesson[direction];
  if (!content) return [];
  const { target, support } = flashcardLanguages(direction);
  const key = `${lesson.id}/${direction}`;
  const cards = [];

  (content.vocabulary || []).forEach(([term, meaning], index) => {
    cards.push({
      id: `${key}/vocabulary/${index}`,
      kind: "vocabulary",
      ask: "What does this mean here?",
      front: term,
      frontLang: target,
      back: meaning,
      backLang: null,
      note: null
    });
  });

  (content.dialogue || []).forEach(([speaker, line, translation], index) => {
    cards.push({
      id: `${key}/meaning/${index}`,
      kind: "meaning",
      ask: `${speaker} says this. What does it mean?`,
      front: line,
      frontLang: target,
      back: translation,
      backLang: support,
      note: null
    });
  });

  (content.dialogue || []).forEach(([, line, , pronunciation], index) => {
    cards.push({
      id: `${key}/pronunciation/${index}`,
      kind: "pronunciation",
      ask: "How would you say this out loud?",
      front: line,
      frontLang: target,
      back: pronunciation,
      backLang: null,
      note: null
    });
  });

  if (content.situation && content.note) {
    cards.push({
      id: `${key}/context`,
      kind: "context",
      ask: "Why does the language work the way it does here?",
      front: content.situation,
      frontLang: target,
      back: content.note,
      backLang: null,
      note: null
    });
  }

  const answer = (content.choices || [])[content.answer];
  if (content.prompt && answer) {
    cards.push({
      id: `${key}/practice`,
      kind: "practice",
      ask: "Answer from the situation, not from a dictionary.",
      front: content.prompt,
      frontLang: null,
      back: answer,
      backLang: null,
      note: null
    });
  }

  return cards;
}

/*
 * Verbs are drilled productively: you are shown the language you already have
 * and asked for the one you are building, which is the harder direction and
 * the one that actually shows up in conversation.
 */
function flashcardFromVerb(verb, direction) {
  const { target, support } = flashcardLanguages(direction);
  const learning = target === "es" ? verb.spanish : verb.english;
  const known = target === "es" ? verb.english : verb.spanish;
  const forms = verb.forms || {};
  return {
    id: `${verb.id}/${direction}`,
    kind: "verb",
    ask: "Say it in the language you are learning.",
    front: known,
    frontLang: support,
    back: learning,
    backLang: target,
    note: target === "es" && forms.presentYo
      ? `yo ${forms.presentYo} · ayer ${forms.preteriteYo} · ${forms.participle}`
      : null
  };
}

function flashcardFromFluency(item, index, direction) {
  const [spanish, english, type, region, note] = item;
  const { target, support } = flashcardLanguages(direction);
  return {
    id: `fluency/${index}/${direction}`,
    kind: "fluency",
    ask: "How would you say this naturally?",
    front: target === "es" ? english : spanish,
    frontLang: support,
    back: target === "es" ? spanish : english,
    backLang: target,
    note: `${note} (${type} · ${region})`
  };
}

/*
 * Topics, in the order a learner would meet them: the situations they have
 * studied, then the verbs behind them, then the phrases that hold a
 * conversation together. Levels are read from the data rather than listed
 * here, so a new verb level becomes a new topic on its own.
 */
function flashcardTopics(direction, sources) {
  const { lessons = [], curriculum = [], fluencyItems = [] } = sources || {};
  const topics = [];

  for (const lesson of lessons) {
    const cards = flashcardsFromLesson(lesson, direction);
    if (!cards.length) continue;
    topics.push({
      id: `lesson-${lesson.id}`,
      group: "Situations",
      title: lesson[direction].title,
      meta: lesson.level,
      cards
    });
  }

  for (const level of [...new Set(curriculum.map((verb) => verb.level))]) {
    const cards = curriculum.filter((verb) => verb.level === level).map((verb) => flashcardFromVerb(verb, direction));
    if (!cards.length) continue;
    topics.push({
      id: `verbs-${flashcardSlug(level)}`,
      group: "Verbs",
      title: `Verbs · ${flashcardSentenceCase(level)}`,
      meta: `${cards.length} high-frequency verbs`,
      cards
    });
  }

  const fluency = fluencyItems.map((item, index) => flashcardFromFluency(item, index, direction));
  if (fluency.length) {
    topics.push({
      id: "fluency",
      group: "Fluency",
      title: "Connectors and softeners",
      meta: `${fluency.length} phrases that keep a conversation moving`,
      cards: fluency
    });
  }

  return topics;
}

/* Every topic, flattened into the sets a learner actually picks from. */
function flashcardSets(direction, sources, size = FLASHCARD_SET_SIZE) {
  return flashcardTopics(direction, sources).flatMap((topic) => {
    const groups = flashcardSplit(topic.cards, size);
    return groups.map((cards, index) => ({
      id: `${topic.id}/${index + 1}`,
      topicId: topic.id,
      group: topic.group,
      title: topic.title,
      meta: topic.meta,
      index,
      total: groups.length,
      label: groups.length === 1
        ? `${cards.length} cards`
        : `Set ${index + 1} of ${groups.length} · ${cards.length} cards`,
      cards
    }));
  });
}
