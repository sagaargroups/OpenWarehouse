---
name: client-lifecycle-routing
description: >
  Master agency client lifecycle, CRM routing, diagnostic audit, and retention engine for D2C With AHrik.
  Governs end-to-end progression across 6 core stages: Lead Intake → Qualification → Stage 2B Diagnostic Audit & Forensics → Deal & SOW → Fulfillment & Invoicing → Retainer Escalation & Advocacy.
  Enforces multi-audit versioning (v1/v2/v3), 3 audit tiers (Quick, Standard, Deep), 12 diagnostic pillars, 8 dedicated child tables, 14 lost reasons, 3-way attribution, carryover mechanics, and contractor security boundaries.
metadata:
  version: v2.0.0
  category: lifecycle
  tags:
    - crm
    - pipeline
    - iso-19011
    - audit
    - lead-qualification
    - multi-audit-versioning
    - carryover-mechanics
    - retainer-escalation
  icon: route
  publisher: d2cwithahrik
  support_tier: primary
  created_at: "2026-10-08"
  updated_at: "2026-10-09"
---

# Master Agency Client Lifecycle, Diagnostic Audit & Routing Engine

> **System Standard:** Universal Diagnostic-Led Agency Lifecycle Engine  
> **Target Framework:** Frappe CRM (`FCRM`), ERPNext Desk, and Sovereign Client Tech Stacks  
> **Core Mandate:** Pitching without a diagnostic is banned. Every lead progresses through deterministic qualification, forensic auditing, automated data carryover, and 90-day longitudinal retainer reviews.

---

## 1. System Overview & Core Invariants

This skill governs the complete end-to-end journey of every prospective and active brand partnering with **D2C With AHrik**. It replaces static folder spreadsheets with **real-time, database-driven CRM mechanics**.

### The 5 Foundational Invariants:
1. **Single Source of Truth**: Every prospect and client lives as a unified document in the CRM database (`CRM Lead` $\rightarrow$ `CRM Audit` $\rightarrow$ `CRM Deal` $\rightarrow$ `CRM Organization` + `Contact` $\rightarrow$ `Customer`). No fragmented records or orphaned spreadsheets.
2. **Diagnostic-Led Pitching (The Core Agency Rule)**: We never pitch capabilities or quote pricing blindly. Every high-value proposal must be preceded by an authoritative **Forensic Brand Audit** that proves we understand the brand's growth bottlenecks better than their internal team does.
3. **Automated Carryover Mechanics**: Data gathered during lead ingestion and auditing must automatically cascade to `CRM Organization`, `Contact`, and `CRM Deal` upon qualification. Manual re-entry is eliminated.
4. **"Deal Won" is Just the Beginning (The Retainer Flywheel)**: Initial project closing is only Phase 1. The agency's core enterprise valuation and profitability derive from **Retainer Escalation**, **Cross-Pillar Upselling**, and **90-Day Longitudinal Re-Audits**.
5. **Contractor Security & Least Privilege**: External creative specialists and contractors are restricted via Frappe `User Permission` to see ONLY their assigned brands. Financial margins and private API keys are strictly locked.

---

## 2. The Complete 6-Stage Lifecycle Map

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ STAGE 1: LEAD INTAKE & ATTRIBUTION                                          │
│ Cold Scraper, Listmonk Outbound, Inbound Webhook, WhatsApp Click, Referral   │
│ Stamped with 3-Way Attribution (Source + Captured By + Lead Owner)          │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ STAGE 2: QUALIFICATION & BANT/CHAMP FIT                                     │
│ Validate Need, Budget (₹1L+), Decision Authority, and Growth Timeline       │
│ Status: New → Attempted Contact → Contacted → Qualified                     │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ STAGE 2B: FORENSIC DIAGNOSTIC AUDIT (ISO 19011 STANDARD)                    │
│ Quick (15m SDR) | Standard (1h Strategist) | Deep (3h Retainer)              │
│ 12 Pillars, 8 Child Tables, Score (0-100), Maturity Band, Frozen PDF Report│
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ STAGE 3: OPPORTUNITY & DEAL CONVERSION                                      │
│ Convert Lead → Deal. Automated Carryover to CRM Organization & Contact      │
│ Qualification → Proposal/Quotation → Negotiation → Ready to Close → Won    │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ STAGE 4: ACTIVATION & SPRINT FULFILLMENT (LEAD-TO-CASH)                      │
│ 50% Advance Invoiced (ERPNext) → VIP Comm Channel → Milestone Deliveries    │
│ Final Client Sign-off → 50% Balance Cleared → Handover Asset Vault          │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ STAGE 5: RETAINER ESCALATION & 90-DAY RE-AUDIT FLYWHEEL                     │
│ 7-Day Handover Rule: Upsell Monthly Recurring Retainer (MRR)               │
│ Automated Trigger: Next Audit Due (Delivered Date + 90 Days) → Version v2   │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ STAGE 6: COMPOUNDING ADVOCACY & RETENTION                                   │
│ Before/After Case Study Published → Structured 14-Day Referral Loop        │
│ Permanent Client Memory & Lifetime Revenue Maximization                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Deep Stage Breakdown & Execution Rules

### Stage 1: Lead Intake & 3-Way Attribution
Captures every prospective lead entering the agency funnel.

* **Ingestion Channels**:
  * Outbound AI Scrapers (Antigravity Lead Hunter, Google Maps / Instagram bot).
  * Outbound Email Campaigns (Listmonk cluster dispatches).
  * Direct Website Contact Form (`/api/contact`).
  * Direct WhatsApp Inbound (`https://wa.me/...`).
  * Inbound Referrals & Strategic Partnerships.
* **The 3-Way Attribution Triad**:
  1. `source`: Platform where the prospect was found (`Instagram`, `LinkedIn`, `Website`, `Google Maps`, `Campaign`).
  2. `custom_captured_by`: Ingestion mechanism (`AI Agent`, `Manual (Human)`, `Web Form`, `WhatsApp Inbound`, `Webhook`).
  3. `lead_owner`: Assigned Human SDR or Account Executive responsible for closing the deal.
* **Telemetry & Tracking**:
  * `custom_agent_name`: Stamped by automated bots (e.g. `Antigravity Prospector`).
  * `custom_discovery_url`: Exact URL where the brand was scraped or discovered.
  * UTM parameters: `custom_utm_source`, `custom_utm_medium`, `custom_utm_campaign`, `custom_utm_content`, `custom_utm_term`.
* **Lead Temperature**:
  * `Cold`: Raw scraper discovery or unopened cold email.
  * `Warm`: Opened cold email $\ge 2$ times or browsed agency website.
  * `Hot`: Submitted web form, booked a call, or messaged WhatsApp directly.

---

### Stage 2: Qualification & Commercial Filtering (MQL $\rightarrow$ SQL)
Filters inbound inquiries to protect senior creative and engineering bandwidth.

* **BANT / CHAMP Qualification Protocol**:
  * **Need**: Clear requirement matching our 4 agency pillars (Ahrik Studio visual productions, Ahrik Build web engineering, Ahrik Market paid ads, Ahrik Network automations).
  * **Budget**: Meets minimum viable agency engagement (₹1,00,000+ project or ₹75,000/mo retainer).
  * **Authority**: Speaking with Founder, Co-Founder, CMO, CEO, or authorized VP.
  * **Timeline**: Immediate ($< 30$ days) or confirmed for upcoming quarter.
* **Lead Status Progression**:
  `New` $\rightarrow$ `Attempted Contact` $\rightarrow$ `Contacted` $\rightarrow$ `Audit Scheduled` $\rightarrow$ `Audit Delivered` $\rightarrow$ `Qualified`.

---

### Stage 2B: Forensic Diagnostic Audit (The 3 Tiers & 12 Pillars)
The foundational differentiator of D2C With AHrik. An audit is generated before or immediately following initial discovery.

#### The 3 Audit Scope Tiers:
| Audit Tier | Duration | Performed By | Purpose & Deliverables |
|:---|:---:|:---|:---|
| **Quick Audit** | 15 mins | SDR / AI Bot | Pre-discovery snapshot. Evaluates digital presence, top 3 revenue channels, and 24 quick `(Q)` questions. Identifies top 3 surface pain points. |
| **Standard Audit** | 1 hour | Strategist / AE | Pre-proposal pitch diagnostic. Comprehensive evaluation across all 12 pillars, all 8 child tables, and scorecard rollup. |
| **Deep Audit** | 3 hours | Senior Director | High-ticket paid retainer / kickoff baseline. Complete tech stack inspection, competitor teardowns, evidence attachments, and 90-day execution roadmap. |

#### The 12 Universal Diagnostic Pillars:
1. **Visual Brand & Creative Identity (10%)**: Logo marks, packaging, typography, photography art direction, aesthetic consistency.
2. **Web UX & Storefront Performance (10%)**: Core Web Vitals, mobile responsiveness, navigation clarity, checkout friction.
3. **Mobile & App Ecosystem (5%)**: Mobile-first responsiveness, PWA features, proprietary iOS/Android app engagement.
4. **Social Proof & Community Trust (10%)**: Verified customer reviews, UGC volume, influencer tags, trust badges.
5. **Content & Media Cadence (5%)**: Reels/TikTok video frequency, founder stories, visual storytelling.
6. **Paid Advertising & Meta Ad Library (10%)**: Active Meta/Google ads count, creative hook diversity, copy angles, landing page continuity.
7. **Marketplace Engine (Amazon/Flipkart) (10%)**: Brand Store quality, A+ Content, review ratings, Best Seller Rank (BSR).
8. **Quick Commerce (Blinkit/Zepto/Instamart) (5%)**: Instant grocery presence, pin-code availability, impulse placement.
9. **Tech Stack & Infrastructure (10%)**: E-commerce platform (Shopify Plus/Next.js), ERP/CRM integration, headless capabilities.
10. **SEO, Search & Local Footprint (10%)**: Google Business Profile, organic keyword rankings, local reviews.
11. **Retention, CRM & Customer Lifetime Value (10%)**: Email capture popups, SMS/WhatsApp flows, loyalty programs, post-purchase nurturing.
12. **Omnichannel & Physical Distribution (5%)**: Retail store footfall, wholesale channels, offline packaging impact.

#### The 8 Dedicated Child Tables:
1. `Audit Presence Row` (`presence_audit`): Evaluates channels across Owned, Social, Marketplace, and Directory.
2. `Audit Revenue Row` (`revenue_channels`): Maps revenue share %, trend (Growing/Stable/Declining), and margin band.
3. `Audit Source Row` (`lead_sources`): Maps where the brand gets its traffic (Meta Ads, Google Search, Organic, Influencers).
4. `Audit Tech Row` (`tech_stack`): Catalogs tools across Ecom, Analytics, CRM, Email, and Payments.
5. `Audit Competitor Row` (`competitor_benchmarks`): Benchmark against top 3 market competitors with score comparisons.
6. `Audit Checklist Row` (`compliance_checklist`): Binary verification (SSL active, GST displayed, Return Policy clear).
7. `Audit Pillar Score Row` (`pillar_scores`): Granular 0-100 scores for each of the 12 pillars.
8. `Audit Action Plan Row` (`action_plan`): Prioritized 30-60-90 day recommendations (Quick Win, Strategic, Retainer).

#### Audit Maturity Bands:
* **0–20: Foundational** — Critical infrastructure missing; urgent foundational build required.
* **21–40: Developing** — Fragmented presence, weak ad efficiency, low conversion rates.
* **41–60: Established** — Solid operational baseline; ready for creative and CRO acceleration sprints.
* **61–80: Scaling** — High-performing brand; optimized for aggressive ad spend and retainer expansion.
* **81–100: Market Leader** — Category dominator; focus on omnichannel dominance and brand equity.

---

### Stage 3: Opportunity, Deal Conversion & Data Carryover
When a lead is qualified, it is converted into a **`CRM Deal`**, simultaneously creating a permanent **`CRM Organization`** and **`Contact`**.

#### The Automated Carryover Mechanics:
To guarantee zero data omission, field values automatically transfer from `CRM Lead` to downstream documents:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        LEAD CONVERSION CARRYOVER                       │
├────────────────────────────────────────────────────────────────────────┤
│ FROM CRM Lead:                                                         │
│ • Organization Name, Website, Industry, Territory                      │
│ • 7 Digital Footprint URLs (Storefront, Instagram, Facebook, etc.)     │
│ • Classification: custom_company_type, custom_gstin                    │
│ • Audit Rollups: custom_latest_audit, custom_audit_score, report file  │
├──────────────────────────────────┬─────────────────────────────────────┤
│                                  ▼                                     │
│ TO CRM Organization:             │ TO CRM Deal:                        │
│ • Permanent company master       │ • Deal Name: "{Brand} — {Service}"  │
│ • Stores all 7 URLs & GSTIN      │ • Carries audit score & report link │
│ • Stores audit history rollups   │ • Carries budget & requirement notes│
│                                  │ • Owner assigned to human closer    │
├──────────────────────────────────┴─────────────────────────────────────┤
│                                  ▼                                     │
│ TO Contact:                                                            │
│ • First Name, Last Name, Email, Mobile No                              │
│ • custom_whatsapp_no, custom_decision_role                             │
│ • Explicit Consent: custom_whatsapp_opt_in, custom_consent_given       │
└────────────────────────────────────────────────────────────────────────┘
```

#### Deal Pipeline Stages:
1. `Qualification`: Scope objectives confirmed and deliverable roadmap outlined.
2. `Proposal / Quotation`: Executive pitch deck, audit presentation, and formal SOW delivered.
3. `Negotiation`: Milestone schedules, revision policies, and payment terms refined.
4. `Ready to Close`: Final Master Services Agreement (MSA) and SOW sent for electronic signature.
5. `Won`: Agreement signed and advance deposit invoiced.
6. `Lost`: Deal closed without signature $\rightarrow$ routed to non-linear recovery branches.

---

### Stage 4: Activation & Sprint Fulfillment (Lead-to-Cash)
Flawless sprint delivery with strict scope governance.

* **50% Advance Deposit Gate**:
  * Work strictly begins **after** the 50% advance invoice clears into agency accounts via ERPNext (`Sales Invoice` $\rightarrow$ `Payment Entry`).
* **Client Onboarding (Day 1-2)**:
  * Brand onboarding intake completed. Dedicated VIP communication group established (WhatsApp VIP or Slack).
  * Asset intake completed (raw products, logo vectors, font files, brand guidelines).
* **3-Milestone Sprint Execution**:
  * **Milestone 1 (Approval)**: Creative moodboards, wireframes, or strategy decks signed off.
  * **Milestone 2 (Production)**: AI photoshoot generation, web engineering, or ad setup completed.
  * **Milestone 3 (QA & Review)**: Client feedback round, quality assurance, and final revisions.
* **Handoff & Final Billing**:
  * Final deliverables transferred to client vault.
  * Remaining 50% balance invoice issued and cleared.

---

### Stage 5: Retainer Escalation & 90-Day Longitudinal Re-Audits
The transition from transactional services to recurring monthly retainers (MRR).

* **The 7-Day Transition Rule**: Never close a one-time project without pitching an ongoing retainer. Present the continuous growth roadmap within 7 days of delivery while trust and excitement are at peak.
* **The 90-Day Longitudinal Re-Audit (ISO 19011 Flywheel)**:
  * On every completed audit, `custom_next_audit_due` is automatically set to **`custom_audit_delivered_on + 90 days`**.
  * When 90 days elapse, the CRM prompts a **Quarterly Re-Audit (Version v2)**.
  * Re-auditing measures the **Score Delta** (`score_delta = score_v2 - score_v1`):
    * Proves to the client exactly how much our work increased their digital score, CRO, or ad performance.
    * Serves as the ultimate mathematical justification for renewing or upgrading their monthly retainer!

---

### Stage 6: Compounding Advocacy & Long-Term Retention
Leveraging client success to fuel compounding organic acquisition.

* **Case Study Asset Generation**:
  * Extract verifiable metrics: conversion lift %, ROAS improvement, cost savings.
  * Publish visual Before/After case studies to `/work/` as permanent proof assets.
* **The Structured 14-Day Referral Loop**:
  * 14 days post-handover, the account executive requests warm introductions to 2 peer brand founders.
* **Permanent Account Memory**:
  * Maintain complete lifetime activity history: all audits, total billing volume, brand preferences, and executive relationships.

---

## 4. Multi-Audit & Advanced Operational Edge Cases

### Edge Case 1: Multi-Audit Versioning (v1, v2, v3 Longitudinal Tracking)
A brand is never static. As they evolve, multiple audits are linked to the same Lead or Organization:
* `version`: Integer automatically incrementing (`1`, `2`, `3`...).
* `audit_cycle`: Categorizes the context:
  * `Pre-Sale Snapshot`: Initial quick scan used to close the deal.
  * `Onboarding Baseline`: Deep forensic audit conducted during week 1 of engagement.
  * `Quarterly Review (90-Day)`: Longitudinal retainer review evaluating growth.
  * `Annual Review`: Year-end strategic recalibration.
  * `Trigger-Based Event`: Audit triggered by a new website launch, rebranding, or crisis.
* `previous_audit`: Direct Foreign Key pointing to the earlier audit document.
* `score_delta`: Tracks numerical gain/loss (+15 points, -3 points).
* **Relational Unlinking Rule**: In Frappe CRM, `CRM Lead.custom_latest_audit` and `Lead Audit.lead` mutually reference each other. Before deleting a test lead or merging duplicates, **always clear `custom_latest_audit = null`** to avoid `LinkExistsError (417)`.

### Edge Case 2: Multi-Product & Hero SKU Audits
When auditing large brands with diverse product lines (e.g. Luxury Footwear vs. Daily Casuals):
* The parent audit evaluates brand-level digital presence and storefront performance.
* Child line items in `Audit Revenue Row` evaluate specific product lines and SKU categories.
* Deep audits attach product-specific PDP URLs and track individual SKU conversion friction.

### Edge Case 3: The 14 Standardized Lost & Disqualification Reasons
When a lead or deal fails to close, it must never be left in limbo. It must be stamped with an exact loss reason to trigger the correct recovery playbook:

| # | Standardized Lost Reason | Automated Recovery Playbook |
|:---:|:---|:---|
| **01** | `Budget Too Low` | Route to self-serve educational newsletter; flag for revisit in 6 months. |
| **02** | `Ghosted / Unresponsive` | Trigger 3-touch breakup sequence (leaves door open, 40%+ response rate). |
| **03** | `Went with Competitor` | Stamp competitor name in CRM; set automated task for 90 days (when initial competitor engagement faces friction). |
| **04** | `Timing Not Right` | Add to Listmonk monthly industry insights drip; schedule check-in for next quarter. |
| **05** | `Feature / Capability Gap` | Log requested capability in product engineering backlog. |
| **06** | `Internal Team Handling` | Check back in 6 months to evaluate whether internal execution met their growth goals. |
| **07** | `Authority Unreachable` | Route to SDR multi-threading sequence to connect with CEO or CMO via LinkedIn. |
| **08** | `Inactive Business / Shut Down`| Archive lead; suppress from active outbound sequences. |
| **09** | `Out of Service Area / Territory`| Keep on file for future international market expansion. |
| **10** | `Duplicate Record` | Merge into primary canonical record; preserve earlier audit links. |
| **11** | `Spam / Fake Lead` | Blacklist email and IP in firewall and Listmonk. |
| **12** | `Strategy Mismatch` | Respectfully decline engagement; preserve reputation. |
| **13** | `Legal / Regulatory Block` | Mark compliance block; require legal clearance before re-engagement. |
| **14** | `Other` | Mandatory freeform explanation required in `custom_lost_reason_notes`. |

### Edge Case 4: Contractor Security & Least Privilege Boundary
* **No Shared API Keys**: External creative freelancers and fulfillment specialists never receive root credentials or API secrets.
* **Row-Level User Permissions**: Contractors log in via browser session and are restricted via Frappe `User Permission` to see ONLY the specific `CRM Organization` or `CRM Lead` assigned to them.
* **Perm Level 1 Financial Lock**: Sensitive commercial data (client margin bands, SOW deal values, agency profit margins) are locked at **Perm Level 1** (viewable only by Executive Admins and Account Executives).

---

## 5. Autonomous Operator & AI Execution Contracts

### Contract 1: Ingesting Lead with 3-Way Attribution
```python
from frappe_mcp.client import FrappeClient

client = FrappeClient(url="https://frappe-crm.appmarkit.com", api_key="<key>", api_secret="<secret>")

# Create Lead with 3-Way Attribution
client.create_doc("CRM Lead", {
    "doctype": "CRM Lead",
    "first_name": "Rohan",
    "last_name": "Deshmukh",
    "email": "rohan@deshmukhcouture.com",
    "mobile_no": "+919820123456",
    "custom_whatsapp_no": "+919820123456",
    "organization": "Deshmukh Couture",
    # 1. Origin Platform
    "source": "Instagram",
    # 2. Execution Mechanism
    "custom_captured_by": "AI Agent",
    "custom_agent_name": "Antigravity Prospector",
    "custom_discovery_url": "https://instagram.com/deshmukhcouture",
    # 3. Commercial Closer
    "lead_owner": "sagar@appmarkit.com",
    "status": "New",
    "lead_temperature": "Warm",
    "custom_company_type": "D2C Brand",
    "custom_online_store_url": "https://deshmukhcouture.com",
    "custom_instagram_url": "https://instagram.com/deshmukhcouture"
})
```

### Contract 2: Creating a Diagnostic Audit (`Lead Audit`)
```python
# Create Standard Diagnostic Audit linked to Lead
audit = client.create_doc("Lead Audit", {
    "doctype": "Lead Audit",
    "lead": "LEAD-2026-00001",
    "organization": "Deshmukh Couture",
    "audit_type": "Standard",
    "audit_template": "D2C Brand Standard",
    "auditor": "sagar@appmarkit.com",
    "audit_date": "2026-10-09",
    "status": "Delivered",
    "version": 1,
    "audit_cycle": "Pre-Sale Snapshot",
    "overall_score": 58,
    "maturity_band": "Established",
    "next_audit_due": "2027-01-07"  # +90 Days
})

# Rollup link onto Lead
client.update_doc("CRM Lead", "LEAD-2026-00001", {
    "custom_latest_audit": audit["name"],
    "status": "Audit Delivered"
})
```

### Contract 3: Converting Lead to Deal & Organization Carryover
```python
# 1. Create permanent Organization with carried-over URLs
client.create_doc("CRM Organization", {
    "doctype": "CRM Organization",
    "organization_name": "Deshmukh Couture",
    "custom_slug": "deshmukh-couture",
    "website": "https://deshmukhcouture.com",
    "custom_company_type": "D2C Brand",
    "industry": "Apparel & Accessories",
    "territory": "Mumbai",
    "custom_online_store_url": "https://deshmukhcouture.com",
    "custom_instagram_url": "https://instagram.com/deshmukhcouture",
    "custom_latest_audit": audit["name"],
    "custom_audit_score": 58,
    "custom_audit_maturity_band": "Established",
    "custom_captured_by": "AI Agent",
    "custom_next_audit_due": "2027-01-07"
})

# 2. Create Commercial Deal
client.create_doc("CRM Deal", {
    "doctype": "CRM Deal",
    "deal_name": "Deshmukh Couture — D2C Acceleration Sprint",
    "organization": "Deshmukh Couture",
    "status": "Proposal/Quotation",
    "annual_revenue": 250000.0,
    "custom_latest_audit": audit["name"],
    "lead_owner": "sagar@appmarkit.com"
})

# 3. Mark Lead as Qualified / Converted
client.update_doc("CRM Lead", "LEAD-2026-00001", {
    "status": "Qualified"
})
```
