# 📌 Pinterest Platform Config

## Quick Facts
| Property | Value |
|---|---|
| **Pin Title** | 100 characters |
| **Pin Description** | 500 characters |
| **Image Ratio** | 2:3 (1000x1500 px recommended) |
| **Image Max Size** | 32 MB |
| **Video Max** | 15 min |
| **n8n Node** | `HTTP Request` (no dedicated node) |
| **Auth Type** | OAuth 2.0 |

## Credential Setup
1. [developers.pinterest.com](https://developers.pinterest.com)
2. Create App → Get App ID + Secret
3. Redirect URI: `http://localhost:5678/rest/oauth2-credential/callback`
4. Scopes: `pins:read`, `pins:write`, `boards:read`, `boards:write`
5. In n8n: HTTP Request node with OAuth2 credential

## API Endpoint
```
POST https://api.pinterest.com/v5/pins
{
  "board_id": "YOUR_BOARD_ID",
  "title": "Pin Title",
  "description": "Pin description with keywords",
  "media_source": {
    "source_type": "image_url",
    "url": "https://your-image-url.jpg"
  },
  "link": "https://your-website.com"
}
```
