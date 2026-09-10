/*
 * The triage workflow decides which label to apply purely from the exit code of
 * scripts/review-flags.js. Nothing else connects the two files, so if the script
 * starts returning a different code the workflow keeps labelling confidently and
 * wrongly. These tests pin that contract from both ends.
 */
const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const vm = require("node:vm");
const { execFileSync } = require("node:child_process");

const review = require("../review.js");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const { dataSource } = require("./data-source.js");
const workflow = read(path.join(".github", "workflows", "flag-triage.yml")).replace(/\r\n/g, "\n");

const bundle = `${dataSource({ schema: false })}\n({ lessons, curriculum, fluencyItems, matureItems });`;
const content = vm.runInNewContext(bundle, {}, { filename: "parcero-data-bundle.js" });

function flagFor(anchor) {
  const resolved = review.resolveAnchor(anchor, content);
  return {
    anchor,
    issueType: "not-natural",
    severity: "should-fix",
    role: "native-es-co",
    region: "Medellín and Antioquia (paisa)",
    regionCode: "antioquia",
    original: resolved.ok ? resolved.text : "something that is no longer there",
    suggestion: "quiubo parcero",
    comment: "we would not say it that way"
  };
}

/* Run the CLI the way the workflow does: an issue body on disk, markdown out. */
function triage(body) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "parcero-triage-"));
  const file = path.join(dir, "issue-body.md");
  fs.writeFileSync(file, body);
  try {
    const stdout = execFileSync(process.execPath, [path.join(root, "scripts", "review-flags.js"), file, "--format", "markdown"], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    return { status: 0, output: stdout };
  } catch (error) {
    return { status: error.status, output: `${error.stdout || ""}${error.stderr || ""}` };
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

const issueBodyWith = (flags) => [
  "**Where:** raised from the page",
  "",
  "```json",
  JSON.stringify(review.buildPayload(flags, {}), null, 2),
  "```",
  ""
].join("\n");

test("a flag whose text still matches exits 0, so the workflow marks it ready", () => {
  const { status, output } = triage(issueBodyWith([flagFor("lesson:greeting-at-the-cafe/es/dialogue/1/target")]));
  assert.strictEqual(status, 0, output);
  assert.match(output, /1 ready, 0 drifted, 0 unresolved/);
  assert.match(output, /data\/lessons\.js/);
});

test("a flag pointing at content that no longer exists exits 1, so the workflow asks for a human", () => {
  const { status, output } = triage(issueBodyWith([flagFor("lesson:no-such-lesson/es/title")]));
  assert.strictEqual(status, 1, output);
  assert.match(output, /1 unresolved/);
});

test("an issue written by hand exits 2, so the workflow does not pretend to have triaged it", () => {
  const { status, output } = triage("The coffee line sounds off to me but I am typing this myself.\n");
  assert.strictEqual(status, 2, output);
  assert.match(output, /No flag payload found/);
});

test("the workflow handles every exit code the CLI can return", () => {
  // A code the workflow does not branch on would be silently mislabelled.
  for (const code of [0, 1, 2]) {
    assert.match(workflow, new RegExp(`^\\s*${code}:\\s*\\{`, "m"), `workflow has no branch for exit code ${code}`);
  }
  assert.match(workflow, /\|\| \{/, "workflow has no fallback for an unexpected exit code");
});

test("the workflow runs the script this test pins, and reads its exit code", () => {
  assert.match(workflow, /node scripts\/review-flags\.js issue-body\.md --format markdown/);
  assert.match(workflow, /echo "status=\$\?" >> "\$GITHUB_OUTPUT"/);
  assert.ok(fs.existsSync(path.join(root, "scripts", "review-flags.js")));
});

test("the issue body reaches the shell through the environment, never through interpolation", () => {
  // An issue body is attacker-controlled. Interpolating it into a run: block is
  // command injection; the only safe route is an env var read as "$EVENT_BODY".
  assert.doesNotMatch(workflow, /\$\{\{\s*github\.event\.issue\.body\s*\}\}[^\n]*\|/, "issue body piped inside a run: step");
  const runSteps = workflow.split(/\n\s*- /).filter((step) => /\n\s*run:/.test(step));
  for (const step of runSteps) {
    const script = step.slice(step.indexOf("run:"));
    assert.doesNotMatch(script, /\$\{\{\s*github\.event\.issue\.body/, "issue body interpolated directly into a shell script");
  }
  assert.match(workflow, /EVENT_BODY:\s*\$\{\{\s*github\.event\.issue\.body\s*\}\}/);
  assert.match(workflow, /printf '%s' "\$EVENT_BODY"/);
});

test("the workflow asks for no more permission than it needs", () => {
  const block = workflow.slice(workflow.indexOf("permissions:"));
  assert.match(block, /contents:\s*read/);
  assert.match(block, /issues:\s*write/);
  assert.doesNotMatch(block, /pull-requests:\s*write/);
  assert.doesNotMatch(workflow, /pull_request_target/);
});

test("only flags raised from the page are triaged", () => {
  assert.match(workflow, /native-speaker-flag/);
  const template = read(path.join(".github", "ISSUE_TEMPLATE", "content-flag.yml"));
  assert.match(template, /native-speaker-flag/, "the form must apply the label the workflow filters on");
});
