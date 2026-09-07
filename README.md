# Parcero: Colombian Spanish in Context

Parcero is a free, static learning app for understanding Colombian Spanish through real situations—not isolated memorization. It supports both directions:

- English speakers learning Colombian Spanish
- Spanish speakers strengthening practical English

## Learning approach

Each lesson combines a short contextual dialogue, vocabulary as it is used, regional and cultural notes, an explanation of why a phrase works, pronunciation guidance, and retrieval practice. Progress is stored only in the learner's browser.

The initial content focuses on everyday Colombian usage. Regional terms and explanations should be reviewed by Colombian Spanish speakers before publishing.

## Run locally

This dependency-free site can be opened directly in a browser, or served from the repository root:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Content contributions

Lessons live in `data/lessons.js`. Keep both translations, context, pronunciation, cultural notes, and practice prompts together. Avoid presenting a regional expression as universal Spanish; identify its Colombian usage and invite native-speaker review for new or edited content.

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` publishes the repository root to GitHub Pages after pushes to `main`. In repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

## Repository rename

Rename the repository in GitHub under **Settings → General → Repository name**. The application brand is already **Parcero**.
