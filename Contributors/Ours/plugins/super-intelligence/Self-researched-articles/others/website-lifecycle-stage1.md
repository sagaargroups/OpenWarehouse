---
name: website-lifecycle-stage1
category: core
version: 2.0
dependencies: [uniqueness-engine.md, prompt-structure.md, output-format-specs.md, interactive-workflow.md]
---

# SKILL: Website Lifecycle - Stage 1 (Research & Strategy)

## 🎯 PURPOSE
Generate research and strategy prompts ONLY. This is the foundation that makes all other stages unique and customized. Stage 1 must be completed and validated before generating Stages 2-6.

## 📋 WHEN TO USE
- ALWAYS - This is the first step for every website project
- Before generating any visual, content, or design prompts
- When user provides a client brief or project requirement

## 🔧 INPUT REQUIRED
Extract from client requirement:
- **Business Type:** Salon / Dentist / School / NGO / Restaurant / Clinic / etc.
- **Business Name:** [Name]
- **Location:** City, State (critical for local context)
- **Industry:** Specific niche (e.g., "luxury hair salon" vs "budget cuts")
- **Target Audience:** Who visits this business? (age, income, location, needs)
- **Brand Feel:** Professional / Friendly / Luxury / Modern / Traditional / Creative
- **Key Services:** 3-5 main offerings
- **Unique Selling Point:** What makes them different?
- **Initial Positioning:** How they describe themselves

**If any critical info is missing, ASK before generating prompts.**

---

## ⚙️ WHY STAGE 1 IS NON-NEGOTIABLE

### **Without proper research, you'll generate:**
- ❌ Generic industry templates
- ❌ Stock photo aesthetics  
- ❌ Copy that sounds like every competitor
- ❌ Design that doesn't resonate with actual audience
- ❌ Missed differentiation opportunities

### **With proper research, you'll generate:**
- ✅ Specific to THIS business's unique positioning
- ✅ Visuals that match actual customer psychology
- ✅ Copy that speaks to real pain points
- ✅ Design that differentiates from competitors
- ✅ Strategy backed by market data

---

## 📝 RESEARCH PROMPT GENERATION RULES

When generating research prompts:

1. **Location-specific:** Don't say "research the dental industry" - say "research family dentistry in [specific city/region]"
2. **Concrete examples:** Not "what's trending" but "show me 3 specific websites/examples with URLs"
3. **Competitor deep-dive:** Require URLs, specific features, screenshots, detailed observations
4. **Emotional triggers:** Not broad emotions ("trust") but specific moments that trigger them
5. **Persona depth:** Real pain points, actual language they use, specific scenarios
6. **Anti-patterns:** Always ask "what to AVOID" not just what to do
7. **Output template:** Provide structured template for research results

---

## 🔬 THE 4 ESSENTIAL RESEARCH PROMPTS

Every website project needs these 4 research prompts minimum. Customize each with business-specific details.

### **PROMPT 1.1: Industry & Market Context Analysis**

**Purpose:** Understand the specific market niche, not generic industry trends

**Generate this prompt structure:**

```
Research the [specific industry niche] in [specific location/region].

Context: This is for [Business Name], a [business type] targeting [specific audience].

Focus Areas:
1. **Local Market Dynamics:**
   - What's the current state of [industry] in [location]?
   - What are customers in [location] specifically looking for?
   - Any regional trends or preferences unique to [location]?

2. **Visual/Design Trends:**
   - Find 3 successful examples of [business type] websites in similar markets
   - What aesthetic approaches are working? (provide URLs)
   - What design patterns are oversaturated and should be avoided?

3. **Audience Psychology:**
   - What are the top 3 concerns for [target audience] when choosing a [business type]?
   - What emotional needs are driving their decision?
   - What language/terminology resonates vs. what sounds corporate?

4. **Industry-Specific Insights:**
   - [Custom question based on business type]
   - [Example for salon: "What sustainability certifications matter most?"]
   - [Example for dentist: "What reduces dental anxiety in marketing?"]

Provide specific examples, not generalities.
```

**Tool Suggestions:**
- Research tools: ChatGPT, Claude, Perplexity, Gemini
- Note: Execute in 2-3 tools and compare results

---

### **PROMPT 1.2: Competitor Analysis (Deep Dive)**

**Purpose:** Find specific gaps and differentiation opportunities

**Generate this prompt structure:**

```
Analyze direct competitors for [Business Name] in [location].

Task:
1. Find 3-5 [business type] businesses in [location or similar markets]
   - Provide their website URLs
   - Screenshot their homepage
   - Note their key messaging/positioning

2. For EACH competitor, analyze:
   
   **Strengths (what they do well):**
   - Specific design elements that work
   - Copy/messaging that resonates
   - Features or services highlighted
   - Trust-building elements used
   
   **Weaknesses (gaps we can exploit):**
   - Missing features or services
   - Poor user experience issues
   - Confusing or weak messaging
   - Technical problems (slow, not mobile-friendly)
   - Missed opportunities in positioning
   
   **Differentiation Opportunity for Us:**
   - How can [Business Name] position against this?
   - What specific angle can we own?

3. Create a Competitive Matrix:
   | Factor | Competitor 1 | Competitor 2 | Competitor 3 | [Business Name] Opportunity |
   |--------|--------------|--------------|--------------|----------------------------|
   | [Key factor 1] | | | | |
   | [Key factor 2] | | | | |

4. Identify "Blue Ocean" Positioning:
   - What can we claim that NO competitor is claiming?
   - What unique angle makes [Business Name] the ONLY choice for [specific customer need]?

Be specific. Use actual examples and URLs.
```

**Tool Suggestions:**
- Manual research: Browser + competitor websites
- AI analysis: Claude, ChatGPT, Perplexity for synthesis

---

### **PROMPT 1.3: Customer Persona Development**

**Purpose:** Create detailed, realistic customer personas

**Generate this prompt structure:**

```
Create 3 detailed customer personas for [Business Name], a [business type] in [location].

Based on: [Target audience description from brief]

For EACH persona, provide:

**PERSONA [#]: [Give them a descriptive name]**

**Demographics:**
- Age range:
- Location: [specific neighborhoods/areas if local]
- Income level:
- Occupation type:
- Family status:

**Psychographics:**
- Core values (what matters to them):
- Lifestyle (how they spend time):
- Media consumption (where they find info):
- Shopping behavior (how they make decisions):

**Pain Points & Needs:**
- Primary problem they're trying to solve:
- Secondary concerns:
- What frustrates them about current options:
- What would make their experience ideal:

**Emotional Triggers:**
- What would make them trust this business:
- What would make them hesitate or doubt:
- What would excite them enough to share with friends:
- What would make them choose us over competitors:

**Language & Communication:**
- Words/phrases they use (not corporate jargon):
- Tone they respond to (formal/casual/friendly/expert):
- What kind of messaging turns them off:

**Specific Quote:**
"[Something this persona would actually say about needing this service]"

**Where They Are in Journey:**
- How do they discover businesses like ours:
- What research do they do before deciding:
- What's their decision timeline:

Make these feel like REAL people, not marketing archetypes.
```

**Tool Suggestions:**
- Persona development: ChatGPT, Claude
- Combine with actual customer interviews if available

---

### **PROMPT 1.4: Strategic Positioning & Messaging Framework**

**Purpose:** Define how to talk about the business based on research

**Generate this prompt structure:**

```
Based on the industry research, competitor analysis, and customer personas for [Business Name]:

Develop a Strategic Messaging Framework

1. **Core Positioning Statement:**
   [Business Name] is the ONLY [business type] in [location] that [unique differentiation] for [target audience] who [specific need/desire].

2. **Key Messages (Top 3):**
   Message 1: [Primary differentiator]
   - Why it matters: [Customer benefit]
   - Proof point: [How we deliver]
   
   Message 2: [Secondary differentiator]  
   - Why it matters:
   - Proof point:
   
   Message 3: [Tertiary differentiator]
   - Why it matters:
   - Proof point:

3. **Emotional Triggers to Use:**
   [Based on persona research, list 5 specific emotional triggers with examples]
   
   Example:
   - Trigger: "Guilt-free luxury"
     Use when: Discussing premium services with eco-conscious audience
     Language: "Indulge without compromise"

4. **Anti-Patterns (What NOT to Say):**
   ❌ [Generic phrase 1] - Because: [Why it's weak]
   ❌ [Generic phrase 2] - Because: [Why it's oversaturated]
   ❌ [Generic phrase 3] - Because: [Competitor already owns it]

5. **Voice & Tone Characteristics:**
   - Overall voice: [Specific descriptor beyond "professional"]
   - Tone when: [Different contexts need different tones]
     * Homepage hero: [How to sound]
     * Service descriptions: [How to sound]
     * About page: [How to sound]

6. **Visual Direction Insights:**
   Based on audience psychology:
   - Color psychology: [What colors/palettes resonate and why]
   - Imagery style: [Polished vs documentary vs lifestyle, and why]
   - Layout feel: [Minimal vs rich, and why]
   - What visual tropes to AVOID: [Specific examples]

7. **Content Strategy Priorities:**
   Primary goal: [What content needs to accomplish]
   Content pillars: [3-4 main themes to cover]
   Proof elements: [What builds credibility for this audience]

This framework will guide ALL creative decisions in subsequent stages.
```

**Tool Suggestions:**
- Strategy development: Claude, ChatGPT
- Synthesize insights from previous 3 prompts

---

## 📤 OUTPUT TEMPLATE FOR USER

After generating the 4 research prompts, provide this template for user to fill:

```markdown
# RESEARCH RESULTS - [Business Name]

## INDUSTRY & MARKET INSIGHTS

### Key Market Findings:
- [Finding 1]
- [Finding 2]
- [Finding 3]

### Successful Website Examples:
1. [Business Name] - [URL]
   - What works: [Specific elements]
   - What inspired us: [Takeaway]

### Design Trends to Use:
- [Trend 1] - Why: [Reason]
- [Trend 2] - Why: [Reason]

### Design Tropes to AVOID:
- [Overused pattern 1]
- [Overused pattern 2]

---

## COMPETITOR ANALYSIS

### Competitor 1: [Name] ([URL])
**Strengths:**
- [Specific strength with example]

**Weaknesses:**  
- [Specific gap we can exploit]

**Our Opportunity:**
- [How we'll differentiate]

[Repeat for 2-3 more competitors]

### Blue Ocean Positioning:
"We are the ONLY [business type] that [unique claim]"

---

## CUSTOMER PERSONAS

### Persona 1: [Name/Type]
**Demographics:** [Age, location, income, occupation]
**Pain Points:** [Top 3 problems they're trying to solve]
**Emotional Triggers:** [What makes them trust/choose/share]
**Quote:** "[Something they'd actually say]"

[Repeat for Personas 2 & 3]

### Cross-Persona Insights:
- All personas care about: [Common thread]
- Key differentiation needed: [What will make us stand out to all]

---

## STRATEGIC POSITIONING

### Core Position:
[Business Name] is [unique positioning statement]

### Key Messages:
1. [Message 1] - Proof: [How we deliver]
2. [Message 2] - Proof: [How we deliver]  
3. [Message 3] - Proof: [How we deliver]

### Emotional Triggers to Use:
1. [Trigger] - When: [Context] - Language: [Example phrase]
2. [Trigger] - When: [Context] - Language: [Example phrase]
3. [Trigger] - When: [Context] - Language: [Example phrase]

### Voice & Tone:
- Overall: [Specific characteristics]
- Homepage: [Tone for hero]
- Services: [Tone for selling]
- About: [Tone for story]

### Visual Direction:
- Color palette vibe: [Specific direction]
- Photography style: [Specific approach]
- Layout feel: [Specific aesthetic]
- AVOID: [Specific anti-patterns]

---

## CONTENT PRIORITIES

### Primary Goal:
[What the website needs to accomplish]

### Proof Elements Needed:
- [What builds credibility]
- [What reduces friction]
- [What drives conversion]

---

## RECOMMENDATIONS FOR NEXT STAGES

Based on this research:
- Visual stage should: [Specific direction]
- Copy stage should: [Specific direction]  
- Design stage should: [Specific direction]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🎯 AFTER GENERATION: VALIDATION REQUIRED

Once user pastes research results back, validate:

### **Completeness Check:**
- [ ] 3+ competitors analyzed with URLs and specifics
- [ ] 3+ personas with real pain points and triggers
- [ ] Clear unique positioning (not generic)
- [ ] Specific emotional triggers (not broad)
- [ ] Visual direction informed by audience
- [ ] Anti-patterns identified (what to avoid)
- [ ] Voice/tone characteristics defined

### **Depth Check:**
- [ ] Are examples specific or generic?
- [ ] Are personas real or archetypes?
- [ ] Is positioning ownable or vague?
- [ ] Are triggers actionable or conceptual?

### **If Research is Weak:**

Ask clarifying questions:
- "Your personas need more depth. For [Persona 1], what SPECIFIC problem are they trying to solve? Use their words, not marketing speak."
- "The competitor analysis is too surface-level. For [Competitor], what EXACT design element works on their site? Screenshot and explain."
- "This positioning is too generic. Complete this: '[Business Name] is the ONLY [business type] in [location] that ___________.' Make it specific."

### **If Research is Strong:**

Proceed to Stages 2-6 generation by saying:

```
✅ Research validated! Your findings are comprehensive and specific.

Now generating Stages 2-6 (Visual, Content, Design, Structure, Build) with your research insights woven throughout...
```

---

## 💡 USAGE NOTES

- **This skill generates research prompts ONLY** - not final outputs
- **Research prompts must be executed by user** in actual AI tools
- **User brings results back** before getting remaining stages
- **Validation is required** - don't proceed with weak research
- **Reference research findings** in every subsequent stage prompt
- **Output format:** Use prompt-structure.md for formatting

---

## 🔗 WHAT HAPPENS NEXT

After Stage 1 is complete and validated:
1. User has filled research template
2. Gem validates research depth
3. Gem proceeds to `website-lifecycle-stages2-6.md`
4. All prompts in Stages 2-6 reference Stage 1 findings
5. User executes remaining stages with customized prompts

**The research done in Stage 1 is the foundation for everything else. Do not rush or skip it.**
