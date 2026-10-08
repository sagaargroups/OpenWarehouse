# 🔗 Connector Architecture — The Middle-Man

> **The missing layer that makes everything work. Without the connector, agents are isolated islands.**

---

## The Problem

You have 9 agents and 50+ tools. But:
- Content Creator generates an image → **Where does it go?**
- Publisher needs to know what to post → **Where does it look?**
- Intelligence Manager generates a report → **Who reads it?**
- A customer sends a WhatsApp message → **Where is it logged?**

Without a connector, every agent works in isolation. With a connector, they become a **team**.

---

## The Solution: Google Sheets as Operations Hub

**Why Google Sheets is the best free connector:**

| Factor | Google Sheets | Notion | AFFiNE | Airtable |
|--------|--------------|--------|--------|----------|
| **Free tier** | Unlimited | Free (individual) | Free (open source) | 1,200 records |
| **API access** | ✅ Free (Sheets API v4) | ✅ Free | ❌ No API yet | ✅ Free (limited) |
| **Real-time** | ✅ Instant updates | ⚠️ Slower | ✅ Local instant | ✅ Instant |
| **n8n integration** | ✅ Built-in node | ✅ Built-in node | ❌ No node | ✅ Built-in node |
| **Human readable** | ✅ Anyone can open | ✅ Good | ✅ Good | ✅ Good |
| **Mobile access** | ✅ Google Sheets app | ✅ Notion app | ❌ Limited | ✅ Airtable app |
| **Multi-brand** | ✅ One sheet per brand | ✅ Workspaces | ✅ Workspaces | ⚠️ Limited on free |

**Winner: Google Sheets** for operations. Use **Notion or AFFiNE** for knowledge docs.

---

## Sheet Structure (One Google Spreadsheet Per Brand)

### Tab 1: `content-queue`
**Who writes:** Content Creator Agent
**Who reads:** Publisher Agent

| Column | Type | Description |
|--------|------|-------------|
| ID | Auto-increment | Unique content ID |
| Brand | Text | "Golu Snacks" or "Red Lemon" |
| Content Type | Select | image / video / reel / blog / email / carousel |
| Platform | Multi-select | instagram, facebook, whatsapp, youtube, linkedin, blog, email |
| Caption | Long text | Full post caption with hashtags |
| Image URL | URL | Link to generated image (Google Drive / cloud storage) |
| Video URL | URL | Link to generated video |
| Audio URL | URL | Link to jingle/voiceover |
| Status | Select | draft → ready → scheduled → published → archived |
| Scheduled Date | DateTime | When to publish (IST) |
| Created By | Text | Agent name or "human" |
| Created At | DateTime | Timestamp |
| Notes | Long text | Special instructions, brand voice notes |

### Tab 2: `publish-log`
**Who writes:** Publisher Agent
**Who reads:** Intelligence Manager Agent

| Column | Type | Description |
|--------|------|-------------|
| ID | Auto-increment | Unique publish ID |
| Content ID | Reference | Links to content-queue row |
| Brand | Text | Which brand |
| Platform | Select | Where it was posted |
| Post URL | URL | Live link to the published post |
| Published At | DateTime | Actual publish timestamp |
| Tool Used | Text | Buffer / Metricool / WhatsApp / etc. |
| Initial Engagement | Number | Engagement count at 24hrs (filled by Intelligence) |
| Notes | Long text | Any issues during posting |

### Tab 3: `seo-tracker`
**Who writes:** Growth Manager Agent
**Who reads:** Content Creator Agent (for content briefs)

| Column | Type | Description |
|--------|------|-------------|
| Keyword | Text | Target search term |
| Current Rank | Number | Position in Google |
| Target Rank | Number | Goal position |
| Search Volume | Number | Monthly searches |
| Difficulty | Number | 0-100 difficulty score |
| Page URL | URL | Which page targets this keyword |
| Content Status | Select | published / in-progress / content-needed |
| Last Checked | Date | When rank was last verified |
| Action Needed | Text | Write blog / optimize page / build links |

### Tab 4: `weekly-report`
**Who writes:** Intelligence Manager Agent
**Who reads:** Master God Agent

| Column | Type | Description |
|--------|------|-------------|
| Week | Text | YYYY-W## format |
| Channel | Select | instagram / facebook / whatsapp / website / email / search |
| Impressions | Number | Total views/reach |
| Clicks | Number | Clicks to website or CTA |
| Engagement Rate | Percent | Likes+comments+shares / reach |
| Top Post | URL | Link to best performing post |
| Recommendation | Long text | What to do next based on data |

### Tab 5: `sales-pipeline`
**Who writes:** Sales Agent
**Who reads:** Conversation Manager (for follow-ups)

| Column | Type | Description |
|--------|------|-------------|
| Lead ID | Auto-increment | Unique lead ID |
| Name | Text | Customer/company name |
| Contact | Text | Phone / email |
| Source Channel | Select | instagram / whatsapp / search / referral / landing-page |
| Stage | Select | new → qualified → nurturing → proposal → negotiation → won / lost |
| Deal Value | Currency | Estimated ₹ value |
| Product Interest | Text | Which product or service |
| Last Contact | Date | When we last talked |
| Next Action | Text | What to do next |
| Notes | Long text | Context, objections, special requests |

### Tab 6: `conversation-log`
**Who writes:** Conversation Manager Agent
**Who reads:** Sales Agent (for warm leads)

| Column | Type | Description |
|--------|------|-------------|
| ID | Auto-increment | Message ID |
| Platform | Select | whatsapp / email / website-chat / instagram-dm |
| Customer | Text | Name or phone/email |
| Original Message | Long text | What customer said |
| Response Sent | Long text | What we replied |
| Sentiment | Select | positive / neutral / negative |
| Category | Select | faq / product-inquiry / order / complaint / lead |
| Escalate to Sales? | Checkbox | TRUE if buying intent detected |
| Timestamp | DateTime | When interaction happened |

### Tab 7: `master-dashboard`
**Who writes:** All 9 agents
**Who reads:** Master God Agent

| Column | Type | Description |
|--------|------|-------------|
| Agent | Select | brand-architect / content-creator / publisher / etc. |
| Last Report | DateTime | When they last reported |
| Status | Select | idle / working / blocked / error |
| Key Metric | Text | The single most important number or fact |
| Last Action | Text | What they did |
| Next Task | Text | What Master God assigned them |
| Notes | Long text | Strategic observations |

### Tab 8: `finance-log`
**Who writes:** Finance/Ops Agent
**Who reads:** Master God (for P&L overview)

| Column | Type | Description |
|--------|------|-------------|
| Month | Text | YYYY-MM |
| Type | Select | revenue / expense / invoice |
| Category | Select | product-sales / wholesale / ad-spend / tool-subscription / other |
| Amount | Currency | ₹ value |
| Channel Source | Text | Which channel generated this |
| Invoice ID | Text | INV-YYYY-XXXX |
| Notes | Long text | Context |

---

## The Flow Between Tabs

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Content     │     │  Publisher    │     │ Intelligence │
│  Creator     │────►│              │────►│   Manager    │
│              │     │              │     │              │
│ WRITES TO:   │     │ READS FROM:  │     │ READS FROM:  │
│ content-queue│     │ content-queue│     │ publish-log  │
│              │     │ WRITES TO:   │     │ WRITES TO:   │
│              │     │ publish-log  │     │ weekly-report│
└──────────────┘     └──────────────┘     └──────┬───────┘
                                                  │
┌──────────────┐     ┌──────────────┐     ┌──────▼───────┐
│ Conversation │     │    Sales     │     │  MASTER GOD  │
│   Manager    │────►│              │     │              │
│              │     │ READS FROM:  │     │ READS FROM:  │
│ WRITES TO:   │     │ convo-log   │     │ master-dash  │
│ convo-log    │     │ WRITES TO:   │     │ weekly-report│
│              │     │ sales-pipe   │     │ ALL tabs     │
└──────────────┘     └──────────────┘     └──────────────┘
```

---

## How n8n Fits In (Trigger Layer Only)

n8n is NOT used for AI decision-making. It is used ONLY as a dumb trigger:

| n8n Job | What It Does | Frequency |
|---------|-------------|-----------|
| Cron → Read content-queue → Trigger Publisher | Auto-publishes scheduled content | Every 15 minutes |
| Webhook → New WhatsApp message → Log to conversation-log | Captures inbound messages | Real-time |
| Cron → Pull analytics → Write to weekly-report | Automated data collection | Every Monday 6 AM |
| Cron → Check sales-pipeline → Send follow-up reminder | Ensures leads don't go cold | Daily 9 AM |

**n8n = Wires. Agents = Brain. Google Sheets = Shared Memory.**

---

## Alternative Operating Hubs

If you don't want Google Sheets, these work too:

| Hub | Best For | Setup |
|-----|---------|-------|
| **Notion** | Knowledge-heavy brands, clean docs | Create databases matching the tab structure above |
| **AFFiNE** | Privacy-first, local-first operation | Self-host, create table views |
| **Airtable** | Richer field types, better relational data | Free tier limited to 1,200 records |
| **Baserow** | Open-source Airtable alternative | Self-host, unlimited records |

For your use case (multiple brands, unlimited records, API access, mobile): **Google Sheets wins.**
