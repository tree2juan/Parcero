/*
 * Parcero review core.
 *
 * A flag is a note from a native speaker about one exact string in the content.
 * To be actionable months later it has to survive edits, so every flag stores a
 * stable *anchor* — an address that resolves back to the string it describes:
 *
 *   lesson:greeting-at-the-cafe/es/dialogue/1/target
 *   lesson:greeting-at-the-cafe/es/vocabulary/0/explanation
 *   verb:verb-1/regionality
 *   fluency:6/note
 *
 * This file has no DOM and no I/O so the browser, the tests and the maintainer
 * CLI all resolve anchors the same way.
 */
const ParceroReview = (function () {
  "use strict";

  const SCHEMA_VERSION = 1;
  const PAYLOAD_LANGUAGE = "json";
  const PAYLOAD_MARKER = "parcero-flags";
  const REPO_URL = "https://github.com/tree2juan/Parcero";
  const ISSUE_TEMPLATE = "content-flag.yml";
  const MAX_ISSUE_URL = 6000;

  const DIRECTIONS = ["es", "en"];
  /* Data layout: a dialogue row is [speaker, target, translation, pronunciation].
     This order indexes the tuple, so it must not be reordered. */
  const DIALOGUE_SLOTS = ["speaker", "target", "translation", "pronunciation"];
  /* Order the part picker offers instead: the taught line first, the character
     name last, because that is the order a reviewer is likely to want them. */
  const DIALOGUE_PART_ORDER = ["target", "translation", "pronunciation", "speaker"];
  const VOCABULARY_SLOTS = ["term", "explanation"];
  const LESSON_TEXT_FIELDS = ["title", "situation", "note", "prompt"];
  const VERB_SLOTS = ["spanish", "english", "presentYo", "preteriteYo", "participle", "level", "register", "regionality"];
  const VERB_FORM_SLOTS = ["presentYo", "preteriteYo", "participle"];
  const FLUENCY_SLOTS = ["phrase", "meaning", "type", "region", "note"];
  const MATURE_SLOTS = ["phrase", "equivalent", "severity", "note"];

  /* Read a row by slot name. Rows are tuples today, but a row that arrives as a
     named object still resolves, because a positional read of one returns
     undefined without throwing — which would empty the part picker in silence. */
  function rowSlot(row, slots, slot) {
    const index = slots.indexOf(slot);
    if (index === -1) return { value: undefined, path: "" };
    return Array.isArray(row)
      ? { value: row[index], path: `[${index}]` }
      : { value: row[slot], path: `.${slot}` };
  }

  const ISSUE_TYPES = [
    ["not-natural", "No one really says it this way"],
    ["regional", "Wrong region — this is not general Colombian usage"],
    ["register", "Wrong register (usted / tú / vos, or formality)"],
    ["translation", "The translation does not match"],
    ["pronunciation", "The pronunciation respelling would mislead"],
    ["spelling", "Spelling, accent mark or typo"],
    ["culture", "The cultural explanation is wrong or incomplete"],
    ["risky", "Could embarrass or endanger a learner who repeats it"],
    ["outdated", "Understood, but dated or class-marked"],
    ["other", "Something else"]
  ];

  const SEVERITIES = [
    ["blocker", "Blocker — do not publish as written"],
    ["should-fix", "Should fix before sign-off"],
    ["nitpick", "Nitpick — safe either way"]
  ];

  const REVIEWER_ROLES = [
    ["native-es-co", "Native Colombian Spanish speaker"],
    ["native-es-other", "Native Spanish speaker, not Colombian"],
    ["native-en", "Native or expert English speaker"],
    ["educator", "Language educator"]
  ];

  const REGION_SUGGESTIONS = [
    ["bogota", "Bogotá (rolo / cachaco)"],
    ["antioquia", "Medellín and Antioquia (paisa)"],
    ["valle", "Cali and Valle del Cauca (valluno)"],
    ["caribe", "Caribbean coast (costeño)"],
    ["eje-cafetero", "Eje Cafetero"],
    ["santander", "Santander"],
    ["narino", "Nariño and the south"],
    ["llanos", "Llanos"],
    ["pacifico", "Pacific coast (Chocó)"],
    ["co-general", "Colombian, no particular region"]
  ];

  const codes = (pairs) => pairs.map(([code]) => code);
  const labelOf = (pairs, code) => (pairs.find(([value]) => value === code) || [code, code])[1];
  const isText = (value) => typeof value === "string" && value.trim().length > 0;

  /*
   * Every [code, label] pair above is half machine, half human: the code is
   * written into filed flags and keyed on by the triage CLI, so it must never
   * change, while the label is display-only and may be translated. labelKey maps
   * one to the other for a translation table.
   *
   * Regions are the odd one out. The field stays deliberately open — a reviewer
   * from somewhere not on the list types their own words and we keep them
   * verbatim — but the suggestions carry codes so the common answers can be
   * translated and still aggregate. A flag therefore files both: `region` is
   * always the human text exactly as entered or shown, and `regionCode` is the
   * canonical code when that text matches a known suggestion in any language,
   * or "" when it doesn't. Display paths read `region`; grouping reads
   * `regionCode`. Neither is derived from the other after the fact.
   */
  const LABEL_KEY_PREFIX = {
    issueType: "review.issueType",
    severity: "review.severity",
    role: "review.role",
    region: "review.region"
  };
  const labelKey = (group, code) => `${LABEL_KEY_PREFIX[group] || `review.${group}`}.${code}`;

  /*
   * Matching is forgiving because the reviewer is typing a place name, not a
   * key: case, spacing and accents are all normalised away, so "Medellin" finds
   * the same region as "Medellín". Only the match is normalised — what we file
   * is untouched.
   */
  const normalizeRegion = (value) => (typeof value === "string" ? value : "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/\s+/g, " ").trim();

  function regionCodeFor(text, labels) {
    const needle = normalizeRegion(text);
    if (!needle) return "";
    const translated = labels || {};
    for (const [code, english] of REGION_SUGGESTIONS) {
      const candidates = [code, english, translated[code]];
      if (candidates.some((candidate) => isText(candidate) && normalizeRegion(candidate) === needle)) return code;
    }
    return "";
  }

  /* ---------- anchors ---------- */

  function parseAnchor(anchor) {
    if (!isText(anchor)) return null;
    const separator = anchor.indexOf(":");
    if (separator < 1) return null;
    const kind = anchor.slice(0, separator);
    const segments = anchor.slice(separator + 1).split("/").filter((segment) => segment.length > 0);
    if (segments.length === 0) return null;

    if (kind === "lesson") {
      const [id, direction, field, third, fourth] = segments;
      if (!isText(id) || !DIRECTIONS.includes(direction) || !isText(field)) return null;
      if (LESSON_TEXT_FIELDS.includes(field)) {
        return segments.length === 3 ? { kind, id, direction, field, index: null, slot: null } : null;
      }
      if (field === "heading") {
        return segments.length === 3 ? { kind, id, direction, field, index: null, slot: null } : null;
      }
      if (field === "choices") {
        if (segments.length === 3) return { kind, id, direction, field, index: null, slot: null };
        return segments.length === 4 && /^\d+$/.test(third)
          ? { kind, id, direction, field, index: Number(third), slot: null }
          : null;
      }
      if (field === "dialogue" || field === "vocabulary") {
        if (!/^\d+$/.test(third || "")) return null;
        const slots = field === "dialogue" ? DIALOGUE_SLOTS : VOCABULARY_SLOTS;
        if (segments.length === 4) return { kind, id, direction, field, index: Number(third), slot: null };
        return segments.length === 5 && slots.includes(fourth)
          ? { kind, id, direction, field, index: Number(third), slot: fourth }
          : null;
      }
      return null;
    }

    if (kind === "verb") {
      const [id, slot] = segments;
      if (!isText(id)) return null;
      if (segments.length === 1) return { kind, id, slot: null };
      return segments.length === 2 && VERB_SLOTS.includes(slot) ? { kind, id, slot } : null;
    }

    if (kind === "fluency" || kind === "mature") {
      const [rawIndex, slot] = segments;
      if (!/^\d+$/.test(rawIndex)) return null;
      const slots = kind === "fluency" ? FLUENCY_SLOTS : MATURE_SLOTS;
      if (segments.length === 1) return { kind, index: Number(rawIndex), slot: null };
      return segments.length === 2 && slots.includes(slot) ? { kind, index: Number(rawIndex), slot } : null;
    }

    return null;
  }

  function isGroupAnchor(anchor) {
    const parsed = parseAnchor(anchor);
    if (!parsed) return false;
    if (parsed.kind === "lesson") {
      if (parsed.field === "heading" || parsed.field === "choices") return parsed.index === null;
      if (parsed.field === "dialogue" || parsed.field === "vocabulary") return parsed.slot === null;
      return false;
    }
    return parsed.slot === null;
  }

  function groupAnchor(anchor) {
    const parsed = parseAnchor(anchor);
    if (!parsed) return null;
    if (parsed.kind === "lesson") {
      const base = `lesson:${parsed.id}/${parsed.direction}`;
      if (parsed.field === "title" || parsed.field === "situation") return `${base}/heading`;
      if (parsed.field === "choices") return `${base}/choices`;
      if (parsed.field === "dialogue" || parsed.field === "vocabulary") return `${base}/${parsed.field}/${parsed.index}`;
      return `${base}/${parsed.field}`;
    }
    if (parsed.kind === "verb") return `verb:${parsed.id}`;
    return `${parsed.kind}:${parsed.index}`;
  }

  /* ---------- labels ---------- */

  const directionName = (direction) => (direction === "es" ? "Colombian Spanish" : "English");

  function lessonSlotLabel(field, slot, direction) {
    const target = direction === "es" ? "Spanish" : "English";
    const support = direction === "es" ? "English" : "Spanish";
    if (field === "dialogue") {
      return {
        speaker: "Speaker name",
        target: `${target} line`,
        translation: `${support} translation`,
        pronunciation: "Pronunciation respelling"
      }[slot];
    }
    if (field === "vocabulary") {
      return { term: `${target} term`, explanation: "Explanation" }[slot];
    }
    return { title: "Lesson title", situation: "Situation", note: "Colombian context note", prompt: "Practice question" }[field];
  }

  function slotLanguage(kind, field, slot, direction) {
    if (kind === "verb") return slot === "english" ? "en" : VERB_FORM_SLOTS.includes(slot) || slot === "spanish" ? "es" : null;
    if (kind !== "lesson") return null;
    const target = direction;
    const support = direction === "es" ? "en" : "es";
    if (field === "dialogue") return slot === "target" ? target : slot === "translation" ? support : null;
    if (field === "vocabulary") return slot === "term" ? target : null;
    if (field === "title" || field === "situation" || field === "note" || field === "prompt") return target;
    if (field === "choices") return target;
    return null;
  }

  /* ---------- resolution ---------- */

  function findLesson(data, id) {
    const index = (data.lessons || []).findIndex((lesson) => lesson.id === id);
    return index === -1 ? null : { lesson: data.lessons[index], index };
  }

  function resolveAnchor(anchor, data) {
    const parsed = parseAnchor(anchor);
    if (!parsed) return { anchor, ok: false, reason: `"${anchor}" is not a valid content anchor` };
    if (isGroupAnchor(anchor)) return { anchor, ok: false, reason: `"${anchor}" points at a group, not a single string` };

    if (parsed.kind === "lesson") {
      const found = findLesson(data, parsed.id);
      if (!found) return { anchor, ok: false, reason: `no lesson with id "${parsed.id}"` };
      const content = found.lesson[parsed.direction];
      if (!content) return { anchor, ok: false, reason: `lesson "${parsed.id}" has no "${parsed.direction}" content` };
      const base = `lessons[${found.index}].${parsed.direction}`;
      const lessonName = content.title || parsed.id;
      const where = `${lessonName} · ${directionName(parsed.direction)}`;

      if (LESSON_TEXT_FIELDS.includes(parsed.field)) {
        return {
          anchor, ok: true, kind: "lesson", source: "data/lessons.js", path: `${base}.${parsed.field}`,
          text: content[parsed.field],
          slotLabel: lessonSlotLabel(parsed.field, null, parsed.direction),
          label: `${where} · ${lessonSlotLabel(parsed.field, null, parsed.direction)}`,
          lang: slotLanguage("lesson", parsed.field, null, parsed.direction)
        };
      }

      if (parsed.field === "choices") {
        const choice = (content.choices || [])[parsed.index];
        if (choice === undefined) return { anchor, ok: false, reason: `lesson "${parsed.id}" has no choice ${parsed.index + 1}` };
        const slotLabel = `Answer choice ${parsed.index + 1}${content.answer === parsed.index ? " (the correct one)" : ""}`;
        return {
          anchor, ok: true, kind: "lesson", source: "data/lessons.js", path: `${base}.choices[${parsed.index}]`,
          text: choice, slotLabel, label: `${where} · ${slotLabel}`,
          lang: slotLanguage("lesson", "choices", null, parsed.direction)
        };
      }

      const rows = content[parsed.field] || [];
      const row = rows[parsed.index];
      if (!row) return { anchor, ok: false, reason: `lesson "${parsed.id}" has no ${parsed.field} entry ${parsed.index + 1}` };
      const slots = parsed.field === "dialogue" ? DIALOGUE_SLOTS : VOCABULARY_SLOTS;
      const cell = rowSlot(row, slots, parsed.slot);
      if (cell.value === undefined) {
        return { anchor, ok: false, reason: `lesson "${parsed.id}" ${parsed.field} entry ${parsed.index + 1} has no "${parsed.slot}"` };
      }
      const slotLabel = lessonSlotLabel(parsed.field, parsed.slot, parsed.direction);
      const rowLabel = parsed.field === "dialogue" ? `Dialogue line ${parsed.index + 1}` : `Vocabulary entry ${parsed.index + 1}`;
      return {
        anchor, ok: true, kind: "lesson", source: "data/lessons.js",
        path: `${base}.${parsed.field}[${parsed.index}]${cell.path}`,
        text: cell.value, slotLabel, label: `${where} · ${rowLabel} · ${slotLabel}`,
        lang: slotLanguage("lesson", parsed.field, parsed.slot, parsed.direction)
      };
    }

    if (parsed.kind === "verb") {
      const index = (data.curriculum || []).findIndex((verb) => verb.id === parsed.id);
      if (index === -1) return { anchor, ok: false, reason: `no verb with id "${parsed.id}"` };
      const verb = data.curriculum[index];
      const isForm = VERB_FORM_SLOTS.includes(parsed.slot);
      const text = isForm ? verb.forms?.[parsed.slot] : verb[parsed.slot];
      if (text === undefined) return { anchor, ok: false, reason: `verb "${parsed.id}" has no "${parsed.slot}"` };
      const slotLabel = {
        spanish: "Spanish infinitive", english: "English meaning", presentYo: "Present (yo)",
        preteriteYo: "Preterite (yo)", participle: "Participle", level: "Level label",
        register: "Register label", regionality: "Colombian regionality label"
      }[parsed.slot];
      return {
        anchor, ok: true, kind: "verb", source: "data/curriculum.js",
        path: isForm ? `curriculum[${index}].forms.${parsed.slot}` : `curriculum[${index}].${parsed.slot}`,
        text, slotLabel, label: `Verb “${verb.spanish}” (${verb.english}) · ${slotLabel}`,
        lang: slotLanguage("verb", null, parsed.slot, null)
      };
    }

    const listName = parsed.kind === "fluency" ? "fluencyItems" : "matureItems";
    const list = data[listName] || [];
    const row = list[parsed.index];
    if (!row) return { anchor, ok: false, reason: `${listName} has no entry ${parsed.index + 1}` };
    const slots = parsed.kind === "fluency" ? FLUENCY_SLOTS : MATURE_SLOTS;
    const cell = rowSlot(row, slots, parsed.slot);
    if (cell.value === undefined) {
      return { anchor, ok: false, reason: `${listName} entry ${parsed.index + 1} has no "${parsed.slot}"` };
    }
    const slotLabels = parsed.kind === "fluency"
      ? { phrase: "Phrase", meaning: "Meaning", type: "Type label", region: "Region label", note: "Usage note" }
      : { phrase: "Phrase", equivalent: "Equivalent", severity: "Severity label", note: "Safety note" };
    const family = parsed.kind === "fluency" ? "Fluency reference" : "Mature-language reference";
    return {
      anchor, ok: true, kind: parsed.kind, source: "data/curriculum.js",
      path: `${listName}[${parsed.index}]${cell.path}`,
      text: cell.value, slotLabel: slotLabels[parsed.slot],
      label: `${family} “${rowSlot(row, slots, slots[0]).value}” · ${slotLabels[parsed.slot]}`, lang: null
    };
  }

  /* ---------- groups ---------- */

  function partsForAnchor(anchor, data) {
    const parsed = parseAnchor(anchor);
    if (!parsed) return [];
    const leaves = [];
    if (parsed.kind === "lesson") {
      const base = `lesson:${parsed.id}/${parsed.direction}`;
      if (parsed.field === "heading") leaves.push(`${base}/title`, `${base}/situation`);
      else if (parsed.field === "choices" && parsed.index === null) {
        const found = findLesson(data, parsed.id);
        const total = found ? (found.lesson[parsed.direction]?.choices || []).length : 0;
        for (let index = 0; index < total; index += 1) leaves.push(`${base}/choices/${index}`);
      } else if ((parsed.field === "dialogue" || parsed.field === "vocabulary") && parsed.slot === null) {
        const slots = parsed.field === "dialogue" ? DIALOGUE_PART_ORDER : VOCABULARY_SLOTS;
        for (const slot of slots) leaves.push(`${base}/${parsed.field}/${parsed.index}/${slot}`);
      } else leaves.push(anchor);
    } else if (parsed.kind === "verb") {
      if (parsed.slot) leaves.push(anchor);
      else for (const slot of VERB_SLOTS) leaves.push(`verb:${parsed.id}/${slot}`);
    } else {
      const slots = parsed.kind === "fluency" ? FLUENCY_SLOTS : MATURE_SLOTS;
      if (parsed.slot) leaves.push(anchor);
      else for (const slot of slots) leaves.push(`${parsed.kind}:${parsed.index}/${slot}`);
    }
    return leaves.map((leaf) => resolveAnchor(leaf, data)).filter((entry) => entry.ok && isText(entry.text));
  }

  function listAnchors(data) {
    const all = [];
    for (const lesson of data.lessons || []) {
      for (const direction of DIRECTIONS) {
        const content = lesson[direction];
        if (!content) continue;
        const base = `lesson:${lesson.id}/${direction}`;
        for (const field of LESSON_TEXT_FIELDS) all.push(`${base}/${field}`);
        (content.dialogue || []).forEach((_, index) => {
          for (const slot of DIALOGUE_SLOTS) all.push(`${base}/dialogue/${index}/${slot}`);
        });
        (content.vocabulary || []).forEach((_, index) => {
          for (const slot of VOCABULARY_SLOTS) all.push(`${base}/vocabulary/${index}/${slot}`);
        });
        (content.choices || []).forEach((_, index) => all.push(`${base}/choices/${index}`));
      }
    }
    for (const verb of data.curriculum || []) for (const slot of VERB_SLOTS) all.push(`verb:${verb.id}/${slot}`);
    (data.fluencyItems || []).forEach((_, index) => {
      for (const slot of FLUENCY_SLOTS) all.push(`fluency:${index}/${slot}`);
    });
    (data.matureItems || []).forEach((_, index) => {
      for (const slot of MATURE_SLOTS) all.push(`mature:${index}/${slot}`);
    });
    return all;
  }

  /* ---------- flags ---------- */

  function validateFlag(flag) {
    const errors = [];
    if (!flag || typeof flag !== "object") return ["a flag must be an object"];
    if (!parseAnchor(flag.anchor)) errors.push("anchor is missing or malformed");
    else if (isGroupAnchor(flag.anchor)) errors.push("anchor must point at one string, not a group");
    if (!codes(ISSUE_TYPES).includes(flag.issueType)) errors.push("issueType is not one of the known problem types");
    if (!codes(SEVERITIES).includes(flag.severity)) errors.push("severity is not one of the known levels");
    if (!codes(REVIEWER_ROLES).includes(flag.role)) errors.push("role is not one of the known reviewer roles");
    if (isText(flag.regionCode) && !codes(REGION_SUGGESTIONS).includes(flag.regionCode)) {
      errors.push("regionCode is not one of the known regions");
    }
    if (!isText(flag.original)) errors.push("original text is missing");
    if (!isText(flag.suggestion) && !isText(flag.comment)) errors.push("give a suggested wording, an explanation, or both");
    return errors;
  }

  const flagKey = (flag) => `${flag.anchor}|${flag.issueType}`;

  function buildPayload(flags, meta) {
    return {
      schema: SCHEMA_VERSION,
      marker: PAYLOAD_MARKER,
      generatedAt: (meta && meta.generatedAt) || new Date().toISOString(),
      flags: flags.map((flag) => ({
        anchor: flag.anchor,
        issueType: flag.issueType,
        severity: flag.severity,
        role: flag.role,
        region: flag.region || "",
        regionCode: flag.regionCode || "",
        original: flag.original,
        suggestion: flag.suggestion || "",
        comment: flag.comment || "",
        flaggedAt: flag.flaggedAt || ""
      }))
    };
  }

  function payloadBlock(payload) {
    return ["```" + PAYLOAD_LANGUAGE, JSON.stringify(payload, null, 2), "```"].join("\n");
  }

  function extractPayload(text) {
    if (!isText(text)) return null;
    const direct = tryParse(text);
    if (direct) return direct;
    const fences = [...text.matchAll(/```[\w-]*\s*\n([\s\S]*?)```/g)];
    for (const fence of fences) {
      const parsed = tryParse(fence[1]);
      if (parsed) return parsed;
    }
    return null;
  }

  function tryParse(text) {
    try {
      const value = JSON.parse(text);
      return value && typeof value === "object" && Array.isArray(value.flags) ? value : null;
    } catch {
      return null;
    }
  }

  const quote = (text) => String(text || "").replace(/\r?\n/g, " ").trim();

  function flagsToMarkdown(flags, data) {
    if (flags.length === 0) return "_No flags._";
    const bySeverity = codes(SEVERITIES);
    const ordered = [...flags].sort((a, b) => bySeverity.indexOf(a.severity) - bySeverity.indexOf(b.severity));
    return ordered.map((flag) => {
      const resolved = resolveAnchor(flag.anchor, data);
      const lines = [
        `### ${labelOf(SEVERITIES, flag.severity)}`,
        `**Where:** ${resolved.ok ? resolved.label : flag.anchor}`,
        `**Problem:** ${labelOf(ISSUE_TYPES, flag.issueType)}`,
        `**As written:** ${quote(flag.original)}`
      ];
      if (isText(flag.suggestion)) lines.push(`**Suggested:** ${quote(flag.suggestion)}`);
      if (isText(flag.comment)) lines.push(`**Why:** ${quote(flag.comment)}`);
      const who = [labelOf(REVIEWER_ROLES, flag.role), flag.region].filter(isText).join(" · ");
      if (isText(who)) lines.push(`**Reviewer:** ${who}`);
      lines.push(`\`${flag.anchor}\``);
      return lines.join("\n");
    }).join("\n\n");
  }

  function summarise(flags, data) {
    const lessons = new Set();
    for (const flag of flags) {
      const parsed = parseAnchor(flag.anchor);
      if (parsed && parsed.kind === "lesson") lessons.add(parsed.id);
    }
    const count = `${flags.length} flag${flags.length === 1 ? "" : "s"}`;
    if (lessons.size === 1) {
      const [id] = [...lessons];
      const found = findLesson(data, id);
      const name = found ? found.lesson.en?.title || id : id;
      return `${count} on “${name}”`;
    }
    if (lessons.size > 1) return `${count} across ${lessons.size} lessons`;
    return `${count} in the reference library`;
  }

  function issueTitle(flags, data) {
    return `Native-speaker flags: ${summarise(flags, data)}`;
  }

  function issueBody(flags, data) {
    return [
      summarise(flags, data) + ", reported from the Report an error tab.",
      "",
      flagsToMarkdown(flags, data)
    ].join("\n");
  }

  function buildIssueUrl(flags, data, options) {
    const settings = options || {};
    const payload = buildPayload(flags, settings);
    const params = new URLSearchParams();
    params.set("template", ISSUE_TEMPLATE);
    params.set("title", issueTitle(flags, data));
    params.set("summary", issueBody(flags, data));
    params.set("payload", JSON.stringify(payload, null, 2));
    const region = flags.map((flag) => flag.region).find(isText);
    if (isText(region)) params.set("region", region);
    const url = `${settings.repoUrl || REPO_URL}/issues/new?${params.toString()}`;
    return { url, tooLong: url.length > MAX_ISSUE_URL, payload };
  }

  function blankIssueUrl(options) {
    const settings = options || {};
    return `${settings.repoUrl || REPO_URL}/issues/new?template=${ISSUE_TEMPLATE}`;
  }

  return {
    SCHEMA_VERSION, PAYLOAD_MARKER, REPO_URL, ISSUE_TEMPLATE, MAX_ISSUE_URL,
    DIRECTIONS, DIALOGUE_SLOTS, VOCABULARY_SLOTS, LESSON_TEXT_FIELDS,
    VERB_SLOTS, FLUENCY_SLOTS, MATURE_SLOTS,
    ISSUE_TYPES, SEVERITIES, REVIEWER_ROLES, REGION_SUGGESTIONS,
    labelOf, labelKey, regionCodeFor, parseAnchor, isGroupAnchor, groupAnchor, resolveAnchor, partsForAnchor, listAnchors,
    validateFlag, flagKey, buildPayload, payloadBlock, extractPayload,
    flagsToMarkdown, summarise, issueTitle, issueBody, buildIssueUrl, blankIssueUrl
  };
})();

if (typeof module !== "undefined" && module.exports) module.exports = ParceroReview;
