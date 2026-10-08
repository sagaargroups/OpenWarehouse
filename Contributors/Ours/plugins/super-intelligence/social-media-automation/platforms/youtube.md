# 🎬 YouTube Platform Config

## Quick Facts
| Property | Value |
|---|---|
| **Title Limit** | 100 characters |
| **Description Limit** | 5,000 characters |
| **Tags Limit** | 500 chars total |
| **Video Formats** | MP4, MOV, AVI, WMV |
| **Video Max Size** | 256 GB or 12 hours |
| **Thumbnail** | 1280x720 px, JPG/PNG, < 2 MB |
| **API Quota** | 10,000 units/day (upload = 1,600 units) |
| **n8n Node** | `YouTube` (built-in) |
| **Auth Type** | Google OAuth 2.0 |

## Credential Setup
1. [console.cloud.google.com](https://console.cloud.google.com)
2. Create Project → Enable **YouTube Data API v3**
3. Create Credentials → OAuth 2.0 Client → Web Application
4. Redirect URI: `http://localhost:5678/rest/oauth2-credential/callback`
5. You need: `Client ID` + `Client Secret`
6. In n8n: Credentials → New → **Google OAuth2 API** → Scope: `https://www.googleapis.com/auth/youtube.upload`

## Best Used For
- Uploading Shorts (< 60s vertical video)
- Updating video titles/descriptions in bulk
- Adding videos to playlists automatically
- Posting community tab updates
