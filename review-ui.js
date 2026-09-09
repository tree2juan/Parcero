/*
 * The reporting tab: one place to tell us a string is wrong.
 *
 * An earlier version hung a Flag button off every dialogue line, vocabulary
 * card, answer choice and library card. It worked, but it put review furniture
 * in front of learners who only wanted to read the lesson. This replaces all of
 * that with a single tab: the reviewer picks what they are reporting from two
 * dropdowns instead of hunting for a control next to it.
 *
 * Nothing about the report itself changed. Same anchors, same payload, same
 * queue, same GitHub issue. Only the way you reach it.
 */
(function () {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const STORE = { flags: "parcero-flags", reviewer: "parcero-reviewer" };

  /*
   * i18n seam. Strings rendered from markup carry data-i18n; these are the ones
   * built here, which are interpolated or pluralised and so need a function.
   */
  const EN = {
    "review.count.none": "Nothing reported yet",
    "review.count.one": "{count} report ready to send",
    "review.count.other": "{count} reports ready to send",
    "review.save": "Add to my report",
    "review.saveChanges": "Save changes",
    "review.missingText": "This text is no longer in the lesson.",
    "review.saved.one": "Saved. {count} waiting to be sent.",
    "review.saved.other": "Saved. {count} waiting to be sent.",
    "review.edit": "Edit",
    "review.remove": "Remove",
    "review.queue.empty": "Nothing reported yet.",
    "review.queue.notSent": "{summary}. Nothing has been sent anywhere yet.",
    "review.queue.yourWording": "Your wording:",
    "review.queue.drift": "This text has changed since you reported it — please reopen and check it.",
    "review.confirmClear": "Delete every report you have saved? This cannot be undone.",
    "review.status.opened": "GitHub opened in a new tab. Your reports stay here until you clear them.",
    "review.status.tooLongCopied": "That is too much to fit in a link, so it is on your clipboard — paste it into the issue GitHub just opened.",
    "review.status.tooLongDownload": "That is too much to fit in a link. Use “Download JSON” and attach the file to the issue GitHub just opened.",
    "review.status.copied": "Copied. Paste it into a GitHub issue, an email, or a message.",
    "review.status.copyFailed": "Could not reach the clipboard — use “Download JSON” instead.",
    "review.status.downloaded": "Downloaded. Attach it to a GitHub issue, or send it to a maintainer.",
    "review.status.cleared": "All reports cleared.",
    "report.scope.lesson": "The lesson I am reading",
    "report.scope.verb": "A verb in the library",
    "report.scope.fluency": "A fluency phrase",
    "report.scope.mature": "Mature language",
    "report.noLesson": "Open a lesson first and it will show up here.",
    "report.formCleared": "Form cleared.",
    "report.editing": "Editing a report you already saved."
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
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

  const preview = (text, max) => {
    const clean = String(text == null ? "" : text).replace(/\s+/g, " ").trim();
    const limit = max || 72;
    return clean.length > limit ? `${clean.slice(0, limit - 1)}…` : clean;
  };

  function persistFlags() {
    localStorage.setItem(STORE.flags, JSON.stringify(state.flags));
    refreshCounts();
  }

  function refreshCounts() {
    const total = state.flags.length;
    $("#review-count").textContent = total === 0 ? t("review.count.none") : tp("review.count", total);
    for (const id of ["#queue-submit", "#queue-copy", "#queue-download", "#queue-clear"]) {
      $(id).disabled = total === 0;
    }
  }

  /* ---------- what is on screen right now ---------- */

  /*
   * app.js already stamps the lesson heading with an anchor on every render, so
   * that attribute is the seam for "which lesson is the reader looking at".
   * Reading it avoids reaching into app.js's own state.
   */
  function currentLesson() {
    const heading = $("#lesson-heading");
    const parsed = heading && heading.dataset.anchor
      ? ParceroReview.parseAnchor(heading.dataset.anchor)
      : null;
    return parsed && parsed.kind === "lesson" ? { id: parsed.id, direction: parsed.direction } : null;
  }

  const SCOPES = ["lesson", "verb", "fluency", "mature"];

  /* The group anchors a reviewer can choose from, for one scope. */
  function groupsForScope(scope) {
    const current = data();
    if (scope === "verb") return (current.curriculum || []).map((verb) => `verb:${verb.id}`);
    if (scope === "fluency") return (current.fluencyItems || []).map((_, index) => `fluency:${index}`);
    if (scope === "mature") return (current.matureItems || []).map((_, index) => `mature:${index}`);

    const here = currentLesson();
    if (!here) return [];
    const lesson = (current.lessons || []).find((entry) => entry.id === here.id);
    const content = lesson ? lesson[here.direction] : null;
    if (!content) return [];
    const base = `lesson:${here.id}/${here.direction}`;
    const anchors = [`${base}/heading`];
    (content.dialogue || []).forEach((_, index) => anchors.push(`${base}/dialogue/${index}`));
    (content.vocabulary || []).forEach((_, index) => anchors.push(`${base}/vocabulary/${index}`));
    anchors.push(`${base}/note`, `${base}/prompt`);
    if ((content.choices || []).length > 0) anchors.push(`${base}/choices`);
    return anchors;
  }

  /*
   * Label an item by the words it actually contains. A reviewer recognises
   * "¿Me regalas un tinto?" instantly; "Dialogue line 3" makes them count.
   */
  function itemLabel(anchor) {
    const parts = ParceroReview.partsForAnchor(anchor, data());
    if (parts.length === 0) return anchor;
    if (anchor.startsWith("verb:") && parts.length > 1) {
      return `${preview(parts[0].text, 28)} — ${preview(parts[1].text, 40)}`;
    }
    return preview(parts[0].text);
  }

  /* ---------- the picker ---------- */

  function renderScopes() {
    const chosen = $("#report-scope").value;
    $("#report-scope").innerHTML = SCOPES
      .map((code) => `<option value="${code}">${escapeHtml(t(`report.scope.${code}`))}</option>`)
      .join("");
    if (chosen) $("#report-scope").value = chosen;
  }

  function renderItems(preferred, allowMissing) {
    const scope = $("#report-scope").value || "lesson";
    const anchors = groupsForScope(scope);
    const select = $("#report-item");
    select.innerHTML = anchors
      .map((anchor) => `<option value="${escapeHtml(anchor)}">${escapeHtml(itemLabel(anchor))}</option>`)
      .join("");

    /*
     * A saved report can point at a lesson the reader has since navigated away
     * from. When reopening one for editing, offer it as its own option so the
     * edit lands on the string that was actually reported. Only then: on an
     * ordinary re-render a stale anchor must fall away, or paging to the next
     * lesson would keep showing the previous one's line.
     */
    if (preferred && allowMissing && !anchors.includes(preferred)) {
      const option = document.createElement("option");
      option.value = preferred;
      option.textContent = itemLabel(preferred);
      select.prepend(option);
    }
    if (preferred && [...select.options].some((option) => option.value === preferred)) {
      select.value = preferred;
    }
    select.disabled = select.options.length === 0;
  }

  function renderParts(keepAnchor) {
    const item = $("#report-item").value;
    const parts = item ? ParceroReview.partsForAnchor(item, data()) : [];
    $("#flag-part").innerHTML = parts
      .map((part) => `<option value="${escapeHtml(part.anchor)}">${escapeHtml(part.slotLabel)}</option>`)
      .join("");
    if (keepAnchor && parts.some((part) => part.anchor === keepAnchor)) $("#flag-part").value = keepAnchor;
    $("#flag-part").disabled = parts.length <= 1;
    showOriginal();
  }

  function showOriginal() {
    const anchor = $("#flag-part").value;
    const original = $("#flag-original");
    if (!anchor) {
      original.textContent = t("report.noLesson");
      original.removeAttribute("lang");
      $("#flag-location").textContent = "";
      return;
    }
    const resolved = ParceroReview.resolveAnchor(anchor, data());
    original.textContent = resolved.ok ? resolved.text : t("review.missingText");
    if (resolved.ok && resolved.lang) original.setAttribute("lang", resolved.lang);
    else original.removeAttribute("lang");
    $("#flag-location").textContent = resolved.ok ? resolved.label : anchor;
  }

  /* Rebuild every control in the tab. Safe to call whenever the page changes. */
  function renderPanel() {
    const item = $("#report-item").value;
    const part = $("#flag-part").value;
    renderScopes();
    fillSelect($("#flag-type"), ParceroReview.ISSUE_TYPES, "issueType");
    fillSelect($("#flag-severity"), ParceroReview.SEVERITIES, "severity");
    fillSelect($("#flag-role"), ParceroReview.REVIEWER_ROLES, "role");
    /* Suggestions show in the reviewer's language; the code they map back to does not. */
    $("#flag-regions").innerHTML = ParceroReview.REGION_SUGGESTIONS
      .map(([code, fallback]) => `<option value="${escapeHtml(label("region", code, fallback))}"></option>`).join("");
    renderItems(item);
    renderParts(part);
    refreshCounts();
    renderQueue();
  }

  function fillSelect(select, pairs, group) {
    const chosen = select.value;
    select.innerHTML = pairs
      .map(([code, english]) => `<option value="${escapeHtml(code)}">${escapeHtml(label(group, code, english))}</option>`)
      .join("");
    if (chosen) select.value = chosen;
  }

  /* ---------- the form ---------- */

  function resetForm() {
    state.editing = null;
    $("#flag-suggestion").value = "";
    $("#flag-comment").value = "";
    $("#flag-error").textContent = "";
    $("#flag-type").value = "not-natural";
    $("#flag-severity").value = "should-fix";
    $("#flag-role").value = state.reviewer.role;
    $("#flag-region").value = state.reviewer.region || "";
    $("#flag-save").textContent = t("review.save");
  }

  /* Load a saved report back into the form so it can be corrected. */
  function editFlag(index) {
    const flag = state.flags[index];
    if (!flag) return;
    const parsed = ParceroReview.parseAnchor(flag.anchor);
    state.editing = index;
    $("#report-scope").value = parsed && parsed.kind === "lesson" ? "lesson" : (parsed || {}).kind || "lesson";
    renderItems(ParceroReview.groupAnchor(flag.anchor) || flag.anchor, true);
    renderParts(flag.anchor);
    $("#flag-type").value = flag.issueType;
    $("#flag-severity").value = flag.severity;
    $("#flag-role").value = flag.role;
    $("#flag-region").value = flag.region || "";
    $("#flag-suggestion").value = flag.suggestion || "";
    $("#flag-comment").value = flag.comment || "";
    $("#flag-error").textContent = "";
    $("#flag-save").textContent = t("review.saveChanges");
    $("#review-status").textContent = t("report.editing");
    $("#flag-type").focus();
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
    resetForm();
    persistFlags();
    renderQueue();
    $("#review-status").textContent = tp("review.saved", state.flags.length);
  }

  /* ---------- the queue ---------- */

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

  const openReportTab = () => {
    $("#report-tab").click();
    $("#report-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  };

  $("#report-scope").addEventListener("change", () => { renderItems(); renderParts(); });
  $("#report-item").addEventListener("change", () => renderParts());
  $("#flag-part").addEventListener("change", showOriginal);
  $("#flag-save").addEventListener("click", saveFlag);
  $("#flag-cancel").addEventListener("click", () => {
    resetForm();
    $("#review-status").textContent = t("report.formCleared");
  });

  $("#queue-list").addEventListener("click", (event) => {
    const edit = event.target.closest("[data-queue-edit]");
    if (edit) {
      editFlag(Number(edit.dataset.queueEdit));
      return;
    }
    const remove = event.target.closest("[data-queue-remove]");
    if (!remove) return;
    state.flags.splice(Number(remove.dataset.queueRemove), 1);
    if (state.editing !== null) resetForm();
    persistFlags();
    renderQueue();
  });

  $("#queue-submit").addEventListener("click", submitFlags);
  $("#queue-copy").addEventListener("click", copyMarkdown);
  $("#queue-download").addEventListener("click", downloadJson);
  $("#queue-clear").addEventListener("click", () => {
    if (!window.confirm(t("review.confirmClear"))) return;
    state.flags = [];
    resetForm();
    persistFlags();
    renderQueue();
    $("#queue-status").textContent = t("review.status.cleared");
  });

  $("#lesson-review-start").addEventListener("click", openReportTab);
  $("#footer-report-link").addEventListener("click", (event) => {
    event.preventDefault();
    openReportTab();
  });

  /* The tab shows one lesson's strings, so rebuild it whenever that could change. */
  $("#report-tab").addEventListener("click", () => renderPanel());
  for (const id of ["#previous-lesson", "#next-lesson"]) {
    $(id).addEventListener("click", () => renderPanel());
  }
  document.querySelectorAll("input[name=direction]").forEach((input) => {
    input.addEventListener("change", () => renderPanel());
  });

  resetForm();
  renderPanel();
})();
