# Organizational Hierarchy & RBAC Mapping in Monorepos

## Overview

When a parent organization manages multiple divisions/arms (e.g. Agency, D2C Consumer, Tech) and sub-brands/entities, code permissions and deployment rights must reflect the corporate hierarchy.

This reference documents how to enforce **Hub-and-Spoke Governance**: Centralized parent ownership with isolated, decentralized brand team permissions.

---

## 1. Corporate Hierarchy to GitHub Teams Mapping

```
Parent Organization: @<org-handle>
├── Admin Team: @<org-handle>/corporate-admins (Full repo access, security, billing)
├── Shared Infra / Ops: @<org-handle>/platform-eng (CI/CD workflows, global configs)
│
├── Division / Arm Teams:
│   ├── Agency Arm: @<org-handle>/agency-lead
│   │   ├── Studio Team: @<org-handle>/team-studio-app
│   │   └── Marketing Team: @<org-handle>/team-marketing-app
│   │
│   ├── D2C Consumer Arm: @<org-handle>/d2c-lead
│   │   ├── Brand One Team: @<org-handle>/team-brand-one
│   │   └── Brand Two Team: @<org-handle>/team-brand-two
│   │
│   └── Tech Arm: @<org-handle>/tech-lead
│       ├── SaaS Team: @<org-handle>/team-saas-platform
│       └── Dev Services Team: @<org-handle>/team-dev-services
```

---

## 2. GitHub CODEOWNERS Rules

The root `.github/CODEOWNERS` file enforces that edits to an entity's folder require explicit sign-off from that entity's designated team lead or central IT.

### Best Practice Rules for `CODEOWNERS`:

1. **Global Fallback**: Central platform/ops team owns root configs.
2. **Path Isolation**: Specific subfolders are assigned exclusively to brand/app teams.
3. **Multi-Owner Reviews**: Cross-cutting changes (e.g., shared packages) require approval from central IT + affected division leads.

---

## 3. Environment Secrets Isolation Matrix

Secrets (API keys, deployment SSH keys, database URIs, Vercel tokens) must be scoped by **GitHub Environment** or prefixed per application to prevent credential leaks across brands:

### Naming Convention:
- **Global Secrets**: `GLOBAL_DEPLOY_KEY`, `SLACK_WEBHOOK_ALERTS`
- **Entity Secrets**:
  - `STUDIO_APP_VERCEL_TOKEN`, `STUDIO_APP_PROJECT_ID`
  - `SAAS_PLATFORM_VPS_SSH_KEY`, `SAAS_PLATFORM_VPS_IP`
  - `BRAND_ONE_NETLIFY_SITE_ID`, `BRAND_ONE_NETLIFY_AUTH_TOKEN`

### GitHub Environment Scoping:
- `production-studio-app` -> Contains production Vercel token
- `production-saas-platform` -> Contains production VPS SSH credentials
- `staging-brand-one` -> Contains staging Netlify credentials
