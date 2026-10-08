# 🏭 OpenWarehouse

<div align="center">

### The Universal Open-Source Warehouse for AI Agents, Skills, MCP Servers & Plugins

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills Tracked](https://img.shields.io/badge/Skills-385%2B-brightgreen.svg)](#-skills-catalog)
[![Plugins Tracked](https://img.shields.io/badge/Plugins-45%2B-purple.svg)](#-plugins-catalog)
[![MCP Servers](https://img.shields.io/badge/MCP%20Servers-7%2B-orange.svg)](#-mcp-servers-catalog)
[![Auto-Sync](https://img.shields.io/badge/Auto--Sync-Daily%20Pulse-blueviolet.svg)](#-one-command-sync-engine)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](CONTRIBUTING.md)

**Stop letting AI agents guess your architecture. Power them with the largest curated warehouse of battle-tested agent skills, MCP servers, and enterprise workflows.**

[Quick Start](#-quick-start) · [How It Works](#-how-it-works) · [Directory Architecture](#-directory-architecture) · [One-Command Sync](#-one-command-sync-engine) · [Registry](#-master-registry) · [Contributing](#-contributing)

</div>

---

## 🚀 What is OpenWarehouse?

**OpenWarehouse** is the canonical, open-source repository that aggregates, indexes, tests, and organizes AI materials across all major ecosystems (**Anthropic**, **Google DeepMind**, **OpenAI**, and the **Open-Source Community**).

Instead of hunting across dozens of scattered repositories or copy-pasting markdown prompts into every project:
- **One Master Repository (`Contributors/`)**: Ground-truth storage tracked via Git Submodules.
- **Instant Category Views (`Skills/`, `MCPs/`, `Plugins/`)**: Native **relative symlinks** organized by contributor with zero disk duplication and zero broken links.
- **One-Command Real-Time Sync (`./warehouse sync`)**: Automatically pulls upstream releases, generates multi-level changelogs, refreshes symlinks, and commits.
- **3D Ground-Truth Verification**: Rigorous assertions ensure 100% link integrity, verified frontmatters, and zero hallucinated drift.

---

## ⚡ Quick Start

### 1. Clone with all submodules
```bash
git clone --recurse-submodules https://github.com/sagaargroups/OpenWarehouse.git
cd OpenWarehouse
```

### 2. Verify warehouse health & inventory
```bash
./warehouse status
```

### 3. Inject into your IDE / Coding Agent

#### Option A: Antigravity / Gemini CLI
Add OpenWarehouse skills directly by path or symlink to your project's `.agents/skills/`:
```bash
ln -s /path/to/OpenWarehouse/Skills/Ours/org-level-deployment-cicd .agents/skills/
```

#### Option B: Cursor / Claude Code / Windsurf
Add any desired category or individual skill directly to your workspace rules or `.cursorrules`:
```json
{
  "skills": [
    "OpenWarehouse/Skills/Anthropic/*",
    "OpenWarehouse/Skills/Ours/*"
  ]
}
```

---

## 🏛️ Directory Architecture

```
OpenWarehouse/
├── Contributors/                           # 🌟 MASTER WAREHOUSE (Single Source of Truth)
│   ├── Ours/                               # Proprietary & custom-built skills, plugins & workflows
│   ├── Anthropic/                          # Official Anthropic knowledge-work-plugins (Submodule)
│   ├── Community/                          # Official Model Context Protocol servers (Submodule)
│   ├── Google/                             # Google DeepMind & Antigravity agent tooling
│   └── OpenAI/                             # OpenAI Agent SDKs & Swarm tools
│
├── Skills/                                 # 🔗 RELATIVE SYMLINKS: Category view of 380+ Skills
│   ├── Ours/                               # → ../../Contributors/Ours/skills/*
│   ├── Anthropic/                          # → ../../Contributors/Anthropic/...
│   └── Community/                          # → ../../Contributors/Community/...
│
├── MCPs/                                   # 🔗 RELATIVE SYMLINKS: Curated MCP Servers
├── Plugins/                                # 🔗 RELATIVE SYMLINKS: Curated Multi-Skill Bundles
├── Workflows/                              # 🔗 RELATIVE SYMLINKS: Multi-step orchestrations
├── APIs/                                   # 🔗 RELATIVE SYMLINKS: Connectors & Tool specs
│
├── warehouse.manifest.json                 # Declarative registry & 3D task specs
├── warehouse                               # Root CLI executable (./warehouse <cmd>)
├── scripts/
│   └── warehouse.py                        # Core 3D Ground-Truth Engine
│
├── REGISTRY.md                             # 📋 Searchable human-readable catalog
├── registry.json                           # 🤖 Machine-readable catalog for autonomous agents
└── CHANGELOG.md                            # 📝 Consolidated master release log
```

---

## 🔄 One-Command Sync Engine (`./warehouse sync`)

Keep your entire warehouse 100% updated with upstream open-source releases with one simple command:

```bash
./warehouse sync
```

### What happens under the hood:
1. **Pull Upstreams**: Updates all submodules in `Contributors/` from their remote git origins.
2. **Hierarchical Changelogs**: Calculates commit diffs and updates localized `Contributors/<Org>/CHANGELOG.md` files as well as root `CHANGELOG.md`.
3. **Symlink Healing**: Scans all assets, creates missing category symlinks, and prunes dead links.
4. **Registry Regeneration**: Updates `REGISTRY.md` and `registry.json` with fresh counts and metadata.
5. **Git Commit & Push**: Prepares clean semantic commit and pushes to your remote.

---

## 🤖 Autonomous Agent Fleet

OpenWarehouse includes 3 background automations to make the ecosystem self-sustaining:

| Agent / Sidecar | Cadence | Mission |
|---|---|---|
| **`openwarehouse-sync`** | Daily @ 4:00 AM | Pulls upstream submodules, heals symlinks, updates changelogs, commits and pushes. |
| **`openwarehouse-scout`** | Weekly @ Mon 9:00 AM | Scours GitHub and Hacker News for trending agent tools, MCPs, and skills. |
| **`openwarehouse-growth`** | Weekly @ Wed 10:00 AM | Updates SEO topics, README showcase, and drafts semantic releases. |

---

## 📋 Master Registry

Explore the complete inventory in [REGISTRY.md](REGISTRY.md).

### Ecosystem Breakdown:
- **Skills (385+)**: Brand research, code review, sales prospecting, data analysis, WCAG a11y, Nextflow bio-research, SOX audit, and more.
- **Plugins (45+)**: Full cross-functional bundles covering Engineering, Design, Finance, Legal, HR, Marketing, Operations, and Customer Support.
- **MCP Servers (7+)**: Memory, Filesystem, Git, SequentialThinking, Fetch, Time, Everything.

---

## 🤝 Contributing

We welcome contributions from the community!
1. Fork the repository.
2. Add your skill, MCP server, or plugin under `Contributors/Community/<name>` or submit an upstream PR.
3. Run `./warehouse link` to auto-generate relative symlinks.
4. Run `./warehouse audit` to verify ground-truth formatting.
5. Submit a Pull Request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for full details.

---

## 📄 License

OpenWarehouse is open-source software licensed under the [MIT License](LICENSE). Third-party submodules under `Contributors/` preserve their original open-source licenses.
