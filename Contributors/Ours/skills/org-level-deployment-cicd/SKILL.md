---
name: org-level-deployment-cicd
description: Architect, generate, and maintain enterprise monorepo CI/CD pipelines, path-filtered GitHub Actions, root CODEOWNERS RBAC policies, and multi-target deployments (VPS/Docker, Vercel, Netlify, Cloudflare). Use when: (1) Setting up CI/CD for a new app or division inside an enterprise monorepo, (2) Mapping organizational teams to folder permissions via CODEOWNERS, (3) Configuring multi-target deployment pipelines (VPS/Vercel/Netlify) with path filtering, (4) Implementing Trunk-Based Development with Git Tag environment promotions (Dev -> Staging -> Prod).
---

# Enterprise Monorepo & Multi-Target CI/CD Architect

Architect and generate production-grade CI/CD pipelines, path-filtered GitHub Actions workflows, root `CODEOWNERS` permission boundaries, and target deployment manifests across enterprise monorepos.

## Tools Required

- **Filesystem Tools**: Write workflow YAML files, update `.github/CODEOWNERS`, write `deploy.config.json`.
- **Git / GitHub CLI**: Manage branches, tags, GitHub Environment secrets, and repository permission checks.

---

## Workflow

### Step 1: Detect Monorepo Structure & Organization Hierarchy

1. Analyze repo layout (`apps/`, `packages/`, `.github/`).
2. Identify target app path (e.g. `apps/<division>/<app-name>`).
3. Identify owner division/arm (e.g. `core`, `agency`, `consumer`, `tech`) and designated GitHub Team handle (`@<org-handle>/<team-name>`).
4. Read reference guides for standards:
   - Trunk-Based Development rules: `references/monorepo-branching-and-tags.md`
   - RBAC & CODEOWNERS guidelines: `references/org-hierarchy-rbac-mapping.md`
   - Target deployment specs: `references/deployment-targets-guide.md`

### Step 2: Determine Deployment Target & Environment Secrets

Determine hosting platform:
- **`vps-docker`**: Requires `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY` in GitHub Environment Secrets.
- **`vercel`**: Requires `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
- **`netlify`**: Requires `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`.
- **`cloudflare-pages`**: Requires `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.

Generate `deploy.config.json` inside the app's root folder using `assets/deployment-manifest-template.json`.

### Step 3: Generate Path-Filtered GitHub Actions Workflow

1. Select matching workflow template from `assets/`:
   - `assets/github-action-vps-docker.yml`
   - `assets/github-action-vercel.yml`
   - `assets/github-action-netlify.yml`
2. Replace template variables (`{{APP_NAME}}`, `{{APP_DIVISION}}`) with target application details.
3. Save to `.github/workflows/deploy-{{APP_NAME}}.yml`.

### Step 4: Map & Update Root `CODEOWNERS`

1. Inspect root `.github/CODEOWNERS`.
2. Format path ownership entry using `assets/codeowners-template`:
   ```
   /apps/{{APP_DIVISION}}/{{APP_NAME}}/ {{OWNER_TEAM}} @<org-handle>/platform-admins
   ```
3. Append or update entry safely without breaking global fallback rules.

---

### [APPROVAL_GATE] — Power Approval Request

Before writing or committing workflow files to the repository, display the following summary to the user:

```markdown
### ⚠️ POWER APPROVAL REQUESTED: MONOREPO CI/CD PIPELINE CREATION

- **Target App**: `apps/{{APP_DIVISION}}/{{APP_NAME}}`
- **Owner Team**: `{{OWNER_TEAM}}`
- **Deployment Platform**: `{{TARGET_PLATFORM}}`
- **Generated Files**:
  1. `.github/workflows/deploy-{{APP_NAME}}.yml` (Path-filtered CI/CD Workflow)
  2. `.github/CODEOWNERS` (Updated with path permission entry)
  3. `apps/{{APP_DIVISION}}/{{APP_NAME}}/deploy.config.json` (App Deployment Manifest)
- **Deployment Triggers**:
  - `main` push (files in `apps/{{APP_DIVISION}}/{{APP_NAME}}/**`) ➔ **Development**
  - Git Tag `{{APP_NAME}}@v*-staging` ➔ **Staging**
  - Git Tag `{{APP_NAME}}@v*` ➔ **Production**

Do you grant Power Approval to create these CI/CD files and apply CODEOWNERS rules?
```

*Wait for explicit user confirmation before proceeding to file creation.*

---

### Step 5: File Creation & Verification

1. Write `.github/workflows/deploy-{{APP_NAME}}.yml`.
2. Update `.github/CODEOWNERS`.
3. Write `apps/{{APP_DIVISION}}/{{APP_NAME}}/deploy.config.json`.
4. Validate YAML syntax for GitHub Actions compatibility.

---

## Output Format

Always return a structured deployment summary upon successful generation:

```markdown
## Monorepo CI/CD Setup Complete

- **App**: `apps/<division>/<app-name>`
- **Target**: Vercel / VPS / Netlify
- **CODEOWNERS**: Assigned to `@<org-handle>/team-<app-name>`
- **Workflow**: `.github/workflows/deploy-<app-name>.yml`
- **Next Steps**:
  1. Ensure GitHub Environment Secrets (`<PLATFORM_TOKEN>`) are configured.
  2. Push to `main` to trigger the initial Development build.
```

---

## Failure Handling

- **Missing Environment Secrets**: If required platform secrets are missing in GitHub repository settings, output exact step-by-step instructions for adding them under GitHub Settings -> Secrets -> Actions.
- **CODEOWNERS Conflict**: If a rule already exists for the given path, prompt user whether to replace or append additional team handles.
- **Invalid Workflow YAML**: Validate template substitution to ensure no unreplaced mustache tags (`{{...}}`) remain in the workflow.
