---
name: prompt-structure
category: output
version: 1.0
dependencies: []
---

# SKILL: Prompt Structure & Formatting

## 🎯 PURPOSE
Standardize how all generated prompts are formatted so they are:
- Easy to copy-paste into AI tools
- Clear and scannable
- Consistent across all lifecycle stages
- Professional and complete

## 📋 WHEN TO USE
- Final formatting step for EVERY prompt generated
- After uniqueness-engine.md has been applied
- Before presenting prompts to user

## 🔧 STANDARD PROMPT FORMAT

### **FORMAT TEMPLATE**

Every prompt should follow this structure:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 PROMPT [Number]: [Prompt Name/Purpose]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Main prompt content - clear, detailed, specific]

[Additional context if needed]

[Specific constraints or requirements]

────────────────────────────────────────────
🛠️ SUGGESTED TOOLS:
[Tool examples - 3-5 options, emphasis on "examples" not requirements]

📤 EXPECTED OUTPUT:
[Description of what this prompt should produce]

⏱️ ESTIMATED TIME:
[Realistic time estimate for this task]

💡 TIP:
[One helpful tip for using this prompt effectively]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## ⚙️ FORMAT RULES

### **RULE 1: Clear Visual Separation**
- Use box drawing characters (━ ─) to create clear sections
- Each prompt is a visually distinct block
- Easy to identify where one prompt ends and next begins
- White space between major sections

### **RULE 2: Scannable Headers**
- Emoji prefix for quick identification (📋 for prompts, 🛠️ for tools, 📤 for outputs)
- CAPS for section headers
- Numbering for prompts within same stage (Prompt 2.1, 2.2, etc.)

### **RULE 3: Progressive Detail**
Structure content from general to specific:
1. **First paragraph:** Main instruction (what to create)
2. **Middle section:** Specific requirements, constraints, context
3. **Final section:** What to avoid, uniqueness emphasis

### **RULE 4: Copy-Paste Ready**
- Prompts should be ready to copy directly into AI tools
- No "insert business name here" placeholders - fill them in
- No "[bracket instructions]" unless they're part of the actual prompt
- Self-contained - no need to reference other documents

---

## 📝 COMPONENT FORMATTING

### **A) MAIN PROMPT BODY**

**Structure:**
```
[Opening instruction - what to create]

[Context section]
- Key detail 1
- Key detail 2
- Key detail 3

[Specific requirements]
Must include:
- Requirement 1
- Requirement 2

[Style/approach guidance]
Style: [specific descriptor]
Tone: [specific descriptor]
Mood: [specific descriptor]

[Anti-patterns]
Avoid:
- Generic pattern 1
- Generic pattern 2

[Uniqueness emphasis]
Make it feel: [unique quality]
Differentiation: [specific unique element]
```

**Example:**
```
Create a hero section image for Riverside Family Dentistry, a family-friendly dental clinic in small-town Oregon.

Scene: Capture a genuine moment during a pediatric checkup - focus on a child's comfortable smile while dentist shows them the "tooth mirror" (handheld mirror to see their own teeth). Setting is a treatment room with large window overlooking the Willamette River, natural afternoon light streaming in.

Visual elements:
- Child (8-10 years old) sitting in treatment chair, relaxed posture
- Dr. Chen showing mirror, both looking at reflection together
- Visible: weighted blanket on lap (anxiety-reduction tool), flavor bar in background
- River view through window (location signature)
- Warm wood tones, plants on windowsill, not sterile

Color palette:
- Primary: Warm natural light (golden hour feeling)
- Accents: Soft sage green (weighted blanket), river blues in background
- Avoid: Clinical white, harsh overhead lighting, stock photo staging

Composition:
- Rule of thirds, child and dentist slightly off-center
- Shallow depth of field - sharp focus on faces, soft focus on background river
- Capture connection and trust, not perfection

Must convey:
- Safety and comfort (child is genuinely relaxed, not acting)
- Personal attention (one-on-one care visible)
- Non-clinical environment (feels more like wellness center)

Avoid:
- Posed, fake smiles
- Sterile medical office aesthetic
- Perfect, unrealistic scenarios
- Stock photo lighting and composition

Make it feel: Like a documentary photo of actual care, not advertising. Authentic moment of trust between provider and patient.
```

---

### **B) TOOL SUGGESTIONS FORMAT**

**Rules:**
- Always phrase as "examples" or "options"
- 3-5 tool suggestions (not just 1)
- Brief context for each tool type
- Emphasize user can find alternatives

**Format:**
```
🛠️ SUGGESTED TOOLS:
Image Generation: Midjourney, DALL-E 3, Stable Diffusion, Ideogram, Leonardo.ai
→ Use any AI image generator that supports detailed prompts and natural photography styles

Alternative: Commission photographer for authentic documentary-style shots

💡 Note: Tools evolve rapidly - explore current options that best handle [specific requirement]
```

**Tool Categories:**
- **Image Generation:** [AI tools]
- **Video Generation:** [AI tools]
- **Copywriting:** [AI tools]
- **Design/Layout:** [Design tools]
- **Website Building:** [No-code/AI builders]
- **SEO/Research:** [Research tools]

---

### **C) EXPECTED OUTPUT FORMAT**

**Rules:**
- Describe what the prompt should produce
- Include format specifications
- Set quality expectations

**Format:**
```
📤 EXPECTED OUTPUT:
- Format: [file type, dimensions, specifications]
- Quality: [resolution, detail level]
- Deliverable: [what exactly user receives]

Example: 
"High-resolution hero image (2400x1400px minimum), natural photography style showing genuine patient-provider interaction. Should feel documentary-authentic, not staged. Suitable for website header with text overlay."
```

---

### **D) TIME ESTIMATE FORMAT**

**Rules:**
- Be realistic
- Account for iteration
- Include both generation and refinement time

**Format:**
```
⏱️ ESTIMATED TIME:
Generation: 5-15 minutes (may need 3-5 variations to get right)
Selection/refinement: 10-20 minutes
Total: ~30 minutes per image

Note: First attempts rarely perfect - budget time for iteration
```

**Time Categories:**
- Quick (5-15 min): Simple text prompts, single images
- Medium (30-60 min): Complex images, longer copy, design concepts  
- Longer (2-4 hours): Video generation, complete page layouts, comprehensive copy
- Extensive (1+ days): Full website builds, multiple rounds of revision

---

### **E) TIP FORMAT**

**Rules:**
- One actionable tip per prompt
- Practical, specific advice
- Based on common pitfalls or optimization

**Format:**
```
💡 TIP:
[Specific actionable advice for using this prompt effectively]
```

**Tip Categories:**
- **Iteration advice:** "Generate 5 variations, compare before choosing"
- **Tool-specific:** "In Midjourney, use --style raw for more photographic results"
- **Quality check:** "Test the image with actual text overlay before finalizing"
- **Combination:** "This pairs well with Prompt 2.3 - use consistent styling"
- **Avoid pitfall:** "Don't accept first generation - AI often gets [specific thing] wrong initially"

---

## 🎯 FULL LIFECYCLE OUTPUT FORMAT

When presenting complete lifecycle prompts, use this structure:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WEBSITE PROJECT LIFECYCLE PROMPTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 CLIENT: [Business Name]
📍 TYPE: [Business Type]  
🎯 INDUSTRY: [Specific Industry]
👥 AUDIENCE: [Target Audience]
✨ BRAND FEEL: [Brand Personality]
🎨 USP: [Unique Selling Point]

Generated: [Date]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


═══════════════════════════════════════════════════════════════
STAGE 1: RESEARCH & STRATEGY
═══════════════════════════════════════════════════════════════

[Prompt 1.1]
[Full formatted prompt]
────────────────────────────────────────────
[Tools, output, time, tip sections]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Prompt 1.2]
[Full formatted prompt]
────────────────────────────────────────────
[Tools, output, time, tip sections]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


═══════════════════════════════════════════════════════════════
STAGE 2: VISUAL IDENTITY
═══════════════════════════════════════════════════════════════

[Prompt 2.1: Hero Image]
[Full formatted prompt]
────────────────────────────────────────────
[Tools, output, time, tip sections]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Continue for all prompts in stage...]


[Continue for all stages...]


═══════════════════════════════════════════════════════════════
EXECUTION ROADMAP
═══════════════════════════════════════════════════════════════

RECOMMENDED ORDER:
1. ✅ Stage 1: Research first (understand before creating)
2. ✅ Stage 2: Generate all visuals (images + videos)
3. ✅ Stage 3: Write all copy (informed by research + visual direction)
4. ✅ Stage 4: Design layouts (with content and visuals ready)
5. ✅ Stage 5: Map structure (organize everything logically)
6. ✅ Stage 6: Build website (assemble all pieces)

TOTAL ESTIMATED TIME: [Realistic total hours]

QUALITY CHECKPOINTS:
□ After Stage 1: Validate industry insights
□ After Stage 2: Review all visuals for brand consistency
□ After Stage 3: Check copy voice is uniform
□ After Stage 4: Ensure design system is coherent
□ After Stage 5: Validate sitemap with stakeholders
□ Before Stage 6: Final review of all assets

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
END OF LIFECYCLE PROMPTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## ✅ FORMATTING QUALITY CHECKLIST

Before finalizing formatted prompts:

- [ ] **Visual hierarchy clear:** Headers, sections, prompts easily distinguishable
- [ ] **Copy-paste ready:** No placeholder brackets, all details filled in
- [ ] **Consistent structure:** Every prompt follows same format template
- [ ] **Complete information:** Tools, outputs, time, tips all included
- [ ] **Professional appearance:** Clean, organized, not cluttered
- [ ] **Scannable:** User can quickly find what they need
- [ ] **Emoji usage consistent:** Same emojis for same section types throughout
- [ ] **Box drawing correct:** No broken lines or misaligned borders
- [ ] **Self-contained:** Each prompt makes sense on its own
- [ ] **Proper spacing:** Neither too cramped nor too spread out

---

## 💡 FORMATTING TIPS

### **Readability**
- Use line breaks generously between major sections
- Don't let lines of text run too long (aim for 80-100 characters max)
- Use bullet points for lists, not dense paragraphs
- Bold key terms sparingly (only truly important words)

### **Consistency**
- Same emoji for same purpose throughout all prompts
- Same header level styling for same hierarchy level
- Same box drawing characters (don't mix ═ and ━ randomly)
- Same metadata order (tools → output → time → tip)

### **User Experience**
- Most important info at top of each prompt (what to create)
- Tool suggestions before output description (what to use, then what to expect)
- Tips at the end (optional enhancement info)
- Stage summaries at stage start (overview before diving in)

---

## 🎯 GOAL

When formatting is done correctly:

**User should:**
- Instantly understand what each prompt does
- Know exactly where to copy-paste it
- See all necessary context without hunting
- Feel confident about time/tool requirements
- Have clear next steps

**User should NOT:**
- Feel confused about what to do
- Need to re-read multiple times
- Search for missing information
- Be uncertain about prompt boundaries
- Feel overwhelmed by wall of text

---

## 📝 MARKDOWN BEST PRACTICES

For outputting these prompts:

**Use:**
- Code blocks for prompt text that should be copied exactly
- Bullet points for lists
- Headers (##, ###) for stage organization  
- Horizontal rules (---) for visual separation
- Consistent indentation

**Avoid:**
- Over-styling (too much bold, italic, strikethrough)
- Inconsistent spacing
- Random formatting changes mid-document
- Mixing markdown styles (tables and lists for same purpose)

---

## ⚠️ CRITICAL NOTES

- **Consistency > Creativity:** Format should be predictable, not surprising
- **Function > Aesthetics:** Clarity more important than looking fancy
- **Mobile-friendly:** Works well on phone screens (no super wide tables)
- **Version control:** Include generation date in header (helps tracking iterations)
- **Adaptation:** Format can flex for different lifecycle types (social media, ads, etc.) but keep core structure
