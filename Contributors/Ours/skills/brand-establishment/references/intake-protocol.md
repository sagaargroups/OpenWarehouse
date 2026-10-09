# Phase 1: Interactive Gated Intake Protocol

> **Version:** `v1.0`  
> **Called By:** SKILL.md → Phase 1  
> **Purpose:** Collect and lock all 18 brand variables through interactive micro-movements before any generation begins.

---

## The Anti-Rushing Law

1. **Zero Assumption Rule:** Never guess hex codes, fonts, slogans, or target audiences. If missing, ask.
2. **One Section at a Time:** Present questions in grouped sections to avoid overwhelming the user.
3. **Confirm Before Proceeding:** Every section must be acknowledged before moving to the next.

---

## Gate 0: Interactive Output Destination Resolution (Anti-Hardcoding Law)

Before collecting brand identity variables, the agent MUST resolve where the generated brand deliverables will live. Output paths are NEVER hardcoded.

### The Two Universal Scenarios:
1. **Scenario A (Tracked Codebase Detected):**
   If the workspace contains an active application or Git-tracked codebase (e.g., `agency-site/`, `web/`, `frontend/`, `src/`), the agent prompts the user:
   > *"Tracked codebase detected at `<detected-path>`. Would you like to create brand deliverables in `<detected-path>/brand-establishment/outputs/` so they are version-controlled with your code?"*
2. **Scenario B (No Codebase Detected / Standalone Isolation):**
   If no application codebase is detected, or if the user prefers standalone isolation, the agent prompts:
   > *"Where should brand deliverables be saved?*  
   > *1. Local Skill Vault (`outputs/` inside the skill directory)*  
   > *2. Workspace Root (`brand-establishment/outputs/`)*  
   > *3. Custom designated path"*

**Lock Rule:** Store the approved path in `{{OUTPUT_ROOT}}`. If an external directory is selected, maintain a symbolic link at `.agents/skills/brand-establishment/outputs` pointing to `{{OUTPUT_ROOT}}` for zero broken links.

---

## Intake Sections (Ask Sequentially)

### Section A — Core Identity
0. **Output Root Path** (`{{OUTPUT_ROOT}}` — resolved in Gate 0)
1. **Brand name** (exact casing — e.g., "D2C With AHrik")
2. **Lowercase slug** (for URLs/paths — e.g., "d2c-with-ahrik")
3. **Tagline** (one memorable line)
4. **Domain** (e.g., "d2cwith.ahrik.com")
5. **Support email** (e.g., "d2cwithahrik@gmail.com")
6. **Business type** (SaaS / D2C / Agency / Food & Beverage / Other)

### Section B — Visual Identity
7. **Primary brand color** (HEX)
8. **Secondary color(s)** (1-2 HEX values)
9. **Neutral / surface colors** (dark bg, light bg, muted)
10. **Display / headline font** (Google Fonts preferred)
11. **Body font**
12. **Logo concept / visual metaphor**
13. **Photography style**

### Section C — Brand Voice
14. **3 personality words** (e.g., "Direct. High-Craft. Uncompromising.")
15. **Brand persona description** (if the brand were a person)
16. **Words we use / words we avoid**

### Section D — Messaging
17. **Mission** / **Vision**
18. **Elevator pitch** (2 sentences)

---

## Master 18-Variable Lock Table

After collection, present this summary for user sign-off:

| # | Variable | Value |
|---|---|---|
| 0 | `{{OUTPUT_ROOT}}` | _resolved (Gate 0)_ |
| 1 | `{{BRAND_NAME}}` | _collected_ |
| 2 | `{{BRAND_LOWER}}` | _collected_ |
| 3 | `{{TAGLINE}}` | _collected_ |
| 4 | `{{DOMAIN}}` | _collected_ |
| 5 | `{{SUPPORT_EMAIL}}` | _collected_ |
| 6 | `{{BUSINESS_TYPE}}` | _collected_ |
| 7 | `{{PRIMARY_COLOR}}` | _collected_ |
| 8 | `{{SECONDARY_COLOR_1}}` | _collected_ |
| 9 | `{{BG_DARK}}` / `{{BG_LIGHT}}` | _collected_ |
| 10 | `{{DISPLAY_FONT}}` | _collected_ |
| 11 | `{{BODY_FONT}}` | _collected_ |
| 12 | `{{LOGO_CONCEPT}}` | _collected_ |
| 13 | `{{PHOTO_STYLE}}` | _collected_ |
| 14 | `{{PERSONALITY_WORDS}}` | _collected_ |
| 15 | `{{BRAND_PERSON_DESC}}` | _collected_ |
| 16 | `{{WORDS_WE_USE/AVOID}}` | _collected_ |
| 17 | `{{MISSION}}` / `{{VISION}}` | _collected_ |
| 18 | `{{ELEVATOR_PITCH}}` | _collected_ |

---

## ⛔ HARD STOP GATE 1

> **"Wait for explicit user sign-off on the 18-variable table. Do NOT write any files before the user confirms."**

Only after the user explicitly approves → proceed to Phase 2 (Directory Initialization) and Phase 3 (Generation).
