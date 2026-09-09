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
  /*
   * The canonical shape lives in data/lesson-schema.js so that the renderer, the
   * tests, the maintainer CLI and this file cannot drift apart on what a lesson
   * is. A row may be a legacy tuple or a rich object; the schema reads either by
   * slot NAME, which is why an anchor can survive a new field being added.
   */
  const SCHEMA = typeof ParceroLessonSchema !== "undefined"
    ? ParceroLessonSchema
    : require("./data/lesson-schema.js");

  const DIALOGUE_SLOTS = SCHEMA.DIALOGUE_SLOTS;
  /* Order the part picker offers instead: the taught line first, the character
     name last, because that is the order a reviewer is likely to want them. */
  const DIALOGUE_PART_ORDER = ["target", "translation", "pronunciation", "literal", "why", "speaker"];
  const VOCABULARY_SLOTS = SCHEMA.VOCABULARY_SLOTS;
  const CULTURE_SLOTS = SCHEMA.CULTURE_SLOTS;
  const PITFALL_SLOTS = SCHEMA.PITFALL_SLOTS;
  const VARIATION_SLOTS = SCHEMA.VARIATION_SLOTS;
  const ADDRESS_SLOTS = SCHEMA.ADDRESS_SLOTS;
  const SETTING_KEYS = SCHEMA.SETTING_KEYS;
  /* Fields addressed as field/index/slot. */
  const ROW_FIELDS = {
    dialogue: DIALOGUE_SLOTS,
    vocabulary: VOCABULARY_SLOTS,
    culture: CULTURE_SLOTS,
    pitfalls: PITFALL_SLOTS,
    variations: VARIATION_SLOTS
  };
  /* Fields addressed as field/slot, with no index. */
  const OBJECT_FIELDS = { setting: SETTING_KEYS, address: ADDRESS_SLOTS };
  const LESSON_TEXT_FIELDS = ["title", "situation", "note", "prompt"];
  /* Authored on the lesson rather than on one direction's content, but rendered
     on every lesson view, so a reviewer has to be able to reach it. */
  const LESSON_META_FIELDS = ["level"];
  /* Text hanging off a row that isn't one of the row's flat slots. Deliberately
     kept out of the SCHEMA slot lists: those double as the positional order for
     legacy tuple rows, so appending a name there would renumber reports filed
     before it existed. */
  const ROW_NESTED_SLOTS = { vocabulary: ["example.target", "example.translation"] };
  /* Row slots holding a list of strings, addressed as field/index/slot/n. */
  const ROW_LIST_SLOTS = { vocabulary: ["related"] };
  const nestedValue = (row, slot) => slot.split(".").reduce((node, key) => (node == null ? node : node[key]), row);
  const VERB_SLOTS = ["spanish", "english", "presentYo", "preteriteYo", "participle", "level", "register", "regionality"];
  const VERB_FORM_SLOTS = ["presentYo", "preteriteYo", "participle"];
  const FLUENCY_SLOTS = ["phrase", "meaning", "type", "region", "note"];
  const MATURE_SLOTS = ["phrase", "equivalent", "severity", "note"];

  /* Practice question 0 is the lesson's original prompt/choices; 1 and up are
     practiceExtra. Keeping that mapping means flags filed against the original
     question before extra questions existed still resolve to the same string. */
  function practiceQuestionAt(content, index) {
    return index === 0 ? content : (content.practiceExtra || [])[index - 1];
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
      const [id, direction, field, third, fourth, fifth] = segments;
      if (!isText(id) || !DIRECTIONS.includes(direction) || !isText(field)) return null;
      if (LESSON_TEXT_FIELDS.includes(field)) {
        return segments.length === 3 ? { kind, id, direction, field, index: null, slot: null } : null;
      }
      if (LESSON_META_FIELDS.includes(field)) {
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
      if (OBJECT_FIELDS[field]) {
        if (segments.length === 3) return { kind, id, direction, field, index: null, slot: null };
        return segments.length === 4 && OBJECT_FIELDS[field].includes(third)
          ? { kind, id, direction, field, index: null, slot: third }
          : null;
      }
      if (ROW_FIELDS[field]) {
        if (!/^\d+$/.test(third || "")) return null;
        const slots = ROW_FIELDS[field];
        const nested = ROW_NESTED_SLOTS[field] || [];
        const lists = ROW_LIST_SLOTS[field] || [];
        if (segments.length === 4) return { kind, id, direction, field, index: Number(third), slot: null };
        if (segments.length === 5 && (slots.includes(fourth) || nested.includes(fourth))) {
          return { kind, id, direction, field, index: Number(third), slot: fourth, item: null };
        }
        return segments.length === 6 && lists.includes(fourth) && /^\d+$/.test(fifth || "")
          ? { kind, id, direction, field, index: Number(third), slot: fourth, item: Number(fifth) }
          : null;
      }
      if (field === "practice") {
        if (!/^\d+$/.test(third || "")) return null;
        const index = Number(third);
        if (segments.length === 5 && fourth === "prompt") return { kind, id, direction, field, index, slot: "prompt", choice: null };
        if (segments.length === 5 && fourth === "tests") return { kind, id, direction, field, index, slot: "tests", choice: null };
        if (segments.length === 5 && fourth === "choices") return { kind, id, direction, field, index, slot: "choices", choice: null };
        return segments.length === 6 && fourth === "choices" && /^\d+$/.test(fifth || "")
          ? { kind, id, direction, field, index, slot: "choices", choice: Number(fifth) }
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
      if (parsed.field === "practice") return parsed.slot === "choices" && parsed.choice === null;
      if (ROW_FIELDS[parsed.field] || OBJECT_FIELDS[parsed.field]) return parsed.slot === null;
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
      if (parsed.field === "practice") {
        return parsed.slot === "choices" ? `${base}/practice/${parsed.index}/choices` : `${base}/practice/${parsed.index}/prompt`;
      }
      /* The situation and the address note are each reported as one unit, and
         the part picker narrows to who/what/when/where/why within them. */
      if (OBJECT_FIELDS[parsed.field]) return `${base}/${parsed.field}`;
      if (ROW_FIELDS[parsed.field]) return `${base}/${parsed.field}/${parsed.index}`;
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
        pronunciation: "Pronunciation respelling",
        literal: "Word-for-word rendering",
        why: "Why it is said this way"
      }[slot];
    }
    if (field === "vocabulary") {
      return {
        term: `${target} term`, explanation: "Explanation", literal: "Literal sense",
        useWhen: "When to use it", avoidWhen: "When to avoid it",
        register: "Register label", region: "Where it is used",
        "example.target": `Example sentence (${target})`,
        "example.translation": `Example sentence (${support})`,
        related: "Related expression"
      }[slot];
    }
    if (field === "setting") {
      return {
        who: "Who is speaking", what: "What is happening", when: "When it happens",
        where: "Where it happens", why: "Why they are speaking"
      }[slot];
    }
    if (field === "address") {
      return { who: "Who addresses whom", why: "Why this address form", ifYouSwitch: "What changes if you switch" }[slot];
    }
    if (field === "culture") return { label: "Context heading", body: "Context explanation" }[slot];
    if (field === "pitfalls") return { mistake: "The mistake", whyItFails: "Why it fails", sayInstead: "What to say instead" }[slot];
    if (field === "variations") {
      return { form: `${target} wording`, register: "Register label", region: "Region label", whenToUse: "When to use it" }[slot];
    }
    return { title: "Lesson title", situation: "Situation", note: "Colombian context note", prompt: "Practice question", level: "Level and topic" }[field];
  }

  function slotLanguage(kind, field, slot, direction) {
    if (kind === "verb") return slot === "english" ? "en" : VERB_FORM_SLOTS.includes(slot) || slot === "spanish" ? "es" : null;
    if (kind !== "lesson") return null;
    const target = direction;
    const support = direction === "es" ? "en" : "es";
    if (field === "dialogue") return slot === "target" ? target : slot === "translation" || slot === "literal" ? support : null;
    if (field === "vocabulary") {
      if (slot === "term" || slot === "example.target" || slot === "related") return target;
      return slot === "example.translation" ? support : null;
    }
    if (field === "variations") return slot === "form" ? target : null;
    if (field === "pitfalls") return slot === "sayInstead" ? target : null;
    if (field === "practice") return slot === "tests" ? support : target;
    if (field === "level") return support;
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

      if (LESSON_META_FIELDS.includes(parsed.field)) {
        const value = found.lesson[parsed.field];
        if (!isText(value)) return { anchor, ok: false, reason: `lesson "${parsed.id}" has no ${parsed.field}` };
        const slotLabel = lessonSlotLabel(parsed.field, null, parsed.direction);
        return {
          anchor, ok: true, kind: "lesson", source: "data/lessons.js",
          path: `lessons[${found.index}].${parsed.field}`,
          text: value, slotLabel, label: `${where} · ${slotLabel}`,
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

      if (OBJECT_FIELDS[parsed.field]) {
        const holder = content[parsed.field];
        const value = holder ? holder[parsed.slot] : null;
        if (!isText(value)) return { anchor, ok: false, reason: `lesson "${parsed.id}" has no ${parsed.field} "${parsed.slot}"` };
        const slotLabel = lessonSlotLabel(parsed.field, parsed.slot, parsed.direction);
        const fieldLabel = parsed.field === "setting" ? "The situation" : "Address form";
        return {
          anchor, ok: true, kind: "lesson", source: "data/lessons.js",
          path: `${base}.${parsed.field}.${parsed.slot}`,
          text: value, slotLabel, label: `${where} · ${fieldLabel} · ${slotLabel}`,
          lang: slotLanguage("lesson", parsed.field, parsed.slot, parsed.direction)
        };
      }

      if (parsed.field === "practice") {
        const question = practiceQuestionAt(content, parsed.index);
        if (!question) return { anchor, ok: false, reason: `lesson "${parsed.id}" has no practice question ${parsed.index + 1}` };
        const holder = parsed.index === 0 ? base : `${base}.practiceExtra[${parsed.index - 1}]`;
        if (parsed.slot === "prompt") {
          if (!isText(question.prompt)) return { anchor, ok: false, reason: `practice question ${parsed.index + 1} has no prompt` };
          const slotLabel = `Practice question ${parsed.index + 1}`;
          return {
            anchor, ok: true, kind: "lesson", source: "data/lessons.js", path: `${holder}.prompt`,
            text: question.prompt, slotLabel, label: `${where} · ${slotLabel}`,
            lang: slotLanguage("lesson", "practice", parsed.slot, parsed.direction)
          };
        }
        if (parsed.slot === "tests") {
          if (!isText(question.tests)) return { anchor, ok: false, reason: `practice question ${parsed.index + 1} has no "tests" note` };
          const slotLabel = `Question ${parsed.index + 1}, what it tests`;
          return {
            anchor, ok: true, kind: "lesson", source: "data/lessons.js", path: `${holder}.tests`,
            text: question.tests, slotLabel, label: `${where} · ${slotLabel}`,
            lang: slotLanguage("lesson", "practice", parsed.slot, parsed.direction)
          };
        }
        const choice = (question.choices || [])[parsed.choice];
        if (!isText(choice)) return { anchor, ok: false, reason: `practice question ${parsed.index + 1} has no choice ${parsed.choice + 1}` };
        const slotLabel = `Question ${parsed.index + 1}, answer choice ${parsed.choice + 1}${question.answer === parsed.choice ? " (the correct one)" : ""}`;
        return {
          anchor, ok: true, kind: "lesson", source: "data/lessons.js", path: `${holder}.choices[${parsed.choice}]`,
          text: choice, slotLabel, label: `${where} · ${slotLabel}`,
          lang: slotLanguage("lesson", "practice", parsed.slot, parsed.direction)
        };
      }

      const rows = content[parsed.field] || [];
      const row = rows[parsed.index];
      if (!row) return { anchor, ok: false, reason: `lesson "${parsed.id}" has no ${parsed.field} entry ${parsed.index + 1}` };
      const slots = ROW_FIELDS[parsed.field];
      const isNested = (ROW_NESTED_SLOTS[parsed.field] || []).includes(parsed.slot);
      const isList = (ROW_LIST_SLOTS[parsed.field] || []).includes(parsed.slot);
      const value = isList
        ? ((row[parsed.slot] || [])[parsed.item])
        : isNested ? nestedValue(row, parsed.slot) : SCHEMA.slotValue(row, slots, parsed.slot);
      if (!isText(value)) {
        const which = isList ? `"${parsed.slot}" ${parsed.item + 1}` : `"${parsed.slot}"`;
        return { anchor, ok: false, reason: `lesson "${parsed.id}" ${parsed.field} entry ${parsed.index + 1} has no ${which}` };
      }
      const slotLabel = isList
        ? `${lessonSlotLabel(parsed.field, parsed.slot, parsed.direction)} ${parsed.item + 1}`
        : lessonSlotLabel(parsed.field, parsed.slot, parsed.direction);
      const rowNames = {
        dialogue: "Dialogue line", vocabulary: "Vocabulary entry",
        culture: "Context note", pitfalls: "Pitfall", variations: "Variation"
      };
      const rowLabel = `${rowNames[parsed.field]} ${parsed.index + 1}`;
      const suffix = isList
        ? `.${parsed.slot}[${parsed.item}]`
        : isNested ? `.${parsed.slot}` : SCHEMA.slotPath(row, slots, parsed.slot);
      return {
        anchor, ok: true, kind: "lesson", source: "data/lessons.js",
        path: `${base}.${parsed.field}[${parsed.index}]${suffix}`,
        text: value, slotLabel, label: `${where} · ${rowLabel} · ${slotLabel}`,
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
    const slotIndex = slots.indexOf(parsed.slot);
    /* These rows are still tuples, so a short one yields undefined rather than
       throwing. Answering ok:true with nothing in it is the worst outcome: every
       caller believes ok, and the part picker just thins out with nothing said. */
    const value = SCHEMA.slotValue(row, slots, parsed.slot);
    if (!isText(value)) return { anchor, ok: false, reason: `${listName} entry ${parsed.index + 1} has no "${parsed.slot}"` };
    const slotLabels = parsed.kind === "fluency"
      ? { phrase: "Phrase", meaning: "Meaning", type: "Type label", region: "Region label", note: "Usage note" }
      : { phrase: "Phrase", equivalent: "Equivalent", severity: "Severity label", note: "Safety note" };
    const family = parsed.kind === "fluency" ? "Fluency reference" : "Mature-language reference";
    return {
      anchor, ok: true, kind: parsed.kind, source: "data/curriculum.js",
      path: `${listName}[${parsed.index}][${slotIndex}]`,
      text: value, slotLabel: slotLabels[parsed.slot],
      label: `${family} “${SCHEMA.slotValue(row, slots, slots[0])}” · ${slotLabels[parsed.slot]}`, lang: null
    };
  }

  /* ---------- groups ---------- */

  /* Every leaf, indexed by the group it belongs to. Built from listAnchors so
     the picker cannot offer less than the resolver knows about: an independent
     leaf list here drifts the moment content grows a field, and it drifts
     silently — the anchors still resolve, so a test that walks anchors stays
     green while the reviewer is never shown the part. That is how the example
     sentences, the related expressions and the "what this tests" notes were
     reachable in principle and unreportable in practice. */
  const partsIndexCache = new WeakMap();
  function partsIndex(data) {
    const cached = partsIndexCache.get(data);
    if (cached) return cached;
    const index = new Map();
    for (const leaf of listAnchors(data)) {
      const group = groupAnchor(leaf) || leaf;
      if (!index.has(group)) index.set(group, []);
      index.get(group).push(leaf);
    }
    partsIndexCache.set(data, index);
    return index;
  }

  /* The taught line is offered before the speaker's name; everything else keeps
     the order listAnchors produced, which is the schema's slot order. */
  function orderLeaves(parsed, leaves) {
    if (!(parsed.kind === "lesson" && parsed.field === "dialogue")) return leaves;
    const rank = (leaf) => {
      const slot = parseAnchor(leaf)?.slot;
      const at = DIALOGUE_PART_ORDER.indexOf(slot);
      return at === -1 ? DIALOGUE_PART_ORDER.length : at;
    };
    return leaves.slice().sort((a, b) => rank(a) - rank(b));
  }

  function partsForAnchor(anchor, data) {
    const parsed = parseAnchor(anchor);
    if (!parsed) return [];
    const found = partsIndex(data).get(anchor);
    const leaves = found || (isGroupAnchor(anchor) ? [] : [anchor]);
    return orderLeaves(parsed, leaves).map((leaf) => resolveAnchor(leaf, data)).filter((entry) => entry.ok && isText(entry.text));
  }

  function listAnchors(data) {
    const all = [];
    for (const lesson of data.lessons || []) {
      for (const direction of DIRECTIONS) {
        const content = lesson[direction];
        if (!content) continue;
        const base = `lesson:${lesson.id}/${direction}`;
        for (const field of LESSON_TEXT_FIELDS) all.push(`${base}/${field}`);
        for (const field of LESSON_META_FIELDS) if (isText(lesson[field])) all.push(`${base}/${field}`);
        /* Optional fields are enumerated only where they actually carry text, so
           the part picker never offers a reviewer an empty slot to flag. */
        for (const field of Object.keys(OBJECT_FIELDS)) {
          const holder = content[field];
          if (!holder) continue;
          for (const slot of OBJECT_FIELDS[field]) if (isText(holder[slot])) all.push(`${base}/${field}/${slot}`);
        }
        for (const field of Object.keys(ROW_FIELDS)) {
          const slots = ROW_FIELDS[field];
          (content[field] || []).forEach((row, index) => {
            for (const slot of slots) {
              if (isText(SCHEMA.slotValue(row, slots, slot))) all.push(`${base}/${field}/${index}/${slot}`);
            }
            for (const slot of ROW_NESTED_SLOTS[field] || []) {
              if (isText(nestedValue(row, slot))) all.push(`${base}/${field}/${index}/${slot}`);
            }
            for (const slot of ROW_LIST_SLOTS[field] || []) {
              (row[slot] || []).forEach((item, at) => {
                if (isText(item)) all.push(`${base}/${field}/${index}/${slot}/${at}`);
              });
            }
          });
        }
        (content.choices || []).forEach((_, index) => all.push(`${base}/choices/${index}`));
        if (isText(content.tests)) all.push(`${base}/practice/0/tests`);
        (content.practiceExtra || []).forEach((question, offset) => {
          const index = offset + 1;
          if (isText(question.prompt)) all.push(`${base}/practice/${index}/prompt`);
          if (isText(question.tests)) all.push(`${base}/practice/${index}/tests`);
          (question.choices || []).forEach((_, choice) => all.push(`${base}/practice/${index}/choices/${choice}`));
        });
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
    CULTURE_SLOTS, PITFALL_SLOTS, VARIATION_SLOTS, ADDRESS_SLOTS, SETTING_KEYS,
    ROW_FIELDS, OBJECT_FIELDS,
    VERB_SLOTS, FLUENCY_SLOTS, MATURE_SLOTS,
    ISSUE_TYPES, SEVERITIES, REVIEWER_ROLES, REGION_SUGGESTIONS,
    labelOf, labelKey, regionCodeFor, parseAnchor, isGroupAnchor, groupAnchor, resolveAnchor, partsForAnchor, listAnchors,
    validateFlag, flagKey, buildPayload, payloadBlock, extractPayload,
    flagsToMarkdown, summarise, issueTitle, issueBody, buildIssueUrl, blankIssueUrl
  };
})();

if (typeof module !== "undefined" && module.exports) module.exports = ParceroReview;
