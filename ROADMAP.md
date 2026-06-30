# Fourier Project Roadmap

This roadmap outlines the planned development path for the Fourier reputation platform, transforming it from a static MVP tool into an automated, decentralized threat intelligence layer for Stellar.

---

## Phase 1: Foundations & Web Portal (Current)
- [x] Scaffold Next.js 15, React 19, and Tailwind CSS v3 base architectures.
- [x] Create a responsive, dark mode, cybersecurity-themed user interface.
- [x] Write core checker libraries processing contract lookup actions.
- [x] Develop dynamic API route `/api/check/[address]` to allow external requests.
- [x] Establish a local JSON database model with initial contract records.
- [x] Setup robust CI pipelines checking lints, types, and builds.

---

## Phase 2: Browser Extension & Developer SDK
- [ ] **Fourier Browser Extension:**
  - Build a chrome/firefox browser widget scanning Stellar transaction parameters.
  - Alert users on their screens when interacting with flagged contract targets.
- [ ] **Developer SDK:**
  - Package a lightweight NPM package (`@fouriercore/sdk`) for easy inclusion in decentralized applications.
  - Enable dApp developers to run checks on user actions programmatically.
- [ ] **Public API Expansion:**
  - Rate limiting, global caching, and developer API key access tables.

---

## Phase 3: Supabase Migration & Reputation Engine
- [ ] **Database Migration:**
  - Deploy Supabase and PostgreSQL database structures.
  - Implement Prisma or direct SQL clients to replace local JSON reads.
- [ ] **Community Reports System:**
  - Build submission portal for developers and users to flag scam signatures.
  - Implement a decentralized validation mechanism (multisig review or consensus rules) to prevent spam flagging.
- [ ] **Automated Heuristics Engine:**
  - Bytecode analysis tracking signature matches, administrative keys, transfer backdoors, and logic patterns.

---

## Phase 4: Native Wallet Integrations
- [ ] **Pre-Transaction Warnings:**
  - Partner with popular Stellar/Soroban wallets (e.g. Albedo, Freighter, xBull) to embed Fourier checks directly into sign request screens.
  - Notify wallet signers in real time: warning them with explanation details if they attempt to call a blacklisted target.
