# Content Modules — Document Body Structures

> **Version:** `content-v2.0`  
> **Total Modules:** 22

## What Are Content Modules?

Content modules define the **body structure** (sections, clauses, fields, legal language) of a specific document type. They contain no visual formatting — only the content architecture.

## How to Use

1. Pick a content module that matches the document you need
2. Pick a format shell from `../formats/` that provides the visual container
3. Merge: inject the content module into the format's `<!-- CONTENT_SLOT -->`
4. Replace all `{{VARIABLES}}` with the brand's locked tokens + document-specific values
5. Output to `outputs/<brand>/documents/<document-type>-<identifier>-v<N>.md`

---

## Full Module Catalog (22 modules, 8 departments)

### Legal (3 modules)

| Module | File | Format | Purpose |
|---|---|---|---|
| Master Services Agreement | `contract-msa.md` | `a4-letterhead` | Binding services agreement |
| Non-Disclosure Agreement | `contract-nda.md` | `a4-letterhead` | Mutual confidentiality |
| Service Level Agreement | `contract-sla.md` | `a4-letterhead` | Performance guarantees |

### Sales (3 modules)

| Module | File | Format | Purpose |
|---|---|---|---|
| Client Proposal | `proposal-client.md` | `a4-letterhead` / `16x9-presentation` | Project proposal |
| Partnership Proposal | `proposal-partnership.md` | `a4-letterhead` | JV / collaboration proposal |
| Capability Statement | `capability-statement.md` | `1-page-summary` | One-page org overview |

### Finance (3 modules)

| Module | File | Format | Purpose |
|---|---|---|---|
| Standard Invoice | `invoice-standard.md` | `invoice-table` | Billing document |
| Quotation / Estimate | `finance-quotation.md` | `a4-letterhead` | Pre-agreement pricing |
| Payment Receipt | `finance-receipt.md` | `invoice-table` | Post-payment confirmation |

### HR (4 modules)

| Module | File | Format | Purpose |
|---|---|---|---|
| Offer Letter | `hr-offer-letter.md` | `a4-letterhead` | Employment invitation |
| Employment Agreement | `hr-employment-agreement.md` | `a4-letterhead` | Binding engagement contract |
| Onboarding Welcome Kit | `hr-onboarding-kit.md` | `a4-letterhead` | Day 1 orientation |
| Exit / Offboarding | `hr-exit-letter.md` | `a4-letterhead` | Dignified separation |

### Operations (3 modules)

| Module | File | Format | Purpose |
|---|---|---|---|
| Statement of Work | `contract-sow.md` | `a4-letterhead` | Project scope appendix |
| Change Order | `ops-change-order.md` | `a4-letterhead` | SOW scope amendment |
| Project Status Report | `ops-status-report.md` | `a4-letterhead` | Periodic progress update |

### Marketing (2 modules)

| Module | File | Format | Purpose |
|---|---|---|---|
| Case Study | `marketing-case-study.md` | `a4-letterhead` / `1-page-summary` | Client success story |
| Press Release | `marketing-press-release.md` | `a4-letterhead` | Public announcement |

### Client Success (2 modules)

| Module | File | Format | Purpose |
|---|---|---|---|
| Client Welcome Pack | `client-welcome-pack.md` | `a4-letterhead` | Client onboarding |
| Client Feedback Form | `client-feedback-form.md` | `a4-letterhead` | Post-project feedback |

### Culture / Experience (2 modules)

| Module | File | Format | Purpose |
|---|---|---|---|
| Appreciation Letter | `culture-appreciation.md` | `a4-letterhead` | Personal recognition |
| Transparency Report | `culture-transparency-report.md` | `a4-letterhead` | Open organizational state report |

---

## Adding New Content Modules

Create a new `.md` file in this directory:

1. **Header:** Module name, version, compatible formats, department, philosophy
2. **Sections:** Define each section/clause with headings
3. **Variables:** List all `{{VARIABLES}}` the module requires
4. **Compatible Formats:** Declare which format shells work with this content
