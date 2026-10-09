# D2C With AHrik — Imagery & Visual Style Guide
### Lifetime Identity Standard: Mono-Craft v1

---

## 1. Photography Art Direction

The visual style of **D2C With AHrik** is rooted in **tactile realism, stark contrast, and editorial craft**.

| Dimension | Standard Specification |
|---|---|
| **Lighting** | Directional, high-contrast editorial studio lighting. Sharp, defined shadow edges that convey physical depth. |
| **Color Temperature** | Neutral to slightly warm. Never sterile cold, never tinted artificial blue or neon purple. |
| **Subject Matter** | Real physical products, physical packaging prototypes, raw architecture, and focused technical interfaces. |
| **Depth of Field** | Shallow to medium depth of field. Surfaces emphasize real texture (matte paper, embossed cardboard, metallic foil, machined aluminum). |
| **Strict Prohibition** | ❌ Zero generic stock photography. ❌ Zero people posing with forced smiles at laptops. ❌ Zero cheesy illustration avatars. |

---

## 2. Container Geometry & Motion Physics

All visual components, cards, and media containers follow the **Mono-Craft** physical interaction tokens:

- **Border Radius:** Exactly `14px` (`--radius: 14px`) on all card surfaces, image wrappers, and modals.
- **Border Outline:** `1px solid var(--rule)` (`#E3E3DE`). Clean architectural separation without heavy drop shadows.
- **Motion Personality:** Eased spring physics with subtle overshoot:
  ```css
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --t-fast: 160ms;
  --t-base: 380ms;
  --t-slow: 800ms;
  ```

---

## 3. Social Media & OpenGraph Assets

The master OpenGraph preview asset is archived in:
[`LOGO/assets/og-card.png`](../LOGO/assets/og-card.png) (1200×630px).

### Social Card Composition (1080×1080px & 1200×630px)
- **Canvas:** Clean white (`#FFFFFF`) with a `1px` inner rule in `#E3E3DE`.
- **Primary Eyebrow:** `D2C With AHrik` in `Outfit` SemiBold (11px, UPPERCASE, tracking `0.08em`, color `#6E7270`).
- **Main Headline:** Bold statement in `Gloock` (48px, line-height `0.96`, color `#111312`).
- **Accent Graphic:** High-depth 3D dark sculptural emblem positioned on the right.
- **Corner Radius:** 14px rounded container outline.
