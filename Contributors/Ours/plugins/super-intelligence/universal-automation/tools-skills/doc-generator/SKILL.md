---
description: Generate technical documentation, guides, and knowledge articles
---

# 📄 Document Generator Skill

## What This Skill Does
Creates professional documentation from code, conversations, or topics.
Outputs in Markdown, PDF, and HTML formats.

## When to Use
- "Generate a setup guide for this project"
- "Create API documentation from this codebase"
- "Write a technical tutorial about [topic]"
- "Create a changelog from recent commits"

## Document Types & Templates

### Setup Guide Structure
```markdown
# [Project] Setup Guide

## Prerequisites
- [List requirements]

## Installation
\`\`\`bash
step-by-step commands
\`\`\`

## Configuration
| Variable | Description | Default |
|---|---|---|

## Verification
How to confirm everything works.

## Troubleshooting
Common issues and solutions.
```

### API Documentation Structure
```markdown
# API Reference

## Authentication
How to authenticate.

## Endpoints

### `POST /api/resource`
**Description:** What it does
**Headers:** Authorization: Bearer TOKEN
**Body:**
\`\`\`json
{ "field": "value" }
\`\`\`
**Response:**
\`\`\`json
{ "id": 1, "status": "created" }
\`\`\`
**Error Codes:**
| Code | Meaning |
|---|---|
```

### Changelog Structure
```markdown
# Changelog

## [1.2.0] - 2024-01-15
### Added
- New feature X
### Changed
- Improved Y performance
### Fixed
- Bug in Z component
### Removed
- Deprecated API endpoint
```

### Tutorial / How-To Structure
```markdown
# How to [Do Something]

## What You'll Learn
- Point 1
- Point 2

## Prerequisites
- Requirement 1

## Step 1: [Action]
[Explanation + code]

## Step 2: [Action]
[Explanation + code]

## Summary
What was accomplished.

## Next Steps
Where to go from here.
```

## Output Formats
1. **Markdown** (default) — for GitHub, docs sites
2. **PDF** — for sharing, printing
3. **HTML** — for web embedding

## Quality Rules
1. Every guide must be tested — follow your own steps
2. Include code examples that actually run
3. Add screenshots for visual steps
4. Version-stamp all documentation
5. Include a "Last Updated" date at the top
