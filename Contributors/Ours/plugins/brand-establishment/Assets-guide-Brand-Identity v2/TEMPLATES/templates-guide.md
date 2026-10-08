# {{BRAND_NAME}} Templates Guide

> **AI:** Replace all `{{VARIABLES}}` with the user's actual brand details before generating.

---

## Variable Reference

| Variable | Description | Example |
|---|---|---|
| `{{BRAND_NAME}}` | Full brand name | "Golu Snacks" |
| `{{BRAND_LOWER}}` | Lowercase for filenames | "golu-snacks" |
| `{{TAGLINE}}` | Brand tagline | "Taste Ka Asli Maza" |
| `{{SUPPORT_EMAIL}}` | Support email | "support@golusnacks.com" |
| `{{DOMAIN}}` | Website domain | "golusnacks.com" |
| `{{PRIMARY_COLOR}}` | Primary HEX | "#E63946" |
| `{{SECONDARY_COLOR_1}}` | Secondary HEX | "#1D3557" |
| `{{BG_DARK}}` | Dark background | "#0F172A" |
| `{{DISPLAY_FONT}}` | Headline font | "Poppins" |
| `{{BODY_FONT}}` | Body font | "Inter" |

---

## 1. Email Signature

### Structure:
- Row 1: Full name ({{DISPLAY_FONT}} SemiBold, 14px, dark)
- Row 2: Title / Position ({{BODY_FONT}} Regular, 12px, muted)
- Row 3: Divider line in {{PRIMARY_COLOR}} (2px, 60px width)
- Row 4: "{{BRAND_NAME}} — {{TAGLINE}}" ({{BODY_FONT}} Medium, 11px, muted)
- Row 5: {{SUPPORT_EMAIL}} | {{DOMAIN}} ({{BODY_FONT}} Regular, 11px, {{PRIMARY_COLOR}} links)
- Row 6: Small {{BRAND_NAME}} icon (24px)

### AI Prompt:
```
Design an HTML email signature for {{BRAND_NAME}} team members.

Structure:
- Name in {{DISPLAY_FONT}} SemiBold, 14px
- Title below in {{BODY_FONT}} Regular, 12px, gray
- Divider: thin line in {{PRIMARY_COLOR}}
- "{{BRAND_NAME}} — {{TAGLINE}}" in {{BODY_FONT}} Medium, 11px
- {{SUPPORT_EMAIL}} | {{DOMAIN}} as links in {{PRIMARY_COLOR}}
- Small {{BRAND_NAME}} icon (24px)

Style: Minimal, professional, clean
Output: HTML (inline styles for email compatibility)
```

---

## 2. Pitch Deck / Presentation

### Slide Structure:
1. Title Slide — {{BRAND_NAME}} + {{TAGLINE}}
2. Problem Slide — What problem we solve
3. Solution Slide — {{BRAND_NAME}} overview
4. How It Works — 3-step visual flow
5. Market Slide — Target market & opportunity
6. Traction Slide — Numbers, milestones, proof
7. Business Model — How we make money
8. Team Slide — Key team members
9. Ask / CTA Slide — What we need + contact

### Design Rules:
| Element | Specification |
|---|---|
| Background | {{BG_DARK}} (dark slides) or White (light slides) |
| Headlines | {{DISPLAY_FONT}} Bold, 36px, white or {{SECONDARY_COLOR_1}} |
| Body | {{BODY_FONT}} Regular, 18px, light gray or dark gray |
| Accent | {{PRIMARY_COLOR}} for highlights, CTAs, key numbers |
| Slide size | 16:9 (1920×1080) |

### AI Prompt:
```
Create an HTML pitch deck presentation for "{{BRAND_NAME}}".

Design specs:
- 9 slides, 16:9 ratio
- Top: {{BRAND_NAME}} logo (horizontal) left-aligned
- Background: {{BG_DARK}}
- Headlines: {{DISPLAY_FONT}} Bold, 36px, white
- Body: {{BODY_FONT}} Regular, 18px, #CBD5E1
- Footer: "{{BRAND_NAME}} — {{TAGLINE}}" | {{SUPPORT_EMAIL}}
- Accent: {{PRIMARY_COLOR}} for buttons, highlights, charts

Output: Single HTML file with slide navigation
```

---

## 3. Letterhead

### Layout:
| Element | Position |
|---|---|
| {{BRAND_NAME}} logo | Top-left |
| Company details | Top-right (address, email, domain) |
| Accent line | Below header, full width, {{PRIMARY_COLOR}} |
| Content area | Body of the page |
| Footer | Page number, "{{BRAND_NAME}} — {{TAGLINE}}" centered |

### AI Prompt:
```
Design a letterhead for "{{BRAND_NAME}}".

- Header: Logo left, company details right
- {{PRIMARY_COLOR}} accent line below header
- Footer: centered "{{BRAND_NAME}} — {{TAGLINE}}" + page number
- Font: {{BODY_FONT}} for all text
- Size: A4 portrait

Output: SVG
```

---

## 4. Invoice Template

### Required Fields:
| Field | Description |
|---|---|
| Invoice # | Auto-incrementing number |
| Date | Issue date |
| Due date | Payment deadline |
| From | {{BRAND_NAME}} details |
| Bill To | Customer details |
| Items table | Description, Qty, Rate, Amount |
| Subtotal | |
| Tax | |
| Total | Bold, {{PRIMARY_COLOR}} |
| Payment details | Bank / UPI / PayPal info |
| Notes | Optional message |

### AI Prompt:
```
Design an invoice template for "{{BRAND_NAME}}".

- Header: {{BRAND_NAME}} logo + "INVOICE" in {{DISPLAY_FONT}}
- Colors: {{PRIMARY_COLOR}} for accents, {{BG_DARK}} for header row
- Font: {{BODY_FONT}} for all content
- Include all standard invoice fields
- Professional, clean design

Output: SVG or HTML
```

---

## Output Folder Structure

```
/TEMPLATES/
├── email-signature/
│   └── {{BRAND_LOWER}}-email-signature.html
├── pitch-deck/
│   └── {{BRAND_LOWER}}-deck.html
├── letterhead/
│   └── {{BRAND_LOWER}}-letterhead.svg
└── invoice/
    └── {{BRAND_LOWER}}-invoice-template.svg
```
