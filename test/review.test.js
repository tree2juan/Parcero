const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const vm = require("node:vm");
const { execFileSync } = require("node:child_process");

const review = require("../review.js");
const schema = require("../data/lesson-schema.js");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const bundle = `${read("data/lessons.js")}\n${read("data/curriculum.js")}\n({ lessons, curriculum, fluencyItems, matureItems });`;
const content = vm.runInNewContext(bundle, {}, { filename: "parcero-data-bundle.js" });

const anchors = review.listAnchors(content);
const isText = (value) => typeof value === "string" && value.trim().length > 0;

function sampleFlag(overrides) {
  const anchor = "lesson:greeting-at-the-cafe/es/dialogue/1/target";
  const resolved = review.resolveAnchor(anchor, content);
  return {
    anchor,
    issueType: "regional",
    severity: "should-fix",
    role: "native-es-co",
    region: "Medellín and Antioquia (paisa)",
    original: resolved.text,
    suggestion: "¿Me das un tinto?",
    comment: "Natural in Medellín; on the coast you would hear it differently.",
    flaggedAt: "2026-09-09T12:00:00.000Z",
    ...overrides
  };
}

test("every reviewable string is addressable, and its anchor resolves back to it", () => {
  assert.ok(anchors.length > 100, `expected a substantial anchor set, got ${anchors.length}`);
  for (const anchor of anchors) {
    const resolved = review.resolveAnchor(anchor, content);
    assert.ok(resolved.ok, `${anchor} did not resolve: ${resolved.reason}`);
    assert.ok(isText(resolved.text), `${anchor} resolved to empty text`);
    assert.ok(isText(resolved.label), `${anchor} has no human-readable label`);
    assert.ok(isText(resolved.path), `${anchor} has no source path`);
    assert.ok(["data/lessons.js", "data/curriculum.js"].includes(resolved.source), `${anchor} names an unknown source file`);
  }
});

test("anchors are unique, so two different strings can never share an address", () => {
  const seen = new Set();
  for (const anchor of anchors) {
    assert.ok(!seen.has(anchor), `duplicate anchor ${anchor}`);
    seen.add(anchor);
  }
});

test("every lesson string a reviewer can see has an anchor", () => {
  for (const lesson of content.lessons) {
    for (const direction of review.DIRECTIONS) {
      const side = schema.normalizeContent(lesson[direction]);
      const base = `lesson:${lesson.id}/${direction}`;
      const mine = new Set(anchors.filter((anchor) => anchor.startsWith(`${base}/`)));
      const expect = (suffix) => assert.ok(mine.has(`${base}/${suffix}`), `${lesson.id}.${direction}: nothing addresses ${suffix}`);

      for (const field of ["title", "situation", "note", "prompt"]) expect(field);
      for (const key of schema.SETTING_KEYS) expect(`setting/${key}`);
      for (const slot of schema.ADDRESS_SLOTS) expect(`address/${slot}`);
      side.dialogue.forEach((_, index) => {
        for (const slot of ["speaker", "target", "translation", "pronunciation"]) expect(`dialogue/${index}/${slot}`);
      });
      side.vocabulary.forEach((_, index) => expect(`vocabulary/${index}/term`));
      side.culture.forEach((_, index) => expect(`culture/${index}/body`));
      side.pitfalls.forEach((_, index) => expect(`pitfalls/${index}/sayInstead`));
      side.variations.forEach((_, index) => expect(`variations/${index}/form`));
      side.choices.forEach((_, index) => expect(`choices/${index}`));
      side.practice.slice(1).forEach((question, offset) => {
        expect(`practice/${offset + 1}/prompt`);
        question.choices.forEach((_, index) => expect(`practice/${offset + 1}/choices/${index}`));
      });
    }
  }
});

test("malformed anchors are rejected rather than silently resolving", () => {
  const bad = [
    "", "lesson", "lesson:", "nonsense:greeting-at-the-cafe/es/note",
    "lesson:greeting-at-the-cafe/fr/note",
    "lesson:greeting-at-the-cafe/es/dialogue/one/target",
    "lesson:greeting-at-the-cafe/es/dialogue/0/shouting",
    "lesson:greeting-at-the-cafe/es/title/extra",
    "verb:verb-1/unknownslot",
    "fluency:notanumber/note"
  ];
  for (const anchor of bad) {
    assert.strictEqual(review.parseAnchor(anchor), null, `expected "${anchor}" to be rejected`);
    assert.strictEqual(review.resolveAnchor(anchor, content).ok, false, `expected "${anchor}" not to resolve`);
  }
});

test("anchors that are valid but point at content that no longer exists fail cleanly", () => {
  for (const anchor of ["lesson:not-a-lesson/es/note", "lesson:greeting-at-the-cafe/es/dialogue/99/target", "verb:verb-9999/regionality", "mature:99/note"]) {
    const resolved = review.resolveAnchor(anchor, content);
    assert.strictEqual(resolved.ok, false, `expected "${anchor}" to fail`);
    assert.ok(isText(resolved.reason), `expected a reason for "${anchor}"`);
  }
});

test("group anchors expand to leaves and are never storable as flags themselves", () => {
  const groups = [
    "lesson:greeting-at-the-cafe/es/heading",
    "lesson:greeting-at-the-cafe/es/dialogue/0",
    "lesson:greeting-at-the-cafe/es/vocabulary/0",
    "lesson:greeting-at-the-cafe/es/choices",
    "verb:verb-1",
    "fluency:0",
    "mature:0"
  ];
  for (const group of groups) {
    assert.ok(review.isGroupAnchor(group), `${group} should be a group`);
    assert.strictEqual(review.resolveAnchor(group, content).ok, false, `${group} should not resolve to one string`);
    const parts = review.partsForAnchor(group, content);
    assert.ok(parts.length > 0, `${group} expanded to nothing`);
    for (const part of parts) {
      assert.ok(part.ok && isText(part.text), `${group} produced an unusable part`);
      assert.ok(isText(part.slotLabel), `${part.anchor} has no slot label`);
      assert.strictEqual(review.groupAnchor(part.anchor), group, `${part.anchor} should belong to ${group}`);
    }
    assert.deepStrictEqual(
      review.validateFlag(sampleFlag({ anchor: group })),
      ["anchor must point at one string, not a group"]
    );
  }
});

test("a leaf anchor is its own part, so single-string elements still open the dialog", () => {
  for (const anchor of ["lesson:greeting-at-the-cafe/es/note", "lesson:greeting-at-the-cafe/es/prompt"]) {
    const parts = review.partsForAnchor(anchor, content);
    assert.strictEqual(parts.length, 1);
    assert.strictEqual(parts[0].anchor, anchor);
  }
});

test("every leaf anchor maps to a group the page actually renders", () => {
  const rendered = new Set();
  for (const lesson of content.lessons) {
    for (const direction of review.DIRECTIONS) {
      const base = `lesson:${lesson.id}/${direction}`;
      const side = schema.normalizeContent(lesson[direction]);
      rendered.add(`${base}/heading`).add(`${base}/note`).add(`${base}/prompt`).add(`${base}/choices`);
      rendered.add(`${base}/level`);
      rendered.add(`${base}/setting`).add(`${base}/address`);
      for (const field of ["dialogue", "vocabulary", "culture", "pitfalls", "variations"]) {
        side[field].forEach((_, index) => rendered.add(`${base}/${field}/${index}`));
      }
      side.practice.slice(1).forEach((_, offset) => {
        rendered.add(`${base}/practice/${offset + 1}/prompt`).add(`${base}/practice/${offset + 1}/choices`);
      });
    }
  }
  for (const verb of content.curriculum) rendered.add(`verb:${verb.id}`);
  content.fluencyItems.forEach((_, index) => rendered.add(`fluency:${index}`));
  content.matureItems.forEach((_, index) => rendered.add(`mature:${index}`));

  for (const anchor of anchors) {
    const group = review.groupAnchor(anchor);
    assert.ok(rendered.has(group), `${anchor} belongs to ${group}, which nothing renders`);
  }
});

test("a missing slot is reported as missing, never as empty text", () => {
  /*
   * The dangerous answer here is not a throw, it is `ok: true` with
   * `text: undefined`. Every caller trusts `ok`, so partsForAnchor silently
   * drops the entry and the report picker just thins out with nothing logged —
   * the reviewer sees fewer options and no reason why.
   *
   * The lesson branch guarded this and the reference-list branch did not, which
   * is exactly the kind of gap that survives review, so this asserts the
   * invariant across every branch of the resolver rather than the one that was
   * wrong. Rows in data/curriculum.js are still tuples, and a short tuple
   * yields undefined rather than throwing.
   */
  const gutted = JSON.parse(JSON.stringify(content));
  delete gutted.lessons[0].es.dialogue[1].target;
  gutted.fluencyItems[0] = gutted.fluencyItems[0].slice(0, 2);
  gutted.matureItems[0] = gutted.matureItems[0].slice(0, 2);
  const verbSlot = Object.keys(gutted.curriculum[0])
    .find((key) => key !== "id" && typeof gutted.curriculum[0][key] === "string");
  delete gutted.curriculum[0][verbSlot];

  const probes = [
    `lesson:${gutted.lessons[0].id}/es/dialogue/1/target`,
    "fluency:0/note",
    "mature:0/note",
    `verb:${gutted.curriculum[0].id}/${verbSlot}`,
  ];
  for (const anchor of probes) {
    const resolved = review.resolveAnchor(anchor, gutted);
    assert.strictEqual(resolved.ok, false, `${anchor} resolved ok with nothing behind it`);
    assert.ok(isText(resolved.reason), `${anchor} must say why it could not resolve`);
    assert.ok(!("text" in resolved) || resolved.text === undefined,
      `${anchor} must not hand back text it does not have`);
  }
});

test("the quoted original is tagged with the language it is written in", () => {
  const spanish = review.resolveAnchor("lesson:greeting-at-the-cafe/es/dialogue/0/target", content);
  const english = review.resolveAnchor("lesson:greeting-at-the-cafe/es/dialogue/0/translation", content);
  assert.strictEqual(spanish.lang, "es");
  assert.strictEqual(english.lang, "en");
  const flipped = review.resolveAnchor("lesson:greeting-at-the-cafe/en/dialogue/0/target", content);
  assert.strictEqual(flipped.lang, "en", "in the English direction the target line is English");
  assert.strictEqual(review.resolveAnchor("verb:verb-1/spanish", content).lang, "es");
  assert.strictEqual(review.resolveAnchor("verb:verb-1/english", content).lang, "en");
});

test("flags are validated before they can be saved or submitted", () => {
  assert.deepStrictEqual(review.validateFlag(sampleFlag()), []);
  assert.ok(review.validateFlag(sampleFlag({ anchor: "nope" })).includes("anchor is missing or malformed"));
  assert.ok(review.validateFlag(sampleFlag({ issueType: "invented" })).length > 0);
  assert.ok(review.validateFlag(sampleFlag({ severity: "catastrophic" })).length > 0);
  assert.ok(review.validateFlag(sampleFlag({ role: "tourist" })).length > 0);
  assert.ok(review.validateFlag(sampleFlag({ original: "" })).includes("original text is missing"));
  assert.deepStrictEqual(
    review.validateFlag(sampleFlag({ suggestion: "", comment: "" })),
    ["give a suggested wording, an explanation, or both"],
    "a flag with neither a fix nor a reason is not actionable"
  );
  assert.deepStrictEqual(review.validateFlag(sampleFlag({ suggestion: "", comment: "sounds odd" })), []);
  assert.deepStrictEqual(review.validateFlag(null), ["a flag must be an object"]);
});

test("the payload survives the round trip through a GitHub issue body", () => {
  const flags = [sampleFlag(), sampleFlag({ anchor: "verb:verb-1/regionality", issueType: "other", original: content.curriculum[0].regionality })];
  const payload = review.buildPayload(flags, {});
  const body = `${review.issueBody(flags, content)}\n\n${review.payloadBlock(payload)}`;
  const recovered = review.extractPayload(body);
  assert.ok(recovered, "payload could not be recovered from the issue body");
  assert.strictEqual(recovered.schema, review.SCHEMA_VERSION);
  assert.strictEqual(recovered.flags.length, 2);
  assert.deepStrictEqual(recovered.flags.map((flag) => flag.anchor), flags.map((flag) => flag.anchor));
  assert.strictEqual(review.extractPayload(JSON.stringify(payload)).flags.length, 2, "raw JSON should parse too");
  assert.strictEqual(review.extractPayload("no payload here"), null);
});

test("submitting builds a prefilled issue against the flag template", () => {
  const { url, tooLong } = review.buildIssueUrl([sampleFlag()], content);
  assert.ok(url.startsWith(`${review.REPO_URL}/issues/new?`), "should target the repo's new-issue form");
  assert.ok(url.includes(`template=${encodeURIComponent(review.ISSUE_TEMPLATE)}`), "should name the content-flag template");
  assert.ok(url.includes("payload="), "should carry the machine-readable payload");
  assert.strictEqual(tooLong, false, "a single flag should fit comfortably in a URL");
  assert.ok(review.blankIssueUrl().includes(review.ISSUE_TEMPLATE));
});

test("an oversized batch is reported as too long instead of building a broken link", () => {
  const many = Array.from({ length: 60 }, () => sampleFlag({ comment: "x".repeat(200) }));
  assert.strictEqual(review.buildIssueUrl(many, content).tooLong, true);
});

test("the issue body names the place a maintainer has to edit", () => {
  const markdown = review.flagsToMarkdown([sampleFlag()], content);
  assert.match(markdown, /Coffee and a quick chat|Un café y una conversación/);
  assert.match(markdown, /Dialogue line 2/);
  assert.match(markdown, /lesson:greeting-at-the-cafe\/es\/dialogue\/1\/target/);
  assert.strictEqual(review.flagsToMarkdown([], content), "_No flags._");
});

test("every element review-ui.js looks up exists in index.html", () => {
  const ui = read("review-ui.js");
  const html = read("index.html");
  const ids = new Set([...ui.matchAll(/\$\("#([\w-]+)"\)/g)].map((match) => match[1]));
  assert.ok(ids.size > 10, "expected review-ui.js to query elements by id");
  for (const id of ids) {
    assert.ok(html.includes(`id="${id}"`), `index.html is missing #${id}, which review-ui.js expects`);
  }
});

test("index.html loads the review scripts after the data and the app", () => {
  const html = read("index.html");
  for (const file of ["data/lessons.js", "data/curriculum.js", "app.js", "review.js", "review-ui.js"]) {
    assert.ok(html.includes(`src="${file}"`), `index.html does not load ${file}`);
  }
  assert.ok(html.indexOf('src="review.js"') > html.indexOf('src="app.js"'), "review.js must load after app.js");
  assert.ok(html.indexOf('src="review-ui.js"') > html.indexOf('src="review.js"'), "review-ui.js depends on review.js");
});

test("app.js tags every reviewable block with an anchor", () => {
  const app = read("app.js");
  const fragments = [
    'anchorFor(`setting/${key}`)', 'anchorFor("address/who")',
    'anchorFor(`dialogue/${index}`)', 'anchorFor(`vocabulary/${index}`)',
    'anchorFor(`culture/${index}`)', 'anchorFor(`pitfalls/${index}`)', 'anchorFor(`variations/${index}`)',
    'anchorFor("heading")', 'anchorFor("note")',
    'data-anchor="verb:${verb.id}"', 'data-anchor="fluency:${index}"', 'data-anchor="mature:${index}"'
  ];
  for (const fragment of fragments) {
    assert.ok(app.includes(fragment), `app.js no longer emits a data-anchor for ${fragment}`);
  }
  assert.match(app, /practiceAnchor|anchorFor\(`practice\//, "practice questions must stay addressable");
});

test("the flag dialog offers a problem type, a severity and a reviewer role", () => {
  for (const list of [review.ISSUE_TYPES, review.SEVERITIES, review.REVIEWER_ROLES]) {
    assert.ok(list.length >= 3);
    for (const [code, label] of list) {
      assert.match(code, /^[a-z0-9-]+$/, `"${code}" must be a stable machine-readable code`);
      assert.ok(isText(label));
    }
  }
  assert.ok(review.REVIEWER_ROLES.some(([code]) => code === "native-es-co"), "a Colombian native speaker must be selectable");
  assert.strictEqual(review.labelOf(review.SEVERITIES, "blocker"), "Blocker — do not publish as written");
});

/* ---------- maintainer CLI ---------- */

function runCli(payload, extraArgs) {
  const file = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "parcero-flags-")), "flags.json");
  fs.writeFileSync(file, JSON.stringify(payload, null, 2));
  try {
    const stdout = execFileSync(process.execPath, [path.join(root, "scripts", "review-flags.js"), file, ...(extraArgs || [])], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    return { status: 0, stdout };
  } catch (error) {
    return { status: error.status, stdout: `${error.stdout || ""}${error.stderr || ""}` };
  } finally {
    fs.rmSync(path.dirname(file), { recursive: true, force: true });
  }
}

test("the triage CLI points a maintainer at the exact field to revise", () => {
  const { status, stdout } = runCli(review.buildPayload([sampleFlag()], {}));
  assert.strictEqual(status, 0, stdout);
  assert.match(stdout, /1 ready, 0 drifted, 0 unresolved/);
  assert.match(stdout, /data\/lessons\.js/);
  assert.match(stdout, /lessons\[0\]\.es\.dialogue\[1\]\.target/);
  assert.match(stdout, /¿Me das un tinto\?/);
});

test("the triage CLI flags text that changed after it was reviewed", () => {
  const stale = sampleFlag({ original: "Something nobody wrote in this lesson" });
  const { status, stdout } = runCli(review.buildPayload([stale], {}));
  assert.strictEqual(status, 0, "drift needs a human, but it is not a failure");
  assert.match(stdout, /0 ready, 1 drifted, 0 unresolved/);
  assert.match(stdout, /DRIFTED/);
});

test("the triage CLI exits non-zero when a flag can no longer be located", () => {
  const orphan = sampleFlag({ anchor: "lesson:deleted-lesson/es/note" });
  const { status, stdout } = runCli(review.buildPayload([orphan], {}));
  assert.strictEqual(status, 1);
  assert.match(stdout, /UNRESOLVED/);
  assert.match(stdout, /no lesson with id "deleted-lesson"/);
});

test("the triage CLI can emit a Markdown table to paste back into the issue", () => {
  const { status, stdout } = runCli(review.buildPayload([sampleFlag()], {}), ["--format", "markdown"]);
  assert.strictEqual(status, 0, stdout);
  assert.match(stdout, /\| # \| Severity \| Where \| Edit \| Suggested \| Status \|/);
  assert.match(stdout, /Ready to apply/);
});

/* ---------- regressions found by driving the page in a real browser ---------- */

test("a display rule can never leave a hidden element on screen", () => {
  const css = read("styles.css");
  assert.match(
    css,
    /\[hidden\]\s*\{[^}]*display:\s*none\s*!important/,
    "styles.css must reset [hidden]: a class with its own display: outranks the attribute, "
    + "so review mode and the mature-content gate would leak into view"
  );

  // Prove the reset is load-bearing rather than decorative.
  const html = read("index.html");
  const leaky = [...html.matchAll(/<[a-z][^>]*>/gi)]
    .map((match) => match[0])
    .filter((tag) => /\shidden(\s|>|=)/.test(tag))
    .flatMap((tag) => {
      const classes = tag.match(/class="([^"]+)"/);
      return classes ? classes[1].split(/\s+/) : [];
    })
    .filter((name) => new RegExp(`\\.${name}\\s*(,[^{]*)?\\{[^}]*display:`, "m").test(css));

  assert.ok(
    leaky.length > 0,
    "expected at least one hidden element whose class sets display:, which is what the reset protects"
  );
});

test("every pluralised string has both of its forms", () => {
  const source = read("review-ui.js");
  const keys = [...source.matchAll(/\btp\(\s*"([^"]+)"/g)].map((match) => match[1]);
  assert.ok(keys.length > 0, "expected review-ui.js to pluralise something");
  for (const key of new Set(keys)) {
    for (const form of ["one", "other"]) {
      assert.ok(
        source.includes(`"${key}.${form}"`),
        `tp("${key}") falls back to the raw key unless "${key}.${form}" is in the English table`
      );
    }
  }
});

test("the part picker offers the taught line before the speaker's name", () => {
  const parts = review.partsForAnchor("lesson:greeting-at-the-cafe/es/dialogue/1", content);
  assert.ok(parts.length > 1, "a dialogue line should expand into several parts");
  assert.match(parts[0].anchor, /\/target$/, "flagging a line means the line, not the character name");
  assert.match(parts[parts.length - 1].anchor, /\/speaker$/);
});

test("the display order of dialogue parts never changes what an anchor resolves to", () => {
  const lesson = content.lessons.find((item) => item.id === "greeting-at-the-cafe");
  const row = lesson.es.dialogue[1];
  for (const slot of review.DIALOGUE_SLOTS) {
    const resolved = review.resolveAnchor(`lesson:greeting-at-the-cafe/es/dialogue/1/${slot}`, content);
    const stored = schema.slotValue(row, review.DIALOGUE_SLOTS, slot);
    if (!isText(stored)) continue;
    assert.strictEqual(resolved.text, stored, `${slot} must keep resolving to the "${slot}" value, whatever order it is displayed in`);
  }
});

/*
 * Legacy lessons stored a dialogue line as a bare tuple. Anchors are resolved by
 * slot name now, but a tuple still has to land on the same text it always did,
 * or every anchor recorded before the schema change would silently shift.
 */
test("anchors still resolve against a legacy tuple lesson", () => {
  const legacy = {
    lessons: [{
      id: "legacy", level: "A1",
      es: {
        title: "T", situation: "S", note: "N", prompt: "P", choices: ["a", "b"], answer: 1,
        dialogue: [["Ana", "Buenas", "Morning", "BWEH-nas"]],
        vocabulary: [["parce", "friend"]]
      }
    }],
    curriculum: [], fluencyItems: [], matureItems: []
  };
  assert.strictEqual(review.resolveAnchor("lesson:legacy/es/dialogue/0/speaker", legacy).text, "Ana");
  assert.strictEqual(review.resolveAnchor("lesson:legacy/es/dialogue/0/target", legacy).text, "Buenas");
  assert.strictEqual(review.resolveAnchor("lesson:legacy/es/dialogue/0/pronunciation", legacy).text, "BWEH-nas");
  assert.strictEqual(review.resolveAnchor("lesson:legacy/es/vocabulary/0/explanation", legacy).text, "friend");
  assert.match(review.resolveAnchor("lesson:legacy/es/dialogue/0/target", legacy).path, /dialogue\[0\]\[1\]$/,
    "a tuple lesson must still be described to the maintainer by tuple position");
  assert.strictEqual(review.resolveAnchor("lesson:legacy/es/dialogue/0/why", legacy).ok, false,
    "a slot the legacy row never had must not resolve to something else");
});

test("the triage CLI reads an issue body piped in as -", () => {
  const body = `Reported from the page\n\n${review.payloadBlock(review.buildPayload([sampleFlag()], {}))}`;
  const result = execFileSync(process.execPath, [path.join(root, "scripts", "review-flags.js"), "-"], {
    input: body, encoding: "utf8", cwd: root
  });
  assert.match(result, /1 ready, 0 drifted, 0 unresolved/);
});

test("the triage CLI explains a missing file instead of crashing", () => {
  let status = 0;
  let stderr = "";
  try {
    execFileSync(process.execPath, [path.join(root, "scripts", "review-flags.js"), "no-such-file.json"], {
      encoding: "utf8", cwd: root, stdio: ["pipe", "pipe", "pipe"]
    });
  } catch (error) {
    status = error.status;
    stderr = error.stderr || "";
  }
  assert.strictEqual(status, 2);
  assert.match(stderr, /No such file: no-such-file\.json/);
  assert.doesNotMatch(stderr, /ENOENT|at Object\./, "a maintainer should not see a Node stack trace");
});

/* ---------- region codes ---------- */

test("region suggestions carry codes the translation table can key off", () => {
  for (const entry of review.REGION_SUGGESTIONS) {
    assert.ok(Array.isArray(entry) && entry.length === 2, `expected a [code, label] pair, got ${JSON.stringify(entry)}`);
    const [code, label] = entry;
    assert.match(code, /^[\w-]+$/, `region code ${code} must be word characters and hyphens only`);
    assert.strictEqual(code, code.toLowerCase(), `region code ${code} must be lowercase`);
    assert.ok(isText(label), `region ${code} needs a label`);
    assert.strictEqual(review.labelKey("region", code), `review.region.${code}`);
  }
  const codes = review.REGION_SUGGESTIONS.map(([code]) => code);
  assert.strictEqual(new Set(codes).size, codes.length, "region codes must be unique");
  assert.ok(codes.includes("co-general"), "the catch-all region needs a stable code, not an empty value");
});

test("a reviewer's own words survive canonicalisation", () => {
  const flag = sampleFlag({ region: "Barranquilla, mi barrio", regionCode: "" });
  const [filed] = review.buildPayload([flag], {}).flags;
  assert.strictEqual(filed.region, "Barranquilla, mi barrio", "free text must be filed verbatim");
  assert.strictEqual(filed.regionCode, "", "unrecognised text must not be forced into a code");
  assert.strictEqual(review.regionCodeFor("Barranquilla, mi barrio"), "");
});

test("region matching forgives case, spacing and missing accents", () => {
  assert.strictEqual(review.regionCodeFor("Medellín and Antioquia (paisa)"), "antioquia");
  assert.strictEqual(review.regionCodeFor("medellin and antioquia (paisa)"), "antioquia");
  assert.strictEqual(review.regionCodeFor("  Medellin   and Antioquia (paisa)  "), "antioquia");
  assert.strictEqual(review.regionCodeFor("Bogota (rolo / cachaco)"), "bogota");
  assert.strictEqual(review.regionCodeFor(""), "");
  assert.strictEqual(review.regionCodeFor(undefined), "");
});

test("a translated region label still resolves to the same code", () => {
  const spanish = { caribe: "Costa Caribe (costeño)", "co-general": "Colombiano, sin región particular" };
  assert.strictEqual(review.regionCodeFor("Costa Caribe (costeño)", spanish), "caribe");
  assert.strictEqual(review.regionCodeFor("costa caribe (costeno)", spanish), "caribe");
  assert.strictEqual(review.regionCodeFor("Colombiano, sin region particular", spanish), "co-general");
  assert.strictEqual(review.regionCodeFor("Caribbean coast (costeño)", spanish), "caribe",
    "English must keep resolving even when a translation is supplied");
});

test("the reviewer line in triage output stays human text, never a code", () => {
  const flag = sampleFlag({ region: "Medellín and Antioquia (paisa)", regionCode: "antioquia" });
  const markdown = review.flagsToMarkdown([flag], content);
  assert.match(markdown, /Medellín and Antioquia \(paisa\)/, "the reviewer's words belong in the output");
  assert.doesNotMatch(markdown, /\bantioquia\b/, "the machine code must not leak into the display path");
});

test("an unknown region code is rejected but a blank one is fine", () => {
  assert.deepStrictEqual(review.validateFlag(sampleFlag({ regionCode: "" })), []);
  assert.deepStrictEqual(review.validateFlag(sampleFlag({ regionCode: undefined })), []);
  const errors = review.validateFlag(sampleFlag({ regionCode: "atlantis" }));
  assert.ok(errors.some((message) => /regionCode/.test(message)), `expected a regionCode error, got ${JSON.stringify(errors)}`);
});

test("adding regionCode did not break payloads filed before it existed", () => {
  const old = sampleFlag({});
  delete old.regionCode;
  const [filed] = review.buildPayload([old], {}).flags;
  assert.strictEqual(filed.regionCode, "", "a missing regionCode must read as empty, not undefined");
  assert.strictEqual(filed.region, old.region);
  assert.deepStrictEqual(review.validateFlag(old), [], "an old flag must still validate");
});

test("every authored string in a lesson is offered by the report picker", () => {
  /*
   * Coverage, not mechanism. The test above asks "does every anchor resolve to
   * text?" and passes at 5022/5022 — but that is the wrong direction. It stays
   * green no matter how much unreachable content is added, because content the
   * resolver was never told about produces no anchor to check.
   *
   * This asks the converse, which is the question that fails when someone ADDS
   * content, and that is when under-coverage is actually born. It caught 661
   * strings the enrichment had made unreportable: every vocabulary example
   * sentence, every related expression, every "what this question tests" note,
   * and the level line on every lesson — the most opinionated Colombian-usage
   * prose in the repo, rendered on the page, with no way for a native speaker
   * to say "we don't say it like that".
   *
   * It walks the picker, not listAnchors. The first version of this test read
   * listAnchors directly, passed, and was wrong: partsForAnchor kept its own
   * separate leaf list, so all 661 strings resolved fine and still never
   * appeared in the picker. Checking the mechanism I had just fixed rather
   * than the path a reviewer actually clicks is the same mistake one level up.
   *
   * The exclusions below are the whole design. They name what is NOT prose, so
   * a newly authored field is covered by default and has to be argued out of
   * this list rather than into it. A list of what IS covered would have passed
   * silently through the same 661.
   */
  const notProse = {
    id: "an identifier, never shown to a reader",
    review: 'a state key recording whether a lesson has been signed off; no script renders it, and the words on the lesson banner come from i18n',
    domain: "authored metadata no script reads; grep for `.domain` across all four scripts returns nothing, so it reaches no page",
    skills: "authored metadata no script reads; same check as domain",
    pathways: "authored metadata no script reads; same check as domain",
    answer: "an index into choices, not text",
    "address.form": 'an enum ("usted"/"tú"/"vos"); the page renders t("address.form.*") from i18n.js, so the visible string is the translator\'s, not the author\'s'
  };

  // Exactly what review-ui.js does: group the anchors, then ask for each group's parts.
  const groups = [...new Set(anchors.map((anchor) => review.groupAnchor(anchor) || anchor))];
  const reachable = new Set();
  for (const group of groups) {
    for (const part of review.partsForAnchor(group, content)) {
      if (isText(part.text)) reachable.add(part.text.trim());
    }
  }

  const missed = [];
  const walk = (node, trail) => {
    if (isText(node)) {
      if (!reachable.has(node.trim())) missed.push(`${trail}: ${JSON.stringify(node.slice(0, 60))}`);
      return;
    }
    if (Array.isArray(node)) return node.forEach((item, index) => walk(item, `${trail}[${index}]`));
    if (!node || typeof node !== "object") return;
    for (const [key, value] of Object.entries(node)) {
      const next = trail ? `${trail}.${key}` : key;
      const family = next.replace(/\[\d+\]/g, "").split(".").slice(-2).join(".");
      if (notProse[key] || notProse[family]) continue;
      walk(value, next);
    }
  };

  for (const lesson of content.lessons) walk(lesson, lesson.id);

  assert.deepStrictEqual(missed, [],
    `${missed.length} authored string(s) are rendered but never offered by the report picker.\n` +
    `Add them to listAnchors in review.js, or, if they are not prose, to notProse above with a reason.\n` +
    missed.slice(0, 12).join("\n"));
});

/*
 * A flag raised from the page always carries a regionCode, because the page
 * canonicalises the region as it files. A flag raised through the GitHub issue
 * form does not — that form has no JavaScript, so the region arrives as whatever
 * the reviewer typed. The CLI has to canonicalise those itself, in either
 * language, or a Colombian who writes their own region in Spanish drops out of
 * the tally that exists specifically to count them.
 */
test("the triage CLI groups a region typed in Spanish with the same one typed in English", () => {
  const flags = [
    sampleFlag({ region: "Costa Caribe (costeño)" }),
    sampleFlag({ region: "Caribbean coast (costeño)" }),
    sampleFlag({ region: "costa caribe (costeno)" })
  ];
  flags.forEach((flag) => delete flag.regionCode);
  const { status, stdout } = runCli(review.buildPayload(flags, {}));
  assert.strictEqual(status, 0, stdout);
  const tally = stdout.slice(stdout.indexOf("Where reviewers spoke from"));
  assert.match(tally, /3\s+Caribbean coast \(costeño\)/,
    `all three spellings must land in one bucket, got:\n${tally}`);
});

test("the triage CLI still keeps unrecognised regions as the reviewer's own words", () => {
  const flag = sampleFlag({ region: "Leticia, Amazonas" });
  delete flag.regionCode;
  const { stdout } = runCli(review.buildPayload([flag], {}));
  const tally = stdout.slice(stdout.indexOf("Where reviewers spoke from"));
  assert.match(tally, /1\s+Leticia, Amazonas/, "an open-vocabulary answer must never be discarded");
});

test("a regionCode already on the flag wins over re-matching the free text", () => {
  const flag = sampleFlag({ region: "wherever I happen to live", regionCode: "narino" });
  const { stdout } = runCli(review.buildPayload([flag], {}));
  const tally = stdout.slice(stdout.indexOf("Where reviewers spoke from"));
  assert.match(tally, new RegExp(`1\\s+${review.labelOf(review.REGION_SUGGESTIONS, "narino").replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`),
    "the filed code is authoritative; free text is only a fallback");
});
