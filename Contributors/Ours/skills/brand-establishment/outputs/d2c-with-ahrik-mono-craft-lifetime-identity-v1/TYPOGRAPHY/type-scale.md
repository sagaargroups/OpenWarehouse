# D2C With AHrik — Typography System
### Lifetime Identity Standard: Mono-Craft v1

---

## 1. Font Family Pairing

The **Mono-Craft** typographic voice pairs an editorial craft serif with a precision geometric sans:

| Role | Family | Fallback Stack | Purpose |
|---|---|---|---|
| **Display / Headlines** | **`Gloock`** | `"Gloock", ui-serif, Georgia, serif` | Hero headlines, major section titles, pull quotes |
| **Body / UI Copy** | **`Outfit`** | `"Outfit", ui-sans-serif, system-ui, sans-serif` | Long-form reading, UI elements, button labels, data points |
| **Monospace / Code** | **`JetBrains Mono`** | `"JetBrains Mono", 'Courier New', monospace` | Architectural specs, technical tokens, timestamps |

---

## 2. Master Type Scale

| Level | Family | Desktop Size | Mobile Size | Weight | Line Height | Letter Spacing | Use Case |
|---|---|---|---|---|---|---|---|
| **H1 (Hero)** | `Gloock` | 56px / 3.5rem | 36px / 2.25rem | 400 | 0.96 | `-0.01em` | Landing hero headlines |
| **H2 (Section)** | `Gloock` | 40px / 2.5rem | 28px / 1.75rem | 400 | 1.05 | `-0.01em` | Primary section headers |
| **H3 (Subhead)** | `Gloock` | 28px / 1.75rem | 22px / 1.375rem | 400 | 1.15 | `0em` | Card titles, feature headlines |
| **H4 (Group)** | `Outfit` | 20px / 1.25rem | 18px / 1.125rem | 600 | 1.30 | `-0.01em` | Subsection labels, callouts |
| **Body Large** | `Outfit` | 18px / 1.125rem | 16px / 1.0rem | 400 | 1.60 | `0em` | Introductory paragraphs |
| **Body (Default)** | `Outfit` | 16px / 1.0rem | 15px / 0.9375rem | 400 | 1.55 | `0em` | Standard text copy |
| **Body Small** | `Outfit` | 14px / 0.875rem | 13px / 0.8125rem | 400 | 1.50 | `0em` | Explanatory subtext, footers |
| **Caption** | `Outfit` | 12px / 0.75rem | 12px / 0.75rem | 500 | 1.40 | `0.02em` | Meta descriptions, image credits |
| **Overline** | `Outfit` | 11px / 0.6875rem | 11px / 0.6875rem | 600 | 1.40 | `0.08em` | Category tags (UPPERCASE) |
| **Code / Data** | `JetBrains Mono` | 13px / 0.8125rem | 12px / 0.75rem | 400 | 1.50 | `0em` | Technical documentation, parameters |

---

## 3. Font Loading & CSS Implementation

```html
<!-- Google Fonts Embed -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Gloock&family=Outfit:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: "Gloock", ui-serif, Georgia, serif;
  --font-body: "Outfit", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", 'Courier New', monospace;

  --display-weight: 400;
  --display-tracking: -0.01em;
  --display-leading: 0.96;
}

h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: var(--display-weight);
  letter-spacing: var(--display-tracking);
  line-height: var(--display-leading);
}

body, p {
  font-family: var(--font-body);
  font-weight: 400;
  color: var(--ink);
}
```
