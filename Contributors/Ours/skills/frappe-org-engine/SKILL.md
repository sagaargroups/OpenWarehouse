---
name: frappe-org-engine
description: >
  Master operating manual and 3-tier schema specification for Organizations in Frappe CRM (DocType CRM Organization).
  Governs frontline brand account views in Pink CRM (/crm), the complete 33-field administrative form in Frappe Desk (/app/crm-organization),
  multi-channel digital URLs, historical audit rollups, and programmatic MCP REST API automation.
metadata:
  version: v1.1.0
  category: crm
  tags:
    - frappe
    - crm
    - organization
    - b2b
    - d2c
    - 3-tier-crud
  icon: corporate_fare
  publisher: d2cwithahrik
  support_tier: primary
  created_at: "2026-10-09"
  updated_at: "2026-10-09"
---

# Frappe Organization Operating Engine (`CRM Organization`)

> **Platform:** Frappe CRM (`FCRM`) & Frappe Framework Desk (`https://frappe-crm.appmarkit.com`)  
> **Entity DocType:** `CRM Organization` (Module: `CRM`)  
> **Submittable:** No (`is_submittable = 0`)  
> **Total Fields:** 33 Fields (11 Stock Framework Fields + 22 Custom Agency Fields)  
> **Standard:** Universal 3-Tier Architecture (Pink CRM Wrapper $\rightarrow$ Frappe Desk Core $\rightarrow$ MCP API)

---

## 1. Architectural Architecture: Wrapper vs. Desk Core

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                      CRM ORGANIZATION 3-TIER OPERATIONAL TOPOLOGY                      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 1: PINK CRM APP WRAPPER (/crm/organizations)                                      │
│ • Slide-out brand drawer with trading name, website, and linked active deals/contacts. │
│ • Quick diagnostic health badge and commercial tier overview.                          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 2: UNIVERSAL FRAPPE DESK BACKEND (/app/crm-organization)                          │
│ • Master single source of truth managing the complete 33-field directory.             │
│ • Full legal & tax identity (GSTIN, Address), 7 Digital Asset URLs, and complete       │
│   longitudinal audit rollups (Scores, Maturity Band, 90-day Re-Audit trigger).         │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 3: PROGRAMMATIC MCP & REST API LEVEL (Python / FrappeClient)                      │
│ • Headless account provisioning, multi-channel scraper linking, and retainer sync.     │
│ • Master relational foreign key target for `CRM Lead`, `CRM Deal`, and `Contact`.      │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Tier 1: Pink CRM App Level (`/crm/organizations`)

The client management interface for account managers and delivery directors:
* **Route**: `/crm/organizations`
* **Quick Drawer**: Clicking any company opens a slide-out panel with trading identity, linked contacts, and active deal status.
* **Overview Section**: Website link, company classification pill, and headcount tier.
* **Quick Connections Bar**: Count of linked Leads, Deals, Contacts, and Diagnostic Audits.

---

## 3. Tier 2: Universal Frappe Desk Level (`/app/crm-organization`)

The comprehensive administrative source of truth managing the complete **33-field specification**:

### Group A: Identity & Legal Entity (6 Fields)
* `organization_name` *(Data, Mandatory)*: Official display and trading name (Primary Key ID).
* `custom_slug` *(Data)*: Lowercase URL slug (e.g., `deshmukh-couture`).
* `organization_logo` *(Attach Image)*: High-res brand mark.
* `website` *(Data, URL)*: Root digital domain (`https://brand.com`).
* `custom_gstin` *(Data)*: 15-character Indian GSTIN for B2B billing and ERPNext Customer invoicing.
* `address` *(Link $\rightarrow$ Address)*: Registered legal office or warehouse location.

### Group B: Commercial Classification & Scale (7 Fields)
* `custom_company_type` *(Select)*: `D2C Brand`, `B2B Business`, `Marketplace Seller`, `Startup`, `Enterprise`, `Agency / Holding`.
* `industry` *(Link $\rightarrow$ CRM Industry)*: Apparel, Consumer Products, FMCG, etc.
* `territory` *(Link $\rightarrow$ CRM Territory)*: Geographic market jurisdiction (`India`, `Mumbai`, `Delhi NCR`).
* `no_of_employees` *(Select)*: `1-10`, `11-50`, `51-200`, `201-500`, `501-1000`, `1000+`.
* `annual_revenue` *(Currency)*: Gross Merchandise Value (GMV) / annual turnover.
* `currency` *(Link $\rightarrow$ Currency)*: Base ledger currency (`INR`, `USD`).
* `exchange_rate` *(Float)*: Multi-currency conversion factor against agency ledger.

### Group C: Business Nature & Maturity (3 Fields)
* `custom_business_stage` *(Select)*: `Idea`, `Early (<1 yr)`, `Growth (1–3 yrs)`, `Scaling (3–5 yrs)`, `Mature (5+ yrs)`.
* `custom_top_revenue_channel` *(Data)*: Primary cash flow engine (e.g., `Own Shopify Storefront`, `Quick Commerce`).
* `custom_business_nature_notes` *(Small Text)*: High-level notes on margins, AOV, and supply chain.

### Group D: Ingestion Provenance & Attribution (2 Fields)
* `custom_captured_by` *(Select)*: `Manual (Human)`, `AI Agent`, `Web Form`, `WhatsApp Inbound`, `Webhook`.
* `custom_agent_name` *(Data)*: Bot name stamped during automated scraping.

### Group E: Diagnostic Audit & Retainer Chaining (6 Fields)
* `custom_latest_audit` *(Link $\rightarrow$ CRM Audit)*: Most recent diagnostic audit document.
* `custom_audit_score` *(Int)*: 0–100 composite health score rollup.
* `custom_audit_maturity_band` *(Select)*: Executive maturity grade.
* `custom_audit_report` *(Attach)*: Attached client-facing PDF report.
* `custom_audit_delivered_on` *(Date)*: Delivery date of latest audit.
* `custom_next_audit_due` *(Date)*: **The Retainer Engine Trigger**. Automatically set to Delivered Date + 90 days.

### Group F: 7-Channel Digital Footprint URLs (8 Fields)
* `custom_online_store_url` *(Data, URL)*: E-commerce store or Shopify URL.
* `custom_instagram_url` *(Data, URL)*: Instagram handle profile.
* `custom_facebook_url` *(Data, URL)*: Facebook page & Meta Ad Library link.
* `custom_youtube_url` *(Data, URL)*: Long-form founder video / YouTube channel.
* `custom_linkedin_url` *(Data, URL)*: Company or founder LinkedIn profile.
* `custom_x_url` *(Data, URL)*: Twitter / X handle URL.
* `custom_google_maps_url` *(Data, URL)*: Physical store or corporate HQ Google Maps location.
* `custom_presence_channels` *(Table $\rightarrow$ Audit Presence Row)*: Multi-channel metrics table.

---

## 4. Tier 3: MCP & REST API Level (Python `FrappeClient`)

Headless, programmatic execution contracts for organization management.

### Contract 1: Creating Canonical Agency Parent Organization
```python
from frappe_mcp.client import FrappeClient

client = FrappeClient(url="https://frappe-crm.appmarkit.com", api_key="<key>", api_secret="<secret>")

org = client.create_doc("CRM Organization", {
    "doctype": "CRM Organization",
    "organization_name": "D2C With AHrik",
    "custom_slug": "d2c-with-ahrik",
    "website": "https://d2cwithahrik.com",
    "custom_company_type": "Agency / Holding",
    "industry": "Marketing & Advertising / E-Commerce Growth",
    "territory": "India",
    "currency": "INR",
    "no_of_employees": "11-50",
    "custom_business_stage": "Growth (1–3 yrs)",
    "custom_captured_by": "Manual (Human)",
    "custom_business_nature_notes": "Canonical Parent Agency Organization entity."
})
```

### Contract 2: Querying Accounts Due for 90-Day Re-Audits
```python
import datetime

today = datetime.date.today().isoformat()

# Fetch accounts whose 90-day retainer review is due
due_orgs = client.search_docs(
    "CRM Organization",
    filters=[["custom_next_audit_due", "<=", today]],
    fields=["name", "organization_name", "custom_latest_audit", "custom_audit_score", "custom_next_audit_due"]
)
```

---

## 5. Universal 8-Action CRUD & Operations Matrix

| Operation | Tier 1: Pink CRM (/crm) | Tier 2: Frappe Desk (/app) | Tier 3: MCP / API (Python) |
|:---|:---|:---|:---|
| **1. CREATE** | Quick `+ New Organization` in drawer | Full Form `/app/crm-organization/new` | `client.create_doc("CRM Organization", {...})` |
| **2. READ** | Organization cards, drawer summary | Filterable List View, Report View | `client.get_doc()` / `search_docs()` |
| **3. UPDATE** | Inline field editing in drawer | Form Save (`Cmd+S`), update GSTIN | `client.update_doc("CRM Organization", id, {...})` |
| **4. DELETE** | Action menu $\rightarrow$ Delete | `Menu > Delete` (Guarded by linked deals/leads)| `client.delete_doc("CRM Organization", id)` |
| **5. PRINT / PDF**| View attached audit PDF badge | `Menu > Print` $\rightarrow$ Account Overview Sheet | `client.call_method("frappe.client.get_print", ...)` |
| **6. COMMUNICATE**| View linked communication history | Native Desk Email with linked account contacts | Dispatches via Listmonk / SMTP relay |
| **7. ASSIGN / RLS**| Assigned account manager avatar | Set Frappe `User Permission` to scope contractors| Create `User Permission` record via REST API |
| **8. RE-AUDIT** | Badge shows `Next Audit Due` date | Click **`[Initiate Quarterly Re-Audit]`** | Spawns Version v2 `CRM Audit` computing delta |
