# 1-Page Summary — Executive Format Shell

> **Format Version:** `v1.0`  
> **Output:** Single A4 page (210mm × 297mm), dense layout  
> **Compatible Content:** `capability-statement`, `proposal-client` (condensed), executive briefs

---

## Page Setup

| Property | Value |
|---|---|
| Page Size | A4 Portrait (210mm × 297mm) |
| Margins | 20mm all sides (tighter than letterhead) |
| Columns | 2-column layout for maximum density |
| Target | Everything fits on ONE page |

---

## Layout Structure

```text
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  {{BRAND_NAME}}               {{TAGLINE}}                          │
│  [Wordmark, bold, left]       [Italic, right-aligned]              │
│                                                                    │
│  ─────────────────────────────────────────────────────────────────  │
│  [2px rule in {{ACCENT_COLOR}} — full width]                       │
│                                                                    │
│  ┌──────────────────────┐  ┌──────────────────────┐                │
│  │   LEFT COLUMN        │  │   RIGHT COLUMN       │                │
│  │                      │  │                       │                │
│  │   <!-- CONTENT_SLOT  │  │   <!-- CONTENT_SLOT   │                │
│  │       LEFT -->       │  │       RIGHT -->       │                │
│  │                      │  │                       │                │
│  │   Core capabilities, │  │   Key metrics,        │                │
│  │   services, or       │  │   differentiators,    │                │
│  │   primary content    │  │   contact, or CTA     │                │
│  │                      │  │                       │                │
│  └──────────────────────┘  └──────────────────────┘                │
│                                                                    │
│  ─────────────────────────────────────────────────────────────────  │
│  {{SUPPORT_EMAIL}}  ·  {{DOMAIN}}  ·  {{BRAND_NAME}} ©{{YEAR}}     │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

---

## Typography Rules (Compact)

| Element | Font | Size | Weight | Color |
|---|---|---|---|---|
| Brand Name | `{{DISPLAY_FONT}}` | 20px | Bold (700) | `{{PRIMARY_INK}}` |
| Tagline | `{{BODY_FONT}}` | 12px | Italic (400i) | `{{MUTED_INK}}` |
| Section Title | `{{DISPLAY_FONT}}` | 14px | SemiBold (600) | `{{PRIMARY_INK}}` |
| Body Text | `{{BODY_FONT}}` | 10pt | Regular (400) | `{{PRIMARY_INK}}` |
| Bullet Points | `{{BODY_FONT}}` | 10pt | Regular (400) | `{{PRIMARY_INK}}` |
| Metrics / Numbers | `{{DISPLAY_FONT}}` | 18px | Bold (700) | `{{ACCENT_COLOR}}` |
| Footer | `{{BODY_FONT}}` | 8pt | Regular (400) | `{{MUTED_INK}}` |

---

## Variable Reference

| Variable | Description |
|---|---|
| `{{BRAND_NAME}}` | Full brand name |
| `{{DISPLAY_FONT}}` | Headline font |
| `{{BODY_FONT}}` | Body font |
| `{{PRIMARY_INK}}` | Primary text color |
| `{{MUTED_INK}}` | Muted text color |
| `{{ACCENT_COLOR}}` | Highlight / accent color |
| `{{RULE_COLOR}}` | Divider color |
| `{{TAGLINE}}` | Brand tagline |
| `{{SUPPORT_EMAIL}}` | Contact email |
| `{{DOMAIN}}` | Web domain |
