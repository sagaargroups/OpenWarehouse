# D2C With AHrik — Color System
### Lifetime Identity Standard: Mono-Craft v1

---

## 1. The Mono-Craft Palette Philosophy

The **Mono-Craft** palette rejects artificial neon saturation. It is anchored in high-contrast stark obsidian ink and pure canvas white, balanced by a subtle craft stone surface tint that prevents digital eye strain and provides organic warmth.

---

## 2. Color Token Matrix

| Role | Token Name | HEX | RGB | HSL | CMYK | Usage |
|---|---|---|---|---|---|---|
| **Primary Ink** | `--ink` | `#111312` | `17, 19, 18` | `150°, 6%, 7%` | `11, 0, 5, 93` | Main headlines, body copy, active icons, primary dark buttons |
| **Canvas Base** | `--bg` | `#FFFFFF` | `255, 255, 255` | `0°, 0%, 100%` | `0, 0, 0, 0` | Page background, high-contrast clean surface |
| **Card Surface** | `--surface` | `#F4F4F1` | `244, 244, 241` | `60°, 11%, 95%` | `0, 0, 1, 4` | Elevated cards, panels, secondary containers, input boxes |
| **Muted Ink** | `--ink-muted` | `#6E7270` | `110, 114, 112` | `150°, 2%, 44%` | `4, 0, 2, 55` | Subheadlines, metadata, timestamps, input placeholders |
| **Divider / Rule** | `--rule` | `#E3E3DE` | `227, 227, 222` | `60°, 8%, 88%` | `0, 0, 2, 11` | Card outlines, horizontal rules, table dividers |
| **Accent Ink** | `--accent-ink` | `#FFFFFF` | `255, 255, 255` | `0°, 0%, 100%` | `0, 0, 0, 0` | Text rendered on top of dark primary buttons |

---

## 3. Semantic Status Triad

| Status | Role | HEX | RGB | Use Case |
|---|---|---|---|---|
| **Success** | Confirmed / Live | `#2F6F4E` | `47, 111, 78` | Form confirmations, live site indicators, active status dots |
| **Warning** | Attention Needed | `#E8A33D` | `232, 163, 61` | Budget warnings, scope notices, pending reviews |
| **Destructive** | Error / Block | `#C23A3A` | `194, 58, 58` | Form validation failures, system alerts |

---

## 4. CSS Custom Properties Implementation

```css
:root {
  /* D2C With AHrik — Mono-Craft v1 Tokens */
  --bg: #FFFFFF;
  --surface: #F4F4F1;
  --ink: #111312;
  --ink-muted: #6E7270;
  --rule: #E3E3DE;
  --accent: #111312;
  --accent-ink: #FFFFFF;

  /* Surface Radius */
  --radius: 14px;
}
```

---

## 5. Tailwind CSS Configuration Mapping

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FFFFFF',
          surface: '#F4F4F1',
          ink: '#111312',
          muted: '#6E7270',
          rule: '#E3E3DE',
          accent: '#111312',
        }
      },
      borderRadius: {
        'craft': '14px',
      }
    }
  }
}
```
