# 🔄 Automation Pipelines

> Pipelines are multi-step automation chains. Each pipeline connects
> multiple skills together to achieve a complex goal automatically.

## What is a Pipeline?
A pipeline chains skills together. The output of one skill feeds
into the next, creating an assembly line for content.

---

## Pipeline 1: "Write Once, Post Everywhere"
```
Trigger: Manual prompt or n8n schedule
│
├─ Step 1: content-writer → Generate master content
├─ Step 2: image-creator → Generate matching visual
├─ Step 3: content-writer → Format text per platform
├─ Step 4: n8n webhook → Post to all enabled platforms
└─ Step 5: analytics-reporter → Log what was posted
```
**Trigger in n8n:** `POST /webhook/create-and-post`
```json
{
  "topic": "5 Docker tips for beginners",
  "platforms": ["twitter", "linkedin", "instagram"],
  "include_image": true
}
```

---

## Pipeline 2: "Blog to Social"
```
Trigger: New blog post published (RSS or webhook)
│
├─ Step 1: content-writer → Extract key points from article
├─ Step 2: content-writer → Create Twitter thread
├─ Step 3: content-writer → Create LinkedIn summary
├─ Step 4: image-creator → Create Open Graph image
├─ Step 5: seo-optimizer → Generate meta tags
└─ Step 6: n8n webhook → Post to social platforms
```

---

## Pipeline 3: "YouTube Video → Everything"
```
Trigger: New YouTube video uploaded
│
├─ Step 1: audio-creator → Transcribe video (Whisper)
├─ Step 2: content-writer → Summarize transcript
├─ Step 3: content-writer → Create blog post from summary
├─ Step 4: content-writer → Create social posts
├─ Step 5: image-creator → Create blog header image
└─ Step 6: n8n → Post blog + social simultaneously
```

---

## Pipeline 4: "Community Launch Kit"
```
Trigger: "Set up community for [project]"
│
├─ Step 1: community-manager → Generate README.md
├─ Step 2: community-manager → Generate CONTRIBUTING.md
├─ Step 3: community-manager → Generate issue templates
├─ Step 4: community-manager → Generate PR template
├─ Step 5: community-manager → Generate Discord structure
├─ Step 6: doc-generator → Generate setup guide
└─ Step 7: seo-optimizer → Optimize README for discoverability
```

---

## Pipeline 5: "Weekly Content Machine"
```
Trigger: n8n scheduled (every Monday 9 AM)
│
├─ Step 1: analytics-reporter → Pull last week's performance
├─ Step 2: content-writer → Generate 7 post ideas based on what worked
├─ Step 3: content-writer → Write all 7 posts (one per day)
├─ Step 4: image-creator → Create 7 matching images
├─ Step 5: n8n → Schedule posts for Mon-Sun
└─ Step 6: analytics-reporter → Log plan for tracking
```

---

## Creating Your Own Pipeline
1. Identify the goal (what's the final output?)
2. Work backwards (what inputs does the last step need?)
3. Chain skills together (each step produces what the next needs)
4. Add to n8n as a workflow for automation
5. Test manually first, then enable the schedule/trigger
