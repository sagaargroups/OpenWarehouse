---
name: website-lifecycle
category: core
version: 1.0
dependencies: [uniqueness-engine.md, prompt-structure.md]
---

# SKILL: Website Lifecycle Prompt Generation

## 🎯 PURPOSE
Generate complete lifecycle prompts for website projects - from research to deployment. Covers local businesses (salons, dentists, schools, NGOs) with zero/minimal backend needs.

## 📋 WHEN TO USE
- Client requests: "I need a website for my business"
- Business types: Salons, restaurants, dentists, clinics, schools, tutors, NGOs, local services
- Output needed: Complete set of prompts for entire website creation process

## 🔧 INPUT REQUIRED
Extract from client requirement:
- **Business Type:** Salon / Dentist / School / NGO / Restaurant / Clinic / etc.
- **Business Name:** [Name]
- **Industry:** Specific niche (e.g., "luxury hair salon" vs "budget cuts")
- **Target Audience:** Who visits this business? (age, income, location, needs)
- **Brand Feel:** Professional / Friendly / Luxury / Modern / Traditional / Creative
- **Key Services:** 3-5 main offerings
- **Unique Selling Point:** What makes them different?
- **Competitors:** Similar businesses (if mentioned)
- **Content Available:** Do they have photos/videos/text already?

## ⚙️ LIFECYCLE STAGES

### **STAGE 1: RESEARCH & STRATEGY**
**Purpose:** Understand industry, audience psychology, competitive landscape

**Prompts to Generate:**
1. **Industry Analysis Prompt**
   - Research current design trends in [industry]
   - Analyze what works for [target audience]
   - Identify psychological triggers for [business type]

2. **Competitor Analysis Prompt**
   - Analyze 5 competitor websites in [location/industry]
   - What do they do well? What's missing?
   - How can we differentiate?

3. **Audience Psychology Prompt**
   - Create user persona for [target audience]
   - What problems do they have?
   - What emotions should the website trigger?

**Tool Suggestions:**
- Research tools: ChatGPT, Claude, Perplexity (for industry research)
- Note: User can use any AI research tool

---

### **STAGE 2: VISUAL IDENTITY**
**Purpose:** Create unique images and videos for the website

#### **2A: IMAGE GENERATION**
**Prompts to Generate:**

1. **Hero Image Prompt**
   ```
   Create a [brand feel] hero image for a [business type] website.
   
   Style: [specific aesthetic - not generic stock photo]
   - Industry: [business industry]
   - Mood: [emotion to evoke]
   - Color palette: [based on brand feel]
   - Composition: [specific layout direction]
   
   Must include:
   - [Key visual element 1]
   - [Key visual element 2]
   
   Avoid: Generic stock photo aesthetics, overused poses
   
   Make it feel: [unique quality based on USP]
   ```

2. **Service Images Prompt** (one per main service)
   ```
   Create an image representing [service name] at a [business type].
   
   Context: [what happens during this service]
   Audience reaction: [what they should feel seeing this]
   Style: Consistent with hero image
   Focus on: [specific detail that makes it unique]
   ```

3. **Team/About Images Prompt**
   ```
   Create [number] images for the team/about section.
   
   Vibe: [professional/friendly/creative - based on brand]
   Setting: [relevant environment]
   Show: [what represents the business culture]
   ```

4. **Gallery/Portfolio Images** (if applicable)
   ```
   Create [number] before/after or portfolio images for [business type].
   
   Show: [transformation/results/work examples]
   Style: [documentary/polished/artistic]
   Consistency: Match overall brand aesthetic
   ```

**Tool Suggestions:**
- Image generation: Midjourney, DALL-E, Stable Diffusion, Ideogram, Leonardo.ai
- User explores current best tools for their quality needs

#### **2B: VIDEO GENERATION**
**Prompts to Generate:**

1. **Hero/Background Video Prompt**
   ```
   Create a [duration] background video for [business type] website hero section.
   
   Scene: [what's happening]
   Movement: [camera motion - subtle/dynamic]
   Mood: [emotional tone]
   Pace: [slow/medium/fast]
   No text, no audio needed
   
   Visual focus: [specific elements that represent the business]
   ```

2. **Service Demo Video Prompt** (if needed)
   ```
   Create a [duration] video demonstrating [service].
   
   Show: [step-by-step or result]
   Style: [aesthetic approach]
   Pacing: [appropriate for audience]
   ```

**Tool Suggestions:**
- Video generation: Runway, Pika, Kling AI, LumaLabs
- Video editing: CapCut, DaVinci Resolve (if refinement needed)
- Note: Explore current video AI tools

---

### **STAGE 3: CONTENT CREATION**
**Purpose:** Write all website copy - headlines, descriptions, CTAs

**Prompts to Generate:**

1. **Hero Section Copy Prompt**
   ```
   Write hero section copy for a [business type] website.
   
   Business: [name]
   Audience: [target audience]
   USP: [unique selling point]
   Brand voice: [tone description]
   
   Include:
   - Headline (8-12 words): [what problem solved + emotional hook]
   - Subheadline (15-20 words): [who it's for + benefit]
   - Primary CTA: [action-oriented button text]
   - Secondary CTA: [softer alternative action]
   
   Psychological triggers to use:
   - [Trigger 1 based on audience]
   - [Trigger 2 based on industry]
   
   Avoid: Generic phrases like "welcome to our website", "we are the best"
   ```

2. **Services Page Copy Prompt** (per service)
   ```
   Write copy for [service name] section.
   
   Context: [what this service does]
   Audience concern: [what they worry about]
   Solution angle: [how this service addresses it]
   
   Include:
   - Service headline (engaging, not just service name)
   - Description (2-3 paragraphs):
     → What it is
     → Who it's for  
     → What makes ours different
   - Benefits list (5 items)
   - Pricing approach: [transparent/contact/tiered]
   - CTA: [specific to this service]
   
   Tone: [brand voice]
   ```

3. **About Page Copy Prompt**
   ```
   Write About page for [business name].
   
   Story arc:
   - Why they started: [founder motivation]
   - What they believe: [core values]
   - How they're different: [unique approach]
   - Who they serve: [ideal client]
   
   Include:
   - Opening hook (emotional connection)
   - Origin story (authentic, relatable)
   - Team intro (if applicable)
   - Values/mission (clear, not generic)
   - Closing CTA (invitation to work together)
   
   Length: 300-500 words
   Tone: [voice]
   ```

4. **Testimonials Prompt** (if no real testimonials yet)
   ```
   Create realistic testimonial structure guide for [business type].
   
   Format each testimonial with:
   - Specific problem client had
   - What they tried before
   - Experience with [business name]
   - Concrete result
   - Emotional outcome
   
   Guidance: [Do NOT generate fake testimonials - this is a STRUCTURE guide for collecting real ones]
   ```

5. **FAQ Copy Prompt**
   ```
   Write FAQ section for [business type].
   
   Address:
   - [Common question 1 for this industry]
   - [Common question 2]
   - [Common objection 1]
   - [Common objection 2]
   - Booking/pricing questions
   
   For each answer:
   - Direct, honest
   - Reduce friction
   - Reinforce trust
   - End with subtle CTA where appropriate
   
   Total: 8-10 questions
   ```

**Tool Suggestions:**
- Copywriting: ChatGPT, Claude, Jasper, Copy.ai
- SEO optimization: Surfer SEO, Clearscope (if needed)
- User can use any AI writing tool

---

### **STAGE 4: LAYOUT & THEME DESIGN**
**Purpose:** Create unique page layouts and theme feel - NOT generic templates

**Prompts to Generate:**

1. **Overall Theme Direction Prompt**
   ```
   Design a unique website theme for [business name] ([business type]).
   
   Brand feel: [from input]
   Target audience: [from input]
   Industry: [from input]
   
   Theme constraints:
   - Must feel: [3 specific emotions]
   - Must avoid: [generic template aesthetics for this industry]
   - Differentiation: [what makes this visually unique]
   
   Define:
   - Primary color: [specific shade based on psychology]
   - Secondary colors: [complementary palette]
   - Accent color: [for CTAs]
   - Typography: 
     → Headline font: [personality description, not font name]
     → Body font: [readability + brand alignment]
   - Layout philosophy: [minimal/maximal/balanced/asymmetric/etc]
   - White space approach: [generous/tight/strategic]
   - Visual style: [flat/gradient/textured/illustrated/photographic/mixed]
   
   Inspiration NOT templates: [reference style directions, not specific sites]
   ```

2. **Homepage Layout Prompt**
   ```
   Design homepage layout for [business name].
   
   Sections in order:
   1. Hero: [layout approach - full screen/split/overlay/etc]
   2. Trust indicators: [how to show credibility]
   3. Services preview: [grid/carousel/featured/etc]
   4. About snippet: [how to introduce story]
   5. Testimonials: [display format]
   6. CTA section: [conversion-focused design]
   7. Footer: [comprehensive/minimal]
   
   For each section specify:
   - Visual hierarchy
   - Animation/interaction ideas
   - Mobile behavior
   - Psychological purpose
   
   Make it: [unique quality based on brand]
   NOT: [common template structure to avoid]
   ```

3. **Service Page Layout Prompt** (if separate service pages)
   ```
   Design layout for individual service pages.
   
   Structure:
   - Header approach: [how service introduced]
   - Content flow: [text-image balance]
   - Booking CTA placement: [strategic positioning]
   - Related services: [how to cross-promote]
   
   Unique element for this business: [something unexpected/memorable]
   ```

4. **Component Design Prompts** (specific elements)
   
   **Header/Navigation:**
   ```
   Design header/navigation for [business name].
   
   Style: [fixed/transparent/minimized/bold]
   Navigation items: [list pages]
   Logo treatment: [size, position, interaction]
   CTA in header: [primary action]
   Mobile menu: [hamburger/bottom nav/other]
   
   Unique touch: [what makes this header memorable]
   ```
   
   **Footer:**
   ```
   Design footer for [business type].
   
   Include:
   - Contact information
   - Quick links
   - Social media
   - [Industry-specific legal/accreditation]
   - Newsletter signup (optional)
   
   Style: [how it complements overall design]
   ```
   
   **CTA Buttons:**
   ```
   Design CTA button system.
   
   Primary CTA: [main action - style approach]
   Secondary CTA: [alternative - style approach]
   Hover/active states: [micro-interaction]
   
   Psychology: [why this design drives action]
   ```

**Tool Suggestions:**
- Design tools: Figma, Adobe XD, Canva (for mockups)
- AI design: Uizard, Galileo AI (for quick concepts)
- User can design manually or use AI assistance

---

### **STAGE 5: STRUCTURE & SITEMAP**
**Purpose:** Organize all content into logical, SEO-friendly structure

**Prompts to Generate:**

1. **Sitemap Creation Prompt**
   ```
   Create sitemap for [business name] website.
   
   Business type: [type]
   Services: [list]
   Content available: [what they have]
   
   Required pages:
   - Homepage
   - About
   - Services [list individually if 3-5, or services overview if 6+]
   - Contact
   - [Industry-specific pages - e.g., portfolio for creatives, patient info for dentists]
   
   Optional pages to consider:
   - Blog (if content strategy planned)
   - FAQ
   - Booking/Appointments
   - Gallery/Portfolio
   - Testimonials (if separate page)
   
   URL structure:
   - [domain.com/service-name] or [domain.com/services/service-name]
   - Clean, descriptive URLs
   - SEO-friendly slugs
   
   Navigation hierarchy:
   - Top level: [primary pages]
   - Dropdowns: [if needed for services]
   - Footer links: [secondary pages]
   ```

2. **Information Architecture Prompt**
   ```
   Map content flow for [business name] website.
   
   User journey:
   1. Entry point (homepage/services/Google search)
   2. Primary path: [where should they go]
   3. Conversion points: [where CTAs appear]
   4. Exit intent handling: [what keeps them engaged]
   
   Content hierarchy per page:
   - What user sees first: [priority content]
   - What builds trust: [social proof placement]
   - What drives action: [CTA strategy]
   
   Internal linking:
   - Related services
   - About → Services
   - Blog → Services (if applicable)
   ```

3. **SEO Structure Prompt**
   ```
   Define SEO structure for [business type] in [location].
   
   Target keywords:
   - Primary: [business type + location]
   - Secondary: [service variations]
   - Long-tail: [specific problems solved]
   
   Meta structure:
   - Homepage title: [template]
   - Service page titles: [template]
   - Meta descriptions: [approach]
   
   Schema markup needed:
   - LocalBusiness
   - Service
   - Review (when available)
   - [Industry-specific schema]
   ```

**Tool Suggestions:**
- Sitemap tools: Slickplan, Octopus.do, or simple text outline
- SEO research: Ahrefs, SEMrush, or Google Keyword Planner
- Any planning tool works

---

### **STAGE 6: BUILD INSTRUCTIONS**
**Purpose:** Provide prompt for AI website builders OR no-code tools

**Prompts to Generate:**

1. **Complete Build Prompt** (for AI builders like v0, Replit, Bolt, etc.)
   ```
   Build a complete website for [business name] - [business type].
   
   BRAND IDENTITY:
   - Business: [name, tagline]
   - Industry: [specific niche]
   - Target audience: [description]
   - Brand feel: [tone]
   - USP: [differentiation]
   
   DESIGN SYSTEM:
   - Theme: [reference theme direction prompt output]
   - Colors: [palette]
   - Typography: [font descriptions]
   - Layout style: [approach]
   
   PAGES & CONTENT:
   
   [For each page, insert:]
   
   **Homepage:**
   - Layout: [reference homepage layout prompt output]
   - Sections: [list with content from copywriting prompts]
   - Images: [reference image prompts]
   - Videos: [reference video prompts]
   
   **About Page:**
   - Layout: [structure]
   - Content: [from copy prompt]
   - Team section: [if applicable]
   
   **Services:**
   [For each service:]
   - Page/section for: [service name]
   - Content: [from service copy prompt]
   - Image: [reference specific image prompt]
   - CTA: [specific action]
   
   **Contact:**
   - Form fields: [name, email, phone, message, service interest]
   - Contact info display
   - Map integration (if location-based)
   
   TECHNICAL REQUIREMENTS:
   - Responsive (mobile-first)
   - Fast loading
   - Accessibility (WCAG 2.1 AA)
   - Contact form submission [specify backend: email/form service/etc]
   - Analytics ready (Google Analytics)
   - SEO optimized [reference SEO structure prompt]
   
   INTERACTIONS:
   - Smooth scrolling
   - Hover effects on buttons/links
   - Mobile menu animation
   - [Specific unique interactions from layout prompts]
   
   Make it: [unique quality emphasis]
   Technology: [React/HTML/CSS - based on tool used]
   ```

2. **No-Code Setup Prompt** (for tools like Webflow, Framer, Wix)
   ```
   Setup guide for building [business name] website in [tool name].
   
   STRUCTURE:
   [Reference sitemap prompt output]
   
   DESIGN TOKENS:
   [Reference theme prompt output]
   - Create color variables
   - Set up typography styles
   - Define spacing system
   
   PAGE-BY-PAGE INSTRUCTIONS:
   [For each page:]
   - Sections to add: [list]
   - Content to paste: [reference copy prompts]
   - Images to upload: [reference image prompts]
   - Components needed: [buttons, forms, galleries, etc]
   
   SETUP STEPS:
   1. Create pages: [list]
   2. Set up navigation: [structure]
   3. Add global elements: [header, footer]
   4. Build homepage: [section by section]
   5. Build service pages: [template approach]
   6. Build about/contact: [content insertion]
   7. Configure forms: [tool-specific setup]
   8. Set up SEO: [meta data entry]
   9. Connect domain
   10. Launch checklist: [final checks]
   ```

**Tool Suggestions:**
- AI website builders: v0.dev, Replit AI, Bolt.new, Lovable
- No-code platforms: Webflow, Framer, Wix, Squarespace, Carrd
- User chooses based on their technical comfort level

---

## ✅ OUTPUT QUALITY CHECKLIST

When generating all lifecycle prompts, ensure:

- [ ] **Business-specific:** Every prompt references actual business details, not generic placeholders
- [ ] **Uniqueness applied:** Used uniqueness-engine.md to avoid generic outputs
- [ ] **Psychology-based:** Each prompt includes audience psychology considerations  
- [ ] **Industry-appropriate:** Tone and approach match the business type (medical = trust, salon = style, etc)
- [ ] **Complete lifecycle:** All 6 stages covered with appropriate prompts
- [ ] **Tool-agnostic:** Suggestions are examples only, not requirements
- [ ] **Copy-paste ready:** Each prompt is formatted with prompt-structure.md
- [ ] **Interconnected:** Later stages reference earlier outputs (build prompt uses design prompt results)

---

## 🔗 SKILL DEPENDENCIES

- **uniqueness-engine.md:** Apply to every visual and text prompt to ensure differentiation
- **prompt-structure.md:** Format all generated prompts consistently

---

## 📝 EXAMPLE OUTPUT STRUCTURE

When this skill is executed, output should look like:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WEBSITE PROJECT: [Business Name]
BUSINESS TYPE: [Type]
INDUSTRY: [Specific niche]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STAGE 1: RESEARCH & STRATEGY
────────────────────────────────────────────

📋 Prompt 1.1: Industry Analysis
[Full prompt here]
🛠️ Use in: ChatGPT, Claude, Perplexity
📤 Expected output: Industry trends summary + design patterns + audience insights

📋 Prompt 1.2: Competitor Analysis  
[Full prompt here]
🛠️ Use in: Browser + AI for analysis
📤 Expected output: 5 competitor websites analyzed + differentiation opportunities

[Continue for all stages...]

STAGE 2: VISUAL IDENTITY
────────────────────────────────────────────
[All image and video prompts...]

STAGE 3: CONTENT CREATION
────────────────────────────────────────────
[All copywriting prompts...]

[... through Stage 6]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEXT STEPS:
1. Start with Stage 1 research
2. Generate all Stage 2 visuals
3. Write all Stage 3 copy
4. Design Stage 4 layouts
5. Map Stage 5 structure  
6. Build with Stage 6 prompts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 💡 USAGE NOTES

- **This skill generates PROMPTS, not final outputs.** The prompts are then used in various AI tools.
- **Always customize.** Never output generic templates - every prompt should feel made for this specific business.
- **Reference earlier stages.** Later prompts should reference outputs from earlier stages (e.g., "using the hero image from Stage 2...")
- **Stay flexible.** Some businesses need more/fewer prompts in certain stages. Adapt as needed.
