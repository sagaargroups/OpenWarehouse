---
name: warehouse-ecosystem
description: "Defines the complete architecture for the warehouse skill ecosystem — how skills are organized, named, contributed, and selected during setup. Use when creating new skills, classifying contributions, restructuring warehouse folders, or onboarding new users via setup.md. Triggers on: 'add a skill', 'contribute', 'where does this skill go', 'restructure warehouse', 'naming standard'."
---

# Warehouse Ecosystem Architecture

The operating system for how skills flow from creation → classification → placement → contribution.

## Warehouse Structure

```
0_warehouse-skills/
├── skills/                    # Individual standalone skills
├── plugins/                   # Bundled domain packages (see categories below)
└── third-party/               # Cloned from external sources
    ├── skills/
    └── plugins/
```

## Pre-Defined Plugin Categories

Every skill must belong to one of these 10 universal bundles:

| Plugin Bundle | Domain | Example Skills |
|---|---|---|
| `brand-establishment` | Day-1 brand & IP | `brand-identity`, `logo-kit`, `brand-voice`, `trademark-filing` |
| `development` | Code & architecture | `frontend-design`, `backend-api`, `mcp-builder`, `testing` |
| `content-engine` | Content pipeline | `topic-research`, `script-writing`, `video-prompts` |
| `seo-geo` | Search & discovery | `keyword-research`, `on-page-seo`, `geo-strategy` |
| `devops-pipeline` | Infrastructure | `ci-cd-setup`, `docker-config`, `monitoring` |
| `data-analytics` | Data & insights | `dashboard-builder`, `report-generator`, `ab-testing` |
| `finance-ops` | Business ops | `invoicing`, `tax-compliance`, `audit-support` |
| `legal-compliance` | Legal & governance | `privacy-policy`, `terms-of-service`, `ip-protection` |
| `productivity` | Team & task mgmt | `task-management`, `meeting-notes`, `time-tracking` |
| `sales-growth` | Revenue & customer | `lead-gen`, `crm-workflow`, `pitch-deck` |

If a skill doesn't fit any category, propose a new one — but justify it first.

## Naming Standard

| Rule | ✅ Good | ❌ Bad |
|---|---|---|
| Always `kebab-case` | `brand-identity` | `Brand Identity`, `brand_identity` |
| Noun or verb, not sentences | `logo-kit` | `create-a-logo-for-your-brand` |
| No spaces in folder names | `brand-establishment/` | `Branding /` |
| Plugin = domain category | `content-engine/` | `my-content-stuff/` |
| Skill = specific action | `keyword-research` | `seo` (too vague) |
| Max 3 words | `brand-voice-guide` | `comprehensive-brand-voice-and-tone-guide` |

## Plugin Folder Standard

```
plugin-name/
├── plugin.json          # name, description, skills list
└── skills/
    ├── skill-a/
    │   └── SKILL.md     # YAML frontmatter + instructions
    ├── skill-b/
    │   └── SKILL.md
    └── skill-c/
        ├── SKILL.md
        └── references/  # Optional deep docs
```

## Contribution Router (Auto-Classification)

When a user creates a skill and wants to contribute it:

1. Read the SKILL.md content
2. Match to a plugin category from the 10 bundles above
3. Verify naming standard compliance
4. Verify SKILL.md format (frontmatter: `name`, `description`)
5. Propose placement path: `plugins/[category]/skills/[skill-name]/SKILL.md`
6. **[APPROVAL_GATE]** — user confirms placement
7. Format PR or move file to correct location

## Setup Flow (Skill Selection on First Clone)

During `setup.md` Q&A, ask the user:

> "Which skill bundles does your project need?"

Present the 10 plugin categories as a checklist. Then:
1. Clone only selected plugins into the user's warehouse
2. Delete all unselected plugin folders
3. Keep `skills/` and `third-party/` intact (meta-skills are always needed)

## Contributor Types

| Type | How | System Response |
|---|---|---|
| 🛠️ Self-Creator | Builds skill during work | Auto-classify → offer to PR |
| 🌐 Third-Party Cloner | Finds skill on GitHub | Place in `third-party/` with LICENSE |
| 🤝 Community PR | Submits PR directly | Review against naming + format |
| 🔍 Researcher | Identifies skill gap | Stub in `think_tank/` for someone to build |

## Rules

- Every plugin must have a `plugin.json` with `name` and `description`.
- Every skill must have a `SKILL.md` with YAML frontmatter (`name`, `description`).
- No duplicate skills across plugins — if it exists, reference it, don't copy it.
- Third-party skills MUST preserve original LICENSE files.
- Standalone meta-skills (like `skill-creator`, `contribution-router`) live in `skills/`, not inside any plugin.
