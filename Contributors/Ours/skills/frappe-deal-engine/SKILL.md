---
name: frappe-deal-engine
description: >
  Master operating engine and schema specification for Commercial Deals in Frappe CRM (DocType CRM Deal).
  Governs pipeline stages, Kanban mechanics in Pink CRM (/crm), the complete Frappe Desk backend form (/app/crm-deal),
  SOW scoping, carried audit rollups, 14 standardized lost reasons, and programmatic MCP REST API automation.
metadata:
  version: v1.1.0
  category: crm
  tags:
    - frappe
    - crm
    - deal
    - pipeline
    - sow
    - lost-reasons
    - 3-tier-crud
  icon: monetization_on
  publisher: d2cwithahrik
  support_tier: primary
  created_at: "2026-10-09"
  updated_at: "2026-10-09"
---

# Frappe Commercial Deal Engine (`CRM Deal`)

> **Platform:** Frappe CRM (`FCRM`) & Frappe Framework Desk (`https://frappe-crm.appmarkit.com`)  
> **Entity DocType:** `CRM Deal` (Module: `FCRM` / `CRM`)  
> **Submittable:** No (`is_submittable = 0`)  
> **Commercial Standard:** 50% Advance Deposit Gate + SOW Scope Lock + Carried Diagnostic Justification  
> **Standard:** Universal 3-Tier Architecture (Pink CRM Kanban $\rightarrow$ Frappe Desk Core $\rightarrow$ MCP API)

---

## 1. Architectural Architecture: Wrapper vs. Desk Core

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                          CRM DEAL 3-TIER OPERATIONAL TOPOLOGY                          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 1: PINK CRM KANBAN BOARD WRAPPER (/crm/deals)                                     │
│ • Visual deal progression board with 6 columns (Qualification → Won / Lost).           │
│ • Drag-and-drop stage updates, deal card telemetries, and fast deal creation.         │
│ • Quick proposal status indicators and one-click close buttons.                       │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 2: UNIVERSAL FRAPPE DESK BACKEND (/app/crm-deal)                                  │
│ • Comprehensive commercial record housing SOW deliverables, payment milestones,       │
│   and carried audit metrics.                                                           │
│ • Mandatory 14 standardized lost reasons modal when marking a deal as Lost.           │
│ • Integration bridge to ERPNext Accounts (spawning Customer and Sales Invoice).        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 3: PROGRAMMATIC MCP & REST API LEVEL (Python / FrappeClient)                      │
│ • Headless deal conversion, value updating, SOW attachment, and stage transitions.     │
│ • Direct linkage to `CRM Organization`, `Contact`, and `CRM Audit`.                    │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Tier 1: Pink CRM App Level (`/crm/deals`)

The visual sales pipeline used by Account Executives and Closers:

### 1. The 6-Column Kanban Board
* **Column 1: `Qualification`**: Needs confirmed, discovery completed, diagnostic audit reviewed.
* **Column 2: `Proposal/Quotation`**: SOW deliverables scoped, pitch deck sent, commercial pricing presented.
* **Column 3: `Negotiation`**: Milestone schedule, payment splits (50/50), revisions policy refined.
* **Column 4: `Ready to Close`**: Agreement sent for digital signature, awaiting executive sign-off.
* **Column 5: `Won`**: Agreement signed, 50% advance deposit invoiced $\rightarrow$ unblocks sprint kickoff.
* **Column 6: `Lost`**: Closed without signature $\rightarrow$ triggers mandatory lost reason selection.

### 2. Deal Card Telemetry
* Deal Name: `"{Organization} — {Pillar} Sprint"`.
* Deal Value: Formatted currency (`annual_revenue` in INR).
* Organization Logo & Name.
* Assigned Closer Avatar (`lead_owner`).
* Expected Closing Date Pill (color-coded red if overdue).

---

## 3. Tier 2: Universal Frappe Desk Level (`/app/crm-deal`)

The comprehensive administrative contract and negotiation form (`Frappe CRM > CRM Deal > Deal Name`):

### Section A: Deal Overview & Ownership
* `deal_name` *(Data, Mandatory)*: Trading deal identifier (e.g., `Deshmukh Couture — D2C Acceleration`).
* `organization` *(Link $\rightarrow$ CRM Organization)*: Parent account master.
* `status` *(Select)*: Pipeline stage (`Qualification`, `Proposal/Quotation`, `Negotiation`, `Ready to Close`, `Won`, `Lost`).
* `annual_revenue` *(Currency, INR)*: Commercial contract value (e.g., `₹2,50,000`).
* `expected_closing_date` *(Date)*: Projected closing target.
* `lead_owner` *(Link $\rightarrow$ User)*: Assigned closing executive.

### Section B: SOW Deliverables & Scope Lock
* `custom_primary_service_interest` *(Select)*: `Branding & Visuals (Studio)`, `Web Engineering (Build)`, `Growth & Ads (Market)`, `AI Automations (Network)`.
* `custom_requirement_summary` *(Small Text)*: Exact scope summary agreed upon with client.
* `custom_sow_deliverables` *(Text Editor)*: Exhaustive itemized list of deliverables preventing scope creep.
* `custom_payment_terms` *(Select)*: `50% Advance / 50% Handover`, `100% Upfront`, `Monthly Retainer`.

### Section C: Carried Diagnostic Audit Reference
* `custom_latest_audit` *(Link $\rightarrow$ CRM Audit)*: Linked diagnostic that justified this deal's pricing.
* `custom_audit_score` *(Int)*: 0–100 overall score carried from the audit.
* `custom_audit_maturity_band` *(Select)*: Maturity tier justifying agency recommendations.
* `custom_audit_report` *(Attach)*: Attached client-facing PDF deck.

### Section D: Disqualification & The 14 Standardized Lost Reasons
When moving a deal to `Lost`, Frappe Desk enforces mandatory selection of 1 of the **14 Standardized Lost Reasons**:
1. `Budget Too Low` (Under agency threshold).
2. `Ghosted / Unresponsive` (3 follow-ups unanswered).
3. `Went with Competitor` (Competitor hired).
4. `Timing Not Right` (Paused for next quarter).
5. `Feature / Capability Gap` (Requested unoffered service).
6. `Internal Team Handling` (Hired internal staff).
7. `Authority Unreachable` (Cannot reach decision maker).
8. `Inactive Business` (Shutting down / insolvent).
9. `Out of Service Area` (Geographic restriction).
10. `Duplicate Record` (Duplicate deal entry).
11. `Spam / Fake` (Invalid inquiry).
12. `Strategy Mismatch` (Culture / scope misalignment).
13. `Legal / Regulatory Block` (Compliance / contract impasse).
14. `Other` (Mandatory notes required in `custom_lost_notes`).

---

## 4. Tier 3: MCP & REST API Level (Python `FrappeClient`)

Headless, programmatic execution contracts for deal lifecycle automation.

### Contract 1: Converting a Qualified Lead into a Commercial Deal
```python
from frappe_mcp.client import FrappeClient

client = FrappeClient(url="https://frappe-crm.appmarkit.com", api_key="<key>", api_secret="<secret>")

# Create Deal carrying over audit and scope telemetry
deal = client.create_doc("CRM Deal", {
    "doctype": "CRM Deal",
    "deal_name": "Deshmukh Couture — D2C Acceleration Sprint",
    "organization": "Deshmukh Couture",
    "status": "Proposal/Quotation",
    "annual_revenue": 250000.0,
    "expected_closing_date": "2026-10-31",
    "lead_owner": "sagar@appmarkit.com",
    # Carried Audit
    "custom_latest_audit": "AUD-2026-00014",
    "custom_audit_score": 58,
    "custom_audit_maturity_band": "Established",
    # SOW Scoping
    "custom_primary_service_interest": "Web Engineering (Build)",
    "custom_payment_terms": "50% Advance / 50% Handover"
})
```

### Contract 2: Closing Deal as Won (Lead-to-Cash Handshake)
```python
# Mark Deal as Won
client.update_doc("CRM Deal", deal["name"], {
    "status": "Won"
})

# Handshake: Spawns Customer in ERPNext and issues 50% advance invoice
customer = client.create_doc("Customer", {
    "doctype": "Customer",
    "customer_name": "Deshmukh Couture",
    "customer_group": "Commercial",
    "territory": "India"
})
```

### Contract 3: Marking Deal as Lost with Standardized Reason
```python
client.update_doc("CRM Deal", deal["name"], {
    "status": "Lost",
    "custom_lost_reason": "Went with Competitor",
    "custom_lost_notes": "Client signed with local boutique agency for lower price. Re-visit in 90 days."
})
```

---

## 5. Universal 8-Action CRUD & Operations Matrix

| Operation | Tier 1: Pink CRM (/crm) | Tier 2: Frappe Desk (/app) | Tier 3: MCP / API (Python) |
|:---|:---|:---|:---|
| **1. CREATE** | Quick `+ New Deal` on Kanban header | `/app/crm-deal/new` or Mapped from Lead | `client.create_doc("CRM Deal", {...})` |
| **2. READ** | Kanban cards, Slide-out deal drawer | Multi-column List View, Pipeline Report | `client.get_doc("CRM Deal", id)` / `search_docs()` |
| **3. UPDATE** | Drag card across Kanban stage columns | Form field edit, update SOW scope (`Cmd+S`)| `client.update_doc("CRM Deal", id, {...})` |
| **4. DELETE** | Action menu $\rightarrow$ Delete | `Menu > Delete` (Guarded by linked invoices)| `client.delete_doc("CRM Deal", id)` |
| **5. PRINT / PDF**| SOW download link badge | `Menu > Print` $\rightarrow$ Branded SOW Proposal | `client.call_method("frappe.client.get_print", ...)` |
| **6. COMMUNICATE**| Log call / Add note in drawer | Native Desk Email with proposal deck | Dispatch email proposal via SMTP relay |
| **7. ASSIGN / RLS**| Reassign closer in card header | `Menu > Assign To` (`ToDo`) / `User Permission` | Create `ToDo` document assigned to AE |
| **8. CLOSE (WON)**| Move card to "Won" column | Click **`[Mark as Won]`** $\rightarrow$ Creates Customer| `client.update_doc(..., {"status": "Won"})` |
