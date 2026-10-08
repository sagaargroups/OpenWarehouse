# {{BRAND_NAME}} Typography System

> **AI:** Replace all `{{VARIABLES}}` with the user's actual font choices before generating.

---

## Variable Reference

| Variable | Description | Example |
|---|---|---|
| `{{BRAND_NAME}}` | Full brand name | "Golu Snacks" |
| `{{DISPLAY_FONT}}` | Headline / display font | "Poppins", "Inter", "Playfair Display" |
| `{{BODY_FONT}}` | Body / paragraph font | "Inter", "Roboto", "Open Sans" |
| `{{MONO_FONT}}` | Monospace font (optional) | "JetBrains Mono", "Fira Code" |
| `{{PRIMARY_COLOR}}` | For accent text | "#E63946" |
| `{{NEUTRAL_DARK}}` | For headings | "#0F172A" |
| `{{NEUTRAL_MID}}` | For body text | "#334155" |
| `{{NEUTRAL_LIGHT_TEXT}}` | For captions | "#64748B" |

---

## Font Stack

| Role | Font | Fallback Stack |
|---|---|---|
| Display / Headlines | `{{DISPLAY_FONT}}` | `{{DISPLAY_FONT}}, system-ui, -apple-system, sans-serif` |
| Body / Paragraphs | `{{BODY_FONT}}` | `{{BODY_FONT}}, system-ui, -apple-system, sans-serif` |
| Monospace (optional) | `{{MONO_FONT}}` | `{{MONO_FONT}}, 'Courier New', monospace` |

---

## Type Scale

| Level | Font | Size | Weight | Line Height | Letter Spacing | Color | Use |
|---|---|---|---|---|---|---|---|
| H1 (Hero) | {{DISPLAY_FONT}} | 48px / 3rem | Bold (700) | 1.1 | -0.02em | `{{NEUTRAL_DARK}}` | Landing hero, page titles |
| H2 (Section) | {{DISPLAY_FONT}} | 36px / 2.25rem | Bold (700) | 1.2 | -0.01em | `{{NEUTRAL_DARK}}` | Section headings |
| H3 (Subsection) | {{DISPLAY_FONT}} | 24px / 1.5rem | SemiBold (600) | 1.3 | 0 | `{{NEUTRAL_DARK}}` | Card titles, subsections |
| H4 (Label) | {{DISPLAY_FONT}} | 20px / 1.25rem | SemiBold (600) | 1.4 | 0 | `{{NEUTRAL_DARK}}` | Labels, small headings |
| Body Large | {{BODY_FONT}} | 18px / 1.125rem | Regular (400) | 1.6 | 0 | `{{NEUTRAL_MID}}` | Lead paragraphs |
| Body | {{BODY_FONT}} | 16px / 1rem | Regular (400) | 1.6 | 0 | `{{NEUTRAL_MID}}` | Default body text |
| Body Small | {{BODY_FONT}} | 14px / 0.875rem | Regular (400) | 1.5 | 0 | `{{NEUTRAL_MID}}` | Secondary content |
| Caption | {{BODY_FONT}} | 12px / 0.75rem | Medium (500) | 1.4 | 0.02em | `{{NEUTRAL_LIGHT_TEXT}}` | Timestamps, meta |
| Overline | {{BODY_FONT}} | 11px / 0.6875rem | Bold (700) | 1.4 | 0.08em | `{{PRIMARY_COLOR}}` | Labels, categories (UPPERCASE) |
| Code | {{MONO_FONT}} | 14px / 0.875rem | Regular (400) | 1.6 | 0 | `{{NEUTRAL_DARK}}` | Code snippets |

---

## Font Weight Usage

| Weight | Value | Use |
|---|---|---|
| Light | 300 | Decorative, large display text only |
| Regular | 400 | Body text, descriptions |
| Medium | 500 | Captions, emphasized body, nav items |
| SemiBold | 600 | Subheadings, button labels |
| Bold | 700 | Headlines, CTAs, strong emphasis |
| Black | 900 | Hero statements only (use sparingly) |

---

## Responsive Scale

| Breakpoint | H1 | H2 | H3 | Body |
|---|---|---|---|---|
| Desktop (≥1024px) | 48px | 36px | 24px | 16px |
| Tablet (≥768px) | 40px | 30px | 22px | 16px |
| Mobile (< 768px) | 32px | 26px | 20px | 15px |

---

## CSS Implementation

```css
/* {{BRAND_NAME}} Typography */
@import url('https://fonts.googleapis.com/css2?family={{DISPLAY_FONT}}:wght@300;400;500;600;700;900&family={{BODY_FONT}}:wght@300;400;500;600;700&display=swap');

:root {
  --font-display: '{{DISPLAY_FONT}}', system-ui, -apple-system, sans-serif;
  --font-body: '{{BODY_FONT}}', system-ui, -apple-system, sans-serif;
  --font-mono: '{{MONO_FONT}}', 'Courier New', monospace;
}

h1, h2 { font-family: var(--font-display); font-weight: 700; }
h3, h4 { font-family: var(--font-display); font-weight: 600; }
body, p { font-family: var(--font-body); font-weight: 400; }
code, pre { font-family: var(--font-mono); }
```

---

## File Formats to Provide

| Format | Use |
|---|---|
| WOFF2 | Primary web format (smallest, best performance) |
| WOFF | Fallback web format |
| TTF | Desktop apps, design tools |
| OTF | Print, professional design |
