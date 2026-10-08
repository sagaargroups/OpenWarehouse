# CloudFetch Typography System

> All text across the platform uses Inter from Google Fonts. No exceptions.

---

## Display & Headline Font

**Font Family:** `Inter` (Google Fonts)
**Characteristics:** Modern, geometric, clean. Highly readable at all sizes. Works beautifully for both dark and light themes.

| Element | Weight | Tracking | Tailwind Class |
|---|---|---|---|
| **Hero H1** | Extrabold (800) | Tight | `text-5xl md:text-6xl font-extrabold tracking-tight` |
| **Section H2** | Bold (700) | Tight | `text-3xl md:text-4xl font-bold tracking-tight` |
| **Card H3** | Semibold (600) | Normal | `text-xl font-semibold` |
| **Sidebar Header** | Semibold (600) | Wider | `text-xs font-semibold uppercase tracking-wider` |

---

## Body & UI Font

**Font Family:** `Inter` or system `System-UI` stack
**Characteristics:** Neutral, scalable, prevents eye strain across long sessions.

| Element | Size | Weight | Tailwind Class |
|---|---|---|---|
| **Lead / Intro** | 18–20px | Regular (400) | `text-lg md:text-xl leading-relaxed` |
| **Body** | 16px | Regular (400) | `text-base` |
| **Small / Caption** | 14px | Medium (500) | `text-sm font-medium` |
| **Label** | 12px | Medium (500) | `text-xs font-medium` |
| **Tiny / Metadata** | 10–11px | Medium (500) | `text-[10px] font-medium` or `text-[11px]` |

---

## Code & Monospace Font

**Font Family:** `JetBrains Mono` or `Fira Code`
**Use Case:** Code snippets, technical docs, OTP inputs, API keys

| Element | Tailwind Class |
|---|---|
| **Inline code** | `font-mono text-sm` |
| **Code block** | `font-mono text-sm leading-relaxed` |
| **OTP Input** | `font-mono tracking-[0.5em] text-center` |

---

## Text Color System

| Context | Light Mode | Dark Mode |
|---|---|---|
| **Primary text** | `text-slate-900` | `dark:text-white` |
| **Secondary text** | `text-slate-600` | `dark:text-slate-400` |
| **Muted text** | `text-slate-400` | `dark:text-slate-500` |
| **Brand accent text** | `text-orange-600` | `dark:text-orange-400` or `dark:text-orange-500` |
| **Tagline text** | `text-orange-600` | `dark:text-orange-400` |
| **Error text** | `text-red-500` | `dark:text-red-400` |

---

## Web Font Loading

```html
<!-- In <head> or via next/font -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

**Fallback Stack:** `'Inter', system-ui, -apple-system, sans-serif`

---

## File Formats Available

| Format | Use |
|---|---|
| **WOFF2** | Web (primary, best compression) |
| **WOFF** | Web (legacy browser fallback) |
| **OTF/TTF** | Desktop, print, design tools |
