# {{BRAND_NAME}} Logo Kit — Guide & AI Generation Prompts

> **AI:** Replace all `{{VARIABLES}}` with the user's actual brand details before generating.

---

## Variable Reference (fill these first)

| Variable | Description | Example |
|---|---|---|
| `{{BRAND_NAME}}` | Full brand name | "Golu Snacks", "CloudFetch" |
| `{{BRAND_LOWER}}` | Lowercase for filenames | "golu-snacks", "cloudfetch" |
| `{{PRIMARY_COLOR}}` | Primary HEX | "#E63946", "#F97316" |
| `{{SECONDARY_COLOR}}` | Secondary HEX | "#1D3557", "#0F172A" |
| `{{BG_DARK}}` | Dark background HEX | "#0F172A" |
| `{{BG_LIGHT}}` | Light background HEX | "#FFFFFF" |
| `{{DISPLAY_FONT}}` | Headline font name | "Poppins", "Inter" |
| `{{LOGO_CONCEPT}}` | Visual metaphor | "spice bowl with steam", "cloud + download arrow" |
| `{{BUSINESS_TYPE}}` | What the brand does | "premium Indian snacks", "SaaS platform" |

---

## Logo Variants Required

| # | Variant | Filename Pattern | Use |
|---|---|---|---|
| 1 | Primary (Full — dark bg) | `{{BRAND_LOWER}}-logo-full-dark.svg` | Main usage on dark backgrounds |
| 2 | Primary (Full — light bg) | `{{BRAND_LOWER}}-logo-full-light.svg` | Main usage on light backgrounds |
| 3 | Secondary (Horizontal — dark) | `{{BRAND_LOWER}}-horizontal-dark.svg` | Headers, banners (dark bg) |
| 4 | Secondary (Horizontal — light) | `{{BRAND_LOWER}}-horizontal-light.svg` | Headers, banners (light bg) |
| 5 | Icon Only | `{{BRAND_LOWER}}-icon.svg` | Favicon, app icon, profile pic |
| 6 | Monochrome Black | `{{BRAND_LOWER}}-mono-black.svg` | Legal, print, stamp |
| 7 | Monochrome White | `{{BRAND_LOWER}}-mono-white.svg` | Watermarks, dark overlays |

---

## AI Generation Prompt — Primary Logo (Icon Mark)

```
Design a modern, minimal logo for "{{BRAND_NAME}}" — a {{BUSINESS_TYPE}}.

Requirements:
- Visual metaphor: {{LOGO_CONCEPT}}
- Primary color: {{PRIMARY_COLOR}}
- Secondary/dark base: {{SECONDARY_COLOR}}
- Style: Clean, bold, modern, works at any size from 16px favicon to billboard
- Must work on both dark and light backgrounds
- No gradients in the base mark — flat color only
- The icon should feel dynamic, not static

Output: Clean SVG, centered, 512×512 artboard
```

---

## AI Generation Prompt — Horizontal Lockup

```
Design a horizontal logo lockup for "{{BRAND_NAME}}" — combining the icon mark
in {{PRIMARY_COLOR}} with the wordmark "{{BRAND_NAME}}" in {{DISPLAY_FONT}} font
(Bold, tracking-tight).

Layout:
- Icon on left (48px equivalent height)
- 16px gap
- Wordmark right-aligned to icon center

Dark variant: Wordmark in white (#FFFFFF) — transparent background
Light variant: Wordmark in {{SECONDARY_COLOR}} — transparent background

Output: SVG, horizontal aspect ratio
```

---

## AI Generation Prompt — App Icon

```
Design a square app icon for "{{BRAND_NAME}}" — a {{BUSINESS_TYPE}}.

Requirements:
- Rounded corners (iOS style, radius ~22%)
- Background: {{PRIMARY_COLOR}}
- Icon mark in white, centered
- Uses the {{BRAND_NAME}} icon mark ({{LOGO_CONCEPT}})
- Must be recognizable at 32px and beautiful at 1024px
- No text in the icon

Output: SVG, 1024×1024
```

---

## Logo Usage Rules

| Rule | Description |
|---|---|
| Minimum size | Never render below 24px height |
| Clear space | Maintain padding equal to the height of the icon mark on all sides |
| ❌ Never stretch | Always maintain aspect ratio |
| ❌ Never recolor | Only use approved color variants |
| ❌ Never add effects | No drop shadows, bevels, outlines, or glows |
| ❌ Never rotate | Logo must always be level |
| ❌ Never place on busy backgrounds | Use solid or simple gradient backgrounds only |

---

## Output Folder Structure

```
/LOGO/
├── primary/
│   ├── {{BRAND_LOWER}}-logo-full-dark.svg
│   ├── {{BRAND_LOWER}}-logo-full-dark.png
│   ├── {{BRAND_LOWER}}-logo-full-light.svg
│   └── {{BRAND_LOWER}}-logo-full-light.png
├── icon/
│   ├── {{BRAND_LOWER}}-icon.svg
│   └── {{BRAND_LOWER}}-icon.png (multiple sizes: 32, 64, 128, 256, 512, 1024)
├── horizontal/
│   ├── {{BRAND_LOWER}}-horizontal-dark.svg
│   └── {{BRAND_LOWER}}-horizontal-light.svg
└── monochrome/
    ├── {{BRAND_LOWER}}-mono-black.svg
    └── {{BRAND_LOWER}}-mono-white.svg
```
