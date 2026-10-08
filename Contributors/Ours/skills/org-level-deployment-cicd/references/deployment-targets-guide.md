# Multi-Target Deployment Architecture Guide

## Overview

In an enterprise monorepo, different entities and applications have different runtime hosting requirements based on scale, cost structure, and compliance:

- **SaaS / Core Products (e.g. AppMarkit, AppMarkit Labs)**: High-performance VPS / Dedicated Cloud (Ubuntu, Docker Compose, Nginx, PM2).
- **Agency & Creative Portfolios (e.g. Ahrik Studio, Artha)**: Vercel / Cloudflare Pages for ultra-fast global edge delivery and Next.js / React optimization.
- **D2C E-Commerce Stores & Marketing Sites (e.g. Golu Snacks, Ahrik Lifestyle)**: Netlify / Vercel / Shopify custom store frontends.

This guide standardizes deployment actions across all target platforms.

---

## Target 1: VPS / Dedicated Server (SSH + Docker Compose / PM2)

### Deployment Mechanism:
GitHub Actions executes over SSH or via a self-hosted runner.

### Steps Executed in Workflow:
1. Build application artifact / Docker image in GitHub Actions.
2. Push container to private registry (e.g., GitHub Container Registry `ghcr.io`).
3. SSH into VPS server using `appleboy/ssh-action` or custom SSH key.
4. Execute zero-downtime rolling update or Docker Compose pull & restart:
   ```bash
   docker compose -f apps/tech/appmarkit/docker-compose.yml pull
   docker compose -f apps/tech/appmarkit/docker-compose.yml up -d --no-deps --build appmarkit-service
   ```
5. Run automated health check against `http://<server-ip>/api/health`.

---

## Target 2: Vercel (Serverless / Next.js / Vite)

### Deployment Mechanism:
Uses `vercel` CLI inside GitHub Actions or Vercel GitHub Integration with custom path configuration.

### Monorepo Settings:
- **Root Directory**: `apps/agency/ahrik-studio`
- **Build Command**: `npm run build` (or Turborepo filter: `npx turbo run build --filter=ahrik-studio`)
- **Output Directory**: `.next` or `dist`

### Steps Executed in Workflow:
```bash
npx vercel pull --yes --environment=production --token=$VERCEL_TOKEN
npx vercel build --prod --token=$VERCEL_TOKEN
npx vercel deploy --prebuilt --prod --token=$VERCEL_TOKEN
```

---

## Target 3: Netlify (Jamstack / Static / SSR)

### Deployment Mechanism:
Uses `netlify-cli` or official Netlify GitHub Actions plugin.

### Monorepo Settings:
- **Package Path**: `apps/d2c/golu-snacks`
- **Publish Path**: `apps/d2c/golu-snacks/dist`

### Steps Executed in Workflow:
```bash
npx netlify-cli deploy --dir=apps/d2c/golu-snacks/dist --prod --auth=$NETLIFY_AUTH_TOKEN --site=$NETLIFY_SITE_ID
```

---

## Target 4: Cloudflare Pages / Workers

### Deployment Mechanism:
Uses `wrangler` CLI or `@cloudflare/wrangler-action`.

### Steps Executed in Workflow:
```bash
npx wrangler pages deploy apps/agency/artha/dist --project-name=artha-marketing
```

---

## Standardized Health Checks & Rollbacks

Every deployment action—regardless of target—must execute a post-deployment verification step:

1. **HTTP Status Check**: Query deployed URL, ensure 200 OK within 30 seconds.
2. **Failure Handling**:
   - For **VPS**: Revert Docker image tag to previous stable commit.
   - For **Vercel/Netlify**: Instant rollback via CLI or API.
   - Send alert notification to Slack / Discord `#ops-alerts`.
