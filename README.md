<p align="center">
  <img src="assets/social-card.png" alt="Parcero — Colombian Spanish in context. Language belongs in a conversation." width="820">
</p>

<h1 align="center">Parcero</h1>

<p align="center">
  <strong>Learn Colombian Spanish the way it is actually spoken — in situations, not word lists.</strong>
</p>

<p align="center">
  <a href="https://tree2juan.github.io/Parcero/"><strong>▶ Open the app</strong></a>
  ·
  <a href="#lessons">Lessons</a>
  ·
  <a href="#add-a-lesson">Add a lesson</a>
  ·
  <a href="#native-speaker-review">Review a lesson</a>
</p>

<p align="center">
  <a href="https://github.com/tree2juan/Parcero/actions/workflows/ci.yml"><img src="https://github.com/tree2juan/Parcero/actions/workflows/ci.yml/badge.svg" alt="CI status"></a>
  <a href="https://github.com/tree2juan/Parcero/actions/workflows/deploy-pages.yml"><img src="https://github.com/tree2juan/Parcero/actions/workflows/deploy-pages.yml/badge.svg" alt="Pages deployment status"></a>
  <img src="https://img.shields.io/badge/dependencies-none-146c4d" alt="No dependencies">
  <img src="https://img.shields.io/badge/data-stays%20in%20your%20browser-146c4d" alt="Progress stored locally">
</p>

---

## What this is

Most language apps teach you words. Parcero teaches you **moments** — the café where `tinto` means black coffee and not red wine, the meeting where `quedó` means "it's done", the interview where `usted` is warmth rather than distance.

Every lesson is one real situation, taught from both directions:

- **English speakers** learning Colombian Spanish
- **Spanish speakers** strengthening practical English

It is a single static page. No build step, no framework, no account, no tracking, no network calls. Your progress lives in your own browser's storage and nowhere else.

## Try it

**→ [tree2juan.github.io/Parcero](https://tree2juan.github.io/Parcero/)**

Or run it locally — any static server will do:

```sh
git clone https://github.com/tree2juan/Parcero.git
cd Parcero
python3 -m http.server 8000
```

Then open `http://localhost:8000`. You can also just open `index.html` directly in a browser.

## How a lesson works

Each lesson has three tabs, in the order a real conversation demands them:

| Tab | What it gives you |
| --- | --- |
| **Dialogue** | A short exchange with the target language, a natural translation, and a plain-English pronunciation respelling. A "Listen" button reads it aloud with your browser's speech engine. |
| **Understand** | The vocabulary *as used in this exchange*, plus a Colombian context note explaining why the phrasing works and where it would mislead you. |
| **Practice** | One retrieval question that checks meaning-in-context rather than translation. |

<a id="lessons"></a>

## The lesson set

Eight lessons spanning starter through extending, mapped onto the roadmap's pathways:

| # | Lesson | Level | Teaches |
| --- | --- | --- | --- |
| 1 | Coffee and a quick chat | Starter · Everyday life | `¿Me regalas...?`, `tinto`, `ya` as "right away" |
| 2 | A ride downtown | Starter · Getting around | Agreeing a fare before the trip; `¿Cuánto me cobra?` |
| 3 | At the market | Starter · Everyday life | `¿A cómo está...?`, `la ñapa`, vendor address terms |
| 4 | What's the plan? | Developing · Social life | `parche`, `de una`, `cuadrar`, and paisa `vos` |
| 5 | A doctor's appointment | Developing · Health | `me duele`, `hace + time`, English present perfect |
| 6 | The team stand-up | Developing · Workplace | `quedó`, `pendiente`, `hacer seguimiento`, hedged status updates |
| 7 | In the seminar | Extending · Academic | `matizar`, `quisiera`, academic hedging in both languages |
| 8 | The job interview | Extending · Professional | `llevo tres años trabajando`, `con mucho gusto`, concrete examples |

Alongside the lessons there is a reference **library**: 200 high-frequency verbs with their most useful forms, a fluency list of connectors and softeners, and an age-gated recognition reference for insulting or adult language — included so learners can *understand* it and de-escalate, never to direct it at anyone.

The verb list was seeded from published frequency data, so the **level** on each card is real. The **register** and **regionality** fields are not: every entry still carries the same placeholder text, because no Colombian speaker has been over them. Those two labels are therefore **not displayed**. Showing them would have stated the same unverified claim two hundred times in the app's own voice. They stay in `data/curriculum.js`, they remain reportable through the Report an error tab, and each one appears on its card as soon as a real value replaces the placeholder and `reviewStatus` is dropped from that verb.

## Placement and pathways

The app opens with an optional five-signal placement check: receptive understanding, productive use, grammar, context, and pronunciation. Every question includes **"I don't know"**, which records a genuine knowledge gap instead of forcing a guess — a wrong guess and an honest gap mean different things, and the app treats them differently.

```mermaid
flowchart LR
  A[Placement check<br/>5 signals] --> B[Contextual<br/>foundations]
  B --> C[Year 12<br/>local mastery]
  C --> D[Collegiate<br/>academic]
  C --> E[Professional<br/>pathways]
  E --> E1[Customer service]
  E --> E2[Office & technical]
  E --> E3[Healthcare]
  E --> E4[Interviews]
```

Results stay in browser storage and identify a starting level plus the skills to focus on first.

<a id="add-a-lesson"></a>

## Adding a lesson

Lessons live in [`data/lessons.js`](data/lessons.js) as plain objects — no build step, no JSON schema to learn. Add an entry to the `lessons` array and it appears in the picker automatically.

```js
{
  id: "at-the-bank",              // kebab-case, unique
  level: "Developing · Everyday life",
  skills: ["listening", "speaking", "context"],
  domain: "civic life",
  register: "formal polite",
  pathways: ["year-12-local-mastery"],
  review: "pending",              // "pending" until a native speaker signs off
  es: {
    title: "...",
    situation: "...",
    dialogue: [
      // [speaker, target language, natural translation, pronunciation respelling]
      ["Cajero", "¿En qué le puedo colaborar?", "How can I help you?", "en keh leh PWEH-doh koh-lah-boh-RAR"]
    ],
    vocabulary: [["term", "how it is used here"]],
    note: "The Colombian context that makes this phrasing work.",
    prompt: "A meaning-in-context question",
    choices: ["...", "...", "..."],
    answer: 0                     // index into choices
  },
  en: { /* the same shape, with English as the target language */ }
}
```

House rules for content:

- **Both directions, always.** A lesson without its `en` counterpart will fail CI.
- **Never present a regional expression as universal.** Say where it is used and by whom.
- **Teach the pragmatics, not just the words.** `usted` vs `tú` vs `vos` carries more meaning than most vocabulary does.
- **Leave `review: "pending"`.** The lesson keeps inviting a native speaker to check it until one has.

## Tests

Content is validated by a dependency-free suite. Node 20+ only, nothing to install:

```sh
node --test test/*.test.js
```

It checks that every lesson teaches in both directions, that dialogue and vocabulary rows match the shape the renderers expect, that each practice question points at a real answer among distinct choices, that verb entries are complete and uniquely identified, that every review anchor resolves to a real string, and — the one that catches the most damage — that **every element `app.js` and `review-ui.js` look up actually exists in `index.html`**. CI runs the same command on every pull request.

> Pass the glob, not the bare directory. Node 22 and newer resolve `node --test test/` as a *module* path and fail with `Cannot find module`; `test/*.test.js` works on every version.

<a id="native-speaker-review"></a>

## Native-speaker review

Regional usage is the part most easily got wrong, so the app is honest about it: every lesson carries a `review` field, and while it is `"pending"` the lesson invites a native speaker to check it. Nothing unverified is presented as settled.

Review happens at two grains, and both need a reviewer who knows the language, not the codebase.

### Report an error from the page

The fastest correction is the one made while looking at the mistake. Every lesson has a **Report an error** tab, next to Dialogue, Understand and Practice. Nothing is added to the lesson itself: no controls hang off individual lines, so a learner reading a lesson never has to see review furniture.

The tab asks two questions to find the string: **what are you reporting on** — the lesson you are reading, a verb, a fluency phrase, or a mature-language entry — and **which one**, listed by its own words rather than by position. It then narrows to the exact part: the Spanish line, the translation, the pronunciation respelling, the speaker's name, and so on. The text you picked is quoted back to you before you say anything about it.

From there it asks what is wrong (not natural, wrong region, wrong register, mistranslation, misleading pronunciation, spelling, culture, risky, dated), how much it matters, and — the field that does the real work — **how you would say it instead**. Reports collect in your browser, so you can read a whole lesson and report as you go, and any saved report can be reopened and edited. A half-written report keeps hold of the line it is about: paging to the next lesson or switching language will not quietly re-point it at something else. **Open a GitHub issue with these** then opens a prefilled issue containing both a readable report and a machine-readable payload. Copy-to-clipboard and download-JSON are offered as fallbacks, including when a batch is too large for a URL.

Nothing is sent anywhere until you press submit. Reports live only in your browser, under their own storage key, so *Reset progress* never destroys them.

Because regional usage is the thing this project most needs help with, the form also asks where you speak from. Ten Colombian regions are offered as suggestions, but the field is open — type wherever you are from and it is recorded in your own words. Where what you typed matches a suggestion, the report also carries a stable region code, so that a year of reports can be counted by region without anyone having to guess that "Medellin" and "Medellín and Antioquia (paisa)" meant the same place. `node scripts/review-flags.js` prints that tally.

### Sign off a whole lesson

For a considered pass over a complete lesson, open **[Issues → New issue → Lesson review](https://github.com/tree2juan/Parcero/issues/new?template=lesson-review.yml)**, pick a lesson, and answer a short form covering naturalness, regional framing, register, and pronunciation. A maintainer applies the wording and flips that lesson to `"reviewed"`.

Aim for two sign-offs per lesson: a native Colombian Spanish speaker for the `es` side, and a native or expert English speaker for the `en` side.

### Triaging flags as a maintainer

Every flag stores an **anchor** — a stable address such as `lesson:greeting-at-the-cafe/es/dialogue/1/target` — plus the exact text the reviewer was looking at. Resolve a filed issue back to the lines to edit:

```sh
node scripts/review-flags.js flags.json          # a downloaded payload
gh issue view 42 --json body -q .body | node scripts/review-flags.js -
node scripts/review-flags.js flags.json --format markdown   # to paste back into the issue
```

For each flag it prints the file, the field, the current wording, and the suggestion, then sorts them:

- **Ready** — the text still matches what the reviewer saw. Apply the suggestion.
- **Drifted** — the text changed after it was flagged. The tool refuses to call these ready, because applying one blind would silently revert a newer edit. Re-read it and decide.
- **Unresolved** — the anchor no longer points at anything, usually because content was deleted or renamed. Exits non-zero.

Once a lesson's flags are applied and both sides are signed off, set its `review` field to `"reviewed"`.

The mature-language reference needs the same care from qualified reviewers — severity labels, local usage, and de-escalation guidance. Content that encourages harassment does not belong here.

## Project structure

```
index.html          The whole app shell — every element id app.js binds to
app.js              Rendering, placement scoring, lesson navigation, progress
review.js           Review anchors: parse, resolve, validate, build issue payloads
review-ui.js        The Report an error tab: content picker, report form, queue, issue export
styles.css          Design system: light/dark tokens, layout, components
data/lessons.js     The lessons
data/curriculum.js  200 verbs, fluency connectors, mature-language reference
scripts/            Maintainer tools: triage flags back to the lines to edit
assets/             Favicon, social card, roadmap diagram
test/               Dependency-free content validation
.github/workflows/  CI on every PR, Pages deployment on main
```

## Accessibility and privacy

- Semantic landmarks, a skip link, ARIA tabs, and live regions for the parts that update.
- Visible focus rings, and full keyboard operation of lessons, tabs, and the placement check.
- Respects `prefers-color-scheme` (light and dark) and `prefers-reduced-motion`.
- No analytics, no cookies, no third-party requests. `localStorage` holds your direction, progress, and placement result — "Reset progress" clears all of it.

## Deployment

Pushes to `main` publish the repository root to GitHub Pages via [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml). The Pages source is set to **GitHub Actions** (Settings → Pages → Build and deployment). Until a commit lands on `main`, the site returns 404 — there is nothing to serve.

## Contributing

Lesson contributions, corrections to regional framing, and accessibility fixes are all welcome. Open an issue first for new lessons so we can check the situation is not already covered, run `node --test test/*.test.js` before opening a pull request, and keep the app dependency-free.
