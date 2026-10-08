---
name: output-format-specs
category: output
version: 1.0
dependencies: [prompt-structure.md]
---

# SKILL: Output Format Specifications

## 🎯 PURPOSE
Define exact format requirements for different content types. Ensures generated prompts specify HOW the output should be formatted, not just WHAT to create.

## 📋 CONTENT TYPE FORMATS

---

### **1. RESEARCH OUTPUTS (.md Format)**

**Use for:** Stage 1 research prompts

**Format Specification:**

```markdown
# [Research Topic]

## Executive Summary
[2-3 sentence overview of findings]

## Key Findings

### Finding 1: [Title]
- **Insight:** [Main insight]
- **Implication:** [How this affects our strategy]
- **Source/Evidence:** [Where this came from]

[Repeat for all findings]

## Personas

### Persona 1: [Archetype Name]
**Demographics:**
- Age: [range]
- Location: [where]
- Income: [range]
- Occupation: [type]

**Psychographics:**
- Values: [list]
- Pain points: [list]
- Goals: [list]
- Buying triggers: [list]

**Quote:** "[Something they would say]"

[Repeat for all personas]

## Competitor Analysis

### Competitor: [Name]
**Website:** [URL if available]
**Strengths:**
- [Specific strength with example]
**Weaknesses:**
- [Specific gap with example]
**Opportunity for us:**
- [What we can do better]

## Emotional Triggers
1. **[Trigger name]:** [Why it works for this audience]
2. [Repeat for 5+ triggers]

## Recommended Strategy
- Visual direction: [specific aesthetic]
- Tone of voice: [specific characteristics]
- Key differentiation: [what makes us unique]
- Avoid: [what NOT to do]

## References
[Sources consulted]
```

**Include in prompts:**
"Format your research output as a markdown document following this structure... [provide template]"

---

### **2. IMAGE GENERATION OUTPUTS**

**Use for:** Visual identity prompts

**Format Specification to Include in Prompt:**

```
TECHNICAL SPECS:
- Format: [PNG/JPG/WebP]
- Resolution: [Exact dimensions - e.g., 2400x1400px for hero, 1200x1200px for square]
- Aspect Ratio: [16:9, 4:5, 1:1, etc.]
- Color Mode: RGB
- DPI: 72 for web, 300 for print

STYLE PARAMETERS:
- Photography style: [documentary/editorial/commercial/lifestyle]
- Lighting: [natural/studio/golden hour/specific]
- Depth of field: [shallow/deep/medium]
- Camera angle: [eye level/overhead/low angle/specific]
- Grain/texture: [film grain/clean digital/specific]

FILE NAMING:
- [project-name]-[image-type]-[version].ext
- Example: urbanroots-hero-v1.jpg

DELIVERY FORMAT:
- Raw generation (full res)
- Web-optimized version (compressed)
- Mobile version (if needed)
```

**Example in Prompt:**

```
Create [image description]...

TECHNICAL OUTPUT:
- Save as: urbanroots-hero-v1.png
- Resolution: 2400x1400px (16:9 ratio)
- Style: 35mm film photography aesthetic with slight grain
- Depth: Shallow (f/2.8 look)
- Export: High-res PNG + web-optimized JPG (<200KB)
```

---

### **3. VIDEO GENERATION OUTPUTS**

**Use for:** Video/motion prompts

**Format Specification:**

```
TECHNICAL SPECS:
- Format: MP4 (H.264 codec)
- Resolution: 1920x1080 (Full HD) or 3840x2160 (4K)
- Frame Rate: 24fps (cinematic) or 30fps (web standard)
- Duration: [Exact seconds]
- Bitrate: High quality for download, optimized for web
- Audio: None / Ambient / Music (specify)

MOTION SPECS:
- Camera movement: [Static/pan/tilt/dolly/specific]
- Motion speed: [Real-time/slow-motion/time-lapse]
- Transitions: [Cut/fade/dissolve/specific]
- Loop: Yes/No (if yes, seamless loop required)

STYLE:
- Cinematic look: [Color grading notes]
- Mood: [Specific aesthetic]
- Effects: [Practical/minimal/specific]

FILE NAMING:
- [project-name]-[video-type]-[version].mp4
- Example: urbanroots-hero-loop-v1.mp4

DELIVERY:
- Master file (high res)
- Web-compressed version (<5MB for background videos)
```

---

### **4. COPYWRITING OUTPUTS**

**Use for:** Text/content prompts

**Format Specification:**

```
OUTPUT FORMAT:

## [Section Name]

### Headline (H1)
[Exact headline text]
Character count: [X]

### Subheadline (H2)
[Exact subheadline text]
Character count: [X]

### Body Copy
[Full paragraph text]
Word count: [X]

### Call-to-Action
Primary CTA: [Button text]
Secondary CTA: [Alt action text]

---

SPECIFICATIONS:
- Tone: [Specific voice characteristics]
- Reading level: [Grade level or description]
- SEO keywords: [Primary and secondary keywords]
- Character limits:
  * Headlines: 50-70 characters
  * Meta descriptions: 150-160 characters
  * Button text: 2-4 words

FILE FORMAT:
- Save as: [project-name]-[page]-copy.md or .txt
- Example: urbanroots-homepage-copy.md

FORMATTING NOTES:
- Use markdown for structure
- Bold: **important terms**
- Italics: *emphasis*
- Links: [text](url)
```

---

### **5. DESIGN SYSTEM OUTPUTS**

**Use for:** Theme/layout prompts

**Format Specification:**

```
DESIGN SYSTEM SPECIFICATION

## Color Palette

### Primary Colors
- Background: #FFFFFF (Pure White) / #F5F5F0 (Warm Off-White)
- Text Primary: #2A2A2A (Charcoal)
- Text Secondary: #6A6A6A (Gray)

### Accent Colors
- Primary Accent: #C17C5F (Terracotta)
  * Use for: Primary CTAs, highlights
- Secondary Accent: #8A9A8A (Sage)
  * Use for: Subtle backgrounds, icons
- Tertiary: #DAA06D (Warm Gold)
  * Use for: Hover states, accents

### Semantic Colors
- Success: #4CAF50
- Warning: #FF9800
- Error: #F44336
- Info: #2196F3

## Typography

### Font Families
**Display/Headers:**
- Font: Playfair Display
- Weights: 400 (Regular), 700 (Bold)
- Use for: H1, H2, Hero text

**Body:**
- Font: Inter
- Weights: 400 (Regular), 500 (Medium), 600 (SemiBold)
- Use for: Body text, UI elements

**Monospace (optional):**
- Font: JetBrains Mono
- Use for: Code, data

### Type Scale
- H1: 48px / 3rem (Desktop), 32px / 2rem (Mobile)
- H2: 36px / 2.25rem (Desktop), 24px / 1.5rem (Mobile)
- H3: 24px / 1.5rem
- Body: 16px / 1rem
- Small: 14px / 0.875rem
- Tiny: 12px / 0.75rem

## Spacing System
Based on 8px grid:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

## Border Radius
- Small: 4px (buttons, inputs)
- Medium: 8px (cards)
- Large: 16px (images, containers)
- Full: 9999px (pills, avatars)

## Shadows
- Small: 0 1px 3px rgba(0,0,0,0.12)
- Medium: 0 4px 6px rgba(0,0,0,0.1)
- Large: 0 10px 20px rgba(0,0,0,0.15)
- Hover: 0 12px 24px rgba(0,0,0,0.2)

## Component Specifications

### Buttons
**Primary:**
- Background: [Accent color]
- Text: White
- Padding: 12px 24px
- Border-radius: 4px
- Hover: Darker shade of accent
- Transition: 200ms ease

**Secondary:**
- Background: Transparent
- Border: 2px solid [Accent color]
- Text: [Accent color]
- Hover: Fill with accent color

OUTPUT FILE:
- Format: CSS Variables or Figma Tokens
- Filename: design-system.css or design-tokens.json
```

---

### **6. CODE/BUILD OUTPUTS**

**Use for:** Website build prompts (v0, Bolt, etc.)

**Format Specification:**

```
BUILD SPECIFICATION FOR AI WEBSITE BUILDER

PROJECT: [Project Name]
FRAMEWORK: React + Tailwind CSS
HOSTING: Vercel / Netlify

## Tech Stack
- Frontend: React 18+
- Styling: Tailwind CSS 3.x
- Animations: Framer Motion
- Forms: React Hook Form
- Icons: Lucide React

## File Structure
```
/src
  /components
    - Header.jsx
    - Footer.jsx
    - Hero.jsx
    - [other components]
  /pages
    - Home.jsx
    - About.jsx
    - Services.jsx
  /styles
    - globals.css
  App.jsx
```

## Design System (Tailwind Config)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#C17C5F',
        secondary: '#8A9A8A',
        background: '#F5F5F0',
        text: '#2A2A2A'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  }
}
```

## Component Examples

### Hero Section
```jsx
<section className="h-screen flex items-center justify-center bg-background relative overflow-hidden">
  {/* Background Video */}
  <video 
    autoPlay 
    loop 
    muted 
    className="absolute inset-0 w-full h-full object-cover opacity-50"
  >
    <source src="/hero-video.mp4" type="video/mp4" />
  </video>
  
  {/* Content */}
  <div className="relative z-10 text-center">
    <h1 className="font-display text-6xl text-text mb-4">
      Great Hair. Zero Guilt.
    </h1>
    <button className="bg-primary text-white px-8 py-3 rounded hover:scale-105 transition">
      Claim Your Chair
    </button>
  </div>
</section>
```

## Pages Required
1. Home (Hero, About snippet, Services preview, Testimonials, CTA)
2. Services (Detailed service cards with pricing)
3. About (Story, Team, Values)
4. Contact (Form, Map, Info)

## Key Features
- Responsive (mobile-first)
- Smooth scroll animations
- Form validation
- Loading states
- Accessible (WCAG 2.1 AA)

## Performance
- Image optimization (next/image or similar)
- Lazy loading
- Code splitting
- <100 Lighthouse performance score target

OUTPUT:
- GitHub repository OR
- Deployed URL + access
- Build instructions in README.md
```

---

### **7. SITEMAP/STRUCTURE OUTPUTS**

**Use for:** Information architecture prompts

**Format Specification:**

```
SITEMAP & URL STRUCTURE

## Page Hierarchy

/ (Home)
├── /about
│   ├── /team
│   └── /sustainability
├── /services
│   ├── /balayage
│   ├── /haircuts
│   └── /treatments
├── /portfolio
├── /contact
└── /book

## URL Guidelines
- Lowercase only
- Hyphens for spaces (not underscores)
- No trailing slashes
- Keep short (3 words max)
- Descriptive (avoid /page1, /service2)

## SEO Structure

### Homepage
- Title: [Business Name] | [Primary Keyword] in [Location]
- Meta: 150-char description
- H1: Main value prop
- Schema: LocalBusiness

### Service Pages
- Title: [Service Name] | [Business Name]
- URL: /services/[service-slug]
- Schema: Service
- Internal links to: /book, /about, related services

## Navigation Structure

**Primary Nav:**
- Home
- Services (dropdown)
- About
- Book Now (CTA)

**Footer Nav:**
- Quick Links (repeat primary)
- Legal (Privacy, Terms)
- Social Links
- Newsletter signup

## Internal Linking Strategy
- Service pages → Team (choose stylist)
- About → Services (experience it)
- Blog → Services (relevant upsells)
- All pages → Book Now

OUTPUT FILE:
- Format: XML sitemap + visual diagram
- Tools: draw.io, Whimsical, or plain text structure
```

---

## 🎯 HOW TO USE IN PROMPTS

**Always include format specification AFTER the main prompt:**

```
[Main prompt content]

────────────────────────────────────────────
📤 OUTPUT SPECIFICATIONS:

[Insert relevant format spec from above]

────────────────────────────────────────────
```

**Example:**

```
Create a hero image for Urban Roots Salon...

[Full creative prompt]

────────────────────────────────────────────
📤 OUTPUT SPECIFICATIONS:

TECHNICAL:
- Resolution: 2400x1400px (16:9)
- Format: PNG (high-res) + JPG (web <200KB)
- Aspect: Landscape hero
- DPI: 72 (web use)

STYLE:
- Film photography aesthetic
- Natural lighting (golden hour)
- Shallow depth of field
- Slight grain texture

NAMING:
- File: urbanroots-hero-v1.png

DELIVERY:
- High-res version for design
- Compressed version for web deployment
────────────────────────────────────────────
```

---

## ✅ QUALITY CHECKLIST

Before finalizing any prompt, verify:

- [ ] Output format is clearly specified
- [ ] File naming convention provided
- [ ] Technical specs included (dimensions, format, etc.)
- [ ] Delivery format mentioned (where/how to save)
- [ ] Tool compatibility noted (if relevant)
- [ ] Example or template provided (if helpful)

---

## 💡 KEY PRINCIPLES

1. **Be specific:** "High resolution" → "2400x1400px"
2. **Include examples:** Show what good looks like
3. **Think delivery:** Not just creation, but where it goes
4. **Tool compatibility:** Format that works with common tools
5. **Future-proof:** Include source/editable formats when possible
