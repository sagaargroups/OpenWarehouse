# 🤖 Social Posting Automation — Setup & Vision Guide

> **What is this?** A self-hosted, AI-ready social media command center running entirely on your Mac.
> You connect your social accounts once, then automate posting to all of them from a single place.

---

## 🧠 The Vision

Most people post manually to each platform. This is slow, inconsistent, and doesn't scale.

The professional approach is an **automation pipeline**:

```
You write content (once)
        ↓
n8n receives it (via webhook, schedule, or manual trigger)
        ↓
AI formats it per platform (optional)
        ↓
┌──────────────────────────────────────┐
│  Twitter/X  │  LinkedIn  │ Instagram │
│  YouTube    │  Facebook  │  TikTok   │
│  Threads    │  Pinterest │  + more   │
└──────────────────────────────────────┘
All posted simultaneously, perfectly formatted.
```

---

## 🏗️ What's Running (Architecture)

| Container | Role | Port |
|---|---|---|
| `n8n_main` | The workflow editor UI + webhook receiver | 5678 |
| `n8n_worker` | Background job executor (runs your automations) | — |
| `n8n_postgres` | Stores all your workflows, credentials, history | — |
| `n8n_redis` | Job queue between main and worker | — |

**Why two n8n containers?**
- `n8n_main` handles the web UI and incoming webhooks
- `n8n_worker` runs the actual automations in the background
- This is the **production pattern** — the UI never freezes while jobs are running
- You can scale to 4, 8, 10 workers without changing anything else: `docker compose scale n8n_worker=4`

---

## 🚀 First-Time Setup (Do this once)

### Step 1: Generate a Secure Encryption Key
Open Terminal and run:
```bash
openssl rand -hex 32
```
Copy the output and replace `changeme_replace_with_32char_random_string_now` in `.env`:
```env
N8N_ENCRYPTION_KEY=your_generated_key_here
```
> ⚠️ This key encrypts your stored API credentials. If you lose it, you lose access to all stored credentials. Save it somewhere safe (Notes app, password manager).

### Step 2: Start the Stack
Double-click **`1_start_n8n.command`**

First run takes ~2 minutes to pull images (~1GB total).

### Step 3: Create Your n8n Account
Go to `http://localhost:5678` → Create an account (stored locally, no cloud).

### Step 4: Connect Your First Social Platform
Go to `Settings → Credentials → New Credential`

**Platforms you can connect natively in n8n:**
- ✅ Twitter/X
- ✅ LinkedIn  
- ✅ Facebook
- ✅ Instagram (via Facebook Graph API)
- ✅ YouTube (via Google OAuth)
- ✅ Telegram
- ✅ Discord
- ✅ Slack
- ✅ WhatsApp Business

**For TikTok** (not natively supported): Use the HTTP Request node with TikTok's API.

---

## 📱 Getting API Credentials Per Platform

### Twitter / X
1. Go to [developer.twitter.com](https://developer.twitter.com)
2. Create an app → Apply for Elevated access (free)
3. Get: `API Key`, `API Secret`, `Access Token`, `Access Token Secret`
4. In n8n: Add credential → `Twitter OAuth1 API`

### LinkedIn
1. Go to [linkedin.com/developers/apps](https://www.linkedin.com/developers/apps)
2. Create app → Request `w_member_social` permission
3. Get: `Client ID`, `Client Secret`
4. In n8n: Add credential → `LinkedIn OAuth2 API`

### Facebook + Instagram
1. Go to [developers.facebook.com/apps](https://developers.facebook.com/apps)
2. Create app → Add "Instagram Graph API" product
3. Get a long-lived Page Access Token
4. In n8n: Add credential → `Facebook Graph API`

### YouTube
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create project → Enable "YouTube Data API v3"
3. Create OAuth 2.0 credentials
4. In n8n: Add credential → `Google OAuth2 API` (select YouTube scopes)

---

## 🔄 Workflow Ideas to Build

### 1. "Write Once, Post Everywhere" (The Core Workflow)
- **Trigger**: Webhook (a POST request with your content)
- **Steps**:
  1. Receive text + image URL
  2. AI node (OpenAI) → rewrite for each platform's style
  3. Post to Twitter (short + punchy)
  4. Post to LinkedIn (professional tone)
  5. Post to Instagram (caption + hashtags)
  6. Log to Google Sheets

### 2. "Schedule & Batch Post"
- **Trigger**: Schedule (e.g., every day at 9 AM)
- **Steps**:
  1. Read from a Google Sheet of scheduled posts
  2. Find today's posts
  3. Distribute to all platforms

### 3. "Affine → Social" (Connect to your Affine local instance)
- **Trigger**: Webhook from Affine when a document is published
- **Steps**:
  1. Read the document content from Affine's database
  2. AI summarizer → generate platform-specific versions
  3. Post everywhere

### 4. "Repurpose YouTube to Everything"
- **Trigger**: New YouTube video published
- **Steps**:
  1. Fetch transcript via YouTube API
  2. AI → Extract key points
  3. Twitter thread
  4. LinkedIn article
  5. Instagram carousel text

---

## 🔌 Connecting to Affine (Future)

When you're ready to link your Affine to this:

1. Affine stores documents in your local Postgres DB (`affine_postgres`)
2. n8n connects to that same DB via a Postgres node
3. Whenever a new doc appears, n8n triggers automatically

**n8n Postgres connection for Affine:**
```
Host: host.docker.internal   (special Mac Docker hostname for "my Mac")
Port: 5432
Database: affine
User: affine
Password: affine_password
```

---

## 🛡️ Security Notes

1. **Never commit your `.env` file** with real API keys to GitHub
2. The `N8N_ENCRYPTION_KEY` is critical — back it up
3. n8n stores all credentials encrypted in the Postgres DB
4. For production/VPS: add Nginx as a reverse proxy with HTTPS

---

## 📂 Folder Structure

```
social-posting-automation/
├── docker-compose.yml    ← Stack definition (n8n + PG + Redis)
├── .env                  ← Your secrets (never commit this to git!)
├── 1_start_n8n.command   ← Double-click to start
├── 2_open_n8n.command    ← Opens browser
├── 3_stop_n8n.command    ← Stops everything
├── workflows/            ← Export/import your n8n workflow JSON files here
│   └── README.md
└── SETUP_GUIDE.md        ← This file
```

---

## ⚡ Quick Reference Commands

| Action | Command |
|---|---|
| Start stack | `docker compose up -d` |
| Stop stack | `docker compose down` |
| View logs | `docker compose logs -f n8n` |
| Add more workers | `docker compose scale n8n_worker=4` |
| Backup workflows | Export from n8n UI → Settings → Import/Export |

---

## 🗺️ Roadmap / What's Next

- [ ] Build the "Write Once Post Everywhere" core workflow
- [ ] Connect OpenAI for AI-powered reformatting
- [ ] Link to Affine local DB as content source
- [ ] Add a simple web form to trigger posts (no-code content entry)
- [ ] Set up daily digest reports to your email
- [ ] When ready: Move to VPS + custom domain + HTTPS
