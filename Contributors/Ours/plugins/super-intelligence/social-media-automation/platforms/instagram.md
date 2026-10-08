# 📸 Instagram Platform Config

## Quick Facts
| Property | Value |
|---|---|
| **Caption Limit** | 2,200 characters |
| **Hashtag Limit** | 30 (recommend 8-15) |
| **Image Formats** | JPG, PNG |
| **Image Ratio** | 1:1 (square), 4:5 (portrait), 1.91:1 (landscape) |
| **Image Max Size** | 30 MB |
| **Video Max** | 60s (Reel), 90s (Reel extended) |
| **API Rate Limit** | 25 posts per 24 hours |
| **n8n Node** | `HTTP Request` (no dedicated node) |
| **Auth Type** | Facebook Graph API (OAuth 2.0) |
| **Best Post Times** | Mon/Thu 11 AM, Tue 2 PM |

## Credential Setup
1. Requires: Facebook Business Page + Instagram Business Account (linked)
2. [developers.facebook.com/apps](https://developers.facebook.com/apps)
3. Create App → Business type → Add Instagram Graph API
4. Get Long-Lived Page Access Token via Graph API Explorer
5. Find your Instagram User ID: Graph API → `me/accounts` → get page ID → `{page-id}?fields=instagram_business_account`
6. In n8n: Use **HTTP Request** node with Bearer token

## API Endpoints
```
# Create media container
POST https://graph.facebook.com/v18.0/{ig-user-id}/media
  ?image_url=YOUR_IMAGE_URL
  &caption=YOUR_CAPTION
  &access_token=TOKEN

# Publish the container
POST https://graph.facebook.com/v18.0/{ig-user-id}/media_publish
  ?creation_id=CONTAINER_ID
  &access_token=TOKEN
```

## Format Rules for Automation
- Image is REQUIRED (no text-only posts)
- Caption: hook in first line, hashtags at end
- Cannot post Stories via API
- Carousel: up to 10 images
