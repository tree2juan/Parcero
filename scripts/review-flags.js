#!/usr/bin/env node
/*
 * Triage native-speaker flags.
 *
 * Reads the machine-readable block a reviewer submits (from a downloaded JSON
 * file, a pasted issue body, or piped stdin), resolves every flagged anchor
 * against the content as it stands right now, and prints exactly which file and
 * which field to revise.
 *
 * The part that earns its keep is drift detection: a flag filed in March may
 * describe a line that was already rewritten in April. Applying it blind would
 * undo the newer edit, so anything whose text has moved is reported separately
 * and never presented as ready to apply.
 *
 *   node scripts/review-flags.js flags.json
 *   node scripts/review-flags.js issue-body.md --format markdown
 *   gh issue view 12 --json body -q .body | node scripts/review-flags.js
 *
 * Exit code is 1 if any flag cannot be resolved, so CI or a maintainer script
 * can tell "needs a human" from "ready to edit".
 */
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const review = require("../review.js");
const i18n = require("../i18n.js");
const { dataSource } = require("../test/data-source.js");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

function loadContent() {
  const bundle = `${dataSource({ schema: false })}\n({ lessons, curriculum, fluencyItems, matureItems });`;
  return vm.runInNewContext(bundle, {}, { filename: "parcero-data-bundle.js" });
}

function usage() {
  console.log(`Triage native-speaker content flags.

  node scripts/review-flags.js <file>          A downloaded .json, or an issue body
  node scripts/review-flags.js <file> --format markdown
  <something> | node scripts/review-flags.js   Read from stdin
  <something> | node scripts/review-flags.js - Read from stdin, explicitly

Options
  --format text|markdown   Output style (default: text)
  --help                   This message

Exits 1 if any flag cannot be resolved against the current content.`);
}

function readInput(file) {
  if (file && file !== "-") {
    if (!fs.existsSync(file)) {
      console.error(`No such file: ${file}`);
      return null;
    }
    try {
      return fs.readFileSync(file, "utf8");
    } catch (error) {
      console.error(`Could not read ${file}: ${error.message}`);
      return null;
    }
  }
  if (file !== "-" && process.stdin.isTTY) return undefined;
  try {
    return fs.readFileSync(0, "utf8");
  } catch {
    console.error("Nothing arrived on stdin.");
    return null;
  }
}

const oneLine = (value) => String(value == null ? "" : value).replace(/\s*\r?\n\s*/g, " ").trim();

function classify(flag, content) {
  const resolved = review.resolveAnchor(flag.anchor, content);
  if (!resolved.ok) return { status: "unresolved", flag, resolved };
  if (resolved.text !== flag.original) return { status: "drifted", flag, resolved };
  return { status: "ready", flag, resolved };
}

const severityRank = (flag) => review.SEVERITIES.findIndex(([code]) => code === flag.severity);
const shortSeverity = (flag) => review.labelOf(review.SEVERITIES, flag.severity).split(" — ")[0];
const who = (flag) => [review.labelOf(review.REVIEWER_ROLES, flag.role), flag.region]
  .filter((part) => part && String(part).trim())
  .join(" · ");

/*
 * Region labels for every interface language, keyed by code.
 *
 * The page canonicalises a region as it is filed, so a flag raised from the site
 * always arrives with a regionCode. A flag raised through the GitHub issue form
 * does not: that is a plain text field with no JavaScript behind it, so whatever
 * the reviewer typed is all we get. Matching against one language would quietly
 * drop every reviewer who wrote their own region in their own language, which is
 * the reverse of what the field is for.
 */
const REGION_LABEL_TABLES = Object.values(i18n.UI_STRINGS).map((strings) =>
  Object.fromEntries(review.REGION_SUGGESTIONS.map(([code]) => [code, strings[review.labelKey("region", code)]]))
);

function regionCodeOf(flag) {
  if (flag.regionCode) return flag.regionCode;
  for (const labels of REGION_LABEL_TABLES) {
    const code = review.regionCodeFor(flag.region, labels);
    if (code) return code;
  }
  return "";
}

/*
 * Group by regionCode where a flag has one, and fall back to matching the free
 * text so flags filed before codes existed still aggregate. Anything we can't
 * place keeps the reviewer's own words as its own bucket rather than vanishing.
 */
function regionTally(entries) {
  const counts = new Map();
  for (const { flag } of entries) {
    const code = regionCodeOf(flag);
    const name = code ? review.labelOf(review.REGION_SUGGESTIONS, code) : String(flag.region || "").trim();
    if (!name) continue;
    counts.set(name, (counts.get(name) || 0) + 1);
  }
  if (counts.size === 0) return [];
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  return ["Where reviewers spoke from", ...sorted.map(([name, n]) => `    ${String(n).padStart(3)}  ${name}`), ""];
}

function renderText(entries) {
  const lines = [];
  entries.forEach((entry, index) => {
    const { flag, resolved, status } = entry;
    const number = `[${index + 1}]`;
    if (status === "unresolved") {
      lines.push(`${number} UNRESOLVED — ${resolved.reason}`);
      lines.push(`    Anchor   ${flag.anchor}`);
      lines.push(`    Flagged  ${oneLine(flag.original)}`);
      if (flag.suggestion) lines.push(`    Suggest  ${oneLine(flag.suggestion)}`);
      lines.push("");
      return;
    }
    lines.push(`${number} ${shortSeverity(flag).toUpperCase()} · ${review.labelOf(review.ISSUE_TYPES, flag.issueType)}`);
    lines.push(`    Where    ${resolved.label}`);
    lines.push(`    Edit     ${resolved.source} → ${resolved.path}`);
    if (status === "drifted") {
      lines.push("    DRIFTED  This text changed after it was flagged — re-check before applying.");
      lines.push(`      then   ${oneLine(flag.original)}`);
      lines.push(`      now    ${oneLine(resolved.text)}`);
    } else {
      lines.push(`    Now      ${oneLine(resolved.text)}`);
    }
    if (flag.suggestion) lines.push(`    Suggest  ${oneLine(flag.suggestion)}`);
    if (flag.comment) lines.push(`    Why      ${oneLine(flag.comment)}`);
    const reviewer = who(flag);
    if (reviewer) lines.push(`    By       ${reviewer}`);
    lines.push("");
  });
  return [...lines, ...regionTally(entries)].join("\n");
}

function renderMarkdown(entries) {
  const rows = entries.map((entry, index) => {
    const { flag, resolved, status } = entry;
    const where = resolved.ok ? resolved.label : `\`${flag.anchor}\``;
    const location = resolved.ok ? `\`${resolved.source}\` → \`${resolved.path}\`` : "—";
    const note = status === "unresolved"
      ? `**Unresolved** — ${resolved.reason}`
      : status === "drifted"
        ? "**Drifted** — text changed after flagging, re-check"
        : "Ready to apply";
    return `| ${index + 1} | ${shortSeverity(flag)} | ${where} | ${location} | ${oneLine(flag.suggestion) || "—"} | ${note} |`;
  });
  return [
    "| # | Severity | Where | Edit | Suggested | Status |",
    "| --- | --- | --- | --- | --- | --- |",
    ...rows
  ].join("\n");
}

function main() {
  const args = process.argv.slice(2);
  if (args.includes("--help") || args.includes("-h")) {
    usage();
    return 0;
  }

  const formatIndex = args.indexOf("--format");
  const format = formatIndex === -1 ? "text" : args[formatIndex + 1];
  if (!["text", "markdown"].includes(format)) {
    console.error(`Unknown format "${format}". Use text or markdown.`);
    return 2;
  }
  const file = args.find((arg, index) => !arg.startsWith("--") && !(formatIndex !== -1 && index === formatIndex + 1));

  const input = readInput(file);
  if (input === undefined) {
    usage();
    return 2;
  }
  if (!input) return 2;

  const payload = review.extractPayload(input);
  if (!payload) {
    console.error('No flag payload found. Expected JSON with a "flags" array, or an issue body containing one in a fenced block.');
    return 2;
  }
  if (payload.schema !== review.SCHEMA_VERSION) {
    console.error(`Warning: payload schema ${payload.schema} does not match this checkout's schema ${review.SCHEMA_VERSION}.`);
  }

  const content = loadContent();
  const malformed = [];
  payload.flags.forEach((flag, index) => {
    const errors = review.validateFlag(flag);
    if (errors.length > 0) malformed.push(`flag ${index + 1}: ${errors.join("; ")}`);
  });

  const order = { unresolved: 0, drifted: 1, ready: 2 };
  const entries = payload.flags
    .map((flag) => classify(flag, content))
    .sort((a, b) => (order[a.status] !== order[b.status]
      ? order[a.status] - order[b.status]
      : severityRank(a.flag) - severityRank(b.flag)));

  const count = (status) => entries.filter((entry) => entry.status === status).length;
  const header = `Parcero flag triage — ${entries.length} flag${entries.length === 1 ? "" : "s"}: `
    + `${count("ready")} ready, ${count("drifted")} drifted, ${count("unresolved")} unresolved`;

  if (format === "markdown") {
    console.log(`### ${header}\n`);
    console.log(renderMarkdown(entries));
  } else {
    console.log(`${header}\n`);
    console.log(renderText(entries));
  }

  if (malformed.length > 0) {
    console.error("Malformed flags:");
    for (const message of malformed) console.error(`  ${message}`);
  }

  return count("unresolved") > 0 || malformed.length > 0 ? 1 : 0;
}

process.exitCode = main();
