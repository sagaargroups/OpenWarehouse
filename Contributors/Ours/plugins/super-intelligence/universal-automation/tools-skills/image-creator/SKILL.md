---
description: Generate visual content - social graphics, thumbnails, infographics
---

# 🖼️ Image Creator Skill

## What This Skill Does
Creates visual content using AI image generation tools. Handles social media
graphics, video thumbnails, infographics, and brand-consistent imagery.

## When to Use
- "Create a thumbnail for my YouTube video about [topic]"
- "Generate an Instagram post image for [topic]"
- "Make a social graphic announcing [feature]"
- "Create an infographic about [data]"

## Instructions for the Agent

### Step 1: Understand the Request
- What type of image? (social post, thumbnail, infographic, banner)
- What platform? (determines dimensions)
- What style? (photorealistic, illustration, minimalist, 3D)
- Any text overlay needed?
- Brand colors to use?

### Step 2: Load Brand Context
Read `knowledge/brand/visual-identity.md` for colors, fonts, style guide.

### Step 3: Determine Dimensions
| Platform | Image Type | Dimensions |
|---|---|---|
| Twitter/X | Post image | 1200 x 675 px |
| LinkedIn | Post image | 1200 x 627 px |
| Instagram | Square post | 1080 x 1080 px |
| Instagram | Portrait post | 1080 x 1350 px |
| Instagram | Story/Reel cover | 1080 x 1920 px |
| YouTube | Thumbnail | 1280 x 720 px |
| Facebook | Post image | 1200 x 630 px |
| Pinterest | Pin | 1000 x 1500 px |
| Blog | Header image | 1200 x 630 px |
| Email | Header banner | 600 x 200 px |

### Step 4: Generate the Image
Use the `generate_image` tool with a detailed prompt:

**Prompt Structure:**
```
[Style] [Subject] [Action/Composition] [Colors/Mood] [Technical specs]
```

**Example:**
```
Modern flat illustration of a developer deploying Docker containers,
dark navy background with electric blue and cyan accents,
clean minimalist style, no text, suitable for social media,
high contrast, professional tech aesthetic
```

### Step 5: Post-Processing (if needed)
- Add text overlay → note: AI-generated text in images is often garbled.
  Recommend adding text overlay via CSS/HTML or Canva instead.
- Resize for different platforms from the master image
- Remove background if needed (describe this in the prompt)

### Step 6: Output
Save the image and provide:
1. The image file
2. The exact prompt used (for future regeneration)
3. Suggested alt text (for SEO/accessibility)

## Prompt Templates

### Social Media Graphic
```
Professional [style] graphic for [platform],
showing [subject],
[brand colors] color palette,
modern clean design,
no text on image,
[mood] atmosphere
```

### YouTube Thumbnail
```
Eye-catching YouTube thumbnail,
[subject] in the center,
bold expressive face/reaction (if person),
bright contrasting colors [color1] and [color2],
dramatic lighting,
clean background with subtle [element]
```

### Infographic
```
Clean infographic layout showing [data/process],
[number] steps/sections,
[brand colors],
minimal icons,
flowchart/timeline style,
white background,
professional business aesthetic
```

## Quality Rules
1. Never generate images with text (AI text is unreliable) — add text separately
2. Always specify dimensions in the tool call
3. Keep brand consistency — same style across all platforms
4. Generate alt text for every image
5. Save the prompt — you'll want to iterate on it
