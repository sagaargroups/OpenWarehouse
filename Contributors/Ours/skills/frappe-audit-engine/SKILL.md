---
name: frappe-audit-engine
description: >
  Master operating engine and schema specification for Forensic Brand Audits in Frappe CRM (DocType CRM Audit).
  Governs the frontline modal popup in Pink CRM (/crm), the complete Frappe Desk backend form (/app/crm-audit),
  12-pillar scoring, 8 child tables, ISO 19011 periodic re-audit chaining, and programmatic MCP REST API automation.
metadata:
  version: v1.1.0
  category: crm
  tags:
    - frappe
    - crm
    - audit
    - iso-19011
    - scorecard
    - re-audit
    - 3-tier-crud
  icon: fact_check
  publisher: d2cwithahrik
  support_tier: primary
  created_at: "2026-10-09"
  updated_at: "2026-10-09"
---

# Frappe Forensic Audit Engine (`CRM Audit`)

> **Platform:** Frappe CRM (`FCRM`) & Frappe Framework Desk (`https://frappe-crm.appmarkit.com`)  
> **Entity DocType:** `CRM Audit` (Module: `FCRM` / `CRM`)  
> **Submittable:** No (`is_submittable = 0`)  
> **Audit Standards Adopted:** **ISO 19011:2018** (Audit Evidence & Governance) + **Kotler Marketing Audit** (Systematic & Periodic)  
> **Standard:** Universal 3-Tier Architecture (Pink CRM Modal $\rightarrow$ Frappe Desk Core $\rightarrow$ MCP API)

---

## 1. Architectural Architecture: Wrapper vs. Desk Core

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                         CRM AUDIT 3-TIER OPERATIONAL TOPOLOGY                          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 1: PINK CRM MODAL POPUP WRAPPER (/crm)                                            │
│ • High-velocity diagnostic modal launched directly from Lead / Deal drawer.           │
│ • Two clean functional tabs: "Details" (Scoping) and "Scoring" (Metrics & PDF).        │
│ • Fast diagnostic delivery during strategy calls without leaving the sales board.      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 2: UNIVERSAL FRAPPE DESK BACKEND (/app/crm-audit)                                  │
│ • Full administrative evidence collection suite holding all 8 dedicated child tables. │
│ • Granular 12-pillar scoring engine, competitor benchmarks, and tech stack telemetry.  │
│ • Longitudinal re-audit chaining: tracks `previous_audit`, `score_delta`, `next_due`.  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 3: PROGRAMMATIC MCP & REST API LEVEL (Python / FrappeClient)                      │
│ • Automated scraping bots inject multi-channel presence data and compute scorecards.   │
│ • Headless PDF print compilation and bi-directional rollup to `CRM Lead` & `CRM Deal`. │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Tier 1: Pink CRM App Level (`/crm/leads` Modal Popup)

When a sales rep or strategist clicks inside the `Latest Audit` input field on a Lead or Deal, Frappe CRM launches the **"New Audit" Modal Popup**:

### Tab 1: Section "Details" (Scoping & Ownership)
* **Company \*** (`entity_name`): Trade display name of the prospect brand.
* **Cycle** (`audit_cycle`): `Pre-Sale Snapshot`, `Onboarding Baseline`, `Quarterly Review`, `Annual Review`, `Trigger-Based Event`.
* **Lead** (`lead`): Linked `CRM Lead` document ID (e.g. `CRM-LEAD-2026-00014`).
* **Type \*** (`audit_type`):
  * `Quick` (15 mins, SDR pre-call scan, 24 core questions).
  * `Standard` (1 hour, Strategist pitch deck, all 12 pillars).
  * `Deep` (3 hours, Paid retainer kickoff baseline, full competitor teardowns).
* **Organization** (`organization`): Linked legal entity (`CRM Organization`).
* **Auditor \*** (`auditor`): Staff user conducting the audit (Default: Current User).
* **Deal** (`deal`): Associated commercial opportunity (`CRM Deal`).
* **Status \*** (`status`): `Draft` $\rightarrow$ `In Review` $\rightarrow$ `Final` $\rightarrow$ `Delivered` $\rightarrow$ `Superseded`.
* **Audit Date \*** (`audit_date`): Date of diagnostic evaluation.
* **Version** (`version`): Integer tracking versioning (`1` on initial audit, increments on re-audits).

### Tab 2: Section "Scoring" (Performance Rollup & PDF Attachment)
* **Score** (`overall_score`): Composite float/int grade (`0.000` to `100.000`).
* **Delivered On** (`delivered_on`): Exact date presented to client.
* **Maturity** (`maturity_band`): `Foundational` (0-20), `Developing` (21-40), `Established` (41-60), `Scaling` (61-80), `Market Leader` (81-100).
* **Delivered Via** (`delivered_via`): `Live Strategy Call`, `WhatsApp Loom`, `Email Deck`, `In-Person Pitch`.
* **Previous Audit** (`previous_audit`): Foreign key to past audit for delta tracking.
* **Next Due** (`next_audit_due`): **The Retainer Engine Trigger**. Automatically set to Delivered Date + 90 days.
* **Score Delta** (`score_delta`): Calculated growth/decline (`overall_score - previous_score`).
* **Report File** (`report_file`): Attach file input holding the frozen executive PDF deck.

---

## 3. Tier 2: Universal Frappe Desk Level (`/app/crm-audit`)

The comprehensive administrative evidence collection form (`Frappe CRM > CRM Audit > New CRM Audit`):

### 1. The 12 Universal Diagnostic Pillars (Weighted to 100%)
1. **Visual Brand & Creative Identity (10%)**: Logo marks, packaging, typography, photography art direction.
2. **Web UX & Storefront Performance (10%)**: Core Web Vitals, mobile UX, checkout friction, CRO architecture.
3. **Mobile & App Ecosystem (5%)**: Mobile-first responsive feel, PWA, iOS/Android apps.
4. **Social Proof & Community Trust (10%)**: Verified customer reviews, UGC volume, influencer tags.
5. **Content & Media Cadence (5%)**: Reels frequency, founder video storytelling, post consistency.
6. **Paid Advertising & Meta Ad Library (10%)**: Active ads count, creative hook diversity, copy angles.
7. **Marketplace Engine (Amazon/Flipkart) (10%)**: Brand Store, A+ content quality, Best Seller Rank (BSR).
8. **Quick Commerce (Blinkit/Zepto) (5%)**: Instant grocery presence, pin-code availability, impulse placement.
9. **Tech Stack & Infrastructure (10%)**: Ecom platform (Shopify Plus/Next.js), ERP/CRM, analytics stack.
10. **SEO, Search & Local Footprint (10%)**: Google Business Profile, organic search authority, local reviews.
11. **Retention, CRM & LTV (10%)**: Email capture flows, SMS/WhatsApp marketing, loyalty programs.
12. **Omnichannel & Physical Distribution (5%)**: Retail footfall, wholesale channels, offline packaging impact.

### 2. The 8 Dedicated Child Tables
1. `presence_audit` (`Audit Presence Row`): Channels across Owned, Social, Marketplace, and Directory (handle, followers, ratings, visual quality rating 0-5).
2. `revenue_channels` (`Audit Revenue Row`): Revenue share %, monthly turnover, trend (Growing/Stable/Declining), margin bands.
3. `source_channels` (`Audit Source Row`): Customer acquisition channels (Meta Ads, Google Search, Organic, Influencer).
4. `tech_stack` (`Audit Tool Row`): Tools cataloged across Ecom, Analytics, CRM, Email, and Payments.
5. `competitors` (`Audit Competitor Row`): Direct comparison against top 3 competitors with score deltas.
6. `checklist` (`Audit Checklist Row`): Binary hygiene verification (SSL, GST displayed, Return Policy).
7. `pillar_scores` (`Audit Pillar Score Row`): Granular 0-100 scores across all 12 pillars.
8. `action_plan` (`Audit Action Row`): Prioritized 30-60-90 day recommendations (Quick Win, Strategic, Retainer).

---

## 4. Tier 3: MCP & REST API Level (Python `FrappeClient`)

Headless, programmatic execution contracts for diagnostic automation.

### Contract 1: Ingesting an Audit with Child Tables
```python
from frappe_mcp.client import FrappeClient

client = FrappeClient(url="https://frappe-crm.appmarkit.com", api_key="<key>", api_secret="<secret>")

audit = client.create_doc("CRM Audit", {
    "doctype": "CRM Audit",
    "entity_name": "Deshmukh Couture",
    "lead": "CRM-LEAD-2026-00014",
    "audit_type": "Standard",
    "audit_cycle": "Pre-Sale Snapshot",
    "auditor": "sagar@appmarkit.com",
    "audit_date": "2026-10-09",
    "status": "Final",
    "version": 1,
    "overall_score": 58.5,
    "maturity_band": "Established",
    "next_audit_due": "2027-01-07",
    # Child Table: Presence Audit
    "presence_audit": [
        {
            "channel": "Instagram",
            "url": "https://instagram.com/deshmukhcouture",
            "audience_size": 48200,
            "quality_score": 4
        },
        {
            "channel": "Storefront",
            "url": "https://deshmukhcouture.com",
            "quality_score": 3
        }
    ]
})
```

### Contract 2: Re-Audit Longitudinal Chaining (Quarterly v2)
```python
# Create Version 2 Re-Audit linked to prior baseline
v2_audit = client.create_doc("CRM Audit", {
    "doctype": "CRM Audit",
    "entity_name": "Deshmukh Couture",
    "organization": "Deshmukh Couture",
    "version": 2,
    "previous_audit": "AUD-2026-00014",
    "audit_cycle": "Quarterly Review",
    "audit_date": "2027-01-07",
    "overall_score": 74.0,
    "score_delta": 15.5,                                      # +15.5 Points Gain!
    "maturity_band": "Scaling",
    "next_audit_due": "2027-04-07"
})
```

### Contract 3: Reverse Rollup to Lead
```python
# Write completed diagnostic back into CRM Lead
client.update_doc("CRM Lead", "CRM-LEAD-2026-00014", {
    "custom_latest_audit": audit["name"],
    "custom_audit_score": 58,
    "custom_audit_maturity_band": "Established",
    "status": "Audit Delivered"
})
```

---

## 5. Universal 8-Action CRUD & Operations Matrix

| Operation | Tier 1: Pink CRM (/crm) | Tier 2: Frappe Desk (/app) | Tier 3: MCP / API (Python) |
|:---|:---|:---|:---|
| **1. CREATE** | "New Audit" popup modal in Lead drawer | `/app/crm-audit/new` with full child tables | `client.create_doc("CRM Audit", {...})` |
| **2. READ** | Audit summary cards in Lead/Deal sidebar | List View, Filter by Auditor/Score, Timeline | `client.get_doc("CRM Audit", id)` / `search_docs()` |
| **3. UPDATE** | Edit Scoring tab fields in popup | Edit 8 child tables, adjust pillar weights | `client.update_doc("CRM Audit", id, {...})` |
| **4. DELETE** | Action menu $\rightarrow$ Delete | `Menu > Delete` (Guarded by Lead reference) | Unlink `CRM Lead.custom_latest_audit` $\rightarrow$ `delete_doc()` |
| **5. PRINT / PDF**| Click `report_file` PDF attachment | `Menu > Print` $\rightarrow$ Executive Growth Audit Deck | `client.call_method("frappe.client.get_print", ...)` |
| **6. COMMUNICATE**| Send PDF report via WhatsApp click | Native Desk Email with PDF attachment | Automated transactional delivery via Listmonk |
| **7. ASSIGN / RLS**| Assign `auditor` in Details tab | `Menu > Assign To` (`ToDo`) for team strategist | Create `ToDo` document assigned to strategist |
| **8. DELIVER** | Mark Status `Delivered` in popup | Triggers `deliver_and_rollup()` Python hook | Auto-stamps `next_audit_due` (+90d) & rolls up to Lead |
