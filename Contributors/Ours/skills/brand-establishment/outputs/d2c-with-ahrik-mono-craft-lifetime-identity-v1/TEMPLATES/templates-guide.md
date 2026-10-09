# D2C With AHrik — Operational Templates Guide
### Lifetime Identity Standard: Mono-Craft v1

---

## 1. Official HTML Email Signature

Copy-pasteable HTML with inline styling for email client compatibility:

```html
<table cellpadding="0" cellspacing="0" border="0" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111312; font-size: 14px; line-height: 20px;">
  <tr>
    <td style="padding-bottom: 8px;">
      <span style="font-weight: 700; font-size: 16px; letter-spacing: -0.2px; color: #111312;">D2C With AHrik</span>
      <span style="color: #6E7270; font-size: 13px; margin-left: 8px;">· Brand & Growth Infrastructure</span>
    </td>
  </tr>
  <tr>
    <td style="padding-bottom: 12px; border-bottom: 1px solid #E3E3DE;">
      <span style="color: #6E7270; font-size: 13px; font-style: italic;">"Connect direct. Grow faster."</span>
    </td>
  </tr>
  <tr>
    <td style="padding-top: 12px; font-size: 12px; color: #6E7270;">
      <a href="https://d2cwith.ahrik.com" style="color: #111312; text-decoration: none; font-weight: 600;">d2cwith.ahrik.com</a>
      <span style="margin: 0 6px; color: #E3E3DE;">|</span>
      <a href="mailto:hello@d2cwith.ahrik.com" style="color: #111312; text-decoration: none;">hello@d2cwith.ahrik.com</a>
    </td>
  </tr>
</table>
```

---

## 2. 9-Slide Presentation & Pitch Deck Architecture

Designed for 16:9 widescreen presentations (`1920×1080px`) using the **Mono-Craft** visual language:

- **Slide 1 (Title):** `D2C With AHrik` — *Connect direct. Grow faster.* Minimal white canvas, dark obsidian wordmark.
- **Slide 2 (The Friction):** Why traditional agencies fail: 3 vendors who don't talk, slow WordPress plugins, and high retainer bloat.
- **Slide 3 (The Throughline):** Brand, website, visual production, launch — one team, zero handoffs.
- **Slide 4 (The 4 Commitments):** You own everything · Scope is written down · We say when it's a bad idea · No invented proof.
- **Slide 5 (Architecture Advantage):** Edge static delivery vs legacy CMS ($0/mo hosting, unhackable, 100/100 Core Web Vitals).
- **Slide 6 (Visual Production):** AI & commercial studio catalog visuals without expensive multi-week shoots.
- **Slide 7 (Direct Acquisition):** Storefront conversion architecture + direct customer connection.
- **Slide 8 (Commercial Proof):** Live verified client case studies and performance benchmarks.
- **Slide 9 (The Invitation):** Direct communication: `hello@d2cwith.ahrik.com` | `d2cwith.ahrik.com`.

---

## 3. Letterhead & Document Formatting

- **Page Margins:** 25mm all sides.
- **Header:** `D2C With AHrik` wordmark top-left, contact coordinates top-right (`hello@d2cwith.ahrik.com`).
- **Divider:** `1px` continuous rule in `#E3E3DE`.
- **Typography:** Headlines in `Gloock` 24px, Body text in `Outfit` 11pt, regular leading.
- **Footer:** Page numbering and legal sovereignty notice: *"All client source repositories and IP transferred upon final settlement."*

---

## 4. Composable Document System (v1 NEW)

> **For production documents (contracts, proposals, invoices, HR letters, etc.), use the composable merge system.**

The engine's format shells and content modules generate branded documents on demand:

### How to Generate a Document

1. Read the **format shell** from `engine/formats/` (e.g., `a4-letterhead.md`)
2. Read the **content module** from `engine/content/` (e.g., `contract-nda.md`)
3. Merge format + content + these brand tokens:

| Token | Value |
|---|---|
| `BRAND_NAME` | D2C With AHrik |
| `DISPLAY_FONT` | Gloock |
| `BODY_FONT` | Outfit |
| `PRIMARY_INK` | #111312 |
| `MUTED_INK` | #6E7270 |
| `CANVAS_COLOR` | #FFFFFF |
| `SURFACE_COLOR` | #F4F4F1 |
| `RULE_COLOR` | #E3E3DE |
| `ACCENT_COLOR` | #111312 |
| `TAGLINE` | Connect direct. Grow faster. |
| `DOMAIN` | d2cwith.ahrik.com |
| `SUPPORT_EMAIL` | hello@d2cwith.ahrik.com |

4. Save to `documents/<type>-<identifier>-v<N>.md`
5. Audit: zero unreplaced template variables remaining

### Available Document Types (22 across 8 departments)

| Department | Documents |
|---|---|
| Legal | MSA, NDA, SLA |
| Sales | Client Proposal, Partnership Proposal, Capability Statement |
| Finance | Invoice, Quotation, Receipt |
| HR | Offer Letter, Employment Agreement, Onboarding Kit, Exit Letter |
| Operations | SOW, Change Order, Status Report |
| Marketing | Case Study, Press Release |
| Client Success | Welcome Pack, Feedback Form |
| Culture | Appreciation Letter, Transparency Report |
