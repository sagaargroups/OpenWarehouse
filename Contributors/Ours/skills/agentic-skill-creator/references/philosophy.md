# Philosophy of Great Skill Design

> Referenced from `brain/think_tank/` — the strategic thinking layer.

Before writing a single line of SKILL.md, run every skill through these five philosophical filters. Great skills don't just work — they **compound, scale, and embody the duality of execution + vision.**

## Filter 1: The 0 & 1 Duality Check

Every skill must serve **both sides of the duality:**

| Ask This | 0 (Execution) | 1 (Growth) |
|---|---|---|
| Does this skill help the agent **do** something right now? | ✅ Required | — |
| Does this skill help the agent **learn** something for later? | — | ✅ Bonus |
| Can this skill **generate** other skills or patterns? | — | ✅ Ecosystem-tier |

**The best skills are 0 AND 1 simultaneously.** A code-reviewer skill that also logs patterns into `3_learning/` is 10x more valuable than one that just reviews code.

### Action
When designing the workflow, always ask: *"Can this skill leave behind knowledge for the next run?"* If yes, add a final step that logs insights to the appropriate brain folder.

## Filter 2: SHAPE Compliance

Run every skill through the SHAPE framework:

- **S (SOP Driven):** Is the skill a structured SOP, not a vague prompt? Does it have numbered steps, decision trees, and exact tool calls?
- **H (Human in Loop):** Does it have at least one `[APPROVAL_GATE]`? Does the human stay in control?
- **A (Arbitrage):** Does this skill let one person do the work of many? If it saves < 30 minutes per run, question whether it's worth packaging.
- **P (Product ≠ Moat):** Does this skill build something AI can't easily replicate on its own? Skills that encode **domain expertise, business logic, or taste** are the real moat.
- **E (Employable):** Does using this skill make the operator more capable over time, or does it create dependency?

### Action
Add a `## SHAPE Score` section to your internal planning (not in the final SKILL.md) before building:
```
S: [1-5] SOP rigor
H: [1-5] Human control  
A: [1-5] Arbitrage value
P: [1-5] Moat strength
E: [1-5] Skill-building for operator
```
If total < 15, reconsider the skill's design.

## Filter 3: Scale vs Speed

Before building, classify the skill:

| Type | Speed Focus | Scale Focus | Example |
|---|---|---|---|
| **Tactical** | ⚡ Fast, use now | 📏 Small scope | `format-csv-to-json` |
| **Strategic** | ⏳ Setup required | 🌍 Compounds over time | `daily-topic-engine` |
| **Ecosystem** | ⏳ Significant setup | 🌌 Generates more skills | `agentic-skill-creator` (this skill) |

**Design guideline:**
- Tactical skills: Keep SKILL.md under 100 lines. No references needed.
- Strategic skills: Use references/ for domain context. Include learning loops.
- Ecosystem skills: Use references/ + assets/ + scripts/. Include meta-workflows.

## Filter 4: Ecosystem Thinking

Ask: *"Is this skill a product or an ecosystem seed?"*

| Product Skill | Ecosystem Skill |
|---|---|
| Does one thing | Does one thing AND teaches the agent to do related things |
| Static output | Output feeds into other workflows |
| Used by one project | Reusable across projects |
| Dies when the project dies | Lives in the warehouse forever |

### Action
When designing Step 2 (Plan Reusable Contents), always check:
- Can any part of this skill be extracted into a **standalone sub-skill**?
- Does the output format work as **input for another skill**?
- Can this skill be **parameterized** for different domains?

## Filter 5: Micro-Macro Balance

The best skills operate at **both zoom levels:**

- **Micro precision:** Exact tool calls, locked formats, specific error handling
- **Macro awareness:** Understands WHERE this skill fits in the larger project lifecycle

### Action
Add a `## Context Awareness` note in skills that touch multiple brain folders:
```markdown
## Context Awareness
- Before running: Check `4_tasks-and-logs/` for related pending tasks
- After running: Log results to `2_working/` if significant
- If pattern discovered: Extract to `0_warehouse-skills/skills/` as new skill
```

---

## Quick Reference: The Greatness Checklist

Before finalizing any skill, verify:

- [ ] **Duality:** Serves both execution (0) AND growth (1)
- [ ] **SHAPE score:** ≥ 15/25
- [ ] **Scale type:** Classified as tactical / strategic / ecosystem
- [ ] **Ecosystem seed:** Output can feed other workflows
- [ ] **Micro-Macro:** Has precision AND context awareness
- [ ] **Learning loop:** Leaves behind knowledge for future runs
