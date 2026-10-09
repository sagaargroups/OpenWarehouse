---
name: frappe-mda-cascade-engine
description: 'Master Metadata-Driven Architecture (MDA) and 5-Tier Dependency Cascade
  Protocol for Frappe CRM, ERPNext, and client tech stacks. Incorporates Spotify Backstage
  Information Architecture (Domain → System → Component → API → Resource) to generate
  opinionated Golden Paths for any client customization.

  '
metadata:
  version: v1.0.0
  category: architecture
  tags:
  - frappe
  - mda
  - cascade
  - backstage
  - spotify-ia
  - metadata-driven-architecture
  icon: schema
  publisher: d2cwithahrik
  support_tier: primary
  created_at: '2026-10-09'
  updated_at: '2026-10-09'
---

# Frappe MDA & Spotify Backstage Cascade Engine

> **System Standard:** Universal Metadata-Driven Architecture (MDA) & Dependency Cascade Engine  
> **Target Framework:** Frappe CRM (`FCRM`), ERPNext, and Sovereign Client Tech Stacks  
> **Core Model:** Spotify Backstage System Architecture (`Domain` → `System` → `Component` → `API` → `Resource`)  
> **Safety Standard:** 100% Update-Proof (Zero core code modifications, pure database metadata)

---

## 1. Foundational Architecture & Invariants

Modern enterprise platforms (Frappe, Salesforce, Shopify Metaobjects, MedusaJS) operate on a **Metadata-Driven Architecture (MDA)**:
1. **Everything is a Model / DocType**: Database schemas, REST endpoints, UI drawers, permissions, and audit logs are dynamically compiled from metadata tables (`tabDocType`, `tabCustom Field`, `tabCRM Fields Layout`).
2. **Zero Core Code Modifications**: Never edit Python files in `apps/crm` or Vue templates in `apps/crm/frontend`. Modifying core Git repository files causes merge conflicts and catastrophic failure on `bench update` / `bench migrate`.
3. **The `custom_` Prefix Invariant**: Every custom field must strictly carry the `custom_` prefix and be registered via the `Custom Field` DocType. Frappe automatically preserves and reapplies all records in `tabCustom Field` during migrations.
4. **Self-Describing System (Homoiconicity)**: In Frappe, the tool that defines a database table is itself a table (`DocType` is a DocType). This allows programmatic inspection and manipulation via FrappeClient / REST API / MCP.

---

## 2. The 5-Tier Dependency Cascade Protocol

Whenever a client requirement or agency customization is introduced, it must cascade through these **5 connected layers in exact sequence**:

```
┌────────────────────────────────────────────────────────────────────────┐
│ TIER 1: DATA CONTRACT & SCHEMA (The Foundation)                        │
│ • Which DocType owns the data? (Lead vs. Deal vs. Org vs. Audit)       │
│ • Enforce `custom_` prefix (update-proof in `tabCustom Field`)         │
│ • Foreign key relations (`Link`) & Child Tables (`Table`)              │
├──────────────────────────────────┬─────────────────────────────────────┤
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ TIER 2: UI & VISUAL LAYOUT (The Human/Agent Experience)                │
│ • Update `CRM Fields Layout` (Side Panel, Data Tab, Quick Entry)       │
│ • Enforce clean, short, standard labels (e.g. Details, Scoring, Summary│
│ • Single-column 100% horizontal expansion for rich text summaries      │
├──────────────────────────────────┬─────────────────────────────────────┤
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ TIER 3: GOVERNANCE & RESTRICTION LEVELS (The Security Ring)            │
│ • Perm Level 0: Operational fields (SDR / Staff / AI Agents)           │
│ • Perm Level 1: Financial & commercial lock (AE / Principal only)      │
│ • User Permission: Row-level lock to a specific Organization           │
├──────────────────────────────────┬─────────────────────────────────────┤
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ TIER 4: THE INTEGRATION BUS (The Webhook & Automation Handshake)       │
│ • If this field changes, who must be notified?                         │
│ • Outbound Webhooks (WhatsApp Cloud API, Listmonk, Bland/Vapi bots)    │
│ • Inbound Webhooks (Meta Lead Ads, Shopify webhooks, Form submissions) │
├──────────────────────────────────┬─────────────────────────────────────┤
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ TIER 5: OUTPUT ARTIFACTS & DELIVERABLES (The Proof of Value)           │
│ • Update Native Print Formats (`Print Format` DocType with Jinja HTML) │
│ • Generate publication-ready PDF reports with 1 click                  │
│ • Ensure data flows into invoices, contracts, and SOW proposals        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Spotify Backstage Information Architecture (IA) Model

Spotify built **Backstage** to solve the hidden dependency puzzle across thousands of microservices and databases. We adopt Spotify's **5 Core Entities** to catalog client digital estates:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        THE SPOTIFY IA SYSTEM MODEL                     │
├────────────────────────────────────────────────────────────────────────┤
│ 1. DOMAIN      │ The business vertical (e.g., D2C Fashion & Apparel)   │
│       │                                                                │
│       ▼                                                                │
│ 2. SYSTEM      │ The interconnected growth engine (Omnichannel Store)  │
│       │                                                                │
│       ▼                                                                │
│ 3. COMPONENT   │ Executable code (Shopify Store, Next.js, AI Scraper)  │
│       │                                                                │
│       ▼                                                                │
│ 4. API         │ The contract (Shopify Admin API, WhatsApp Cloud API)  │
│       │                                                                │
│       ▼                                                                │
│ 5. RESOURCE    │ The state/storage (MariaDB table, Redis, S3, Stripe)  │
└────────────────────────────────────────────────────────────────────────┘
```

### Mapping Spotify IA to Frappe CRM:
* **`CRM Organization`** = The **Domain & System** (e.g. `Deshmukh Couture` or `D2C With AHrik`).
* **`CRM Audit` Child Tables** = The **Living IA Catalog**:
  - `tech_stack` (`Audit Tool Row`) = Maps **Components** (Shopify, Next.js) and **Resources** (PostgreSQL, Redis).
  - `presence_audit` (`Audit Presence Row`) = Maps public **Touchpoints & Storefronts** (Instagram, Blinkit, Amazon).
  - `revenue_channels` (`Audit Revenue Row`) = Maps revenue pipelines.
* **Relationship Attributes**:
  - `dependsOn`: Which upstream service/database is required?
  - `providesApi`: What webhook or REST endpoint does it expose?
  - `consumesApi`: What third-party API does it query?
  - `owner`: Which human role or AI agent manages it?

---

## 4. The Golden Path Generator (Client Customization Engine)

When a client or team member requests a new feature or tech integration, the agent queries their **Spotify IA Catalog** and generates the **Golden Path** (an opinionated, step-by-step cascade):

### Example Execution:
> **Client Request**: *"We sell on Shopify and Blinkit. We need our CRM to track Quick Commerce stock availability, audit 10-minute delivery pins, and alert our growth team when pin codes go out of stock."*

#### The Agent's Golden Path Response:
1. **Tier 1 (Schema)**:
   - Add `custom_quick_commerce_status` to `CRM Lead` and `CRM Organization`.
   - Add `quick_commerce_audit` child table to `CRM Audit` (`pincode`, `availability_pct`, `platform`: Blinkit/Zepto).
2. **Tier 2 (UI)**:
   - In `CRM Fields Layout`, add Quick Commerce fields under `Audits & Reports` with clean 2-column layout.
3. **Tier 3 (Security)**:
   - Set Perm Level 0 for AI Auditor to update stock percentages.
   - Set Perm Level 1 on revenue loss impact for Account Executive / Principal review.
4. **Tier 4 (Integrations)**:
   - Attach outbound Webhook: *If availability drops below 70%, trigger automated WhatsApp alert to founder via Wati/Meta API*.
5. **Tier 5 (Outputs)**:
   - Update native **Executive Growth Audit Report** print format to render the **Quick Commerce Pincode Map** on the generated client PDF.

---

## 5. Security & Credential Boundary (Zero-Leak Standard)

To prevent security vulnerabilities and credential sprawl:

1. **Human Staff & Contractors**:
   - Authenticate strictly via browser session / SSO (`https://frappe-crm.appmarkit.com/crm`).
   - **NEVER issue or share private API keys**.
   - Contractors are restricted to their specific organization using Frappe **`User Permission`**.
2. **AI Service Accounts**:
   - Authenticate headlessly using dedicated least-privilege tokens stored in server environment secrets:
     * `ai.prospector@appmarkit.com` (Role: `Sales User` + `Desk User`)
     * `ai.auditor@appmarkit.com` (Role: `Sales User` + `Desk User`)
3. **Attribution Triad**:
   - `source`: Platform origin (`Instagram`, `LinkedIn`, `Website`, `Google Maps`).
   - `custom_captured_by`: Execution mechanism (`Human (SDR)` vs. `AI Agent` vs. `Web Form`).
   - `lead_owner`: Assigned Human Closer responsible for closing.

---

## 6. Execution Recipes (FrappeClient via MCP)

### Safe Custom Field Registration:
```python
client.create_doc("Custom Field", {
    "doctype": "Custom Field",
    "dt": "CRM Lead",
    "fieldname": "custom_example_field",
    "label": "Example Label",
    "fieldtype": "Data",
    "insert_after": "source"
})
```

### Safe Layout Update (`CRM Fields Layout`):
```python
layout_doc = client.get_doc("CRM Fields Layout", "CRM Lead-Side Panel")
layout = json.loads(layout_doc["data"]["layout"])
# Insert field into desired section columns
client.update_doc("CRM Fields Layout", "CRM Lead-Side Panel", {
    "layout": json.dumps(layout)
})
```

### Native Jinja Print Format Creation:
```python
client.create_doc("Print Format", {
    "doctype": "Print Format",
    "name": "Executive Growth Audit Report",
    "doc_type": "CRM Audit",
    "module": "FCRM",
    "standard": "No",
    "custom_format": 1,
    "print_format_type": "Jinja",
    "html": html_template
})
```
