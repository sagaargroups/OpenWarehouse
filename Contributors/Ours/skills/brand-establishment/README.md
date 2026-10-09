# Brand Establishment Skill

> **Type:** Antigravity Workspace Skill  
> **Path:** `.agents/skills/brand-establishment/`  
> **Engine Version:** `engine-v1.0`

## Purpose

Governance-driven brand identity generation and composable branded document production. Enforces phased micro-movements, interactive user sign-off, and zero-placeholder validation.

## Architecture

```text
brand-establishment/
├── SKILL.md                     ← Governance protocol + workflow dispatcher
├── engine/                      ← Immutable parameterized templates
│   ├── identity/                ← 8 brand identity templates
│   ├── formats/                 ← 5 visual layout shells
│   └── content/                 ← 8 document body structures
├── references/                  ← Detailed protocols (progressive disclosure)
├── scripts/                     ← Executable audit tools
├── outputs/                     ← Generated deliverables (versioned)
└── helper-tools/                ← Standalone HTML tools
```

## Two Capabilities

### 1. Full Brand Identity Kit
Generate a complete brand identity suite (logo, colors, typography, imagery, voice, messaging, templates, guidelines) through a 4-phase gated pipeline.

### 2. Composable Branded Documents
Merge format shells (A4, slides, email, 1-page, invoice) with content modules (MSA, SOW, NDA, SLA, proposals) to produce branded documents on demand.

## Quick Start

Read [SKILL.md](./SKILL.md) for the complete governance protocol and workflow.

## Existing Deliverables

| Brand | Directory | Status |
|---|---|---|
| CloudFetch | `outputs/cloudfetch-lifetime-identity-v0/` | Reference example |
| D2C With AHrik | `outputs/d2c-with-ahrik-mono-craft-lifetime-identity-v0/` | Production locked |
