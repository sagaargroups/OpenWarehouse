---
name: agentic-skill-creator
description: Creates and updates production-grade agentic skills with MCP tool integration, agent workflows, approval gates, and folder structures. Use when building skills that agents execute autonomously — with tool calling, decision trees, resource files, and failure handling. Also use when iterating on or updating an existing skill. Requires "Skill Platform" MCP to be attached for writing skills directly to the Nexus platform. Triggers on: "create a skill", "build me a skill for X", "update skill Y", "make an agent that can Z", or any request to design agent workflows with tool integrations.
---

# Agentic Skill Creator

Build skills for **autonomous agents** — not just instruction sets. Every skill this creator produces includes agent workflows, MCP tool calls with method + expected output, approval gates, output format definitions, and failure handling. The output is written directly to the Nexus Skill Platform via MCP tools.

## About Agentic Skills

Agentic skills are modular, self-contained packages that transform a general-purpose agent into a specialized autonomous executor equipped with procedural knowledge, tool-calling instructions, and decision logic that no model can fully possess.

### What Agentic Skills Provide

1. **Specialized workflows** — Multi-step procedures with branching, loops, and approval gates
2. **MCP tool integrations** — Explicit instructions for which tools to call, when, with what inputs, and what to expect back
3. **Domain expertise** — Company/project-specific knowledge, schemas, business logic
4. **Bundled resources** — References, assets, and output templates for complex and repetitive tasks
5. **Failure handling** — What the agent does when a tool fails, data is missing, or a step produces unexpected output

### Difference from Standard Skills

Standard skill creator → instructions for Claude to follow
This creator → **operational specs for autonomous agents** that include:

- What MCP tools does this skill need to call and how
- What is the agent workflow — step sequence, decision points, approval gates
- What resources does it reference and when
- What is the output format the next agent or human receives
- Where does it fail and what does it do then

## Core Principles

### Concise is Key

The context window is a public good. Skills share the context window with system prompt, conversation history, other skills' metadata, and the actual user request.

**Default assumption: the agent is already very smart.** Only add context the agent doesn't already have. Challenge each piece of information: "Does the agent really need this explanation?" and "Does this paragraph justify its token cost?"

Prefer concise examples over verbose explanations.

### Set Appropriate Degrees of Freedom

Match the level of specificity to the task's fragility and variability:

**High freedom (text-based instructions)**: Use when multiple approaches are valid, decisions depend on context, or heuristics guide the approach.

**Medium freedom (pseudocode or structured steps)**: Use when a preferred pattern exists, some variation is acceptable, or configuration affects behavior.

**Low freedom (exact tool calls, locked formats)**: Use when operations are fragile and error-prone, consistency is critical, or a specific sequence must be followed. **Most agentic workflows with external tool calls should use low freedom.**

Think of the agent as exploring a path: a narrow bridge with cliffs needs specific guardrails (low freedom), while an open field allows many routes (high freedom).

### Anatomy of an Agentic Skill

Every skill consists of a required SKILL.md file and optional bundled resources:

```
skill-name/
├── SKILL.md (required)
│   ├── YAML frontmatter metadata (required)
│   │   ├── name: (required)
│   │   └── description: (required — this is the trigger)
│   └── Markdown instructions (required)
└── Bundled Resources (optional)
    ├── references/       - Documentation loaded into context as needed
    ├── assets/           - Templates, output formats used in output
    └── scripts/          - Executable code for deterministic tasks
```

#### SKILL.md (required)

- **Frontmatter** (YAML): `name` and `description` only. The `description` is the primary triggering mechanism — be clear and comprehensive about what the skill is AND when it should be used. Include all "when to use" information here, not in the body.
- **Body** (Markdown): Instructions and guidance in imperative/infinitive form.

Example description for an agentic skill:
> "Research and generate daily content topics for any niche using web search and academic research MCPs. Use when: (1) Setting up a new content channel, (2) Generating daily topic packages, (3) Building research-backed content scripts. Requires web-search and academic-research MCPs."

#### Bundled Resources

##### References (`references/`)

Documentation loaded as needed into context. Use for:
- Detailed workflow guides that would bloat SKILL.md
- Tool schemas and API documentation
- Domain knowledge, example runs, company policies
- **Best practice**: If files are large (>10k words), include grep search patterns in SKILL.md
- **Avoid duplication**: Information should live in either SKILL.md or references files, not both

##### Assets (`assets/`)

Files used within the output the agent produces, not loaded into context:
- Output templates the agent fills
- Boilerplate code or project structure
- Locked format definitions

##### Scripts (`scripts/`)

Executable code for deterministic reliability:
- Data processing scripts
- Validation scripts
- When the same code would be rewritten repeatedly

#### What NOT to Include

No README.md, INSTALLATION_GUIDE.md, QUICK_REFERENCE.md, CHANGELOG.md. The skill should only contain information needed for an agent to do the job. No auxiliary context about the creation process.

### Progressive Disclosure

Skills use a three-level loading system:

1. **Metadata (name + description)** — Always in context (~100 words)
2. **SKILL.md body** — When skill triggers (<5k words, under 500 lines)
3. **Bundled resources** — Loaded as needed (unlimited)

**Key principle:** Keep only the core workflow and selection guidance in SKILL.md. Move variant-specific details, examples, and detailed schemas to reference files.

**Pattern 1: High-level guide with references**
```markdown
## Research protocol
Follow references/research-protocol.md for detailed MCP call sequences.

## Output format
Use the locked template in assets/output-template.md.
```

**Pattern 2: Domain-specific organization**
```
content-engine/
├── SKILL.md (core workflow)
└── references/
    ├── health-niche.md
    ├── tech-niche.md
    └── finance-niche.md
```
Agent only loads the relevant niche reference.

**Pattern 3: Conditional workflows**
```markdown
1. Determine the task type:
   **Creating new skill?** → Follow "Creation workflow" below
   **Updating existing skill?** → Follow "Update workflow" below
```

**Important guidelines:**
- Avoid deeply nested references — keep one level deep from SKILL.md
- Structure longer reference files — include table of contents for files >100 lines
- Reference files from SKILL.md clearly, describing when to read them

## Skill Creation Process

Follow these steps in order:

1. Understand the skill with concrete examples
2. Plan reusable contents and MCP tool requirements
3. Design the agent workflow with approval gates
4. Write SKILL.md and resource files
5. Show user for approval
6. Save to Skill Platform via MCP
7. Iterate based on real usage

### Step 1: Understand with Concrete Examples

To create an effective skill, understand concrete examples of how it will be used. Ask targeted questions:

- "What should this skill do? Give me one example of a user request that triggers it."
- "What tools/MCPs does the agent need? (web search, APIs, databases, etc.)"
- "What does the final output look like?"
- "Is this a one-shot task or a recurring daily workflow?"
- "What could go wrong? What should the agent do when a tool fails?"

Avoid overwhelming users — max 3 questions per message. Start with the most important and follow up as needed.

Conclude when there is a clear sense of functionality, tools, and output.

### Step 1.5: Philosophy Filter (The Greatness Check)

Before planning ANY skill, run it through the 5 philosophical filters in `references/philosophy.md`:

1. **Duality Check** — Does it serve both execution (0) AND growth (1)?
2. **SHAPE Compliance** — Score it: SOP rigor, Human control, Arbitrage value, Moat strength, Skill-building (≥15/25 to proceed)
3. **Scale vs Speed** — Classify as tactical / strategic / ecosystem
4. **Ecosystem Thinking** — Is the output reusable? Can it feed other skills?
5. **Micro-Macro Balance** — Does it have precision AND context awareness?

If a skill fails the greatness check, redesign before proceeding.

### Step 2: Plan Reusable Contents and MCP Tools

Analyze each concrete example by:

1. Considering how to execute the task from scratch
2. Identifying what references, assets, and tool-call patterns would be helpful
3. **Mapping MCP tools** — for each step, does the agent need to call an external tool?

Example: Building a `daily-topic-engine` skill:
1. Generating topics requires searching the web daily → needs **web-search MCP**
2. Verifying claims requires academic sources → needs **PubMed/scholar MCP**
3. Output is always the same format → needs `assets/output-template.md`
4. Each niche has different rules → needs `references/niche-context.md`

Example: Building a `code-reviewer` skill:
1. Reading code requires file access → needs **filesystem MCP**
2. Checking style requires linting → needs `scripts/lint-check.sh`
3. Output is a structured review → needs `assets/review-template.md`

### Step 3: Design the Agent Workflow

Map the execution flow with explicit tool calls and decision points:

```
Step 1: [Action] → Tool: mcp__endpoint(args) → Expected: {response}
    ↓
Step 2: [Decision] → If condition A → Step 3a / If condition B → Step 3b
    ↓
Step 3: [Action] → Tool: mcp__endpoint(args) → Expected: {response}
    ↓
[APPROVAL_GATE] — Show user the output, wait for confirmation
    ↓
Step 4: [Final output / Save]
```

For each step define:
- **Action**: What the agent does
- **Tool call** (if any): MCP name, endpoint, input args, expected output
- **Condition/decision logic**: When branching
- **Failure fallback**: What happens if a tool returns an error, times out, or returns unexpected data

**Every skill must have at least one `[APPROVAL_GATE]`** where the agent pauses and shows the user what it produced before proceeding.

### Step 4: Write SKILL.md and Resources

#### Writing Guidelines

- Always use imperative/infinitive form
- Remember: you are writing instructions for another agent instance to follow
- Include information that would be beneficial and non-obvious to the agent
- Consider what procedural knowledge, domain-specific details, or reusable assets would help

#### Frontmatter

Write YAML frontmatter with `name` and `description` only:

- `name`: The skill name (kebab-case)
- `description`: The primary triggering mechanism. Include:
  - What the skill does
  - Specific triggers/contexts for when to use it
  - What MCPs/tools it requires
  - All "when to use" information here — NOT in the body

#### Body Structure

```markdown
# [Skill Name]

[One-line purpose statement]

## Tools Required
- [MCP name] — [what it's used for]

## Workflow

### Step 1: [Name]
[Instructions with exact tool calls]

### Step 2: [Name]
[Decision logic if branching]

### [APPROVAL_GATE]
Show user: [what to display]
Wait for: explicit approval

### Step 3: [Name]
[Final action / output]

## Output Format
[Exact template or reference to assets/template.md]

## Failure Handling
- If [tool X] fails: [fallback action]
- If [data is missing]: [alternative approach]
```

#### Write Resource Files

Start with the reusable resources identified in Step 2. May require user input — for example, project-specific context, brand guidelines, or API documentation.

Delete any placeholder files not needed for the skill.

### Step 5: Power Approval Gate

To prevent unauthorized or faulty skill deployments, **EVERY** write operation (create, update, delete) MUST go through a strict **[POWER_APPROVAL_GATE]**.

Before calling any platform save/write tools, present the following request clearly in chat and wait for explicit confirmation:

```markdown
### ⚠️ POWER APPROVAL REQUESTED
I am about to perform a **[CREATE | UPDATE | DELETE]** operation on the Skill Platform.

* **Action**: [Create Skill / Update Skill / Delete Skill]
* **Target Skill**: [Skill Name] (Category: [category], Icon: [icon])
* **Platform URL/Path**: `/api/v1/nexus/platform/skills/[action]`
* **Folder Files**:
  - `SKILL.md` ([Brief description of the instructions])
  - [List any references or assets files]
* **Rationale (Why)**: [Clear reasoning for why this skill is being created or updated]

**Do you grant Power Approval to proceed with this action?**
```

Wait for the user's explicit response (e.g. "yes", "approve") before proceeding.

### Step 6: Save to Skill Platform

After approval, call the platform MCP tool:

```
Tool: skill_platform__create
Method: POST to /create
Args:
  name: "skill-name"
  description: "Full trigger description..."
  skillContent: "Full SKILL.md body (without frontmatter — it's stored separately)"
  category: "general|writing|research|code|design|data|automation|content"
  icon: "🎯"
  outputFormat: "markdown|json|skill-file|structured"
  files: {
    "references/workflow.md": "...",
    "references/tool-schemas.md": "...",
    "assets/output-template.md": "..."
  }
```

Confirm the success response to the user. Report the skill name and folder structure.

### Step 7: Iterate

When user requests changes after testing:

1. Call `skill_platform__get` with `skill_name` to read current skill + all folder files
2. Show user what exists currently
3. Discuss what to change — ask targeted questions
4. Make changes to SKILL.md and/or resource files
5. Show updated version for approval
6. Call `skill_platform__update` with the full updated content
7. Confirm update

**Iteration workflow:**
1. Use the skill on real tasks
2. Notice struggles or inefficiencies
3. Identify how SKILL.md or bundled resources should be updated
4. Implement changes and test again

## Output Patterns for Generated Skills

### Template Pattern

For strict requirements (like API responses or daily output):

```markdown
## Output format

ALWAYS use this exact template:

# [Topic Title]
## Research Sources
- Source 1: [URL] — [key finding]
## Script
Part 1 (Problem): [text]
Part 2 (Solution): [text]
## Visual Prompts
| Scene | Image Prompt | Motion Prompt |
|-------|-------------|---------------|
```

### Examples Pattern

When output quality depends on seeing examples, provide input/output pairs in the generated skill:

```markdown
## Example run

**User input:** "Generate topic about plastic water bottles"
**Agent output:**
Topic: Plastic Water Bottles vs Copper Lota
Research: [PubMed] BPA leaching study 2024...
Script Part 1: "You're drinking from me every day..."
```

Examples help the agent understand desired style and detail level more clearly than descriptions alone.

## Rules

- Never invent MCP tools that don't exist. Only reference MCPs the agent actually has access to.
- Every generated skill must have at least one approval gate before final output.
- Keep SKILL.md under 500 lines. Move detailed content to references/.
- The `description` field is the trigger mechanism — make it comprehensive.
- Always save with source `agent` so skills created by this agent are trackable.
- Do NOT create extraneous files (README, CHANGELOG, etc.). Only files the agent needs.
- Test the skill mentally: walk through a real prompt and verify every step works before showing user.
- When updating: always read the existing skill first via `skill_platform__get`, never assume the current state.
