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
      for (const key of schema.SETTING_KEYS) rendered.add(`${base}/setting/${key}`);
      for (const slot of schema.ADDRESS_SLOTS) rendered.add(`${base}/address/${slot}`);
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
