# TASKS.md — Format Reference

> This document teaches Leaders how to write TASKS.md files that Followers can execute without thinking.

---

## Golden Rules

1. **Phase 1 is ALWAYS dependencies** — Follower installs only what's listed
2. **Tasks ordered by dependency** — If B imports A, task A comes first
3. **Every task names its file** — `Implement src/pages/X.jsx`
4. **Every task starts with a verb** — Implement, Write, Update, Extract, Create, Delete
5. **Every task says what to read** — `Read comments in file` or `Read SKILL.md section X`
6. **RULES section at bottom** — Non-negotiable project constraints

---

## Template

```markdown
# [Project Name] — Task List for Follower Model

READ FIRST: `[path/to/SKILL.md or project guidelines]` — this is your constitution. Every decision is documented there.

## Phase 1: Install Dependencies
\`\`\`bash
npm install package-a package-b package-c
\`\`\`
> DO NOT install anything else. If a task requires an unlisted package, SKIP the task and note it.

## Phase 2: [Foundation/Core Layer]

### Task 2.1: [Verb] `[exact/path/to/file]`
- Read comments in file for full instructions
- [One critical detail the follower must know]
- [Optional: specific line range to extract from another file]

### Task 2.2: [Verb] `[exact/path/to/file]`
- Read comments in file
- [Key detail]

## Phase 3: [Feature Layer]

### Task 3.1: [Verb] `[exact/path/to/file]`
- Read comments in file
- [Key detail]

## Phase N: [Content / Polish Layer]

### Task N.1: [Verb] `[exact/path/to/file]`
- Read instructions inside the file (HTML comments or frontmatter)
- [Tone/style guidance if content task]

## RULES
- [Hard constraint 1]
- [Hard constraint 2]
- [Hard constraint 3]
- Read [path/to/guidelines] before writing ANY code
```

---

## Task Verb Reference

| Verb | Means | Example |
|------|-------|---------|
| **Implement** | Write code from scratch using file comments | `Implement src/Router.jsx` |
| **Update** | Modify existing code, keep unchanged lines | `Update src/main.jsx — replace App with Router` |
| **Extract** | Move code from file A into file B | `Extract lines 100-200 from App.jsx into LandingPage.jsx` |
| **Write** | Create text/markdown content | `Write content/pages/vision.md` |
| **Create** | Make a new file from scratch (no scaffold exists) | `Create vercel.json with SPA rewrites` |
| **Delete** | Remove code or files | `Delete the visitor landing block from App.jsx` |
| **Configure** | Set up tool/service config | `Configure vite.config.js for SPA fallback` |

---

## Phase Ordering Strategy

```
Phase 1: Dependencies (npm install)
    ↓
Phase 2: Core infrastructure (router, middleware, shared components)
    ↓
Phase 3: Page components (depend on Phase 2 infrastructure)
    ↓
Phase 4: Feature components (depend on Phase 3 pages)
    ↓
Phase 5: Content (markdown files — no code dependencies)
    ↓
Phase 6: Configuration (vercel.json, CI/CD, env)
    ↓
Phase 7: Tests (depend on everything above)
```

---

## Complexity Indicators

Add these badges to help followers estimate effort:

- `[SIMPLE]` — < 20 lines, one function, no state
- `[MEDIUM]` — 20-100 lines, some state, imports
- `[COMPLEX]` — 100+ lines, multiple state hooks, side effects
- `[EXTRACT]` — Moving existing code (reference source file + lines)
- `[CONTENT]` — Writing prose, not code

---

## Follower Completion Block

Every TASKS.md should end with instructions for the follower to output when done:

```markdown
## WHEN COMPLETE

Output this block:

---FOLLOWER REPORT---
Tasks completed: [list numbers, e.g., 2.1, 2.2, 3.1, 3.2]
Tasks skipped: [list numbers + reason, or "none"]
Files created: [list new files]
Files modified: [list modified files]
Dependencies added: [list, or "none beyond Phase 1"]
Issues encountered: [describe, or "none"]
Build status: [ran npm run build — pass/fail, or "not attempted"]

→ Paste this to your Leader model:
"Verify follower work. Files: [list]. Run build. Check for regressions."
---END FOLLOWER REPORT---
```
