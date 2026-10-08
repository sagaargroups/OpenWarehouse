# 📘 Facebook Platform Config

## Quick Facts
| Property | Value |
|---|---|
| **Post Limit** | 63,206 characters |
| **Image Formats** | JPG, PNG, BMP, GIF, TIFF |
| **Image Max Size** | 10 MB |
| **Video Max** | 240 min, 10 GB |
| **API Rate Limit** | 200 calls/user/hour |
| **n8n Node** | `Facebook Graph API` (built-in) |
| **Auth Type** | Page Access Token |
| **Best Post Times** | Wed 11 AM, Fri 10-11 AM |

## Credential Setup
1. [developers.facebook.com/apps](https://developers.facebook.com/apps)
2. Create App → Business type
3. Add Facebook Login product
4. Graph API Explorer → Select your Page → Generate Page Access Token
5. Extend to Long-Lived Token (60 days)
6. In n8n: Credentials → New → **Facebook Graph API** → paste token

## Format Rules for Automation
- Posts to Pages (not personal profiles via API)
- Link posts get previews automatically
- Video posts get highest reach
- Questions and polls get best engagement
