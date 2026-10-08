# Agent Logs

This folder stores immutable context so work persists across chat sessions.

## Purpose

When you start a new chat, the AI agent reads these logs to understand:
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

This ensures **ZERO context loss** between chat sessions!
