# Fourier | Soroban Contract Reputation Platform

> Trust is infrastructure. Verify transaction safety before signing.

Fourier is an open-source contract reputation platform built specifically for the **Soroban smart contract ecosystem** on Stellar. It acts as an intelligence shield, helping Web3 users, developers, and wallets identify malicious or suspicious smart contracts before confirming transaction sign operations.

Instead of blind-signing transaction targets, Fourier enables instant telemetry scanning for rug pulls, backdoors, phishing clones, exploits, and transaction traps.

---

## Key Features

-  **Contract Address Scanning:** Input any 56-character Soroban contract address (`C...`) to run instantaneous threat checks.
-  **Visual Reputation Verdicts:** Instantly returns a verdict of **Safe** (verified/audited), **Unknown** (no telemetry logs), or **Scam Alert** (flagged malicious) with risk severity scores.
-  **Contextual Telemetry Details:** Displays clear reasons, category markers, and confidence percentages for each reputation determination.
-  **Developer First API:** Perform contract safety lookups programmatically in scripts, wallets, or CI/CD pipelines via lightweight `/api/check/[address]` endpoints.
-  **Scalable Architecture:** Pre-architected to seamlessly transition from flat JSON local file storage to PostgreSQL/Supabase database tables in Phase 3.

---

## Tech Stack

- **Frontend Framework:** Next.js 15 App Router & React 19
- **Type Safety:** TypeScript
- **Styling system:** Tailwind CSS v3 & PostCSS
- **Transitions/Animations:** Framer Motion
- **Icons library:** Lucide Icons
- **Formatting & Linting:** Flat ESLint & Prettier
- **Build Target:** Vercel Ready

---

## Repository Structure

```
fourier-labs/
├── .github/                  # GitHub CI configuration & templates
│   ├── ISSUE_TEMPLATE/       # Templates for bug reports, submissions, etc.
│   └── workflows/ci.yml      # CI workflow executing ESLint, types, and builds
├── app/                      # Next.js App Router (Layouts & Pages)
│   ├── api/check/[address]/  # API route query resolver
│   ├── about/                # Mission & organizational overview page
│   ├── docs/                 # API & Architecture documentation page
│   ├── layout.tsx            # Global layout, layout styles, and meta injection
│   ├── page.tsx              # Home / main search scanner panel
│   └── not-found.tsx         # Cybersecurity themed 404 terminal UI
├── components/               # Reusable page & layout parts
│   ├── ui/                   # Layout wrappers, loaders, empty state prompts
│   ├── Navbar.tsx            # Floating glassmorphism navigation menu
│   ├── Footer.tsx            # Link directory, license & status indicators
│   ├── Hero.tsx              # Header layout containing headlines & metrics
│   ├── Features.tsx          # Grid presenting project values & roadmap milestones
│   ├── SearchBar.tsx         # Scan input field with Base32 address checks
│   ├── SearchButton.tsx      # Multi-state action submit button
│   └── ResultCard.tsx        # Framer Motion animated analysis dashboard
├── data/
│   └── contracts.json        # Threat intelligence mock JSON database
├── docs/                     # General markdown documentation folder
├── hooks/                    # Reusable React hooks folder
├── lib/
│   └── checker.ts            # Core reputation logic & file query engines
├── public/                   # Static browser assets (logos, images)
├── styles/
│   └── globals.css           # Global typography definitions & glass styling
├── types/
│   └── index.ts              # TypeScript interfaces (Contract, RiskResponse)
├── utils/
│   ├── cn.ts                 # Tailwind class merges utility
│   └── validation.ts         # Client-safe Base32 address format checker
├── .env.example              # Env configuration template
├── eslint.config.js          # ESLint flat config settings
├── prettier.config.js        # Formatting configuration
├── tailwind.config.ts        # Extended cyber theme & color configurations
└── components.json           # Shadcn compiler mappings
```

---

## Quick Start & Installation

### Prerequisites

- **Node.js:** `v20.x` or newer (LTS recommended, verified on `v25.x`)
- **npm:** `v10.x` or newer

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Fouriercore/fourier-labs.git
   cd fourier-labs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```

4. **Launch development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

5. **Execute code checks:**
   ```bash
   # Run code formatter
   npm run format
   
   # Run linter
   npm run lint
   
   # Build for production compilation checks
   npm run build
   ```

---

## REST API Reference

Fourier hosts a dynamic check route for developer utilities:

```http
GET /api/check/<soroban-contract-address>
```

### Successful Scan Example (Malicious Contract)

**Query:**
`GET /api/check/CB3D5RW6ARYNMSND57NVHSTRW4CD6B4UQQE246TRPFR6CP6NJ2C7HACK`

**Response (`200 OK`):**
```json
{
  "success": true,
  "data": {
    "address": "CB3D5RW6ARYNMSND57NVHSTRW4CD6B4UQQE246TRPFR6CP6NJ2C7HACK",
    "status": "scam",
    "reason": "Vulnerable contract containing an unchecked reentrancy vulnerability. Active exploit payload detected in live transaction history draining user collateral.",
    "riskLevel": "critical",
    "confidence": 99,
    "category": "exploit",
    "lastUpdated": "2026-06-30T16:45:00Z"
  }
}
```

---

## Contributing

We welcome reports, code updates, and design proposals. Refer to our [CONTRIBUTING.md](file:///c:/Users/ACER/fourier-labs/CONTRIBUTING.md) to understand fork mechanisms, branching templates, and code standards.

For vulnerability disclosure paths, inspect [SECURITY.md](file:///c:/Users/ACER/fourier-labs/SECURITY.md).

---

## License

This project is licensed under the **MIT License**. For complete license details, read [LICENSE](file:///c:/Users/ACER/fourier-labs/LICENSE).
