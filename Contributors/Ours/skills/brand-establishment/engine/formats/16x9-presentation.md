# 16:9 Presentation — Slide Deck Format Shell

> **Format Version:** `v1.0`  
> **Output:** 16:9 Widescreen (1920×1080px)  
> **Compatible Content:** `proposal-client`, `proposal-partnership`, `capability-statement`

---

## Slide Setup

| Property | Value |
|---|---|
| Aspect Ratio | 16:9 (1920×1080px) |
| Safe Margins | 80px all sides |
| Output | Single HTML file with slide navigation |

---

## Slide Layout Template

```text
┌──────────────────────────────────────────────────────────────┐
│  {{BRAND_NAME}} [wordmark, top-left, 36px height]            │
│                                                              │
│                                                              │
│              <!-- CONTENT_SLOT -->                           │
│                                                              │
│              Slide content injected here.                    │
│              Each section in the content module              │
│              becomes one slide.                              │
│                                                              │
│                                                              │
│──────────────────────────────────────────────────────────────│
│  {{BRAND_NAME}} — {{TAGLINE}}  │  {{SUPPORT_EMAIL}}  │  N/M │
└──────────────────────────────────────────────────────────────┘
```

---

## Slide Typography Rules

| Element | Font | Size | Weight | Color |
|---|---|---|---|---|
| Slide Title | `{{DISPLAY_FONT}}` | 36px | Bold (700) | `{{CANVAS_COLOR}}` or `{{PRIMARY_INK}}` |
| Subtitle | `{{BODY_FONT}}` | 20px | Regular (400) | `{{MUTED_INK}}` |
| Body Text | `{{BODY_FONT}}` | 18px | Regular (400) | `{{CANVAS_COLOR}}` at 85% opacity |
| Bullet Points | `{{BODY_FONT}}` | 18px | Regular (400) | `{{CANVAS_COLOR}}` at 85% opacity |
| Key Numbers | `{{DISPLAY_FONT}}` | 48px | Bold (700) | `{{ACCENT_COLOR}}` |
| Footer Text | `{{BODY_FONT}}` | 12px | Regular (400) | `{{MUTED_INK}}` |

---

## Slide Color Rules

| Element | Color |
|---|---|
| Background (dark slides) | `{{BG_DARK}}` |
| Background (light slides) | `{{CANVAS_COLOR}}` |
| Accent / Highlights | `{{ACCENT_COLOR}}` or `{{PRIMARY_COLOR}}` |
| CTA Buttons | `{{ACCENT_COLOR}}` background, `{{CANVAS_COLOR}}` text |

---

## Standard 9-Slide Structure

When generating a full presentation, follow this slide order:

| Slide # | Purpose | Layout |
|---|---|---|
| 1 | Title | Brand name + tagline, centered, dark background |
| 2 | Problem / Friction | What the audience is struggling with |
| 3 | Solution / Throughline | How {{BRAND_NAME}} solves it |
| 4 | Core Principles | Key operational commitments |
| 5 | Architecture / How | Technical or process advantage |
| 6 | Visual Proof | Production quality, portfolio, or demo |
| 7 | Acquisition / Model | How value is delivered or monetized |
| 8 | Proof / Traction | Numbers, case studies, testimonials |
| 9 | CTA / Invitation | Contact info, next step |

---

## Variable Reference

| Variable | Description |
|---|---|
| `{{BRAND_NAME}}` | Full brand name |
| `{{DISPLAY_FONT}}` | Headline / display font |
| `{{BODY_FONT}}` | Body / paragraph font |
| `{{BG_DARK}}` | Dark slide background color |
| `{{CANVAS_COLOR}}` | Light surface / text-on-dark color |
| `{{PRIMARY_INK}}` | Primary text color |
| `{{MUTED_INK}}` | Muted / secondary text color |
| `{{ACCENT_COLOR}}` | CTA / highlight color |
| `{{TAGLINE}}` | Brand tagline |
| `{{SUPPORT_EMAIL}}` | Contact email |
