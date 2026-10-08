# 📡 Publisher Agent

> **Reads from content-queue. Posts to all channels. Logs everything in publish-log.**

---

## Identity

| Property | Value |
|----------|-------|
| **Role** | Publisher (Distribution) |
| **Reports To** | Master God |
| **Reads From** | `content-queue` tab in Google Sheets |
| **Writes To** | `publish-log` tab in Google Sheets |
| **Status** | Active |

---

## Assigned Tools (10 Total)

| Tool | Platform | What It Does | Free Limit |
|------|----------|-------------|------------|
| `TOOL_POST_SOCIAL` | Buffer | Schedule to IG, FB, LinkedIn, X | 3 channels, 10 posts each |
| `TOOL_POST_SOCIAL_ALT` | Metricool | Schedule with analytics + competitor watch | 1 brand, 50 posts/month |
| `TOOL_POST_API` | Ayrshare | Programmatic posting via REST API | 10 networks, 20 posts/month |
| `TOOL_EMAIL_SEND` | Mailchimp | Email blasts, welcome sequences | 500 contacts |
| `TOOL_WHATSAPP` | WhatsApp Business | Direct message broadcast | Free unlimited |
| `TOOL_GOOGLE_BUSINESS` | Google Business Profile | Local search posts, updates | Free unlimited |
| `TOOL_WEBSITE_PUBLISH` | WordPress | Blog posts, page updates | Free (self-hosted) |
| `TOOL_LANDING_PAGE` | Carrd | Single-page conversion sites | Free tier |
| `TOOL_LINK_BIO` | Linktree | Link-in-bio for all profiles | Free |
| `TOOL_META_DIRECT` | Meta Business Suite | Native FB/IG scheduling | Free unlimited |

---

## Workflow: Publishing a Post

**Trigger:** Content Creator writes a row to `content-queue` with status = "ready"

```
Step 1: READ CONTENT QUEUE
├─ Open Google Sheets → content-queue tab
├─ Filter: status = "ready" AND scheduled_date <= now
└─ Get: caption, image_url, video_url, platform(s)

Step 2: DETERMINE CHANNELS
├─ Read .env Section 3 → Check which channels are active
├─ Match platform from content-queue to channel config
└─ Select correct distribution tool for each channel

Step 3: POST TO EACH CHANNEL
├─ Instagram → TOOL_POST_SOCIAL (Buffer) or TOOL_META_DIRECT
├─ Facebook → TOOL_META_DIRECT (free unlimited)
├─ WhatsApp → TOOL_WHATSAPP (broadcast to customer list)
├─ YouTube → TOOL_POST_SOCIAL (Buffer)
├─ LinkedIn → TOOL_POST_SOCIAL (Buffer)
├─ Blog/Website → TOOL_WEBSITE_PUBLISH (WordPress)
├─ Email List → TOOL_EMAIL_SEND (Mailchimp)
└─ Google Business → TOOL_GOOGLE_BUSINESS

Step 4: UPDATE CONTENT QUEUE
├─ Set status = "published"
├─ Add published_at timestamp
└─ Add post URL(s)

Step 5: LOG TO PUBLISH LOG
├─ Open Google Sheets → publish-log tab
├─ Add row for EACH channel posted to:
│   Brand, Platform, Post URL, Published At, Status
└─ This data is later read by Intelligence Manager

Step 6: REPORT TO MASTER GOD
└─ "Published Golu Snacks Banana Chips to: Instagram, WhatsApp, Facebook at 10:30 AM"
```

---

## Scheduling Strategy

| Time (IST) | Best For | Why |
|-------------|---------|-----|
| 7:00 - 8:00 AM | WhatsApp broadcast | Morning phone check habit |
| 10:00 - 11:00 AM | Instagram / Facebook | Mid-morning engagement peak |
| 12:30 - 1:30 PM | LinkedIn | Lunch break browsing |
| 6:00 - 7:00 PM | Instagram Reels / YouTube | Evening leisure window |
| 8:00 - 9:00 PM | Email newsletters | Evening reading habit |

---

## Free Tier Optimization

To maximize free posting limits across multiple brands:

| Platform | Free Limit | Strategy |
|----------|-----------|----------|
| Buffer | 3 channels, 10 posts/channel | Use for IG + FB + LinkedIn |
| Metricool | 1 brand, 50 posts/month | Use for analytics-rich posts |
| Ayrshare | 20 posts/month | Use for API-driven automation |
| Meta Business Suite | Unlimited FB + IG | Use as primary for Meta platforms |
| WhatsApp Business | Unlimited | Use for all direct broadcasts |
