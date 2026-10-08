---
name: CloudFetch AI Branding & Deployment Guide
description: Comprehensive guide for AI prompts, branding consistency, platform automation, and production deployment to Vercel with fallback to VPC/containers.
---

# CloudFetch AI Branding & Deployment Guide

This skill provides the definitive guide for maintaining brand consistency, leveraging AI for platform automation, and deploying to production environments.

---

## Part 1: AI Prompt Guide for Branding & Automation

### 1.1 Platform Identity

**Brand Name:** CloudFetch Platform
**Tagline:** "Enterprise-grade SaaS infrastructure for modern developers"

**Core Values:**
- Premium, modern aesthetic
- Developer-first experience
- Enterprise reliability
- Seamless integrations

### 1.2 AI Prompt Templates for Branding

#### Logo & Visual Asset Generation
```
Platform: CloudFetch
Style: Modern, minimalist SaaS branding
Primary Color: Orange (#F97316) - energy, innovation
Secondary: Slate/Gray palette for professionalism
Theme: Cloud + data flow metaphor
Output: SVG-ready, scalable, works on dark/light backgrounds
```

#### Marketing Copy Generation
```
Product: [PRODUCT_NAME]
Tone: Professional, confident, developer-focused
Audience: Technical founders, CTOs, senior developers
Key Points: [FEATURE_LIST]
Style: Concise, benefit-oriented, no buzzwords
Include: Clear CTA, social proof elements
```

#### UI Component Styling Prompt
```
Design System: CloudFetch Premium
Theme: Dark mode first, light mode support
Colors:
  - Primary: Orange (#F97316)
  - Accent: Orange-600 to Red-600 gradients
  - Background: Slate-900 (dark), Slate-50 (light)
  - Cards: Slate-800/50 with border-slate-700
Style: Glassmorphism, subtle shadows, rounded-xl corners
Typography: Inter font, tight tracking for headers
Effects: Hover transitions, subtle animations
```

### 1.3 Platform Work Automation Prompts

#### Database Schema Extension
```
Context: CloudFetch SaaS platform using Drizzle ORM + PostgreSQL
Task: Add new [ENTITY] table
Requirements:
  - Follow existing schema patterns in src/lib/db/schema.ts
  - Include audit fields (createdAt, updatedAt)
  - Add proper foreign key relations
  - Export type inference
```

#### API Route Generation
```
Platform: Next.js 15 App Router
Pattern: RESTful endpoints in app/api/
Security: Validate session + role-based access
Response: JSON with error handling
Include: Input validation with Zod, proper HTTP status codes
```

#### Component Premium Styling
```
Task: Update [COMPONENT] to premium design
Apply:
  - Gradient header with icon from lucide-react
  - Dark theme support (dark: prefix classes)
  - Modern cards with border-slate-200 dark:border-slate-700
  - Stats cards with colored gradients (from-color-100 to-color-100)
  - Hover effects with transition-colors
  - Empty states with illustrations
```

---

## Part 2: Vercel Deployment (Priority)

### 2.1 Prerequisites Checklist

- [x] Single package manager: `npm` (Vercel default)
- [x] Build command: `next build`
- [x] Output: `.next` directory (auto-detected)
- [x] Node.js: 18.x or 20.x LTS

### 2.2 Project Configuration for Vercel

#### package.json (Verified)
```json
{
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

#### next.config.mjs (Verified)
```javascript
const nextConfig = {
    reactStrictMode: false,
    transpilePackages: ['@glideapps/glide-data-grid'],
};

export default nextConfig;
```

#### vercel.json (Create if needed)
```json
{
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### 2.3 Environment Variables

Create these in Vercel Dashboard → Settings → Environment Variables:

```bash
# Database (Required)
POSTGRES_URL="postgresql://user:pass@host:5432/db?sslmode=require"

# Authentication (Required)
AUTH_SECRET="your-32-char-secret-key"

# Stripe (Required for payments)
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."

# AWS (Required for LiveDB/Heavy Storage)
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
AWS_REGION="us-east-1"
S3_BUCKET_NAME="cloudfetch-uploads"
ATHENA_OUTPUT_BUCKET="s3://cloudfetch-athena-results/"

# Email (Required)
RESEND_API_KEY="re_..."

# App URLs
NEXT_PUBLIC_APP_URL="https://your-domain.vercel.app"
```

### 2.4 Git Setup for Auto-Deployment

#### Initialize & Connect
```bash
# Ensure .gitignore is proper
cat >> .gitignore << 'EOF'
# Environment
.env
.env.local
.env*.local

# Dependencies
node_modules/

# Build
.next/
out/

# Misc
.DS_Store
*.log
.vercel
EOF

# Initialize if needed
git init
git add .
git commit -m "Initial commit: CloudFetch Platform"

# Connect to GitHub
git remote add origin https://github.com/YOUR_ORG/cloudfetch-platform.git
git branch -M main
git push -u origin main
```

#### Vercel Connection
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel auto-detects Next.js
4. Add environment variables
5. Deploy

**Auto-deployments are now enabled:**
- `main` branch → Production
- Pull Requests → Preview deployments

### 2.5 Vercel Build Optimization

Add to `next.config.mjs`:
```javascript
const nextConfig = {
    reactStrictMode: false,
    transpilePackages: ['@glideapps/glide-data-grid'],
    
    // Vercel optimizations
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: '**.amazonaws.com' },
        ],
    },
    
    // Reduce bundle size
    experimental: {
        optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    },
};
```

---

## Part 3: VPC/Container Deployment (Fallback)

### 3.1 When to Use

Use VPC/Container deployment when:
- Vercel limits are exceeded (bandwidth, build time)
- Self-hosted infrastructure required
- Specific compliance requirements (data residency)
- Cost optimization at scale

### 3.2 Dockerfile

```dockerfile
# Production Dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

### 3.3 Docker Compose (Local Testing)

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - POSTGRES_URL=${POSTGRES_URL}
      - AUTH_SECRET=${AUTH_SECRET}
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: cloudfetch
      POSTGRES_PASSWORD: password
      POSTGRES_DB: cloudfetch
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### 3.4 AWS ECS/Fargate Deployment

```bash
# Build and push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin YOUR_ACCOUNT.dkr.ecr.us-east-1.amazonaws.com

docker build -t cloudfetch-platform .
docker tag cloudfetch-platform:latest YOUR_ACCOUNT.dkr.ecr.us-east-1.amazonaws.com/cloudfetch-platform:latest
docker push YOUR_ACCOUNT.dkr.ecr.us-east-1.amazonaws.com/cloudfetch-platform:latest
```

---

## Part 4: Git Push Workflow

### 4.1 Recommended Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
# ...

# Commit with conventional commits
git add .
git commit -m "feat: add new LiveDB export feature"

# Push to remote (triggers preview deployment)
git push origin feature/new-feature

# Create PR → Auto preview deployment
# Merge to main → Auto production deployment
```

### 4.2 Pre-Push Checklist

```bash
# Run before pushing
npm run lint          # Check for lint errors
npm run build         # Verify production build
npm run test          # Run tests (if any)
```

### 4.3 GitHub Actions (Optional CI)

Create `.github/workflows/ci.yml`:
```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Lint
        run: npm run lint
      
      - name: Build
        run: npm run build
        env:
          # Add mock values for build
          POSTGRES_URL: "mock://db"
          AUTH_SECRET: "mock-secret-for-build"
```

---

## Part 5: Package Manager Compliance

### 5.1 Vercel Package Manager Support

| Manager | Supported | Lock File |
|---------|-----------|-----------|
| npm ✅ | Yes (Default) | package-lock.json |
| pnpm | Yes | pnpm-lock.yaml |
| yarn | Yes | yarn.lock |
| bun | Experimental | bun.lockb |

**This project uses: `npm` (Vercel default)**

### 5.2 Ensure Single Package Manager

```bash
# Remove conflicting lock files if any exist
rm -f yarn.lock pnpm-lock.yaml bun.lockb

# Ensure only package-lock.json exists
ls -la *.lock* 2>/dev/null || echo "No lock files (run npm install)"

# Regenerate clean lock file
rm -rf node_modules package-lock.json
npm install
```

### 5.3 .npmrc Configuration

Create `.npmrc` for consistent installs:
```
engine-strict=true
save-exact=false
legacy-peer-deps=true
```

---

## Quick Reference Commands

```bash
# Development
npm run dev                    # Start dev server with Turbopack

# Database
npm run db:generate            # Generate migrations
npm run db:migrate             # Apply migrations
npm run db:studio              # Open Drizzle Studio

# Production
npm run build                  # Build for production
npm run start                  # Start production server

# Deployment
git push origin main           # Auto-deploy to Vercel

# Verify build locally
npm run build && npm run start
```

---

## Troubleshooting

### Common Vercel Build Errors

1. **Module not found**
   - Ensure all imports use correct paths
   - Check `transpilePackages` in next.config.mjs

2. **Environment variable missing**
   - Add to Vercel Dashboard → Settings → Environment Variables
   - Ensure proper variable names (NEXT_PUBLIC_ prefix for client)

3. **Build timeout**
   - Optimize imports with `experimental.optimizePackageImports`
   - Consider VPC deployment for large builds

4. **Database connection failed**
   - Ensure `?sslmode=require` in POSTGRES_URL
   - Whitelist Vercel IPs if using private database
