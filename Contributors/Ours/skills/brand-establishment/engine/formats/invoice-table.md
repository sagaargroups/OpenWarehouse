# Invoice Table — Billing Format Shell

> **Format Version:** `v1.0`  
> **Output:** A4 portrait or responsive HTML  
> **Compatible Content:** `invoice-standard`

---

## Layout Structure

```text
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  {{BRAND_NAME}}                              INVOICE               │
│  [Logo/Wordmark]                             [{{DISPLAY_FONT}}     │
│                                               Bold, 24px]          │
│                                                                    │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                    │
│  Invoice #: {{INVOICE_NUM}}          Date: {{INVOICE_DATE}}        │
│  Due Date: {{DUE_DATE}}                                            │
│                                                                    │
│  ┌──────────────────┐   ┌──────────────────┐                      │
│  │ FROM:            │   │ BILL TO:         │                      │
│  │ {{BRAND_NAME}}   │   │ {{CLIENT_NAME}}  │                      │
│  │ {{BRAND_ADDRESS}}│   │ {{CLIENT_ADDR}}  │                      │
│  │ {{SUPPORT_EMAIL}}│   │ {{CLIENT_EMAIL}} │                      │
│  └──────────────────┘   └──────────────────┘                      │
│                                                                    │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                    │
│  <!-- CONTENT_SLOT: Line items table injected here -->             │
│                                                                    │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │ Description          │  Qty  │  Rate      │  Amount       │    │
│  ├──────────────────────┼───────┼────────────┼───────────────┤    │
│  │ {{LINE_ITEM}}        │  N    │  ₹X,XXX    │  ₹XX,XXX     │    │
│  ├──────────────────────┼───────┼────────────┼───────────────┤    │
│  │                      │       │  Subtotal  │  ₹XX,XXX     │    │
│  │                      │       │  Tax (18%) │  ₹X,XXX      │    │
│  │                      │       │  TOTAL     │  ₹XX,XXX     │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                    │
│  Payment Details:                                                  │
│  Bank: {{BANK_NAME}} | Acc: {{ACCOUNT_NUM}} | IFSC: {{IFSC}}      │
│  UPI: {{UPI_ID}}                                                   │
│                                                                    │
│  ─────────────────────────────────────────────────────────────────  │
│  {{BRAND_NAME}} — {{TAGLINE}}                                      │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

---

## Typography Rules

| Element | Font | Size | Weight | Color |
|---|---|---|---|---|
| "INVOICE" title | `{{DISPLAY_FONT}}` | 24px | Bold (700) | `{{PRIMARY_INK}}` |
| Field Labels | `{{BODY_FONT}}` | 10pt | SemiBold (600) | `{{MUTED_INK}}` |
| Field Values | `{{BODY_FONT}}` | 10pt | Regular (400) | `{{PRIMARY_INK}}` |
| Table Headers | `{{BODY_FONT}}` | 10pt | SemiBold (600) | `{{CANVAS_COLOR}}` on `{{PRIMARY_INK}}` bg |
| Table Cells | `{{BODY_FONT}}` | 10pt | Regular (400) | `{{PRIMARY_INK}}` |
| Total Amount | `{{DISPLAY_FONT}}` | 14pt | Bold (700) | `{{ACCENT_COLOR}}` |
| Payment Details | `{{BODY_FONT}}` | 9pt | Regular (400) | `{{MUTED_INK}}` |

---

## Color Application

| Element | Color |
|---|---|
| Table header row | `{{PRIMARY_INK}}` background, `{{CANVAS_COLOR}}` text |
| Table alt rows | `{{SURFACE_COLOR}}` background |
| Total row | `{{ACCENT_COLOR}}` text |
| Dividers | `{{RULE_COLOR}}` |

---

## Variable Reference

| Variable | Description |
|---|---|
| `{{BRAND_NAME}}` | Full brand name |
| `{{DISPLAY_FONT}}` | Headline font |
| `{{BODY_FONT}}` | Body font |
| `{{PRIMARY_INK}}` | Primary text / dark color |
| `{{MUTED_INK}}` | Secondary text color |
| `{{CANVAS_COLOR}}` | White / light text color |
| `{{SURFACE_COLOR}}` | Card / alt-row background |
| `{{ACCENT_COLOR}}` | Highlight color for totals |
| `{{RULE_COLOR}}` | Divider color |
| `{{TAGLINE}}` | Brand tagline |
| `{{SUPPORT_EMAIL}}` | Contact email |
| `{{DOMAIN}}` | Web domain |
