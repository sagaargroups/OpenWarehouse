# CloudFetch Imagery & Visual Style Guide

> Defines the visual language for all photography, illustrations, icons, patterns, and social media assets.

---

## Photography Style

| Attribute | Direction |
|---|---|
| **Tone** | Professional, clean, modern — NOT stock-photo generic |
| **Lighting** | Bright, natural light for light-mode assets. Moody, high-contrast for dark-mode |
| **People** | Real developers working, diverse teams, authentic environments |
| **Backgrounds** | Minimal. Solid colors or subtle gradients. No busy textures |
| **Color grading** | Slight desaturation with warm orange tint for brand cohesion |

---

## Illustration Style

| Attribute | Direction |
|---|---|
| **Style** | Flat, geometric, minimal — NOT hand-drawn or cartoonish |
| **Colors** | Use brand palette (orange accent, slate neutrals) |
| **Line weight** | Consistent 2px strokes across all illustrations |
| **Complexity** | Simple enough to work at 48×48 icon scale |
| **Use cases** | Empty states, onboarding flows, feature explanations, error pages |

---

## Icon System

| Attribute | Direction |
|---|---|
| **Library** | `lucide-react` (primary), custom SVGs when needed |
| **Style** | Outlined (not filled), rounded corners, 24×24 default |
| **Active state** | `text-orange-600` (light) / `text-orange-500` (dark) |
| **Inactive state** | `text-slate-400` (light) / `text-slate-500` (dark) |
| **Sizing** | `h-4 w-4` (sidebar), `h-5 w-5` (toolbar), `h-6 w-6` (hero) |

---

## Patterns & Textures

- **No patterns** in production UI. Keep surfaces flat and clean
- **Marketing pages** may use subtle dot-grid overlays at very low opacity (`opacity-5`) for texture
- **Dark mode** uses radial gradient blurs (orange/indigo) as ambient background — **never in light mode**

---

## Social Media Asset Templates

### AI Prompt — Social Media Banner (Twitter/X, LinkedIn)

```
Design a banner image for "CloudFetch" — a SaaS platform.

Content:
- Left side: CloudFetch logo (cloud + fetch arrow icon in orange #F97316)
- Center/Right: "The Home For Applications" tagline in Inter Bold, white text
- Subtle abstract pattern of connected nodes/dots in the background

Colors: Dark background (#0B0D14), orange accent (#F97316), white text
Size: 1500×500px (Twitter/LinkedIn banner)
Style: Modern, minimal, premium SaaS aesthetic
No: Stock photos, gradients overload, or busy backgrounds
```

### AI Prompt — Social Media Post Card

```
Design a social media post card for CloudFetch announcements.

Layout:
- Dark background (#0B0D14) with subtle gradient
- CloudFetch icon in top-left corner (small, orange)
- Main text area: Large bold headline in white (Inter Bold)
- Subtitle in slate-400 below
- Orange accent line or dot decoration

Size: 1080×1080px (Instagram/LinkedIn square)
Style: Clean, typographic-forward, no imagery — text & branding only
```

### AI Prompt — OG Image (Website Sharing)

```
Design an Open Graph preview image for CloudFetch.

Content:
- CloudFetch logo (icon + wordmark) centered vertically on left third
- "The Home For Applications" large on right two-thirds
- Dark background (#0B0D14)
- Orange accent elements (subtle line, dot, or glow)

Size: 1200×630px (OG standard)
Style: Premium, immediately recognizable brand identity
```

---

## Founder / Team Photos

| Attribute | Direction |
|---|---|
| **Background** | Solid neutral (white, light gray, or dark slate) |
| **Framing** | Shoulders up, centered, professional |
| **Lighting** | Soft, diffused, no harsh shadows |
| **Expression** | Approachable, confident, natural smile or neutral |
| **Processing** | Minimal editing. Match brand warmth (slight orange/warm tone) |

> **Note:** Placeholder URLs in codebase should be replaced with real founder photo URLs.
