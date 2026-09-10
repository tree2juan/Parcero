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
 * Read one field from a lesson row that may be a tuple or a named object.
 *
 * Dialogue and vocabulary rows are migrating from positional tuples to objects
 * carrying much more per entry. Both shapes are valid input and both have to
 * keep working, so no row is ever read positionally: destructuring an object
 * does not degrade to undefined, it throws, because objects are not iterable.
 * The positions here match the tuple order the older rows still use.
 */
function flashcardSlot(row, name, index) {
  if (!row) return "";
  const value = Array.isArray(row) ? (index == null ? undefined : row[index]) : row[name];
  return value == null ? "" : String(value);
}

/*
 * Every practice question for one direction, primary first.
 *
 * The original question lives on the content itself; later ones arrive in
 * practiceExtra. Reading both here means added questions become cards without
 * a change to this file.
 */
function flashcardQuestions(content) {
  const extra = Array.isArray(content.practiceExtra) ? content.practiceExtra : [];
  return [content].concat(extra).filter((question) => question && question.prompt);
}

/*
 * One lesson becomes a topic: its vocabulary and how each word is used, what
 * each line means, how each line sounds, the context and culture notes, the
 * mistakes worth avoiding, the ways the same thing can be said, and the
 * practice questions. Cards are ordered by kind so that splitting a lesson
 * keeps the same line's meaning and pronunciation cards out of the same set.
 *
 * Every kind past the first few reads a field that older lessons do not carry.
 * A lesson without them simply produces fewer cards; a lesson with them needs
 * no edit here.
 */
function flashcardsFromLesson(lesson, direction) {
  const content = lesson && lesson[direction];
  if (!content) return [];
  const { target, support } = flashcardLanguages(direction);
  const key = `${lesson.id}/${direction}`;
  const cards = [];

  (content.vocabulary || []).forEach((entry, index) => {
    const term = flashcardSlot(entry, "term", 0);
    const meaning = flashcardSlot(entry, "explanation", 1);
    if (!term || !meaning) return;
    cards.push({
      id: `${key}/vocabulary/${index}`,
      kind: "vocabulary",
      askKey: "deck.ask.vocabulary",
      front: term,
      frontLang: target,
      back: meaning,
      backLang: null,
      note: null
    });
  });

  (content.dialogue || []).forEach((entry, index) => {
    const line = flashcardSlot(entry, "target", 1);
    const translation = flashcardSlot(entry, "translation", 2);
    if (!line || !translation) return;
    cards.push({
      id: `${key}/meaning/${index}`,
      kind: "meaning",
      askKey: "deck.ask.meaning",
      askValues: { speaker: flashcardSlot(entry, "speaker", 0) },
      front: line,
      frontLang: target,
      back: translation,
      backLang: support,
      note: null
    });
  });

  (content.dialogue || []).forEach((entry, index) => {
    const line = flashcardSlot(entry, "target", 1);
    const pronunciation = flashcardSlot(entry, "pronunciation", 3);
    if (!line || !pronunciation) return;
    cards.push({
      id: `${key}/pronunciation/${index}`,
      kind: "pronunciation",
      askKey: "deck.ask.pronunciation",
      front: line,
      frontLang: target,
      back: pronunciation,
      backLang: null,
      note: null
    });
  });

  (content.vocabulary || []).forEach((entry, index) => {
    const example = entry && !Array.isArray(entry) ? entry.example : null;
    const sentence = flashcardSlot(example, "target", 0);
    const meaning = flashcardSlot(example, "translation", 1);
    if (!sentence || !meaning) return;
    cards.push({
      id: `${key}/example/${index}`,
      kind: "example",
      askKey: "deck.ask.example",
      front: sentence,
      frontLang: target,
      back: meaning,
      backLang: support,
      note: flashcardSlot(entry, "term", 0) || null
    });
  });

  (content.vocabulary || []).forEach((entry, index) => {
    const term = flashcardSlot(entry, "term", 0);
    const region = flashcardSlot(entry, "region");
    if (!term || !region) return;
    cards.push({
      id: `${key}/region/${index}`,
      kind: "region",
      askKey: "deck.ask.region",
      front: term,
      frontLang: target,
      back: region,
      backLang: null,
      note: flashcardSlot(entry, "register") || null
    });
  });

  if (content.situation && content.note) {
    cards.push({
      id: `${key}/context`,
      kind: "context",
      askKey: "deck.ask.context",
      front: content.situation,
      // The scene and the note orient the learner, so both are written in the
      // language they already read, not the one they are building. The lesson
      // page has always taken this for granted -- #lesson-situation carries no
      // lang of its own and inherits the interface language, which is the
      // support language. Tagging the card with `target` contradicted that and
      // announced Spanish scene-setting as English to a screen reader.
      frontLang: support,
      back: content.note,
      backLang: null,
      note: null
    });
  }

  /*
   * Who the speakers are to each other is what decides tú, usted or vos, so
   * the relationship is the cue rather than the scene. The scene is already
   * the front of the context card, and one prompt with two right answers is
   * not a flashcard.
   */
  const address = content.address;
  const addressForm = flashcardSlot(address, "form");
  const addressCue = flashcardSlot(content.setting, "who") || content.situation;
  if (addressForm && addressCue) {
    cards.push({
      id: `${key}/address`,
      kind: "address",
      askKey: "deck.ask.address",
      front: addressCue,
      frontLang: null,
      back: addressForm,
      backLang: null,
      note: flashcardSlot(address, "why") || null
    });
  }

  (content.culture || []).forEach((entry, index) => {
    const label = flashcardSlot(entry, "label", 0);
    const body = flashcardSlot(entry, "body", 1);
    if (!label || !body) return;
    cards.push({
      id: `${key}/culture/${index}`,
      kind: "culture",
      askKey: "deck.ask.culture",
      front: label,
      frontLang: null,
      back: body,
      backLang: null,
      note: null
    });
  });

  (content.pitfalls || []).forEach((entry, index) => {
    const mistake = flashcardSlot(entry, "mistake", 0);
    const sayInstead = flashcardSlot(entry, "sayInstead", 2);
    if (!mistake || !sayInstead) return;
    cards.push({
      id: `${key}/pitfall/${index}`,
      kind: "pitfall",
      askKey: "deck.ask.pitfall",
      front: mistake,
      frontLang: null,
      back: sayInstead,
      backLang: target,
      note: flashcardSlot(entry, "whyItFails", 1) || null
    });
  });

  (content.variations || []).forEach((entry, index) => {
    const whenToUse = flashcardSlot(entry, "whenToUse", 3);
    const form = flashcardSlot(entry, "form", 0);
    if (!whenToUse || !form) return;
    const register = flashcardSlot(entry, "register", 1);
    const region = flashcardSlot(entry, "region", 2);
    cards.push({
      id: `${key}/variation/${index}`,
      kind: "variation",
      askKey: "deck.ask.variation",
      front: whenToUse,
      frontLang: null,
      back: form,
      backLang: target,
      note: [register, region].filter(Boolean).join(" · ") || null
    });
  });

  flashcardQuestions(content).forEach((question, index) => {
    const answer = (question.choices || [])[question.answer];
    if (!answer) return;
    cards.push({
      id: index === 0 ? `${key}/practice` : `${key}/practice/${index}`,
      kind: "practice",
      askKey: "deck.ask.practice",
      front: question.prompt,
      frontLang: null,
      back: answer,
      backLang: null,
      note: null
    });
  });

  return cards;
}

/*
 * The card opens in the language the toggle says you are learning, and the
 * answer is what it means in the language you already have.
 *
 * This used to run the other way for verbs and fluency phrases -- known on the
 * front, target on the back -- on the reasoning that producing the new language
 * is the harder direction. The problem was that nothing else in the deck agreed:
 * every card built from a lesson (vocabulary, dialogue, pronunciation, example,
 * region) already opened on the target. So picking "I want to learn Colombian
 * Spanish" gave a Spanish prompt for a lesson word and an English one for a
 * verb, in the same set, with no way to tell which was coming. The toggle now
 * decides the opening side for every card, which is the thing a learner can
 * actually predict.
 */
function flashcardFromVerb(verb, direction) {
  const { target, support } = flashcardLanguages(direction);
  const learning = target === "es" ? verb.spanish : verb.english;
  const known = target === "es" ? verb.english : verb.spanish;
  const forms = verb.forms || {};
  return {
    id: `${verb.id}/${direction}`,
    kind: "verb",
    askKey: "deck.ask.verb",
    front: learning,
    frontLang: target,
    back: known,
    backLang: support,
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
    askKey: "deck.ask.fluency",
    front: target === "es" ? spanish : english,
    frontLang: target,
    back: target === "es" ? english : spanish,
    backLang: support,
    note: `${note} (${type} · ${region})`
  };
}

/*
 * Slang is drilled the other way round from everything else.
 *
 * Every other card here asks for the language you are building, because
 * production is the harder skill and the one worth practicing. Slang inverts
 * that on purpose: most of this list is language a learner should recognize and
 * not produce, so asking them to generate "gonorrea" from a prompt would be
 * drilling exactly the wrong reflex. The phrase goes on the front, and the back
 * carries the meaning plus the two things that decide whether it can be used at
 * all — where it is said, and whether the learner may say it.
 */
function flashcardFromSlang(item, index, direction) {
  const [phrase, meaning, register, region, safety, note] = item;
  return {
    id: `slang/${index}/${direction}`,
    kind: "slang",
    askKey: "deck.ask.slang",
    front: phrase,
    frontLang: "es",
    back: meaning,
    backLang: direction === "es" ? "en" : "en",
    note: `${safety} · ${register} · ${region}. ${note}`
  };
}

/*
 * Mature cards ask only for recognition, never production. There is no version
 * of this deck that prompts a learner to produce an insult.
 *
 * After Dark rows are objects keyed by city, not the tuples the other reference
 * lists use, and the same term appears once per city with the reading that city
 * gives it. The city therefore belongs on the card: without it the back of two
 * cards with the same front would disagree about how bad the phrase is, which
 * is the one thing this deck exists to get right.
 */
function flashcardFromMature(item, index, direction) {
  const { city, phrase, equivalent, severity, note } = item;
  return {
    id: `mature/${index}/${direction}`,
    kind: "mature",
    askKey: "deck.ask.mature",
    front: direction === "es" ? phrase : equivalent,
    frontLang: direction === "es" ? "es" : "en",
    back: direction === "es" ? equivalent : phrase,
    backLang: direction === "es" ? "en" : "es",
    note: `${severity} · ${city}. ${note}`
  };
}

/*
 * Lexicon cards drill the word the learner is building, in both directions of
 * the app, because a noun is the one thing here where production is genuinely
 * the goal. The gender travels *with* the noun on the back — "portero" learned
 * without "el" is half a word, and the half that is missing is the half that
 * governs every adjective and article that follows it.
 *
 * Being a production drill, the front is always the word the learner already
 * has and the back is always the one they are building. The language tags used
 * to be written out per branch and the `en` branch had them backwards: it put
 * the Spanish term on the front and labeled it English, which is what a screen
 * reader would then have announced it as. They are named off `support` and
 * `target` now, so the tag cannot disagree with the side it is on.
 */
function flashcardFromLexicon(item, index, direction) {
  const [term, english, wordClass, gender, , level, seen, note] = item;
  const { target, support } = flashcardLanguages(direction);
  return {
    id: `lexicon/${index}/${direction}`,
    kind: "lexicon",
    askKey: "deck.ask.lexicon",
    front: target === "es" ? english : term,
    frontLang: support,
    back: target === "es" ? term : english,
    backLang: target,
    note: [gender ? `${wordClass} · ${gender}` : wordClass, note].filter(Boolean).join(". ")
  };
}

function flashcardFromSignal(item, index, direction) {
  const [signal, looksLike, means, , respond] = item;
  return {
    id: `signal/${index}/${direction}`,
    kind: "signal",
    askKey: "deck.ask.signal",
    front: looksLike,
    frontLang: direction === "es" ? "es" : "en",
    back: means,
    backLang: direction === "es" ? "en" : "es",
    note: `${signal} → ${respond}`
  };
}

/*
 * Topics, in the order a learner would meet them: the situations they have
 * studied, then the verbs behind them, then the phrases that hold a
 * conversation together. Levels are read from the data rather than listed
 * here, so a new verb level becomes a new topic on its own.
 *
 * Wording is emitted as i18n keys, not sentences. A topic that carries real
 * content — a lesson's own title and level — passes it straight through,
 * because that is already authored in both directions.
 */
function flashcardTopics(direction, sources) {
  const {
    lessons = [], curriculum = [], fluencyItems = [], lexiconItems = [],
    slangItems = [], matureItems = [], matureSignals = [], matureEnabled = false
  } = sources || {};
  const topics = [];

  for (const lesson of lessons) {
    const cards = flashcardsFromLesson(lesson, direction);
    if (!cards.length) continue;
    topics.push({
      id: `lesson-${lesson.id}`,
      groupKey: "deck.group.situations",
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
      groupKey: "deck.group.verbs",
      titleKey: "deck.topic.verbs",
      // A level the string table has never seen still names itself, in the
      // wording the data used. Untranslated beats blank.
      levelKey: `deck.level.${flashcardSlug(level)}`,
      level: flashcardSentenceCase(level),
      metaKey: "deck.meta.verbs",
      metaCount: cards.length,
      cards
    });
  }

  /*
   * Words are grouped by theme rather than by part of speech. "Twelve nouns"
   * is a grammatical fact about a list; "twelve words about getting around"
   * is a reason to open it, and it puts words next to the situations the
   * lessons already teach — which is where they will be needed.
   */
  for (const theme of [...new Set(lexiconItems.map((item) => item[4]))]) {
    const cards = lexiconItems
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => item[4] === theme)
      .map(({ item, index }) => flashcardFromLexicon(item, index, direction));
    if (!cards.length) continue;
    topics.push({
      id: `lexicon-${flashcardSlug(theme)}`,
      groupKey: "deck.group.lexicon",
      titleKey: "deck.topic.lexicon",
      levelKey: `deck.theme.${flashcardSlug(theme)}`,
      level: flashcardSentenceCase(String(theme).replace(/-/g, " ")),
      metaKey: "deck.meta.lexicon",
      metaCount: cards.length,
      cards
    });
  }

  const fluency = fluencyItems.map((item, index) => flashcardFromFluency(item, index, direction));
  if (fluency.length) {
    topics.push({
      id: "fluency",
      groupKey: "deck.group.fluency",
      titleKey: "deck.topic.fluency",
      metaKey: "deck.meta.fluency",
      metaCount: fluency.length,
      cards: fluency
    });
  }

  /*
   * Slang is split by whether the learner may say it, not by theme. Theme is
   * how you browse a reference; safety is how you study one. A learner drilling
   * the "understand only" deck is doing something different from one drilling
   * the everyday deck, and mixing them would blur the only distinction that
   * actually protects them.
   */
  for (const safety of [...new Set(slangItems.map((item) => item[4]))]) {
    const cards = slangItems
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => item[4] === safety)
      .map(({ item, index }) => flashcardFromSlang(item, index, direction));
    if (!cards.length) continue;
    topics.push({
      id: `slang-${flashcardSlug(safety)}`,
      groupKey: "deck.group.slang",
      titleKey: "deck.topic.slang",
      levelKey: `deck.safety.${flashcardSlug(safety)}`,
      level: flashcardSentenceCase(safety),
      metaKey: "deck.meta.slang",
      metaCount: cards.length,
      cards
    });
  }

  /*
   * The gate is a real gate.
   *
   * It would have been easy to build these cards always and hide the decks in
   * CSS, and it would have been wrong: the deck picker, the progress counts and
   * the review scopes all read this list, so gated content would leak into all
   * three while looking hidden. Nothing is built unless the caller says the
   * reader has passed the age check, and the default is off — a caller that
   * forgets to pass the flag gets the safe answer, not the unsafe one.
   *
   * The comparison is strict on purpose. This flag originates in localStorage,
   * which only ever returns strings, and the string "false" is truthy. A loose
   * check would open the gate for a caller that passed the value meaning it
   * should stay shut.
   */
  if (matureEnabled === true) {
    /* Every After Dark row is a Colombian phrase glossed into English, so both
       directions have something to recognize. There is no per-row language flag
       to filter on the way the tuple lists have. */
    const mature = matureItems
      .map((item, index) => flashcardFromMature(item, index, direction));
    if (mature.length) {
      topics.push({
        id: "mature",
        groupKey: "deck.group.mature",
        titleKey: "deck.topic.mature",
        metaKey: "deck.meta.mature",
        metaCount: mature.length,
        cards: mature
      });
    }

    const signals = matureSignals
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => item[3] === direction)
      .map(({ item, index }) => flashcardFromSignal(item, index, direction));
    if (signals.length) {
      topics.push({
        id: "mature-signals",
        groupKey: "deck.group.mature",
        titleKey: "deck.topic.signals",
        metaKey: "deck.meta.signals",
        metaCount: signals.length,
        cards: signals
      });
    }
  }

  return topics;
}

/* Every topic, flattened into the sets a learner actually picks from. */
function flashcardSets(direction, sources, size = FLASHCARD_SET_SIZE) {
  return flashcardTopics(direction, sources).flatMap((topic) => {
    const groups = flashcardSplit(topic.cards, size);
    return groups.map((cards, index) => ({
      ...topic,
      id: `${topic.id}/${index + 1}`,
      topicId: topic.id,
      index,
      total: groups.length,
      cards
    }));
  });
}
