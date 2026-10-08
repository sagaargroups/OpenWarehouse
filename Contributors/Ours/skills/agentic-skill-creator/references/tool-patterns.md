# MCP Tool Call Patterns

Reference for writing precise tool call instructions in generated skills.

## Standard Tool Call Format

```markdown
Call `mcp_name__endpoint_name` with:
  Input: { "query": "[search term]", "limit": 5 }
  Expected: { "results": [...] }
  On error: [fallback action]
```

## Common MCP Patterns

### Web Search
```markdown
Call `web_search__search` with:
  Input: { "query": "[topic] site:pubmed.gov OR site:scholar.google.com" }
  Expected: Array of { title, url, snippet }
  On error: Broaden query, remove site filter, retry once
```

### WordPress CMS
```markdown
Call `wordpress__create_draft` with:
  Input: { "title": "[topic]", "content": "[html body]", "status": "draft", "categories": ["health"] }
  Expected: { "id": number, "link": "url" }
  On error: Show content to user for manual paste
```

### File Operations
```markdown
Call `filesystem__read_file` with:
  Input: { "path": "references/context.md" }
  Expected: String content of file
  On error: Inform user file is missing, ask for manual input
```

### Skill Platform (Internal)
```markdown
Call `skill_platform__create` with:
  Input: {
    "name": "skill-name",
    "description": "trigger description",
    "skillContent": "full SKILL.md body",
    "category": "automation",
    "icon": "🎯",
    "files": {
      "references/workflow.md": "content...",
      "assets/template.md": "content..."
    }
  }
  Expected: { "success": true, "message": "Skill created" }
  On error: Show full SKILL.md to user so work isn't lost
```

## Tool Call Chains

When one tool's output feeds into the next:

```markdown
Step 1: results = web_search__search({ query: "[topic]" })
Step 2: For each result in results[0..2]:
          detail = web_search__fetch({ url: result.url })
          Extract key facts from detail
Step 3: Use extracted facts in script generation
```

## Rate Limiting Awareness

```markdown
Note: web_search MCP has a 10-call limit per session.
Batch queries when possible. Combine related searches into one broad query
rather than making 5 narrow queries.
```
