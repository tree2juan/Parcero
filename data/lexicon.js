/*
 * The words that are not verbs.
 *
 * This course is built on verbs — two hundred of them, each with a lesson, a
 * curriculum entry and a tier. That was the right spine, but it left a gap
 * that only shows up when you count the finished thing. Counting it: the
 * Spanish dialogue runs to 13,224 words made of 2,817 distinct forms, and
 * 1,590 of those forms — 56% — appear exactly once in the entire course.
 *
 * A word met once is not taught. The learner sees "el portero", "la grúa",
 * "el lapicero", "aretes", "tablero" go past inside a sentence about
 * something else, and never meets them again. Roughly a thousand forms sit in
 * that band; about half are inflections of verbs already taught properly, and
 * the rest — five hundred or so real nouns, adjectives and adverbs — are the
 * actual hole in the course.
 *
 * So this file is deliberately not a word list bolted on the side. It is a
 * consolidation of vocabulary the course already uses, promoted from scenery
 * to something the flashcard engine can schedule and repeat. Adding a
 * thousand brand-new words instead would have made the real problem worse:
 * more vocabulary met once, and less of it recycled.
 *
 * Entries carry a `seen` count — how many times the form appears in the
 * dialogue corpus — so the gap each one fills stays visible and checkable
 * rather than asserted. `scripts/lexicon-candidates.js` regenerates those
 * numbers from the corpus.
 *
 * Slots are positional, in the order named by LEXICON_SLOTS below. As with
 * every other reference list here, append new slots, never insert: the review
 * anchors that let a reader flag a specific field are stored by position.
 *
 *   term     the form a learner should store. Nouns carry their article,
 *            because "portero" without "el" is half-learned — gender is not
 *            decoration in Spanish, it governs every adjective that follows.
 *            Adjectives are given in the masculine singular.
 *   english  the plain meaning, not a definition.
 *   class    part of speech, from LEXICON_CLASSES.
 *   gender   "m", "f", "m/f" for nouns that inflect for the person, or ""
 *            for anything that is not a noun.
 *   theme    from the shared taxonomy in data/taxonomy.js, so a learner
 *            filtering lessons by "transport-and-travel" and a learner
 *            filtering words by it get answers about the same subject.
 *   level    foundation, independent or extension — the same tiers the verb
 *            curriculum uses.
 *   seen     occurrences in the Spanish dialogue corpus at the time of
 *            writing. Low numbers are the point, not a defect.
 *   note     what a learner would get wrong without being told: a false
 *            friend, a regional preference, a gender trap, a collocation.
 */

const LEXICON_SLOTS = ["term", "english", "class", "gender", "theme", "level", "seen", "note"];

const LEXICON_CLASSES = [
  "noun",
  "adjective",
  "adverb",
  "connector",
  "preposition",
  "number",
  "interjection"
];

/*
 * Declared here, filled by the blocks in data/lexicon/.
 *
 * Same reason the lessons are split: several hundred entries written in
 * parallel against one file is a merge conflict per word. Each block owns a
 * theme and pushes onto this array, so two authors never touch the same file
 * and the load order stays stable for the flashcard anchors.
 */
const lexiconItems = [];
