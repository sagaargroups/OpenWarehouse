# 📱 Social Media Automation — Setup & Connection Guide

> **Architecture:** One prompt → n8n formats for each platform → posts everywhere.
> Dynamic & plug-and-play. Each platform is a simple config file.

---

## 🏗️ How It Works

```
You (or your AI agent)
        │
        ▼
┌──────────────────────┐
│   n8n Webhook Node   │  ← Receives: { text, image_url, platforms[] }
│   POST /social-post  │
└──────────┬───────────┘
           │
     ┌─────┴─────┐
     │  ROUTER    │  ← Checks which platforms[] are enabled
     └─────┬─────┘
           │
     ┌─────┼─────┬──────┬───────┬────────┬─────────┬──────────┐
     ▼     ▼     ▼      ▼       ▼        ▼         ▼          ▼
   X/🐦  LinkedIn 📊  Insta  YouTube  Facebook  Pinterest  Snapchat
                        📸      🎬        📘       📌         👻
                                                        
Each platform branch:
  1. Loads platform config (char limits, format rules)
  2. Reformats text for that platform
  3. Posts via platform API
  4. Logs result (success/fail)
```

---

## 🚀 Quick Start (3 Steps)

### Step 1: n8n Must Be Running
```bash
# From z.base-tools/n8n-automation/
double-click 1_start_n8n.command
# or
docker compose up -d
```

### Step 2: Import the Workflow
1. Open **http://localhost:5678**
2. Click **"Add workflow"** → **"Import from file"**
3. Select `workflows/social-post-to-all.json` from this folder

### Step 3: Connect Your First Platform
1. In n8n → **Settings** → **Credentials** → **New Credential**
2. Follow the platform guides below (start with ONE — I recommend **X/Twitter**)
3. Test → if it works → add the next platform

---

## 📋 Platform Connection Guides

### 🐦 X / Twitter
**File:** `platforms/twitter.md`
**Difficulty:** ⭐⭐ Easy
**API Type:** OAuth 1.0a
**Cost:** Free (Basic tier: 1,500 tweets/month)

**Steps:**
1. Go to [developer.x.com/en/portal/dashboard](https://developer.x.com/en/portal/dashboard)
2. Create a new App → Give it a name
3. Go to **Keys and Tokens** tab
4. Generate: `API Key`, `API Secret`, `Access Token`, `Access Token Secret`
5. In n8n: **Settings → Credentials → New → Twitter OAuth API**
6. Paste all 4 keys → Save → Test

**n8n Node:** `Twitter` (built-in)
**Supported Actions:** Post tweet, post with image, reply, retweet

---

### 📊 LinkedIn
**File:** `platforms/linkedin.md`
**Difficulty:** ⭐⭐⭐ Medium
**API Type:** OAuth 2.0
**Cost:** Free

**Steps:**
1. Go to [linkedin.com/developers/apps](https://www.linkedin.com/developers/apps)
2. Create App → Company page required (create one if you don't have it)
3. Go to **Auth** tab → Add redirect URL: `http://localhost:5678/rest/oauth2-credential/callback`
4. Go to **Products** tab → Request access to **Share on LinkedIn** and **Sign In with LinkedIn using OpenID Connect**
5. Copy `Client ID` and `Client Secret`
6. In n8n: **Settings → Credentials → New → LinkedIn OAuth2 API**
7. Paste Client ID + Secret → Click "Connect" → Authorize

**n8n Node:** `LinkedIn` (built-in)
**Supported Actions:** Post text, post with image, post article

---

### 📸 Instagram
**File:** `platforms/instagram.md`
**Difficulty:** ⭐⭐⭐⭐ Hard (requires Facebook Business)
**API Type:** Facebook Graph API
**Cost:** Free

**Steps:**
1. You NEED a **Facebook Page** connected to your **Instagram Business Account**
2. Go to [developers.facebook.com/apps](https://developers.facebook.com/apps)
3. Create App → Type: Business → Add **Instagram Graph API** product
4. Go to **Graph API Explorer** → Generate a **Page Access Token**
5. Extend the token to a **Long-Lived Token** (60 days)
6. In n8n: Use **HTTP Request** node with the Graph API

**n8n Node:** `HTTP Request` (Instagram doesn't have a dedicated n8n node)
**Endpoint:** `https://graph.facebook.com/v18.0/{ig-user-id}/media`
**Supported Actions:** Post image, post carousel, post Reel (video URL)

> ⚠️ Instagram API **cannot post Stories** — only feed posts and Reels.

---

### 🎬 YouTube
**File:** `platforms/youtube.md`
**Difficulty:** ⭐⭐⭐ Medium
**API Type:** Google OAuth 2.0
**Cost:** Free

**Steps:**
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create Project → Enable **YouTube Data API v3**
3. Create **OAuth 2.0 Credentials** (Web Application type)
4. Add redirect URI: `http://localhost:5678/rest/oauth2-credential/callback`
5. Copy `Client ID` and `Client Secret`
6. In n8n: **Settings → Credentials → New → Google OAuth2 API**
7. Add scope: `https://www.googleapis.com/auth/youtube.upload`

**n8n Node:** `YouTube` (built-in)
**Supported Actions:** Upload video, update video details, add to playlist

> Note: YouTube is primarily for **video uploads**, not text posts. Best for: uploading Shorts, updating descriptions.

---

### 📘 Facebook
**File:** `platforms/facebook.md`
**Difficulty:** ⭐⭐⭐ Medium
**API Type:** Facebook Graph API
**Cost:** Free

**Steps:**
1. Go to [developers.facebook.com/apps](https://developers.facebook.com/apps)
2. Create App → Type: Business
3. Add **Facebook Login** product
4. In **Graph API Explorer**: Select your Page → Get `Page Access Token`
5. Required permissions: `pages_manage_posts`, `pages_read_engagement`
6. In n8n: **Settings → Credentials → New → Facebook Graph API**
7. Paste the Page Access Token

**n8n Node:** `Facebook Graph API` (built-in)
**Supported Actions:** Post to Page, post with image, schedule post

---

### 📌 Pinterest
**File:** `platforms/pinterest.md`
**Difficulty:** ⭐⭐⭐ Medium
**API Type:** OAuth 2.0
**Cost:** Free

**Steps:**
1. Go to [developers.pinterest.com](https://developers.pinterest.com)
2. Create App → Get `App ID` and `App Secret`
3. Add redirect URI: `http://localhost:5678/rest/oauth2-credential/callback`
4. Required scopes: `pins:read`, `pins:write`, `boards:read`, `boards:write`
5. In n8n: Use **HTTP Request** node with OAuth2

**n8n Node:** `HTTP Request` with OAuth2
**Endpoint:** `https://api.pinterest.com/v5/pins`
**Supported Actions:** Create Pin (image + link + description), create board

---

### 👻 Snapchat
**File:** `platforms/snapchat.md`
**Difficulty:** ⭐⭐⭐⭐⭐ Very Hard
**API Type:** Snap Marketing API
**Cost:** Requires Ad Account

**Steps:**
1. Go to [business.snapchat.com](https://business.snapchat.com)
2. Create Business Account → Set up Ad Account
3. Go to [developers.snap.com](https://developers.snap.com)
4. Create App → Get `Client ID` and `Client Secret`
5. The API is primarily for **ads**, not organic posting

> ⚠️ **Reality Check:** Snapchat does NOT have a public API for posting Stories or Snaps. Their API is **ads-only**. Organic posting must be done manually or via their internal tools. Best to skip this unless you're running paid ads.

---

### 🐙 GitHub (Community Posts / Releases / Discussions)
**File:** `platforms/github.md`
**Difficulty:** ⭐ Easy
**API Type:** Personal Access Token
**Cost:** Free

**Steps:**
1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Generate new token (classic) with scopes: `repo`, `write:discussion`
3. In n8n: **Settings → Credentials → New → GitHub API**
4. Paste token

**n8n Node:** `GitHub` (built-in)
**Supported Actions:** Create release, post discussion, create issue, update README

---

## 🔌 Adding a New Platform (Plug-and-Play)

When a new platform becomes available, follow this 3-step pattern:

### Step 1: Create Config File
Create `platforms/newplatform.md` with:
```markdown
# Platform Name
- API Docs URL: [link]
- Auth Type: OAuth2 / API Key / Bearer Token
- Character Limit: XXX
- Image Specs: WxH, max size
- Rate Limits: X posts per hour
- n8n Node: Built-in / HTTP Request
```

### Step 2: Add Credentials in n8n
1. Settings → Credentials → New
2. Choose the auth type
3. Paste your keys

### Step 3: Add Branch to Workflow
1. Open the `social-post-to-all` workflow
2. Add a new branch from the Router node
3. Connect the platform's API node
4. Set the format rules (character limit, hashtags, etc.)
5. Save → Done!

---

## 📂 Folder Structure

```
social-media-automation/
├── README.md                    ← This file (you are here)
├── platforms/                   ← Per-platform setup guides
│   ├── twitter.md
│   ├── linkedin.md
│   ├── instagram.md
│   ├── youtube.md
│   ├── facebook.md
│   ├── pinterest.md
│   ├── snapchat.md
│   └── github.md
├── workflows/                   ← n8n workflow JSON files
│   ├── social-post-to-all.json  ← Master workflow (import this)
│   └── README.md
└── env-template.md              ← Reference for all API keys
```

---

## 🔑 Master Credentials Reference

Quick reference of ALL keys you'll eventually need:

```env
# ── X / Twitter ──────────────────────────────
TWITTER_API_KEY=
TWITTER_API_SECRET=
TWITTER_ACCESS_TOKEN=
TWITTER_ACCESS_TOKEN_SECRET=

# ── LinkedIn ─────────────────────────────────
LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=

# ── Facebook / Instagram ─────────────────────
FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=
FACEBOOK_PAGE_ACCESS_TOKEN=
INSTAGRAM_USER_ID=

# ── YouTube (Google) ─────────────────────────
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# ── Pinterest ────────────────────────────────
PINTEREST_APP_ID=
PINTEREST_APP_SECRET=

# ── GitHub ───────────────────────────────────
GITHUB_PERSONAL_ACCESS_TOKEN=

# ── AI Model (GPT-4o for content formatting) ─
OPENAI_API_KEY=
```

> Store these in n8n's **Credentials** section — NOT in the .env file.
> n8n encrypts them with your `N8N_ENCRYPTION_KEY`.
