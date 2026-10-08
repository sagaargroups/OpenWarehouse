# Contributing to OpenWarehouse

Thank you for your interest in contributing to **OpenWarehouse**! Our goal is to maintain the world's highest-quality, most comprehensive open-source warehouse for AI agent materials.

---

## 🚀 How to Add a New Skill or MCP

### 1. Structure Standards

All skills must adhere to standard skill definitions:
- Live inside a named directory (e.g. `my-awesome-skill/`)
- Contain a valid `SKILL.md` with standard YAML frontmatter:
  ```markdown
  ---
  name: my-awesome-skill
  description: Clear description of when and how an agent should trigger this skill.
  ---

  # My Awesome Skill
  ...
  ```

### 2. Adding to OpenWarehouse

1. **Place your asset**:
   - If it's a community skill: Place in `Contributors/Community/skills/my-skill`
   - If it's an MCP server: Place in `Contributors/Community/mcps/my-mcp`
2. **Rebuild projection symlinks**:
   ```bash
   ./warehouse link
   ```
3. **Audit your contribution**:
   ```bash
   ./warehouse audit
   ```
4. **Submit your Pull Request**:
   - Follow semantic commit guidelines: `feat(skill): add my-awesome-skill`

---

## 3-Dimensional Ground-Truth Invariant Rules

OpenWarehouse enforces 3 ground-truth invariants on all commits:
1. **Zero Broken Symlinks**: Every link in `Skills/`, `MCPs/`, `Plugins/` must resolve relatively without dead targets.
2. **No Absolute Paths**: Symlinks must strictly use relative paths (`../../Contributors/...`) so they work across all platforms and inside GitHub web view.
3. **Valid Frontmatter**: Every `SKILL.md` must have valid YAML metadata with non-empty descriptions.
