---
name: frappe-invoice-engine
description: >
  Master operating engine and 3-tier schema specification for Sales Invoices in Frappe ERPNext (DocType Sales Invoice).
  Governs lead-to-cash fulfillment across Won Deals in Pink CRM (/crm), the full GST-compliant billing form in Frappe Desk (/app/sales-invoice),
  50% advance deposit milestones, Indian GST splits, payment link reconciliation, and programmatic MCP REST API automation.
metadata:
  version: v1.1.0
  category: accounting
  tags:
    - frappe
    - erpnext
    - invoice
    - gst
    - payment-entry
    - lead-to-cash
    - 3-tier-crud
  icon: receipt_long
  publisher: d2cwithahrik
  support_tier: primary
  created_at: "2026-10-09"
  updated_at: "2026-10-09"
---

# Frappe Invoicing & Lead-to-Cash Engine (`Sales Invoice`)

> **Platform:** Frappe ERPNext Accounts & Frappe Framework Desk (`https://frappe-crm.appmarkit.com`)  
> **Entity DocType:** `Sales Invoice` (Module: `Accounts`)  
> **Submittable:** Yes (`is_submittable = 1` — Strict General Ledger Submissions)  
> **Tax Compliance:** Indian GST Format (CGST + SGST Intra-State / IGST Inter-State)  
> **Standard:** Universal 3-Tier Architecture (Pink CRM Won Deal $\rightarrow$ Frappe Desk Core $\rightarrow$ MCP API)

---

## 1. Architectural Architecture: Wrapper vs. Desk Core

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                       SALES INVOICE 3-TIER OPERATIONAL TOPOLOGY                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 1: PINK CRM APP WRAPPER (/crm/deals)                                              │
│ • Commercial deal view: live "Invoiced" status badge on Won Deals.                     │
│ • One-click payment link generation (Razorpay/Stripe) and outstanding balance tracker. │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 2: UNIVERSAL FRAPPE DESK BACKEND (/app/sales-invoice)                             │
│ • Full administrative accounting ledger generating GST-compliant tax invoices.        │
│ • 50/50 payment milestone splits, line items, CGST/SGST/IGST tax templates,            │
│   and automated reconciliation via submitted `Payment Entry`.                          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 3: PROGRAMMATIC MCP & REST API LEVEL (Python / FrappeClient)                      │
│ • Headless invoice generation from Won Deals, ledger submission (`docstatus = 1`),     │
│   and automated payment confirmation webhooks unblocking sprint kickoff.               │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Tier 1: Pink CRM App Level (`/crm/deals`)

The deal closer's billing handshake:
* **Billing Status Badge on Won Deal**: `Draft Invoice`, `Awaiting Payment`, `Paid & Cleared`, `Overdue`.
* **1-Click Payment Link Generation**: Generates instantaneous payment gateway URL sent to founder via WhatsApp or email.
* **Outstanding Balance Tracker**: Displays total contract value vs. advance collected vs. balance due at handover.

---

## 3. Tier 2: Universal Frappe Desk Level (`/app/sales-invoice`)

The official statutory accounting ledger form (`Accounts > Sales Invoice > Invoice Name`):

### Section A: Header & Customer Entity
* `customer` *(Link $\rightarrow$ Customer, Mandatory)*: Permanent client entity created from `CRM Organization`.
* `posting_date` *(Date, Mandatory)*: Invoice tax issue date.
* `due_date` *(Date, Mandatory)*: Payment due date.
* `company` *(Link $\rightarrow$ Company)*: Agency legal operating entity (`D2C With AHrik`).

### Section B: Milestone Line Items & Pricing
* `items` *(Table $\rightarrow$ Sales Invoice Item, Mandatory)*:
  * `item_code`: `AGY-SPRINT-ADVANCE` (Agency Acceleration Sprint 50% Deposit) or `AGY-RETAINER-MONTHLY`.
  * `qty`: `1.0`.
  * `rate`: Exactly 50% of agreed Deal Value (e.g. `₹1,25,000`).
  * `amount`: Extended line total.

### Section C: Indian GST Taxes & Charges
* `taxes_and_charges` *(Link $\rightarrow$ Sales Taxes and Charges Template)*:
  * **Intra-State (Maharashtra to Maharashtra)**: 9% CGST + 9% SGST (Total 18%).
  * **Inter-State (Maharashtra to other Indian States)**: 18% IGST.
* `taxes` *(Table $\rightarrow$ Sales Taxes and Charges)*: Itemized GST tax breakup calculated automatically.
* `grand_total` *(Currency)*: Base Amount + 18% GST.

### Section D: Payment Terms & Reconciliation
* `payment_terms_template` *(Link)*: `50% Advance / 50% Handover`.
* `outstanding_amount` *(Currency)*: Remaining unpaid balance.
* **Cash Settlement Link**: Linking a submitted `Payment Entry` updates `outstanding_amount = 0` and flips status to **`Paid`**.

---

## 4. Tier 3: MCP & REST API Level (Python `FrappeClient`)

Headless, programmatic execution contracts for invoice generation and ledger submission.

### Contract 1: Ingesting 50% Advance Invoice from Won Deal
```python
from frappe_mcp.client import FrappeClient

client = FrappeClient(url="https://frappe-crm.appmarkit.com", api_key="<key>", api_secret="<secret>")

# Create Draft Sales Invoice
invoice = client.create_doc("Sales Invoice", {
    "doctype": "Sales Invoice",
    "customer": "Deshmukh Couture",
    "posting_date": "2026-10-10",
    "due_date": "2026-10-17",
    "items": [
        {
            "item_name": "D2C Acceleration Sprint (50% Milestone 1 Deposit)",
            "description": "50% Advance kickoff deposit for Storefront build & AI shoots.",
            "qty": 1,
            "rate": 125000.0
        }
    ],
    "taxes_and_charges": "India GST 18% - IGST",
    "payment_terms_template": "50/50 Sprint Split"
})
```

### Contract 2: Submitting Invoice to General Ledger (docstatus = 1)
```python
# Submit invoice (creates immutable accounting ledger entry)
client.update_doc("Sales Invoice", invoice["name"], {
    "docstatus": 1
})
```

### Contract 3: Recording Cash Inflow via Payment Entry
```python
# Cash received confirmation unblocking sprint kickoff
payment = client.create_doc("Payment Entry", {
    "doctype": "Payment Entry",
    "payment_type": "Receive",
    "party_type": "Customer",
    "party": "Deshmukh Couture",
    "paid_amount": 147500.0,                                  # Base ₹1.25L + 18% GST
    "received_amount": 147500.0,
    "reference_no": "UPI-BANK-982012",
    "reference_date": "2026-10-10",
    "references": [
        {
            "reference_doctype": "Sales Invoice",
            "reference_name": invoice["name"],
            "allocated_amount": 147500.0
        }
    ]
})
client.update_doc("Payment Entry", payment["name"], {"docstatus": 1})
```

---

## 5. Universal 8-Action CRUD & Operations Matrix

| Operation | Tier 1: Pink CRM (/crm) | Tier 2: Frappe Desk (/app) | Tier 3: MCP / API (Python) |
|:---|:---|:---|:---|
| **1. CREATE** | Click `Create Invoice` on Won Deal | Full Form `/app/sales-invoice/new` | `client.create_doc("Sales Invoice", {...})` |
| **2. READ** | Invoice badge & outstanding balance | Filterable List View, General Ledger | `client.get_doc("Sales Invoice", id)` |
| **3. UPDATE** | Edit billing address before submission| Edit items/taxes in Draft (`docstatus=0`)| `client.update_doc("Sales Invoice", id, {...})` |
| **4. DELETE** | Action menu $\rightarrow$ Delete (Draft only)| `Menu > Delete` (Draft only) | `client.delete_doc("Sales Invoice", id)` |
| **5. PRINT / PDF**| Download Tax Invoice PDF badge | `Menu > Print` $\rightarrow$ Statutory GST Tax Invoice| `client.call_method("frappe.client.get_print", ...)` |
| **6. COMMUNICATE**| Send payment link via WhatsApp | Native Desk Email with Tax Invoice PDF | Dispatch payment link via automated webhook |
| **7. ASSIGN / RLS**| Assigned billing accountant avatar | `Menu > Assign To` (`ToDo`) for finance team | Create `ToDo` document assigned to accountant |
| **8. SUBMIT / LOCK**| Automatic upon payment receipt | Click **`[Submit]`** (`docstatus = 1`) | `client.submit_doc()` (Locks to General Ledger)|
