---
description: Generate platform-optimized text content from a single prompt
---

# ✍️ Content Writer Skill

## What This Skill Does
Takes a single topic or idea and produces ready-to-publish text content
for multiple platforms simultaneously, each formatted to that platform's
rules, character limits, and audience expectations.

## When to Use
- "Write a post about [topic]"
- "Create content for my social media"
- "Write a blog + tweets + LinkedIn post about [topic]"
- "Repurpose this article for all platforms"

## Instructions for the Agent

### Step 1: Understand the Request
- What is the topic?
- What platforms are targeted? (default: ALL)
- What is the goal? (awareness, engagement, conversion, education)
- Is there a link to include?
- Is there a specific CTA (Call to Action)?

### Step 2: Load Brand Context
Read `knowledge/brand/voice-guide.md` for tone and style rules.
Read `knowledge/brand/positioning.md` for what we do and who we serve.

### Step 3: Generate Master Content
Write a 300-500 word "master block" covering the topic comprehensively.
This is the raw material — NOT published anywhere directly.

### Step 4: Format Per Platform

#### Twitter/X (280 chars)
- Hook in first 5 words
- Max 3 hashtags
- Links count as 23 chars
- If content > 280: create a Thread (number each tweet 1/N)
- Template: `[Hook statement] → [Key insight] → [CTA] #tag1 #tag2`

#### LinkedIn (3,000 chars)
- Professional tone
- First 2 lines = hook (visible before "see more")
- Use line breaks every 2-3 sentences
- End with a question to drive comments
- 3-5 hashtags at the bottom
- Template: `[Personal story/observation] → [Lesson learned] → [Actionable takeaway] → [Question for audience]`

#### Instagram Caption (2,200 chars)
- Conversational, emoji-friendly
- First line = hook
- Body = value/story
- End with CTA ("Save this for later", "Tag someone who...")
- Hashtags: 8-15, mix of broad + niche
- Requires an image — flag if none provided

#### Facebook (63,206 chars)
- Casual, community-oriented
- Questions perform best
- Can be longer-form than Twitter
- Include link if available (auto-previews)

#### Blog Post (1,500+ words)
- SEO-optimized H1, H2, H3 structure
- Meta title (< 60 chars) + meta description (< 155 chars)
- Include internal links if known
- FAQ section at bottom for featured snippets
- Read `knowledge/seo/keyword-clusters.md` for target keywords

#### Email Newsletter
- Subject line (< 50 chars, compelling)
- Preview text (< 90 chars)
- Body: hook → value → CTA
- One clear CTA button
- P.S. line for secondary message

#### GitHub Discussion / Release Note
- Markdown format
- Technical but accessible
- Include code examples if relevant
- Structured: What's New → How to Use → Breaking Changes

### Step 5: Output
Return all formats in a single response, clearly labeled:
```
## Twitter
[content]

## LinkedIn
[content]

## Instagram Caption
[content]

## Blog Post
[content]

## Email Newsletter
[content]
```

### Step 6: Optional — Auto-Post via n8n
If the user requests auto-posting, send a webhook to n8n:
```bash
curl -X POST http://localhost:5678/webhook/social-post \
  -H "Content-Type: application/json" \
  -d '{
    "text": "the master content",
    "platforms": ["twitter", "linkedin", "facebook"],
    "image_url": "optional"
  }'
```

## Quality Rules
1. Never use generic opening lines ("In today's world...", "As we all know...")
2. Every platform version must feel NATIVE — not copy-pasted
3. Twitter must be punchy. LinkedIn must be professional. Instagram must be visual.
4. Always include a CTA
5. Check character limits before outputting
