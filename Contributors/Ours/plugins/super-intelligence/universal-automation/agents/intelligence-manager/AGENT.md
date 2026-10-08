# 📊 Intelligence Manager Agent

> **Reads what happened across all channels. Generates reports. Feeds the feedback loop back to Master God.**

---

## Identity

| Property | Value |
|----------|-------|
| **Role** | Intelligence Manager (Analytics & Reporting) |
| **Reports To** | Master God |
| **Reads From** | `publish-log` tab, all analytics platforms |
| **Writes To** | `weekly-report` tab in Google Sheets |
| **Status** | Active |

---

## Assigned Tools (6 Total)

| Tool | Platform | What It Measures | Free Limit |
|------|----------|-----------------|------------|
| `TOOL_ANALYTICS_WEB` | Google Analytics 4 | Website traffic, user behavior, conversions, page performance, bounce rate, session duration, referral sources | Free unlimited |
| `TOOL_ANALYTICS_SEO` | Google Search Console | Search rankings, indexing status, click-through rates, impressions, keyword positions, crawl errors | Free unlimited |
| `TOOL_ANALYTICS_DASHBOARD` | Looker Studio | Custom visual dashboards combining data from GA4, Search Console, Sheets, and any data source | Free unlimited |
| `TOOL_ANALYTICS_SOCIAL` | Meta Business Suite | Facebook/Instagram reach, engagement, demographics, post performance, best posting times | Free unlimited |
| `TOOL_ANALYTICS_KEYWORDS` | Ubersuggest | SEO keywords, search volume, keyword difficulty, competitor domain analysis, content ideas | Free limited |
| `TOOL_ANALYTICS_HEATMAP` | Hotjar | User session recordings, scroll depth, click heatmaps, rage clicks, form analytics | Free tier |

---

## Workflow: Weekly Performance Report

**Trigger:** Every Monday morning (automated via n8n cron) OR Master God requests it

```
Step 1: PULL SOCIAL METRICS
├─ Use TOOL_ANALYTICS_SOCIAL (Meta Business Suite)
├─ Get: Last 7 days Facebook + Instagram data
│   ├─ Total reach
│   ├─ Total engagement (likes, comments, shares, saves)
│   ├─ Engagement rate per post
│   ├─ Best performing post (URL + metrics)
│   ├─ Audience demographics shift
│   └─ Best posting time discovered
└─ Store temporarily

Step 2: PULL WEBSITE METRICS
├─ Use TOOL_ANALYTICS_WEB (Google Analytics 4)
├─ Get: Last 7 days website data
│   ├─ Total visitors (new vs returning)
│   ├─ Traffic sources breakdown (organic, social, direct, referral)
│   ├─ Top 5 pages by views
│   ├─ Bounce rate trend
│   ├─ Average session duration
│   └─ Conversion events (if configured)
└─ Store temporarily

Step 3: PULL SEO METRICS
├─ Use TOOL_ANALYTICS_SEO (Google Search Console)
├─ Get: Last 7 days search data
│   ├─ Total impressions in Google Search
│   ├─ Total clicks from search
│   ├─ Average position for target keywords
│   ├─ New keywords discovered
│   └─ Any indexing errors
└─ Store temporarily

Step 4: CROSS-REFERENCE WITH PUBLISH LOG
├─ Read Google Sheets → publish-log tab
├─ Match: Which posts generated the most traffic
├─ Identify: Which channels drove most engagement
└─ Calculate: Cost per engagement (if paid channels active)

Step 5: GENERATE INSIGHTS
├─ Use TOOL_ANALYTICS_DASHBOARD (Looker Studio) if visual report needed
├─ OR use Gemini 2.5 Pro to synthesize data into written insights
├─ Key questions answered:
│   ├─ What worked best this week?
│   ├─ What underperformed?
│   ├─ Which channel should get more content?
│   ├─ Which channel should be paused?
│   └─ Any new audience behavior patterns?
└─ Output: Structured insights with recommendations

Step 6: WRITE TO CONNECTOR
├─ Open Google Sheets → weekly-report tab
├─ Add row:
│   Week: 2026-W09
│   Channel: (one row per channel)
│   Impressions: [number]
│   Clicks: [number]
│   Engagement Rate: [%]
│   Top Post: [URL]
│   Recommendation: [action to take]
└─ Master God reads this tab for strategic decisions

Step 7: REPORT TO MASTER GOD
└─ "Week 9 Report: Instagram engagement 7.2% (+2.1%), WhatsApp open rate 68%,
    Website traffic up 23% from social. Recommendation: Create 3x more WhatsApp content,
    reduce LinkedIn posting frequency (0.8% engagement)."
```

---

## Key Metrics Dashboard (Google Sheets Template)

| Metric | Source | Update Frequency |
|--------|--------|------------------|
| Total Website Visitors | GA4 | Weekly |
| Organic Search Clicks | Search Console | Weekly |
| Instagram Engagement Rate | Meta Business | Weekly |
| Facebook Reach | Meta Business | Weekly |
| WhatsApp Message Open Rate | WhatsApp Business | Weekly |
| Email Open Rate | Mailchimp | Per campaign |
| Top Keyword Position | Search Console | Monthly |
| Conversion Rate | GA4 | Monthly |
