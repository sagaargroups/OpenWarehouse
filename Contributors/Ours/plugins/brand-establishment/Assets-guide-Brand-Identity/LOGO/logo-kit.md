# CloudFetch Logo Kit — Guide & AI Generation Prompts

> Logo assets must be created manually or via AI generation using the prompts below.

---

## Required Logo Variants

| Asset | Format | Use Case |
|---|---|---|
| **Primary Logo (Full)** | SVG, PNG (transparent) | Website header, marketing pages, presentations |
| **Secondary Logo (Horizontal)** | SVG, PNG | Emails, banners, compact headers |
| **Icon Only** | SVG, PNG, ICO (16×16, 32×32, 180×180, 512×512) | Favicon, app icon, profile pictures |
| **Dark Background Version** | SVG, PNG | On dark backgrounds (white/light mark) |
| **Light Background Version** | SVG, PNG | On white/light backgrounds (dark mark) |
| **Monochrome** | SVG, PNG | Legal, printing, stamp, watermarks |

---

## Logo Rules

- **Minimum size:** Never render below 24px height
- **Clear space:** Maintain at least 1× logo height as padding on all sides
- **Never:** Stretch, skew, add drop shadows, recolor (unless using approved variants), place on busy backgrounds without contrast overlay

---

## AI Prompt — Primary Logo Generation

```
Design a modern, minimal logo for "CloudFetch" — a SaaS platform for application hosting and distribution.

Visual metaphor: A stylized combination of a cloud shape and a download/fetch arrow, suggesting seamless data flow and connectivity. The arrow should feel dynamic, not static.

Style:
- Clean, geometric, scalable to favicon size
- Works on both dark (#0B0D14) and light (#FFFFFF) backgrounds
- Primary accent color: Orange (#F97316)
- Secondary: Slate gray tones for depth

Output:
- Vector (SVG-ready paths)
- Simple enough to be recognizable as a 16×16 favicon
- No text in the icon — logo mark only

Mood: Premium SaaS, developer-friendly, trustworthy, not playful or cartoony
```

---

## AI Prompt — Full Logo with Wordmark

```
Design a horizontal logo lockup for "CloudFetch" — combining the icon mark (cloud + fetch arrow in orange #F97316) with the wordmark "CloudFetch" in Inter font (Bold, tracking-tight).

Layout:
- Icon on the left, wordmark on the right
- Tagline "The Home For Applications" in smaller text below the wordmark (Inter, Regular, 10px equivalent, color: Orange #EA580C for light backgrounds, Orange #F97316 for dark)

Versions needed:
1. Dark background variant (white wordmark, orange icon)
2. Light background variant (slate-900 wordmark, orange icon)
3. Monochrome (all one color — black or white)

Proportions: Icon height = wordmark cap height. Tagline should be ~40% of wordmark size.
```

---

## AI Prompt — Favicon / App Icon

```
Design a square app icon for "CloudFetch" platform.

Requirements:
- Must be clearly visible at 32×32 pixels
- Uses the CloudFetch icon mark (cloud + fetch arrow)
- Orange (#F97316) icon on a dark (#0B0D14) rounded-square background
- Rounded corners: ~20% radius
- No text, icon only
- Style: Flat, modern, no gradients or 3D effects

Export sizes: 16×16, 32×32, 180×180 (Apple touch), 192×192 (Android), 512×512 (high-res)
```

---

## Folder Structure

```
/LOGO/
├── primary/
│   ├── cloudfetch-logo-full-dark.svg
│   ├── cloudfetch-logo-full-dark.png
│   ├── cloudfetch-logo-full-light.svg
│   └── cloudfetch-logo-full-light.png
├── icon/
│   ├── cloudfetch-icon.svg
│   ├── favicon.ico
│   ├── icon-32.png
│   ├── icon-180.png
│   ├── icon-192.png
│   └── icon-512.png
├── horizontal/
│   ├── cloudfetch-horizontal-dark.svg
│   └── cloudfetch-horizontal-light.svg
└── monochrome/
    ├── cloudfetch-mono-black.svg
    └── cloudfetch-mono-white.svg
```
