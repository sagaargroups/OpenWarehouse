---
name: QA & Reliability Guide for Enterprise SaaS
description: Comprehensive guide on testing strategies, release management, and maintaining zero-bug reliability at scale.
---

# QA & Reliability Guide: Zero-Bug Products at Scale

Transitioning from "vibe coding" (rapid prototyping) to "enterprise scale" requires rigorous processes. This guide outlines how to ensure your CloudFetch platform remains robust, reliable, and bug-free as it scales.

## 1. The Pyramid of Testing

Testing is not one thing; it's a layered strategy.

### 1.1 Static Analysis (The Foundation)
**Tooling:** ESLint, TypeScript, Prettier
**When:** Runs in IDE and on Git Commit (pre-commit hooks)
**Purpose:** Catch syntax errors, type mismatches, and specific bad patterns instantly.
- **Rule:** No `any` types allowed.
- **Rule:** No unused variables.
- **Rule:** Strict null checks enabled.

### 1.2 Unit Testing (The Bricks)
**Tooling:** Vitest (fast, compatible with Vite/Next.js)
**When:** Runs on Pull Request
**Scope:** Test individual functions and hooks in isolation.
**Example:**
```typescript
// src/lib/utils.test.ts
import { cn } from './utils';
import { describe, it, expect } from 'vitest';

describe('cn utility', () => {
  it('merges tailwind classes correctly', () => {
    expect(cn('p-4', 'p-8')).toBe('p-8');
  });
});
```

### 1.3 Integration Testing (The Mortar)
**Tooling:** Vitest + React Testing Library
**When:** Runs on Pull Request
**Scope:** Test how components work together (e.g., a form submitting data).
- Mock the API calls (don't hit real backend).
- Test success states, error states, and loading states.

### 1.4 End-to-End (E2E) Testing (The Roof)
**Tooling:** Playwright
**When:** Runs before Deploy (or nightly)
**Scope:** Simulate a real user clicking buttons in a browser.
- **Critical Paths Only:** Sign up, Login, Create App, Subscribe to Plan.
- **Rule:** If a critical path fails, BLOCK deployment.

## 2. Release Management & Vercel

### 2.1 The "Check One by One" Workflow
You mentioned needing to "check box and check this one by one". This is called a **Release Checklist**.

#### Pre-Release Checklist (Manual)
1.  **Visual QA:** Check primary pages on Mobile and Desktop.
2.  **Critical Flow:** create a fresh account and buy a product (in test mode).
3.  **Database:** Ensure migrations are applied (`npm run db:migrate`).
4.  **Environment:** Check all secrets (Stripe keys, AWS keys) are set in Vercel.

### 2.2 Automated Checks (CI/CD)
Configure GitHub Actions or Vercel Checks to enforce quality:

1.  **Lint Check:** `npm run lint` must pass.
2.  **Type Check:** `tsc --noEmit` must pass.
3.  **Unit Tests:** `npm run test` must pass.
4.  **Build:** `npm run build` must pass.

## 3. Dealing with "Missing Column" Errors (Migrations)

The error `column developer_apps.scope_marketplace does not exist` happened because the code expects a new schema, but the production database is old.

### How to Fix Product DBs:
1.  **Local Dev:** You run `npm run db:migrate` -> Updates Local DB.
2.  **Production:** You MUST update the Production DB too.

**Option A: Run Locally against Prod (Careful!)**
```bash
# In your local terminal
export POSTGRES_URL="your_production_connection_string_from_vercel"
npm run db:migrate
```

**Option B: Vercel Command (Recommended)**
Add a "Build Command" override in Vercel settings:
`npm run db:migrate && npm run build`
*Note: This requires POSTGRES_URL to be set correctly in Vercel Environment Variables.*

## 4. Observability: Tracking Bugs in Production

You cannot catch 100% of bugs before release. You need to catch them FAST when they happen.

1.  **Sentry:** error tracking. Wraps your Next.js app and reports generic "Something went wrong" errors with stack traces.
2.  **Logs:** Vercel Logs / Axiom.
3.  **Usage Metrics:** PostHog / Google Analytics.

## 5. Summary: From Vibe to Scale

| Vibe Coding | Enterprise Scale |
| :--- | :--- |
| "It works on my machine" | "It works on CI/CD pipeline" |
| Manual DB updates | Automated Migrations |
| Console.log debugging | Sentry Error Tracking |
| "Just push it" | Pull Request -> Review -> Merge |

**Action Item:**
To fix your immediate Vercel error, you must execute the migration on your production database. The `0000_volatile_sleeper.sql` migration contains the missing `scope_marketplace` column.
