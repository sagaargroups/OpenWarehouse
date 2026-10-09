# Phase 4: Audit & Validation Protocol

> **Version:** `v1.0`  
> **Called By:** SKILL.md → Phase 4  
> **Purpose:** Zero-placeholder validation and quality assurance for generated brand outputs.

---

## Automated Audit

### Zero-Placeholder Check

Run from the repository root:

```bash
./scripts/audit.sh outputs/<brand-name>-lifetime-identity-v0/
```

Or manually:

```bash
grep -rn "{{" .agents/skills/brand-establishment/outputs/<brand-name>-lifetime-identity-v0/
```

**Pass criteria:** 0 lines returned.  
**Fail:** Any unreplaced `{{VARIABLE}}` means the output is incomplete and must be fixed before delivery.

---

## Manual Validation Checklist

### 1. Directory Completeness
- [ ] `outputs/<brand>/` exists
- [ ] All 8 identity suites present: LOGO, COLORS, TYPOGRAPHY, IMAGERY, TAGLINE, BRAND-VOICE, TEMPLATES, BRAND-GUIDELINES
- [ ] `BUSINESS_Prelounch_Rules.md` present
- [ ] `VERSION.md` present
- [ ] `documents/` directory exists (even if empty)

### 2. Cross-Link Integrity
- [ ] `brand-guidelines-master.md` correctly links to all 7 sub-guides
- [ ] All relative paths resolve (no broken `../` links)

### 3. Brand Consistency
- [ ] All files use the same brand name (no typos or variations)
- [ ] All files reference the same color values
- [ ] All files reference the same font names
- [ ] Email and domain are consistent across all templates

### 4. Content Quality
- [ ] No lorem ipsum or placeholder text
- [ ] No "TODO" or "TBD" markers
- [ ] Tagline matches across all appearances
- [ ] Elevator pitch is complete (not truncated)

### 5. Composable Documents (if generated)
- [ ] Each document in `documents/` passes zero-placeholder check
- [ ] Document uses correct format shell layout
- [ ] Document contains all required content module sections
- [ ] Brand tokens (colors, fonts) correctly applied

---

## Post-Audit Actions

| Result | Action |
|---|---|
| **All checks pass** | Lock the deliverable, present to user |
| **Placeholder found** | Identify the missing variable, ask the user, fix, re-audit |
| **Missing directory** | Re-run generation for that specific suite |
| **Broken cross-link** | Fix relative paths, verify file exists |

---

## Versioning Protocol

When updating an existing brand identity:

1. **Minor fix (typo, color adjustment):** Update in-place, increment patch in VERSION.md
2. **Major revision (new visual identity):** Create new output directory with incremented version:
   ```
   outputs/<brand>-lifetime-identity-v1/
   ```
3. **Previous versions are never deleted** — they serve as historical record
