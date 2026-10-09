---
name: frappe-retainer-engine
description: >
  Master operating engine and 3-tier schema specification for Monthly Recurring Retainers (MRR) in Frappe ERPNext (DocType Subscription).
  Governs retainer badges in Pink CRM (/crm), the recurring billing form in Frappe Desk (/app/subscription),
  automated cycle invoicing, the 90-day longitudinal re-audit trigger, and programmatic MCP REST API automation.
metadata:
  version: v1.1.0
  category: accounting
  tags:
    - frappe
    - erpnext
    - subscription
    - retainer
    - mrr
    - 90-day-trigger
    - 3-tier-crud
  icon: autorenew
  publisher: d2cwithahrik
  support_tier: primary
  created_at: "2026-10-09"
  updated_at: "2026-10-09"
---

# Frappe Retainer & MRR Engine (`Subscription`)

> **Platform:** Frappe ERPNext Accounts & Frappe Framework Desk (`https://frappe-crm.appmarkit.com`)  
> **Entity DocType:** `Subscription` (Module: `Accounts`)  
> **Submittable:** No (`is_submittable = 0` — Managed by Scheduled Billing Cron)  
> **Revenue Standard:** Monthly Recurring Retainer (MRR) + Automated 90-Day Longitudinal Re-Audit Trigger  
> **Standard:** Universal 3-Tier Architecture (Pink CRM Retainer Pill $\rightarrow$ Frappe Desk Core $\rightarrow$ MCP API)

---

## 1. Architectural Architecture: Wrapper vs. Desk Core

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        SUBSCRIPTION 3-TIER OPERATIONAL TOPOLOGY                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 1: PINK CRM APP WRAPPER (/crm/organizations)                                      │
│ • Commercial account view: "Active Retainer" green badge, monthly MRR counter card.    │
│ • One-click recurring invoice preview and contract renewal indicator.                  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 2: UNIVERSAL FRAPPE DESK BACKEND (/app/subscription)                              │
│ • Recurring billing engine automatically issuing monthly `Sales Invoice` documents.    │
│ • Direct binding to `CRM Organization.custom_next_audit_due`: triggers quarterly       │
│   longitudinal re-audits every 90 days to prove quantitative ROI.                      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 3: PROGRAMMATIC MCP & REST API LEVEL (Python / FrappeClient)                      │
│ • Headless subscription activation, billing cycle monitoring, and 90-day trigger cron. │
│ • Automated renewal notification dispatches to Account Executives.                     │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Tier 1: Pink CRM App Level (`/crm/organizations`)

The account director's MRR interface:
* **Active Retainer Pill Badge**: Displayed prominently on the client's `CRM Organization` profile.
* **Monthly MRR Metric Card**: Shows contracted recurring rate (e.g. `₹85,000 / month`).
* **Upcoming Audit Due Counter**: Countdown display (e.g. *"Next Diagnostic Due in 24 Days"*).

---

## 3. Tier 2: Universal Frappe Desk Level (`/app/subscription`)

The automated recurring billing engine form (`Accounts > Subscription > Subscription Name`):

### Section A: Subscription Header & Customer
* `party_type` *(Select, Mandatory)*: `Customer`.
* `party` *(Dynamic Link, Mandatory)*: Permanent client entity (`Deshmukh Couture`).
* `start_date` *(Date, Mandatory)*: Subscription activation commencement date.
* `status` *(Select)*: `Draft`, `Active`, `Past Due Date`, `Cancelled`, `Completed`.
* `company` *(Link $\rightarrow$ Company)*: `D2C With AHrik`.

### Section B: Plans & Monthly Billing Cycle
* `plans` *(Table $\rightarrow$ Subscription Plan Detail, Mandatory)*:
  * `plan`: `AGY-GROWTH-RETAINER-MONTHLY` (Link $\rightarrow$ Subscription Plan).
  * `qty`: `1.0`.
* `billing_interval`: Set to `Month` (auto-bills on the 1st of every month).
* `generate_invoice_at`: `Beginning of the current subscription period` (Advance billing).

### Section C: The 90-Day Longitudinal Re-Audit Binding
* Every active subscription is linked to **`CRM Organization.custom_next_audit_due`**.
* **The Quarterly Review Rule**:
  * Exactly 90 days after the initial audit delivery, the subscription workflow triggers an internal alert.
  * Spawns a new **`CRM Audit (v2)`** document to measure the **Score Delta** (`v2_score - v1_score`).
  * Proves quantitative conversion and ROAS gains to founder $\rightarrow$ Secures seamless retainer continuation!

---

## 4. Tier 3: MCP & REST API Level (Python `FrappeClient`)

Headless, programmatic execution contracts for retainer activation and audit triggers.

### Contract 1: Ingesting a Monthly Retainer Subscription
```python
from frappe_mcp.client import FrappeClient

client = FrappeClient(url="https://frappe-crm.appmarkit.com", api_key="<key>", api_secret="<secret>")

subscription = client.create_doc("Subscription", {
    "doctype": "Subscription",
    "party_type": "Customer",
    "party": "Deshmukh Couture",
    "start_date": "2026-11-01",
    "status": "Active",
    "generate_invoice_at_period_start": 1,
    "plans": [
        {
            "plan": "Agency Growth Retainer - Monthly",
            "qty": 1
        }
    ]
})
```

### Contract 2: Checking 90-Day Retainer Re-Audit Triggers
```python
import datetime

today = datetime.date.today().isoformat()

# Fetch organizations with active retainers where 90-day review is due
due_retainers = client.search_docs(
    "CRM Organization",
    filters=[
        ["custom_next_audit_due", "<=", today]
    ],
    fields=["name", "organization_name", "custom_latest_audit", "custom_audit_score", "custom_next_audit_due"]
)

for account in due_retainers.get("data", []):
    print(f"Triggering Quarterly Re-Audit for: {account['organization_name']}")
```

---

## 5. Universal 8-Action CRUD & Operations Matrix

| Operation | Tier 1: Pink CRM (/crm) | Tier 2: Frappe Desk (/app) | Tier 3: MCP / API (Python) |
|:---|:---|:---|:---|
| **1. CREATE** | Click `Create Retainer` on Org page | Full Form `/app/subscription/new` | `client.create_doc("Subscription", {...})` |
| **2. READ** | Monthly MRR card on Org profile | Multi-column List View, Invoicing History| `client.get_doc("Subscription", id)` |
| **3. UPDATE** | Upgrade retainer tier plan | Form Save (`Cmd+S`), add/remove plans | `client.update_doc("Subscription", id, {...})` |
| **4. DELETE** | Action menu $\rightarrow$ Cancel | `Menu > Delete` (Draft only; Cancel if Active)| `client.delete_doc("Subscription", id)` |
| **5. PRINT / PDF**| Retainer billing summary | `Menu > Print` $\rightarrow$ Retainer Account Ledger | `client.call_method("frappe.client.get_print", ...)` |
| **6. COMMUNICATE**| Send renewal notice via WhatsApp| Native Desk Email with monthly statement | Automated transactional billing email via Listmonk |
| **7. ASSIGN / RLS**| Assigned account manager avatar | `Menu > Assign To` (`ToDo`) for AE renewal | Create `ToDo` document assigned to AE |
| **8. RE-AUDIT** | Badge shows `Next Audit Due` date | Daily Cron alerts 90-day review trigger | Automated trigger spawning Version v2 audit |
