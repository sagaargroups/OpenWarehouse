---
description: Generate performance reports and analytics digests
---

# 📊 Analytics Reporter Skill

## What This Skill Does
Pulls data from platforms and generates human-readable reports.
Weekly digests, monthly summaries, competitor comparisons.

## When to Use
- "Give me a weekly social media report"
- "How did my posts perform this week?"
- "Compare my metrics to last month"
- "What content performed best?"

## Report Templates

### Weekly Social Digest
```markdown
# 📊 Weekly Social Report — [Date Range]

## 🏆 Top Performer
[Best performing post + why it worked]

## Platform Breakdown
| Platform | Posts | Impressions | Engagement | Followers +/- |
|---|---|---|---|---|

## 💡 Insights
1. [What worked]
2. [What didn't]
3. [Recommendation for next week]

## 📅 Next Week Plan
- Topic 1: [platform targets]
- Topic 2: [platform targets]
```

### Monthly Growth Report
```markdown
# 📈 Monthly Growth Report — [Month Year]

## Overall
- Total followers: X (+Y%)
- Total impressions: X
- Total engagement: X%
- Best day: [Day]

## Platform Details
[Per platform breakdown]

## Content Analysis
- Best content type: [type]
- Best posting time: [time]
- Highest engagement topic: [topic]

## Goals vs Actuals
| Metric | Goal | Actual | Status |
|---|---|---|---|
```

## Data Sources
| Source | How to Access |
|---|---|
| Twitter/X | Twitter API v2 → analytics endpoint |
| LinkedIn | LinkedIn API → share statistics |
| Instagram | Facebook Graph API → insights |
| YouTube | YouTube Data API → analytics |
| Website | Google Analytics API or Plausible |

## Quality Rules
1. Always compare to previous period (week-over-week, month-over-month)
2. Lead with the most important insight, not raw numbers
3. End with actionable recommendations
4. Use percentages + absolute numbers together
5. Highlight anomalies (spikes or drops) with explanations
