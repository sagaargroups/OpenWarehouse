# Monorepo Branching Strategy & Environment Lifecycle

## Overview

In an enterprise monorepo housing multiple applications, divisions, or products, maintaining separate git branches per environment (such as `dev`, `staging`, `production`) leads to severe merge conflicts, branch drift, and deployment bottlenecks.

Instead, the industry best practice is **Trunk-Based Development** coupled with **Path-Based Triggering** and **Git Tag / Release Promotions**.

---

## 1. Core Principles

### Single Long-Lived Branch (`main`)
- Every developer merges into a single primary branch: `main` (or `master`).
- Feature branches are short-lived (1–2 days max) and scoped to a single app folder.
- Continuous Integration runs unit tests and linters on Pull Requests (PRs) touching specific paths.

### Environment Mapping via Git Tags
Environments are not code branches; they are deployment targets triggered by code states:

| Environment | Trigger | Workflow Action |
|---|---|---|
| **Development (Dev)** | Push / Merge to `main` for `apps/<path>/**` | Auto-builds & deploys app to Dev environment/server |
| **Staging (QA/Pre-Prod)** | Git Tag matching `<app-name>@v*.*.*-staging` | Deploys exact built artifact to Staging isolation |
| **Production (Prod)** | GitHub Release / Tag matching `<app-name>@v*.*.*` | Deploys artifact to Production after approval gate |

---

## 2. Monorepo Directory Structure Pattern

```
monorepo/
├── .github/
│   ├── CODEOWNERS                      # Access & review governance
│   └── workflows/
│       ├── deploy-app-one.yml          # Path-filtered workflow for App 1
│       ├── deploy-app-two.yml          # Path-filtered workflow for App 2
│       └── deploy-app-three.yml        # Path-filtered workflow for App 3
├── apps/
│   ├── agency/
│   │   ├── studio-app/                 # Creative services app
│   │   └── marketing-app/              # Marketing & growth app
│   ├── d2c/
│   │   ├── brand-one/
│   │   └── brand-two/
│   └── tech/
│       ├── saas-platform/              # SaaS product
│       └── dev-services/               # Custom dev services
└── packages/                           # Shared design systems, configs, utils
    ├── ui-components/
    └── config-eslint/
```

---

## 3. Branching & Release Execution Flow

### Step 1: Feature Development
1. Developer branches off `main`: `git checkout -b feat/studio-landing-hero`
2. Developer works **exclusively** inside `apps/agency/studio-app/`.
3. Opens Pull Request to `main`.

### Step 2: PR Validation & Code Review
1. GitHub Actions triggers PR checks **only** for `apps/agency/studio-app/**`.
2. GitHub `CODEOWNERS` automatically assigns `@org-name/agency-leads` for mandatory review.
3. Upon approval and green CI checks, branch is merged into `main`.

### Step 3: Auto-Deploy to Dev
1. Merge commit hits `main`.
2. Workflow `deploy-studio-app.yml` detects path change in `apps/agency/studio-app/**`.
3. Auto-deploys to **Dev / Preview** (e.g. `dev.studio.example.com` or Vercel Preview).

### Step 4: Promoting to Staging & Production
1. To promote a tested commit to Staging:
   ```bash
   git tag studio-app@v1.2.0-staging
   git push origin studio-app@v1.2.0-staging
   ```
   *Triggers Staging workflow.*

2. To promote to Production:
   ```bash
   git tag studio-app@v1.2.0
   git push origin studio-app@v1.2.0
   ```
   *Or create a formal GitHub Release targeting tag `studio-app@v1.2.0`.*

---

## 4. Multi-App Dependency Triggers

When a shared package in `packages/` is updated:
- The path filter detects changes in `packages/ui-components/**`.
- Dependent application workflows run tests across affected downstream apps before allowing merge.
