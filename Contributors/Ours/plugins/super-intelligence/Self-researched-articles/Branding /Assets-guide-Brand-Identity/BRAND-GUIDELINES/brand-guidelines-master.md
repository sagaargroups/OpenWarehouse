# CloudFetch Brand Guidelines — Master Document

> This is the single source of truth for everything CloudFetch brand.
> Every designer, developer, copywriter, and AI agent MUST follow these rules.

---

## 1. Brand Essence

| Element | Value |
|---|---|
| **Name** | CloudFetch |
| **Tagline** | The Home For Applications |
| **Support Email** | support@cloudfetch.tech |
| **Domain** | cloudfetch.tech |
| **Founded** | 2024 |

---

## 2. Visual Identity Summary

### Colors
- **Primary Accent:** Orange `#F97316`
- **Light Mode:** Pure white (`#FFFFFF`) surfaces, `slate-50` page background, `slate-200` borders, `slate-900` text. **No color effects, gradients, or tinted backgrounds.**
- **Dark Mode:** `#0B0D14` background, `white/10` borders, subtle orange/indigo ambient blurs allowed.
- See: [`COLORS/brand-colors.md`](../COLORS/brand-colors.md)

### Typography
- **Primary Font:** Inter (Google Fonts) — all weights
- **Code Font:** JetBrains Mono / Fira Code
- **Hero:** `text-5xl md:text-6xl font-extrabold tracking-tight`
- See: [`TYPOGRAPHY/type-scale.md`](../TYPOGRAPHY/type-scale.md)

### Logo
- Cloud + fetch arrow mark in orange
- Works at 16×16 favicon size
- Dark variant (white mark) and Light variant (dark mark)
- See: [`LOGO/logo-kit.md`](../LOGO/logo-kit.md)

### Imagery
- Flat, geometric illustrations
- `lucide-react` icon system (outlined)
- No stock photos in product UI
- See: [`IMAGERY/imagery-style.md`](../IMAGERY/imagery-style.md)

---

## 3. Voice & Tone Summary

| Trait | Description |
|---|---|
| **Sharp** | No fluff. Direct, clear language. |
| **Warm** | Human, approachable. Never sterile. |
| **Ambitious** | We aim high and empower users. |

- See: [`BRAND-VOICE/brand-voice-guide.md`](../BRAND-VOICE/brand-voice-guide.md)

---

## 4. Messaging Lock

| Element | Locked Value |
|---|---|
| **Tagline** | "The Home For Applications" |
| **Mission** | Eliminate software fragmentation with universal plumbing |
| **Vision** | One platform, one identity, infinite possibilities |
| **Elevator Pitch** | CloudFetch is the unified platform where developers publish applications and users discover them — with identity, billing, and infrastructure handled out of the box. |

- See: [`TAGLINE/core-messaging.md`](../TAGLINE/core-messaging.md)

---

## 5. DO / DON'T Rules

### ✅ DO
- Always use the tagline beneath the brand name in headers
- Use `support@cloudfetch.tech` for all contact references
- Support both light and dark mode in all new components
- Use `formatDate()` utility for all client-side date rendering
- Use Inter font across the entire platform
- Keep light mode surfaces pure white — no color tinting

### ❌ DON'T
- Use separate legal/privacy email addresses
- Add gradient blurs or orange tint to light mode backgrounds
- Use `toLocaleDateString()` without pinning locale (causes hydration errors)
- Use filled icons — always use outlined (`lucide-react` default)
- Use "synergy", "paradigm shift", "leverage" in copy
- Render text as images (always use real HTML text)

---

## 6. Pre-Launch Checklist (Identity)

- [ ] Logo in all variants and formats
- [ ] Colors defined and documented in all codes
- [ ] Fonts selected, files ready, type scale defined
- [ ] Brand voice guide finalized
- [ ] Tagline and core messaging locked
- [ ] Domain registered (cloudfetch.tech ✅)
- [ ] Social handles claimed
- [ ] Google Business Profile created
- [ ] Email signature template ready
- [ ] Social media templates ready
- [ ] Presentation deck ready
- [ ] Asset folder organized and backed up

---

## 7. Folder Structure

```
/CloudFetch-Identity/
├── BRAND-GUIDELINES/
│   └── brand-guidelines-master.md    ← YOU ARE HERE
├── BRAND-VOICE/
│   └── brand-voice-guide.md
├── COLORS/
│   └── brand-colors.md
├── IMAGERY/
│   └── imagery-style.md
├── LOGO/
│   └── logo-kit.md  (+ asset folders when created)
├── TAGLINE/
│   └── core-messaging.md
├── TEMPLATES/
│   └── templates-guide.md
└── TYPOGRAPHY/
    └── type-scale.md
```
