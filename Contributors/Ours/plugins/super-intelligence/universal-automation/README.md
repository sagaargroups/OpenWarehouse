# 🌐 Universal Automation 2.0 — Brand Operating System Engine

> **Agents use Tools powered by Models. They store work in the Connector. The Master God sees everything.**

---

## Why 2.0 Exists

Universal Automation 1.0 had **skills** (passive instruction docs) and **MCP servers** (manual API wiring). The problems were fatal:

| Problem | 1.0 | 2.0 Solution |
|---------|-----|--------------|
| Skills were passive docs, not active agents | ✗ | 9 role-based agents with assigned tools |
| Outdated models (DALL-E, Runway Gen-2) | ✗ | Latest verified models (Nano Banana 2, Veo 3.1, Lyria 3) |
| No central config file | ✗ | `.env` = single source of truth for everything |
| No orchestrator | ✗ | Master God agent sees all tools, agents, channels |
| No connector between agents | ✗ | Google Sheets as central DB (agents write → next agent reads) |
| No channel concept | ✗ | 2 channel types: Free (organic) + Paid (amplified) |
| Adding a tool = rebuild everything | ✗ | Adding a tool = 1 line in `.env` |

---

## The Architecture

```
                     ┌─────────────────────────┐
                     │      YOU (Human)         │
                     │  "Launch Golu on IG"     │
                     └────────────┬────────────┘
                                  │
                     ┌────────────▼────────────┐
                     │    MASTER GOD AGENT     │
                     │                         │
                     │  Reads .env             │
                     │  Knows all tools        │
                     │  Knows all agents       │
                     │  Knows all channels     │
                     │  Reads master-dashboard │
                     │  Makes decisions        │
                     └────────────┬────────────┘
                                  │
              ┌───────────────────┼───────────────────┐
              │                   │                   │
     ┌────────▼────────┐ ┌───────▼────────┐ ┌───────▼────────┐
     │  CONTENT        │ │  PUBLISHER     │ │ INTELLIGENCE   │
     │  CREATOR        │ │                │ │ MANAGER        │
     │                 │ │                │ │                │
     │ Uses:           │ │ Uses:          │ │ Uses:          │
     │ • Nano Banana 2 │ │ • Buffer       │ │ • GA4          │
     │ • Veo 3.1       │ │ • Metricool    │ │ • Search Con.  │
     │ • Lyria 3       │ │ • WhatsApp     │ │ • Looker       │
     │ • Gemini 2.5    │ │ • Mailchimp    │ │ • Meta Insights│
     │ • CapCut        │ │ • WordPress    │ │ • Hotjar       │
     └────────┬────────┘ └───────┬────────┘ └───────┬────────┘
              │                  │                   │
              │          ┌───────▼────────┐          │
              │          │                │          │
              └─────────►│  CONNECTOR     │◄─────────┘
                         │  (Google       │
                         │   Sheets)      │
                         │                │
                         │ content-queue  │ ← Content Creator writes
                         │ publish-log    │ ← Publisher writes
                         │ weekly-report  │ ← Intelligence writes
                         │ master-dash    │ ← Master God reads ALL
                         └────────────────┘
```

---

## The 4 Layers

### Layer 1: CREATION (Making the Signal)
50+ granular tools for generating every type of content. Each tool wraps a specific AI model.

**Writing:** `TOOL_WRITE_BLOG`, `TOOL_WRITE_CAPTION`, `TOOL_WRITE_EMAIL`, `TOOL_WRITE_SCRIPT`, `TOOL_WRITE_SEO`
**Images:** `TOOL_IMAGE_PRODUCT`, `TOOL_IMAGE_SOCIAL`, `TOOL_IMAGE_AD`, `TOOL_IMAGE_LOGO`, `TOOL_IMAGE_VECTOR`, `TOOL_IMAGE_MOCKUP`, `TOOL_IMAGE_TEXT`, `TOOL_IMAGE_CONSISTENT`
**Video:** `TOOL_VIDEO_PRODUCT`, `TOOL_VIDEO_AD`, `TOOL_VIDEO_REEL`, `TOOL_VIDEO_CINEMATIC`, `TOOL_VIDEO_EDIT`
**Audio:** `TOOL_MUSIC_JINGLE`, `TOOL_MUSIC_UNDERSCORE`, `TOOL_VOICE_OVER`
**Design:** `TOOL_DESIGN_TEMPLATE`, `TOOL_DESIGN_UI`

### Layer 2: DISTRIBUTION (Firing the Signal)
Each tool maps to a real free-tier platform with specific limits.

`TOOL_POST_SOCIAL` (Buffer, 3 channels), `TOOL_POST_API` (Ayrshare, 20 posts/mo), `TOOL_EMAIL_SEND` (Mailchimp, 500 contacts), `TOOL_WHATSAPP`, `TOOL_GOOGLE_BUSINESS`, `TOOL_META_DIRECT` (unlimited FB/IG scheduling)

### Layer 3: INTELLIGENCE (Reading What Happened)
`TOOL_ANALYTICS_WEB` (GA4), `TOOL_ANALYTICS_SEO` (Search Console), `TOOL_ANALYTICS_DASHBOARD` (Looker Studio), `TOOL_ANALYTICS_SOCIAL` (Meta), `TOOL_ANALYTICS_KEYWORDS` (Ubersuggest), `TOOL_ANALYTICS_HEATMAP` (Hotjar)

### Layer 4: CONNECTOR (The Middle-Man)
**This is the missing piece that makes everything work.**

The Connector is a **Google Sheets spreadsheet** with multiple tabs. Each agent writes its output to a specific tab. The next agent in the chain reads from that tab. The Master God reads from ALL tabs.

| Sheet Tab | Who Writes | Who Reads | Columns |
|-----------|------------|-----------|---------|
| `content-queue` | Content Creator | Publisher | Brand, Type, Platform, Caption, Image URL, Video URL, Status, Scheduled Date |
| `publish-log` | Publisher | Intelligence | Platform, Post URL, Published At, Engagement |
| `seo-tracker` | Growth Manager | Content Creator | Keyword, Rank, Target, Page URL, Action |
| `weekly-report` | Intelligence | Master God | Week, Channel, Impressions, Clicks, Rate, Top Post, Recommendation |
| `sales-pipeline` | Sales | Conversation Mgr | Lead, Source, Stage, Value, Next Action |
| `conversation-log` | Conversation Mgr | Sales | Platform, Customer, Message, Sentiment |
| `master-dashboard` | All Agents | Master God | Agent, Last Report, Status, Key Metric, Next Task |

**Why Google Sheets?**
- Free, unlimited
- Real-time collaborative
- Has API (Google Sheets API v4) for programmatic read/write
- n8n can read/write to it via built-in node
- Any human can open it and see the entire operation at a glance
- Works as a lightweight CRM, content calendar, and ops dashboard in one

**Alternative Connectors:**
- **Notion** — Better for knowledge docs, but API is slower
- **AFFiNE** — Best for local-first, privacy-focused, open-source
- **Airtable** — Better database structure, but free tier is limited

---

## The Flow (End to End Example)

**You say:** "Create a launch post for Golu Snacks Potato Chips on Instagram"

```
Step 1: MASTER GOD reads .env
        → Identifies this needs: Content Creator + Publisher + Intelligence
        → Knows Golu Snacks brand core is in knowledge/brand/

Step 2: MASTER GOD → delegates to CONTENT CREATOR
        Content Creator:
        ├─ Reads knowledge/brand/ → Chilli Red, Namkeen Yellow, Healthy Green
        ├─ Uses TOOL_WRITE_CAPTION (Gemini 2.5 Flash) → Generates caption
        ├─ Uses TOOL_IMAGE_PRODUCT (Nano Banana 2) → Generates product hero shot
        ├─ Writes to Google Sheets → content-queue tab
        │   Row: {brand: "Golu Snacks", type: "image+caption", platform: "instagram",
        │         caption: "...", image_url: "...", status: "ready", scheduled: "2026-03-02 10:30"}
        └─ Reports to Master God: "Content ready for Golu Snacks IG post"

Step 3: MASTER GOD → delegates to PUBLISHER
        Publisher:
        ├─ Reads Google Sheets → content-queue tab → finds row with status "ready"
        ├─ Uses TOOL_POST_SOCIAL (Buffer) → Schedules IG post for 10:30 AM
        ├─ Uses TOOL_WHATSAPP → Sends product image to broadcast list
        ├─ Updates Google Sheets → content-queue status = "published"
        ├─ Writes to Google Sheets → publish-log tab
        └─ Reports to Master God: "Posted to Instagram + WhatsApp"

Step 4: (24 hours later) MASTER GOD → delegates to INTELLIGENCE
        Intelligence:
        ├─ Uses TOOL_ANALYTICS_SOCIAL (Meta Insights) → Pulls engagement
        ├─ Writes to Google Sheets → weekly-report tab
        │   Row: {channel: "instagram", impressions: 1240, clicks: 89, rate: "7.2%"}
        └─ Reports to Master God: "IG post got 7.2% engagement, above average"

Step 5: MASTER GOD decides
        → "WhatsApp had 45% higher response. Create more WhatsApp content."
        → Writes decision to master-dashboard tab
        → Delegates new task to Content Creator
```

---

## Project Structure

```
universal-automation/
│
├── .env                              ← MASTER REGISTRY (models, tools, channels, agents, API keys)
├── README.md                         ← You are here
│
├── agents/                           ← 9 role agents + 1 Master God
│   ├── master-god/AGENT.md           ← Supreme orchestrator (sees all, decides all)
│   ├── brand-architect/AGENT.md      ← Identity guardian
│   ├── content-creator/AGENT.md      ← Creates text, image, video, audio
│   ├── publisher/AGENT.md            ← Distributes across channels
│   ├── growth-manager/AGENT.md       ← SEO and organic reach
│   ├── paid-media/AGENT.md           ← Ads (inactive until organic runs)
│   ├── conversation-manager/AGENT.md ← DMs, emails, chatbot
│   ├── sales-conversion/AGENT.md     ← Leads, CRM, closing
│   ├── intelligence-manager/AGENT.md ← Analytics and reporting
│   └── finance-ops/AGENT.md          ← Invoicing and admin
│
├── tools/                            ← Tool wrappers and configs
│   ├── creation/                     ← Image, video, audio, writing tools
│   ├── distribution/                 ← Scheduling, email, social tools
│   ├── intelligence/                 ← Analytics, SEO, dashboard tools
│   └── connectors/                   ← Google Sheets, Notion, n8n bridges
│
├── knowledge/                        ← Persistent brand context (immutable core)
│   ├── brand/                        ← Colors, voice, story, logo rules
│   └── platforms/                    ← Platform-specific rules and formats
│
├── channels/                         ← Channel configurations
│   ├── free/                         ← Organic channel setups
│   └── paid/                         ← Paid channel configs
│
└── skills/ (LEGACY)                  ← Old 1.0 skill files (reference only)
```

---

## How to Add Anything

### Add a New AI Model
```env
# In .env Section 1:
MODEL_IMAGE_NEWMODEL=new-model-v5|provider|free-details|https://url.com
```

### Add a New Tool
```env
# In .env Section 2:
TOOL_IMAGE_NEWACTION=What it does|MODEL_IMAGE_NEWMODEL|creation|active|free-limit|https://url.com
```

### Add a Tool to an Agent
```env
# In .env Section 4, append to the agent's tool list:
AGENT_CONTENT_CREATOR=...|...,TOOL_IMAGE_NEWACTION|...|active
```

### Add a New Channel
```env
# In .env Section 3:
CHANNEL_TIKTOK=tiktok|free|active|11|TOOL_POST_SOCIAL
```

### Add a New Connector Tab
```env
# In .env Section 6:
SHEET_TAB_NEW_WORKFLOW=tab-name|Who writes|Who reads
```

**That's it. One line each. Plug and play.**
