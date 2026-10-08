---
description: Optimize content for search engines — keywords, meta tags, structure
---

# 🔍 SEO Optimizer Skill

## What This Skill Does
Analyzes and improves content for search engine visibility.
Generates meta tags, keyword recommendations, and structural improvements.

## When to Use
- "Optimize this blog post for SEO"
- "Generate meta title and description for [page]"
- "What keywords should I target for [topic]?"
- "Create schema markup for this page"

## SEO Checklist

### On-Page SEO (per article/page)
- [ ] Title tag: target keyword + compelling (< 60 chars)
- [ ] Meta description: includes keyword + CTA (< 155 chars)
- [ ] H1: one per page, includes primary keyword
- [ ] H2/H3: include secondary keywords naturally
- [ ] First 100 words: contain primary keyword
- [ ] Image alt text: descriptive, includes keyword where natural
- [ ] Internal links: 2-5 per article
- [ ] External links: 1-3 authoritative sources
- [ ] URL slug: short, keyword-rich, hyphenated
- [ ] Content length: 1,500+ words for competitive keywords

### Technical SEO
- [ ] Page loads in < 3 seconds
- [ ] Mobile responsive
- [ ] HTTPS enabled
- [ ] Sitemap.xml exists
- [ ] Robots.txt configured
- [ ] Schema.org markup on key pages
- [ ] No broken links (404s)
- [ ] Canonical URLs set

### Meta Tag Templates
```html
<!-- Standard -->
<title>[Primary Keyword] — [Brand] | [Benefit]</title>
<meta name="description" content="[Action verb] [primary keyword]. [Value prop]. [CTA].">

<!-- Open Graph (Facebook/LinkedIn) -->
<meta property="og:title" content="[Title]">
<meta property="og:description" content="[Description]">
<meta property="og:image" content="[Image URL]">
<meta property="og:type" content="article">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Title]">
<meta name="twitter:description" content="[Description]">
<meta name="twitter:image" content="[Image URL]">
```

### Schema.org Markup (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Title]",
  "author": { "@type": "Person", "name": "[Author]" },
  "datePublished": "[Date]",
  "description": "[Description]",
  "image": "[Image URL]"
}
```

## Quality Rules
1. Never keyword-stuff — content must read naturally
2. One primary keyword per page, 2-3 secondary keywords
3. Meta descriptions should compel clicks, not just describe
4. Update old content regularly (freshness signal)
5. Focus on search intent, not just keywords
