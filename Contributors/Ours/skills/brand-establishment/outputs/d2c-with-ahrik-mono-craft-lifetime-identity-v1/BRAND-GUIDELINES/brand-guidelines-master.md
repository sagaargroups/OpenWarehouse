# D2C With AHrik — Master Brand Guidelines
### Lifetime Identity Standard: Mono-Craft v1

> **Status:** PERMANENT / LOCKED  
> **Master Law:** Every designer, developer, copywriter, and AI subagent operating for D2C With AHrik MUST follow these rules. No arbitrary fonts, no ad-hoc saturated palettes, no corporate fluff.
> **Engine Version:** engine-v1.0 + content-v2.0 (22 modules, 8 departments)

---

## 1. Master Brand Essence

| Dimension | Specification |
|---|---|
| **Brand Name** | **D2C With AHrik** |
| **Short / Code Slug** | `d2cwithAHrik` / `d2c-with-ahrik` |
| **Identity Version** | **Mono-Craft v1** |
| **Primary Tagline** | **Connect direct. Grow faster.** |
| **Core Throughline** | *"We build the parts of a business people actually see. Brand, website, visual, launch. One team, one throughline, no handoff between three agencies who have never spoken."* |
| **Primary Web Domain** | [`d2cwith.ahrik.com`](https://d2cwith.ahrik.com) |
| **Official Contact Email** | `hello@d2cwith.ahrik.com` |
| **Media CDN Base** | `https://ahrik.cdn.appmarkit.com` |

---

## 2. The 4 Non-Negotiable Operational Principles

1. **You Own Everything:** Domains, hosting accounts, repositories, and source files are registered in the client's name. Leaving is administratively boring.
2. **Scope is Written Down:** Exactly what is included, what is not, and what changes cost — agreed before work begins, never negotiated after.
3. **We Say When Something is a Bad Idea:** Including when it is the client's idea, and including when agreeing would be easier and more profitable.
4. **No Invented Proof:** Zero stock testimonials, zero fake logos, zero unsourced vanity metrics. If an area is empty, it is empty because it is true.

---

## 3. Visual Identity Summary

### Color System
- **Primary Ink & Dark Accent:** `#111312` (Stark Obsidian Black)
- **Primary Page Canvas:** `#FFFFFF` (Pure White)
- **Card Surface:** `#F4F4F1` (Craft Stone Wash)
- **Muted Ink:** `#6E7270`
- **Rule / Border:** `#E3E3DE`
- See full guide → [`COLORS/brand-colors.md`](../COLORS/brand-colors.md)

### Typography System
- **Display / Headlines:** `Gloock` (400 weight, `tracking: -0.01em`, `leading: 0.96`)
- **Body / Paragraphs:** `Outfit` (300/400/500/600 weights)
- **Monospace / Code:** `JetBrains Mono`
- **Corner Radius:** `14px` (`--radius: 14px`)
- **Motion Personality:** Eased spring physics `cubic-bezier(0.34, 1.56, 0.64, 1)`
- See full guide → [`TYPOGRAPHY/type-scale.md`](../TYPOGRAPHY/type-scale.md)

### Logo & Wordmark Kit
- **Header & Footer Vector SVGs:** Available in [`LOGO/assets/`](../LOGO/assets/)
- **3D & 2D Emblem Renders:** High-resolution dark and chrome renders archived in [`LOGO/assets/`](../LOGO/assets/)
- **Favicon Glyph:** Dark contrast glyph in [`LOGO/assets/favicon-dark-glyph.png`](../LOGO/assets/favicon-dark-glyph.png)
- See full guide → [`LOGO/logo-kit.md`](../LOGO/logo-kit.md)

---

## 4. Voice, Messaging & Templates

- **Brand Voice:** `Direct. High-Craft. Uncompromising.`
- See voice guide → [`BRAND-VOICE/brand-voice-guide.md`](../BRAND-VOICE/brand-voice-guide.md)
- **Core Messaging & Narrative:** Sovereign Edge Architecture vs legacy CMS bloat.
- See messaging guide → [`TAGLINE/core-messaging.md`](../TAGLINE/core-messaging.md)
- **Operational Templates:** Email signature, pitch deck, letterhead, invoice + composable document system.
- See templates guide → [`TEMPLATES/templates-guide.md`](../TEMPLATES/templates-guide.md)
- **Prelaunch Rules & Checklist:**
- See prelaunch guide → [`BUSINESS_Prelounch_Rules.md`](../BUSINESS_Prelounch_Rules.md)

---

## 5. Composable Document System (v1 NEW)

All branded documents are generated on-demand using the composable merge system:

```text
FORMAT SHELL (visual) + CONTENT MODULE (body) + BRAND TOKENS = BRANDED DOCUMENT
```

### 22 Document Types Across 8 Departments

| Department | Count | Documents |
|---|---|---|
| **Legal** | 3 | MSA, NDA, SLA |
| **Sales** | 3 | Client Proposal, Partnership Proposal, Capability Statement |
| **Finance** | 3 | Invoice, Quotation, Receipt |
| **HR** | 4 | Offer Letter, Employment Agreement, Onboarding Kit, Exit Letter |
| **Operations** | 3 | SOW, Change Order, Status Report |
| **Marketing** | 2 | Case Study, Press Release |
| **Client Success** | 2 | Welcome Pack, Feedback Form |
| **Culture** | 2 | Appreciation Letter, Transparency Report |

Generated documents are saved to → [`documents/`](../documents/)

See full merge instructions → [`TEMPLATES/templates-guide.md` §4](../TEMPLATES/templates-guide.md)

---

## 6. Complete Folder Architecture

```text
d2c-with-ahrik-mono-craft-lifetime-identity-v1/
├── BUSINESS_Prelounch_Rules.md
├── VERSION.md
├── BRAND-GUIDELINES/
│   └── brand-guidelines-master.md      ← THIS FILE (Master reference)
├── BRAND-VOICE/
│   └── brand-voice-guide.md
├── COLORS/
│   └── brand-colors.md
├── IMAGERY/
│   └── imagery-style.md
├── LOGO/
│   ├── logo-kit.md
│   └── assets/                         ← Archived vector marks & 3D renders
├── TAGLINE/
│   └── core-messaging.md
├── TEMPLATES/
│   └── templates-guide.md
├── TYPOGRAPHY/
│   └── type-scale.md
└── documents/                          ← Composable merge outputs (on demand)
```
