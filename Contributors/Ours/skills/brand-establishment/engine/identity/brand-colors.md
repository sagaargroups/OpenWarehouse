# {{BRAND_NAME}} — Complete Color System

> **AI:** Replace all `{{VARIABLES}}` with the user's actual brand colors before generating.

---

## Variable Reference

| Variable | Description | Example |
|---|---|---|
| `{{BRAND_NAME}}` | Full brand name | "Golu Snacks" |
| `{{PRIMARY_COLOR}}` | Primary HEX | "#E63946" |
| `{{PRIMARY_NAME}}` | Human name for primary | "Power Red", "Vivid Orange" |
| `{{SECONDARY_COLOR_1}}` | Secondary HEX #1 | "#1D3557" |
| `{{SECONDARY_NAME_1}}` | Human name for secondary | "Midnight Blue", "Deep Slate" |
| `{{SECONDARY_COLOR_2}}` | Secondary HEX #2 (optional) | "#457B9D" |
| `{{SECONDARY_NAME_2}}` | Human name | "Ocean Teal" |
| `{{NEUTRAL_DARK}}` | Darkest neutral | "#0F172A" |
| `{{NEUTRAL_MID}}` | Mid neutral | "#64748B" |
| `{{NEUTRAL_LIGHT}}` | Light neutral | "#F1F5F9" |
| `{{NEUTRAL_WHITE}}` | White / lightest | "#FFFFFF" |

---

## 1. Primary Color

| Property | Value |
|---|---|
| Name | {{PRIMARY_NAME}} |
| HEX | `{{PRIMARY_COLOR}}` |
| RGB | `rgb(R, G, B)` |
| HSL | `hsl(H, S%, L%)` |
| CMYK | `cmyk(C, M, Y, K)` |
| Use | Buttons, CTAs, links, active states, brand accent |

---

## 2. Secondary Colors

### Secondary 1
| Property | Value |
|---|---|
| Name | {{SECONDARY_NAME_1}} |
| HEX | `{{SECONDARY_COLOR_1}}` |
| RGB | `rgb(R, G, B)` |
| HSL | `hsl(H, S%, L%)` |
| CMYK | `cmyk(C, M, Y, K)` |
| Use | Headings, dark sections, footer, sidebar backgrounds |

### Secondary 2 (optional)
| Property | Value |
|---|---|
| Name | {{SECONDARY_NAME_2}} |
| HEX | `{{SECONDARY_COLOR_2}}` |
| RGB | `rgb(R, G, B)` |
| HSL | `hsl(H, S%, L%)` |
| CMYK | `cmyk(C, M, Y, K)` |
| Use | Hover states, subtle accents, badges |

---

## 3. Neutral Colors

| Name | HEX | Use |
|---|---|---|
| Near Black | `{{NEUTRAL_DARK}}` | Primary text, headings |
| Muted | `{{NEUTRAL_MID}}` | Secondary text, captions, borders |
| Light Gray | `{{NEUTRAL_LIGHT}}` | Section backgrounds, cards |
| White | `{{NEUTRAL_WHITE}}` | Page background, card surface |

---

## 4. Semantic Colors (Standard)

| Role | HEX | Use |
|---|---|---|
| Success | `#22C55E` | Confirmations, positive feedback |
| Warning | `#EAB308` | Caution alerts |
| Error | `#EF4444` | Error messages, destructive actions |
| Info | `#3B82F6` | Informational banners |

---

## 5. Gradient (optional)

```
Primary Gradient: linear-gradient(135deg, {{PRIMARY_COLOR}}, {{SECONDARY_COLOR_1}})
Use: Hero sections, CTA backgrounds, premium elements
```

---

## 6. Dark Mode Palette

| Element | Light Mode | Dark Mode |
|---|---|---|
| Background | `{{NEUTRAL_WHITE}}` | `{{NEUTRAL_DARK}}` |
| Surface / Card | `{{NEUTRAL_LIGHT}}` | `#1E293B` |
| Primary Text | `{{NEUTRAL_DARK}}` | `{{NEUTRAL_WHITE}}` |
| Secondary Text | `{{NEUTRAL_MID}}` | `#94A3B8` |
| Accent | `{{PRIMARY_COLOR}}` | `{{PRIMARY_COLOR}}` (same) |
| Border | `#E2E8F0` | `#334155` |

---

## AI Generation Prompt — Color Palette Swatch

```
Create a visual color palette swatch for "{{BRAND_NAME}}" brand.

Show rectangular blocks for each color:
- {{PRIMARY_NAME}} — {{PRIMARY_COLOR}}
- {{SECONDARY_NAME_1}} — {{SECONDARY_COLOR_1}}
- {{SECONDARY_NAME_2}} — {{SECONDARY_COLOR_2}}
- Near Black — {{NEUTRAL_DARK}}
- Muted Gray — {{NEUTRAL_MID}}
- Light Gray — {{NEUTRAL_LIGHT}}
- White — {{NEUTRAL_WHITE}}

Layout: Horizontal strip, each block labeled with name + HEX below
Style: Clean, design-system style swatch card
Output: SVG, 1200×300
```
