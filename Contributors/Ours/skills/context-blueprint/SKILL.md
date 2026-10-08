---
name: global-context-blueprint
description: "Blueprint for the global system context and operational handbook."
---

the brain is all about context and systems automations skills 
the developer is all about developing things so i will give him prompts to develop things and he will give me projects as output 



 "I Am Your Universal context.md Blueprint"No matter what industry your project belongs to, I adapt instantly. Below is my master template. You can copy this directly into your repository and fill in the blanks to anchor your AI agent.markdown# 🎯 SYSTEM CONTEXT & OPERATIONAL HANDBOOK

## 🏢 1. Industry & Domain Domain
* **Core Industry:** [e.g., FinTech, HealthTech, E-Commerce, Logistics, EdTech]
* **Target Audience:** [e.g., B2B Enterprise Admins, B2C Mobile Users, Internal Data Scientists]
* **Mission Critical Focus:** [e.g., Data Privacy (HIPAA/GDPR), Low-Latency Execution, High Accessibility]

## 🛠️ 2. Technology Stack & Ecosystem
* **Core Language/Runtime:** [e.g., TypeScript Node.js v20, Python 3.11, Rust, Go]
* **Primary Frameworks:** [e.g., Next.js v15, FastAPI, Spring Boot, React Native]
* **Data Layer:** [e.g., PostgreSQL via Prisma, MongoDB, Redis for caching, AWS S3]
* **Package Manager / Build Tool:** [e.g., pnpm, npm, poetry, gradle, cargo]

## 🛡️ 3. Architecture & Code Conventions
* **Design Pattern:** [e.g., Clean Architecture, Microservices, Domain-Driven Design (DDD), Monolith]
* **Type Safety:** [e.g., Strict TypeScript (no 'any'), Explicit Type Hints in Python, Pydantic validation]
* **Naming Conventions:** [e.g., camelCase for variables, PascalCase for components, snake_case for DB columns]
* **File Structure Rule:** [e.g., Feature-based folders, Flat src/ components folder, Separated routes/controllers]

## ⚙️ 4. Local Commands & Core Workflows
* **Install Dependencies:** `[e.g., pnpm install]`
* **Run Local Server:** `[e.g., npm run dev]`
* **Execute Tests:** `[e.g., pytest, npm run test:watch]`
* **Database Migration:** `[e.g., npx prisma migrate dev]`

## 🚫 5. AI Guardrails (What NOT to do)
* **Never Do This:** [e.g., Never hardcode API keys, Never use inline styles, Never mock data in production files]
* **Deprecations:** [e.g., Do not use Axios; use native fetch. Do not use legacy Class components]
* **Security Constraints:** [e.g., All inputs must pass through the validation middleware. Mask all PII data]
Use code with caution.🛠️ How to Feed This to Your AI AgentOnce you fill this template out, you can instruct your AI agent (like Cursor, Claude Code, or Windsurf) with this prompt:"Read the context.md file in the root directory. This contains the absolute boundaries, stack, and industry rules for this project. Every time I ask you to write code, build a feature, or refactor something, verify your plan against this file first. Do not hallucinate or use alternative frameworks."