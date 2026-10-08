# 🐙 GitHub Platform Config

## Quick Facts
| Property | Value |
|---|---|
| **Discussion Body** | Unlimited (Markdown) |
| **Release Notes** | Unlimited (Markdown) |
| **Issue Body** | 65,536 characters |
| **n8n Node** | `GitHub` (built-in) |
| **Auth Type** | Personal Access Token |
| **Cost** | Free |

## Credential Setup
1. [github.com/settings/tokens](https://github.com/settings/tokens)
2. Generate new token (classic)
3. Select scopes: `repo`, `write:discussion`, `read:org`
4. Copy token immediately (shown only once)
5. In n8n: Credentials → New → **GitHub API** → paste token

## What You Can Automate
- Create Releases with changelogs
- Post to Discussions (announcements, updates)
- Create/update Issues
- Update README.md
- Create Pull Requests
- Manage Labels and Milestones
- Trigger GitHub Actions workflows

## Best Used For
- Automated release announcements
- Cross-posting social content as GitHub Discussions
- Community engagement tracking
- CI/CD pipeline triggers
