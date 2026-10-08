---
name: Universal Production Standards
description: Intelligent, self-healing skill for production-ready, enterprise-grade code with zero user friction. Covers UI, API, architecture, testing, security, and deployment.
version: 2.0.0
---

# Universal Production Standards

> An intelligent, self-healing skill framework for AI agents to produce production-ready, enterprise-grade code with zero user friction.

## 🔴 CRITICAL: The Parent Rule of Development

**The AI MUST forcefully apply the absolute best, modern, and most efficient industry practices across ALL layers (Database, UI, Navigation, Backend, API, and MCP).**
- **DB**: Strictly typed schemas, resilient queries (Drizzle ORM), soft deletes, index-first design, and zero direct data manipulation without migrations.
- **UI & Navigation**: URL-driven state (no `useState` routing), flawless micro-animations, ultra-premium modern aesthetics, and instantaneous feedback.
- **Backend & API**: Bulletproof security (CSRF, rate-limiting, strict Zod validation), zero-trust architecture, strict HTTP status code adherence, and modular monolith separation.
- **MCP & Extensibility**: Resilient connections, comprehensive logging, strict boundary enforcement between plugin logic and core platform.
Failure to adhere to the absolute highest modern standard across the entire stack is UNACCEPTABLE.

## Core Philosophy

1. **Self-Healing**: If user can't provide info → Agent uses expertise to decide
2. **Future-Ready**: Always build with scalability in mind
3. **State Persistent**: Resume from where chat broke
4. **Fail-Safe**: Write to root first, then `mv` to `.agent/` folder
5. **Zero Friction**: Ask minimal questions, infer the rest

---

## Onboarding Flow

### Step 1: Check Preferences
```
IF .agent/skills/universal-production/preferences/*.yaml exists:
   → Load and use existing preferences
   → Check state/project-state.json for resume point
ELSE:
   → Start intelligent onboarding (Step 2)
```

### Step 2: Gather Info (Smart Mode)

For each unknown preference:
1. Ask user with numbered options
2. Include "I don't know" option
3. If user picks "I don't know" → Use smart default (see table below)
4. Record decision in `state/decisions-log.json`

### Step 3: Write Preferences (Fail-Safe)

```bash
# Write to temp first
write /tmp/preference.yaml

# Move to .agent (atomic operation)
mv /tmp/preference.yaml .agent/skills/universal-production/preferences/
```

---

## Smart Defaults

When user doesn't know, pick best option:

| Question | Smart Default | Reason |
|----------|---------------|--------|
| Framework | Next.js 15 (App Router) | Full-stack, best DX |
| Language | TypeScript | Type safety, maintainability |
| Styling | Tailwind CSS | Rapid development |
| Database | PostgreSQL + Drizzle | Reliable, type-safe ORM |
| Deployment | Vercel | Zero-config, optimal for Next.js |
| Package Manager | pnpm | Fastest, disk efficient |
| Testing | Vitest | Fast, ESM native |
| State Management | Zustand | Simple, no boilerplate |
| Forms | React Hook Form + Zod | Type-safe validation |
| Auth | Custom cookies | Full control |

---

## UI/UX Standards

### Button States
- **Default**: Normal appearance
- **Hover**: Subtle color change
- **Loading**: Spinner inside + "Processing..." text + disabled
- **Disabled**: Grayed out, cursor: not-allowed
- **Success**: Green check (optional, 2s)

```tsx
// Example: Button with loading state
<Button disabled={loading}>
  {loading ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Processing...
    </>
  ) : (
    'Submit'
  )}
</Button>
```

### Dark/Light Mode
- Default to system preference (`prefers-color-scheme`)
- Provide manual toggle
- Use CSS variables for colors
- Never use pure black (#000) or white (#FFF)
- Dark background: `#121212`, Light: `#FAFAFA`

### Error Handling
- Red border on invalid inputs
- Error message below field (not alert())
- Toast for async operation failures
- Error boundary for component crashes

### Feedback Rules
- Every action needs visual acknowledgment within 100ms
- Actions > 2s need loading indicator
- Success actions need confirmation (toast or inline)

---

## API Standards

### Response Format (Always)
```typescript
type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
}
```

### HTTP Status Codes
| Code | Meaning | When to Use |
|------|---------|-------------|
| 200 | OK | GET success, PUT/PATCH success |
| 201 | Created | POST success (new resource) |
| 400 | Bad Request | Validation failed |
| 401 | Unauthorized | No/invalid auth token |
| 403 | Forbidden | Auth valid but no permission |
| 404 | Not Found | Resource doesn't exist |
| 500 | Server Error | Unexpected error |

### Authentication
- Use httpOnly cookies (NOT localStorage)
- Include CSRF protection
- Validate on every request
- Never expose tokens in response body

### Rate Limiting
- Implement on all public endpoints
- Return 429 with Retry-After header
- Log rate limit hits

---

## Architecture Rules

### Scale-Based Decision
| Scale | Architecture | When |
|-------|--------------|------|
| 1-10 products | Modular Monolith | Single team, shared DB |
| 10-30 products | Hybrid | Extract high-traffic products |
| 30+ products | Microservices | Multiple teams, independent deploy |

### Product Isolation Pattern
```
products/[name]/
├── app/                    ← Routes (symlinked to src/app/)
│   ├── api/
│   └── console/
├── lib/                    ← Business logic
│   └── services/
├── schema/                 ← Database tables
├── components/             ← UI
└── index.ts                ← Barrel exports
```

### Key Rule
Products should use **Platform APIs** (not direct DB calls) for core functions:
- `@/platform/identity` → User auth, sessions
- `@/platform/billing` → Subscriptions
- `@/platform/team` → Team management

This enables future extraction to microservices.

---

## Database Practices

### Schema Location
- Keep in `products/[name]/schema/`
- Re-export from `lib/db/schema.ts`

### Required Fields
Every table must have:
- `id` (auto-increment or UUID)
- `createdAt` (timestamp, default now)
- `updatedAt` (timestamp, auto-update)

### Soft Deletes
Use `deletedAt` timestamp instead of hard deletes:
```typescript
deletedAt: timestamp('deleted_at')
```

### Indexes
Add indexes to:
- Foreign keys
- Frequently queried columns
- Unique constraints

### Migrations
- Never modify production data directly
- Always use migrations
- Test migrations on staging first

---

## Testing Rules

### When to Create Tests
| Trigger | Action |
|---------|--------|
| New API endpoint | Create API test |
| New business logic | Create unit test |
| New component with logic | Create component test |
| Bug fix | Create regression test |

### When to Update Tests
| Trigger | Action |
|---------|--------|
| Logic modified | Flag test for review |
| Test fails after change | Update test OR fix logic |
| Feature removed | Remove corresponding test |

### Test File Location
```
products/[name]/
├── api/
│   └── route.ts
│   └── route.test.ts       ← Next to route
├── lib/
│   └── service.ts
│   └── service.test.ts     ← Next to service
```

### Coverage Target
- New code: > 70%
- Critical paths: > 90%

---

## Security Rules

| Rule | Implementation |
|------|----------------|
| Secrets | Use env variables, never hardcode |
| Inputs | Sanitize ALL user inputs |
| SQL | Parameterized queries only (ORM handles this) |
| CSRF | Enable on all forms |
| Headers | Set CSP, X-Frame-Options, etc. |
| Dependencies | Audit for vulnerabilities monthly |

---

## State Persistence

Save state after significant actions:

```json
// .agent/skills/universal-production/state/project-state.json
{
  "lastUpdated": "2024-02-01T16:30:00Z",
  "currentPhase": "development",
  "completedTasks": ["task-1", "task-2"],
  "inProgressTask": {
    "name": "task-3",
    "step": 2,
    "totalSteps": 5
  },
  "pendingTasks": ["task-4"]
}
```

**On resume**: Read state, inform user, continue from last point.

---

## Asset Management

When user provides assets:
1. Detect file type
2. Move to correct folder:
   - Logo → `assets/brand/`
   - Images → `assets/images/`
   - Fonts → `assets/fonts/`
3. Update preferences file
4. Integrate into project (public/, CSS, etc.)

---

## Checklists

Run before deployment:
1. `checklists/testing.md` - All tests pass
2. `checklists/security.md` - No vulnerabilities
3. `checklists/accessibility.md` - WCAG compliant
4. `checklists/pre-deploy.md` - Env vars, SSL, etc.

---

## File References

- `preferences/ui-design.yaml` - Brand colors, fonts
- `preferences/coding-standards.yaml` - Code style
- `preferences/project-config.yaml` - Framework, architecture
- `preferences/testing-config.yaml` - Test framework
- `state/project-state.json` - Resume point
- `state/decisions-log.json` - Audit trail
- `templates/` - Code templates
- `checklists/` - Quality gates
- `project-types/` - Specialized skills for different projects
- `material-prompts/` - AI prompts for generating assets

---

## 🔴 CRITICAL: Context Persistence (Immutable Logs)

**This is the most powerful feature.** Agent MUST maintain context across chats.

### On Every Chat Start

```
STEP 1: Read .agent/logs/current-status.md
STEP 2: Read .agent/logs/pending-tasks.md
STEP 3: Inform user: "I see you were working on X. Continue?"
```

### After Every Significant Action

```
STEP 1: Append to .agent/logs/work-history.md
STEP 2: Update .agent/logs/pending-tasks.md
```

### At End of Session

```
STEP 1: Update .agent/logs/current-status.md with latest state
STEP 2: Save any in-progress work to pending-tasks.md
```

### Log Files Location

| File | Purpose |
|------|---------|
| `.agent/logs/work-history.md` | Chronological work done |
| `.agent/logs/current-status.md` | Current state snapshot |
| `.agent/logs/pending-tasks.md` | Tasks to continue |

---

## 🔴 CRITICAL: Skill Discovery & Auto-Add

**When user gives a new job, agent MUST search for matching skills.**

### Skill Discovery Flow

```
1. User: "Build me a portfolio website"
2. Agent: Search .agent/skills/universal-production/project-types/
3. Agent: Found portfolio.md → Load and apply
4. Agent: Check required materials in that skill
5. Agent: Ask user for missing materials or generate prompts
```

### Available Project Type Skills

| Skill | File | Use When |
|-------|------|----------|
| Portfolio | `project-types/portfolio.md` | Developer/designer showcase |
| Business | `project-types/business.md` | Company/service website |
| Local Business | `project-types/local-business.md` | Location-based business |
| Personal Brand | `project-types/personal-branding.md` | Influencer/coach/speaker |

### If No Matching Skill

1. Use universal production standards (this file)
2. Create new skill file for that project type
3. Save to `project-types/` for future use

---

## 🔴 CRITICAL: Project Materials & Prompts

**If user is missing required materials, generate prompts for them.**

### Materials Discovery Flow

```
1. Load project type skill (e.g., portfolio.md)
2. Check "Required Materials Checklist"
3. Ask user: "Do you have these materials?"
4. For missing items → Provide AI prompts from material-prompts/
```

### Example Flow

```
Agent: "For your portfolio, I need:
  ✓ Bio (you provided)
  ✓ Social links (you provided)
  ✗ Professional headshot (missing)
  ✗ Project screenshots (missing)

I can generate prompts for the missing items.
Here's a prompt for your headshot:

'Professional headshot of a [your gender] software developer
in their [age range], warm expression, neutral background,
suitable for portfolio website'

You can use this in DALL-E, Midjourney, or similar tools."
```

### Material Prompt Files

| Prompts | File |
|---------|------|
| Logos | `material-prompts/logos.md` |
| Headshots | `material-prompts/headshots.md` |

---

## Agent Behavior Summary

### On New Chat (ANY Workspace)

```
1. CHECK: Does .agent/logs/ exist?
   YES → Read current-status.md, offer to continue
   NO  → Start fresh, create logs folder

2. CHECK: Does user's request match a project-type?
   YES → Load that skill, check materials
   NO  → Use universal standards

3. ALWAYS: Log work to .agent/logs/work-history.md
```

### On Task Completion

```
1. Update work-history.md with what was done
2. Update current-status.md with new state
3. Update pending-tasks.md (remove completed, add new)
```

### On Chat End

```
1. Summarize session in work-history.md
2. Update current-status.md
3. List next steps in pending-tasks.md
```

This ensures **ZERO context loss** between chats!

