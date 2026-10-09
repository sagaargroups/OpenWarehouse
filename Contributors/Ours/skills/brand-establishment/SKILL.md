---
name: brand-establishment
description: The master Day-1 brand establishment and identity generation governance
  protocol. Enforces strict phased micro-movements, intake gates, zero-placeholder
  validation, and supports dynamic output destination resolution (within tracked project
  codebases or standalone skill vault) with zero hardcoding. Also provides a composable
  document generation system where format shells (A4, slides, email, invoice) merge
  with content modules (MSA, SOW, NDA, SLA, proposals) to produce branded documents
  on demand.
metadata:
  version: v1.0.0
  category: branding
  tags:
  - identity
  - zero-placeholder
  - document-generation
  - design-system
  icon: verified
  publisher: d2cwithahrik
  support_tier: primary
  created_at: '2026-10-01'
  updated_at: '2026-10-09'
---

# Brand Establishment Governance Protocol

> **Ecosystem:** D2C With Ahrik / Agency  
> **Engine Version:** `engine-v1.0`  
> **Core Mandate:** Prevent rushing, eliminate hallucinated design tokens, enforce interactive user sign-off, and guarantee 100% placeholder-free production deliverables.

---

## 1. Architecture

```text
brand-establishment/
├── SKILL.md                     ← THIS FILE (governance + workflow dispatcher)
├── engine/                      ← IMMUTABLE PARAMETERIZED TEMPLATES
│   ├── identity/                ← 8 brand identity templates (colors, logo, etc.)
│   ├── formats/                 ← 5 visual layout shells (A4, slides, email, etc.)
│   └── content/                 ← 22 document body structures (8 departments)
├── references/                  ← DETAILED PROTOCOLS (read on demand)
│   ├── intake-protocol.md       ← Phase 1: 18-variable gated intake
│   ├── generation-protocol.md   ← Phase 2-3: Sequential micro-generation
│   ├── audit-protocol.md        ← Phase 4: Validation + zero-placeholder
│   └── business-framework.md    ← Business theory & layer models
├── scripts/
│   └── audit.sh                 ← Zero-placeholder validation script
├── outputs/                     ← GENERATED DELIVERABLES (locked, versioned)
│   ├── <brand>-lifetime-identity-v<N>/
│   │   ├── {8 identity suites}
│   │   └── documents/           ← Composable merge outputs
│   └── README.md
└── helper-tools/                ← Standalone HTML tools
```

---

## 2. The 4-Phase Gated Pipeline

| Phase | What | Reference |
|---|---|---|
| **Gate 0** | Dynamic Output Destination Resolution (Zero Hardcoding) | [generation-protocol.md](./references/generation-protocol.md) |
| **Phase 1** | Interactive 18-variable intake with hard-stop gate | [intake-protocol.md](./references/intake-protocol.md) |
| **Phase 2** | Directory scaffolding (at resolved destination) | [generation-protocol.md](./references/generation-protocol.md) |
| **Phase 3** | Sequential micro-generation (8 identity suites) | [generation-protocol.md](./references/generation-protocol.md) |
| **Phase 4** | Audit, validation, and lock | [audit-protocol.md](./references/audit-protocol.md) |

### Gate 0: Universal Output Destination Resolution (Zero Hardcoding)
To ensure the skill remains 100% universal across any repository or project structure, output paths are never hardcoded:
1. **Interactive Prompt & Context Detection:** The agent prompts the user or detects the active project context to resolve `OUTPUT_ROOT`:
   - **Tracked Codebase Directory:** Inside the active Git-tracked project (e.g., `<project-root>/brand-establishment/outputs/`).
   - **Local Skill Vault:** Default fallback inside the skill (`.agents/skills/brand-establishment/outputs/`).
   - **Custom Path:** Explicit path designated by user.
2. **Symlink Continuity:** When writing outside the skill directory, a symbolic link is maintained at `.agents/skills/brand-establishment/outputs` pointing to `OUTPUT_ROOT` so legacy links, internal scripts, and tool references always resolve seamlessly.

### Hard Rules (Never Skip)

1. **Zero Assumption:** Never guess hex codes, fonts, slogans. If missing, ask.
2. **One Phase at a Time:** Complete each phase sequentially. No skipping gates.
3. **Zero-Placeholder Guarantee:** No output file may contain `{{...}}`. Run `scripts/audit.sh` to verify.
4. **User Sign-Off Required:** Phase 1 → Phase 2 transition requires explicit user approval.

---

## 3. Composable Document Generation

The merge system produces branded documents on demand without pre-generating every variant. **22 content modules across 8 departments.**

### How It Works

```text
FORMAT SHELL          +  CONTENT MODULE         +  BRAND TOKENS  →  BRANDED DOCUMENT
engine/formats/       +  engine/content/         +  outputs/<brand>  →  outputs/<brand>/documents/
a4-letterhead.md      +  contract-nda.md         +  {colors, fonts}  →  nda-<client>-v1.md
```

### Available Formats (5)

| Format | File | Best For |
|---|---|---|
| A4 Letterhead | [a4-letterhead.md](./engine/formats/a4-letterhead.md) | Contracts, proposals, letters, HR docs |
| 16:9 Presentation | [16x9-presentation.md](./engine/formats/16x9-presentation.md) | Pitch decks |
| Email HTML | [email-html.md](./engine/formats/email-html.md) | Signatures, branded emails |
| 1-Page Summary | [1-page-summary.md](./engine/formats/1-page-summary.md) | Capability statements, case studies |
| Invoice Table | [invoice-table.md](./engine/formats/invoice-table.md) | Invoices, receipts |

### Available Content Modules (22 across 8 departments)

**Legal**
| Module | File | Format |
|---|---|---|
| Master Services Agreement | [contract-msa.md](./engine/content/contract-msa.md) | A4 Letterhead |
| Non-Disclosure Agreement | [contract-nda.md](./engine/content/contract-nda.md) | A4 Letterhead |
| Service Level Agreement | [contract-sla.md](./engine/content/contract-sla.md) | A4 Letterhead |

**Sales**
| Module | File | Format |
|---|---|---|
| Client Proposal | [proposal-client.md](./engine/content/proposal-client.md) | A4 / Slides |
| Partnership Proposal | [proposal-partnership.md](./engine/content/proposal-partnership.md) | A4 Letterhead |
| Capability Statement | [capability-statement.md](./engine/content/capability-statement.md) | 1-Page Summary |

**Finance**
| Module | File | Format |
|---|---|---|
| Standard Invoice | [invoice-standard.md](./engine/content/invoice-standard.md) | Invoice Table |
| Quotation / Estimate | [finance-quotation.md](./engine/content/finance-quotation.md) | A4 Letterhead |
| Payment Receipt | [finance-receipt.md](./engine/content/finance-receipt.md) | Invoice Table |

**HR**
| Module | File | Format |
|---|---|---|
| Offer Letter | [hr-offer-letter.md](./engine/content/hr-offer-letter.md) | A4 Letterhead |
| Employment Agreement | [hr-employment-agreement.md](./engine/content/hr-employment-agreement.md) | A4 Letterhead |
| Onboarding Welcome Kit | [hr-onboarding-kit.md](./engine/content/hr-onboarding-kit.md) | A4 Letterhead |
| Exit / Offboarding | [hr-exit-letter.md](./engine/content/hr-exit-letter.md) | A4 Letterhead |

**Operations**
| Module | File | Format |
|---|---|---|
| Statement of Work | [contract-sow.md](./engine/content/contract-sow.md) | A4 Letterhead |
| Change Order | [ops-change-order.md](./engine/content/ops-change-order.md) | A4 Letterhead |
| Project Status Report | [ops-status-report.md](./engine/content/ops-status-report.md) | A4 Letterhead |

**Marketing**
| Module | File | Format |
|---|---|---|
| Case Study | [marketing-case-study.md](./engine/content/marketing-case-study.md) | A4 / 1-Page |
| Press Release | [marketing-press-release.md](./engine/content/marketing-press-release.md) | A4 Letterhead |

**Client Success**
| Module | File | Format |
|---|---|---|
| Client Welcome Pack | [client-welcome-pack.md](./engine/content/client-welcome-pack.md) | A4 Letterhead |
| Client Feedback Form | [client-feedback-form.md](./engine/content/client-feedback-form.md) | A4 Letterhead |

**Culture / Experience**
| Module | File | Format |
|---|---|---|
| Appreciation Letter | [culture-appreciation.md](./engine/content/culture-appreciation.md) | A4 Letterhead |
| Transparency Report | [culture-transparency-report.md](./engine/content/culture-transparency-report.md) | A4 Letterhead |

### Merge Workflow

1. Read the format shell → understand the visual container
2. Read the content module → understand the document body
3. Read brand tokens from `outputs/<brand>/COLORS/` and `TYPOGRAPHY/`
4. Inject content into the format's `<!-- CONTENT_SLOT -->`
5. Replace all `{{VARIABLES}}` with locked brand values + document-specific values
6. Save to `outputs/<brand>/documents/<type>-<identifier>-v<N>.md`
7. Audit: `scripts/audit.sh outputs/<brand>/documents/<file>`

### Adding New Document Types

Create a new `.md` in `engine/content/` following the existing pattern. No changes needed to formats, SKILL.md, or existing outputs.

---

## 4. Quick Audit

```bash
# Audit a complete brand identity output
./scripts/audit.sh outputs/<brand-name>-lifetime-identity-v0/

# Audit a single generated document
grep -rn "{{" outputs/<brand>/documents/<filename>.md
```

Pass = 0 lines returned. Fail = fix all unreplaced variables before delivery.

---

## 5. Output Naming Standard

```text
outputs/<brand-lower>-lifetime-identity-v<N>/
```

- `<brand-lower>`: Lowercase slug (e.g., `d2c-with-ahrik-mono-craft`)
- `v<N>`: Major identity version (v0 = first generation, v1 = major revision)
- Previous versions are **never deleted** — they serve as historical record.
