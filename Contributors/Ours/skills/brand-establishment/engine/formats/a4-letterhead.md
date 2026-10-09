# A4 Letterhead — Document Format Shell

> **Format Version:** `v1.0`  
> **Output:** A4 portrait (210mm × 297mm)  
> **Compatible Content:** `contract-msa`, `contract-sow`, `contract-nda`, `contract-sla`, `proposal-client`, `proposal-partnership`

---

## Page Setup

| Property | Value |
|---|---|
| Page Size | A4 Portrait (210mm × 297mm) |
| Margins | 25mm all sides |
| Print Area | 160mm × 247mm |

---

## Header Block

```text
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  {{BRAND_NAME}}                           {{SUPPORT_EMAIL}}        │
│  [Wordmark in {{DISPLAY_FONT}} Bold]      {{DOMAIN}}              │
│                                            {{PHONE}} (if exists)   │
│                                                                    │
│  ─────────────────────────────────────────────────────────────────  │
│  [1px rule in {{RULE_COLOR}} — full width]                         │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Header Typography
- Brand name: `{{DISPLAY_FONT}}` Bold, 18px, `{{PRIMARY_INK}}`
- Contact details: `{{BODY_FONT}}` Regular, 10pt, `{{MUTED_INK}}`
- Divider rule: 1px solid `{{RULE_COLOR}}`

---

## Content Area

```text
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  <!-- CONTENT_SLOT -->                                             │
│                                                                    │
│  Content from the paired content module is injected here.          │
│  All section headings, clauses, tables, and body text              │
│  rendered using the typography rules below.                        │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Content Typography Rules
| Element | Font | Size | Weight | Color |
|---|---|---|---|---|
| Document Title | `{{DISPLAY_FONT}}` | 24px | Bold (700) | `{{PRIMARY_INK}}` |
| Section Heading | `{{DISPLAY_FONT}}` | 16px | SemiBold (600) | `{{PRIMARY_INK}}` |
| Subsection | `{{BODY_FONT}}` | 13px | SemiBold (600) | `{{PRIMARY_INK}}` |
| Body Text | `{{BODY_FONT}}` | 11pt | Regular (400) | `{{PRIMARY_INK}}` |
| Table Headers | `{{BODY_FONT}}` | 10pt | SemiBold (600) | `{{PRIMARY_INK}}` |
| Table Cells | `{{BODY_FONT}}` | 10pt | Regular (400) | `{{MUTED_INK}}` |
| Legal / Fine Print | `{{BODY_FONT}}` | 8pt | Regular (400) | `{{MUTED_INK}}` |

---

## Footer Block

```text
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  ─────────────────────────────────────────────────────────────────  │
│  [1px rule in {{RULE_COLOR}} — full width]                         │
│                                                                    │
│  Page {{PAGE_NUM}}                    {{BRAND_NAME}} — {{TAGLINE}} │
│                                                                    │
│  "All client source repositories and IP transferred upon           │
│   final settlement."                                               │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Footer Typography
- Page number: `{{BODY_FONT}}` Regular, 9pt, `{{MUTED_INK}}`
- Brand tagline: `{{BODY_FONT}}` Medium, 9pt, `{{MUTED_INK}}`
- Sovereignty notice: `{{BODY_FONT}}` Italic, 8pt, `{{MUTED_INK}}`

---

## Variable Reference

| Variable | Description |
|---|---|
| `{{BRAND_NAME}}` | Full brand name |
| `{{DISPLAY_FONT}}` | Headline / display font |
| `{{BODY_FONT}}` | Body / paragraph font |
| `{{PRIMARY_INK}}` | Primary text color (e.g., `#111312`) |
| `{{MUTED_INK}}` | Secondary/muted text color (e.g., `#6E7270`) |
| `{{RULE_COLOR}}` | Divider line color (e.g., `#E3E3DE`) |
| `{{SUPPORT_EMAIL}}` | Contact email |
| `{{DOMAIN}}` | Web domain |
| `{{TAGLINE}}` | Brand tagline |
