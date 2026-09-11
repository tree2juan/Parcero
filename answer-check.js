/*
 * Judging a typed answer, which is the hard half of asking for one.
 *
 * Every practice question in this course is three-option multiple choice —
 * 1,970 of them, and not one asks the learner to produce a word. Recognition
 * is the easier skill and the one that flatters you: you can pick "el tinto"
 * out of a line-up for months without ever being able to say it in a shop.
 *
 * The reason production is rare in courses like this is not that nobody wants
 * it, it is that marking it is unforgiving. A matcher that demands an exact
 * string punishes a learner for a missing accent they cannot easily type, for
 * a full stop, for writing "un tinto" when the card says "el tinto". A matcher
 * that is too loose accepts anything and teaches nothing.
 *
 * So this grades in three bands rather than two:
 *
 *   "exact" - right, including the accents.
 *   "close" - right in substance, wrong in detail: a missing accent, a typo,
 *             a different article. Counts as known, and the learner is shown
 *             what they should have written.
 *   "wrong" - not the answer.
 *
 * "close" is the whole point. It is what lets the mode be strict about
 * Spanish orthography without making an English keyboard a prerequisite.
 *
 * Pure: no DOM, no storage. Everything is a string in and a verdict out.
 */
(function (global) {
  "use strict";

  /* Articles and fillers a card may carry that a learner should not be marked
     wrong for omitting — or for adding. Deliberately short: this is for the
     determiners that vary with context, not for content words. */
  const OPTIONAL_LEAD = /^(el|la|los|las|un|una|unos|unas|the|a|an|to|al|del)\s+/i;

  /*
   * Strip a string down to the letters that carry the answer.
   *
   * NFD then removing the combining range is what turns "papá" into "papa";
   * the ñ is protected first, because ñ is a letter of the Spanish alphabet
   * and not an n with a decoration — collapsing "año" to "ano" would accept a
   * genuinely different and considerably more unfortunate word.
   */
  function normalize(text) {
    return String(text == null ? "" : text)
      .toLowerCase()
      .replace(/ñ/g, "\u0001")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\u0001/g, "ñ")
      .replace(/[¿?¡!.,;:"'`´’“”()\[\]…]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  /*
   * n-spellings that are themselves ordinary Spanish words.
   *
   * ñ→n needs two different answers depending on the word. Typing "manana"
   * for "mañana" is a keyboard limitation: "manana" is not a word, the
   * learner plainly meant the right one, and failing them teaches nothing.
   * Typing "ano" for "año", or "una" for "uña", is not a limitation — it is a
   * different and generally unfortunate word, and the single most useful
   * thing this course can do is refuse to call it nearly right.
   *
   * So the strict rule applies only where the n-form genuinely exists. The
   * list is short and deliberately conservative; a word missing from it gets
   * the forgiving treatment, which is the safe direction to be wrong in.
   */
  const ENYE_TRAPS = new Set([
    "ano", "anos", "una", "unas", "cana", "canas", "canon", "canones",
    "campana", "campanas", "mono", "monos", "pena", "penas", "sonar",
    "dona", "donas", "ordenar", "suena", "suenas", "sena", "senas",
    "cuna", "cunas", "tino", "tinos", "cena", "cenas"
  ]);

  /* The same, but keeping accents, to tell "exact" from "close". */
  function tidy(text) {
    return String(text == null ? "" : text)
      .toLowerCase()
      .replace(/[¿?¡!.,;:"'`´’“”()\[\]…]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  const withoutLead = (text) => text.replace(OPTIONAL_LEAD, "");

  /*
   * Damerau-Levenshtein distance, capped.
   *
   * Transpositions are counted as one edit rather than two, because swapping
   * two letters is the single commonest way to mistype a word you actually
   * know — plain Levenshtein scores "tinot" for "tinto" the same as a wholly
   * different word, which is exactly backwards.
   *
   * The cap is not an optimisation, it is a correctness guard: without it a
   * one-word answer and a twelve-word one are compared on the same absolute
   * scale, and a long answer becomes impossible to get "close" to.
   */
  function distance(a, b, cap) {
    if (a === b) return 0;
    if (Math.abs(a.length - b.length) > cap) return cap + 1;
    const rows = [Array.from({ length: b.length + 1 }, (unused, i) => i)];
    for (let i = 1; i <= a.length; i += 1) {
      const current = [i];
      let best = i;
      for (let j = 1; j <= b.length; j += 1) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        let value = Math.min(current[j - 1] + 1, rows[rows.length - 1][j] + 1, rows[rows.length - 1][j - 1] + cost);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
          value = Math.min(value, rows[rows.length - 2][j - 2] + 1);
        }
        current[j] = value;
        if (value < best) best = value;
      }
      if (best > cap) return cap + 1;
      rows.push(current);
      if (rows.length > 2) rows.shift();
    }
    return rows[rows.length - 1][b.length];
  }

  /*
   * How much typing slack an answer gets.
   *
   * Short answers get none. In a four-letter Spanish word almost every single
   * edit is a different word rather than a typo — pero/perro, ano/año,
   * hoy/voy, casa/caza — and rr and ñ are phonemes here, not decorations.
   * Forgiving one edit at that length would mean marking a learner correct
   * for saying "dog" when they meant "but". Past that, one typo per eight
   * characters.
   */
  const SLACK_FLOOR = 5;
  const tolerance = (text) => (text.length < SLACK_FLOOR ? 0 : Math.max(1, Math.floor(text.length / 8)));

  /*
   * Grade `typed` against `expected`.
   *
   * `alternatives` lets a card accept more than one right answer — the deck
   * has plenty of prompts where "ahorita" and "ya mismo" are both correct, and
   * marking the second one wrong would be teaching a falsehood.
   */
  function check(typed, expected, alternatives) {
    const answers = [expected, ...(alternatives || [])].filter((value) => String(value || "").trim());
    const given = tidy(typed);
    if (!given) return { verdict: "wrong", empty: true, expected };

    const givenPlain = normalize(typed);
    let closest = null;

    for (const answer of answers) {
      if (given === tidy(answer)) return { verdict: "exact", expected: answer };
    }
    for (const answer of answers) {
      const plain = normalize(answer);
      /* Accents are the commonest and most forgivable miss, so they are
         checked before typos and reported separately. */
      if (givenPlain === plain) {
        return { verdict: "close", reason: "accent", expected: answer };
      }
      if (withoutLead(givenPlain) === withoutLead(plain)) {
        return { verdict: "close", reason: "article", expected: answer };
      }
      /* ñ is a letter of the alphabet, not an n wearing a hat. If the only
         thing between the guess and the answer is that tilde, the learner has
         written a different word — often a much worse one — and telling them
         they were nearly right would be teaching the mistake. */
      if (givenPlain.replace(/ñ/g, "n") === plain.replace(/ñ/g, "n")) {
        const trap = givenPlain.split(" ").some((word) => ENYE_TRAPS.has(word));
        return trap
          ? { verdict: "wrong", reason: "enye", expected: answer }
          : { verdict: "close", reason: "enye", expected: answer };
      }
      const gap = distance(givenPlain, plain, tolerance(plain));
      if (gap <= tolerance(plain) && (closest === null || gap < closest.gap)) {
        closest = { gap, answer };
      }
    }
    if (closest) return { verdict: "close", reason: "typo", expected: closest.answer };
    return { verdict: "wrong", expected };
  }

  /*
   * Which cards may be asked for production at all.
   *
   * A learner can reasonably be asked to type a word or a short phrase. Asking
   * them to reproduce a fourteen-word example sentence from memory is not
   * production practice, it is dictation with extra steps, and every near-miss
   * would be graded wrong for a reason they cannot see.
   */
  const MAX_WORDS = 5;
  function typeable(card) {
    if (!card || typeof card.back !== "string") return false;
    const back = card.back.trim();
    if (!back) return false;
    if (/[.!?]\s/.test(back)) return false;
    return back.split(/\s+/).length <= MAX_WORDS;
  }

  global.ParceroAnswer = { normalize, tidy, distance, tolerance, check, typeable, MAX_WORDS };
})(typeof window !== "undefined" ? window : globalThis);
