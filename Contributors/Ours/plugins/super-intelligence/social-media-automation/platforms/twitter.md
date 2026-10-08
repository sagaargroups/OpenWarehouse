# 🐦 X / Twitter Platform Config

## Quick Facts
| Property | Value |
|---|---|
| **Character Limit** | 280 (Free) / 25,000 (Premium) |
| **Image Formats** | JPG, PNG, GIF, WEBP |
| **Image Max Size** | 5 MB (images), 15 MB (GIFs) |
| **Video Max** | 2 min 20 sec, 512 MB |
| **API Rate Limit** | 1,500 tweets/month (Free), 3,000 (Basic) |
| **n8n Node** | `Twitter` (built-in) |
| **Auth Type** | OAuth 1.0a |
| **Best Post Times** | 8-10 AM, 12-1 PM, 5-6 PM |

## Credential Setup
1. [developer.x.com/en/portal/dashboard](https://developer.x.com/en/portal/dashboard)
2. Create App → Keys and Tokens tab
3. You need 4 keys:
   - `API Key` (Consumer Key)
   - `API Secret` (Consumer Secret)
   - `Access Token`
   - `Access Token Secret`
4. In n8n: Credentials → New → **Twitter OAuth API** → paste all 4

## Format Rules for Automation
- Trim text to 277 chars + "..." if over 280
- Hashtags: max 3 per tweet
- Mentions: @username format
- Links: auto-shortened by Twitter (count as 23 chars)
- Thread: split at 280 chars per tweet, number them "1/5, 2/5..."
