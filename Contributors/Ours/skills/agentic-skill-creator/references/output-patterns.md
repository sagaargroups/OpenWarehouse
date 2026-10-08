# Output Patterns for Agentic Skills

Use these patterns when the generated skill needs to produce consistent, high-quality output.

## Template Pattern (Strict)

For skills where output must be identical every time (API responses, daily content, data formats):

```markdown
## Output format

ALWAYS use this exact template:

# [Topic Title]

## Research Sources
- Source 1: [URL] — [key finding]
- Source 2: [URL] — [key finding]
- Source 3: [URL] — [key finding]

## Script
**Part 1 (Problem):** [Aggressive, fear-driven voice — max 4 sentences]
**Part 2 (Solution):** [Calm, human voice — max 4 sentences]
**Loop bridge:** [Last word of Part 2 connects to first word of Part 1]

## Visual Prompts
| Scene | Image Prompt | Motion Prompt |
|-------|-------------|---------------|
| Problem | [Locked style] render of [toxic object] | [Dynamic motion descriptor] |
| Solution | [Locked style] render of [natural object] | [Gentle motion descriptor] |

## Utility Links
- Where to buy: [search string]
- Learn more: [URL]
```

## Template Pattern (Flexible)

For skills where adaptation is useful:

```markdown
## Output format

Sensible default — adjust sections as needed:

# [Title]

## Summary
[Overview of findings]

## Details
[Adapt based on what you discover]

## Recommendations
[Tailor to the specific context]
```

## Examples Pattern

When output quality depends on seeing examples, provide input/output pairs:

```markdown
## Example run

**User request:** "Generate topic about plastic water bottles"

**Agent output:**
```json
{
  "topic": "Plastic Water Bottles vs Copper Lota",
  "fear": "BPA leaching from plastic at room temperature",
  "solution": "Traditional copper lota — natural antimicrobial",
  "sources": [
    {"title": "BPA Health Effects", "url": "pubmed.gov/...", "finding": "BPA detected in 93% of tested bottles"}
  ],
  "script_part1": "You drink from me every single day. I'm your trusted plastic bottle...",
  "script_part2": "Your grandmother never needed me. She had her copper lota...",
  "image_prompt": "Pixar 3D render of a menacing translucent plastic bottle with toxic green particles floating inside..."
}
```

Examples help the agent understand the desired style and detail level more clearly than descriptions alone.

## Skill-File Output Pattern

When the generated skill itself produces another skill (meta-skill):

```markdown
## Output format

Output a complete SKILL.md file with:
1. YAML frontmatter (name + description)
2. Markdown body following the agentic skill structure
3. Separately output any reference/asset files as named content blocks

Format each file as:
--- FILE: references/workflow.md ---
[content]
--- END FILE ---
```

## JSON Structured Output

For skills that need machine-parseable output:

```markdown
## Output format

Return valid JSON:

{
  "status": "success|error",
  "data": { ... },
  "metadata": {
    "sources_count": 3,
    "confidence": "high|medium|low",
    "approval_needed": true
  }
}

If any field cannot be populated, set to null — never omit required fields.
```
