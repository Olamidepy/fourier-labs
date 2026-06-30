# Changelog

All notable changes to the Fourier project will be documented in this file. This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0] - 2026-06-30

### Added
- **Core Engine:** Scaffolding of the core checker logic in `lib/checker.ts` mapping addresses against the local JSON database.
- **REST Endpoints:** Live dynamic routing API at `/api/check/[address]` that supports Next.js 15 async route parameters.
- **UI Design System:** Modern glassmorphic styling system matching a dark cybersecurity theme in `styles/globals.css` and `tailwind.config.ts`.
- **Reusable Components:** Integrated `Navbar`, `Footer`, `Hero`, `Features`, `SearchBar`, `SearchButton`, and `ResultCard`.
- **Responsive Pages:** Implemented `Home`, `About`, `Docs`, and custom terminal-themed `not-found` pages.
- **Data Repository:** Populated initial database in `data/contracts.json` containing 6 threat and safety contract profiles.
- **CI Pipelines:** Built GitHub workflows in `.github/workflows/ci.yml` running linting, types, and builds.
- **GitHub Templates:** Drafted issue templates (`bug_report.md`, `feature_request.md`, `contract_submission.md`, `question.md`) and a pull request template.
- **Documentation:** Drafted `README.md`, `CONTRIBUTING.md`, `SECURITY.md`, `ROADMAP.md`, `CODE_OF_CONDUCT.md`, and `LICENSE`.
