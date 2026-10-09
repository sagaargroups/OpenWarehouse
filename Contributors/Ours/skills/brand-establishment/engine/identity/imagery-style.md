# {{BRAND_NAME}} Imagery & Visual Style Guide

> **AI:** Replace all `{{VARIABLES}}` with the user's actual brand details before generating.

---

## Variable Reference

| Variable | Description | Example |
|---|---|---|
| `{{BRAND_NAME}}` | Full brand name | "Golu Snacks" |
| `{{BRAND_LOWER}}` | Lowercase for filenames | "golu-snacks" |
| `{{PRIMARY_COLOR}}` | Primary HEX | "#E63946" |
| `{{SECONDARY_COLOR_1}}` | Secondary HEX | "#1D3557" |
| `{{BG_DARK}}` | Dark background | "#0F172A" |
| `{{BG_LIGHT}}` | Light background | "#F8FAFC" |
| `{{DISPLAY_FONT}}` | Headline font | "Poppins" |
| `{{BODY_FONT}}` | Body font | "Inter" |
| `{{BUSINESS_TYPE}}` | What the brand does | "premium Indian snacks" |
| `{{PHOTO_STYLE}}` | Photography approach | "warm, close-up product shots" |
| `{{ILLUSTRATION_STYLE}}` | Illustration approach | "flat vector with bold colors" |
| `{{ICON_STYLE}}` | Icon design style | "rounded, filled" |
| `{{TAGLINE}}` | Brand tagline | "Taste Ka Asli Maza" |

---

## 1. Photography Style

| Rule | Guideline |
|---|---|
| Overall feel | {{PHOTO_STYLE}} |
| Lighting | Natural / warm / studio — consistent across all shots |
| Color temperature | Warm tones preferred, matching brand palette |
| Backgrounds | Clean, simple — solid colors or subtle textures |
| Subjects | Relevant to {{BUSINESS_TYPE}} |
| Editing | Consistent filter/preset across all photos |
| Avoid | Stock-looking photos, cold/clinical lighting, cluttered backgrounds |

---

## 2. Illustration Style

| Rule | Guideline |
|---|---|
| Style | {{ILLUSTRATION_STYLE}} |
| Color palette | Use brand colors only (primary, secondary, neutrals) |
| Line weight | Consistent across all illustrations |
| Complexity | Keep simple — communicate one idea per illustration |
| When to use | Empty states, feature highlights, onboarding, error pages |

---

## 3. Icon Style

| Rule | Guideline |
|---|---|
| Style | {{ICON_STYLE}} |
| Stroke width | 2px (if outlined) |
| Corner radius | Rounded (4px) |
| Grid | 24×24 base grid |
| Colors | Single color — either `{{PRIMARY_COLOR}}` or `{{NEUTRAL_MID}}` |
| Format | SVG only |

---

## 4. Social Media Templates

### Banner / Cover Image (1200×630)

**AI Prompt:**
```
Design a banner image for "{{BRAND_NAME}}" — a {{BUSINESS_TYPE}}.

Layout:
- Left side: {{BRAND_NAME}} logo (icon mark in {{PRIMARY_COLOR}})
- Center: Tagline "{{TAGLINE}}" in {{DISPLAY_FONT}} (Bold, white)
- Right side: decorative elements related to {{BUSINESS_TYPE}}
- Background: Dark gradient from {{BG_DARK}} to {{SECONDARY_COLOR_1}}
- Bottom strip: {{PRIMARY_COLOR}} accent line (4px)

Dimensions: 1200×630px
Style: Modern, clean, premium
Output: SVG
```

---

### Social Post Card (1080×1080)

**AI Prompt:**
```
Design a social media post card for {{BRAND_NAME}} announcements.

Layout:
- {{BRAND_NAME}} icon in top-left corner (small, {{PRIMARY_COLOR}})
- Large headline text area (center, {{DISPLAY_FONT}}, Bold, white)
- Subtitle text below ({{BODY_FONT}}, Regular, light gray)
- Background: {{SECONDARY_COLOR_1}} solid or subtle gradient
- Decorative accent: {{PRIMARY_COLOR}} geometric shape in corner

Dimensions: 1080×1080px
Output: SVG
```

---

### Story Template (1080×1920)

**AI Prompt:**
```
Design a story template for {{BRAND_NAME}}.

Layout:
- Top: {{BRAND_NAME}} icon + wordmark (small, white)
- Center: Large text area for announcement
- Bottom: CTA button area in {{PRIMARY_COLOR}}
- Background: {{BG_DARK}} with subtle gradient overlay

Dimensions: 1080×1920px
Output: SVG
```

---

### OG Image / Link Preview (1200×630)

**AI Prompt:**
```
Design an Open Graph preview image for {{BRAND_NAME}}.

Layout:
- {{BRAND_NAME}} logo (icon + wordmark) centered vertically on left third
- Right two-thirds: "{{TAGLINE}}" in {{DISPLAY_FONT}} (SemiBold, white)
- Below tagline: "{{DOMAIN}}" in {{BODY_FONT}} (Regular, light gray, small)
- Background: {{SECONDARY_COLOR_1}} solid
- Subtle: {{PRIMARY_COLOR}} accent line on top edge

Dimensions: 1200×630px
Output: SVG
```

---

## 5. Pattern & Texture Guidelines

| Element | Guideline |
|---|---|
| Use patterns? | Yes / No (decide based on brand) |
| Pattern style | Geometric / Organic / Dot grid / Custom |
| Pattern colors | Use `{{PRIMARY_COLOR}}` at 10% opacity over backgrounds |
| When to use | Hero backgrounds, section dividers, card backgrounds |

---

## Output Folder Structure

```
/IMAGERY/
├── social/
│   ├── {{BRAND_LOWER}}-banner-1200x630.svg
│   ├── {{BRAND_LOWER}}-post-1080x1080.svg
│   ├── {{BRAND_LOWER}}-story-1080x1920.svg
│   └── {{BRAND_LOWER}}-og-1200x630.svg
├── icons/
│   └── (custom brand icons as SVG)
├── patterns/
│   └── (brand patterns as SVG)
└── photos/
    └── (brand photography)
```
