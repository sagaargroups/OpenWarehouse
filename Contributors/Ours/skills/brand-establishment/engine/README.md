# Brand Establishment Engine

> **Version:** `engine-v1.0`  
> **Purpose:** Parameterized template system for generating brand identity kits and composable branded documents.

---

## Architecture

```text
engine/
├── identity/      ← 8 parameterized brand identity templates (colors, typography, logo, etc.)
├── formats/       ← 5 visual layout shells (A4, slides, email, 1-page, invoice)
└── content/       ← 8 document body structures (contracts, proposals, NDAs, etc.)
```

## How It Works

### 1. Brand Identity Generation (Full Kit)
Read each file in `identity/` and replace all `{{VARIABLES}}` with the user's locked brand tokens. This produces the 8-suite brand identity kit.

### 2. Document Generation (Composable Merge)
Pick a **format** from `formats/` + a **content structure** from `content/` → merge them with the brand's locked tokens → produce a production-ready branded document.

```text
FORMAT (visual shell)  +  CONTENT (document body)  +  BRAND TOKENS  =  FINAL DOCUMENT
a4-letterhead.md       +  contract-nda.md          +  {colors,fonts} =  branded-nda.md
```

## Rules
1. **Never modify engine files directly.** These are immutable parameterized templates.
2. **All generated output goes to `outputs/<brand-name>-lifetime-identity-v<N>/`.**
3. **Every `{{VARIABLE}}` must be replaced before output is considered complete.**
