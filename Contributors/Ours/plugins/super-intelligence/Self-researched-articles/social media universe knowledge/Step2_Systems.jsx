import { useState, useCallback, useRef } from "react";

// ─── FULL MARKDOWN CONTENT ────────────────────────────────────
const SECTIONS = [
  {
    id: "sys01",
    icon: "🏢",
    title: "SYS-01: Business Foundation",
    sub: "Legal · Banking · Branding · Domain",
    content: `## SYS-01 — BUSINESS FOUNDATION SETUP
### Purpose
Before you touch any client work, your OWN business must be legally and professionally set up. This is the layer everything else sits on.

---

### 1.1 BUSINESS REGISTRATION

| Step | What | Tool / Platform | Cost | Time |
|------|------|-----------------|------|------|
| Register Business | Sole Proprietorship or LLP | **🥇 Zoho Books** (auto-generates docs) / **🥈 Google Docs** (manual drafting) / **🥉 Microsoft Word** | ₹5K–15K (legal fees) | 3–7 days |
| GST Registration | Get GSTIN (mandatory if revenue > ₹20L/year) | **Government Portal: GST Network (gst.gov.in)** | Free | 3–5 days |
| Business PAN/TAN | Tax ID from Income Tax Dept | **IT Portal (incometax.gov.in)** | Free | 2–3 days |
| Bank Account | Dedicated business account | Any nationalized bank (HDFC, ICICI, Kotak preferred) | ₹0–500 | 1–2 days |

**80/20 Rule:** Register as Sole Proprietorship first (cheapest, fastest). Upgrade to LLP/Pvt Ltd when revenue crosses ₹10L/month.

---

### 1.2 BRANDING (YOUR VISUAL IDENTITY)

| Element | What to Create | Tool Options |
|---------|---------------|--------------|
| Logo | Simple, clean, memorable | **🥇 Zoho Sign** (for contracts) / **🥈 Canva** (design) / **🥉 Adobe Express** / **🏅 Figma** |
| Brand Colors | 2–3 colors max (primary, secondary, accent) | Any design tool above |
| Brand Font | 1 heading + 1 body font | Google Fonts (free) |
| Business Card | Digital + Physical | **🥇 Canva** / **🥈 Google Slides** / **🥉 Microsoft PowerPoint** |
| Portfolio Page | 1-page website showcasing work | **🥇 Zoho Sites** / **🥈 Google Sites** (free) / **🥉 LinkedIn Profile** / **🏅 Carrd.co** |

**RULE:** Your brand = your credibility. Spend 1 day here. Make it look professional. It costs nothing except time.

---

### 1.3 DOMAIN & EMAIL

| Item | Purpose | Options |
|------|---------|---------|
| Domain (.com/.in) | Professional URL | Namecheap / GoDaddy / Google Domains — ₹500–1,500/year |
| Professional Email | yourname@yourbusiness.com | **🥇 Zoho Mail** (free with Zoho One) / **🥈 Google Workspace** (₹150/user/month) / **🥉 Microsoft 365** (₹150/user/month) |
| Email Signature | Auto-appended to every email | Built into whichever email tool you choose |

**80/20:** Domain = ₹500. Professional email = instant credibility. Do both on Day 1.

---

### 1.4 LEGAL ESSENTIALS

| Document | What | Where to Get |
|----------|------|--------------|
| Service Agreement | Contract between you + client | **🥇 Zoho Sign** (e-sign) / **🥈 Google Docs + DocuSign** / **🥉 Microsoft Word + Adobe Sign** |
| NDA (Non-Disclosure) | Protects client info | Use template from Part 11 of Step 1 |
| Invoice Template | For billing | **🥇 Zoho Invoice** / **🥈 Google Sheets template** / **🥉 Microsoft Excel template** / **🏅 FreshBooks** |
| Privacy Policy | For your portfolio website | Free generators: termsfeed.com, iubenda.com |

---

### SYS-01 COMPLETION CHECKLIST
\`\`\`
☐ Business registered (Proprietorship / LLP)
☐ Bank account opened (business name)
☐ GST registered (if needed)
☐ Logo + brand colors defined
☐ Domain purchased
☐ Professional email set up
☐ Portfolio page live (even if just 1 page)
☐ Service agreement template ready
☐ Invoice template ready
\`\`\`
`
  },
  {
    id: "sys02",
    icon: "🎯",
    title: "SYS-02: CRM & Lead Management",
    sub: "Prospect Tracking · Pipeline · Follow-ups",
    content: `## SYS-02 — CRM & LEAD MANAGEMENT SYSTEM
### Purpose
A CRM (Customer Relationship Manager) tracks every potential client from first contact to paying client — and keeps paying clients happy forever. Without this, leads fall through cracks and you lose money.

---

### 2.1 THE PIPELINE STAGES (Same Regardless of Tool)

\`\`\`
STAGE 1: LEAD          → Someone you found (DM'd, met, referral)
STAGE 2: CONTACTED     → You sent first message / DM
STAGE 3: RESPONDED     → They replied back
STAGE 4: CALL BOOKED   → Discovery call scheduled
STAGE 5: PROPOSAL SENT → You sent your package/pricing
STAGE 6: NEGOTIATING   → Discussing terms / price
STAGE 7: WON ✅        → Client signed, payment received
STAGE 8: LOST ❌       → Said no (keep in list — follow up in 30 days)
\`\`\`

---

### 2.2 TOOL OPTIONS (Pick ONE)

| Tool | Cost | Best For | Key Features |
|------|------|----------|--------------|
| **🥇 Zoho CRM** | Free (up to 3 users) / ₹840/user/month | Solo + small teams | Pipeline view, lead scoring, email integration, WhatsApp integration, automation rules |
| **🥈 Google Sheets** | Free | Solo budget (zero cost) | Manual but works. Kanban via Trello (free) for visual pipeline |
| **🥉 Microsoft Dynamics 365** | ₹620/user/month | Microsoft ecosystem users | Full CRM, Teams integration |
| **🏅 HubSpot CRM** | Free (basic) | International clients | Beautiful UI, free forever for basics, paid upgrades for automation |
| **🏅 Freshsales** | ₹1,250/user/month | Growing agencies | AI-powered scoring, WhatsApp + email in one place |
| **🏅 Notion** | Free–₹600/month | Visual/creative operators | Flexible boards, docs + CRM in one |

---

### 2.3 WHAT TO STORE FOR EVERY LEAD

\`\`\`
FOR EACH LEAD, CAPTURE:
─────────────────────────
• Company Name
• Contact Name + Designation
• Phone / WhatsApp Number
• Email
• Instagram / LinkedIn Handle
• Industry / Business Type
• Estimated Monthly Budget (₹)
• Current Pain Point (why they need you)
• How You Found Them (DM / Referral / Event / Walk-in)
• Date First Contacted
• Stage in Pipeline
• Next Action + Due Date (e.g., "Call on Tuesday 3 PM")
• Notes (anything said in conversation)
\`\`\`

---

### 2.4 AUTOMATION RULES (Set Once, Runs Forever)

| Trigger | Action | Tool |
|---------|--------|------|
| New lead added | Auto-send welcome email | **🥇 Zoho CRM** / **🥈 HubSpot** / **🥉 Freshsales** |
| Lead moves to "Call Booked" | Auto-create calendar event | **🥇 Zoho CRM + Zoho Calendar** / **🥈 Google Calendar** / **🥉 Outlook** |
| Lead inactive for 7 days | Auto-send follow-up reminder to YOU | **🥇 Zoho CRM** / **🥈 Google Sheets + Google Apps Script** |
| Lead moves to "Won" | Auto-create project in Project Tool | **🥇 Zoho CRM → Zoho Projects** / **🥈 HubSpot → Trello** |
| Lead moves to "Lost" | Auto-schedule 30-day follow-up | **🥇 Zoho CRM** / **🏅 HubSpot** |

**80/20:** Set up 2 automations max at start: (1) follow-up reminder if inactive 7 days, (2) project creation when lead is won. These save 2+ hours/week.

---

### 2.5 WEEKLY CRM ROUTINE (15 MINUTES)

\`\`\`
Every Monday Morning — 15 mins:
☐ Review all leads in "Contacted" / "Responded" — any stale?
☐ Move stuck leads forward or mark as "Lost"
☐ Check upcoming calls this week
☐ Add any new leads from last week's outreach
☐ Review "Won" clients — any issues?
\`\`\`

---

### SYS-02 QUICK START (DAY 1 SETUP)
\`\`\`
1. Open Zoho CRM (or your chosen tool)       → 10 mins
2. Create the 8 pipeline stages above        → 10 mins
3. Add your first 5 leads manually           → 15 mins
4. Set up 1 automation (7-day follow-up)     → 10 mins
5. DONE. Total: 45 mins.
\`\`\`
`
  },
  {
    id: "sys03",
    icon: "📋",
    title: "SYS-03: Project & Task Management",
    sub: "Deadlines · Task Delegation · Client Tracking",
    content: `## SYS-03 — PROJECT & TASK MANAGEMENT SYSTEM
### Purpose
Every client = 1 project. Every project = 10–30 tasks per month. Without a system, you WILL miss deadlines. This system ensures zero missed deadlines, zero forgotten tasks, zero chaos.

---

### 3.1 PROJECT STRUCTURE (Same for Every Client)

\`\`\`
PROJECT: [Client Name] — [Month Year]
│
├── TASK GROUP: Content Creation
│   ├── Caption writing (Due: 5th)
│   ├── Graphics design (Due: 7th)
│   ├── Reels editing (Due: 8th)
│   └── Client approval (Due: 10th)
│
├── TASK GROUP: Posting & Engagement
│   ├── Schedule posts (Due: 10th)
│   ├── Daily engagement (Recurring: every day)
│   └── DM management (Recurring: every day)
│
├── TASK GROUP: Ads (if running)
│   ├── Ad creative creation (Due: 3rd)
│   ├── Campaign launch (Due: 5th)
│   ├── Weekly optimization (Recurring: every Mon)
│   └── ROAS check (Recurring: every Mon)
│
├── TASK GROUP: Reporting
│   ├── Data collection (Due: 28th)
│   ├── Report creation (Due: 29th)
│   └── Send to client (Due: 30th)
│
└── TASK GROUP: Admin
    ├── Invoice raised (Due: 1st)
    └── Payment follow-up (Due: 8th if unpaid)
\`\`\`

---

### 3.2 TOOL OPTIONS (Pick ONE)

| Tool | Cost | Best For | Key Features |
|------|------|----------|--------------|
| **🥇 Zoho Projects** | Free (up to 3 projects) / ₹180/user/month | Built-in with Zoho One | Gantt chart, task dependencies, time tracking, client portal |
| **🥈 Google Tasks + Keep** | Free | Solo, budget, Google users | Simple task lists, integrates with Google Calendar |
| **🥉 Microsoft To Do + Planner** | Free with M365 | Microsoft users | Clean UI, integrated with Outlook |
| **🏅 Trello** | Free (basic) | Visual learners | Card-based Kanban, very intuitive, power-ups for automation |
| **🏅 Asana** | Free (up to 10 users) | Team collaboration | Beautiful UI, timeline view, automations |
| **🏅 Notion** | Free–₹600/month | All-in-one (docs + tasks + wiki) | Extremely flexible, great for SOPs + tasks combined |
| **🏅 ClickUp** | Free (basic) | Feature-rich | Everything in one place, steep learning curve |

---

### 3.3 THE DAILY TASK DASHBOARD (What You See Every Morning)

\`\`\`
YOUR MORNING DASHBOARD — 5 MINS
═══════════════════════════════════════════
🔴 OVERDUE (Fix These First)
  • [Client A] — Reel edit due yesterday
  • [Client C] — Invoice unpaid (3 days)

🟡 DUE TODAY
  • [Client B] — Caption writing (3 captions)
  • [Client A] — Daily engagement check

🟢 UPCOMING (Tomorrow + Next 2 Days)
  • [Client C] — Ad creative due tomorrow
  • [Client B] — Client call booked: 3 PM

📌 RECURRING
  • All clients — Morning engagement check
  • All clients — DM monitoring
═══════════════════════════════════════════
\`\`\`

---

### 3.4 TASK TEMPLATES (Create Once, Reuse Forever)

When you add a NEW client, you don't create tasks from scratch. You COPY a template:

| Template Name | Tasks Inside | Used When |
|---------------|--------------|-----------|
| **New Client — Basic Management** | 12 tasks (content + posting + engagement + reporting) | Every new basic client |
| **New Client — With Ads** | 18 tasks (above + ad creation + optimization + ROAS) | Every client with paid ads |
| **New Client — Full Service** | 25 tasks (above + influencer + commerce + strategy) | Enterprise clients |
| **Monthly Reset** | Copy last month, update dates | Every 1st of month |

**Tool Support:**
- **🥇 Zoho Projects** → Project Templates feature (built-in)
- **🥈 Trello** → Board Templates (duplicate board)
- **🥉 Asana** → Project Templates
- **🏅 Notion** → Page Templates
- **🏅 Google Sheets** → Copy sheet + update dates

---

### 3.5 DELEGATION WORKFLOW (When You Hire Freelancers)

\`\`\`
YOU (Owner)                FREELANCER
─────────────              ───────────
1. Create task ──────────► 2. Sees task in shared project
3. Reviews work ◄──────── 4. Submits completed work
5. Approves / Requests edit
6. Marks task DONE
\`\`\`

| Step | Zoho Projects | Google | Microsoft | Trello |
|------|--------------|--------|-----------|--------|
| Assign task | Assignee field | Google Tasks (shared) | Planner | Card → Member |
| Share project | Client Portal | Shared Drive folder | Teams Channel | Board sharing |
| Approval step | Workflow approval | Manual (email) | Approvals app | Checklist item |
| Notification | Auto email/SMS | Auto email | Teams notification | Auto email |

---

### SYS-03 QUICK START
\`\`\`
1. Open Zoho Projects (or chosen tool)        → 5 mins
2. Create 1 project for your first client     → 10 mins
3. Add tasks using the Basic Management template → 15 mins
4. Set due dates for each task                → 10 mins
5. Pin project to your dashboard              → 2 mins
6. DONE. Check dashboard every morning.       → Total: 42 mins
\`\`\`
`
  },
  {
    id: "sys04",
    icon: "🎨",
    title: "SYS-04: Content Creation Workflow",
    sub: "Brief → Design → Review → Approve → Publish",
    content: `## SYS-04 — CONTENT CREATION WORKFLOW
### Purpose
Content creation is your CORE product. This workflow ensures every piece of content is: on-brand, approved before posting, created efficiently (not last-minute), and tracked for performance.

---

### 4.1 THE 5-STEP CONTENT FLOW (Same Regardless of Tools)

\`\`\`
STEP 1: BRIEF          → Define what to create (topic, format, goal)
         ↓
STEP 2: CREATE         → Design / edit / write the content
         ↓
STEP 3: REVIEW         → YOU check quality before client sees it
         ↓
STEP 4: CLIENT APPROVE → Client reviews and approves (or gives feedback)
         ↓
STEP 5: PUBLISH        → Schedule and post at optimal time
\`\`\`

---

### 4.2 CONTENT BRIEF TEMPLATE (Fill This BEFORE Creating Anything)

\`\`\`
═══════════════════════════════════════
CONTENT BRIEF — [Client] — [Date]
═══════════════════════════════════════
FORMAT:        [ ] Post  [ ] Reel  [ ] Story  [ ] Carousel  [ ] Ad
PLATFORM:      [ ] Instagram  [ ] Facebook  [ ] YouTube  [ ] LinkedIn
CONTENT PILLAR: [ ] Educational  [ ] Entertaining  [ ] Promotional  [ ] Social Proof
TOPIC:         _______________________________________________
HOOK IDEA:     _______________________________________________
KEY MESSAGE:   (What should audience feel/do after seeing this?)
               _______________________________________________
CTA:           [ ] Follow  [ ] Comment  [ ] Share  [ ] Buy  [ ] DM  [ ] Link
VISUAL STYLE:  [ ] Bright  [ ] Minimal  [ ] Bold  [ ] Trendy  [ ] Professional
REFERENCE:     (Link to similar content for style inspiration)
               _______________________________________________
DUE DATE:      _________________ | POSTING DATE: _____________
ASSIGNED TO:   _______________________________________________
═══════════════════════════════════════
\`\`\`

---

### 4.3 TOOL OPTIONS BY STEP

#### STEP 1 — BRIEFING
| Tool | Cost | How |
|------|------|-----|
| **🥇 Zoho Docs** | Free | Shared brief document per client |
| **🥈 Google Docs** | Free | Same — create brief, share link |
| **🥉 Microsoft Word Online** | Free | Same workflow |
| **🏅 Notion** | Free | Beautiful template-based briefs |

#### STEP 2 — CREATION
| Content Type | Primary Tool | Alternatives |
|--------------|--------------|--------------|
| Graphics / Posts | **🥇 Canva Pro** (₹500/mo) | **🥈 Adobe Express** / **🥉 Microsoft Designer** / **🏅 Figma** |
| Reels / Short Video | **🥇 CapCut** (Free) | **🥈 InShot** / **🥉 Adobe Premiere Rush** / **🏅 DaVinci Resolve** |
| Long Video | **🥇 DaVinci Resolve** (Free) | **🥈 Adobe Premiere Pro** / **🥉 iMovie** |
| Captions / Copy | **🥇 Claude AI** (you have) | **🥈 Gemini** / **🥉 ChatGPT** |
| Thumbnails | **🥇 Canva Pro** | **🥈 Adobe Photoshop** / **🥉 Microsoft Designer** |

#### STEP 3 — YOUR REVIEW
| Tool | How |
|------|-----|
| **🥇 Zoho Docs** | Comment on the content draft |
| **🥈 Google Docs / Drive** | Comment + suggest feature |
| **🥉 Microsoft 365** | Track changes + comments |

#### STEP 4 — CLIENT APPROVAL
| Tool | Cost | How |
|------|------|-----|
| **🥇 Zoho Sign** | Free (basic) | Send for e-approval |
| **🥈 Google Drive** | Free | Share folder, client comments in Docs |
| **🥉 WhatsApp Business** | Free | Send preview image, get thumbs up |
| **🏅 Notion** | Free | Shared page, client adds "Approved ✅" |

> **India Reality:** 80% of clients will approve via **WhatsApp**. Have a Notion/Google Doc backup for formal records.

#### STEP 5 — SCHEDULING & POSTING
See **SYS-05** for full scheduling system.

---

### 4.4 BATCH CREATION SYSTEM (Save 60% Time)

**Don't create content one by one. BATCH it.**

\`\`\`
BATCH DAY SCHEDULE (Every Tuesday for the whole week):
─────────────────────────────────────────────────────
Morning (2 hrs):   Write ALL captions for the week (all clients)
                   → Use AI (Claude / Gemini) to draft, you edit

Mid-Day (3 hrs):   Design ALL graphics for the week (all clients)
                   → Use Canva TEMPLATES (change text + image only)

Afternoon (2 hrs): Edit ALL Reels for the week (all clients)
                   → Use CapCut TEMPLATES (change clips + text)

Evening (1 hr):    Review all content, get approvals, schedule posting
─────────────────────────────────────────────────────
TOTAL: 8 hours creates a FULL WEEK of content for 5–7 clients
\`\`\`

**WHY BATCH WORKS:**
- Brain stays in ONE mode (writing / designing / editing) — 2x faster
- Templates reuse = 3x speed per piece
- AI drafts captions = you just edit (saves 30 min per caption)

---

### 4.5 CONTENT LIBRARY (Reuse System)

Store ALL created content in ONE place. Label it. Find it in 10 seconds.

| Folder Structure | Tool |
|-----------------|------|
| **🥇** /Clients/[Name]/[Month]/Graphics, Reels, Captions | Zoho WorkDrive |
| **🥈** Same structure | Google Drive |
| **🥉** Same structure | Microsoft OneDrive |
| **🏅** Tag-based search | Notion |

---

### SYS-04 QUICK START
\`\`\`
1. Create Content Brief template (copy from above)  → 10 mins
2. Make a shared folder for Client #1               → 5 mins
3. Create 3 Canva templates (post, story, carousel) → 20 mins
4. Write first week's briefs                        → 15 mins
5. Batch-create first week's content                → 2 hrs
6. DONE.
\`\`\`
`
  },
  {
    id: "sys05",
    icon: "📅",
    title: "SYS-05: Scheduling & Posting",
    sub: "Plan · Schedule · Auto-Post · Monitor",
    content: `## SYS-05 — SOCIAL MEDIA SCHEDULING & POSTING SYSTEM
### Purpose
Manual posting = you're glued to your phone at 8 PM every night. Scheduling = set it up once per week, posts go live automatically. This system saves you 5+ hours/week.

---

### 5.1 SCHEDULING TOOL OPTIONS

| Tool | Cost | Platforms Supported | Key Strength |
|------|------|---------------------|--------------|
| **🥇 Zoho Social** | Free (1 brand) / ₹500/month (3 brands) | Instagram, Facebook, YouTube, LinkedIn, Twitter | Built-in analytics, team collaboration, India-focused |
| **🥈 Meta Business Suite** | FREE | Instagram + Facebook ONLY | Official Meta tool — most reliable for IG + FB |
| **🥉 Microsoft (via Buffer)** | Free (1 channel) / ₹500/month | Multi-platform | Clean UI, best-time suggestions |
| **🏅 Later** | Free (1 post/month) / ₹1,200/month | Instagram, Facebook, Pinterest, TikTok | Visual drag-and-drop calendar, Instagram-first |
| **🏅 Hootsuite** | ₹1,600/month | All major platforms | Enterprise-grade, deep analytics |
| **🏅 Buffer** | Free (3 channels) / ₹500/month | Multi-platform | Simplest to use, great for beginners |

**80/20 RECOMMENDATION:**
- **0–3 clients:** Use **Meta Business Suite** (FREE) for Instagram + Facebook. It's official, reliable, zero cost.
- **3–10 clients:** Add **Zoho Social** (₹500/month). Manage all platforms in one place + analytics.
- **10+ clients:** Upgrade to **Hootsuite** or **Sprout Social** for team features.

---

### 5.2 THE WEEKLY SCHEDULING ROUTINE

\`\`\`
EVERY SUNDAY EVENING — 45 MINUTES:
═══════════════════════════════════════
1. Open your scheduling tool                    (5 mins)
2. Review content calendar for the week         (5 mins)
3. Upload all approved content (from SYS-04)    (15 mins)
4. Set posting times (use optimal times below)  (10 mins)
5. Preview each scheduled post                  (5 mins)
6. Hit "Schedule All" → DONE                    (5 mins)
═══════════════════════════════════════
Monday–Saturday: Posts go live automatically.
You only check engagement (10 mins morning).
\`\`\`

---

### 5.3 OPTIMAL POSTING TIMES — INDIA (IST)

| Platform | Best Time | Second Best | Worst Time |
|----------|-----------|-------------|------------|
| **Instagram** | 8–10 PM | 12–1 PM | 3–5 AM |
| **Facebook** | 8–11 PM | 12–2 PM | 2–4 AM |
| **YouTube** | 8–10 PM | 6–8 PM | 3–6 AM |
| **LinkedIn** | 8–9 AM | 12–1 PM | 11 PM–5 AM |
| **WhatsApp** | 10 AM–12 PM | 6–8 PM | After 10 PM |

> **India-specific:** Weekend posting (Sat 8 PM, Sun 12 PM) gets 30–50% MORE engagement than weekdays for Instagram + Facebook.

---

### 5.4 POSTING CHECKLIST (Before Every Post Goes Live)

\`\`\`
☐ Content matches the brief (topic, format, CTA)
☐ Caption is written + hashtags added
☐ Image/video quality is good (not blurry)
☐ UTM link added (if driving traffic to website)
☐ Tagged collaborators / brand partners (if any)
☐ Posting time is set to optimal window
☐ Post is previewed on mobile (how it actually looks)
☐ Client has approved (especially ads / promotional posts)
\`\`\`

---

### 5.5 HASHTAG STRATEGY (Reusable Sets)

Create 3–5 hashtag SETS per client. Rotate them. Never use same set twice in a row.

\`\`\`
EXAMPLE — Restaurant Client:
Set A: #[CityName]Food #[CityName]Eats #IndianFood #FoodPhotography #[RestaurantName]
Set B: #FoodLovers #[CityName]Restaurants #HomemadeFood #DailyMenu #FreshFood
Set C: #[CityName]FoodScene #EatLocal #FoodBlogger #[CityName]Foodie #MustEat[CityName]

USE: Set A on Monday, Set B on Wednesday, Set C on Friday → rotate weekly
\`\`\`

**Tool to manage hashtag sets:**
- **🥇 Zoho Social** — saved hashtag groups
- **🥈 Google Docs** — just a list you copy-paste
- **🥉 Notion** — reusable blocks
- **🏅 Later** — hashtag groups feature

---

### 5.6 WHAT HAPPENS AFTER POSTING (Engagement Protocol)

\`\`\`
WITHIN 1 HOUR OF POSTING:
☐ Reply to any comments that came in
☐ Like + comment on 5–10 similar accounts (boost algorithm)
☐ Share to Story (if Instagram — boosts reach 30%+)

WITHIN 24 HOURS:
☐ Reply to ALL comments and DMs
☐ Check engagement rate (is it above your client's average?)
☐ If low engagement: Story reminder + engage more

WITHIN 48 HOURS:
☐ Note if this content type performed well
☐ Log performance in your analytics tool (SYS-06)
\`\`\`

---

### SYS-05 QUICK START
\`\`\`
1. Set up Meta Business Suite (FREE)         → 15 mins
2. Connect Instagram + Facebook accounts     → 10 mins
3. Upload this week's approved content       → 20 mins
4. Schedule posts at optimal times           → 10 mins
5. Set Sunday reminder: "Schedule next week" → 2 mins
\`\`\`
`
  },
  {
    id: "sys06",
    icon: "📊",
    title: "SYS-06: Reporting & Analytics",
    sub: "Track · Measure · Report · Prove ROI",
    content: `## SYS-06 — CLIENT REPORTING & ANALYTICS SYSTEM
### Purpose
Reports = proof your work is valuable. Clients who see ROI stay forever. Clients who don't see proof leave. This system makes reporting take 20 minutes (not 3 hours).

---

### 6.1 THE 5 METRICS THAT MATTER (From Step 1, Part 8)

\`\`\`
1. ENGAGEMENT RATE    → (Likes + Comments + Shares + Saves) ÷ Reach × 100
2. FOLLOWER GROWTH    → (New Followers) ÷ (Starting Followers) × 100
3. WEBSITE CLICKS     → Bio link clicks + post link clicks
4. CONVERSION RATE    → Sales or Leads ÷ Website Visitors × 100
5. ROAS               → Revenue from Ads ÷ Ad Spend (ads only)
\`\`\`

---

### 6.2 DATA COLLECTION TOOLS

| Data Source | Where to Get It | Tool |
|-------------|-----------------|------|
| Instagram insights | Instagram app → Insights | Native (free) |
| Facebook insights | Facebook → Business Suite → Insights | Native (free) |
| YouTube analytics | YouTube Studio | Native (free) |
| LinkedIn analytics | LinkedIn → Analytics | Native (free) |
| Website traffic | Google Analytics 4 (GA4) | **🥈 Google Analytics** (FREE — must have) |
| Ad performance | Meta Ads Manager | Native (free) |
| Conversion tracking | Facebook Pixel + GA4 | Native (free) |

> **MUST HAVE:** Install **Google Analytics 4** on EVERY client website. It's free and tracks where traffic comes from.

---

### 6.3 REPORTING DASHBOARD TOOLS

| Tool | Cost | Best For | How It Works |
|------|------|----------|--------------|
| **🥇 Zoho Analytics** | Free (basic) / ₹350/month | Auto-pull from multiple sources, beautiful dashboards | Connect data sources → auto-refresh → share link with client |
| **🥈 Google Looker Studio** | FREE | Google data sources (Analytics, Sheets, Search Console) | Drag-drop dashboard builder, shareable via link |
| **🥉 Microsoft Power BI** | Free (desktop) / ₹750/month (online) | Microsoft ecosystem | Powerful but steeper learning curve |
| **🏅 Sprout Social Reports** | ₹2,500/month | Agencies with 10+ clients | Auto-generated PDF reports, white-label |
| **🏅 Databox** | Free (basic) | Quick dashboards | Pull from 70+ tools, simple setup |

**80/20 PICK:**
- **Solo (0–5 clients):** Use **Google Looker Studio** (FREE). Connect GA4 + manual data entry. Export as PDF.
- **Agency (5+ clients):** Use **Zoho Analytics** (₹350/month). Auto-pulls, team sharing, client portals.

---

### 6.4 MONTHLY REPORT TEMPLATE (Fill This in 20 Minutes)

\`\`\`
═══════════════════════════════════════════════
[CLIENT NAME] — SOCIAL MEDIA MONTHLY REPORT
Month: [Month Year] | Prepared by: [Your Name]
═══════════════════════════════════════════════

📊 AT A GLANCE
┌─────────────────┬──────────┬──────────┬─────────┐
│ Metric          │ Last Mo  │ This Mo  │ Change  │
├─────────────────┼──────────┼──────────┼─────────┤
│ Followers       │ [X]      │ [Y]      │ +[Z]%   │
│ Engagement Rate │ [X]%     │ [Y]%     │ +[Z]%   │
│ Total Reach     │ [X]      │ [Y]      │ +[Z]%   │
│ Website Clicks  │ [X]      │ [Y]      │ +[Z]%   │
│ Conversions     │ [X]      │ [Y]      │ +[Z]%   │
│ ROAS (if ads)   │ [X]x     │ [Y]x     │ +[Z]%   │
└─────────────────┴──────────┴──────────┴─────────┘

🏆 TOP 3 CONTENT (What Worked + Why)
1. [Post/Reel description] → [X] reach → Why: [reason]
2. [Post/Reel description] → [X] reach → Why: [reason]
3. [Post/Reel description] → [X] reach → Why: [reason]

💰 AD PERFORMANCE (if running ads)
• Total Spent:    ₹[X]
• Total Revenue:  ₹[Y]
• ROAS:           [Z]x
• Leads:          [X] at ₹[Y] per lead
• Best Ad:        [description] → [result]

📈 NEXT MONTH PLAN
• Action 1: [What] → Because [data reason]
• Action 2: [What] → Because [data reason]
• Action 3: [What] → Because [data reason]

💵 INVESTMENT vs VALUE
• Your Fee:       ₹[X]
• Value Delivered: [X] new followers, [Y] leads, ₹[Z] revenue
• Client ROI:     [X]x
═══════════════════════════════════════════════
\`\`\`

---

### 6.5 REPORTING WORKFLOW

\`\`\`
28th of Every Month:
  ☐ Collect data from all platform Insights    (30 mins)
  ☐ Pull GA4 data (website traffic + conversions) (10 mins)
  ☐ Pull ad data from Ads Manager              (10 mins)

29th:
  ☐ Fill in report template (20 mins per client)
  ☐ Create 1 visual chart (best performing content) (10 mins)
  ☐ Write "Next Month Plan" section            (10 mins)

30th:
  ☐ Export as PDF                              (2 mins)
  ☐ Send to client via email / WhatsApp        (2 mins)
  ☐ Schedule 15-min review call if needed      (2 mins)
\`\`\`

---

### SYS-06 QUICK START
\`\`\`
1. Install GA4 on client website (free)         → 20 mins
2. Set up Google Looker Studio dashboard        → 30 mins
3. Connect Instagram + Facebook data sources    → 15 mins
4. Download report template (from above)        → 5 mins
5. DONE. First report at end of Month 1.
\`\`\`
`
  },
  {
    id: "sys07",
    icon: "💰",
    title: "SYS-07: Invoicing & Payments",
    sub: "Invoice → Collect → Track → Reconcile",
    content: `## SYS-07 — INVOICING & PAYMENT COLLECTION SYSTEM
### Purpose
You do great work but forget to send invoices on time → you don't get paid on time → cash flow breaks → stress. This system ensures invoices go out on the 1st, payments come in by the 15th, and you always know where your money is.

---

### 7.1 THE INVOICING FLOW

\`\`\`
1st of Month:  Invoice auto-generated + sent to client
               ↓
1–7 Days:      Client reviews invoice
               ↓
8th–15th:      Payment due date (set terms: "Net 15")
               ↓
15th:          If unpaid → auto reminder sent
               ↓
20th:          If STILL unpaid → you call / WhatsApp personally
               ↓
25th:          Last warning (mention late fee in contract)
\`\`\`

---

### 7.2 INVOICING TOOL OPTIONS

| Tool | Cost | Key Features | Payment Collection |
|------|------|--------------|--------------------|
| **🥇 Zoho Invoice** | Free (up to 5 invoices/month) / ₹350/month | Auto-recurring, GST calc, PDF export, email + WhatsApp send | UPI, Card, Bank Transfer (via Razorpay/PayU integration) |
| **🥈 Google Sheets** | Free | Manual template, export as PDF | Manual UPI / Bank transfer (you check manually) |
| **🥉 Microsoft Excel** | Free | Same as Sheets | Manual collection |
| **🏅 FreshBooks** | ₹1,500/month | Beautiful invoices, time tracking, auto-reminders | Online payment links (Stripe, PayPal, Razorpay) |
| **🏅 Razorpay Invoices** | Free (2.5% per transaction) | India-native, UPI + Card + Wallet | Auto-collected via Razorpay |
| **🏅 Paytm for Business** | Free | India-native, QR code payments | UPI + Card + Wallet |

**80/20 PICK:**
- **Start:** Use **Zoho Invoice** (free). It handles GST, PDF, email, WhatsApp in one place.
- **If clients want online payment links:** Add **Razorpay** integration (2.5% fee per transaction, but instant collection).

---

### 7.3 INVOICE TEMPLATE (What MUST Be On Every Invoice)

\`\`\`
═══════════════════════════════════════════
INVOICE #[0001]
═══════════════════════════════════════════
FROM:  [Your Business Name]
       [Address]
       [GSTIN if registered]
       [Phone] | [Email]

TO:    [Client Business Name]
       [Client Address]
       [Client GSTIN if B2B]

DATE:           [DD/MM/YYYY]
DUE DATE:       [DD/MM/YYYY] (Net 15 days)
INVOICE FOR:    [Month Year] — Social Media Services

───────────────────────────────────────────
DESCRIPTION                          ₹ AMOUNT
───────────────────────────────────────────
Social Media Management              ₹ [X]
  • [Platform] — [X] posts/month
  • Engagement management
  • Monthly report

Content Creation (Reels)             ₹ [X]
  • [X] Reels produced

Paid Ads Management                  ₹ [X]
  • Management fee (15% of ₹[spend])
───────────────────────────────────────────
SUBTOTAL                             ₹ [X]
GST @ 18% (if applicable)           ₹ [X]
───────────────────────────────────────────
TOTAL DUE                            ₹ [X]
═══════════════════════════════════════════

PAYMENT OPTIONS:
• UPI: [your-upi-id]
• Bank: [Account Name / IFSC / Account No]
• Online: [Payment link if using Razorpay]

TERMS: Payment due within 15 days.
Late payment: 1.5% per week after due date.

Thank you for your business! 🙏
═══════════════════════════════════════════
\`\`\`

---

### 7.4 PAYMENT TRACKING DASHBOARD

Maintain ONE place where you see ALL money:

\`\`\`
MONTHLY PAYMENT TRACKER
═══════════════════════════════════════════════════════
Client          Invoice#  Amount    Due Date   Status     Paid On
─────────────── ─────────  ────────  ──────────  ─────────  ────────
[Client A]      001       ₹25,000   Feb 15     ✅ PAID    Feb 12
[Client B]      002       ₹18,000   Feb 15     ⏳ PENDING  —
[Client C]      003       ₹35,000   Feb 15     🔴 OVERDUE  —
[Client D]      004       ₹42,000   Feb 15     ✅ PAID    Feb 10
─────────────── ─────────  ────────  ──────────  ─────────  ────────
TOTAL INVOICED:  ₹1,20,000
TOTAL COLLECTED: ₹67,000
PENDING:         ₹18,000
OVERDUE:         ₹35,000
═══════════════════════════════════════════════════════
\`\`\`

**Tool for this tracker:**
- **🥇 Zoho Books** — auto-updates when payment received
- **🥈 Google Sheets** — manual update (check bank/UPI daily)
- **🥉 Microsoft Excel** — same as Sheets

---

### 7.5 GST RULES (India-Specific)

| Situation | GST Applicable? | Rate |
|-----------|-----------------|------|
| Annual revenue < ₹20 Lakh | No GST needed | 0% |
| Annual revenue ₹20L–1Cr | GST registration required | 18% |
| B2B invoice (client has GSTIN) | Add GST, client claims input credit | 18% |
| B2C invoice (individual client) | Add GST | 18% |

> **Until you cross ₹20L/year revenue, you can invoice WITHOUT GST.** This is actually an advantage — your prices look lower than GST-registered competitors.

---

### SYS-07 QUICK START
\`\`\`
1. Set up Zoho Invoice (free account)         → 15 mins
2. Add your business details + bank info      → 10 mins
3. Create invoice template (copy from above)  → 15 mins
4. Send first invoice to Client #1            → 5 mins
5. Set reminder: "Check payments on 15th"     → 2 mins
\`\`\`
`
  },
  {
    id: "sys08",
    icon: "💬",
    title: "SYS-08: Communication & Collaboration",
    sub: "Team · Client · Internal — All Organized",
    content: `## SYS-08 — COMMUNICATION & COLLABORATION SYSTEM
### Purpose
When communication is scattered (WhatsApp + Email + Instagram DM + calls), things get lost, clients feel ignored, and you waste 2 hours/day searching for old messages. This system organizes ALL communication into channels.

---

### 8.1 COMMUNICATION CHANNELS (What Goes Where)

\`\`\`
CHANNEL 1: CLIENT COMMUNICATION (Professional)
  → Use: Email / Zoho Cliq / Slack / MS Teams
  → For: Project updates, approvals, strategy calls, invoices
  → NOT for: Quick questions, casual chat

CHANNEL 2: QUICK CLIENT QUESTIONS (Fast)
  → Use: WhatsApp Business (India reality — everyone uses it)
  → For: "Is this approved?", "Sent the assets", quick confirmations
  → Rule: Always follow up important decisions via EMAIL (paper trail)

CHANNEL 3: INTERNAL / TEAM COMMUNICATION
  → Use: Zoho Cliq / Slack / MS Teams
  → For: Task updates between team members, freelancer coordination
  → NOT for: Client-facing conversations

CHANNEL 4: MEETINGS & CALLS
  → Use: Zoho Meet / Google Meet / Microsoft Teams
  → For: Onboarding calls, strategy reviews, monthly check-ins
  → Rule: Always send AGENDA before the call
\`\`\`

---

### 8.2 TOOL OPTIONS

| Purpose | Tool Options |
|---------|--------------|
| **Team Chat** | **🥇 Zoho Cliq** (free with Zoho One) / **🥈 Google Chat** (free with Workspace) / **🥉 Microsoft Teams** (free basic) / **🏅 Slack** (free basic) |
| **Video Calls** | **🥇 Zoho Meet** (free) / **🥈 Google Meet** (free) / **🥉 Microsoft Teams** (free) / **🏅 Zoom** (free 40-min limit) |
| **Email** | **🥇 Zoho Mail** (free) / **🥈 Gmail / Google Workspace** / **🥉 Outlook / Microsoft 365** |
| **File Sharing** | **🥇 Zoho WorkDrive** (free 5GB) / **🥈 Google Drive** (15GB free) / **🥉 Microsoft OneDrive** (5GB free) |
| **Client WhatsApp** | **WhatsApp Business** (free) — India must-have regardless of other tools |
| **Screen Recording** | **🥇 Loom** (free basic) / **🥈 Google Meet recording** / **🥉 Microsoft Teams recording** |

---

### 8.3 CLIENT COMMUNICATION TEMPLATES

#### Template 1: ONBOARDING EMAIL
\`\`\`
Subject: Welcome to [Your Business] — Let's Get Started! 🚀

Hi [Client Name],

Welcome aboard! I'm excited to work with [Business Name].

Here's what happens next:
1. I'll send a shared Google Doc / Zoho Doc with questions to fill (brand info, assets, goals)
2. Once I have that, I'll create your first content calendar
3. We'll have a 15-min kickoff call on [Date/Time] — link: [Meet link]

Please share the following by [Date]:
• Logo files (PNG with transparent background)
• Brand colors (if any)
• 5–10 product photos or brand images
• Any content you DON'T want posted (restrictions)

Looking forward to growing [Business Name] together!

Warm regards,
[Your Name]
[Your Business]
\`\`\`

#### Template 2: MONTHLY CHECK-IN
\`\`\`
Subject: [Client Name] — [Month] Report + Next Steps

Hi [Name],

Here's your [Month] social media report: [PDF attachment / Dashboard link]

Quick summary:
• Followers grew [X]% (from [A] to [B])
• Engagement rate: [X]% (industry avg: 3%)
• [X] leads generated / [X] sales from social

Top win this month: [1 specific achievement]

For next month, I'm planning:
• [Action 1]
• [Action 2]

Quick 10-min call to discuss? [Calendar link]

Thanks!
[Your Name]
\`\`\`

#### Template 3: APPROVAL REQUEST (WhatsApp)
\`\`\`
Hi [Name]! 👋
This week's content is ready for your review.

📎 Attached: [3 posts + 2 Reels previews]

Posting schedule:
Mon — [Post 1 description]
Wed — [Reel 1 description]
Fri — [Post 2 description]

Please approve by [Day] so I can schedule on time.
Any changes needed? Just reply here! 😊
\`\`\`

---

### 8.4 MEETING AGENDA TEMPLATE (Send 24 hrs Before)

\`\`\`
═══════════════════════════════════
MEETING AGENDA
[Client Name] — [Date] [Time] IST
Link: [Zoho Meet / Google Meet URL]
Duration: 15 minutes
═══════════════════════════════════
1. [0–3 min]  Quick wins from last month
2. [3–7 min]  Report walkthrough — key numbers
3. [7–12 min] Next month plan + strategy
4. [12–15 min] Questions / open discussion
═══════════════════════════════════
\`\`\`

---

### 8.5 RESPONSE TIME RULES (Set These With Clients)

| Channel | Response Time | Expectation |
|---------|--------------|-------------|
| Email | Within 4 hours (business hours) | Professional |
| WhatsApp | Within 2 hours (business hours) | India standard |
| Comments/DMs (client's social) | Within 1 hour | Critical for reputation |
| Urgent issues | Within 30 minutes | Emergencies only |
| After 8 PM | Next morning by 10 AM | Work-life balance |

> **India Reality:** Set clear "business hours" in your contract: 9 AM – 8 PM IST. After 8 PM responses are courtesy, not obligation.

---

### SYS-08 QUICK START
\`\`\`
1. Set up Zoho Cliq (free) for team chat       → 10 mins
2. Set up WhatsApp Business for client comms   → 15 mins
3. Save the 3 email templates above            → 10 mins
4. Share meeting agenda template               → 5 mins
5. Tell clients your response time rules       → 5 mins (mention in onboarding)
\`\`\`
`
  },
  {
    id: "sys09",
    icon: "🤖",
    title: "SYS-09: AI Workflow Integration",
    sub: "Claude · Gemini · Meta AI — Speed Up Everything",
    content: `## SYS-09 — AI WORKFLOW INTEGRATION SYSTEM
### Purpose
AI tools can cut your content creation time by 50–70%. This system shows EXACTLY where to use AI, which tool, and what prompt to use. AI doesn't replace you — it makes you 3x faster.

---

### 9.1 AI TOOL MAP (What's Best For What)

| Task | Best AI Tool | Why | Time Saved |
|------|--------------|-----|------------|
| Caption writing | **Claude** (Anthropic) | Best at brand voice, hooks, storytelling | 30 min → 5 min per caption |
| Content idea brainstorm | **Gemini** (Google) | Fast, integrates with Google Docs/Drive | 1 hr → 10 mins for 20 ideas |
| Ad copy (headlines + description) | **Claude** | Best at persuasive short-form copy | 20 min → 3 min per ad |
| Research (competitor, industry) | **Gemini** | Web search built in, real-time data | 2 hrs → 20 mins |
| Image generation (posts, graphics) | **Imagen** (Google) / **Leonardo** | AI-generated visuals for posts | 1 hr design → 5 min generation |
| Report writing (monthly) | **Claude** | Structure + professional tone | 1 hr → 15 mins |
| Email drafts | **Claude** / **Gemini** | Either works great | 20 min → 3 mins |
| Hashtag research | **Gemini** | Search-powered, real-time trends | 30 min → 5 mins |
| Video script writing | **Claude** | Best for structured scripts | 45 min → 10 mins |
| Social media strategy | **Claude** | Deep thinking, structured plans | 2 hrs → 30 mins |

---

### 9.2 READY-TO-USE AI PROMPTS (Copy, Paste, Edit)

#### PROMPT 1: Caption Writing
\`\`\`
Write an Instagram caption for [Business Name] which is a [industry].
Audience: [age range], [city/region], interested in [interests]
Post type: [photo of product / behind-the-scenes / educational tip]
Topic: [specific topic]
Tone: [fun and casual / professional / inspiring]
CTA: [follow / comment / buy / DM]
Include: A strong hook (first line), 3-4 sentences, relevant emojis, and 5 hashtags.
Language: English with a few Hindi words mixed in (Hinglish style)
\`\`\`

#### PROMPT 2: 20 Content Ideas
\`\`\`
Generate 20 Instagram content ideas for [Business Name] — a [industry] in [city].
Each idea should include:
- Post type (Reel / Carousel / Story / Post)
- Topic / title
- Why it will engage the audience
Organize by content pillar: Educational, Entertaining, Promotional, Social Proof.
Make them specific, not generic. India audience.
\`\`\`

#### PROMPT 3: Ad Copy (Meta Ads)
\`\`\`
Write 5 variations of Facebook/Instagram ad copy for:
Business: [Name]
Product/Service: [What]
Target Audience: [Who]
Goal: [Get leads / Drive sales / Build awareness]
Budget Feel: [Premium / Value / Urgent]

For each variation provide:
- Headline (max 30 characters)
- Description (max 125 characters)
- CTA button text
\`\`\`

#### PROMPT 4: Monthly Report Summary
\`\`\`
Write a professional but friendly summary paragraph for a social media monthly report.
Client: [Name]
Key numbers: Followers grew from [X] to [Y]. Engagement rate [X]%. [Z] leads generated.
Top achievement: [What]
Tone: Confident, data-backed, positive but honest.
Length: 3–4 sentences max.
\`\`\`

#### PROMPT 5: Competitor Analysis
\`\`\`
Analyze the social media strategy of [Competitor Name] in the [industry] space in India.
Look at: Content types they post, posting frequency, engagement levels, hashtags used, tone/voice.
Identify: What they do well, what's missing, opportunities for [Your Client] to differentiate.
Source: Their Instagram/Facebook/LinkedIn profiles.
\`\`\`

---

### 9.3 AI WORKFLOW (How It Fits Into SYS-04)

\`\`\`
CONTENT CREATION WITH AI:
══════════════════════════════════════════════
STEP 1: BRIEF (you write)                    5 mins
         ↓
STEP 2a: AI generates caption draft          2 mins  ← AI DOES THIS
STEP 2b: You edit caption (fix tone/brand)   3 mins  ← YOU DO THIS
STEP 2c: AI generates image idea             2 mins  ← AI SUGGESTS
STEP 2d: You create in Canva (using idea)    10 mins ← YOU DO THIS
         ↓
STEP 3: YOUR REVIEW                          3 mins
         ↓
STEP 4: CLIENT APPROVAL                      —
         ↓
STEP 5: SCHEDULE                             2 mins
══════════════════════════════════════════════
TOTAL WITHOUT AI: ~35 mins per post
TOTAL WITH AI:    ~20 mins per post
SAVINGS: 40%+ per piece of content
\`\`\`

---

### 9.4 AI LIMITATIONS (Know These — Don't Over-Trust)

| AI Can Do | AI CANNOT Do |
|-----------|--------------|
| Draft captions | Know your client's exact brand voice (you must edit) |
| Generate image ideas | Replace professional photography for real products |
| Write ad copy | Guarantee the copy will convert (test is needed) |
| Brainstorm content | Know what's trending RIGHT NOW on Instagram |
| Summarize reports | Access your client's private analytics data |

**RULE:** AI = first draft. YOU = final editor. Never post AI content without reading + editing it.

---

### 9.5 AI TOOLS COST MAP

| Tool | Cost | Access |
|------|------|--------|
| **Claude** (Anthropic) | Free (basic) / Paid plans | claude.ai |
| **Gemini** (Google) | Free (basic) / Google One upgrades | gemini.google.com |
| **ChatGPT** | Free (basic) / ₹1,600/month (Plus) | chatgpt.com |
| **Imagen** (Google) | Included with Gemini | gemini.google.com |
| **Meta AI** | Free | WhatsApp / Instagram / Facebook |
| **Leonardo** | Free (basic) | leonardo.ai |
| **Canva AI** | Included with Canva Pro | canva.com |

**80/20:** Use Claude for writing. Use Gemini for research + image ideas. Use Canva AI for design assist. Total cost: ₹0–500/month.

---

### SYS-09 QUICK START
\`\`\`
1. Bookmark the 5 prompts above             → 5 mins
2. Try Prompt 1 (Caption) for Client #1     → 5 mins
3. Edit the output to match client voice    → 3 mins
4. See how much time you saved              → 🤯
5. Integrate into your weekly batch process → ongoing
\`\`\`
`
  },
  {
    id: "sys10",
    icon: "🔄",
    title: "SYS-10: Master Automation Map",
    sub: "Set-Once-Run-Forever Automations",
    content: `## SYS-10 — MASTER AUTOMATION MAP
### Purpose
Automations = tasks that run WITHOUT you doing anything. Each automation below saves 30–120 minutes per week. Set them up once. They run forever. This is how you scale without burning out.

---

### 10.1 THE 10 AUTOMATIONS EVERY SOCIAL MEDIA BUSINESS NEEDS

| # | Automation | Trigger | Action | Tool Options |
|---|-----------|---------|--------|--------------|
| 1 | **New lead → Welcome email** | Lead added to CRM | Auto-send welcome email | **🥇 Zoho CRM** / **🥈 HubSpot** |
| 2 | **Lead inactive 7 days → Reminder** | No activity for 7 days | Remind YOU to follow up | **🥇 Zoho CRM** / **🥈 Google Sheets + Apps Script** |
| 3 | **Client won → Project created** | Lead moves to "Won" | Auto-create project with template tasks | **🥇 Zoho CRM → Zoho Projects** / **🥈 HubSpot → Trello** |
| 4 | **Invoice sent → Payment reminder** | 7 days after invoice sent | Auto-send payment reminder | **🥇 Zoho Invoice** / **🥈 FreshBooks** / **🥉 Razorpay** |
| 5 | **Monthly → Auto-generate invoice** | 1st of every month | Create invoice for all active clients | **🥇 Zoho Invoice** (recurring) / **🥈 FreshBooks** |
| 6 | **Post published → Track performance** | New post goes live | Log post details in tracker sheet | **🥇 Zoho Social** / **🥈 Later** / **🥉 Buffer** |
| 7 | **Client comment → Notification** | Someone comments on client's post | Notify YOU to reply | **🥇 Zoho Social** / **🥈 Meta Business Suite** |
| 8 | **New follower milestone → Report** | Followers hit X number | Auto-note in client project | **🥇 Zoho Social + Zoho Projects** |
| 9 | **Weekly → Content calendar reminder** | Every Sunday 6 PM | Remind to schedule next week's content | **🥇 Zoho Calendar** / **🥈 Google Calendar** / **🥉 Outlook** |
| 10 | **Monthly → Report reminder** | 27th of every month | Remind to prepare client report | **🥇 Zoho Calendar** / **🥈 Google Calendar** |

---

### 10.2 AUTOMATION PLATFORMS (Connect Tools Together)

Sometimes you need Tool A to trigger Tool B. These platforms bridge them:

| Platform | Cost | How It Works | Best For |
|----------|------|--------------|----------|
| **🥇 Zoho Flow** | Free (basic) / ₹500/month | Connect Zoho tools + 500+ third-party apps | If using Zoho ecosystem |
| **🥈 Google Apps Script** | Free | Write simple code to automate Google tools | If using Google Workspace |
| **🥉 Microsoft Power Automate** | Free (basic) | Connect Microsoft tools + others | If using Microsoft 365 |
| **🏅 Zapier** | Free (5 Zaps) / ₹1,500/month | Connect 5,000+ apps | Universal connector |
| **🏅 Make (formerly Integromat)** | Free (1,000 ops/month) / ₹900/month | Visual workflow builder, powerful | Complex multi-step automations |

**80/20:** Start with **Zoho Flow** (free, handles most Zoho-to-Zoho automations). Add **Zapier** or **Make** only if you need to connect non-Zoho tools.

---

### 10.3 AUTOMATION SETUP PRIORITY (Do In This Order)

\`\`\`
WEEK 1: Set up Automation #9 + #10
  → Calendar reminders (easiest, instant value)
  → Tool: Any calendar app. 5 mins each.

WEEK 2: Set up Automation #5
  → Auto-generate monthly invoices
  → Tool: Zoho Invoice recurring feature. 15 mins.

WEEK 3: Set up Automation #1 + #2
  → CRM welcome email + follow-up reminder
  → Tool: Zoho CRM. 30 mins.

WEEK 4: Set up Automation #3
  → Won lead → auto-create project
  → Tool: Zoho Flow (CRM → Projects). 20 mins.

MONTH 2: Set up Automation #4 + #6 + #7
  → Payment reminders + post tracking + comment alerts
  → Tool: Zoho Invoice + Zoho Social. 45 mins total.

MONTH 3: Set up Automation #8
  → Follower milestone tracking
  → Tool: Zoho Social + Zoho Projects via Flow. 30 mins.
\`\`\`

---

### 10.4 AUTOMATION HEALTH CHECK (Monthly)

\`\`\`
Every 1st of the Month — 10 Minutes:
═══════════════════════════════════
☐ Did all automations run correctly last month?
☐ Any failed automations? (Check Flow / Zapier logs)
☐ Any NEW automations needed based on last month's bottlenecks?
☐ Update any automations with changed processes
═══════════════════════════════════
\`\`\`

---

### 10.5 TIME SAVED BY AUTOMATIONS

\`\`\`
Automation                          Time Saved / Week
─────────────────────────────────   ─────────────────
Welcome emails                      30 mins
Follow-up reminders                 45 mins
Project creation (won clients)      30 mins
Invoice generation                  45 mins
Payment reminders                   20 mins
Post performance tracking           30 mins
Comment notifications               15 mins
Calendar reminders                  15 mins
─────────────────────────────────   ─────────────────
TOTAL SAVED:                        3 hrs 30 mins / week
MONTHLY SAVINGS:                    14 hrs / month
═══════════════════════════════════
14 hours/month = 1.5 extra clients you can handle
OR = 14 hours of personal life back
\`\`\`

---

### SYS-10 QUICK START
\`\`\`
1. Set up 2 calendar reminders (Sunday schedule + 27th report)  → 5 mins
2. Set up recurring invoice in Zoho Invoice                     → 15 mins
3. That's it for Day 1. Add more automations weekly.
\`\`\`
`
  },
  {
    id: "sys11",
    icon: "📦",
    title: "SYS-11: Master Tool Stack Summary",
    sub: "Budget Tiers · Tool Map · Migration Guide",
    content: `## SYS-11 — MASTER TOOL STACK SUMMARY
### The Complete Tool Map With Every Alternative

> **DESIGN PHILOSOPHY:** This system is TOOL-AGNOSTIC. The PROCESS (workflow) stays identical regardless of which tools you pick. Zoho is listed first because it offers the best value-for-money (especially Zoho One which bundles 50+ tools). But Google Workspace and Microsoft 365 are equally capable. Pick what you already know or what your team uses.

---

### 11.1 COMPLETE TOOL MAP — ALL CATEGORIES

| Category | 🥇 First Choice | 🥈 Second Choice | 🥉 Third Choice | 🏅 Other |
|----------|-----------------|-------------------|-------------------|----------|
| **CRM** | Zoho CRM | HubSpot | Salesforce | Freshsales, Notion |
| **Project Mgmt** | Zoho Projects | Trello | Microsoft Planner | Asana, ClickUp, Notion |
| **Email** | Zoho Mail | Gmail (Google Workspace) | Outlook (Microsoft 365) | Fastmail |
| **Calendar** | Zoho Calendar | Google Calendar | Outlook Calendar | Calendly (booking) |
| **Cloud Storage** | Zoho WorkDrive | Google Drive | Microsoft OneDrive | Dropbox |
| **Team Chat** | Zoho Cliq | Google Chat | Microsoft Teams | Slack |
| **Video Calls** | Zoho Meet | Google Meet | Microsoft Teams | Zoom |
| **Documents** | Zoho Docs | Google Docs | Microsoft Word Online | Notion |
| **Spreadsheets** | Zoho Sheets | Google Sheets | Microsoft Excel Online | Notion |
| **Invoicing** | Zoho Invoice | FreshBooks | QuickBooks | Razorpay Invoices |
| **Accounting** | Zoho Books | Xero | QuickBooks | FreshBooks |
| **Social Scheduling** | Zoho Social | Buffer | Hootsuite | Later, Planoly |
| **Design** | Canva Pro | Adobe Express | Microsoft Designer | Figma |
| **Video Editing** | CapCut (free) | DaVinci Resolve | Adobe Premiere Rush | iMovie |
| **AI Writing** | Claude (Anthropic) | Gemini (Google) | ChatGPT | Meta AI |
| **AI Image** | Imagen (Google) | Leonardo | Midjourney | DALL-E (OpenAI) |
| **Automation** | Zoho Flow | Zapier | Make (Integromat) | Google Apps Script |
| **E-Sign** | Zoho Sign | DocuSign | Adobe Sign | HelloSign |
| **Payment** | Razorpay | PayU India | Stripe | PhonePe Business |
| **WhatsApp Business** | WhatsApp Business API | Wati | Gupshup | ManyChat |
| **Reporting Dashboard** | Zoho Analytics | Google Looker Studio | Microsoft Power BI | Databox |

---

### 11.2 BUDGET TIER STACKS

#### TIER A: ZERO BUDGET (₹0/month — Just Starting)
\`\`\`
CRM:              HubSpot (free)
Project Mgmt:     Trello (free)
Email:            Gmail (free personal)
Storage:          Google Drive (15 GB free)
Chat:             WhatsApp (personal)
Video Calls:      Google Meet (free)
Docs:             Google Docs (free)
Social Schedule:  Meta Business Suite (free)
Design:           Canva (free)
Video Edit:       CapCut (free)
AI:               Claude free / Gemini free
Invoicing:        Google Sheets template
──────────────────────────────────
TOTAL COST: ₹0/month
CAPACITY:   1–2 clients
\`\`\`

#### TIER B: STARTER (₹2,000–3,500/month)
\`\`\`
CRM:              Zoho CRM (free tier)
Project Mgmt:     Zoho Projects (free tier)
Email:            Zoho Mail (free with Zoho One)
Storage:          Zoho WorkDrive (Zoho One)
Chat:             Zoho Cliq (Zoho One)
Video Calls:      Zoho Meet (Zoho One)
Docs:             Zoho Docs (Zoho One)
Social Schedule:  Meta Business Suite (free) + Zoho Social (₹500/mo)
Design:           Canva Pro (₹500/mo)
Video Edit:       CapCut (free)
AI:               Claude / Gemini
Invoicing:        Zoho Invoice (Zoho One)
Automation:       Zoho Flow (free basic)
──────────────────────────────────
TOTAL COST: ₹1,000–2,500/month (Zoho One ₹500 + Canva ₹500 + Zoho Social ₹500)
CAPACITY:   3–7 clients
\`\`\`

#### TIER C: PROFESSIONAL (₹5,000–10,000/month)
\`\`\`
Everything in Tier B PLUS:
Social Schedule:  Hootsuite or Sprout Social (₹1,600–4,000/mo)
Design:           Adobe Creative Suite (₹3,800/mo) OR stick with Canva Pro
Reporting:        Zoho Analytics (₹350/mo) OR Google Looker Studio (free)
Automation:       Zapier (₹1,500/mo) OR Make (₹900/mo)
Payment:          Razorpay (2.5% per transaction)
──────────────────────────────────
TOTAL COST: ₹5,000–10,000/month
CAPACITY:   8–15 clients
\`\`\`

#### TIER D: AGENCY (₹15,000–30,000/month)
\`\`\`
Everything in Tier C PLUS:
CRM:              Zoho CRM Pro / Salesforce
Social:           Sprout Social or Agorapulse (team features)
Project:          Zoho Projects Pro / Asana Pro
Reporting:        Sprout Social Reports (white-label PDFs)
Team:             Slack Pro / Microsoft Teams
Storage:          Google Workspace Business (₹600/user/month)
──────────────────────────────────
TOTAL COST: ₹15,000–30,000/month
CAPACITY:   20–50+ clients
\`\`\`

---

### 11.3 MIGRATION GUIDE (Switching Between Ecosystems)

If you start with Google and want to move to Zoho (or vice versa):

| From → To | What Moves Easily | What Needs Manual Work |
|-----------|-------------------|------------------------|
| Google → Zoho | Docs (import), Drive files (upload), Sheets (import) | Contacts, calendar events, email history |
| Microsoft → Zoho | Excel files (import), Word docs (import), OneDrive files | Outlook contacts, Teams history |
| Zoho → Google | Docs (export), Sheets (export), Drive (download + upload) | CRM data (export CSV → import to HubSpot) |
| Any → Any | Files (just download + re-upload) | Tool-specific data (contacts, projects) — always export CSV |

**RULE:** Always keep your DATA in exportable formats (CSV for contacts, PDF for reports, standard file formats). Never let one tool hold your data hostage.

---

### 11.4 THE "NEVER SWITCH" LIST (Tools You'll Use Forever)

| Tool | Why It Never Changes |
|------|---------------------|
| **Meta Business Suite** | Only way to officially manage Instagram + Facebook |
| **Meta Ads Manager** | Only way to run Facebook/Instagram ads |
| **Google Analytics 4** | Industry standard for website tracking — no alternative |
| **WhatsApp Business** | India's primary business communication channel |
| **Canva** | Dominates design for non-designers — won't be replaced |
| **CapCut** | Best free video editor with platform-native features |

These tools stay regardless of what ecosystem you choose for everything else.

---

### SYS-11 QUICK REFERENCE CARD
\`\`\`
PICK YOUR ECOSYSTEM:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IF you want ONE subscription for everything → ZOHO ONE
IF you're already in Google → GOOGLE WORKSPACE + Canva + CapCut
IF your company uses Microsoft → MICROSOFT 365 + Canva + CapCut
IF budget is ₹0 → FREE TIER (Google + HubSpot + Trello + Canva free)

REGARDLESS of choice, ALWAYS use:
  ✓ Meta Business Suite (free — Instagram + Facebook)
  ✓ Meta Ads Manager (free — run ads)
  ✓ Google Analytics 4 (free — website tracking)
  ✓ WhatsApp Business (free — client communication)
  ✓ Canva (free or Pro — design)
  ✓ CapCut (free — video editing)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
\`\`\`
`
  }
];

// ─── FULL MD EXPORT ──────────────────────────────────────────
function buildFullMarkdown() {
  let md = `# STEP 2: SOCIAL MEDIA BUSINESS SYSTEMS\n## Complete Operating System — Tool-Agnostic Design\n*Zoho First → Google / Microsoft / Meta Alternatives | India Market 2025–2026*\n\n`;
  md += `> **TOOL NOTATION:** 🥇 First choice (Zoho) | 🥈 Second (Google) | 🥉 Third (Microsoft) | 🏅 Other strong option\n\n---\n\n`;
  SECTIONS.forEach(s => { md += s.content + "\n\n---\n\n"; });
  md += `\n*END — Step 2 Systems Complete*\n*Use this alongside Step 1 (80/20 Knowledge) as your daily operating manual.*\n`;
  return md;
}

// ─── COMPONENT ────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("sys01");
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const contentRef = useRef(null);

  const current = SECTIONS.find(s => s.id === active) || SECTIONS[0];

  // Download .md file
  const handleDownload = useCallback(() => {
    const blob = new Blob([buildFullMarkdown()], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Step2_Social_Media_Business_Systems.md";
    a.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2200);
  }, []);

  // Copy current section
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(current.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }, [current]);

  // Simple markdown renderer
  const renderMd = (text) => {
    const lines = text.split("\n");
    const out = [];
    let inTable = false, tableRows = [], inCode = false, codeLines = [];

    const flushTable = () => {
      if (tableRows.length < 2) { tableRows.forEach(r => out.push(<p key={out.length} style={styles.p}>{r}</p>)); tableRows = []; inTable = false; return; }
      const headers = tableRows[0].split("|").map(c => c.trim()).filter(Boolean);
      const rows = tableRows.slice(2).map(r => r.split("|").map(c => c.trim()).filter(Boolean));
      out.push(
        <div key={out.length} style={styles.tableWrap}>
          <table style={styles.table}>
            <thead><tr>{headers.map((h, i) => <th key={i} style={styles.th}>{h}</th>)}</tr></thead>
            <tbody>{rows.map((row, ri) => <tr key={ri}>{row.map((cell, ci) => <td key={ci} style={styles.td}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
      tableRows = []; inTable = false;
    };

    lines.forEach((line, i) => {
      if (line.startsWith("```")) {
        if (inCode) { out.push(<pre key={out.length} style={styles.code}>{codeLines.join("\n")}</pre>); codeLines = []; inCode = false; }
        else { inCode = true; }
        return;
      }
      if (inCode) { codeLines.push(line); return; }
      if (line.includes("|") && line.trim().startsWith("|")) {
        if (!inTable) inTable = true;
        tableRows.push(line);
        return;
      }
      if (inTable) { flushTable(); }

      if (line.startsWith("## ")) { out.push(<h2 key={i} style={styles.h2}>{line.slice(3)}</h2>); }
      else if (line.startsWith("### ")) { out.push(<h3 key={i} style={styles.h3}>{line.slice(4)}</h3>); }
      else if (line.startsWith("#### ")) { out.push(<h4 key={i} style={styles.h4}>{line.slice(5)}</h4>); }
      else if (line.startsWith("---")) { out.push(<hr key={i} style={styles.hr} />); }
      else if (line.startsWith("> ")) { out.push(<div key={i} style={styles.blockquote}>{line.slice(2)}</div>); }
      else if (line.startsWith("| ")) { /* stray */ }
      else if (line.trim() === "") { out.push(<br key={i} />); }
      else {
        // Inline bold **x** and code `x`
        const parts = line.split(/(\*\*.*?\*\*|`[^`]+`)/g);
        const rendered = parts.map((p, pi) => {
          if (p.startsWith("**") && p.endsWith("**")) return <strong key={pi} style={{ color: "#e2c98a" }}>{p.slice(2, -2)}</strong>;
          if (p.startsWith("`") && p.endsWith("`")) return <code key={pi} style={styles.inlineCode}>{p.slice(1, -1)}</code>;
          return p;
        });
        out.push(<p key={i} style={styles.p}>{rendered}</p>);
      }
    });
    if (inTable) flushTable();
    if (inCode && codeLines.length) out.push(<pre key={out.length} style={styles.code}>{codeLines.join("\n")}</pre>);
    return out;
  };

  return (
    <div style={styles.root}>
      {/* Grain overlay */}
      <div style={styles.grain} />

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div>
            <span style={styles.badge}>STEP 2</span>
            <h1 style={styles.title}>Business Systems</h1>
            <p style={styles.subtitle}>Tool-Agnostic Operating Manual</p>
          </div>
          <div style={styles.headerBtns}>
            <button onClick={handleDownload} style={styles.dlBtn}>
              {downloaded ? "✓ Downloaded!" : "⬇ Download .md"}
            </button>
          </div>
        </div>
        {/* Tool legend */}
        <div style={styles.legend}>
          {[["🥇","Zoho (First)"],["🥈","Google"],["🥉","Microsoft"],["🏅","Other"]].map(([icon,label])=>(
            <span key={label} style={styles.legendItem}>{icon} <span style={{color:"#aaa"}}>{label}</span></span>
          ))}
        </div>
      </header>

      <div style={styles.body}>
        {/* Sidebar nav */}
        <nav style={styles.nav}>
          {SECTIONS.map(s => (
            <button key={s.id} onClick={() => { setActive(s.id); contentRef.current?.scrollTo?.(0,0); }} style={{...styles.navItem, ...(active === s.id ? styles.navActive : {})}}>
              <span style={styles.navIcon}>{s.icon}</span>
              <div style={styles.navText}>
                <div style={styles.navTitle}>{s.title.replace(/^SYS-\d+: /,"")}</div>
                <div style={styles.navSub}>{s.sub}</div>
              </div>
            </button>
          ))}
        </nav>

        {/* Main content */}
        <main style={styles.main} ref={contentRef}>
          {/* Section header */}
          <div style={styles.secHeader}>
            <div style={styles.secHeaderLeft}>
              <span style={styles.secIcon}>{current.icon}</span>
              <div>
                <h2 style={styles.secTitle}>{current.title}</h2>
                <p style={styles.secSub}>{current.sub}</p>
              </div>
            </div>
            <button onClick={handleCopy} style={styles.copyBtn}>{copied ? "✓ Copied" : "Copy Section"}</button>
          </div>

          {/* Rendered content */}
          <div style={styles.content}>
            {renderMd(current.content)}
          </div>

          {/* Nav arrows */}
          <div style={styles.navArrows}>
            {SECTIONS.findIndex(s=>s.id===active) > 0 && (
              <button onClick={()=>setActive(SECTIONS[SECTIONS.findIndex(s=>s.id===active)-1].id)} style={styles.arrowBtn}>← Previous</button>
            )}
            <div style={styles.arrowSpacer}/>
            {SECTIONS.findIndex(s=>s.id===active) < SECTIONS.length-1 && (
              <button onClick={()=>setActive(SECTIONS[SECTIONS.findIndex(s=>s.id===active)+1].id)} style={styles.arrowBtn}>Next →</button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

// ─── STYLES ──────────────────────────────────────────────────
const styles = {
  root: { minHeight:"100vh", background:"#0f1117", color:"#d4d0c8", fontFamily:"'Segoe UI', system-ui, sans-serif", position:"relative", overflow:"hidden" },
  grain: { position:"fixed", inset:0, backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")", pointerEvents:"none", zIndex:999, opacity:0.6 },

  header: { background:"linear-gradient(135deg, #1a1c24 0%, #14151a 100%)", borderBottom:"1px solid #2a2d35", padding:"18px 28px 12px" },
  headerInner: { display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:12 },
  badge: { display:"inline-block", background:"linear-gradient(135deg,#e2c98a,#c9a84c)", color:"#111", fontSize:11, fontWeight:800, padding:"3px 10px", borderRadius:20, letterSpacing:1.5, marginBottom:6 },
  title: { margin:0, fontSize:22, fontWeight:700, color:"#fff", letterSpacing:"-0.5px" },
  subtitle: { margin:"2px 0 0", fontSize:13, color:"#6b6e7a" },
  headerBtns: { display:"flex", gap:8 },
  dlBtn: { background:"linear-gradient(135deg,#e2c98a,#c9a84c)", color:"#111", border:"none", padding:"8px 18px", borderRadius:8, fontWeight:700, fontSize:13, cursor:"pointer", whiteSpace:"nowrap" },
  legend: { display:"flex", gap:18, marginTop:12, flexWrap:"wrap" },
  legendItem: { fontSize:12, display:"flex", alignItems:"center", gap:4, color:"#d4d0c8" },

  body: { display:"flex", minHeight:"calc(100vh - 110px)" },

  nav: { width:260, minWidth:260, background:"#12131a", borderRight:"1px solid #22252e", overflowY:"auto", padding:"12px 8px" },
  navItem: { display:"flex", alignItems:"center", gap:12, width:"100%", background:"transparent", border:"none", color:"#8a8d96", padding:"10px 12px", borderRadius:8, cursor:"pointer", textAlign:"left", transition:"all .15s" },
  navActive: { background:"#1e2028", color:"#fff", boxShadow:"inset 2px 0 0 #e2c98a" },
  navIcon: { fontSize:18, flexShrink:0 },
  navText: { overflow:"hidden" },
  navTitle: { fontSize:13, fontWeight:600, whiteSpace:"nowrap", textOverflow:"ellipsis", overflow:"hidden" },
  navSub: { fontSize:10.5, color:"#5c5f6a", marginTop:1 },

  main: { flex:1, overflowY:"auto", padding:"28px 32px", maxWidth:900 },
  secHeader: { display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20, flexWrap:"wrap", gap:10 },
  secHeaderLeft: { display:"flex", alignItems:"center", gap:14 },
  secIcon: { fontSize:32, lineHeight:1 },
  secTitle: { margin:0, fontSize:20, fontWeight:700, color:"#fff" },
  secSub: { margin:"2px 0 0", fontSize:13, color:"#6b6e7a" },
  copyBtn: { background:"#1e2028", border:"1px solid #2a2d35", color:"#aaa", padding:"6px 14px", borderRadius:6, fontSize:12, fontWeight:600, cursor:"pointer" },

  content: { lineHeight:1.7 },
  h2: { color:"#e2c98a", fontSize:18, fontWeight:700, margin:"22px 0 8px", borderBottom:"1px solid #2a2d35", paddingBottom:6 },
  h3: { color:"#fff", fontSize:15, fontWeight:600, margin:"18px 0 6px" },
  h4: { color:"#c9a84c", fontSize:14, fontWeight:600, margin:"14px 0 4px" },
  p: { margin:"4px 0", fontSize:14, color:"#b8b4ad" },
  hr: { border:"none", borderTop:"1px solid #2a2d35", margin:"18px 0" },
  blockquote: { background:"#161820", borderLeft:"3px solid #e2c98a", padding:"10px 16px", borderRadius:"0 8px 8px 0", margin:"12px 0", fontSize:13, color:"#aaa" },
  code: { background:"#161820", border:"1px solid #22252e", borderRadius:8, padding:"14px 18px", overflowX:"auto", fontSize:12.5, color:"#b8e6b0", whiteSpace:"pre", margin:"10px 0", fontFamily:"'SF Mono', 'Fira Code', monospace", lineHeight:1.6 },
  inlineCode: { background:"#1a1c24", border:"1px solid #2a2d35", borderRadius:4, padding:"1px 6px", fontSize:12.5, color:"#b8e6b0", fontFamily:"'SF Mono', 'Fira Code', monospace" },
  tableWrap: { overflowX:"auto", margin:"10px 0" },
  table: { width:"100%", borderCollapse:"collapse", fontSize:13 },
  th: { background:"#1a1c24", color:"#e2c98a", fontWeight:600, padding:"9px 12px", textAlign:"left", borderBottom:"2px solid #2a2d35", whiteSpace:"nowrap" },
  td: { padding:"8px 12px", borderBottom:"1px solid #1e2028", color:"#b8b4ad", whiteSpace:"nowrap" },

  navArrows: { display:"flex", justifyContent:"space-between", marginTop:32, paddingTop:20, borderTop:"1px solid #2a2d35" },
  arrowSpacer: { flex:1 },
  arrowBtn: { background:"#1e2028", border:"1px solid #2a2d35", color:"#e2c98a", padding:"8px 18px", borderRadius:8, fontSize:13, fontWeight:600, cursor:"pointer" },
};
