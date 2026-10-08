---
description: Set up and manage GitHub and Discord community presence
---

# 👥 Community Manager Skill

## What This Skill Does
Creates complete community infrastructure for open source projects,
products, and brands. Generates GitHub repository templates, Discord
server structures, and community engagement materials.

## When to Use
- "Set up GitHub community package for my project"
- "Create a Discord server structure"
- "Write a CONTRIBUTING guide"
- "Generate issue templates"

## GitHub Community Kit

### Step 1: README.md
Generate with this structure:
```markdown
# Project Name
> One-line description

## ✨ Features
- Feature 1
- Feature 2

## 🚀 Quick Start
\`\`\`bash
# Install
# Run
\`\`\`

## 📖 Documentation
[Link to docs]

## 🤝 Contributing
[Link to CONTRIBUTING.md]

## 📝 License
[License type]

## 🙏 Acknowledgments
Built with [tools/libraries]
```

### Step 2: CONTRIBUTING.md
```markdown
# Contributing to [Project]

## How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code Style
[Your code style rules]

## Bug Reports
Use the bug report template in Issues.

## Feature Requests
Use the feature request template in Issues.
```

### Step 3: Issue Templates
Create `.github/ISSUE_TEMPLATE/`:

**bug_report.md:**
```yaml
---
name: Bug Report
about: Report a bug to help us improve
labels: bug
---
**Describe the bug:**

**Steps to reproduce:**
1.
2.
3.

**Expected behavior:**

**Screenshots:**

**Environment:**
- OS:
- Version:
```

**feature_request.md:**
```yaml
---
name: Feature Request
about: Suggest an idea for this project
labels: enhancement
---
**Problem:**

**Proposed solution:**

**Alternatives considered:**

**Additional context:**
```

### Step 4: Pull Request Template
Create `.github/pull_request_template.md`:
```markdown
## What does this PR do?

## Type of change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist
- [ ] Tests pass
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
```

### Step 5: GitHub Actions CI
Create `.github/workflows/ci.yml` for automated testing.

### Step 6: CODE_OF_CONDUCT.md
Use the Contributor Covenant (standard across open source).

---

## Discord Server Structure

### Recommended Channel Layout
```
📢 INFORMATION
├── #welcome-rules
├── #announcements
├── #roadmap
└── #faq

💬 COMMUNITY
├── #general
├── #introductions
├── #showcase
└── #off-topic

🛠️ SUPPORT
├── #help
├── #bug-reports
└── #feature-requests

📚 RESOURCES
├── #tutorials
├── #links
└── #tools

👑 TEAM
├── #team-chat (private)
└── #moderators (private)
```

### Role Hierarchy
```
🔴 Admin          → Full control
🟠 Moderator      → Manage messages/users
🟡 Contributor     → Verified contributors
🟢 Member          → Verified members
⚪ Everyone        → Default (read-only in some channels)
```

### Welcome Message Template
```
👋 Welcome to [Project Name]!

Here's how to get started:
1️⃣ Read the #welcome-rules
2️⃣ Introduce yourself in #introductions
3️⃣ Check #faq for common questions
4️⃣ Ask for help in #help

Useful links:
🌐 Website: [url]
📖 Docs: [url]
🐙 GitHub: [url]
```

## Quality Rules
1. README must be scannable in 10 seconds — use emojis and headers
2. Every repo MUST have: README, LICENSE, CONTRIBUTING, Issue templates
3. Discord must have clear rules before users can post
4. Automate moderation where possible (bots for spam, welcome messages)
5. Keep FAQ updated monthly
