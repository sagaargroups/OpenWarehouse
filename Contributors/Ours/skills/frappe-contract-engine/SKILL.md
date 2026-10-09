---
name: frappe-contract-engine
description: >
  Master operating engine and 3-tier schema specification for Contracts, SOWs, and SLAs in Frappe CRM (DocType Contract).
  Governs deal proposal badges in Pink CRM (/crm), the full legal agreement form in Frappe Desk (/app/contract),
  SLA response tiers, 50/50 payment milestones, and programmatic MCP REST API automation.
metadata:
  version: v1.1.0
  category: legal
  tags:
    - frappe
    - crm
    - contract
    - sow
    - sla
    - msa
    - 3-tier-crud
  icon: assignment_turned_in
  publisher: d2cwithahrik
  support_tier: primary
  created_at: "2026-10-09"
  updated_at: "2026-10-09"
---

# Frappe Contract, SOW & SLA Engine (`Contract`)

> **Platform:** Frappe CRM (`FCRM`) & Frappe Framework Desk (`https://frappe-crm.appmarkit.com`)  
> **Entity DocType:** `Contract` (Module: `CRM` / `Core`)  
> **Submittable:** Yes (`is_submittable = 1` or Workflow Locked)  
> **Legal Standard:** Master Services Agreement (MSA) + SOW Scope Lock + Tiered SLA Guarantees  
> **Standard:** Universal 3-Tier Architecture (Pink CRM Wrapper $\rightarrow$ Frappe Desk Core $\rightarrow$ MCP API)

---

## 1. Architectural Architecture: Wrapper vs. Desk Core

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                          CONTRACT 3-TIER OPERATIONAL TOPOLOGY                          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 1: PINK CRM APP WRAPPER (/crm/deals)                                              │
│ • Commercial deal view: live SOW status badge, proposal attachment preview.           │
│ • One-click electronic signature initiation and contract completion status.            │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 2: UNIVERSAL FRAPPE DESK BACKEND (/app/contract)                                  │
│ • Comprehensive legal agreement housing SOW deliverables, payment milestones,         │
│   and SLA response tiers.                                                              │
│ • Submittable ledger state: Draft (`docstatus = 0`) $\rightarrow$ Signed (`docstatus = 1`).│
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 3: PROGRAMMATIC MCP & REST API LEVEL (Python / FrappeClient)                      │
│ • Headless agreement generation, digital signature hash recording, and lock down.     │
│ • Unblocks Cycle 4 (Lead-to-Cash) invoice generation upon execution.                   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Tier 1: Pink CRM App Level (`/crm/deals`)

The deal closer's contract interface:
* **Contract Status Badge on Deal**: `Draft`, `Awaiting Signature`, `Signed & Active`, `Expired`.
* **PDF SOW Modal Preview**: Fast visual review of the client-facing proposal deck and terms.
* **1-Click E-Sign Action**: Dispatches digital signature link via email/WhatsApp to the authorized founder.

---

## 3. Tier 2: Universal Frappe Desk Level (`/app/contract`)

The administrative legal source of truth (`CRM > Contract > Contract Name`):

### Section A: Contract Header & Parties
* `contract_name` *(Data, Mandatory)*: Trading contract title (e.g., `Deshmukh Couture — Master Services Agreement`).
* `party_type` *(Link $\rightarrow$ DocType)*: Set to `Customer` or `CRM Organization`.
* `party_name` *(Dynamic Link)*: Linked brand entity name.
* `start_date` *(Date, Mandatory)*: Effective commencement date.
* `end_date` *(Date)*: Sprint completion target or annual retainer expiration date.
* `status` *(Select)*: `Draft`, `Active`, `Signed`, `Fulfilled`, `Cancelled`.

### Section B: SOW Deliverables & Payment Milestone Rules
* `custom_sow_scope` *(Text Editor, Mandatory)*: Explicit, itemized deliverable list (e.g. 10 AI Visual Drops, 1 Shopify Next.js Storefront).
* `custom_payment_terms` *(Select)*:
  * `50/50 Sprint Split`: 50% Advance deposit before kickoff, 50% upon QA handoff.
  * `100% Upfront`: Required for diagnostic audits and fixed discovery sprints.
  * `Monthly Retainer MRR`: Billed on the 1st of each calendar month.
* `custom_advance_amount` *(Currency)*: Stated advance deposit figure.

### Section C: SLA Response Tiers & Service Level Guarantees
* `custom_sla_tier` *(Select, Mandatory)*:
  * `Tier 1 (Enterprise / VIP)`: < 2 hours response, dedicated WhatsApp war room, 24-hour critical turnaround.
  * `Tier 2 (Growth Retainer)`: < 6 hours response, priority Slack channel, 48-hour revision cycle.
  * `Tier 3 (Standard Sprint)`: < 24 hours response, business hours email support.

### Section D: Legal Clauses & Electronic Signature Lock
* `contract_template` *(Link $\rightarrow$ Contract Template)*: Master agency MSA boilerplate.
* `is_signed` *(Check, Read-Only)*: 1 when electronic signature is stamped.
* `custom_signature_hash` *(Data)*: Cryptographic SHA-256 verification string.
* `custom_signed_by_name` *(Data)*: Name of authorized executive signer.
* `custom_signed_timestamp` *(Datetime)*: UTC timestamp of legal execution.

---

## 4. Tier 3: MCP & REST API Level (Python `FrappeClient`)

Headless, programmatic execution contracts for contract generation and signature locking.

### Contract 1: Ingesting a Legal Contract Linked to Deal
```python
from frappe_mcp.client import FrappeClient

client = FrappeClient(url="https://frappe-crm.appmarkit.com", api_key="<key>", api_secret="<secret>")

contract = client.create_doc("Contract", {
    "doctype": "Contract",
    "contract_name": "Deshmukh Couture — D2C Acceleration SOW",
    "party_type": "Customer",
    "party_name": "Deshmukh Couture",
    "start_date": "2026-10-15",
    "end_date": "2026-12-15",
    "status": "Draft",
    "custom_payment_terms": "50/50 Sprint Split",
    "custom_sla_tier": "Tier 1 (Enterprise / VIP)",
    "custom_sow_scope": "Complete Storefront Re-Architecture & 12 AI Visual Drops.",
    "custom_advance_amount": 125000.0
})
```

### Contract 2: E-Signature Lock Down (Immutable Submit)
```python
# Record digital signature and lock document
client.update_doc("Contract", contract["name"], {
    "status": "Signed",
    "is_signed": 1,
    "custom_signed_by_name": "Rohan Deshmukh",
    "custom_signature_hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "custom_signed_timestamp": "2026-10-10 14:30:00"
})
```

---

## 5. Universal 8-Action CRUD & Operations Matrix

| Operation | Tier 1: Pink CRM (/crm) | Tier 2: Frappe Desk (/app) | Tier 3: MCP / API (Python) |
|:---|:---|:---|:---|
| **1. CREATE** | Click `Create SOW` on Deal card | `/app/contract/new` with SOW template | `client.create_doc("Contract", {...})` |
| **2. READ** | Contract badge on Deal page | Multi-column List View, Filter by Party | `client.get_doc("Contract", id)` / `search_docs()` |
| **3. UPDATE** | Edit milestone terms in drawer | Full Form Save (`Cmd+S`), modify SLA | `client.update_doc("Contract", id, {...})` |
| **4. DELETE** | Action menu $\rightarrow$ Delete (Draft only)| `Menu > Delete` (Blocked if signed) | `client.delete_doc("Contract", id)` |
| **5. PRINT / PDF**| Preview SOW PDF modal | `Menu > Print` $\rightarrow$ Master Legal SOW Deck | `client.call_method("frappe.client.get_print", ...)` |
| **6. COMMUNICATE**| Send e-sign link via WhatsApp | Native Desk Email with SOW attachment | Dispatches digital sign webhook |
| **7. ASSIGN / RLS**| Linked closer avatar | Set `User Permission` based on Customer | Restrict contract visibility via REST API |
| **8. SUBMIT / LOCK**| Mark `Signed` on Deal page | `docstatus = 1` (Ledger Legal Lock) | Stamp `is_signed = 1` and lock fields |
