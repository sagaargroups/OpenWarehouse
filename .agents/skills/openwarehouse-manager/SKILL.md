---
name: openwarehouse-manager
description: Autonomous master orchestrator for OpenWarehouse. Manages upstream synchronization, relative category symlinks, multi-level changelogs, repo scouting, and 3D ground-truth validation gates. Trigger when the user wants to sync upstreams, add new agent tools/repos, audit skills, or check warehouse health.
---

# 🏭 OpenWarehouse Manager

The **OpenWarehouse Manager** is an autonomous agent system built to manage and expand the OpenWarehouse ecosystem.

## 🎯 Core Capabilities

1. **One-Command Upstream Synchronization (`./warehouse sync`)**:
   - Pulls upstream submodules (`Anthropic`, `ModelContextProtocol`, `Google`, `OpenAI`).
   - Generates hierarchical multi-level changelogs.
   - Refreshes and heals relative category projection symlinks.
   - Regenerates `REGISTRY.md` and `registry.json`.
   - Prepares clean semantic Git commits.

2. **3-Dimensional Ground-Truth Validation**:
   - Asserts zero broken symlinks across all projection views (`Skills/`, `MCPs/`, `Plugins/`, etc.).
   - Asserts all symlinks use strictly relative paths (`../../Contributors/...`).
   - Validates `SKILL.md` frontmatter standards.

3. **Repository Scouting & Attachment (`./warehouse add`)**:
   - Evaluates prospective open-source repos for licenses (MIT, Apache 2.0) and structure.
   - Adds approved repositories as submodules under `Contributors/<Org>/<repo>`.
   - Links new skills, MCPs, and plugins automatically into category folders.

---

## 🛠️ Execution Playbooks

### Playbook 1: Daily Sync Pulse
```bash
./warehouse sync
```
If dry-run is needed:
```bash
./warehouse sync --dry-run
```

### Playbook 2: Check Ecosystem Health & Status
```bash
./warehouse status
```

### Playbook 3: Rebuild or Repair Relative Symlinks
```bash
./warehouse link
```

### Playbook 4: Add New Upstream Submodule
```bash
./warehouse add https://github.com/organization/new-agent-repo.git --contributor Community
```
