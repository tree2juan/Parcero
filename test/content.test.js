const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const { dataSource } = require("./data-source.js");
const { wrongLanguage, titleLanguage } = require("../scripts/prose-language.js");

const bundle = `${dataSource()}\n({ lessons, curriculum, fluencyItems, matureItems, matureSignals, slangItems, schema: ParceroLessonSchema });`;
const { lessons, curriculum, fluencyItems, matureItems, matureSignals, slangItems, schema } = vm.runInNewContext(bundle, {}, { filename: "parcero-data-bundle.js" });

const directions = ["es", "en"];
const isText = (value) => typeof value === "string" && value.trim().length > 0;
const duplicates = (list) => [...new Set(list.filter((item, index) => list.indexOf(item) !== index))];

/*
 * Blank out everything that is not executable code, preserving offsets so line
 * numbers in failure messages stay true.
 *
 * The static checks below used to strip comments only, on the reasoning that
 * "the prose here quotes the very bugs being banned". That reasoning was right
 * and incomplete: a *string literal* is prose too, and the file most likely to
 * contain the banned words is the test that names the fields it is checking.
 * `for (const [field, expected] of [["dialogue", ...], ["vocabulary", ...]])`
 * destructures a (name, count) pair and was flagged as a positional row read,
 * because "dialogue" appeared inside the quotes.
 *
 * #8's cross-script scanner solves the same problem the same way; when that
 * branch lands, these two should become one helper rather than two.
 */
const scan = (source, { literals = true } = {}) => {
  const out = source.split("");
  const blank = (from, to) => {
    for (let i = from; i < to && i < out.length; i += 1) if (out[i] !== "\n") out[i] = " ";
  };
  let i = 0;
  let prev = "";
  while (i < source.length) {
    const two = source.slice(i, i + 2);
    if (two === "//") {
      let end = source.indexOf("\n", i);
      if (end < 0) end = source.length;
      blank(i, end);
      i = end;
      continue;
    }
    if (two === "/*") {
      let end = source.indexOf("*/", i + 2);
      end = end < 0 ? source.length : end + 2;
      blank(i, end);
      i = end;
      continue;
    }
    const ch = source[i];
    if (ch === '"' || ch === "'" || ch === "`") {
      let j = i + 1;
      while (j < source.length) {
        if (source[j] === "\\") { j += 2; continue; }
        if (source[j] === ch) break;
        j += 1;
      }
      if (literals) blank(i + 1, j);
      i = j + 1;
      prev = ch;
      continue;
    }
    // A "/" is a regex only where a value cannot already have ended; otherwise
    // it is division. Guessing wrong the safe way means treating a regex as
    // code, which over-reports rather than going quiet.
    if (ch === "/" && /[(,=:[!&|?{};+\-*%~^]/.test(prev)) {
      let j = i + 1;
      let inClass = false;
      while (j < source.length) {
        if (source[j] === "\\") { j += 2; continue; }
        if (source[j] === "[") inClass = true;
        else if (source[j] === "]") inClass = false;
        else if (source[j] === "/" && !inClass) break;
        else if (source[j] === "\n") { j = -1; break; }
        j += 1;
      }
      if (j > 0) {
        if (literals) blank(i + 1, j);
        i = j + 1;
        prev = "/";
        continue;
      }
    }
    if (!/\s/.test(ch)) prev = ch;
    i += 1;
  }
  return out.join("");
};

const blankLiterals = (source) => scan(source, { literals: true });
const blankComments = (source) => scan(source, { literals: false });

test("lessons are present and uniquely identified", () => {
  assert.ok(Array.isArray(lessons) && lessons.length > 1, "expected more than one lesson");
  const ids = lessons.map((lesson) => lesson.id);
  assert.deepStrictEqual(duplicates(ids), [], "lesson ids must be unique");
  for (const id of ids) assert.match(id, /^[a-z0-9-]+$/, `lesson id "${id}" must be kebab-case`);
});

test("every lesson carries its teaching metadata", () => {
  for (const lesson of lessons) {
    assert.ok(isText(lesson.level), `${lesson.id}: missing level`);
    assert.ok(isText(lesson.domain), `${lesson.id}: missing domain`);
    assert.ok(isText(lesson.register), `${lesson.id}: missing register`);
    assert.ok(lesson.skills?.length, `${lesson.id}: missing skills`);
    assert.ok(lesson.pathways?.length, `${lesson.id}: missing pathways`);
    assert.ok(["pending", "reviewed"].includes(lesson.review), `${lesson.id}: review must be "pending" or "reviewed"`);
  }
});

test("every lesson teaches in both directions", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const content = lesson[direction];
      assert.ok(content, `${lesson.id}: missing "${direction}" content`);
      assert.ok(isText(content.title), `${lesson.id}.${direction}: missing title`);
      assert.ok(isText(content.situation), `${lesson.id}.${direction}: missing situation`);
      assert.ok(isText(content.note), `${lesson.id}.${direction}: missing culture note`);
    }
  }
});

test("dialogue lines carry the target language, a translation and a pronunciation", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { dialogue } = schema.normalizeContent(lesson[direction]);
      assert.ok(dialogue.length >= 6, `${lesson.id}.${direction}: a situation needs at least six dialogue lines, found ${dialogue.length}`);
      dialogue.forEach((line, index) => {
        for (const slot of ["speaker", "target", "translation", "pronunciation"]) {
          assert.ok(isText(line[slot]), `${lesson.id}.${direction} line ${index + 1}: missing ${slot}`);
        }
      });
    }
  }
});

test("vocabulary entries teach a term in context, not just a gloss", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { vocabulary } = schema.normalizeContent(lesson[direction]);
      assert.ok(vocabulary.length >= 7, `${lesson.id}.${direction}: needs at least seven vocabulary entries, found ${vocabulary.length}`);
      vocabulary.forEach((entry, index) => {
        assert.ok(isText(entry.term), `${lesson.id}.${direction} vocabulary ${index + 1}: missing term`);
        assert.ok(isText(entry.explanation), `${lesson.id}.${direction} vocabulary ${index + 1}: missing explanation`);
        assert.ok(isText(entry.useWhen), `${lesson.id}.${direction} vocabulary ${index + 1}: missing "use it when"`);
        assert.ok(isText(entry.region), `${lesson.id}.${direction} vocabulary ${index + 1}: must say where it is used`);
        assert.ok(entry.example && isText(entry.example.target), `${lesson.id}.${direction} vocabulary ${index + 1}: missing an example sentence`);
      });
    }
  }
});

test("every lesson answers who, what, when, where and why", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { setting } = schema.normalizeContent(lesson[direction]);
      assert.ok(setting, `${lesson.id}.${direction}: missing the situation setting`);
      for (const key of schema.SETTING_KEYS) {
        assert.ok(isText(setting[key]), `${lesson.id}.${direction}: the setting never answers "${key}"`);
      }
    }
  }
});

test("every lesson names the address form it is built on", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { address } = schema.normalizeContent(lesson[direction]);
      assert.ok(address, `${lesson.id}.${direction}: missing the address form`);
      assert.ok(schema.ADDRESS_FORMS.includes(address.form), `${lesson.id}.${direction}: "${address.form}" is not a recognised address form`);
      assert.ok(isText(address.why), `${lesson.id}.${direction}: does not explain why this address form`);
      assert.ok(isText(address.ifYouSwitch), `${lesson.id}.${direction}: does not say what changes if you switch`);
    }
  }
});

test("context notes, pitfalls and variations are complete where present", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const content = schema.normalizeContent(lesson[direction]);
      assert.ok(content.culture.length >= 3, `${lesson.id}.${direction}: needs at least three context notes`);
      content.culture.forEach((row, index) => {
        for (const slot of schema.CULTURE_SLOTS) {
          assert.ok(isText(row[slot]), `${lesson.id}.${direction} context note ${index + 1}: missing ${slot}`);
        }
      });
      assert.ok(content.pitfalls.length >= 3, `${lesson.id}.${direction}: needs at least three pitfalls`);
      content.pitfalls.forEach((row, index) => {
        for (const slot of schema.PITFALL_SLOTS) {
          assert.ok(isText(row[slot]), `${lesson.id}.${direction} pitfall ${index + 1}: missing ${slot}`);
        }
      });
      assert.ok(content.variations.length >= 3, `${lesson.id}.${direction}: needs at least three variations`);
      content.variations.forEach((row, index) => {
        for (const slot of schema.VARIATION_SLOTS) {
          assert.ok(isText(row[slot]), `${lesson.id}.${direction} variation ${index + 1}: missing ${slot}`);
        }
      });
    }
  }
});

test("practice questions have a valid answer among distinct choices", () => {
  for (const lesson of lessons) {
    for (const direction of directions) {
      const { practice } = schema.normalizeContent(lesson[direction]);
      assert.ok(practice.length >= 3, `${lesson.id}.${direction}: needs at least three practice questions, found ${practice.length}`);
      practice.forEach((question, index) => {
        assert.ok(isText(question.prompt), `${lesson.id}.${direction} question ${index + 1}: missing prompt`);
        assert.ok(question.choices.length >= 2, `${lesson.id}.${direction} question ${index + 1}: needs at least two choices`);
        assert.deepStrictEqual(duplicates(question.choices), [], `${lesson.id}.${direction} question ${index + 1}: choices must be distinct`);
        assert.ok(
          Number.isInteger(question.answer) && question.answer >= 0 && question.answer < question.choices.length,
          `${lesson.id}.${direction} question ${index + 1}: answer index ${question.answer} is out of range`
        );
      });
    }
  }
});

/*
 * A learner who never reads the target language can still score well if the
 * answer is always first, or always the longest option. Both are shape tells,
 * and both are easy to introduce by accident when writing many questions.
 */
test("practice answers are not guessable from position", () => {
  const positions = new Set();
  for (const lesson of lessons) {
    for (const direction of directions) {
      for (const question of schema.normalizeContent(lesson[direction]).practice) {
        positions.add(question.answer);
      }
    }
  }
  assert.ok(positions.size > 1, "every correct answer sits at the same index, so the set can be passed without reading it");
});

test("practice answers are not guessable from length", () => {
  const suspicious = [];
  for (const lesson of lessons) {
    for (const direction of directions) {
      schema.normalizeContent(lesson[direction]).practice.forEach((question, index) => {
        const lengths = question.choices.map((choice) => choice.length);
        const answerLength = lengths[question.answer];
        const others = lengths.filter((_, position) => position !== question.answer);
        const longest = Math.max(...others);
        const shortest = Math.min(...others);
        if (answerLength > longest * 1.6 || answerLength * 1.6 < shortest) {
          suspicious.push(`${lesson.id}.${direction} question ${index + 1}`);
        }
      });
    }
  }
  assert.deepStrictEqual(suspicious, [], `the correct answer stands out by length in: ${suspicious.join(", ")}`);
});

test("the verb curriculum is complete and uniquely identified", () => {
  assert.ok(Array.isArray(curriculum) && curriculum.length > 0);
  const ids = curriculum.map((verb) => verb.id);
  assert.deepStrictEqual(duplicates(ids), [], "verb ids must be unique");
  for (const verb of curriculum) {
    assert.ok(isText(verb.spanish) && isText(verb.english), `${verb.id}: missing translation pair`);
    for (const form of ["presentYo", "preteriteYo", "participle"]) {
      assert.ok(isText(verb.forms?.[form]), `${verb.id}: missing ${form}`);
    }
    for (const label of ["level", "register", "regionality"]) {
      assert.ok(isText(verb[label]), `${verb.id}: missing ${label}`);
    }
  }
});

test("verb spelling follows the rules that have one right answer", () => {
  /*
   * Two families of Spanish form are fully decidable from the infinitive, so a
   * wrong one is an error rather than a regional preference and needs no native
   * speaker to adjudicate.
   *
   * Both were wrong in the seed data. Thirteen verbs appended the preterite
   * ending instead of replacing the final consonant ("lleggué" for llegué,
   * "buscqué" for busqué), and two regularised an irregular participle
   * ("abrido" for abierto, "rompido" for roto). They rendered on the verb list
   * and in the flashcard decks, so learners were being taught them.
   *
   * The irregular participles are pinned in a table because they cannot be
   * derived. A new verb belonging to one of those families is covered the
   * moment it is added; a new irregular has to be added to the table, and the
   * regular rule will flag it loudly until someone does.
   */
  const irregularParticiples = {
    abrir: "abierto", cubrir: "cubierto", descubrir: "descubierto", decir: "dicho",
    escribir: "escrito", describir: "descrito", hacer: "hecho", satisfacer: "satisfecho",
    morir: "muerto", poner: "puesto", componer: "compuesto", proponer: "propuesto",
    suponer: "supuesto", resolver: "resuelto", romper: "roto", ver: "visto",
    prever: "previsto", volver: "vuelto", devolver: "devuelto", envolver: "envuelto",
    imprimir: "impreso", "freír": "frito"
  };

  // A reflexive infinitive and a reflexive form both carry the pronoun; the
  // spelling rules apply to what is left once it is set aside.
  const bare = (infinitive) => (infinitive.endsWith("se") ? infinitive.slice(0, -2) : infinitive);
  const withoutPronoun = (form) => form.replace(/^(me|te|se|nos) /, "");

  const expectedParticiple = (infinitive) => {
    const verb = bare(infinitive);
    if (irregularParticiples[verb]) return irregularParticiples[verb];
    const stem = verb.slice(0, -2);
    if (verb.endsWith("ar")) return `${stem}ado`;
    // A stem ending in a strong vowel takes the accent: leer -> leído. A stem
    // ending in u does not, because ui is not a hiatus: construir -> construido.
    if (verb.endsWith("er") || verb.endsWith("ir")) return /[aeo]$/.test(stem) ? `${stem}ído` : `${stem}ido`;
    return null;
  };

  // Preterite yo keeps the sound of the infinitive, so the spelling has to move:
  // -gar -> -gué, -car -> -qué, -zar -> -cé.
  const expectedPreteriteYo = (infinitive) => {
    const verb = bare(infinitive);
    if (verb.endsWith("gar")) return `${verb.slice(0, -3)}gué`;
    if (verb.endsWith("car")) return `${verb.slice(0, -3)}qué`;
    if (verb.endsWith("zar")) return `${verb.slice(0, -3)}cé`;
    return null;
  };

  // A handful of -iar and -uar verbs break the diphthong in the yo form and
  // carry a written accent; most do not. It is lexical, not derivable, so the
  // ones that do are pinned and every other verb in those two families is
  // asserted to be plain. "envio" and "continuo" were both stored without the
  // accent, which makes the first a misspelling and the second a different
  // word — continuo is the adjective "continuous".
  const accentedYo = { enviar: "envío", continuar: "continúo" };

  const wrong = [];
  let checkedParticiples = 0;
  let checkedPreterites = 0;
  let checkedAccents = 0;
  for (const verb of curriculum) {
    const participle = expectedParticiple(verb.spanish);
    if (participle) {
      checkedParticiples += 1;
      const got = withoutPronoun(verb.forms.participle);
      if (got !== participle) wrong.push(`${verb.id} ${verb.spanish} participle: "${got}" should be "${participle}"`);
    }
    const preterite = expectedPreteriteYo(verb.spanish);
    if (preterite) {
      checkedPreterites += 1;
      const got = withoutPronoun(verb.forms.preteriteYo);
      if (got !== preterite) wrong.push(`${verb.id} ${verb.spanish} preteriteYo: "${got}" should be "${preterite}"`);
    }
    const stem = bare(verb.spanish);
    if (stem.endsWith("iar") || stem.endsWith("uar")) {
      checkedAccents += 1;
      const got = withoutPronoun(verb.forms.presentYo);
      const want = accentedYo[stem] || `${stem.slice(0, -2)}o`;
      if (got !== want) wrong.push(`${verb.id} ${verb.spanish} presentYo: "${got}" should be "${want}"`);
    }
  }

  assert.ok(checkedParticiples > 0, "no participles were checked, so this verifies nothing");
  assert.ok(checkedPreterites > 0, "no -gar/-car/-zar verbs were checked, so this verifies nothing");
  assert.ok(checkedAccents > 0, "no -iar/-uar verbs were checked, so this verifies nothing");
  assert.deepStrictEqual(wrong, [], `the app would teach these forms:\n${wrong.join("\n")}`);
});

test("both directions of a lesson teach the same amount", () => {
  /*
   * A lesson's es and en sides are not translations of each other. Each is
   * independent material for one learning direction: the es side teaches
   * Colombian Spanish, the en side teaches English, and their words are
   * supposed to differ.
   *
   * What they cannot differ on is depth. Four lessons offered four related
   * expressions on one side and three on the other, so whichever direction a
   * learner picked silently decided how much they were taught. That is
   * invisible from either side alone, because nothing looks missing when you
   * only ever see one.
   *
   * Compares structure and array lengths, never text, so the two sides stay
   * free to say entirely different things.
   */
  const shapeOf = (node, trail, out) => {
    if (Array.isArray(node)) {
      out.push(`${trail}[] = ${node.length}`);
      node.forEach((item, index) => shapeOf(item, `${trail}[${index}]`, out));
      return out;
    }
    if (node && typeof node === "object") {
      for (const key of Object.keys(node).sort()) shapeOf(node[key], trail ? `${trail}.${key}` : key, out);
      return out;
    }
    out.push(`${trail} : ${typeof node}`);
    return out;
  };

  const gaps = [];
  for (const lesson of lessons) {
    for (const direction of directions) {
      assert.ok(lesson[direction], `${lesson.id}: missing the ${direction} side entirely`);
    }
    const es = shapeOf(lesson.es, "", []);
    const en = shapeOf(lesson.en, "", []);
    const inEn = new Set(en);
    const inEs = new Set(es);
    es.filter((entry) => !inEn.has(entry)).forEach((entry) => gaps.push(`${lesson.id} es only: ${entry}`));
    en.filter((entry) => !inEs.has(entry)).forEach((entry) => gaps.push(`${lesson.id} en only: ${entry}`));
  }
  assert.deepStrictEqual(gaps, [], `one direction is taught less than the other:\n${gaps.join("\n")}`);
});

test("reference lists match the shape the renderers expect", () => {
  assert.ok(fluencyItems.length > 0);
  for (const item of fluencyItems) {
    assert.strictEqual(item.length, 5, "expected [phrase, meaning, type, region, note]");
    item.forEach((cell) => assert.ok(isText(cell)));
  }
  assert.ok(matureItems.length > 0);
  /* After Dark rows moved from tuples to named objects when the set grew to
     three cities: a 5-slot tuple with two labels at the end is unreadable, and
     the city has to be addressable by name for the view to filter on it. */
  const CITIES = new Set(["bogota", "medellin", "barranquilla"]);
  const SEVERITIES = new Set(["Low", "Medium", "High"]);
  for (const item of matureItems) {
    assert.ok(!Array.isArray(item), "After Dark rows are objects, not tuples");
    for (const slot of ["city", "phrase", "equivalent", "severity", "note"]) {
      assert.ok(isText(item[slot]), `an After Dark row is missing "${slot}"`);
    }
    assert.ok(CITIES.has(item.city), `unknown city "${item.city}" — the view filters on this and would drop the row`);
    assert.ok(SEVERITIES.has(item.severity), `unknown severity "${item.severity}" — the card colour keys off this`);
  }
  assert.ok(slangItems.length > 0);
  for (const item of slangItems) {
    assert.strictEqual(item.length, 6, "expected [phrase, meaning, register, region, safety, note]");
    item.forEach((cell) => assert.ok(isText(cell)));
  }
  assert.ok(matureSignals.length > 0);
  for (const item of matureSignals) {
    assert.strictEqual(item.length, 5, "expected [signal, whatItLooksLike, whatItMeans, direction, respond]");
    item.forEach((cell) => assert.ok(isText(cell)));
  }
});

test("the reference lists say which language they belong to", () => {
  /*
   * A signal row is a piece of advice about a conversation, and which language
   * that conversation is in decides who it is for: "Sudden switch to usted" is
   * nothing to a Spanish speaker learning English. That was invisible while the
   * renderer showed all of them to everybody. Once these become flashcards it
   * stops being invisible, because a card drilling an English cue is useless in
   * a Spanish deck.
   *
   * After Dark is deliberately not checked here. Its rows carry a city instead
   * of a direction, because every one of them is a Colombian phrase glossed
   * into English -- both directions have something to recognize in the same
   * row, so there is no language to assign. "After Dark covers every city the
   * page offers, evenly" is what guards that list.
   */
  for (const item of matureSignals) {
    assert.ok(["es", "en"].includes(item[3]), `mature signal "${item[0]}" has no valid direction`);
  }
  for (const item of slangItems) {
    assert.ok(isText(item[0]) && isText(item[1]), `slang entry "${item[0]}" is missing a phrase or meaning`);
  }
  for (const direction of ["es", "en"]) {
    assert.ok(matureSignals.some((item) => item[3] === direction), `no mature signals for ${direction}`);
  }
});

test("every slang entry says whether a learner may actually say it", () => {
  /*
   * The whole point of the slang list. An entry without a safety value is worse
   * than no entry: it teaches a phrase and withholds the one thing that stops
   * the learner using it badly.
   */
  const SAFETY = ["Say it freely", "Say it with friends", "Understand only"];
  for (const [phrase, , , region, safety] of slangItems) {
    assert.ok(SAFETY.includes(safety), `slang "${phrase}" has an unrecognised safety value: ${safety}`);
    assert.ok(isText(region), `slang "${phrase}" does not say where it is used`);
  }
  assert.ok(
    slangItems.some(([, , , , safety]) => safety === "Understand only"),
    "no slang is marked recognition-only, which means the safety field is not being used honestly");
});

test("no slang phrase is listed twice", () => {
  const seen = new Map();
  for (const [phrase] of slangItems) {
    assert.ok(!seen.has(phrase), `slang phrase "${phrase}" appears more than once`);
    seen.set(phrase, true);
  }
});

test("nothing reads a lesson row by position", () => {
  /*
   * Dialogue and vocabulary rows used to be tuples, and readers destructured
   * them: `const [, target] = line`, `dialogue.map((line) => line[1])`. Rows are
   * named objects now, and the schema still accepts the old tuples, so the
   * supported way to read a slot is by name.
   *
   * This is here because of how the tuple reads failed rather than that they
   * failed. Destructuring an object throws and you find it immediately; the
   * read-aloud button built its utterance with `line[1]`, got `undefined` for
   * every line, and simply spoke nothing — no error, no visible change, and a
   * green suite. A silent feature is worth a loud test.
   *
   * Test files are checked too. The first version of this guard looked only at
   * the product, on the reasoning that a broken test fails and announces
   * itself. That reasoning is wrong: a positional read in a test yields
   * `undefined`, and a test that never asserts on the value it misread stays
   * green while checking nothing. Two tests in the flashcards branch had
   * exactly that, green in CI, against product code that was correct.
   */
  const offenders = [
    // first.dialogue[0][1]
    /\.(?:dialogue|vocabulary)\s*\[\s*\d+\s*\]\s*\[\s*\d+\s*\]/,
    // const [, target] = first.dialogue[0]
    /const\s*\[[^\]]*\]\s*=\s*[^;\n]*\b(?:dialogue|vocabulary)\b[^;\n]*/,
    // for (const [term, meaning] of content.vocabulary)
    /for\s*\(\s*(?:const|let|var)\s*\[[^\]]*\]\s+of\s+[^)]*\b(?:dialogue|vocabulary)\b/,
    // dialogue.map((line) => line[1]) — the one that spoke silence
    /\b(?:dialogue|vocabulary)\s*\.\s*(?:map|forEach|filter|flatMap)\(\s*\(?\s*(\w+)[\s\S]{0,120}?\b\1\s*\[\s*\d+\s*\]/,
    // .map(([, target]) => ...)
    /\b(?:dialogue|vocabulary)\s*\.\s*(?:map|forEach|filter|flatMap|some|every|find)\(\s*\(?\s*\[/,
  ];

  // Comments and string literals are both prose, and the prose here quotes the
  // very bugs being banned. See blankLiterals: stripping comments alone flagged
  // a (name, count) pair whose name happened to be "dialogue".
  const code = (source) => blankLiterals(source);

  const tests = fs.readdirSync(path.join(root, "test"))
    .filter((name) => name.endsWith(".test.js"))
    .map((name) => `test/${name}`);

  for (const file of ["app.js", "review.js", "review-ui.js", ...tests]) {
    const source = code(read(file));
    for (const pattern of offenders) {
      const found = source.match(pattern);
      assert.strictEqual(found, null,
        `${file} reads a lesson row by position (${found && found[0].trim()}); read the slot by name instead`);
    }
  }
});

test("no fallback is guarded by a typeof that an element id makes impossible", () => {
  /*
   * Named access on Window turns every element id into a global, so with
   * `<section id="lessons">` in the page, `typeof lessons` is "object" even
   * when data/lessons.js never loads. A `typeof x === "undefined"` fallback on
   * such a name can never fire, and instead of degrading it hands a <section>
   * to code expecting an array.
   *
   * node --test cannot see this and does worse than miss it: with no document
   * in the harness the name really is undefined, the fallback really does fire,
   * and the guard tests green. The harness inverts the condition rather than
   * merely hiding it. Found by the flashcards session (#8) in their own copy of
   * this pattern; this branch had it in review-ui.js.
   *
   * Derived from the page's ids rather than a list of names, so renaming an id
   * cannot leave this passing while guarding nothing.
   */
  const html = read("index.html");
  const idGlobals = new Set(
  [...html.matchAll(/id="([\w-]+)"/g)]
    .map((match) => match[1])
    .filter((id) => /^[A-Za-z_$][\w$]*$/.test(id))
  );
  assert.ok(idGlobals.size > 0,
  "expected index.html to contain ids that are valid identifiers; without any, this check verifies nothing");

  const scripts = [...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map((match) => match[1])
  .filter((src) => fs.existsSync(path.join(root, src)));

  const impossible = [];
  for (const src of scripts) {
  const text = read(src);
  const structure = blankLiterals(text);  // for deciding what is code
  const prose = blankComments(text);      // keeps "undefined" readable
  /*
   * What this asserts is REACHABILITY, not safety, and the distinction is the
   * whole point. Wrapping the probe in a shape check fixes the crash and
   * leaves the dead branch:
   *
   *   dataArray(typeof lessons === "undefined" ? null : lessons)
   *
   * `lessons` resolves either way -- to the const binding when data/lessons.js
   * loads, and to <section id="lessons"> through named access when it does
   * not -- so the "undefined" arm is unreachable in both worlds and the
   * fallback it appears to provide does not exist. Array.isArray is what
   * actually rescues the element case; the typeof contributes nothing except
   * the impression of a guard, and anyone who later trusts that impression and
   * drops the shape check gets an element where the data should be.
   *
   * The remedy is to delete the probe, not to wrap it: dataArray(lessons).
   *
   * This is deliberately strict, and it is strict only where it is entitled to
   * be. A probe on a name with no element id IS load-bearing -- curriculum,
   * fluencyItems and matureItems would throw ReferenceError on a bare read if
   * their script failed -- so only names that index.html also declares as ids
   * are reported.
   *
   * I had narrowed this to accept the shape-checked form, on a peer's report
   * that it was a false positive. It was not; they retracted it and they were
   * right to. Recorded because the narrowing looked reasonable and cost the
   * check its only real finding.
   */
  for (const match of prose.matchAll(/typeof\s+([A-Za-z_$][\w$]*)\s*===?\s*["']undefined["']/g)) {
    if (!idGlobals.has(match[1])) continue;
    if (structure[match.index] === " ") continue;  // the probe is quoted prose, not code
    impossible.push(`${src}: typeof ${match[1]} === "undefined" can never be true; #${match[1]} is an element id`);
  }
  }

  assert.deepStrictEqual([...new Set(impossible)], [],
  "guard on shape (Array.isArray) instead — an element never satisfies it, and the typeof probe only helps\n" +
  "for a name no script and no element declares.");
});

test("the read-aloud button speaks the taught line", () => {
  const app = read("app.js");
  const utterance = app.match(/new SpeechSynthesisUtterance\(([^;]*?)\);/);
  assert.ok(utterance, "expected app.js to build a speech utterance");
  assert.match(utterance[1], /\.target\b/,
    "the utterance must read the target slot by name, or it speaks a string of undefined");
});

test("every element app.js looks up exists in index.html", () => {
  const app = read("app.js");
  const html = read("index.html");
  const ids = new Set([...app.matchAll(/\$\("#([\w-]+)"\)/g)].map((match) => match[1]));
  assert.ok(ids.size > 0, "expected app.js to query elements by id");
  for (const id of ids) {
    assert.ok(html.includes(`id="${id}"`), `index.html is missing #${id}, which app.js expects`);
  }
});

test("app.js renders the whole lesson set rather than a single hard-coded lesson", () => {
  const app = read("app.js");
  assert.doesNotMatch(app, /=\s*lessons\[0\]\s*;/, "app.js must not pin the view to lessons[0]");
  assert.match(app, /lessons\.length/, "app.js should size progress against the full lesson list");
});

/*
 * The verb list was seeded from a frequency list and has never had a Colombian
 * speaker over it. These tests guard the two things that follow from that: the
 * entries that are demonstrably wrong stay fixed, and the labels nobody has
 * checked are not shown to learners as though they were.
 */
test("English glosses are English", () => {
  // A gloss that reads like a Spanish infinitive means the wrong column was
  // filled in. "live/trabajar" shipped that way.
  const spanishInfinitive = /^[a-záéíóúñ]+(?:ar|er|ir)$/;
  const englishExceptions = new Set(["answer", "offer", "enter", "remember", "consider", "deliver", "gather", "hear", "prefer", "matter", "discover", "wear", "suffer", "cover", "order", "differ", "transfer"]);
  for (const verb of curriculum) {
    for (const sense of verb.english.split("/").map((part) => part.trim())) {
      assert.ok(isText(sense), `${verb.spanish} has an empty sense in "${verb.english}"`);
      if (spanishInfinitive.test(sense) && !englishExceptions.has(sense)) {
        assert.fail(`${verb.spanish} is glossed "${verb.english}" — "${sense}" looks like Spanish`);
      }
    }
    const senses = verb.english.split("/").map((part) => part.trim());
    const redundant = senses.some((a, i) => senses.some((b, j) => i !== j && a === b));
    assert.ok(!redundant, `${verb.spanish} repeats a sense in "${verb.english}"`);
  }
});

test("no two verb cards ask the same question", () => {
  /*
   * A verb card shows the language you have and asks for the one you are
   * building, then reveals a single answer. Two verbs sharing an English gloss
   * therefore produce two cards with an identical prompt and different answers,
   * and the learner who gives the other right answer is shown they were wrong.
   *
   * Four pairs shipped that way: leave (dejar / salir), return (volver /
   * regresar), answer (responder / contestar) and happen (ocurrir / suceder).
   * The first is the worst — dejar and salir are not synonyms, so the card was
   * teaching a false equivalence rather than merely repeating itself.
   *
   * Checked on the built cards rather than on the gloss column, because the
   * prompt is what a learner actually sees.
   */
  const sources = vm.runInNewContext(
    `${read("data/lessons.js")}\n${read("data/curriculum.js")}\n${read("data/flashcards.js")}\n({ lessons, curriculum, fluencyItems, flashcardTopics })`,
    {}, { filename: "parcero-card-prompts.js" });

  const clashes = [];
  for (const direction of directions) {
    const cards = sources.flashcardTopics(direction, sources)
      .flatMap((topic) => topic.cards)
      .filter((card) => card.kind === "verb");
    assert.ok(cards.length > 0, `no verb cards were built for ${direction}`);

    const answersByPrompt = new Map();
    for (const card of cards) {
      if (!answersByPrompt.has(card.front)) answersByPrompt.set(card.front, new Set());
      answersByPrompt.get(card.front).add(card.back);
    }
    for (const [prompt, answers] of answersByPrompt) {
      if (answers.size > 1) clashes.push(`${direction}: "${prompt}" accepts ${[...answers].join(" or ")} but reveals one`);
    }
  }
  assert.deepStrictEqual(clashes, [], `ambiguous cards:\n${clashes.join("\n")}`);
});

test("first-person forms are plausible Spanish", () => {
  // "oo" was published as the yo form of oír for as long as the list existed.
  for (const verb of curriculum) {
    const yo = verb.forms.presentYo;
    assert.match(yo, /[oyeéí]$/, `${verb.spanish}: "${yo}" is not a first-person singular`);
    assert.ok(!/(.)\1$/.test(yo), `${verb.spanish}: "${yo}" doubles its final letter`);
    // A strong vowel before -ido needs the accent, or the syllable collapses.
    assert.ok(!/[aeo]ido$/.test(verb.forms.participle),
      `${verb.spanish}: participle "${verb.forms.participle}" is missing its accent`);
  }
});

test("the yo form of an experiencer verb is a settled question", () => {
  /*
   * SETTLED — this is a recorded decision, not an open finding. An audit that
   * rediscovers the shape below should stop here rather than raise it again.
   *
   * A verb card renders `yo <presentYo>`. For gustar that reads "yo gusto"
   * against the gloss "like", and nobody says "yo gusto" to mean "I like" --
   * the idiom is "me gusta", where the thing liked is the subject. Six other
   * verbs in the list have the same shape. Every form stored is grammatically
   * real, so none of them is a spelling error; what is arguably wrong is the
   * decision to show a yo column for this class at all.
   *
   * Changing that means designing how a dative-experiencer verb is represented
   * everywhere it appears -- the reference card, the flashcard note and the
   * report picker's verb slots -- rather than editing seven strings. That
   * redesign is deliberately not being done, and the current state is accepted.
   *
   * What this test protects is the boundary of that acceptance. The decision
   * covers exactly the seven verbs below. If an eighth is added, it is a new
   * instance nobody has ruled on and the acceptance must not silently stretch
   * to cover it, so the wider vocabulary is checked too and this fails with
   * instructions. It also fails if an accepted verb leaves the list, so the
   * exemption cannot outlive the thing it exempts.
   */
  const accepted = ["gustar", "interesar", "importar", "faltar", "sobrar", "ocurrir", "suceder"];

  // Verbs that take a dative experiencer or are used impersonally. Excludes
  // parecer, quedar, tocar, costar and pasar, which are in the list already and
  // have ordinary first-person uses ("yo paso", "yo toco"), so their yo column
  // is not misleading and they are not part of this question.
  const experiencerVocabulary = new Set([
    ...accepted,
    "encantar", "doler", "apetecer", "molestar", "fascinar", "bastar", "convenir",
    "disgustar", "agradar", "entusiasmar", "aburrir", "emocionar", "picar", "urgir"
  ]);

  const present = new Set(curriculum.map((verb) => verb.spanish));

  const departed = accepted.filter((verb) => !present.has(verb));
  assert.deepStrictEqual(departed, [],
    `these verbs are exempted but no longer in the list, so drop them from the exemption: ${departed.join(", ")}`);

  // Spread back into this realm: curriculum comes from vm.runInNewContext, so
  // its map/filter return arrays with a foreign Array.prototype and
  // deepStrictEqual compares prototypes. The duplicates() helper above sidesteps
  // the same trap the same way.
  const undecided = [...curriculum
    .map((verb) => verb.spanish)
    .filter((verb) => experiencerVocabulary.has(verb) && !accepted.includes(verb))];
  assert.deepStrictEqual(undecided, [],
    `${undecided.join(", ")} is a dative-experiencer verb whose yo form will render as "yo <form>" and read wrongly. `
    + "The existing acceptance does not cover it. Either decide how this class is represented and change it "
    + "everywhere, or add the verb to `accepted` above to extend the same decision to it deliberately.");
});

test("the withholding mechanism still works, even though nothing is flagged now", () => {
  /*
   * Every verb was approved on 2026-09-09, so this no longer has live
   * unreviewed data to guard. The mechanism is the thing worth keeping: the
   * next batch of unchecked content must be withheld automatically rather
   * than published because nobody remembered the rule.
   *
   * The old version asserted `unreviewed.length > 0` and would simply have
   * been deleted here. Instead it now runs verbTags() against a synthetic
   * flagged verb, so the protection is tested by behaviour and cannot rot
   * just because the real list happens to be fully approved today.
   */
  const app = read("app.js");
  const tags = app.match(/function verbTags\(verb\)[\s\S]*?\n\}/);
  assert.ok(tags, "app.js must build verb tags through verbTags()");

  const verbTags = vm.runInNewContext(`${tags[0]}\nverbTags`, {}, { filename: "parcero-verb-tags.js" });
  const sample = { level: "foundation", register: "REGISTER_VALUE", regionality: "REGION_VALUE" };

  const approved = verbTags(sample);
  assert.ok(approved.includes("REGISTER_VALUE"),
    "an approved verb should publish its register");
  assert.ok(approved.includes("foundation"), "level should always publish");
  assert.ok(!approved.includes("REGION_VALUE"),
    "regionality is the same string on all 200 verbs, so it must not render as a per-verb tag");

  const flagged = verbTags({ ...sample, reviewStatus: "needs review" });
  assert.ok(!flagged.includes("REGISTER_VALUE"),
    "a flagged verb must not publish its register");
  assert.ok(flagged.includes("foundation"),
    "level is real data and should publish even while the verb is flagged");

  // The register may only reach the page through the guard; the regionality
  // may not reach it at all.
  assert.ok(!/\$\{verb\.register\}/.test(app.replace(tags[0], "")),
    "nothing outside verbTags may render the register");
  assert.ok(!/verb\.regionality/.test(app),
    "nothing in app.js may render the regionality");

  // The flashcard decks read the same curriculum, so a flagged verb must not
  // reach a learner through a deck either. Verified against cards actually
  // built from a flagged copy of the data rather than by grepping.
  const sources = vm.runInNewContext(
    `${dataSource({ schema: false, flashcards: true })}\n({ lessons, curriculum, fluencyItems, flashcardTopics })`,
    {}, { filename: "parcero-flashcard-surface.js" });
  const flaggedCurriculum = sources.curriculum.map((verb) => ({
    ...verb, register: "REGISTER_VALUE", regionality: "REGION_VALUE", reviewStatus: "needs review"
  }));
  const verbCards = directions.flatMap((direction) =>
    sources.flashcardTopics(direction, { ...sources, curriculum: flaggedCurriculum })
      .flatMap((topic) => topic.cards.filter((card) => card.kind === "verb")));
  assert.ok(verbCards.length > 0, "no verb flashcards were built, so this check verifies nothing");
  for (const card of verbCards) {
    const printed = JSON.stringify(card);
    for (const secret of ["REGISTER_VALUE", "REGION_VALUE"]) {
      assert.ok(!printed.includes(secret),
        `flashcard ${card.id} publishes a withheld label`);
    }
  }
});

test("the source note matches what the page actually shows", () => {
  // The note has to track the page. It once promised review "before
  // publication" while unreviewed labels were on screen; the opposite error is
  // now possible -- saying the labels are hidden when they are published.
  const { UI_STRINGS } = require("../i18n.js");
  const publishing = curriculum.some((verb) => !verb.reviewStatus);
  for (const language of Object.keys(UI_STRINGS)) {
    const note = UI_STRINGS[language]["library.sourceNote.after"];
    assert.ok(isText(note), `${language} is missing the source note`);
    assert.ok(!/before publication|antes de publicarse/.test(note),
      `${language} claims labels are reviewed before publication`);
    if (publishing) {
      assert.ok(!/stay hidden|quedan ocultas/.test(note),
        `${language} still says the labels are hidden while the page publishes them`);
    }
  }
});

test("practiceExtra questions hold the same shape guarantees as the main one", () => {
  /*
   * test/practice.test.js (merged PR #5) asserts the correct answer is not
   * identifiable by position or by length. It reads `lesson[direction]`, which
   * is only the ONE top-level question -- so the four practiceExtra questions
   * per direction, 64 in total, inherit none of it. They were added after that
   * test was written, which is exactly when this class of gap is born: the
   * mechanism is fine and the coverage silently is not.
   *
   * Guarded here rather than in practice.test.js so this cannot collide with
   * the session that owns that file.
   */
  const extras = lessons.flatMap((lesson) => directions.flatMap((direction) =>
    (lesson[direction].practiceExtra || [])
      .map((question, index) => ({ id: `${lesson.id}/${direction}/extra${index}`, ...question }))
      .filter((question) => Array.isArray(question.choices) && question.choices.length > 1)));

  assert.ok(extras.length > 0, "no practiceExtra questions found, so this check verifies nothing");

  const towering = [];
  const filler = [];
  const outOfRange = [];
  for (const question of extras) {
    if (!Number.isInteger(question.answer) || !question.choices[question.answer]) {
      outOfRange.push(`${question.id}: answer ${question.answer} is not an index into ${question.choices.length} choices`);
      continue;
    }
    const lengths = question.choices.map((choice) => choice.length);
    const correct = lengths[question.answer];
    const rival = Math.max(...lengths.filter((_, index) => index !== question.answer));
    if (correct > rival * 1.5) {
      towering.push(`${question.id}: correct choice ${correct} chars against a longest distractor of ${rival}`);
    }
    // The ">= 3 words" test for filler only holds when the answer is itself
    // prose. A "which word?" question has a one-word answer, and one-word
    // distractors are then the right shape -- at-the-clinic/es/extra2 offers
    // "parche" and "taximetro" against "incapacidad", which are plausible
    // confusions borrowed from other lessons, not filler.
    if (question.choices[question.answer].trim().split(/\s+/).length < 3) continue;
    question.choices.forEach((choice, index) => {
      if (index === question.answer) return;
      if (choice.trim().split(/\s+/).length < 3) filler.push(`${question.id}: distractor ${index} is ${JSON.stringify(choice)}`);
    });
  }

  assert.deepStrictEqual(outOfRange, [], "choices and answer are a pair; answer indexes into choices");
  assert.deepStrictEqual(towering, [], "lengthen the distractors rather than trimming the answer");
  assert.deepStrictEqual(filler, [], "a distractor nobody could pick is not a distractor");
});

/*
 * Every explanatory field is written in the language its reader actually reads.
 *
 * This is the one content rule a reviewer cannot spot by reading a diff in the
 * direction they speak. The `en` direction teaches English to a Colombian, so
 * its explanations are Spanish and only the English being taught is English;
 * `es` is the mirror. Eight blocks were authored against a prose description of
 * that rule and six of them got some part of it wrong, so the rule is checked
 * by machine here rather than restated in a review checklist.
 *
 * `scripts/check-lesson-block.js` runs the same check on a single file so an
 * author gets the answer before delivering. This test is what stops a later
 * edit from quietly undoing it.
 */
test("explanatory prose is written in the language its reader reads", () => {
  const wrong = [];
  for (const lesson of lessons) {
    for (const direction of directions) {
      for (const problem of wrongLanguage(lesson[direction], direction)) {
        wrong.push(`${lesson.id} ${direction}.${problem.trail}: must be ${problem.want}, reads as ${problem.got} - ${JSON.stringify(problem.text.slice(0, 80))}`);
      }
    }
  }
  assert.deepStrictEqual(wrong, [], "rewrite the field in the language named, rather than relaxing the check");
});

/*
 * The title is the one string a learner reads before they have opened
 * anything, so it belongs to the language they already speak: English on the
 * `es` side, Spanish on the `en` side.
 *
 * It shipped backwards on the `es` side for the whole life of the corpus --
 * 232 of 233 lesson titles were Spanish -- while EXPECTED.es.title said
 * "spanish" and the test above passed on every run. The reason is that
 * classify() refuses to judge anything under eight words, so it answered
 * "unknown" for every title ever passed to it. The map named a rule, the walk
 * consulted the map, and nothing was ever compared.
 *
 * So this test does not just check the titles. It first proves the checker can
 * still fail, because a guard that cannot fail is what produced the bug.
 */
test("the title guard can actually fail", () => {
  // A real title from each side, judged correctly.
  assert.strictEqual(titleLanguage("Un café y una conversación"), "spanish");
  assert.strictEqual(titleLanguage("A coffee and a conversation"), "english");

  // Feeding the wrong language into a real direction has to be reported.
  const swapped = wrongLanguage({ title: "Un café y una conversación" }, "es");
  assert.strictEqual(swapped.length, 1, "a Spanish title on the es side must be flagged");
  assert.strictEqual(swapped[0].want, "english");
  assert.strictEqual(swapped[0].got, "spanish");

  /* Place names carry accents, and weighting those as Spanish would fire on
     correct English titles. Named here so the exemption is deliberate. */
  assert.notStrictEqual(titleLanguage("Turning thirty in Montería"), "spanish");
  assert.notStrictEqual(titleLanguage("Learning to make ajiaco in a Bogotá kitchen"), "spanish");
});

test("titles are written in the language the learner already reads", () => {
  const want = { es: "english", en: "spanish" };
  const wrong = [];
  let judged = 0;

  for (const lesson of lessons) {
    for (const direction of directions) {
      const title = lesson[direction].title;
      const got = titleLanguage(title);
      if (got === "unknown") continue;
      judged += 1;
      if (got !== want[direction]) {
        wrong.push(`${lesson.id} ${direction}.title: must be ${want[direction]}, reads as ${got} - ${JSON.stringify(title)}`);
      }
    }
  }

  assert.deepStrictEqual(wrong, [], "write the title in the reader's own language");

  /* Without this, deleting every title would leave the assertion above green.
     The classifier is deliberately conservative on short strings, so the bar is
     a majority of the corpus rather than all of it. */
  const total = lessons.length * directions.length;
  assert.ok(
    judged > total / 2,
    `only ${judged} of ${total} titles were confidently classified; the guard is close to vacuous`
  );
});

/*
 * The tone label beside a vocabulary entry or a variation describes how an
 * expression sounds. On the `en` side that description is being read by a
 * Spanish speaker, so it belongs in Spanish, exactly like the `region` note
 * next to it.
 *
 * It did not used to be. app.js prints these raw inside a tag rather than
 * routing them through t(), and the values were authored in English on both
 * sides, so a Spanish reader got "polite neutral" and "professional hedged"
 * in a page that was otherwise entirely in their language.
 *
 * The check is a word list rather than a snapshot of the 45 current values,
 * so that adding a new tone label is not blocked, only doing it in English.
 * Cognates that are spelled the same in both languages -- casual, formal,
 * informal, natural, neutral -- are deliberately absent: they are correct
 * Spanish and flagging them would make the guard cry wolf.
 */
const ENGLISH_ONLY_REGISTER_WORDS = [
  "academic", "bargaining", "clear", "clinical", "concrete", "conversational",
  "dated", "direct", "efficient", "enthusiastic", "friendly", "hedged",
  "indirect", "market", "polite", "practical", "professional", "sales",
  "seminar", "service", "soft", "softened", "specific", "warm"
];

test("the tone labels on the English side are in Spanish", () => {
  const pattern = new RegExp(`\\b(${ENGLISH_ONLY_REGISTER_WORDS.join("|")})\\b`, "i");
  const english = [];
  let checked = 0;
  for (const lesson of lessons) {
    const side = lesson.en;
    if (!side) continue;
    const rows = [
      ...(side.vocabulary || []).map((word) => ["vocabulary", word.term, word.register]),
      ...(side.variations || []).map((row) => ["variations", row.form, row.register])
    ];
    for (const [slot, subject, register] of rows) {
      if (!register) continue;
      checked += 1;
      const hit = register.match(pattern);
      if (hit) english.push(`${lesson.id} ${slot} "${subject}": register "${register}" is English ("${hit[1]}")`);
    }
  }
  assert.ok(checked > 90, `only ${checked} tone labels were checked, so this guard is not seeing the data`);
  assert.deepStrictEqual([...english], [],
    "a Spanish reader should not be told an English expression is 'polite neutral' in English");
});

/*
 * The converse, so the guard above cannot be satisfied by translating the
 * `es` side too. Those labels are read by an English speaker learning Spanish,
 * so English is what they should be in.
 */
test("the tone labels on the Spanish side stay in English", () => {
  const spanish = [];
  for (const lesson of lessons) {
    const side = lesson.es;
    if (!side) continue;
    const all = [...(side.vocabulary || []), ...(side.variations || [])];
    for (const row of all) {
      if (!row.register) continue;
      if (/\b(neutro|cortés|amistoso|profesional|académico|clínico|cálido|práctico|matizado|suavizado|regateo)\b/i.test(row.register)) {
        spanish.push(`${lesson.id}: register "${row.register}" is Spanish`);
      }
    }
  }
  assert.deepStrictEqual([...spanish], [],
    "the Spanish side is read by an English speaker; its tone labels belong in English");
});

/* ---------- module navigation ---------- */

test("every module the nav offers is a view that exists", () => {
  /*
   * The page stopped being one long scroll: each module is a view and the nav
   * switches between them. Two lists have to agree for that to work -- the
   * VIEWS list in app.js and the #view-* containers in index.html -- and they
   * live in different files, so nothing but this stops them drifting.
   */
  const app = read("app.js");
  const html = read("index.html");

  const views = app.match(/const VIEWS = \[([^\]]*)\]/);
  assert.ok(views, "app.js must declare the view list");
  const names = [...views[1].matchAll(/"([^"]+)"/g)].map((match) => match[1]);
  assert.ok(names.length > 1, "expected several views; with one this checks nothing");

  for (const name of names) {
    assert.ok(html.includes(`id="view-${name}"`), `index.html has no #view-${name}, so that view can never show`);
  }
  const containers = [...html.matchAll(/id="view-([\w-]+)"/g)].map((match) => match[1]);
  for (const container of containers) {
    assert.ok(names.includes(container), `#view-${container} exists but app.js never shows it, so it is unreachable`);
  }

  // Every nav destination must be routable, or the link silently does nothing.
  const routes = app.match(/const ROUTE_FOR_HASH = \{([\s\S]*?)\};/);
  assert.ok(routes, "app.js must declare the hash routes");
  for (const href of [...html.matchAll(/<a href="(#[\w-]+)"[^>]*data-i18n="nav\./g)].map((match) => match[1])) {
    assert.ok(routes[1].includes(`"${href}"`), `the nav links to ${href}, which no route maps to a view`);
  }
});

test("exactly one view is visible before any script runs", () => {
  /*
   * The views are hidden in the markup, not by script, so the page cannot
   * flash every module at once on a slow load. Home is the one left open.
   */
  const html = read("index.html");
  const open = [...html.matchAll(/<div class="view" id="view-([\w-]+)"([^>]*)>/g)]
    .filter((match) => !/\bhidden\b/.test(match[2]))
    .map((match) => match[1]);
  assert.deepStrictEqual(open, ["home"],
    "exactly one view may start visible in the markup, and it should be home");
});

test("the modules menu is built from the lesson list, never hard-coded", () => {
  const app = read("app.js");
  /*
   * The signature is matched loosely on purpose. This check cares that the menu
   * is derived, not what arguments it takes -- pinning it to `()` meant that
   * adding a filter argument failed the test with "must build the menu in
   * fillModulesMenu()" while the function was sitting right there, which sends
   * you looking for the wrong bug.
   */
  const fill = app.match(/function fillModulesMenu\([^)]*\)[\s\S]*?\n\}/);
  assert.ok(fill, "app.js must build the modules menu in fillModulesMenu()");
  assert.match(fill[0], /lessons\.map\(/,
    "the menu must map over the lesson list, or it goes stale the moment a lesson is added");
  assert.match(fill[0], /state\.direction/,
    "menu titles must follow the direction toggle, or they stay in one language");
  assert.match(fill[0], /COURSE_MODULES/,
    "lessons must be grouped under their module, or the menu is a flat wall of 200-plus entries");
});

test("the language toggle is reachable from every view", () => {
  /*
   * It used to live inside the hero. Once the hero became a view you can
   * navigate away from, a toggle left there would be unreachable from
   * Flashcards, Library or After Dark.
   */
  const html = read("index.html");
  const header = html.match(/<header class="site-header">[\s\S]*?<\/header>/);
  assert.ok(header, "index.html must have a site header");
  assert.match(header[0], /name="direction"/,
    "the direction toggle must live in the header, which every view shares");

  const views = html.match(/<div class="view"[\s\S]*<\/main>/);
  assert.ok(views, "expected the view containers");
  assert.doesNotMatch(views[0], /name="direction"/,
    "a second copy of the toggle inside a view would drift out of sync with the header one");
});

/* ---------- After Dark ---------- */

test("After Dark covers every city the page offers, evenly", () => {
  const html = read("index.html");
  const tabs = [...html.matchAll(/class="city-tab[^"]*"[^>]*data-city="([\w-]+)"/g)].map((match) => match[1]);
  assert.ok(tabs.length > 0, "index.html must offer city tabs");

  const counts = new Map();
  for (const item of matureItems) counts.set(item.city, (counts.get(item.city) || 0) + 1);

  assert.deepStrictEqual([...counts.keys()].sort(), [...tabs].sort(),
    "the cities in the data and the tabs on the page must be the same set, or a tab renders an empty list");
  for (const city of tabs) {
    assert.strictEqual(counts.get(city), 50,
      `${city} has ${counts.get(city)} entries; each city is meant to carry 50`);
  }
});

test("no After Dark phrase is stranded without its city note", () => {
  const { UI_STRINGS } = require("../i18n.js");
  /*
   * The note is looked up as afterDark.note.<city> from a template string, so
   * the i18n sweep over index.html cannot see it. A missing key would render
   * the raw key name under the tabs.
   */
  for (const city of new Set(matureItems.map((item) => item.city))) {
    for (const language of Object.keys(UI_STRINGS)) {
      assert.ok(isText(UI_STRINGS[language][`afterDark.note.${city}`]),
        `afterDark.note.${city} is missing in "${language}", so the city note would print as a raw key`);
      assert.ok(isText(UI_STRINGS[language][`afterDark.city.${city}`]),
        `afterDark.city.${city} is missing in "${language}"`);
    }
  }
});

test("the midnight theme belongs to After Dark and nothing else", () => {
  const app = read("app.js");
  const css = read("styles.css");
  assert.match(app, /classList\.toggle\("midnight", target === "after-dark"\)/,
    "the midnight class must be tied to the After Dark view, so it cannot leak into other modules");

  const rules = [...css.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/([^{}]+)\{/g)]
    .map((match) => match[1].trim())
    .filter(Boolean);
  const midnight = rules.filter((selector) => selector.includes("midnight"));
  assert.ok(midnight.length > 0, "expected midnight rules; without any this checks nothing");
  for (const selector of midnight) {
    assert.ok(/^html\.midnight\b/.test(selector),
      `"${selector}" styles midnight from outside html.midnight, which can apply when After Dark is closed`);
  }
});