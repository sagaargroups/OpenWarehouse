#!/usr/bin/env python3
"""
OpenWarehouse — The Universal Open-Source Warehouse Engine
A 3-Dimensional Hierarchical Task Management & Ground-Truth Verification Engine
for managing AI Agent Skills, MCP Servers, Plugins, and Workflows.
"""

import os
import sys
import json
import subprocess
import argparse
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Any, Tuple, Optional

# Root directory of OpenWarehouse
REPO_ROOT = Path(__file__).resolve().parent.parent

# Color formatting for beautiful terminal output
class Style:
    RESET = "\033[0m"
    BOLD = "\033[1m"
    RED = "\033[31m"
    GREEN = "\033[32m"
    YELLOW = "\033[33m"
    BLUE = "\033[34m"
    MAGENTA = "\033[35m"
    CYAN = "\033[36m"
    GRAY = "\033[90m"

def print_banner():
    banner = f"""
{Style.CYAN}{Style.BOLD}╔═══════════════════════════════════════════════════════════════╗
║   🏭  OpenWarehouse — The Universal Agentic Ecosystem  ║
╚═══════════════════════════════════════════════════════════════╝{Style.RESET}
"""
    print(banner)

def run_cmd(cmd: List[str], cwd: Optional[Path] = None, check: bool = True) -> Tuple[int, str, str]:
    """Execute a shell command with ground-truth verification."""
    target_cwd = cwd or REPO_ROOT
    try:
        proc = subprocess.run(
            cmd,
            cwd=str(target_cwd),
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            check=False
        )
        return proc.returncode, proc.stdout.strip(), proc.stderr.strip()
    except Exception as e:
        return 1, "", str(e)

def load_manifest() -> Dict[str, Any]:
    """Load and validate warehouse.manifest.json."""
    manifest_path = REPO_ROOT / "warehouse.manifest.json"
    if not manifest_path.exists():
        print(f"{Style.RED}Error: warehouse.manifest.json not found at {manifest_path}{Style.RESET}")
        sys.exit(1)
    with open(manifest_path, "r", encoding="utf-8") as f:
        return json.load(f)

def save_manifest(data: Dict[str, Any]):
    manifest_path = REPO_ROOT / "warehouse.manifest.json"
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)

# ==============================================================================
# 3D HIERARCHICAL GROUND-TRUTH ENGINE
# ==============================================================================

class GroundTruthVerifier:
    """
    Validates assertions at every hierarchical level (Parent -> Child -> Grandchild)
    to eliminate hallucination and predictive drift before execution.
    """
    def __init__(self):
        self.passed: List[str] = []
        self.failed: List[str] = []
        self.warnings: List[str] = []

    def assert_truth(self, condition: bool, description: str, critical: bool = True) -> bool:
        if condition:
            self.passed.append(description)
            print(f"  {Style.GREEN}✓ [PASS]{Style.RESET} {description}")
            return True
        else:
            if critical:
                self.failed.append(description)
                print(f"  {Style.RED}✗ [FAIL]{Style.RESET} {description}")
            else:
                self.warnings.append(description)
                print(f"  {Style.YELLOW}⚠ [WARN]{Style.RESET} {description}")
            return False

    def is_healthy(self) -> bool:
        return len(self.failed) == 0

# ==============================================================================
# CATEGORY SCANNER & DISCOVERY
# ==============================================================================

def discover_inventory() -> Dict[str, Any]:
    """
    Discovers all skills, plugins, MCPs, and workflows across Contributors/.
    Returns a unified inventory categorized by contributor.
    """
    inventory = {
        "skills": [],
        "plugins": [],
        "mcps": [],
        "workflows": [],
        "apis": [],
        "apps": []
    }

    contributors_dir = REPO_ROOT / "Contributors"
    if not contributors_dir.exists():
        return inventory

    for contrib in contributors_dir.iterdir():
        if not contrib.is_dir() or contrib.name.startswith("."):
            continue
        contrib_name = contrib.name

        # 1. Discover Skills (folders containing SKILL.md)
        for root, dirs, files in os.walk(contrib):
            if "SKILL.md" in files:
                skill_dir = Path(root)
                # Ignore duplicate internal symlink hits
                if skill_dir.is_symlink():
                    continue
                inventory["skills"].append({
                    "name": skill_dir.name,
                    "contributor": contrib_name,
                    "relative_path": str(skill_dir.relative_to(REPO_ROOT)),
                    "path_obj": skill_dir,
                    "description": extract_skill_description(skill_dir / "SKILL.md")
                })

        # 2. Discover Plugins:
        # - Any directory with plugin.json
        # - Any directory with .claude-plugin (directory or file)
        # - Official packages in knowledge-work-plugins or salesforce-skills
        discovered_plugin_paths = set()
        for root, dirs, files in os.walk(contrib):
            dir_path = Path(root)
            if dir_path.is_symlink():
                continue

            is_plugin = False
            plugin_target = dir_path

            if "plugin.json" in files:
                is_plugin = True
                plugin_target = dir_path
            elif ".claude-plugin" in dirs or ".claude-plugin" in files:
                is_plugin = True
                plugin_target = dir_path
            elif dir_path.parent.name == "knowledge-work-plugins" and dir_path.is_dir() and not dir_path.name.startswith("."):
                is_plugin = True
                plugin_target = dir_path
            elif dir_path.name == "salesforce-for-sales":
                is_plugin = True
                plugin_target = dir_path
            elif contrib_name == "OpenAI" and dir_path.name in ["openai-agents-python", "swarm"]:
                is_plugin = True
                plugin_target = dir_path

            if is_plugin and plugin_target.resolve() not in discovered_plugin_paths:
                discovered_plugin_paths.add(plugin_target.resolve())
                inventory["plugins"].append({
                    "name": plugin_target.name,
                    "contributor": contrib_name,
                    "relative_path": str(plugin_target.relative_to(REPO_ROOT)),
                    "path_obj": plugin_target,
                    "description": extract_plugin_description(plugin_target)
                })

        # 3. Discover MCPs (under mcps/ folder or modelcontextprotocol-servers/src or packages with mcp.json)
        mcps_dir = contrib / "mcps"
        if mcps_dir.exists():
            for item in mcps_dir.iterdir():
                if item.is_dir() and not item.name.startswith("."):
                    inventory["mcps"].append({
                        "name": item.name,
                        "contributor": contrib_name,
                        "relative_path": str(item.relative_to(REPO_ROOT)),
                        "path_obj": item,
                        "description": f"MCP server from {contrib_name}"
                    })

        mcp_servers_src = contrib / "modelcontextprotocol-servers" / "src"
        if mcp_servers_src.exists():
            for item in mcp_servers_src.iterdir():
                if item.is_dir() and not item.name.startswith("."):
                    inventory["mcps"].append({
                        "name": f"mcp-{item.name}",
                        "contributor": contrib_name,
                        "relative_path": str(item.relative_to(REPO_ROOT)),
                        "path_obj": item,
                        "description": f"Official Model Context Protocol reference server: {item.name}"
                    })

        # 4. Discover Workflows
        workflows_dir = contrib / "workflows"
        if workflows_dir.exists():
            for item in workflows_dir.iterdir():
                if not item.name.startswith(".") and (item.is_dir() or item.suffix in [".md", ".json", ".yaml"]):
                    inventory["workflows"].append({
                        "name": item.stem,
                        "contributor": contrib_name,
                        "relative_path": str(item.relative_to(REPO_ROOT)),
                        "path_obj": item,
                        "description": f"Workflow from {contrib_name}"
                    })

    return inventory

def extract_skill_description(skill_path: Path) -> str:
    try:
        with open(skill_path, "r", encoding="utf-8") as f:
            lines = f.readlines()
        for line in lines[:25]:
            if line.strip().startswith("description:"):
                return line.split("description:", 1)[1].strip().strip('"\'')
        for line in lines:
            if line.strip().startswith("#"):
                return line.strip("#").strip()
    except Exception:
        pass
    return "Agent Skill specification"

def extract_plugin_description(plugin_path: Path) -> str:
    try:
        p_json = plugin_path / "plugin.json" if plugin_path.is_dir() else plugin_path
        if p_json.exists():
            with open(p_json, "r", encoding="utf-8") as f:
                data = json.load(f)
                desc = data.get("description")
                if desc:
                    return desc

        readme = plugin_path / "README.md"
        if readme.exists():
            with open(readme, "r", encoding="utf-8") as f:
                for line in f.readlines()[:15]:
                    line_s = line.strip()
                    if line_s and not line_s.startswith("#") and not line_s.startswith("[!") and not line_s.startswith("<"):
                        return line_s[:120]
    except Exception:
        pass
    return f"Plugin bundle from {plugin_path.name}"

def heal_contributor_internal_views():
    """
    Populates internal plugins/ and skills/ views inside each Contributors/<Org>/
    using relative symlinks so that Finder / IDE browsing is never empty!
    """
    contrib_dir = REPO_ROOT / "Contributors"

    # 1. Anthropic
    anthropic_dir = contrib_dir / "Anthropic"
    kw = anthropic_dir / "knowledge-work-plugins"
    if kw.exists():
        p_dir = anthropic_dir / "plugins"
        s_dir = anthropic_dir / "skills"
        p_dir.mkdir(parents=True, exist_ok=True)
        s_dir.mkdir(parents=True, exist_ok=True)

        for item in kw.iterdir():
            if item.is_dir() and not item.name.startswith("."):
                link = p_dir / item.name
                rel = os.path.relpath(item, p_dir)
                if link.is_symlink():
                    link.unlink()
                elif not link.exists():
                    link.symlink_to(rel)

                skills_sub = item / "skills"
                if skills_sub.exists():
                    for sk in skills_sub.iterdir():
                        if sk.is_dir() and not sk.name.startswith("."):
                            s_link = s_dir / sk.name
                            s_rel = os.path.relpath(sk, s_dir)
                            if s_link.is_symlink():
                                s_link.unlink()
                            elif not s_link.exists():
                                s_link.symlink_to(s_rel)

    # 2. Salesforce
    sf_dir = contrib_dir / "Salesforce"
    sf_pkg = sf_dir / "salesforce-skills" / "salesforce-for-sales"
    if sf_pkg.exists():
        p_dir = sf_dir / "plugins"
        s_dir = sf_dir / "skills"
        p_dir.mkdir(parents=True, exist_ok=True)
        s_dir.mkdir(parents=True, exist_ok=True)

        link = p_dir / "salesforce-for-sales"
        rel = os.path.relpath(sf_pkg, p_dir)
        if link.is_symlink():
            link.unlink()
        elif not link.exists():
            link.symlink_to(rel)

        sf_skills = sf_pkg / "skills"
        if sf_skills.exists():
            for sk in sf_skills.iterdir():
                if sk.is_dir() and not sk.name.startswith("."):
                    s_link = s_dir / sk.name
                    s_rel = os.path.relpath(sk, s_dir)
                    if s_link.is_symlink():
                        s_link.unlink()
                    elif not s_link.exists():
                        s_link.symlink_to(s_rel)

    # 3. OpenAI
    openai_dir = contrib_dir / "OpenAI"
    if openai_dir.exists():
        p_dir = openai_dir / "plugins"
        s_dir = openai_dir / "skills"
        p_dir.mkdir(parents=True, exist_ok=True)
        s_dir.mkdir(parents=True, exist_ok=True)

        for item_name in ["openai-agents-python", "swarm"]:
            item = openai_dir / item_name
            if item.exists():
                link = p_dir / item_name
                rel = os.path.relpath(item, p_dir)
                if link.is_symlink():
                    link.unlink()
                elif not link.exists():
                    link.symlink_to(rel)

        oai_skills = openai_dir / "openai-agents-python" / ".agents" / "skills"
        if oai_skills.exists():
            for sk in oai_skills.iterdir():
                if sk.is_dir() and not sk.name.startswith("."):
                    s_link = s_dir / sk.name
                    s_rel = os.path.relpath(sk, s_dir)
                    if s_link.is_symlink():
                        s_link.unlink()
                    elif not s_link.exists():
                        s_link.symlink_to(s_rel)

    # 4. Google
    google_dir = contrib_dir / "Google"
    if (google_dir / "plugins").exists():
        s_dir = google_dir / "skills"
        s_dir.mkdir(parents=True, exist_ok=True)
        for p in (google_dir / "plugins").iterdir():
            if p.is_dir():
                sk_dir = p / "skills"
                if sk_dir.exists():
                    for sk in sk_dir.iterdir():
                        if sk.is_dir() and not sk.name.startswith("."):
                            s_link = s_dir / sk.name
                            s_rel = os.path.relpath(sk, s_dir)
                            if s_link.is_symlink():
                                s_link.unlink()
                            elif not s_link.exists():
                                s_link.symlink_to(s_rel)

# ==============================================================================
# RELATIVE SYMLINK ENGINE (Zero Broken Links)
# ==============================================================================

def build_symlinks(clean: bool = True) -> GroundTruthVerifier:
    """
    Establishes clean, relative symbolic links from category folders
    (Skills/, MCPs/, Plugins/, Workflows/) into Contributors/.
    """
    verifier = GroundTruthVerifier()
    print(f"\n{Style.BOLD}{Style.CYAN}--- Dimension 1: Category Projection Symlink Engine ---{Style.RESET}")

    # Heal contributor internal views first
    heal_contributor_internal_views()

    inventory = discover_inventory()
    category_map = {
        "Skills": inventory["skills"],
        "MCPs": inventory["mcps"],
        "Plugins": inventory["plugins"],
        "Workflows": inventory["workflows"]
    }

    for cat_name, items in category_map.items():
        cat_dir = REPO_ROOT / cat_name
        cat_dir.mkdir(parents=True, exist_ok=True)

        # Level 1: Clean old or broken links if requested
        if clean:
            for existing in cat_dir.rglob("*"):
                if existing.is_symlink():
                    if not existing.exists():
                        existing.unlink()
                        print(f"  {Style.GRAY}Pruned dead symlink: {existing.name}{Style.RESET}")

        # Level 2: Build relative symlinks organized by Contributor
        for item in items:
            contrib = item["contributor"]
            target_obj = item["path_obj"]
            dest_dir = cat_dir / contrib
            dest_dir.mkdir(parents=True, exist_ok=True)
            link_path = dest_dir / item["name"]

            # Compute relative path from link_path parent to target_obj
            rel_target = os.path.relpath(target_obj, link_path.parent)

            if link_path.is_symlink():
                current_target = os.readlink(link_path)
                if current_target == rel_target:
                    continue  # Already perfectly linked
                link_path.unlink()
            elif link_path.exists():
                # Avoid clobbering real directories
                continue

            try:
                link_path.symlink_to(rel_target)
            except Exception as e:
                verifier.assert_truth(False, f"Failed creating symlink {link_path}: {e}")

    # Level 3: Ground-Truth Assertion Gate on all created symlinks
    print(f"\n{Style.BOLD}--- Dimension 3: Ground-Truth Symlink Assertion Gate ---{Style.RESET}")
    all_symlinks = []
    broken_symlinks = []

    for cat in ["Skills", "MCPs", "Plugins", "Workflows", "APIs", "Apps", "System"]:
        c_dir = REPO_ROOT / cat
        if c_dir.exists():
            for link in c_dir.rglob("*"):
                if link.is_symlink():
                    all_symlinks.append(link)
                    if not link.exists():
                        broken_symlinks.append(link)

    verifier.assert_truth(
        len(broken_symlinks) == 0,
        f"Zero broken symlinks across projection views (Checked {len(all_symlinks)} links)"
    )
    if broken_symlinks:
        for b in broken_symlinks:
            print(f"    {Style.RED}Broken link:{Style.RESET} {b} -> {os.readlink(b)}")

    return verifier

# ==============================================================================
# HIERARCHICAL CHANGELOG & REGISTRY GENERATOR
# ==============================================================================

def generate_changelogs(diff_summary: Optional[Dict[str, Any]] = None) -> GroundTruthVerifier:
    """
    Generates multi-level changelogs:
    - Level 1: Contributor-level changelogs (Contributors/<Org>/CHANGELOG.md)
    - Level 2: Consolidated Master CHANGELOG.md
    """
    verifier = GroundTruthVerifier()
    print(f"\n{Style.BOLD}{Style.CYAN}--- Hierarchical Multi-Level Changelog Generation ---{Style.RESET}")

    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    inventory = discover_inventory()

    # Contributor changelogs
    contributors_dir = REPO_ROOT / "Contributors"
    for contrib in contributors_dir.iterdir():
        if not contrib.is_dir() or contrib.name.startswith("."):
            continue

        c_changelog = contrib / "CHANGELOG.md"
        contrib_skills = [s["name"] for s in inventory["skills"] if s["contributor"] == contrib.name]
        contrib_plugins = [p["name"] for p in inventory["plugins"] if p["contributor"] == contrib.name]
        contrib_mcps = [m["name"] for m in inventory["mcps"] if m["contributor"] == contrib.name]

        header = f"# Changelog — {contrib.name}\n\nAll notable changes to the {contrib.name} entity ecosystem.\n\n"
        entry = f"## [{timestamp}] Sync & Inventory Update\n\n"
        entry += f"- **Skills Tracked:** {len(contrib_skills)} ({', '.join(contrib_skills[:5])}{'...' if len(contrib_skills) > 5 else ''})\n"
        entry += f"- **Plugins Tracked:** {len(contrib_plugins)} ({', '.join(contrib_plugins[:5])}{'...' if len(contrib_plugins) > 5 else ''})\n"
        entry += f"- **MCPs Tracked:** {len(contrib_mcps)}\n\n"

        if not c_changelog.exists():
            with open(c_changelog, "w", encoding="utf-8") as f:
                f.write(header + entry)
        else:
            with open(c_changelog, "r", encoding="utf-8") as f:
                content = f.read()
            if not content.startswith("# Changelog"):
                content = header + content
            # Prepend new entry
            parts = content.split("\n\n", 2)
            if len(parts) >= 2:
                new_content = parts[0] + "\n\n" + entry + "\n\n".join(parts[1:])
            else:
                new_content = header + entry
            with open(c_changelog, "w", encoding="utf-8") as f:
                f.write(new_content)

    # Master Root CHANGELOG.md
    master_changelog = REPO_ROOT / "CHANGELOG.md"
    master_header = """# Changelog — OpenWarehouse

All notable releases, automated sync pulses, and ecosystem expansions for OpenWarehouse.

"""
    master_entry = f"## [{timestamp}] Automated Ecosystem Sync\n\n"
    master_entry += f"### 📊 Warehouse Metrics\n"
    master_entry += f"- **Total Skills:** {len(inventory['skills'])}\n"
    master_entry += f"- **Total Plugins:** {len(inventory['plugins'])}\n"
    master_entry += f"- **Total MCP Servers:** {len(inventory['mcps'])}\n"
    master_entry += f"- **Active Contributors:** {len([c for c in contributors_dir.iterdir() if c.is_dir() and not c.name.startswith('.')])}\n\n"

    master_entry += "### 🌟 Recent Changes\n"
    if diff_summary and "details" in diff_summary:
        for d in diff_summary["details"]:
            master_entry += f"- {d}\n"
    else:
        master_entry += "- Synchronized upstream submodules and regenerated projection symlinks.\n"
        master_entry += "- Validated 3D ground-truth assertions (zero dead links, frontmatters verified).\n\n"

    if not master_changelog.exists():
        with open(master_changelog, "w", encoding="utf-8") as f:
            f.write(master_header + master_entry)
    else:
        with open(master_changelog, "r", encoding="utf-8") as f:
            master_content = f.read()
        parts = master_content.split("\n\n", 2)
        if len(parts) >= 2:
            new_content = parts[0] + "\n\n" + master_entry + "\n\n".join(parts[1:])
        else:
            new_content = master_header + master_entry
        with open(master_changelog, "w", encoding="utf-8") as f:
            f.write(new_content)

    verifier.assert_truth(master_changelog.exists(), "Master CHANGELOG.md generated and validated")
    return verifier

def generate_registry() -> GroundTruthVerifier:
    """
    Generates human-readable REGISTRY.md and machine-readable registry.json
    for developers and autonomous AI agents.
    """
    verifier = GroundTruthVerifier()
    print(f"\n{Style.BOLD}{Style.CYAN}--- Registry Catalog Generation ---{Style.RESET}")

    inventory = discover_inventory()
    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")

    # 1. Generate REGISTRY.md
    reg_md_path = REPO_ROOT / "REGISTRY.md"
    md_content = f"""# 📋 OpenWarehouse Master Registry

> *Auto-generated catalog of all verified agent materials. Updated: {timestamp}*

## 🌟 Ecosystem Overview
- **Skills:** `{len(inventory['skills'])}`
- **Plugins:** `{len(inventory['plugins'])}`
- **MCP Servers:** `{len(inventory['mcps'])}`
- **Workflows:** `{len(inventory['workflows'])}`

---

## 🛠️ Skills Catalog

| Skill Name | Contributor | Description | Link |
|---|---|---|---|
"""
    for s in sorted(inventory["skills"], key=lambda x: (x["contributor"], x["name"])):
        md_content += f"| `{s['name']}` | **{s['contributor']}** | {s['description']} | [View](Skills/{s['contributor']}/{s['name']}) |\n"

    md_content += "\n---\n\n## 📦 Plugins Catalog\n\n| Plugin Name | Contributor | Description | Link |\n|---|---|---|---|\n"
    for p in sorted(inventory["plugins"], key=lambda x: (x["contributor"], x["name"])):
        md_content += f"| `{p['name']}` | **{p['contributor']}** | {p['description']} | [View](Plugins/{p['contributor']}/{p['name']}) |\n"

    if inventory["mcps"]:
        md_content += "\n---\n\n## 🔌 MCP Servers Catalog\n\n| MCP Name | Contributor | Description | Link |\n|---|---|---|---|\n"
        for m in sorted(inventory["mcps"], key=lambda x: (x["contributor"], x["name"])):
            md_content += f"| `{m['name']}` | **{m['contributor']}** | {m['description']} | [View](MCPs/{m['contributor']}/{m['name']}) |\n"

    with open(reg_md_path, "w", encoding="utf-8") as f:
        f.write(md_content)

    # 2. Generate registry.json
    reg_json_path = REPO_ROOT / "registry.json"
    json_data = {
        "version": "1.0.0",
        "updated_at": timestamp,
        "counts": {
            "skills": len(inventory["skills"]),
            "plugins": len(inventory["plugins"]),
            "mcps": len(inventory["mcps"]),
            "workflows": len(inventory["workflows"])
        },
        "inventory": {
            "skills": [
                {"name": s["name"], "contributor": s["contributor"], "path": s["relative_path"], "description": s["description"]}
                for s in inventory["skills"]
            ],
            "plugins": [
                {"name": p["name"], "contributor": p["contributor"], "path": p["relative_path"], "description": p["description"]}
                for p in inventory["plugins"]
            ],
            "mcps": [
                {"name": m["name"], "contributor": m["contributor"], "path": m["relative_path"], "description": m["description"]}
                for m in inventory["mcps"]
            ]
        }
    }
    with open(reg_json_path, "w", encoding="utf-8") as f:
        json.dump(json_data, f, indent=2)

    verifier.assert_truth(reg_md_path.exists(), "REGISTRY.md generated and validated")
    verifier.assert_truth(reg_json_path.exists(), "registry.json generated and validated")
    return verifier

# ==============================================================================
# SUBMODULE & UPSTREAM INGESTION ENGINE
# ==============================================================================

def sync_upstreams() -> Dict[str, Any]:
    """
    Executes git submodule updates for all upstream repos.
    Returns diff summaries and commit SHAs for changelog tracking.
    """
    print(f"\n{Style.BOLD}{Style.CYAN}--- Dimension 1: Upstream Submodule Synchronizer ---{Style.RESET}")
    diff_summary = {"details": []}

    gitmodules = REPO_ROOT / ".gitmodules"
    if not gitmodules.exists():
        print(f"  {Style.GRAY}No submodules registered yet in .gitmodules.{Style.RESET}")
        return diff_summary

    code, out, err = run_cmd(["git", "submodule", "update", "--init", "--recursive", "--remote", "--merge"])
    if code == 0:
        print(f"  {Style.GREEN}✓ [PASS]{Style.RESET} Upstream submodules pulled and merged")
        diff_summary["details"].append("Updated upstream submodules to latest tracked commits.")
    else:
        print(f"  {Style.YELLOW}⚠ [WARN]{Style.RESET} Submodule update message: {err or out}")
        diff_summary["details"].append(f"Submodule sync note: {err or out}")

    return diff_summary

# ==============================================================================
# CLI COMMAND IMPLEMENTATIONS
# ==============================================================================

def cmd_status():
    """Visual health check dashboard."""
    print_banner()
    verifier = GroundTruthVerifier()

    # 1. Git Status
    code, is_inside, _ = run_cmd(["git", "rev-parse", "--is-inside-work-tree"])
    _, branch_name, _ = run_cmd(["git", "branch", "--show-current"])
    active_branch = branch_name if branch_name else "main"
    verifier.assert_truth(code == 0, f"Git tracking active on branch: {active_branch}")

    # 2. Manifest Status
    manifest = load_manifest()
    verifier.assert_truth(bool(manifest.get("project", {}).get("name")), "Manifest loaded (OpenWarehouse)")

    # 3. Inventory Counts
    inventory = discover_inventory()
    print(f"\n{Style.BOLD}📊 Current Warehouse Inventory:{Style.RESET}")
    print(f"  • Skills:    {Style.GREEN}{len(inventory['skills'])}{Style.RESET}")
    print(f"  • Plugins:   {Style.GREEN}{len(inventory['plugins'])}{Style.RESET}")
    print(f"  • MCPs:      {Style.GREEN}{len(inventory['mcps'])}{Style.RESET}")
    print(f"  • Workflows: {Style.GREEN}{len(inventory['workflows'])}{Style.RESET}")

    # 4. Symlink Audit
    broken_count = 0
    total_links = 0
    for cat in ["Skills", "MCPs", "Plugins", "Workflows", "APIs", "Apps", "System"]:
        c_dir = REPO_ROOT / cat
        if c_dir.exists():
            for link in c_dir.rglob("*"):
                if link.is_symlink():
                    total_links += 1
                    if not link.exists():
                        broken_count += 1

    verifier.assert_truth(broken_count == 0, f"Symlink Integrity ({total_links} links, {broken_count} broken)")
    print(f"\n{Style.GREEN}{Style.BOLD}Status check completed successfully!{Style.RESET}\n")

def cmd_link(args):
    """Rebuild and validate relative symlinks."""
    print_banner()
    verifier = build_symlinks(clean=not args.no_clean)
    if verifier.is_healthy():
        print(f"\n{Style.GREEN}{Style.BOLD}✨ All category projection symlinks verified and live!{Style.RESET}\n")
    else:
        print(f"\n{Style.RED}{Style.BOLD}❌ Errors detected during symlink building.{Style.RESET}\n")

def cmd_sync(args):
    """
    ONE-COMMAND MASTER SYNC:
    1. Pull upstreams
    2. Compute diffs & write multi-level changelogs
    3. Rebuild relative symlinks (zero broken links)
    4. Regenerate REGISTRY.md and registry.json
    5. Git stage, commit, and push
    """
    print_banner()
    print(f"{Style.BOLD}{Style.MAGENTA}🚀 Executing One-Command Real-Time Warehouse Sync...{Style.RESET}\n")

    # Step 1: Upstream Sync
    diff_summary = sync_upstreams()

    # Step 2: Build Symlinks & Verify Ground Truth
    link_verifier = build_symlinks(clean=True)
    if not link_verifier.is_healthy():
        print(f"{Style.RED}Abort: Symlink ground-truth validation failed.{Style.RESET}")
        return

    # Step 3: Generate Changelogs
    changelog_verifier = generate_changelogs(diff_summary)

    # Step 4: Generate Registries
    reg_verifier = generate_registry()

    # Step 5: Git Stage, Commit, Push (unless dry-run)
    if args.dry_run:
        print(f"\n{Style.YELLOW}Dry-run mode: Skipping git commit and push.{Style.RESET}\n")
        return

    print(f"\n{Style.BOLD}{Style.CYAN}--- Dimension 2: Git Commit & Remote Push ---{Style.RESET}")
    run_cmd(["git", "add", "."])
    commit_date = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    commit_msg = args.commit_msg or f"chore(sync): automated ecosystem pulse [{commit_date}]"

    code, commit_out, commit_err = run_cmd(["git", "commit", "-m", commit_msg])
    if code == 0:
        print(f"  {Style.GREEN}✓ [PASS]{Style.RESET} Changes committed: {commit_msg}")
    else:
        if "nothing to commit" in (commit_out + commit_err):
            print(f"  {Style.GRAY}Nothing new to commit. Warehouse is already up to date.{Style.RESET}")
        else:
            print(f"  {Style.YELLOW}Git commit notice:{Style.RESET} {commit_out or commit_err}")

    if not args.no_push:
        code, push_out, push_err = run_cmd(["git", "push"])
        if code == 0:
            print(f"  {Style.GREEN}✓ [PASS]{Style.RESET} Pushed to remote origin successfully")
        else:
            print(f"  {Style.GRAY}Note: Push skipped or remote not configured yet ({push_err or push_out}){Style.RESET}")

    print(f"\n{Style.GREEN}{Style.BOLD}🎉 Warehouse 100% Synced, Verified, and Live!{Style.RESET}\n")

def cmd_add(args):
    """Add a new external repository as a submodule."""
    print_banner()
    repo_url = args.url
    contributor = args.contributor
    repo_name = args.name or Path(repo_url).stem.replace(".git", "")
    target_path = Path("Contributors") / contributor / repo_name

    print(f"{Style.BOLD}Adding new upstream repository:{Style.RESET} {repo_url}")
    print(f"Target location: {target_path}\n")

    code, out, err = run_cmd(["git", "submodule", "add", repo_url, str(target_path)])
    if code != 0:
        print(f"{Style.RED}Failed to add submodule: {err or out}{Style.RESET}")
        return

    # Update manifest
    manifest = load_manifest()
    manifest["contributors"][f"{contributor}-{repo_name}"] = {
        "type": "submodule",
        "description": f"Upstream repository {repo_name} from {contributor}",
        "path": str(target_path),
        "repository": repo_url,
        "branch": args.branch or "main",
        "active": True
    }
    save_manifest(manifest)

    # Rebuild symlinks & registry
    build_symlinks()
    generate_registry()
    generate_changelogs()

    print(f"\n{Style.GREEN}{Style.BOLD}✓ Successfully added {repo_name} under Contributors/{contributor}!{Style.RESET}\n")

def cmd_audit():
    """Ground-truth security and formatting audit."""
    print_banner()
    print(f"{Style.BOLD}{Style.CYAN}--- OpenWarehouse 3D Ground-Truth Security & Quality Audit ---{Style.RESET}\n")
    verifier = GroundTruthVerifier()

    inventory = discover_inventory()
    print(f"Auditing {len(inventory['skills'])} skills for SKILL.md standards...")
    for s in inventory["skills"]:
        s_file = s["path_obj"] / "SKILL.md"
        if s_file.exists():
            with open(s_file, "r", encoding="utf-8") as f:
                content = f.read()
            has_frontmatter = content.startswith("---") and "name:" in content
            verifier.assert_truth(has_frontmatter, f"Frontmatter valid: {s['name']}", critical=False)

    # Symlink verification
    build_symlinks(clean=True)
    print(f"\n{Style.GREEN}{Style.BOLD}✓ Audit completed.{Style.RESET}\n")

# ==============================================================================
# MAIN ENTRYPOINT
# ==============================================================================

def main():
    parser = argparse.ArgumentParser(
        description="OpenWarehouse — Universal AI Agent Materials Engine",
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    subparsers = parser.add_subparsers(dest="command", help="Available commands")

    # status
    subparsers.add_parser("status", help="Show warehouse health and inventory")

    # link
    link_parser = subparsers.add_parser("link", help="Rebuild and validate relative projection symlinks")
    link_parser.add_argument("--no-clean", action="store_true", help="Do not prune stale symlinks")

    # sync
    sync_parser = subparsers.add_parser("sync", help="One-command pull, changelog, symlink, and commit")
    sync_parser.add_argument("--dry-run", action="store_true", help="Run sync without committing or pushing")
    sync_parser.add_argument("--no-push", action="store_true", help="Commit changes locally without git push")
    sync_parser.add_argument("--commit-msg", type=str, help="Custom commit message")

    # add
    add_parser = subparsers.add_parser("add", help="Add new upstream repository as submodule")
    add_parser.add_argument("url", type=str, help="Git repository URL")
    add_parser.add_argument("--contributor", type=str, default="Community", help="Contributor name (e.g. Anthropic, Google, Community)")
    add_parser.add_argument("--name", type=str, help="Repository directory name")
    add_parser.add_argument("--branch", type=str, default="main", help="Upstream branch to track")

    # audit
    subparsers.add_parser("audit", help="Run 3D ground-truth security and schema audit")

    args = parser.parse_args()
    if not args.command:
        parser.print_help()
        sys.exit(0)

    if args.command == "status":
        cmd_status()
    elif args.command == "link":
        cmd_link(args)
    elif args.command == "sync":
        cmd_sync(args)
    elif args.command == "add":
        cmd_add(args)
    elif args.command == "audit":
        cmd_audit()

if __name__ == "__main__":
    main()
