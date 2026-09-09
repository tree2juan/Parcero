# Parcero: Colombian Spanish in Context

Parcero is a free, static learning app for understanding Colombian Spanish through real situations—not isolated memorization. It supports both directions:

- English speakers learning Colombian Spanish
- Spanish speakers strengthening practical English

## Learning approach

Each lesson combines a short contextual dialogue, vocabulary as it is used, regional and cultural notes, an explanation of why a phrase works, pronunciation guidance, and retrieval practice. Progress is stored only in the learner's browser.

The current set is eight lessons spanning starter, developing, and extending levels: ordering coffee, taking a taxi, the market and *la ñapa*, making weekend plans, a clinic visit, a team stand-up, a university seminar, and a job interview. Together they cover the everyday, healthcare, workplace, academic, and interview pathways.

The initial content focuses on everyday Colombian usage. Regional terms and explanations should be reviewed by Colombian Spanish speakers before publishing.

## Placement and pathways

The app begins with a five-signal placement check: receptive understanding, productive use, grammar, context, and pronunciation use. Every item includes **I don't know**, which records a knowledge gap rather than forcing a guess. Results stay in browser storage and identify a starting level and focus skills.

The proficiency roadmap progresses from contextual foundations through functional local **Year 12 mastery**: independent listening, speaking, reading, writing, cultural context, and regional pragmatics. Beyond that, the academic pathway covers collegiate reading, lectures, argumentation, research writing, formal register, and discipline vocabulary. Professional pathways cover customer service, office collaboration, technical work, healthcare, education, and interviews.

## Run locally

This dependency-free site can be opened directly in a browser, or served from the repository root:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Tests

Content is validated by a dependency-free suite that runs on Node 20+:

```sh
node --test test/
```

It checks that every lesson teaches in both directions, that dialogue and vocabulary rows have the shape the renderers expect, that each practice question points at a real answer, that verb entries are complete and uniquely identified, and that every element `app.js` looks up actually exists in `index.html`. CI runs the same command on every pull request.

## Content contributions

Lessons live in `data/lessons.js`, and the verb and fluency starting lists live in `data/curriculum.js`. The 200-verb list is a source-attributed frequency starting point, not a claim of a final Colombian ranking. Keep both translations, context, pronunciation, cultural notes, and practice prompts together. Tag each lesson with its skills, domain, register, and learning pathways. Avoid presenting a regional expression as universal Spanish; identify its Colombian usage and invite Colombian Spanish and English-language education specialists to review new placement or pathway content before publishing.

The mature-language reference is opt-in, educational, and recognition-focused. Review severity, local usage, and de-escalation guidance with qualified reviewers; do not add content that encourages harassment or abuse.

## Native-speaker review

Every lesson carries a `review` field. While it is `"pending"`, the app shows a visible "awaiting native-speaker review" banner on that lesson, so unverified regional usage is never presented to a learner as settled.

Reviewers do not need a code editor. They open **Issues → New issue → Lesson review**, pick a lesson from the dropdown, and answer a short form covering naturalness, regional framing, register, and pronunciation. A maintainer applies the wording and flips that lesson's `review` to `"reviewed"`, which removes the banner.

Aim for two sign-offs per lesson: a native Colombian Spanish speaker for the `es` side and a native or expert English speaker for the `en` side.

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` publishes the repository root to GitHub Pages after pushes to `main`. In repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. Until that source is selected the deploy job fails, because no Pages site exists to deploy to.
