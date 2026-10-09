---
name: frappe-contact-engine
description: >
  Master operating manual and 3-tier schema specification for Contacts in Frappe CRM (DocType Contact).
  Governs frontline contact profiles in Pink CRM (/crm), the full administrative form in Frappe Desk (/app/contact),
  WhatsApp opt-in consent, DPDP Act compliance, decision-maker roles, and programmatic MCP REST API automation.
metadata:
  version: v1.1.0
  category: crm
  tags:
    - frappe
    - crm
    - contact
    - whatsapp
    - consent
    - decision-maker
    - 3-tier-crud
  icon: contact_phone
  publisher: d2cwithahrik
  support_tier: primary
  created_at: "2026-10-09"
  updated_at: "2026-10-09"
---

# Frappe Contact Operating Engine (`Contact`)

> **Platform:** Frappe CRM (`FCRM`) & Frappe Framework Desk (`https://frappe-crm.appmarkit.com`)  
> **Entity DocType:** `Contact` (Module: `Contacts`)  
> **Submittable:** No (`is_submittable = 0`)  
> **Compliance Standard:** India DPDP Act 2023 & GDPR Consent Verification  
> **Standard:** Universal 3-Tier Architecture (Pink CRM Wrapper $\rightarrow$ Frappe Desk Core $\rightarrow$ MCP API)

---

## 1. Architectural Architecture: Wrapper vs. Desk Core

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                          CONTACT 3-TIER OPERATIONAL TOPOLOGY                           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 1: PINK CRM APP WRAPPER (/crm/contacts)                                          │
│ • Direct founder and executive contact list with fast search and communication buttons.│
│ • 1-Click WhatsApp web trigger, verified opt-in badge, and quick phone dialing.        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 2: UNIVERSAL FRAPPE DESK BACKEND (/app/contact)                                   │
│ • Administrative identity master linking individual humans to `CRM Organization`,      │
│   `CRM Lead`, and `Customer`.                                                          │
│ • Explicit DPDP consent registry, decision-maker authority roles, and address links.   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ TIER 3: PROGRAMMATIC MCP & REST API LEVEL (Python / FrappeClient)                      │
│ • Headless phone number normalization (E.164), consent logging, and CRM linkage.      │
│ • Enforces zero duplicate contacts across organization domains.                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Tier 1: Pink CRM App Level (`/crm/contacts`)

The human-facing relationship directory used by sales and outreach reps:
* **Route**: `/crm/contacts`
* **Contact Card**: Displays Full Name, Title, Linked Company Name, and Primary Email.
* **1-Click WhatsApp Trigger**: Green WhatsApp icon button linking directly to `https://wa.me/{custom_whatsapp_no}` (disabled if opt-in is unchecked).
* **Communication Badges**:
  * `Decision Role`: `Decision Maker` (Green), `Influencer` (Blue), `Gatekeeper` (Amber).
  * `Consent Status`: Verified opt-in checkmark.

---

## 3. Tier 2: Universal Frappe Desk Level (`/app/contact`)

The administrative master identity record (`Contacts > Contact > Contact Name`):

### Section A: Personal Identity & Name
* `first_name` *(Data, Mandatory)*: First name.
* `last_name` *(Data)*: Last name.
* `salutation` *(Link $\rightarrow$ Salutation)*: Mr, Ms, Dr.
* `designation` *(Data)*: Official job title (e.g. Managing Director, Founder).
* `gender` *(Link $\rightarrow$ Gender)*: Optional gender identification.

### Section B: Communication Channels & WhatsApp
* `email_id` *(Data, Email validated)*: Primary corporate email address.
* `mobile_no` *(Data, Phone)*: Primary direct mobile phone.
* `phone` *(Data, Phone)*: Office landline or backup line.
* `custom_whatsapp_no` *(Data, Phone, Mandatory)*: E.164 formatted WhatsApp number (`+919820123456`).
* `custom_decision_role` *(Select, Mandatory)*: `Decision Maker`, `Influencer`, `Gatekeeper`, `End User`.
* `custom_preferred_contact_channel` *(Select)*: `WhatsApp`, `Phone Call`, `Email`, `Google Meet`.

### Section C: Organization & Lead Foreign Keys
* `links` *(Table $\rightarrow$ Dynamic Link)*: Child table linking this person to:
  * `CRM Organization`: Permanent corporate entity.
  * `CRM Lead`: Inbound lead record where they originated.
  * `Customer`: ERPNext paying client record.

### Section D: DPDP Act Compliance & Legal Consent
* `custom_whatsapp_opt_in` *(Check, Mandatory)*: Explicit permission for WhatsApp notifications.
* `custom_consent_given` *(Check, Mandatory)*: DPDP Act 2023 legal consent flag.
* `custom_consent_date` *(Datetime)*: Timestamp when consent was captured.
* `custom_consent_source` *(Select)*: `Web Form`, `WhatsApp Opt-in`, `Verbal on Call`, `Written Email`.
* `custom_do_not_contact` *(Check)*: Hard suppression block (suppresses outreach dispatches).

---

## 4. Tier 3: MCP & REST API Level (Python `FrappeClient`)

Headless, programmatic execution contracts for contact ingestion and consent tracking.

### Contract 1: Ingesting a Contact Linked to Organization
```python
from frappe_mcp.client import FrappeClient

client = FrappeClient(url="https://frappe-crm.appmarkit.com", api_key="<key>", api_secret="<secret>")

contact = client.create_doc("Contact", {
    "doctype": "Contact",
    "first_name": "Rohan",
    "last_name": "Deshmukh",
    "designation": "Founder & Creative Director",
    "email_id": "rohan@deshmukhcouture.com",
    "mobile_no": "+919820123456",
    "custom_whatsapp_no": "+919820123456",
    "custom_decision_role": "Decision Maker",
    "custom_preferred_contact_channel": "WhatsApp",
    # DPDP Consent
    "custom_consent_given": 1,
    "custom_whatsapp_opt_in": 1,
    "custom_consent_source": "Web Form",
    # Relational Dynamic Links
    "links": [
        {
            "link_doctype": "CRM Organization",
            "link_name": "Deshmukh Couture"
        }
    ]
})
```

### Contract 2: Querying Contacts by Decision Role
```python
decision_makers = client.search_docs(
    "Contact",
    filters=[
        ["custom_decision_role", "=", "Decision Maker"],
        ["custom_whatsapp_opt_in", "=", 1]
    ],
    fields=["name", "first_name", "last_name", "custom_whatsapp_no", "email_id"]
)
```

---

## 5. Universal 8-Action CRUD & Operations Matrix

| Operation | Tier 1: Pink CRM (/crm) | Tier 2: Frappe Desk (/app) | Tier 3: MCP / API (Python) |
|:---|:---|:---|:---|
| **1. CREATE** | Quick `+ New Contact` button | Full Form `/app/contact/new` | `client.create_doc("Contact", {...})` |
| **2. READ** | Contact cards with company tags | Multi-column List View, Timeline | `client.get_doc("Contact", id)` / `search_docs()` |
| **3. UPDATE** | Inline cell edit in contact card | Full Form Save (`Cmd+S`), edit links | `client.update_doc("Contact", id, {...})` |
| **4. DELETE** | Action menu $\rightarrow$ Delete | `Menu > Delete` (Guarded by dynamic links)| `client.delete_doc("Contact", id)` |
| **5. PRINT / PDF**| V-Card export icon | `Menu > Print` $\rightarrow$ Contact V-Card Format | `client.call_method("frappe.client.get_print", ...)` |
| **6. COMMUNICATE**| 1-Click WhatsApp (`wa.me`) | Native Desk Email with template | Dispatches via WhatsApp Cloud API / Listmonk |
| **7. ASSIGN / RLS**| Linked account manager avatar | Set `User Permission` based on Organization | Restrict user permissions via REST API |
| **8. OPT-IN** | Toggle WhatsApp switch in card | Checkbox save `custom_whatsapp_opt_in` | Update consent timestamp & source |
