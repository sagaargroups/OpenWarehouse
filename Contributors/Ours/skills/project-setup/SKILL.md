---
name: project-setup
description: "AI Agent Setup Directive for scaffolding a new project."
---

# 🤖 AI Agent Setup Directive

**ATTENTION AI AGENT:** You have just cloned the Universal Project Template. Your job is to transform this generic template into a specific, fully-configured project. Follow the exact sequence below.

---

## Step 1: Gather Project Context
Before making any file changes, ask the human founder (Sagar) the following questions to gather the required context:
1. **What is the name of this new project/brand?**
2. **What is the core vision or one-liner for this project?**
3. **What is the primary tech stack?** (e.g., Next.js, Python, No-code)
4. **Where should the codebase live?** (Inside `project-itself/` or a separate repo?)

*Do not proceed to Step 2 until the founder answers these questions.*

---

## Step 2: Global Renaming & Restructuring
Once you have the answers, perform the following actions:
1. **Rename the Root Directory:** Rename the current root folder to the new `[Project-Name]`.
2. **Update Context:** Open `brain/context.md` and replace the generic text with the specific vision, tech stack, and playbooks for this new project.
3. **Initialize Git:** Run `rm -rf .git` to clear the template's git history, then run `git init` to start a fresh repository for the new project.

---

## Step 3: Scaffold the Brand Architecture
Using your `project-scaffolder` skill (or manually), create the following standard folder tree inside the root directory:
```text
├── brand-identity/ (LOGO, COLORS, TYPOGRAPHY, BRAND-VOICE)
├── registration/ (Account setup checklists)
├── docs/ (Architecture and Organization)
├── wiki/ (Public-facing docs)
├── seo/ (llms.txt, keywords, listings)
└── ops/ (Infrastructure, legal, security)
```

---

## Step 4: Finalization
1. Add the new project's specific "if this happens, do that" playbooks to `brain/context.md`.
2. Notify the founder that the environment is fully scaffolded and ready for development.
3. Ask the founder if they want to run the `agentic-skill-creator` to generate any specific skills for this project.

> **CRITICAL RULE:** Do NOT delete the `brain/` structure. It must remain intact as the operating system for this new project.
