# CloudFetch Templates Guide

> Templates ensure every external touchpoint carries the brand consistently.

---

## Required Templates (To Be Created)

### 1. Email Signature

```
Format: HTML
Content:
  - Name | Title
  - CloudFetch — The Home For Applications
  - support@cloudfetch.tech
  - cloudfetch.tech
  - Small CloudFetch icon (24px)
Style: Minimal, no borders. Inter font. Orange (#F97316) for links.
```

**AI Prompt — Email Signature HTML:**
```
Design an HTML email signature for CloudFetch team members.

Structure:
- Row 1: Full Name (Inter Bold, 14px, slate-900)
- Row 2: Job Title (Inter Regular, 12px, slate-500)
- Row 3: Divider (1px, orange #F97316, 80px wide)
- Row 4: "CloudFetch — The Home For Applications" (Inter Medium, 11px, slate-600)
- Row 5: support@cloudfetch.tech | cloudfetch.tech (Inter Regular, 11px, orange links)

Constraints: Must render in Gmail, Outlook, Apple Mail. No external CSS. Inline styles only.
```

### 2. Social Media Templates

| Platform | Size | Template |
|---|---|---|
| Instagram Post | 1080×1080 | Dark card with headline + brand icon |
| Instagram Story | 1080×1920 | Full-bleed dark BG, centered message |
| Twitter/X Post | 1200×675 | Wide card, headline left, icon right |
| LinkedIn Post | 1200×627 | Professional variant, lighter tones OK |
| YouTube Thumbnail | 1280×720 | Bold headline, face optional, orange accent |

### 3. Presentation Deck

```
Tool: Google Slides or Figma
Slides:
  1. Title Slide — Logo + tagline on dark BG
  2. Problem Slide — Icon + 3 pain points
  3. Solution Slide — CloudFetch overview
  4. Features Slide — Grid of 4-6 features
  5. Pricing Slide — Plan comparison
  6. Team Slide — Founder photos + bios
  7. CTA Slide — "Get Started" + URL

Colors: Brand palette (dark BG slides, white BG data slides)
Font: Inter throughout
```

### 4. Invoice / Letterhead

```
Top: CloudFetch logo (horizontal) left-aligned
Accent: Orange (#F97316) line under header
Body: Inter Regular, 14px, slate-900 text
Footer: "CloudFetch — The Home For Applications" | support@cloudfetch.tech
```

---

## Folder Structure

```
/TEMPLATES/
├── email-signature/
│   └── signature.html
├── social/
│   ├── instagram-post-template.figma
│   ├── twitter-card-template.figma
│   └── linkedin-post-template.figma
├── presentation/
│   └── cloudfetch-deck.pptx
├── letterhead/
│   └── cloudfetch-letterhead.pdf
└── invoice/
    └── cloudfetch-invoice-template.pdf
```
