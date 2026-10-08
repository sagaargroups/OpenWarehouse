# 👻 Snapchat Platform Config

## Quick Facts
| Property | Value |
|---|---|
| **API Type** | Marketing / Ads API only |
| **Organic Posting** | ❌ NOT available via API |
| **n8n Node** | `HTTP Request` |
| **Auth Type** | OAuth 2.0 |

## ⚠️ Important Reality Check
Snapchat **does NOT provide a public API for organic posting** (Stories, Snaps, Spotlight).

Their API is exclusively for:
- Running paid ad campaigns
- Creating ad creatives
- Audience targeting
- Campaign analytics

## What You CAN Automate
- Create and manage ad campaigns
- Upload ad creatives
- Pull campaign analytics reports
- Audience insights

## What You CANNOT Automate
- Post Stories
- Send Snaps
- Post to Spotlight
- Any organic content

## Credential Setup (Ads Only)
1. [business.snapchat.com](https://business.snapchat.com) → Create Business Account
2. [developers.snap.com](https://developers.snap.com) → Create App
3. Get `Client ID` + `Client Secret`
4. Requires an active Ad Account with billing

## Recommendation
Skip Snapchat for organic social automation. Use it manually or through their app only.
If you run paid ads, set up via the Marketing API.
