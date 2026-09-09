/*
 * Review mode: the in-page flagging surface for native speakers.
 *
 * Learners never see any of this. A reviewer turns review mode on (header
 * button, or a ?review=1 link a maintainer sends them), which reveals a Flag
 * control on every reviewable block. Flags collect in this browser until the
 * reviewer submits them as one GitHub issue.
 */
(function () {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const STORE = { mode: "parcero-review-mode", flags: "parcero-flags", reviewer: "parcero-reviewer" };

  /*
   * i18n seam. Strings rendered from markup carry data-i18n; these are the ones
   * built here, which are interpolated or pluralised and so need a function.
   * Until i18n.js lands, the English table below is the source of truth; after
   * it lands this picks up translations with no further edits.
   */
  const EN = {
    "review.mode.off": "Review mode",
    "review.mode.on": "Review mode: on",
    "review.count.none": "No flags yet",
    "review.count.one": "{count} flag saved",
    "review.count.other": "{count} flags saved",
    "review.flag": "Flag",
    "review.flagged.one": "Flagged ({count})",
    "review.flagged.other": "Flagged ({count})",
    "review.flagAria": "Flag this for native-speaker revision",
    "review.flaggedAria.one": "Flagged once. Add another note, or review it.",
    "review.flaggedAria.other": "Flagged {count} times. Add another note, or review them.",
    "review.save": "Add to my flags",
    "review.saveChanges": "Save changes",
    "review.missingText": "This text is no longer in the lesson.",
    "review.saved.one": "Flag saved. {count} waiting to be submitted.",
    "review.saved.other": "Flags saved. {count} waiting to be submitted.",
    "review.edit": "Edit",
    "review.remove": "Remove",
    "review.queue.empty": "Nothing flagged yet.",
    "review.queue.notSent": "{summary}. Nothing has been sent anywhere yet.",
    "review.queue.yourWording": "Your wording:",
    "review.queue.drift": "This text has changed since you flagged it — please reopen and check it.",
    "review.confirmClear": "Delete every flag you have saved? This cannot be undone.",
    "review.status.opened": "GitHub opened in a new tab. Your flags stay here until you clear them.",
    "review.status.tooLongCopied": "That is too much to fit in a link, so it is on your clipboard — paste it into the issue GitHub just opened.",
    "review.status.tooLongDownload": "That is too much to fit in a link. Use “Download JSON” and attach the file to the issue GitHub just opened.",
    "review.status.copied": "Copied. Paste it into a GitHub issue, an email, or a message.",
    "review.status.copyFailed": "Could not reach the clipboard — use “Download JSON” instead.",
    "review.status.downloaded": "Downloaded. Attach it to a GitHub issue, or send it to a maintainer.",
    "review.status.cleared": "All flags cleared."
  };

  const direction = () => (document.querySelector("input[name=direction]:checked") || {}).value || "es";
  const fill = (text, values) => Object.entries(values || {})
    .reduce((out, [key, value]) => out.split(`{${key}}`).join(value), text);

  const t = (key, values) => (window.ParceroI18n
    ? window.ParceroI18n.t(key, direction(), values)
    : fill(EN[key] === undefined ? key : EN[key], values));

  const tp = (key, count, values) => (window.ParceroI18n
    ? window.ParceroI18n.tPlural(key, direction(), count, values)
    : fill(EN[`${key}.${count === 1 ? "one" : "other"}`] === undefined ? key : EN[`${key}.${count === 1 ? "one" : "other"}`], { count, ...values }));

  /* Translated display label for a [code, label] pair, falling back to English. */
  function label(group, code, fallback) {
    if (!window.ParceroI18n) return fallback;
    const key = ParceroReview.labelKey(group, code);
    const value = window.ParceroI18n.t(key, direction());
    return value && value !== key ? value : fallback;
  }

  /* Translated region labels, keyed by code, for matching what the reviewer typed. */
  const regionLabels = () => ParceroReview.REGION_SUGGESTIONS
    .reduce((all, [code, fallback]) => Object.assign(all, { [code]: label("region", code, fallback) }), {});

  const state = {
    mode: false,
    flags: readJson(STORE.flags, []),
    reviewer: readJson(STORE.reviewer, { role: "native-es-co", region: "" }),
    editing: null
  };

  function readJson(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "null");
      return value === null ? fallback : value;
    } catch {
      return fallback;
    }
  }

  const data = () => ({
    lessons: typeof lessons === "undefined" ? [] : lessons,
    curriculum: typeof curriculum === "undefined" ? [] : curriculum,
    fluencyItems: typeof fluencyItems === "undefined" ? [] : fluencyItems,
    matureItems: typeof matureItems === "undefined" ? [] : matureItems
  });

  const escapeHtml = (value) => String(value == null ? "" : value)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  function persistFlags() {
    localStorage.setItem(STORE.flags, JSON.stringify(state.flags));
    refreshCounts();
    applyMarks();
  }

  /* ---------- review mode ---------- */

  function setMode(on) {
    state.mode = Boolean(on);
    localStorage.setItem(STORE.mode, state.mode ? "true" : "false");
    document.body.classList.toggle("review-mode", state.mode);
    $("#review-mode").setAttribute("aria-pressed", state.mode ? "true" : "false");
    $("#review-mode").textContent = t(state.mode ? "review.mode.on" : "review.mode.off");
    $("#review-bar").hidden = !state.mode;
    sync();
  }

  function refreshCounts() {
    const total = state.flags.length;
    $("#review-count").textContent = total === 0 ? t("review.count.none") : tp("review.count", total);
    $("#review-queue-open").disabled = total === 0;
  }

  /* ---------- flag affordances ---------- */

  function decorate() {
    document.querySelectorAll("[data-anchor]").forEach((element) => {
      const anchor = element.dataset.anchor;
      if (!anchor || element.querySelector(":scope > .flag-button")) return;
      if (ParceroReview.partsForAnchor(anchor, data()).length === 0) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "flag-button";
      button.dataset.flagAnchor = anchor;
      button.innerHTML = '<span aria-hidden="true">⚑</span><span class="flag-button-text"></span>';
      element.classList.add("flaggable");
      element.appendChild(button);
    });
  }

  function applyMarks() {
    const counts = new Map();
    for (const flag of state.flags) {
      const group = ParceroReview.groupAnchor(flag.anchor);
      if (group) counts.set(group, (counts.get(group) || 0) + 1);
    }
    document.querySelectorAll("[data-anchor]").forEach((element) => {
      const total = counts.get(element.dataset.anchor) || 0;
      element.classList.toggle("is-flagged", total > 0);
      const button = element.querySelector(":scope > .flag-button");
      if (!button) return;
      button.querySelector(".flag-button-text").textContent = total > 0 ? tp("review.flagged", total) : t("review.flag");
      button.setAttribute("aria-label", total > 0 ? tp("review.flaggedAria", total) : t("review.flagAria"));
    });
  }

  let observer = null;
  function sync() {
    if (observer) observer.disconnect();
    decorate();
    applyMarks();
    if (observer) observer.observe(document.body, { childList: true, subtree: true });
  }

  /* ---------- capture dialog ---------- */

  function fillSelect(select, pairs, group) {
    select.innerHTML = pairs
      .map(([code, english]) => `<option value="${escapeHtml(code)}">${escapeHtml(label(group, code, english))}</option>`)
      .join("");
  }

  function openFlagDialog(anchor, editIndex) {
    const parts = ParceroReview.partsForAnchor(anchor, data());
    if (parts.length === 0) return;
    const existing = typeof editIndex === "number" ? state.flags[editIndex] : null;
    state.editing = typeof editIndex === "number" ? editIndex : null;

    $("#flag-part").innerHTML = parts
      .map((part) => `<option value="${escapeHtml(part.anchor)}">${escapeHtml(part.slotLabel)}</option>`)
      .join("");
    $("#flag-part").value = existing ? existing.anchor : parts[0].anchor;
    $("#flag-part").disabled = parts.length === 1;

    $("#flag-type").value = existing ? existing.issueType : "not-natural";
    $("#flag-severity").value = existing ? existing.severity : "should-fix";
    $("#flag-role").value = existing ? existing.role : state.reviewer.role;
    $("#flag-region").value = existing ? existing.region || "" : state.reviewer.region || "";
    $("#flag-suggestion").value = existing ? existing.suggestion || "" : "";
    $("#flag-comment").value = existing ? existing.comment || "" : "";
    $("#flag-error").textContent = "";
    $("#flag-save").textContent = t(existing ? "review.saveChanges" : "review.save");
    showOriginal();
    $("#flag-dialog").showModal();
    $("#flag-type").focus();
  }

  function showOriginal() {
    const resolved = ParceroReview.resolveAnchor($("#flag-part").value, data());
    const original = $("#flag-original");
    original.textContent = resolved.ok ? resolved.text : t("review.missingText");
    if (resolved.ok && resolved.lang) original.setAttribute("lang", resolved.lang);
    else original.removeAttribute("lang");
    $("#flag-location").textContent = resolved.ok ? resolved.label : $("#flag-part").value;
  }

  function saveFlag() {
    const anchor = $("#flag-part").value;
    const resolved = ParceroReview.resolveAnchor(anchor, data());
    const region = $("#flag-region").value.trim();
    const flag = {
      anchor,
      issueType: $("#flag-type").value,
      severity: $("#flag-severity").value,
      role: $("#flag-role").value,
      region,
      regionCode: ParceroReview.regionCodeFor(region, regionLabels()),
      original: resolved.ok ? resolved.text : "",
      suggestion: $("#flag-suggestion").value.trim(),
      comment: $("#flag-comment").value.trim(),
      flaggedAt: new Date().toISOString()
    };
    const errors = ParceroReview.validateFlag(flag);
    if (errors.length > 0) {
      $("#flag-error").textContent = errors[0];
      return;
    }
    state.reviewer = { role: flag.role, region: flag.region };
    localStorage.setItem(STORE.reviewer, JSON.stringify(state.reviewer));

    if (state.editing !== null) state.flags[state.editing] = flag;
    else {
      const duplicate = state.flags.findIndex((item) => ParceroReview.flagKey(item) === ParceroReview.flagKey(flag));
      if (duplicate === -1) state.flags.push(flag);
      else state.flags[duplicate] = flag;
    }
    state.editing = null;
    persistFlags();
    $("#flag-dialog").close();
    $("#review-status").textContent = tp("review.saved", state.flags.length);
  }

  /* ---------- queue dialog ---------- */

  function renderQueue() {
    const current = data();
    $("#queue-summary").textContent = state.flags.length === 0
      ? t("review.queue.empty")
      : t("review.queue.notSent", { summary: ParceroReview.summarise(state.flags, current) });
    $("#queue-list").innerHTML = state.flags.map((flag, index) => {
      const resolved = ParceroReview.resolveAnchor(flag.anchor, current);
      const drifted = resolved.ok && resolved.text !== flag.original;
      const severity = label("severity", flag.severity, ParceroReview.labelOf(ParceroReview.SEVERITIES, flag.severity));
      const problem = label("issueType", flag.issueType, ParceroReview.labelOf(ParceroReview.ISSUE_TYPES, flag.issueType));
      return `<article class="queue-item">
        <p class="queue-where">${escapeHtml(resolved.ok ? resolved.label : flag.anchor)}</p>
        <p class="queue-problem"><span class="tag">${escapeHtml(severity)}</span> ${escapeHtml(problem)}</p>
        <p class="queue-original">${escapeHtml(flag.original)}</p>
        ${flag.suggestion ? `<p class="queue-suggestion"><strong>${escapeHtml(t("review.queue.yourWording"))}</strong> ${escapeHtml(flag.suggestion)}</p>` : ""}
        ${flag.comment ? `<p class="queue-comment">${escapeHtml(flag.comment)}</p>` : ""}
        ${drifted ? `<p class="queue-drift">${escapeHtml(t("review.queue.drift"))}</p>` : ""}
        <p class="queue-actions">
          <button type="button" class="text-button" data-queue-edit="${index}">${escapeHtml(t("review.edit"))}</button>
          <button type="button" class="text-button" data-queue-remove="${index}">${escapeHtml(t("review.remove"))}</button>
        </p>
      </article>`;
    }).join("");
  }

  function openQueue() {
    renderQueue();
    $("#queue-status").textContent = "";
    $("#queue-dialog").showModal();
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const field = document.createElement("textarea");
      field.value = text;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      let copied = false;
      try { copied = document.execCommand("copy"); } catch { copied = false; }
      field.remove();
      return copied;
    }
  }

  const fullBody = (payload) => `${ParceroReview.issueBody(state.flags, data())}\n\n${ParceroReview.payloadBlock(payload)}`;

  async function submitFlags() {
    const { url, tooLong, payload } = ParceroReview.buildIssueUrl(state.flags, data());
    if (!tooLong) {
      window.open(url, "_blank", "noopener");
      $("#queue-status").textContent = t("review.status.opened");
      return;
    }
    const copied = await copyText(fullBody(payload));
    window.open(ParceroReview.blankIssueUrl(), "_blank", "noopener");
    $("#queue-status").textContent = t(copied ? "review.status.tooLongCopied" : "review.status.tooLongDownload");
  }

  async function copyMarkdown() {
    const copied = await copyText(fullBody(ParceroReview.buildPayload(state.flags, {})));
    $("#queue-status").textContent = t(copied ? "review.status.copied" : "review.status.copyFailed");
  }

  function downloadJson() {
    const payload = ParceroReview.buildPayload(state.flags, {});
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `parcero-flags-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    $("#queue-status").textContent = t("review.status.downloaded");
  }

  /* ---------- wiring ---------- */

  fillSelect($("#flag-type"), ParceroReview.ISSUE_TYPES, "issueType");
  fillSelect($("#flag-severity"), ParceroReview.SEVERITIES, "severity");
  fillSelect($("#flag-role"), ParceroReview.REVIEWER_ROLES, "role");
  /* Suggestions show in the reviewer's language; the code they map back to does not. */
  $("#flag-regions").innerHTML = ParceroReview.REGION_SUGGESTIONS
    .map(([code, fallback]) => `<option value="${escapeHtml(label("region", code, fallback))}"></option>`).join("");

  document.addEventListener("click", (event) => {
    const flagButton = event.target.closest(".flag-button");
    if (!flagButton) return;
    event.preventDefault();
    event.stopPropagation();
    openFlagDialog(flagButton.dataset.flagAnchor);
  });

  $("#review-mode").addEventListener("click", () => setMode(!state.mode));
  $("#review-mode-off").addEventListener("click", () => {
    setMode(false);
    $("#review-mode").focus();
  });
  $("#review-queue-open").addEventListener("click", openQueue);
  $("#lesson-review-start").addEventListener("click", () => {
    setMode(true);
    $("#review-bar").scrollIntoView({ behavior: "smooth", block: "center" });
  });

  $("#flag-part").addEventListener("change", showOriginal);
  $("#flag-save").addEventListener("click", saveFlag);
  $("#flag-cancel").addEventListener("click", () => {
    state.editing = null;
    $("#flag-dialog").close();
  });

  $("#queue-list").addEventListener("click", (event) => {
    const edit = event.target.closest("[data-queue-edit]");
    if (edit) {
      const index = Number(edit.dataset.queueEdit);
      $("#queue-dialog").close();
      openFlagDialog(state.flags[index].anchor, index);
      return;
    }
    const remove = event.target.closest("[data-queue-remove]");
    if (!remove) return;
    state.flags.splice(Number(remove.dataset.queueRemove), 1);
    persistFlags();
    renderQueue();
    if (state.flags.length === 0) $("#queue-dialog").close();
  });

  $("#queue-submit").addEventListener("click", submitFlags);
  $("#queue-copy").addEventListener("click", copyMarkdown);
  $("#queue-download").addEventListener("click", downloadJson);
  $("#queue-clear").addEventListener("click", () => {
    if (!window.confirm(t("review.confirmClear"))) return;
    state.flags = [];
    persistFlags();
    renderQueue();
    $("#queue-dialog").close();
    $("#review-status").textContent = t("review.status.cleared");
  });
  $("#queue-close").addEventListener("click", () => $("#queue-dialog").close());

  document.querySelectorAll("input[name=direction]").forEach((input) => {
    input.addEventListener("change", () => {
      setMode(state.mode);
      refreshCounts();
    });
  });

  observer = new MutationObserver(() => sync());
  const params = new URLSearchParams(window.location.search);
  const invited = params.get("review") === "1" || window.location.hash === "#review";
  setMode(invited || localStorage.getItem(STORE.mode) === "true");
  refreshCounts();
})();
