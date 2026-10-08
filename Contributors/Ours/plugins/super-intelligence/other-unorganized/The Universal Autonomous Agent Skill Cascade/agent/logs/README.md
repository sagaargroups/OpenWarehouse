# Agent Logs

This folder stores immutable context logs so work persists across chat sessions.

## Purpose

When you start a new chat, the agent can read these logs to understand:
- What work was done
- What decisions were made
- Current project state
- Pending tasks

## Log Files

| File | Purpose |
|------|---------|
| `work-history.md` | Chronological list of completed work |
| `current-status.md` | Current project status snapshot |
| `pending-tasks.md` | Tasks that need to be done |

## How It Works

1. **After each significant action**, agent appends to `work-history.md`
2. **At end of session**, agent updates `current-status.md`
3. **On new chat start**, agent reads these files first

## Log Format

```markdown
## 2024-02-01 16:45

### Task: Created Universal Agent Skill
- Created SKILL.md with production standards
- Created 4 preference YAML files
- Created checklists for security, accessibility
- Status: Complete

### Next Steps:
- Implement Platform APIs
- Add testing framework
```

## Agent Instructions

When starting any new chat on this workspace:

1. **FIRST**: Read `.agent/logs/current-status.md`
2. **THEN**: Check `.agent/logs/pending-tasks.md`
3. **FINALLY**: Ask user if they want to continue pending work

This ensures NO context is lost between chats!
