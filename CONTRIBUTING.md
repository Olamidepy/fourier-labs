# Contributing to Fourier

Welcome! We are thrilled that you are looking to contribute to Fourier. As a security reputation platform, we rely heavily on community inputs, audits, and code refinements to keep the ecosystem safe.

By participating in this project, you agree to abide by our [Code of Conduct](file:///c:/Users/ACER/fourier-labs/CODE_OF_CONDUCT.md).

---

## How Can I Contribute?

There are several ways you can contribute:
1. **Submit Threat Reports:** Flag new malicious contracts or request verification for safe protocols by opening a [Contract Submission Issue](https://github.com/Fouriercore/fourier-labs/issues/new?assignees=&labels=telemetry-update%2C+triage&template=contract-submission-report.md).
2. **Refine UI/UX:** Propose visual improvements, layout fixes, or responsive scaling configurations.
3. **Core Development:** Optimize code quality, typescript interfaces, APIs, or database handlers.
4. **Improve Documentation:** Fix spelling, expand guides, or document APIs.

---

## Development Workflow

### 1. Fork and Clone
Fork the repository under the [Fouriercore organization](https://github.com/Fouriercore/fourier-labs) to your personal account. Then, clone the fork:
```bash
git clone https://github.com/YOUR-USERNAME/fourier-labs.git
cd fourier-labs
```

### 2. Set Up Local Environment
Install local dependencies and run the linter to verify installation:
```bash
npm install
npm run lint
```

### 3. Create a Feature Branch
Create a branch specifically for the change you plan to implement. Use a structured name indicating type:
- `feature/your-feature-name` (for additions)
- `bugfix/your-bug-name` (for fixes)
- `telemetry/update-contracts` (for database updates)
```bash
git checkout -b feature/interactive-scan-glow
```

### 4. Code Standards & Commits
We follow standard linting rules configured in `.eslintrc` and use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for our commit logs:
- `feat: add community search filter`
- `fix: correct Base32 validation pattern`
- `docs: add environment setup details`
- `chore: update packages config`

Keep your changes scoped. Avoid submitting large pull requests modifying multiple unrelated files.

Before committing, format and test your code:
```bash
npm run format
npm run lint
npm run build
```

### 5. Submit a Pull Request
Push your changes to your fork and create a Pull Request against the `main` branch of the `Fouriercore/fourier-labs` repository.
- Use our Pull Request Template.
- Detail what the change resolves.
- Verify that the GitHub CI action checks compile cleanly.
- Link the pull request to any corresponding issue (e.g. `Resolves #42`).
