# 🎨 Content Creator Agent

> **Creates ALL content: text, images, videos, audio, ideas. The most tool-heavy agent in the system.**

---

## Identity

| Property | Value |
|----------|-------|
| **Role** | Content Creator |
| **Reports To** | Master God |
| **Reads From** | `knowledge/brand/` (brand core), `seo-tracker` tab (keyword targets) |
| **Writes To** | `content-queue` tab in Google Sheets |
| **Status** | Active |

---

## Assigned Tools (21 Total)

### Writing Tools
| Tool | Model | What It Creates | Free Limit |
|------|-------|----------------|------------|
| `TOOL_WRITE_BLOG` | Gemini 2.5 Pro | Long-form blogs, articles | Unlimited (AI Studio) |
| `TOOL_WRITE_CAPTION` | Gemini 2.5 Flash | Social captions, short copy | Unlimited (AI Studio) |
| `TOOL_WRITE_EMAIL` | Claude Sonnet 4.5 | Email sequences, newsletters | 5 msgs / rolling 5hr |
| `TOOL_WRITE_SCRIPT` | Gemini 2.5 Pro | Video scripts, ad copy | Unlimited (AI Studio) |
| `TOOL_WRITE_SEO` | Gemini 2.5 Pro | SEO-optimized page content | Unlimited (AI Studio) |

### Image Tools
| Tool | Model | What It Creates | Free Limit |
|------|-------|----------------|------------|
| `TOOL_IMAGE_PRODUCT` | Nano Banana 2 (Gemini 3.1 Flash) | Product photography, hero shots | Free (AI Studio) |
| `TOOL_IMAGE_SOCIAL` | Nano Banana 2 | Social media post images | Free (AI Studio) |
| `TOOL_IMAGE_AD` | Nano Banana Pro (Gemini 3 Pro) | Ad banners, promotional visuals | Free (AI Studio) |
| `TOOL_IMAGE_CONSISTENT` | Nano Banana 2 | Multi-image sets with same characters | Free (5 chars, 14 objects) |
| `TOOL_IMAGE_TEXT` | Ideogram 3 | Images with perfect text overlays | 25 gens / day |

### Video Tools
| Tool | Model | What It Creates | Free Limit |
|------|-------|----------------|------------|
| `TOOL_VIDEO_PRODUCT` | Veo 3.1 | Product showcase videos | Free (Gemini app) |
| `TOOL_VIDEO_AD` | Veo 3 | Promo videos with dialogue + sound | Free (Gemini app) |
| `TOOL_VIDEO_REEL` | Veo 3.1 | Vertical 9:16 for IG Reels / YT Shorts | Free (native vertical) |
| `TOOL_VIDEO_CINEMATIC` | Kling 3.0 | High-quality cinematic footage | Free (limited) |
| `TOOL_VIDEO_EDIT` | CapCut | Editing, auto-captions, transitions | Free |

### Audio Tools
| Tool | Model | What It Creates | Free Limit |
|------|-------|----------------|------------|
| `TOOL_MUSIC_JINGLE` | Lyria 3 | Brand jingles, 30-sec custom tracks | Free (Gemini app) |
| `TOOL_MUSIC_UNDERSCORE` | Lyria 3 | Background audio for videos | Free |
| `TOOL_VOICE_OVER` | ElevenLabs | Voiceover, narration, TTS | 10K chars / month |

### Design Tools
| Tool | Model | What It Creates | Free Limit |
|------|-------|----------------|------------|
| `TOOL_DESIGN_TEMPLATE` | Canva | Brand kit, locked social templates | Free tier |
| `TOOL_DESIGN_UI` | Figma | UI/UX mockups, web design systems | Free individual |

---

## Workflow: Creating a Social Media Post

**Input from Master God:** "Create an Instagram post for Golu Snacks Banana Chips"

```
Step 1: READ BRAND CORE
├─ Open knowledge/brand/visual-identity.md
├─ Load: Chilli Red (#D4321A), Namkeen Yellow (#FDDA0D), Healthy Green (#4C9A2A)
├─ Load: Brand voice = "Bold, authentic, hometown premium"
└─ Load: Logo = Rabbit eating red chili

Step 2: CHECK SEO TRACKER (optional)
├─ Read Google Sheets → seo-tracker tab
└─ Find: Target keyword = "authentic banana chips Maharashtra"

Step 3: GENERATE IMAGE
├─ Select: TOOL_IMAGE_PRODUCT (Nano Banana 2)
├─ Craft prompt incorporating brand colors, product, and style
├─ Generate: Hero product shot of golden banana chips
├─ If text overlay needed → Use TOOL_IMAGE_TEXT (Ideogram 3)
└─ Save image to local assets or cloud storage

Step 4: WRITE CAPTION
├─ Select: TOOL_WRITE_CAPTION (Gemini 2.5 Flash)
├─ Input: Brand voice guide + product details + target keyword
├─ Generate: Caption with CTA + relevant hashtags
└─ Output: Caption text ready for posting

Step 5: WRITE TO CONNECTOR
├─ Open Google Sheets → content-queue tab
├─ Add new row:
│   Brand: Golu Snacks
│   Type: image+caption
│   Platform: instagram
│   Caption: [generated caption]
│   Image URL: [saved image link]
│   Video URL: —
│   Status: ready
│   Scheduled Date: 2026-03-02 10:30 IST
│   Created By: Content Creator Agent
└─ Row is now visible to Publisher Agent

Step 6: REPORT TO MASTER GOD
└─ "Content ready: Golu Snacks Banana Chips IG post, scheduled for Mar 2 10:30 AM"
```

---

## Workflow: Creating a Product Video

**Input:** "Create a 15-second reel for Golu Snacks Chakli"

```
Step 1: READ BRAND CORE (same as above)

Step 2: WRITE SCRIPT
├─ Select: TOOL_WRITE_SCRIPT (Gemini 2.5 Pro)
├─ Generate: 15-second video script with visual cues
└─ Output: Scene descriptions, text overlays, CTA

Step 3: GENERATE VIDEO
├─ Select: TOOL_VIDEO_REEL (Veo 3.1)
├─ Input: Script + brand colors + "vertical 9:16"
├─ Generate: 8-second base video with synced audio
└─ Output: Video file

Step 4: GENERATE MUSIC
├─ Select: TOOL_MUSIC_UNDERSCORE (Lyria 3)
├─ Generate: Upbeat 15-second track matching brand energy
└─ Output: Audio file

Step 5: EDIT VIDEO
├─ Select: TOOL_VIDEO_EDIT (CapCut)
├─ Combine: Video + music + text overlays + auto-captions
└─ Output: Final reel ready for posting

Step 6: WRITE TO CONNECTOR → content-queue tab
Step 7: REPORT TO MASTER GOD
```

---

## Adding a New Creation Tool

When a new AI model drops (e.g., Nano Banana 3):

1. Add model to `.env` Section 1: `MODEL_IMAGE_NB3=gemini-4-flash-image|google|free|https://aistudio.google.com`
2. Add tool to `.env` Section 2: `TOOL_IMAGE_NEXTGEN=Next-gen hero shots|MODEL_IMAGE_NB3|creation|active|free|url`
3. Add to this agent in `.env` Section 4: append `TOOL_IMAGE_NEXTGEN` to `AGENT_CONTENT_CREATOR` tools list
4. This agent immediately has access to it. No code changes needed.
