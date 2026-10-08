# 📊 LinkedIn Platform Config

## Quick Facts
| Property | Value |
|---|---|
| **Character Limit** | 3,000 (post), 120 (headline) |
| **Image Formats** | JPG, PNG |
| **Image Max Size** | 10 MB |
| **Video Max** | 10 min, 5 GB |
| **API Rate Limit** | 100 posts/day per member |
| **n8n Node** | `LinkedIn` (built-in) |
| **Auth Type** | OAuth 2.0 |
| **Best Post Times** | Tue-Thu, 8-10 AM |

## Credential Setup
1. [linkedin.com/developers/apps](https://www.linkedin.com/developers/apps)
2. Create App → needs a LinkedIn Company Page
3. Auth tab → Redirect URL: `http://localhost:5678/rest/oauth2-credential/callback`
4. Products tab → Request: "Share on LinkedIn" + "Sign In with LinkedIn using OpenID Connect"
5. You need: `Client ID` + `Client Secret`
6. In n8n: Credentials → New → **LinkedIn OAuth2 API** → paste + click Connect

## Format Rules for Automation
- Professional tone, no emojis overuse
- First 2 lines are critical (pre-fold hook)
- Use line breaks for readability
- Hashtags: 3-5 at the end
- Best format: Story → Lesson → CTA
