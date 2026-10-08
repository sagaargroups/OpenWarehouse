# Agentic Workflow Patterns

## Sequential Workflows with Tool Calls

For agentic tasks, break operations into clear steps with explicit tool calls:

```markdown
Generating a daily topic involves these steps:

1. Scan trends (call web_search__trending with {query: "health toxins 2026"})
2. Validate claims (call academic__search with {query: "BPA health effects", source: "pubmed"})
3. Write script using validated data
4. [APPROVAL_GATE] — Show user the topic package
5. Save to CMS (call wordpress__create_draft with {title, content, status: "draft"})
```

## Conditional Workflows with Decision Points

For tasks with branching logic, guide the agent through decision points:

```markdown
1. Determine the user's intent:
   **Creating a new skill?** → Follow "Creation workflow" below
   **Updating an existing skill?** → Call skill_platform__get first, then follow "Update workflow"
   **Exploring what's possible?** → Follow "Discovery conversation" below

2. Creation workflow:
   a. Ask clarifying questions (max 3 messages)
   b. Design workflow map
   c. Write SKILL.md + resources
   d. [APPROVAL_GATE]
   e. Save via skill_platform__create

3. Update workflow:
   a. Read existing skill via skill_platform__get
   b. Show current state to user
   c. Discuss changes
   d. Apply changes
   e. [APPROVAL_GATE]
   f. Save via skill_platform__update
```

## Looping Workflows (Recurring/Daily)

For skills that run on a schedule or produce multiple outputs:

```markdown
For each topic in the batch:
  1. Research the topic (tool call)
  2. Validate sources (tool call)
  3. Generate output (fill template)
  4. Append to batch output

After all topics:
  [APPROVAL_GATE] — Show full batch
  Save all via MCP
```

## Approval Gate Patterns

**Simple gate** — pause and show output:
```markdown
### [APPROVAL_GATE]
Present the complete output to the user.
Ask: "Approve this? I'll proceed to save it."
Wait for explicit confirmation before calling any save/publish tools.
```

**Conditional gate** — only pause for critical decisions:
```markdown
### [APPROVAL_GATE: if output contains medical claims]
If any research source is from a non-peer-reviewed site,
flag it and ask user to confirm before proceeding.
```

## Failure Handling Patterns

```markdown
## Failure handling

- If web_search MCP returns empty: Try alternative query with broader terms. If still empty, inform user and ask for manual topic input.
- If academic search times out: Skip source validation, mark output as "unverified" and flag for user review.
- If skill_platform__create fails: Show the full SKILL.md content to user so they can manually save it. Do not lose the work.
```
