/*
 * A matcher is only as good as the answers it refuses.
 *
 * The failure mode that matters here is not strictness, it is generosity: a
 * matcher loose enough to accept "año" for "ano", or "voy" for "hoy", turns
 * production practice into a formality and teaches the learner that they were
 * right when they were not. Most of what follows is about that.
 */
const test = require("node:test");
const assert = require("node:assert");
const vm = require("node:vm");
const fs = require("node:fs");
const path = require("node:path");

const sandbox = {};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, "..", "answer-check.js"), "utf8"), sandbox, { filename: "answer-check.js" });
const A = sandbox.ParceroAnswer;

test("an exact answer is exact, punctuation and case aside", () => {
  assert.strictEqual(A.check("el tinto", "el tinto").verdict, "exact");
  assert.strictEqual(A.check("  El Tinto.  ", "el tinto").verdict, "exact");
  assert.strictEqual(A.check("¿Qué más?", "qué más").verdict, "exact");
});

test("a missing accent is close, not wrong, and says why", () => {
  const result = A.check("que mas", "qué más");
  assert.strictEqual(result.verdict, "close");
  assert.strictEqual(result.reason, "accent");
  assert.strictEqual(result.expected, "qué más", "the learner has to be shown the accented form");
});

test("the enye is a letter, not an accent", () => {
  /* Stripping the tilde from ñ would accept "ano" for "año". It must not. */
  const result = A.check("ano", "año");
  assert.strictEqual(result.verdict, "wrong");
  assert.strictEqual(result.reason, "enye", "the learner needs telling which letter was wrong");
  assert.strictEqual(A.check("una", "uña").verdict, "wrong", "'una' is a real word, so this is a miss, not a typo");
  assert.strictEqual(A.check("año", "año").verdict, "exact");
  assert.strictEqual(A.normalize("año"), "año");
  assert.strictEqual(A.normalize("papá"), "papa");
});

test("a missing enye is forgiven where the n-spelling is not a word", () => {
  /* "manana" is not Spanish, so the learner obviously meant "mañana" and is
     being limited by a keyboard rather than by knowledge. */
  const result = A.check("manana", "mañana");
  assert.strictEqual(result.verdict, "close");
  assert.strictEqual(result.reason, "enye");
  assert.strictEqual(result.expected, "mañana", "they still have to be shown the ñ");
  assert.strictEqual(A.check("nino", "niño").verdict, "close");
});

test("a different article is close, because the card's article is arbitrary", () => {
  assert.strictEqual(A.check("un tinto", "el tinto").reason, "article");
  assert.strictEqual(A.check("tinto", "el tinto").reason, "article");
  assert.strictEqual(A.check("the coffee", "a coffee").reason, "article");
});

test("one typo is forgiven, a different word is not", () => {
  assert.strictEqual(A.check("tinot", "tinto").verdict, "close", "a transposition is the commonest real typo");
  assert.strictEqual(A.check("hoy", "voy").verdict, "wrong", "three-letter words must not collapse into each other");
  /* rr and r are different phonemes in Spanish: pero is "but", perro is "dog".
     Marking this "close" would be certifying a meaning error as a near miss. */
  assert.strictEqual(A.check("perro", "pero").verdict, "wrong");
});

test("short answers are not given long-answer latitude", () => {
  assert.strictEqual(A.tolerance("si"), 0, "at two letters every edit is a different word");
  assert.strictEqual(A.tolerance("pero"), 0);
  assert.ok(A.tolerance("una cosa muy complicada") > 1, "a long answer needs proportional slack");
  assert.strictEqual(A.check("mas", "más").reason, "accent", "an accent is still forgiven at any length");
});

test("any of several right answers is accepted", () => {
  const result = A.check("ya mismo", "ahorita", ["ya mismo", "de una"]);
  assert.strictEqual(result.verdict, "exact");
  assert.strictEqual(result.expected, "ya mismo", "the learner should be shown the answer they actually gave");
});

test("an empty answer is wrong, and flagged as empty rather than as a miss", () => {
  const result = A.check("   ", "el tinto");
  assert.strictEqual(result.verdict, "wrong");
  assert.ok(result.empty);
});

test("a wrong answer stays wrong however it is punctuated", () => {
  assert.strictEqual(A.check("la arepa", "el tinto").verdict, "wrong");
  assert.strictEqual(A.check("no idea", "qué más").verdict, "wrong");
});

test("only short backs are offered for typing", () => {
  assert.ok(A.typeable({ back: "el tinto" }));
  assert.ok(A.typeable({ back: "de una" }));
  assert.ok(!A.typeable({ back: "" }));
  assert.ok(!A.typeable({}));
  assert.ok(!A.typeable({ back: "Vamos a tomarnos un tinto en la esquina antes de que empiece la reunión de mañana" }),
    "a long sentence is dictation, not production practice");
  assert.ok(!A.typeable({ back: "Buenos días. ¿Cómo amaneció?" }),
    "a back holding two sentences is not a single answer");
});

test("the distance cap cannot be escaped by a wildly long guess", () => {
  const far = A.distance("a".repeat(200), "b".repeat(3), 2);
  assert.ok(far > 2, "a capped comparison must bail out rather than claim closeness");
});
