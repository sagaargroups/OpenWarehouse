---
name: frappe-lead-engine
description: >
  Master operating manual and 3-tier schema specification for Leads in Frappe CRM (DocType CRM Lead).
  Governs frontline sales interactions in Pink CRM (/crm), the complete 103-field administrative form in Frappe Desk (/app/crm-lead),
  programmatic MCP REST API automation, 3-way ingestion attribution, and the native 8-action CRUD matrix.
metadata:
  version: v1.1.0
  category: crm
  tags:
    - frappe
    - crm
    - lead
    - attribution
    - qualification
    - 3-tier-crud
  icon: person_search
  publisher: d2cwithahrik
  support_tier: primary
  created_at: "2026-10-09"
  updated_at: "2026-10-09"
---

# Frappe Lead Operating Engine (`CRM Lead`)

> **Platform:** Frappe CRM (`FCRM`) & Frappe Framework Desk (`https://frappe-crm.appmarkit.com`)  
> **Entity DocType:** `CRM Lead` (Module: `CRM`)  
> **Submittable:** No (`is_submittable = 0`)  
> **Standard:** Universal 3-Tier Architecture (Pink CRM Wrapper $\rightarrow$ Frappe Desk Core $\rightarrow$ MCP API)

---

## 1. Architectural Architecture: Wrapper vs. Desk Core

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                          CRM LEAD 3-TIER OPERATIONAL TOPOLOGY                          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 1: PINK CRM APP WRAPPER (/crm/leads)                                              │
│ • Frontline SDR & AE interface designed for high-velocity qualification.               │
│ • Slide-out action drawer, 1-click WhatsApp web trigger, and inline status dropdown.   │
│ • Right-side "Audits" section: Launches the "New Audit" modal popup.                  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 2: UNIVERSAL FRAPPE DESK BACKEND (/app/crm-lead)                                  │
│ • Administrative single source of truth managing all 103 database fields.              │
│ • Full Frappe two-column layout, Section Breaks, Tab Breaks, and Activity Timeline.   │
│ • Referential foreign key anchors to `CRM Organization`, `CRM Audit`, and `Contact`.  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 3: PROGRAMMATIC MCP & REST API LEVEL (Python / FrappeClient)                      │
│ • Headless autonomous scraper ingestion, automated qualification, and data enrichment.│
│ • Zero UI overhead, atomic updates, and pre-unlinking foreign key safety guards.      │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Tier 1: Pink CRM App Level (`/crm/leads`)

The fast, user-facing sales wrapper used by human outreach teams:

### 1. The Slide-Out Lead Drawer
* **Drawer Navigation**: Clicking any lead in the table opens the slide-out panel without losing table context.
* **Header Controls**:
  * Lead Name & Display Avatar.
  * Status Badge: `New` $\rightarrow$ `Attempted Contact` $\rightarrow$ `Contacted` $\rightarrow$ `Audit Scheduled` $\rightarrow$ `Audit Delivered` $\rightarrow$ `Qualified` (or `Unqualified` / `Junk`).
  * Lead Temperature Pill: `Cold` (Blue), `Warm` (Amber), `Hot` (Red).
* **Communication Triggers**:
  * **1-Click WhatsApp Action**: Instant link to `https://wa.me/{custom_whatsapp_no}` with pre-formatted outreach script.
  * **Call Logger**: Direct shortcut opening `CRM Call Log` to track duration and outcome.
  * **Activity Notes**: Real-time markdown scratchpad saving directly into `FCRM Note`.

### 2. Right-Drawer "Audits & Diagnostics" Section
* Displays the linked active diagnostic: `Latest Audit` (`CRM Audit`).
* Shows live summary rollup badges:
  * `Audit Score`: Integer `0` to `100`.
  * `Audit Maturity`: Pill badge (`Foundational`, `Developing`, `Established`, `Scaling`, `Market Leader`).
  * `Audit Report File`: Direct download link to generated PDF deck.
  * `Next Audit Due`: Date badge showing quarterly 90-day review timeline.
* **The Audit Modal Trigger**: Clicking inside the `Latest Audit` input opens the **"New Audit" Popup Modal** (`Details` & `Scoring` tabs) directly within Pink CRM.

---

## 3. Tier 2: Universal Frappe Desk Level (`/app/crm-lead`)

The full administrative backend view holding the complete **103-field lead specification**:

### Section A: Identity & Contact Channels (Person)
* `first_name` *(Data, Mandatory)*: Prospect first name.
* `last_name` *(Data)*: Prospect surname.
* `salutation` *(Link $\rightarrow$ Salutation)*: Mr, Ms, Dr.
* `job_title` *(Data)*: Exact title (e.g., Founder & CEO, CMO, Head of D2C).
* `email` *(Data, Email validated)*: Primary business email.
* `mobile_no` *(Data, Phone)*: Direct mobile number.
* `custom_whatsapp_no` *(Data, Phone)*: E.164 normalized WhatsApp number (e.g., `+919820123456`).
* `custom_decision_role` *(Select)*: `Solo Founder`, `Co-Founder`, `CMO / VP Growth`, `Agency / Intermediary`.
* `custom_preferred_contact_channel` *(Select)*: `WhatsApp`, `Phone Call`, `Email`, `Google Meet`.

### Section B: Organization & Market Classification
* `organization` *(Link $\rightarrow$ CRM Organization)*: Foreign key to legal company record.
* `company_name` *(Data)*: Freeform trading brand name (fallback prior to Org creation).
* `website` *(Data, URL)*: Primary root domain (`https://brand.com`).
* `industry` *(Link $\rightarrow$ CRM Industry)*: Apparel, FMCG, Beauty & Wellness, etc.
* `territory` *(Link $\rightarrow$ CRM Territory)*: Geographic jurisdiction (`India`, `Mumbai`, `Delhi NCR`, `Export`).
* `custom_company_type` *(Select)*: `D2C Brand`, `B2B Business`, `Marketplace Seller`, `Startup`, `Enterprise`.
* `custom_business_model` *(Select)*: `D2C Native`, `Omnichannel Consumer`, `Marketplace-First`, `Quick Commerce`.
* `custom_business_stage` *(Select)*: `Idea`, `Early (<1 yr)`, `Growth (1–3 yrs)`, `Scaling (3–5 yrs)`, `Mature (5+ yrs)`.

### Section C: 7-Channel Digital Asset URLs
* `custom_online_store_url` *(Data, URL)*: E-commerce store or Shopify URL.
* `custom_instagram_url` *(Data, URL)*: Primary Instagram profile.
* `custom_facebook_url` *(Data, URL)*: Facebook Page & Meta Ad Library link.
* `custom_youtube_url` *(Data, URL)*: Long-form founder video / YouTube channel.
* `custom_linkedin_url` *(Data, URL)*: Company or founder LinkedIn profile.
* `custom_x_url` *(Data, URL)*: Twitter / X handle URL.
* `custom_google_maps_url` *(Data, URL)*: Physical store or corporate HQ Google Maps location.

### Section D: The 3-Way Attribution Triad
* **1. Origin Platform (`source`)** *(Link $\rightarrow$ CRM Lead Source)*:
  `Instagram`, `LinkedIn`, `Website`, `Google Maps`, `Cold Email`, `WhatsApp Inbound`, `Referral`.
* **2. Execution Mechanism (`custom_captured_by`)** *(Select)*:
  `AI Agent`, `Manual (Human)`, `Web Form`, `WhatsApp Inbound`, `Webhook`.
  * `custom_agent_name` *(Data)*: Stamped bot identifier (e.g., `Antigravity Prospector`).
  * `custom_discovery_url` *(Data, URL)*: Exact URL where prospect was scraped.
  * UTM Tracking: `custom_utm_source`, `custom_utm_medium`, `custom_utm_campaign`, `custom_landing_page_url`.
* **3. Commercial Closer (`lead_owner`)** *(Link $\rightarrow$ User)*:
  Assigned human Account Executive / Closer responsible for phone qualification and closing.

### Section E: Commercial Qualification & Sales Cadence
* `custom_budget_range` *(Select)*: `Below ₹25K`, `₹25K–₹1L`, `₹1L–₹5L`, `₹5L–₹15L`, `Above ₹15L`, `Not Disclosed`.
* `custom_budget_confirmed` *(Check)*: 1 if budget meets agency threshold (₹1L+).
* `custom_primary_service_interest` *(Select)*: `Branding & Visuals (Studio)`, `Web Engineering (Build)`, `Growth & Ads (Market)`, `AI Automations (Network)`.
* `custom_decision_timeline` *(Select)*: `Immediate (<2 weeks)`, `1 Month`, `Upcoming Quarter`, `Exploratory`.
* `custom_next_follow_up_due` *(Datetime)*: Scheduled calendar alarm for next touchpoint.
* `custom_next_action_required` *(Select)*: `WhatsApp Follow-Up`, `Discovery Call`, `Deliver Audit`, `Send Proposal`.

### Section F: DPDP Act Compliance & Legal Consent
* `custom_consent_given` *(Check)*: Explicit consent under India's Digital Personal Data Protection Act.
* `custom_consent_date` *(Datetime)*: Timestamp of consent.
* `custom_consent_source` *(Select)*: `Web Form`, `WhatsApp Opt-in`, `Verbal on Call`, `Written Email`.
* `custom_whatsapp_opt_in` *(Check)*: Explicit permission for WhatsApp automation dispatches.
* `custom_do_not_contact` *(Check)*: Hard suppression flag.

### Section G: Forensic Diagnostic Rollup
* `custom_latest_audit` *(Link $\rightarrow$ CRM Audit)*: Active diagnostic document (`AUD-2026-#####`).
* `custom_audit_score` *(Int)*: 0 to 100 overall health score.
* `custom_audit_maturity_band` *(Select)*: Maturity tier.
* `custom_audit_report` *(Attach)*: Client-facing PDF download.
* `custom_audit_delivered_on` *(Date)*: Delivery date.
* `custom_next_audit_due` *(Date)*: Automatically calculated as Delivered Date + 90 days.

---

## 4. Tier 3: MCP & REST API Level (Python `FrappeClient`)

Headless, programmatic execution contracts for automated agents and webhooks.

### Contract 1: Ingesting a Lead with 3-Way Attribution
```python
from frappe_mcp.client import FrappeClient

client = FrappeClient(url="https://frappe-crm.appmarkit.com", api_key="<key>", api_secret="<secret>")

lead = client.create_doc("CRM Lead", {
    "doctype": "CRM Lead",
    "first_name": "Rohan",
    "last_name": "Deshmukh",
    "email": "rohan@deshmukhcouture.com",
    "mobile_no": "+919820123456",
    "custom_whatsapp_no": "+919820123456",
    "organization": "Deshmukh Couture",
    # 3-Way Attribution Triad
    "source": "Instagram",
    "custom_captured_by": "AI Agent",
    "custom_agent_name": "Antigravity Prospector",
    "custom_discovery_url": "https://instagram.com/deshmukhcouture",
    "lead_owner": "sagar@appmarkit.com",
    # Classification & Digital URLs
    "custom_company_type": "D2C Brand",
    "lead_temperature": "Warm",
    "custom_budget_range": "₹1L–₹5L",
    "custom_online_store_url": "https://deshmukhcouture.com/shop",
    "custom_instagram_url": "https://instagram.com/deshmukhcouture",
    # DPDP Consent
    "custom_consent_given": 1,
    "custom_whatsapp_opt_in": 1,
    "custom_consent_source": "WhatsApp Opt-in"
})
```

### Contract 2: Querying Pipeline Leads by Temperature & Source
```python
# Fetch all Hot leads requiring immediate outreach
hot_leads = client.search_docs(
    "CRM Lead",
    filters=[
        ["status", "in", ["New", "Contacted"]],
        ["lead_temperature", "=", "Hot"],
        ["custom_do_not_contact", "=", 0]
    ],
    fields=["name", "first_name", "organization", "custom_whatsapp_no", "source", "lead_owner"],
    limit=50
)
```

### Contract 3: Safe Deletion with Referential Pre-Unlinking
```python
# Frappe throws LinkExistsError (417) if mutual foreign keys exist.
# Always clear the audit link before deleting a test lead:
lead_id = "CRM-LEAD-2026-00014"
client.update_doc("CRM Lead", lead_id, {"custom_latest_audit": None})
client.delete_doc("CRM Lead", lead_id)
```

---

## 5. Universal 8-Action CRUD & Operations Matrix

| Operation | Tier 1: Pink CRM (/crm) | Tier 2: Frappe Desk (/app) | Tier 3: MCP / API (Python) |
|:---|:---|:---|:---|
| **1. CREATE** | Quick Add drawer `+ New Lead` | Full form at `/app/crm-lead/new` or `Duplicate` | `client.create_doc("CRM Lead", {...})` |
| **2. READ** | Kanban cards, Slide-out drawer summary | Filterable List View, Report View, Timeline | `client.get_doc("CRM Lead", id)` / `search_docs()` |
| **3. UPDATE** | Inline field editing in drawer panel | Full Form Save (`Ctrl+S`), Section edit | `client.update_doc("CRM Lead", id, {...})` |
| **4. DELETE** | Action menu $\rightarrow$ Mark Disqualified / Junk | `Menu > Delete` (Guarded by `LinkExistsError`) | Pre-unlink `custom_latest_audit` $\rightarrow$ `client.delete_doc()` |
| **5. PRINT / PDF**| Download badge in Audits section | `Menu > Print` $\rightarrow$ Standard Lead Sheet | `client.call_method("frappe.client.get_print", ...)` |
| **6. COMMUNICATE**| 1-Click WhatsApp (`https://wa.me/...`) | Native Desk Email dialog with templates | Webhook dispatch to WhatsApp Cloud API / Listmonk |
| **7. ASSIGN / RLS**| Reassign `lead_owner` in card header | `Menu > Assign To` (`ToDo`) / `User Permission` | Create `ToDo` document assigned to user |
| **8. CONVERT** | Click **`[Convert to Deal]`** in header | `frappe.model.open_mapped_doc` (Lead $\rightarrow$ Deal) | Spawns `CRM Deal` carrying over 7 URLs & Org |
