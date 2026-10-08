---
name: CloudFetch Modular Monolith Architecture
description: Complete project knowledge base and architecture rules for CloudFetch SaaS Platform. This skill is the definitive guide for any AI agent to understand, maintain, and extend this codebase following industry best practices.
---

# CloudFetch Platform - Architecture & Coding Standards

> **Purpose**: This document is the "Project Bible" for any AI agent working on this codebase.
> **Philosophy**: **Modular Monolith** with strict folder structure enforcement.

---

## 1. Root `src/` Structure

```
📁 src/
├── 📁 app/           ← NEXT.JS MANDATORY (App Router)
├── 📁 core/          ← Core Platform Modules (8 modules)
│   └── index.ts      ← MANDATORY: Central export
├── 📁 products/      ← Isolated Products (2 products)
│   └── index.ts      ← MANDATORY: Central export
├── 📁 shared/        ← Utilities & UI Kit
│   └── index.ts      ← MANDATORY: Central export
└── 📁 lib/           ← Infrastructure (DB, payments)
```

---

## 2. Two-Layer Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                    src/app/ (THIN HOST)                             │
│                 Re-exports only - NO business logic                  │
└─────────────────────────────────────────────────────────────────────┘
                                   │
                    ┌──────────────┴──────────────┐
                    ▼                              ▼
┌─────────────────────────────────┐  ┌─────────────────────────────────┐
│         src/core/               │  │       src/products/             │
│     8 CORE PLATFORM MODULES     │  │     2 ISOLATED PRODUCTS         │
└─────────────────────────────────┘  └─────────────────────────────────┘
                    │                              │
                    └──────────────┬──────────────┘
                                   ▼
              ┌─────────────────────────────────────────┐
              │           src/shared/                    │
              │        PURE UTILITIES & UI KIT           │
              └─────────────────────────────────────────┘
```

---

## 3. MANDATORY Module Folder Structure

> **CRITICAL**: ALL 7 folders MUST be created for EVERY module, even if empty.

### 3.1 Core Module Structure (MANDATORY - All 7 folders)

```
📁 src/core/{module-name}/
├── index.ts              ← MANDATORY: Public exports
├── 📁 api/               ← MANDATORY: API route handlers
│   └── .gitkeep          ← Keep even if empty
├── 📁 components/        ← MANDATORY: React components
│   └── .gitkeep
├── 📁 hooks/             ← MANDATORY: React hooks
│   └── .gitkeep
├── 📁 lib/               ← MANDATORY: Business logic
│   └── .gitkeep
├── 📁 pages/             ← MANDATORY: Page components
│   └── .gitkeep
└── 📁 schema/            ← MANDATORY: DB schema
    └── .gitkeep
```

### 3.2 Product Module Structure (MANDATORY - All 7 folders)

```
📁 src/products/{product-name}/
├── index.ts              ← MANDATORY: Public exports
├── schema.ts             ← MANDATORY: Product schema
├── README.md             ← MANDATORY: Documentation
├── 📁 api/               ← MANDATORY: API handlers
│   └── .gitkeep
├── 📁 components/        ← MANDATORY: UI components
│   └── .gitkeep
├── 📁 hooks/             ← MANDATORY: React hooks
│   └── .gitkeep
├── 📁 lib/               ← MANDATORY: Business logic
│   └── .gitkeep
└── 📁 pages/             ← MANDATORY: Page components
    └── .gitkeep
```

### 3.3 Why All 7 Folders Are Mandatory

| Reason | Explanation |
|--------|-------------|
| **Consistency** | Every module looks the same |
| **Discoverability** | Developers know where to find things |
| **Future-proof** | Room to grow without restructuring |
| **AI-friendly** | Agents can predict file locations |
| **No decisions** | Eliminates "should I create this folder?" |

---

## 4. Central Export Files

### 4.1 `src/core/index.ts` (MANDATORY)

```typescript
// Central export for all core modules
export * as identity from './identity';
export * as team from './team';
export * as email from './email';
export * as billing from './billing';
export * as developer from './developer';
export * as admin from './admin';
export * as marketplace from './marketplace';
export * as trials from './trials';
```

### 4.2 `src/products/index.ts` (MANDATORY)

```typescript
// Central export for all products
export * as livedb from './livedb';
export * as heavyStorage from './heavy-storage';
export { productsRegistry } from './registry';
```

### 4.3 `src/shared/index.ts` (MANDATORY)

```typescript
// Central export for shared utilities
export * from './ui/components';
```

---

## 5. Module Registry

### 5.1 Core Platform Modules (8)

| # | Module | Description | Path |
|---|--------|-------------|------|
| 1 | `identity` | Auth, users, sessions | `src/core/identity/` |
| 2 | `team` | Teams, members | `src/core/team/` |
| 3 | `email` | Resend, templates | `src/core/email/` |
| 4 | `billing` | Stripe, subscriptions | `src/core/billing/` |
| 5 | `developer` | Apps, API keys | `src/core/developer/` |
| 6 | `admin` | Platform management | `src/core/admin/` |
| 7 | `marketplace` | App store | `src/core/marketplace/` |
| 8 | `trials` | Anonymous users | `src/core/trials/` |

### 5.2 Product Modules (2)

| # | Product | Description | Path |
|---|---------|-------------|------|
| 1 | `livedb` | Database querying | `src/products/livedb/` |
| 2 | `heavy-storage` | File uploads | `src/products/heavy-storage/` |

---

## 6. Module index.ts Pattern

### 6.1 Core Module index.ts Template

```typescript
/**
 * {Module Name} Module
 * @module @/core/{module-name}
 */

// ============== SCHEMA ==============
export * from './schema';

// ============== COMPONENTS ==============
export { ComponentA } from './components/ComponentA';
export { ComponentB } from './components/ComponentB';

// ============== HOOKS ==============
export { useHookA } from './hooks/useHookA';

// ============== SERVICES ==============
export { serviceA } from './lib/service-a';

// ============== PAGES ==============
export { MainPage } from './pages/MainPage';

// ============== MODULE METADATA ==============
export const {MODULE}_MODULE = {
    id: '{module-id}',
    name: '{Module Name}',
    description: '{description}',
} as const;
```

### 6.2 Product Module index.ts Template

```typescript
/**
 * {Product Name} Product
 * @module @/products/{product-name}
 */

export * from './schema';
export { ComponentA } from './components/ComponentA';
export { useHook } from './hooks/useHook';

export const {PRODUCT}_PRODUCT = {
    id: '{product-id}',
    slug: '{slug}',
    name: '{name}',
    icon: '{icon}',
    productPath: '/products/{slug}',
} as const;
```

---

## 7. Import Aliases

```json
{
  "@/core/*": "src/core/*",
  "@/core": "src/core/index.ts",
  "@/products/*": "src/products/*",
  "@/products": "src/products/index.ts",
  "@/shared/*": "src/shared/*",
  "@/shared": "src/shared/index.ts",
  "@/components/*": "src/shared/ui/components/*",
  "@/lib/*": "src/lib/*"
}
```

---

## 8. New Module Creation Workflow

### 8.1 Creating a New Core Module

```bash
# Step 1: Create ALL 7 folders (MANDATORY)
mkdir -p src/core/{module-name}/{api,components,hooks,lib,pages,schema}

# Step 2: Create mandatory files
touch src/core/{module-name}/index.ts
touch src/core/{module-name}/api/.gitkeep
touch src/core/{module-name}/components/.gitkeep
touch src/core/{module-name}/hooks/.gitkeep
touch src/core/{module-name}/lib/.gitkeep
touch src/core/{module-name}/pages/.gitkeep
touch src/core/{module-name}/schema/.gitkeep

# Step 3: Update src/core/index.ts
# Add: export * as {moduleName} from './{module-name}';

# Step 4: Update module-export-registry.json
```

### 8.2 Creating a New Product

```bash
# Step 1: Create ALL 7 folders (MANDATORY)
mkdir -p src/products/{product-name}/{api,components,hooks,lib,pages}

# Step 2: Create mandatory files
touch src/products/{product-name}/index.ts
touch src/products/{product-name}/schema.ts
touch src/products/{product-name}/README.md
touch src/products/{product-name}/api/.gitkeep
touch src/products/{product-name}/components/.gitkeep
touch src/products/{product-name}/hooks/.gitkeep
touch src/products/{product-name}/lib/.gitkeep
touch src/products/{product-name}/pages/.gitkeep

# Step 3: Register in src/products/registry.ts

# Step 4: Update src/products/index.ts

# Step 5: Update module-export-registry.json
```

---

## 9. Golden Rules

### Rule #1: Two-Layer Architecture
- **Core** = Platform foundation (8 modules)
- **Products** = Isolated business products (2 products)

### Rule #2: Dependency Direction
```
Products → Core → Shared
```

### Rule #3: Thin Host Pattern
`src/app/` contains ONLY thin re-exports.

### Rule #4: All 7 Folders Are Mandatory
Every module MUST have: `api/`, `components/`, `hooks/`, `lib/`, `pages/`, `schema/`

### Rule #5: Central Exports
Every layer MUST have an `index.ts` for central exports.

---

## 10. Pre-Flight Checklist

> **Before ANY code change:**

- [ ] Identified correct layer (Core vs Product)
- [ ] Module has all 7 folders
- [ ] Module has `index.ts` with exports
- [ ] `src/core/index.ts` or `src/products/index.ts` updated
- [ ] Host app files are thin re-exports only
- [ ] `module-export-registry.json` updated (if new module)

---

## 11. This Skill Is The Law

Any AI agent **MUST**:
1. Create ALL 7 folders for every module
2. Add `.gitkeep` to empty folders
3. Create central `index.ts` exports
4. Keep host app thin (re-exports only)
5. Update registry when adding modules

**Failure to follow these rules will result in architectural decay.**
