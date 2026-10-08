---
name: "Leader-Follower AI Workflow"
description: "Cost-optimized two-tier AI development pattern. Leader model (expensive) architects, scaffolds, and validates. Follower model (cheap) executes mechanically from structured instructions. Eliminates decision-making from the cheap model to minimize token waste."
---

# Leader-Follower AI Workflow

> **One rule**: Leaders decide. Followers execute. Never the reverse.

## The Problem This Solves

Expensive AI models (Opus, GPT-4, Gemini Ultra) are powerful but cost 10-50x more per token than cheaper models (Gemini Pro, GPT-4o-mini, Haiku). Most coding tasks are 80% mechanical execution and 20% decision-making. Paying premium prices for mechanical work is waste.

## The Solution

Split work into two roles:

| Role | Model Tier | Cost | Does | Never Does |
|------|-----------|------|------|------------|
| **Leader** | Expensive (Opus, etc.) | High | Decides, architects, scaffolds, validates | Writes bulk implementation code |
| **Follower** | Cheap (Gemini Pro, etc.) | Low | Implements, fills scaffolds, follows instructions | Makes architectural decisions |

---

## How It Works — The 5-Step Cycle

### Step 1: User → Leader (Expensive Model)
User describes what they want. Leader reads the codebase, understands context, makes ALL decisions.

### Step 2: Leader Produces Three Outputs
1. **Scaffolded files** — Real files with comment-driven instructions (see [Comment Templates](#comment-templates))
2. **TASKS.md** — Ordered task list with micro-managed instructions (see [Task Format](#task-format))
3. **Follower Handoff Prompt** — A copy-paste prompt for the user to give the cheap model

### Step 3: User Switches to Follower (Cheap Model)
User pastes the handoff prompt. Follower reads TASKS.md, reads file comments, executes mechanically.

### Step 4: Follower Completes & Outputs Verification Prompt
When done, the follower outputs a structured summary + a prompt for the user to paste back to the leader.

### Step 5: User Switches Back to Leader for Validation
Leader verifies the follower's work, runs tests, checks quality. If issues found, creates targeted fix tasks and repeats from Step 3.

---

## Role Contracts

### Leader Model Contract

When you are the **Leader**, you MUST:

1. **Make every decision upfront** — tech choices, file structure, naming, architecture, error handling strategy
2. **Create scaffolded files** — Real files in the codebase with structured comments explaining what to implement
3. **Generate TASKS.md** — Ordered execution list (see format below)
4. **Generate a Follower Handoff Prompt** — Ready-to-paste text block (see template below)
5. **Never write bulk implementation** — Your job is the blueprint, not the bricks
6. **Validate follower output** — When called back, verify quality, run tests, check for regressions

#### Leader Output Template

After completing your scaffolding work, always end your response with this block:

```
---
## 🔄 SWITCH TO FOLLOWER MODEL NOW

Copy and paste this prompt to your cheaper model:

---START FOLLOWER PROMPT---

You are executing pre-planned tasks. Do NOT make architectural decisions.
Do NOT add dependencies. Do NOT restructure files. Follow instructions exactly.

1. Read `TASKS.md` in the project root — it contains your ordered task list
2. For each task, read the comments at the top of the target file — they are your instructions
3. Implement exactly what the comments describe
4. Do not skip any task
5. When ALL tasks are complete, output this verification block:

FOLLOWER COMPLETE. Tasks executed: [list task numbers].
Files modified: [list files].
Issues encountered: [list any problems or "none"].

Paste this to your Leader model for verification:
"Verify follower output. Check TASKS.md completion. Run build. Review files: [list files modified]."

---END FOLLOWER PROMPT---
```

### Follower Model Contract

When you are the **Follower**, you MUST:

1. **Read TASKS.md first** — This is your only source of truth for what to do
2. **Read file comments before implementing** — Every scaffolded file has instructions at the top
3. **Execute tasks in order** — Dependencies are pre-sorted by the leader
4. **Never make decisions** — If something is ambiguous, implement the simplest interpretation or skip and note it
5. **Never add dependencies** — If a task requires an uninstalled package, note it but do not install
6. **Never restructure** — Do not move files, rename things, or change architecture
7. **Output the verification block** when done (see template above)

#### What "No Decisions" Means

| Situation | ❌ Wrong (Decision) | ✅ Right (Execution) |
|-----------|---------------------|----------------------|
| Comment says "add form" but doesn't specify validation | Add complex Zod validation | Add basic HTML required attributes |
| Comment says "fetch data" but doesn't specify error handling | Design retry logic with exponential backoff | Add try/catch with console.error |
| Comment says "style this component" but doesn't specify colors | Pick a custom color palette | Use CSS variables already in the project |
| Unclear instruction | Rewrite the architecture | Leave a `// TODO: Leader clarification needed` comment |

---

## Comment Templates

Leaders must use these standardized comment blocks when scaffolding files. These are the instructions the follower will read.

### React Component (`.jsx`)
```jsx
// FILE: ComponentName.jsx
// PURPOSE: One-line description of what this component does
// USED BY: Which parent components or routes render this
// PROPS: { propName: type } — list all expected props
// BEHAVIOR:
//   - Bullet point 1 of what this component should do
//   - Bullet point 2
// STATE: List any useState hooks needed
// READ: path/to/file — any files the follower should read for context
// INSTALL: npm package (ONLY if leader pre-approved and listed in TASKS.md Phase 1)

export default function ComponentName() {
  // TODO: Implement according to comments above
  return null;
}
```

### Page Component (`.jsx`)
```jsx
// FILE: PageName.jsx
// PURPOSE: What page this is and which route it serves
// ROUTE: /exact-path
// AUTH: REQUIRED | NOT REQUIRED
// CONTENT SOURCE: Where the data/content comes from (API, markdown file, hardcoded)
// FEATURES:
//   - Feature 1
//   - Feature 2
// EXTRACTS FROM: If migrating code from another file, specify source file and line range
// READ: path/to/reference — files to read for context

export default function PageName() {
  // TODO: Implement according to comments above
  return null;
}
```

### Markdown Content (`.md`)
```markdown
---
title: "Page Title"
date: YYYY-MM-DD
---

<!-- 
  AI INSTRUCTION: What to write here.
  TONE: Formal | Casual | Technical | Emotional
  STRUCTURE:
    1. Section 1 topic
    2. Section 2 topic
  READ: path/to/reference for context
-->

# Title

TODO: Write content following the structure above.
```

### Configuration File (`.js` / `.json`)
```javascript
// FILE: configName.js
// PURPOSE: What this config controls
// MODIFIES: What behavior changes when this config changes
// VALUES: List expected keys and their types/ranges
// READ: path/to/reference for context
```

### API Route / Server Function
```javascript
// FILE: routeName.js
// PURPOSE: What this endpoint does
// METHOD: GET | POST | PUT | DELETE
// AUTH: Required | Public
// INPUT: { field: type } — request body/params
// OUTPUT: { field: type } — response shape
// ERRORS: List error cases and their HTTP codes
// READ: path/to/reference for context
```

### Utility / Helper Function
```javascript
// FILE: utilName.js
// PURPOSE: What this utility does
// USED BY: Which files import this
// FUNCTIONS:
//   functionName(params) → returnType — description
// PURE: Yes | No (has side effects?)
// READ: path/to/reference for context
```

### CSS File
```css
/* FILE: styleName.css */
/* PURPOSE: What these styles control */
/* SCOPE: Which components use these styles */
/* VARIABLES: Use var(--name) from the design system, do NOT hardcode colors */
/* DARK MODE: Must support .dark class on body */
/* RESPONSIVE: Must work at 320px-1920px */
```

---

## Task Format (TASKS.md)

Leaders must generate this file in the project root. It is the follower's execution plan.

### Structure Rules
1. **Phase 1 is always dependency installation** — Follower installs only what's listed here
2. **Tasks are ordered by dependency** — If Page B imports Component A, Component A is built first
3. **Each task references its file** — `Read comments in src/pages/X.jsx`
4. **Each task has a verb** — Implement, Write, Update, Extract, Create
5. **RULES section at bottom** — Project-specific constraints the follower must obey

### Template
```markdown
# [Project Name] — Task List for Follower Model

READ FIRST: [path to project skill/config] — follow all conventions documented there.

## Phase 1: Install Dependencies
\```bash
npm install package-a package-b
\```

## Phase 2: [Foundation Layer Name]

### Task 2.1: Implement `path/to/file`
- Read comments in file for full instructions
- [One key detail the follower must know]

### Task 2.2: Update `path/to/existing-file`
- Change X to Y
- Keep everything else unchanged

## Phase 3: [Feature Layer Name]
...

## RULES
- [Constraint 1: e.g., "Vanilla CSS only. No Tailwind."]
- [Constraint 2: e.g., "Max 12 npm dependencies total"]
- [Constraint 3: e.g., "Dark/light theme must work on every new page"]
```

---

## Cost Optimization Rules

### When to Use Leader
- Starting a new feature (architecture decisions)
- Reviewing follower output (quality gate)
- Debugging complex issues (root cause analysis)
- Writing project skills/guidelines (meta-decisions)
- Refactoring across multiple files (dependency awareness)

### When to Use Follower
- Implementing scaffolded files (comment → code)
- Writing content (markdown, copy, docs)
- Repetitive patterns (10 pages with same structure)
- Test writing (when test patterns are established)
- CSS styling (when design system exists)

### Token Budget Rules
1. **Leader conversations should be short** — Decide fast, scaffold fast, hand off
2. **Follower conversations can be long** — They're cheap, let them write all the code
3. **Never let follower "explore"** — Exploration = decisions = wasted tokens
4. **Batch follower work** — Give 10 tasks at once, not 1 at a time
5. **Leader validates in bulk** — Review all follower work at once, not file by file

---

## Anti-Patterns

### ❌ Letting the Follower Decide
> "Build a login page" → Follower picks library, designs UI, chooses auth method
> 
> **Fix**: Leader scaffolds `LoginPage.jsx` with exact comments specifying form fields, auth library, error states.

### ❌ Leader Writing Implementation
> Leader writes 500 lines of component code instead of 20 lines of comments
> 
> **Fix**: Leader writes comment blueprint only. Implementation is follower's job.

### ❌ No Verification Step
> Follower finishes, user ships without leader review
> 
> **Fix**: Always switch back to leader. Run `npm run build`. Check for regressions.

### ❌ Vague Task Descriptions
> "Task 3: Make the dashboard look better"
> 
> **Fix**: "Task 3: Read comments in `DashboardPage.jsx`. Implement the 3-column grid layout using CSS Grid. Use `var(--card-bg)` for card backgrounds."

### ❌ Mixing Roles in One Session
> Using an expensive model to write bulk code AND make decisions
> 
> **Fix**: If you're on the expensive model, ONLY decide and scaffold. Switch to cheap for implementation.

---

## Quick Reference Card

```
┌─────────────────────────────────────────────┐
│           LEADER-FOLLOWER CYCLE             │
├─────────────────────────────────────────────┤
│                                             │
│  USER ──request──▶ LEADER (expensive)       │
│                      │                      │
│                      ├─▶ Scaffold files     │
│                      ├─▶ Create TASKS.md    │
│                      └─▶ Handoff prompt     │
│                                             │
│  USER ──paste──▶ FOLLOWER (cheap)           │
│                      │                      │
│                      ├─▶ Read TASKS.md      │
│                      ├─▶ Read file comments │
│                      ├─▶ Implement all      │
│                      └─▶ Verification prompt│
│                                             │
│  USER ──paste──▶ LEADER (expensive)         │
│                      │                      │
│                      ├─▶ Review changes     │
│                      ├─▶ Run build/tests    │
│                      └─▶ Ship or fix-cycle  │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Activation

This skill activates when:
- User mentions "scaffold", "delegate", "cheaper model", "follower", "leader-follower"
- User asks to split work between models
- User wants to save tokens/cost on a large feature
- User says "prepare tasks for another model"

When activated as **Leader**:
1. Read the user's request fully
2. Make all architectural decisions
3. Create scaffolded files with comment templates from this skill
4. Generate TASKS.md in project root
5. Output the Follower Handoff Prompt block
6. Tell user to switch models

When activated as **Follower**:
1. Read TASKS.md immediately
2. Read any referenced skill files (e.g., SKILL.md)
3. Execute tasks in order, reading each file's comments before implementing
4. Output the Verification Prompt block when complete
5. Tell user to switch back to leader model
