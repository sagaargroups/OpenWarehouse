---
name: contribution-router
description: "Auto-classifies and routes new skills to the correct warehouse location. Use when a user creates a skill and wants to contribute it, or when organizing existing skills into the correct plugin category. Triggers on: 'contribute this skill', 'where does this go', 'submit to repo', 'organize skills'."
---

# Contribution Router

Auto-classifies skills and places them in the correct warehouse location.

## Workflow

### Step 1: Read the Skill
Read the SKILL.md content — extract `name`, `description`, and the core domain.

### Step 2: Classify
Match to one of the 10 plugin categories (see `.agents/skills/warehouse-ecosystem/SKILL.md` for the full list):

| Category | Match Keywords |
|---|---|
| `brand-establishment` | brand, identity, logo, voice, trademark, domain |
| `development` | code, frontend, backend, api, database, testing, mcp |
| `content-engine` | content, topic, script, video, social, writing |
| `seo-geo` | seo, keyword, search, geo, ranking, llms-txt |
| `devops-pipeline` | ci-cd, docker, deploy, monitoring, infra |
| `data-analytics` | data, dashboard, report, analytics, metrics |
| `finance-ops` | invoice, tax, expense, audit, finance |
| `legal-compliance` | legal, privacy, terms, compliance, ip |
| `productivity` | task, meeting, standup, time, productivity |
| `sales-growth` | lead, crm, sales, pitch, onboarding |

If no category matches → propose as standalone in `skills/`.

### Step 3: Verify Standards
- [ ] Name is `kebab-case`, max 3 words
- [ ] SKILL.md has YAML frontmatter (`name`, `description`)
- [ ] No spaces in folder name
- [ ] No duplicate skill name in warehouse

### Step 4: Propose Placement
```
Proposed path: plugins/[category]/skills/[skill-name]/SKILL.md
```

### [APPROVAL_GATE]
Show the user the proposed path and classification. Wait for confirmation.

### Step 5: Move or PR
- **Local:** Move file to correct location
- **Contribution:** Format as PR with correct path + category tag

## Failure Handling
- If skill matches 2+ categories: ask user to pick one
- If naming violates standard: suggest corrected name
- If SKILL.md missing frontmatter: add it automatically
