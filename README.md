
# Playwright Fundamentals

A collection of Playwright TypeScript examples and lab exercises for learning Playwright end-to-end testing.

## Quick start

- Install dependencies:

```bash
npm install
```

- Install Playwright browsers (first time only):

```bash
npx playwright install
```

- Run the test suite:

```bash
npx playwright test
```

- Show the HTML report:

```bash
npx playwright show-report
```

## Useful npm scripts

- `npm test` — alias for `npx playwright test`
- `npm run test:headed` — run tests in headed mode (if configured)

## Project structure

- `tests/` — test specs and lab exercises (see `tests/01_Basics`)
- `playwright.config.ts` — Playwright configuration
- `package.json` — scripts and dependencies

## Running locally (Windows)

1. Open PowerShell in the project root.
2. Run `npm install` and `npx playwright install`.
3. Run `npx playwright test` to execute tests.

## Contributing

Feel free to add new lab exercises or improve existing tests. Open a PR with clear descriptions of changes.

---

Repository: https://github.com/RevathiSubreja19/PLAYWRIGHTFUNDAMENTALS

## Changelog

- 2026-05-20: Updated README and committed/pushed recent test and report changes.
