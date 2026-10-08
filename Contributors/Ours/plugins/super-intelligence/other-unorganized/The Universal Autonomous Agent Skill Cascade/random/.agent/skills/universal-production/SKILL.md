---
name: Universal Production Standards
description: Intelligent, self-healing skill for production-ready, enterprise-grade code with zero user friction. Covers UI, API, architecture, testing, security, and deployment.
version: 2.0.0
---

# Universal Production Standards

> An intelligent, self-healing skill framework for AI agents to produce production-ready, enterprise-grade code with zero user friction.

## 🎯 How to Use This Skill

Tell your AI agent:
```
"Read the skill file at .agent/skills/universal-production/SKILL.md and follow its instructions."
```

The agent will automatically:
1. Detect your framework (or ask)
2. Load appropriate templates
3. Apply production best practices
4. Persist context across sessions

---

## Core Philosophy

1. **Self-Healing**: If user can't provide info → Agent uses expertise to decide
2. **Future-Ready**: Always build with scalability in mind
3. **State Persistent**: Resume from where chat broke
4. **Fail-Safe**: Write to root first, then `mv` to `.agent/` folder
5. **Zero Friction**: Ask minimal questions, infer the rest
6. **Learn By Doing**: Every decision comes with explanation

---

## 🔴 CRITICAL: Knowledge Level Detection (FIRST STEP)

**Before ANY technical question, detect user's knowledge level.**

### Step 1: Ask Once (On First Interaction)

```
Agent: "Quick question to help me assist you better:

How would you describe your coding experience?

1. 🌱 New to coding (Vibe Coder) - I have ideas but no tech knowledge
2. 📚 Learning - I know basics, still learning
3. 💻 Comfortable - I can code, want best practices
4. 🚀 Expert - I know what I want, just help me build

Pick a number:"
```

### Step 2: Store Level

Save to `state/user-profile.json`:
```json
{
  "knowledgeLevel": "beginner",  // beginner | learning | intermediate | expert
  "detectedAt": "2024-02-01",
  "preferences": {}
}
```

### Step 3: Adjust Behavior Based on Level

| Level | Questions to Ask | Decisions to Make | Explanations |
|-------|------------------|-------------------|--------------|
| **Vibe Coder** | Only project idea | ALL technical | Simple, why it matters |
| **Learning** | Project + preferences | Most technical | Detailed, educational |
| **Comfortable** | Detailed preferences | Some suggestions | Brief, focus on why |
| **Expert** | Minimal | User decides | Only when asked |

---

## 🎓 Vibe Coder Flow (For Beginners)

**When level = "beginner", NEVER ask technical questions.**

### Example Flow

```
User: "I want to build an ecommerce website"

Agent: "Great idea! Let me set everything up for you.

For your online store, I'm choosing:

✅ Next.js (the engine)
   → Makes your store fast and Google-friendly
   
✅ Tailwind CSS (the style)
   → Makes it look professional without complex code
   
✅ PostgreSQL (the storage)
   → Safely stores your products and orders
   
✅ Stripe (the payments)
   → Industry standard, accepts all cards

I'll create your store with:
- Product catalog
- Shopping cart
- Checkout with payments
- Order management

Want me to start? I'll explain each step as we build! 🚀"
```

### What NOT To Ask Beginners

❌ "Which framework do you prefer?"
❌ "Do you want TypeScript or JavaScript?"
❌ "Which database - PostgreSQL or MongoDB?"
❌ "How do you want to handle authentication?"

### What TO Do For Beginners

✅ Make the best decision
✅ Explain WHAT you chose (simple terms)
✅ Explain WHY you chose it (benefit to them)
✅ Proceed without waiting for technical approval

---

## 📖 Teaching Mode (Learn By Doing)

**Every significant action should teach something.**

### Template for Explanations

```markdown
## What We're Doing: [Action Name]

**In Simple Terms:** [1-sentence explanation]

**Why This Matters:** [Benefit to user]

**What You'll See:** [Expected result]

**Fun Fact:** [Optional - interesting detail]
```

### Example: Creating API Route

```
## What We're Doing: Creating Product API

**In Simple Terms:** We're making a way for your website 
to ask the database for products.

**Why This Matters:** Without this, your product page 
would be empty - this fetches and displays your items.

**What You'll See:** When you visit /api/products, 
you'll see your product data.

**Fun Fact:** This same pattern powers Netflix's 
movie catalog!
```

---

## 🛡️ Workflow Rules (Fail-Safe)

### Rule 1: Always Save Progress
After EVERY significant action:
```
1. Log to work-history.md
2. Update current-status.md
3. Update pending-tasks.md
```

### Rule 2: Safe File Operations
```bash
# Write to temp first (safe)
write /tmp/file.tsx

# Then move (atomic, can't corrupt)
mv /tmp/file.tsx target/file.tsx
```

### Rule 3: Never Lose User Work
- Before overwriting: Create backup
- Before deleting: Move to `.trash/` first
- Before big changes: Snapshot state

### Rule 4: Graceful Degradation
If something fails:
1. Log the error
2. Explain to user (simple terms)
3. Offer alternatives
4. Never leave project in broken state

### Rule 5: Checkpoint System
Every 5 significant changes:
```
1. Create checkpoint in state/
2. Log checkpoint ID
3. Allow rollback if needed
```

---

## 🔴 CRITICAL: First Run - Framework Detection

On first run, agent MUST detect or ask for framework:

### Auto-Detection
```
1. Check package.json for:
   - "next" → Next.js
   - "vite" + "react" → React + Vite
   - "vue" → Vue 3
   - "express" → Express
   - "svelte" → Svelte

2. Load matching template from:
   framework-templates/[framework]/config.yaml

3. Update preferences/project-config.yaml
```

### If No package.json
```
Agent: "What framework would you like to use?

1. Next.js (recommended for full-stack)
2. React + Vite (frontend only)
3. Vue 3
4. Express (API only)
5. Start from scratch (I'll help you choose)

Pick a number or say 'I don't know':"
```

---

## Smart Defaults

When user doesn't know, pick best option:

| Question | Smart Default | Reason |
|----------|---------------|--------|
| Framework | Next.js 15 | Full-stack, best DX |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS | Rapid development |
| Database | PostgreSQL + Drizzle | Reliable, type-safe |
| Deployment | Vercel | Zero-config |
| Package Manager | pnpm | Fastest |
| Testing | Vitest | Fast, ESM native |

---

## UI/UX Standards

### Button States (ALWAYS)
- **Loading**: Spinner inside + "Processing..." text + disabled
- **Success**: Green check (optional, 2s)
- **Error**: Red state with retry option

```tsx
<Button disabled={loading}>
  {loading ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Processing...
    </>
  ) : 'Submit'}
</Button>
```

### Dark/Light Mode
- Default to system preference
- Never use pure #000 or #FFF
- Dark: #121212, Light: #FAFAFA

### Error Handling
- Red border on invalid inputs
- Error message below field (not alert())
- Toast for async failures
- Error boundary for crashes

---

## API Standards

### Response Format (ALWAYS)
```typescript
type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
}
```

### HTTP Status Codes
| Code | When |
|------|------|
| 200 | GET/PUT success |
| 201 | POST success |
| 400 | Validation failed |
| 401 | Not authenticated |
| 403 | No permission |
| 404 | Not found |
| 500 | Server error |

### Authentication
- Use httpOnly cookies (NOT localStorage)
- Include CSRF protection
- Validate on every request

---

## Architecture Rules

| Scale | Architecture |
|-------|--------------|
| 1-10 features | Simple structure |
| 10-30 features | Modular Monolith |
| 30+ features | Microservices |

---

## Testing Rules

### When to Create Tests
| Trigger | Action |
|---------|--------|
| New API endpoint | Create API test |
| New business logic | Create unit test |
| Bug fix | Create regression test |

### Coverage Target
- New code: > 70%
- Critical paths: > 90%

---

## Security Rules

| Rule | Implementation |
|------|----------------|
| Secrets | Environment variables only |
| Inputs | Sanitize ALL user inputs |
| SQL | Parameterized queries (ORM) |
| CSRF | Enable on all forms |
| Headers | Set CSP, X-Frame-Options |

---

## 🔴 CRITICAL: Context Persistence

**Agent MUST maintain context across chats.**

### On Every Chat Start
```
1. Read .agent/logs/current-status.md
2. Read .agent/logs/pending-tasks.md
3. Inform user: "I see you were working on X. Continue?"
```

### After Every Significant Action
```
1. Append to .agent/logs/work-history.md
2. Update .agent/logs/pending-tasks.md
```

### At End of Session
```
1. Update .agent/logs/current-status.md
2. Save in-progress work to pending-tasks.md
```

---

## 🔴 CRITICAL: Skill Discovery (DYNAMIC)

**When user gives a job, search registry.md for matching skills.**

### Flow
```
1. User: "Build me a portfolio"
2. Agent: Read registry.md
3. Agent: Search projectTypes[].keywords for match
4. Agent: Found portfolio → Load project-types/portfolio.md
5. Agent: Check required materials
6. Agent: Ask for missing or generate prompts
```

### Registry Location
All available capabilities are in: `registry.md`

Agent should NEVER hardcode lists - always read from registry!

---

## 🔴 CRITICAL: Project Materials

**If user missing materials, generate prompts.**

### Flow
```
1. Load project type skill
2. Check required materials list
3. Ask user what they have
4. For missing → Check registry.md for material prompts
5. Provide prompts from material-prompts/
```

---

## 🔴 CRITICAL: Framework Templates (DYNAMIC)

**Use framework-specific templates from registry.**

### Flow
```
1. Read registry.md → frameworks[]
2. Filter: status = "available"
3. Match user's project needs to framework.bestFor[]
4. Load template from framework.folder
5. If status = "planned" → Tell user ETA
```

Agent reads available frameworks from registry - not hardcoded!

Each contains:
- `config.yaml` - Framework settings
- `component.template.*` - Component template
- `api-route.template.*` - API template (if applicable)

---

## File Structure

```
.agent/
├── logs/
│   ├── work-history.md
│   ├── current-status.md
│   └── pending-tasks.md
└── skills/universal-production/
    ├── SKILL.md (this file)
    ├── preferences/
    ├── state/
    ├── checklists/
    ├── project-types/
    ├── material-prompts/
    └── framework-templates/
```

---

## Agent Behavior Summary

### On New Chat
1. Check `.agent/logs/` → Offer to continue
2. Detect framework → Load templates
3. Apply production standards
4. Log work for persistence

### On Task Completion
1. Update work-history.md
2. Update current-status.md
3. Update pending-tasks.md

This ensures **ZERO context loss** between chats!
