/*
 * Which slots of a lesson's `en` direction are NOT machine-translated Spanish.
 *
 * The `en` direction is written for a Colombian learning English, so its
 * explanatory prose is in Spanish and its taught material is in English. Any
 * Spanish string a machine produced has to be recorded in data/provenance.js;
 * everything else has to be argued out here, by slot, with a reason.
 *
 * This list lives on its own because two things need it and they must not
 * disagree: test/provenance.test.js checks the record, and
 * scripts/record-provenance.js writes it. A copy in each would drift, and the
 * direction it would drift is toward the writer excusing a slot the checker
 * still demands -- a green suite over an incomplete record.
 *
 * Trails are slot-shaped: array indices are flattened to `[]`.
 */
const NOT_TRANSLATED = [
  // The English actually being taught. Translating these would delete the lesson.
  ["dialogue[].target", "the English line the learner is here to learn"],
  ["vocabulary[].term", "the English expression being taught"],
  ["vocabulary[].related[]", "further English expressions"],
  ["vocabulary[].example.target", "an English example sentence"],
  ["variations[].form", "an English variant being taught"],
  ["pitfalls[].mistake", "the English mis-phrasing being warned about"],
  ["pitfalls[].sayInstead", "the English repair for it"],

  // Authored in Spanish from the start, for this direction's Spanish reader.
  ["dialogue[].translation", "already Spanish: the gloss of the English line"],
  ["dialogue[].literal", "already Spanish: the word-for-word reading"],
  ["dialogue[].pronunciation", "a respelling aimed at Spanish readers"],
  ["vocabulary[].literal", "already Spanish"],
  ["vocabulary[].example.translation", "already Spanish"],

  // Not prose.
  ["dialogue[].speaker", "a person's name"],
  ["address.form", "an enum rendered through t() -- app.js:166 maps it to address.form.* keys"],

  /*
   * `register` is a different case and the reason matters: it is NOT routed
   * through t(). app.js:209 and app.js:228 print it raw inside a tag, so a
   * Spanish reader sees "polite neutral" in English. That is a live defect, not
   * an acceptable exclusion -- but it belongs to the i18n migration of
   * register/regionality/level already in flight, and translating the strings
   * here would mean migrating the same fields twice, with two chances for the
   * data and the labels to drift apart. Excused as out of scope, not as fine.
   */
  ["vocabulary[].register", "rendered raw in English (app.js:209); belongs to the in-flight register i18n migration"],
  ["variations[].register", "rendered raw in English (app.js:228); same migration"],

  /*
   * Options belonging to a question that asks which English utterance fits.
   * Translating them makes the question unanswerable, so three of these are
   * deliberately untouched English.
   *
   * Honest limitation: this excuses the slot, so it would not catch a question
   * whose options were *all* wrongly translated -- only the mixed state below.
   * Stating that rather than implying wider cover.
   */
  ["practiceExtra[].choices[]", "options under test in a which-utterance question"],
];

/* A concrete trail such as `culture[2].body` reduced to its slot, `culture[].body`. */
const slotOf = (trail) => trail.replace(/\[\d+\]/g, "[]");

/*
 * Excused for the checker, but still recorded by the writer.
 *
 * These two lists are not the same question. The checker asks "may this string
 * be absent from the record?"; the writer asks "should this string be in it?".
 * Practice options are excused above because a question may deliberately offer
 * three English utterances, which no record should claim were translated -- but
 * most options in most lessons are ordinary machine Spanish, and the writer
 * cannot tell the two apart from the data alone.
 *
 * So it records them. Over-recording claims more content needs a native
 * speaker's eye than strictly does; under-recording claims machine Spanish has
 * been read by someone when it has not. For a feature whose whole purpose is
 * not overstating what has been verified, only the first error is acceptable.
 */
const RECORD_ANYWAY = new Set(["practiceExtra[].choices[]"]);

module.exports = { NOT_TRANSLATED, RECORD_ANYWAY, slotOf };
