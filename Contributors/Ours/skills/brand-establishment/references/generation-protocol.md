# Phase 2-3: Generation Protocol

> **Version:** `v1.0`  
> **Called By:** SKILL.md → Phase 2 and Phase 3  
> **Purpose:** Directory scaffolding and sequential micro-generation of brand identity assets.

---

## Gate 0: Dynamic Output Resolution

Before scaffolding, resolve the target root directory (`OUTPUT_ROOT`):
1. **Interactive Prompt:** If unassigned, confirm with user whether deliverables belong in the codebase (e.g. `<codebase>/brand-establishment/outputs/`) or local skill vault (`outputs/`).
2. **Scaffold with Symlink:** If outside the skill vault, ensure `.agents/skills/brand-establishment/outputs` symlinks to `OUTPUT_ROOT` for total backward-compatibility.

## Phase 2: Directory Initialization

After user sign-off on the 18-variable table and output destination, scaffold the directory:

```bash
mkdir -p {{OUTPUT_ROOT}}/{{BRAND_LOWER}}-lifetime-identity-v0/{LOGO/assets,COLORS,TYPOGRAPHY,IMAGERY,TAGLINE,BRAND-VOICE,TEMPLATES,BRAND-GUIDELINES,documents}
```

### Output Directory Structure

```text
outputs/{{BRAND_LOWER}}-lifetime-identity-v0/
├── BRAND-GUIDELINES/
│   └── brand-guidelines-master.md
├── BRAND-VOICE/
│   └── brand-voice-guide.md
├── COLORS/
│   └── brand-colors.md
├── IMAGERY/
│   └── imagery-style.md
├── LOGO/
│   ├── logo-kit.md
│   └── assets/
├── TAGLINE/
│   └── core-messaging.md
├── TEMPLATES/
│   └── templates-guide.md
├── TYPOGRAPHY/
│   └── type-scale.md
├── documents/                          ← NEW: Composable merge outputs
│   └── (dynamically generated branded documents)
├── BUSINESS_Prelounch_Rules.md
└── VERSION.md                          ← NEW: Version tracking
```

---

## Phase 3: Sequential Micro-Generation

Process each identity template from `engine/identity/` in this exact order. For each step, read the template, replace all `{{VARIABLES}}`, and write the populated file to the output directory.

### Step 3.1: Logo Kit
- **Source:** `engine/identity/logo-kit.md`
- **Output:** `outputs/<brand>/LOGO/logo-kit.md`
- Generate 7 SVG variant specifications

### Step 3.2: Color System
- **Source:** `engine/identity/brand-colors.md`
- **Output:** `outputs/<brand>/COLORS/brand-colors.md`
- Generate HEX, RGB, HSL, CMYK values for all colors

### Step 3.3: Typography Scale
- **Source:** `engine/identity/type-scale.md`
- **Output:** `outputs/<brand>/TYPOGRAPHY/type-scale.md`
- Generate type scale, font weights, CSS implementation

### Step 3.4: Imagery & Social Templates
- **Source:** `engine/identity/imagery-style.md`
- **Output:** `outputs/<brand>/IMAGERY/imagery-style.md`
- Generate photography direction, social media template specs

### Step 3.5: Core Messaging
- **Source:** `engine/identity/core-messaging.md`
- **Output:** `outputs/<brand>/TAGLINE/core-messaging.md`
- Generate tagline, mission, vision, elevator pitch, FAQ matrix

### Step 3.6: Brand Voice
- **Source:** `engine/identity/brand-voice-guide.md`
- **Output:** `outputs/<brand>/BRAND-VOICE/brand-voice-guide.md`
- Generate voice rules, tone matrix, vocabulary lock

### Step 3.7: Operational Templates
- **Source:** `engine/identity/templates-guide.md` (old 4-type guide)
- **Output:** `outputs/<brand>/TEMPLATES/templates-guide.md`
- Generate email signature, pitch deck spec, letterhead spec, invoice spec
- **Note:** For full composable documents, use the `engine/formats/` + `engine/content/` merge system

### Step 3.8: Master Brand Guidelines
- **Source:** `engine/identity/brand-guidelines-master.md`
- **Output:** `outputs/<brand>/BRAND-GUIDELINES/brand-guidelines-master.md`
- Compile master document linking to all 7 sub-guides

### Step 3.9: Prelaunch Rules
- **Source:** `engine/identity/prelaunch-rules.md`
- **Output:** `outputs/<brand>/BUSINESS_Prelounch_Rules.md`
- Generate prelaunch checklist and registration guide

### Step 3.10: Version File
- **Output:** `outputs/<brand>/VERSION.md`
- Content:
  ```markdown
  # {{BRAND_NAME}} — Identity Version Record
  | Component | Version | Date |
  |---|---|---|
  | Identity Kit | v0 | {{GENERATION_DATE}} |
  | Engine | engine-v1.0 | — |
  | Formats | formats-v1.0 | — |
  | Content Modules | content-v1.0 | — |
  ```

---

## Composable Document Generation (On-Demand)

When a user requests a specific branded document (e.g., "Create an NDA for client X"):

1. Read the format shell from `engine/formats/`
2. Read the content module from `engine/content/`
3. Read the brand tokens from `outputs/<brand>/COLORS/`, `TYPOGRAPHY/`, etc.
4. Merge format + content + tokens → replace all `{{VARIABLES}}`
5. Save to `outputs/<brand>/documents/<doc-type>-<identifier>-v1.md`
6. Run audit: `grep -rn "{{" <output-file>` → must return 0 lines

---

## Rules

- **One step at a time.** Do not batch-generate.
- **No assumptions.** If a variable is missing, stop and ask.
- **Verify after each step.** Spot-check that no `{{` remains in the generated file.
