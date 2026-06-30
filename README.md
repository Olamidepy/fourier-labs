<div align="center">

<img src="./public/logo.svg" alt="Fourier Logo" width="120" />

# Fourier

### Open-Source Smart Contract Reputation Infrastructure for Soroban

**Trust is infrastructure. Verify transaction safety before you sign.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8?logo=tailwindcss)](https://tailwindcss.com)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Open Source](https://img.shields.io/badge/Open%20Source-Yes-success)]()

**Website** • **Documentation** • **API Reference** • **Contributing**

</div>

---

# Overview

Fourier is an open-source **contract reputation platform** built specifically for the **Soroban smart contract ecosystem on Stellar**.

Rather than blindly signing transaction requests, Fourier enables users, wallets, and developers to verify the reputation of a smart contract before interacting with it.

The platform continuously evolves into a decentralized reputation layer capable of identifying:

- Rug Pulls
- Backdoors
- Phishing Contracts
- Fake Tokens
- Exploits
- Malicious Transaction Targets

Fourier provides instant contract reputation lookups through a clean web interface, lightweight developer APIs, and future browser wallet integrations.

Our mission is simple:

> **Build the trust layer for Soroban.**

---

# Why Fourier?

Smart contracts are immutable.

A single malicious interaction can permanently compromise digital assets.

Today, many users sign blockchain transactions without understanding what the target contract actually does.

Fourier introduces an intelligence layer that allows every Soroban participant to verify contracts before signing.

Whether you're:

- A wallet provider
- A dApp developer
- A protocol team
- A blockchain security researcher
- An everyday user

Fourier helps reduce the risk of interacting with malicious smart contracts.

---

# Features

## Smart Contract Reputation Scanner

Input any Soroban contract address and instantly receive a reputation report.

---

## Reputation Verdicts

Every contract is categorized into one of three states.

| Status | Description |
|---------|-------------|
| 🟢 Safe | Verified contract with positive reputation |
| 🟡 Unknown | No sufficient telemetry or community reports |
| 🔴 Scam | Malicious or high-risk contract flagged by reputation intelligence |

---

## Threat Intelligence

Fourier detects contracts associated with:

- Rug Pulls
- Exploits
- Phishing
- Fake Tokens
- Backdoors
- Transaction Traps

---

## Community Intelligence

Designed for community-driven reporting where contributors can submit malicious contract addresses through GitHub Pull Requests.

---

## Developer API

Integrate Fourier into:

- Wallets
- dApps
- CI/CD Pipelines
- Security Dashboards
- Monitoring Tools
- Browser Extensions

Example endpoint:

```http
GET /api/check/{contract-address}
```

---

## Scalable Architecture

The MVP uses a lightweight JSON datastore.

Future versions migrate seamlessly to:

- PostgreSQL
- Supabase
- Reputation Indexing
- Community Reports
- Telemetry Pipelines

without changing the frontend architecture.

---

# Architecture

## Current MVP

```text
                User

                  │

                  ▼

         Next.js Frontend

                  │

                  ▼

       /api/check/[address]

                  │

                  ▼

      Reputation Engine (lib)

                  │

                  ▼

     contracts.json Database

                  │

                  ▼

          Reputation Response
```

---

## Future Architecture

```text
                Frontend

                    │

                    ▼

             Fourier API

                    │

        ┌───────────┴───────────┐

        ▼                       ▼

 PostgreSQL             Threat Intelligence

        ▼                       ▼

 Community Reports      Risk Scoring Engine

        └───────────┬───────────┘

                    ▼

             Reputation Result
```

---

# Technology Stack

| Layer | Technology |
|---------|------------|
| Frontend | Next.js 15 (App Router) |
| UI Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Validation | Custom Base32 Validator |
| API | Next.js Route Handlers |
| Deployment | Vercel |
| Future Database | PostgreSQL |
| Future Backend | Supabase |

---

# Repository Structure

```text
fourier-labs/

├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── workflows/
│
├── app/
│   ├── api/
│   ├── about/
│   ├── docs/
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
│
├── components/
│   ├── ui/
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── SearchBar.tsx
│   ├── ResultCard.tsx
│   └── Footer.tsx
│
├── data/
│   └── contracts.json
│
├── docs/
├── hooks/
├── lib/
│   └── checker.ts
│
├── public/
├── styles/
├── types/
├── utils/
│
├── .env.example
├── package.json
├── README.md
└── LICENSE
```

---

# Quick Start

## Prerequisites

- Node.js 20+
- npm 10+

---

## Clone Repository

```bash
git clone https://github.com/Fouriercore/fourier-labs.git

cd fourier-labs
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment

Copy:

```bash
cp .env.example .env.local
```

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api

DATABASE_URL=

SUPABASE_URL=

SUPABASE_ANON_KEY=
```

---

## Start Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Build Production

```bash
npm run build
```

---

## Run Linter

```bash
npm run lint
```

---

# REST API

### Check Contract Reputation

```http
GET /api/check/{contract-address}
```

---

Example

```
GET /api/check/CB3D5RW6ARYNMSND57NVHSTRW4CD6B4UQQE246TRPFR6CP6NJ2C7HACK
```

Response

```json
{
  "success": true,
  "data": {
    "address": "...",
    "status": "safe",
    "confidence": 98,
    "riskLevel": "low",
    "reason": "Verified by community telemetry."
  }
}
```

---

# Roadmap

## Phase 1 — MVP

- [x] Landing Page
- [x] Contract Reputation Engine
- [x] Local JSON Database
- [x] REST API
- [x] Documentation

---

## Phase 2

- [ ] Browser Extension
- [ ] Fourier SDK
- [ ] Public API
- [ ] Wallet Integration

---

## Phase 3

- [ ] PostgreSQL Migration
- [ ] Supabase Backend
- [ ] Community Reporting
- [ ] Reputation Dashboard

---

## Phase 4

- [ ] Machine Learning Detection
- [ ] Telemetry Indexing
- [ ] Cross-Chain Reputation
- [ ] DAO Governance

---

# Contributing

Fourier is community-driven.

We welcome:

- Security Researchers
- Smart Contract Developers
- Frontend Engineers
- Product Designers
- Technical Writers
- Open Source Contributors

Before opening a Pull Request please read:

- CONTRIBUTING.md
- CODE_OF_CONDUCT.md
- SECURITY.md

---

# Security

If you discover a security vulnerability, please report it responsibly instead of opening a public issue.

See **SECURITY.md** for responsible disclosure instructions.

---

# License

Distributed under the MIT License.

See **LICENSE** for more information.

---

# Acknowledgements

Fourier is inspired by the belief that blockchain security should be transparent, community-driven, and accessible to everyone.

Built for the Soroban ecosystem wby the **Fouriercore** community.

---

<div align="center">

### ⭐ Star the repository if you believe trust should be open infrastructure.

**Verify Before You Sign.**

</div>
