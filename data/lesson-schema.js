/*
 * One canonical shape for lesson content.
 *
 * Lessons started as tuples — a dialogue line was [speaker, target, translation,
 * pronunciation] and a vocabulary entry was [term, explanation]. That was enough
 * when a lesson taught three words. It is not enough to teach a situation: a
 * learner needs to know who is speaking, to whom, where, when, and why, because
 * in Colombian Spanish those five facts decide the wording far more than the
 * dictionary does. "¿Me regalas...?" is not a translation problem. It is a
 * who-and-where problem.
 *
 * So a row may now be a richer object instead of a tuple. Rather than force
 * every lesson to migrate at once — and rather than make every renderer handle
 * both — everything is normalized here, once, into a single predictable shape.
 * A tuple and an object come out the other side identical apart from the extra
 * fields the tuple never carried, which come out null.
 *
 * Two consequences worth stating, because they are the point:
 *
 *   1. Legacy tuples keep working. An unmigrated lesson renders exactly as it
 *      did, so content can be deepened one lesson at a time without a flag day.
 *   2. The slot NAMES are the contract, not the tuple positions. Review anchors
 *      such as .../dialogue/1/target address a field by name, so adding a field
 *      can never silently shift what an existing anchor points at — which is
 *      what would happen if a reviewer's flag were stored as an array index.
 *
 * Nothing here is content. This file must stay free of teaching material; it
 * only says what a lesson is allowed to look like.
 */
var ParceroLessonSchema = (function () {
"use strict";

/* The five questions every lesson has to answer about its own situation. */
var SETTING_KEYS = ["who", "what", "when", "where", "why"];

/*
 * The address forms a Colombian lesson can be built on. "mixed" is not a
 * hedge — it is the normal case in a lot of real conversation, where a vendor
 * says "mi amor" to you and "usted" in the same breath, or a paisa friend
 * moves between vos and usted by mood rather than by rule.
 */
var ADDRESS_FORMS = ["usted", "tú", "vos", "mixed"];

/*
 * Slot orders. The first four dialogue slots and the first two vocabulary slots
 * MUST keep their positions: legacy tuples are read by index, and reordering
 * these would rewrite the meaning of existing content rather than the layout of
 * it. New slots are therefore appended, never inserted.
 */
var DIALOGUE_SLOTS = ["speaker", "target", "translation", "pronunciation", "literal", "why"];
var VOCABULARY_SLOTS = ["term", "explanation", "literal", "useWhen", "avoidWhen", "register", "region"];
var CULTURE_SLOTS = ["label", "body"];
var PITFALL_SLOTS = ["mistake", "whyItFails", "sayInstead"];
var VARIATION_SLOTS = ["form", "register", "region", "whenToUse"];
var ADDRESS_SLOTS = ["who", "why", "ifYouSwitch"];

/* Row-shaped fields, i.e. the ones a reviewer addresses as field/index/slot. */
var LIST_FIELDS = {
  dialogue: DIALOGUE_SLOTS,
  vocabulary: VOCABULARY_SLOTS,
  culture: CULTURE_SLOTS,
  pitfalls: PITFALL_SLOTS,
  variations: VARIATION_SLOTS
};

/* Object-shaped fields, addressed as field/slot with no index. */
var OBJECT_FIELDS = {
  setting: SETTING_KEYS,
  address: ADDRESS_SLOTS
};

function isText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

/* Absent and blank are the same thing to a renderer: there is nothing to show. */
function text(value) {
  return isText(value) ? value.trim() : null;
}

function list(value) {
  return Array.isArray(value) ? value : [];
}

/*
 * Read a row slot without caring whether the row is a tuple or an object.
 * Tuples only ever hold the leading slots, so a name past the end of the tuple
 * correctly reads as absent rather than as undefined-shaped garbage.
 */
function slotValue(row, slots, slot) {
  if (!row) return null;
  if (Array.isArray(row)) {
    var index = slots.indexOf(slot);
    return index === -1 ? null : text(row[index]);
  }
  return text(row[slot]);
}

/* Where a maintainer should actually go to edit this slot, in JS path form. */
function slotPath(row, slots, slot) {
  if (Array.isArray(row)) {
    var index = slots.indexOf(slot);
    return index === -1 ? null : "[" + index + "]";
  }
  return "." + slot;
}

function normalizeRow(row, slots) {
  var normalized = {};
  for (var index = 0; index < slots.length; index += 1) {
    normalized[slots[index]] = slotValue(row, slots, slots[index]);
  }
  return normalized;
}

/*
 * An example sentence is stored as a pair so it can be shown the way dialogue
 * is shown, and so a flashcard can put one side on the front and the other on
 * the back without having to split a string.
 */
function normalizeExample(example) {
  if (!example) return null;
  var pair = Array.isArray(example)
    ? { target: example[0], translation: example[1] }
    : example;
  var target = text(pair.target);
  var translation = text(pair.translation);
  return target ? { target: target, translation: translation } : null;
}

function normalizeDialogueLine(line) {
  return normalizeRow(line, DIALOGUE_SLOTS);
}

function normalizeVocabularyEntry(entry) {
  var normalized = normalizeRow(entry, VOCABULARY_SLOTS);
  var source = Array.isArray(entry) || !entry ? {} : entry;
  normalized.related = list(source.related).map(text).filter(Boolean);
  normalized.example = normalizeExample(source.example);
  return normalized;
}

function normalizeSetting(setting) {
  if (!setting) return null;
  var normalized = {};
  var answered = false;
  for (var index = 0; index < SETTING_KEYS.length; index += 1) {
    var value = text(setting[SETTING_KEYS[index]]);
    normalized[SETTING_KEYS[index]] = value;
    if (value) answered = true;
  }
  return answered ? normalized : null;
}

function normalizeAddress(address) {
  if (!address) return null;
  var form = text(address.form);
  if (!form) return null;
  return {
    form: form,
    who: text(address.who),
    why: text(address.why),
    ifYouSwitch: text(address.ifYouSwitch)
  };
}

/*
 * Practice is normalized into a list even when a lesson only asks one question,
 * so the renderer, the tests and the flashcard deck never have to special-case
 * "the original question" against "the extra ones". The primary question keeps
 * living in prompt/choices/answer, which is what existing review anchors and
 * existing lessons already point at; practiceExtra is appended after it.
 */
function normalizePracticeQuestion(question) {
  if (!question) return null;
  var prompt = text(question.prompt);
  var choices = list(question.choices).map(text).filter(Boolean);
  var answer = question.answer;
  if (!prompt || choices.length < 2) return null;
  if (!Number.isInteger(answer) || answer < 0 || answer >= choices.length) return null;
  return { prompt: prompt, choices: choices, answer: answer, tests: text(question.tests) };
}

function normalizePractice(content) {
  var questions = [];
  var primary = normalizePracticeQuestion(content);
  if (primary) questions.push(primary);
  list(content.practiceExtra).forEach(function (question) {
    var normalized = normalizePracticeQuestion(question);
    if (normalized) questions.push(normalized);
  });
  return questions;
}

function normalizeContent(content) {
  if (!content) return null;
  return {
    title: text(content.title),
    situation: text(content.situation),
    setting: normalizeSetting(content.setting),
    address: normalizeAddress(content.address),
    dialogue: list(content.dialogue).map(normalizeDialogueLine),
    vocabulary: list(content.vocabulary).map(normalizeVocabularyEntry),
    note: text(content.note),
    culture: list(content.culture).map(function (row) { return normalizeRow(row, CULTURE_SLOTS); }),
    pitfalls: list(content.pitfalls).map(function (row) { return normalizeRow(row, PITFALL_SLOTS); }),
    variations: list(content.variations).map(function (row) { return normalizeRow(row, VARIATION_SLOTS); }),
    practice: normalizePractice(content),
    prompt: text(content.prompt),
    choices: list(content.choices).map(text).filter(Boolean),
    answer: content.answer
  };
}

function normalizeLesson(lesson) {
  if (!lesson) return null;
  return {
    id: lesson.id,
    level: text(lesson.level),
    domain: text(lesson.domain),
    register: text(lesson.register),
    skills: list(lesson.skills),
    pathways: list(lesson.pathways),
    review: lesson.review,
    es: normalizeContent(lesson.es),
    en: normalizeContent(lesson.en)
  };
}

/*
 * How much of the deeper shape a lesson has actually taken up. Used by the
 * tests and by the review tooling to report progress honestly instead of
 * treating a thin lesson and a rich one as equivalent.
 */
function contentDepth(content) {
  var normalized = normalizeContent(content);
  if (!normalized) return null;
  return {
    setting: normalized.setting ? SETTING_KEYS.filter(function (key) { return normalized.setting[key]; }).length : 0,
    address: normalized.address ? 1 : 0,
    dialogue: normalized.dialogue.length,
    vocabulary: normalized.vocabulary.length,
    culture: normalized.culture.length,
    pitfalls: normalized.pitfalls.length,
    variations: normalized.variations.length,
    practice: normalized.practice.length
  };
}

return {
  SETTING_KEYS: SETTING_KEYS,
  ADDRESS_FORMS: ADDRESS_FORMS,
  DIALOGUE_SLOTS: DIALOGUE_SLOTS,
  VOCABULARY_SLOTS: VOCABULARY_SLOTS,
  CULTURE_SLOTS: CULTURE_SLOTS,
  PITFALL_SLOTS: PITFALL_SLOTS,
  VARIATION_SLOTS: VARIATION_SLOTS,
  ADDRESS_SLOTS: ADDRESS_SLOTS,
  LIST_FIELDS: LIST_FIELDS,
  OBJECT_FIELDS: OBJECT_FIELDS,
  slotValue: slotValue,
  slotPath: slotPath,
  normalizeDialogueLine: normalizeDialogueLine,
  normalizeVocabularyEntry: normalizeVocabularyEntry,
  normalizeSetting: normalizeSetting,
  normalizeAddress: normalizeAddress,
  normalizePracticeQuestion: normalizePracticeQuestion,
  normalizeContent: normalizeContent,
  normalizeLesson: normalizeLesson,
  contentDepth: contentDepth
};
})();

if (typeof module !== "undefined" && module.exports) module.exports = ParceroLessonSchema;
