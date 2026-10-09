# Quotation / Estimate — Content Module

> **Module Version:** `v1.0`  
> **Compatible Formats:** `a4-letterhead`  
> **Document Type:** Pre-agreement pricing and scope estimate  
> **Department:** Finance

---

## Header

**QUOTATION**  
Ref: {{QUOTE_REF}}

---

## Section 1: Metadata

| Field | Value |
|---|---|
| Quote Reference | {{QUOTE_REF}} |
| Date Issued | {{QUOTE_DATE}} |
| Valid Until | {{VALIDITY_DATE}} |
| Prepared By | {{PREPARED_BY}} |
| Prepared For | {{CLIENT_NAME}} |

---

## Section 2: Parties

**From:**  
{{BRAND_NAME}}  
{{BRAND_ADDRESS}}  
{{SUPPORT_EMAIL}} · {{DOMAIN}}

**To:**  
{{CLIENT_NAME}}  
{{CLIENT_COMPANY}}  
{{CLIENT_EMAIL}}

---

## Section 3: Scope Summary

{{SCOPE_SUMMARY}}

> This quotation covers the estimated cost for the work described below. Final pricing may be adjusted upon detailed scope review and mutual agreement via a signed Statement of Work.

---

## Section 4: Line Items

| # | Item | Description | Qty | Unit Price | Total |
|---|---|---|---|---|---|
| 1 | {{ITEM_1}} | {{ITEM_1_DESC}} | {{ITEM_1_QTY}} | {{ITEM_1_PRICE}} | {{ITEM_1_TOTAL}} |
| 2 | {{ITEM_2}} | {{ITEM_2_DESC}} | {{ITEM_2_QTY}} | {{ITEM_2_PRICE}} | {{ITEM_2_TOTAL}} |
| 3 | {{ITEM_3}} | {{ITEM_3_DESC}} | {{ITEM_3_QTY}} | {{ITEM_3_PRICE}} | {{ITEM_3_TOTAL}} |

---

## Section 5: Totals

| | Amount |
|---|---|
| **Subtotal** | {{SUBTOTAL}} |
| **Tax ({{TAX_RATE}}%)** | {{TAX_AMOUNT}} |
| **Estimated Total** | **{{ESTIMATED_TOTAL}}** |

---

## Section 6: Terms & Conditions

1. This quotation is valid for **{{VALIDITY_DAYS}} days** from the date of issue.
2. Prices are in **{{CURRENCY}}** and exclusive of taxes unless stated otherwise.
3. This is an estimate only — final pricing will be confirmed upon signed SOW.
4. {{BRAND_NAME}} reserves the right to revise pricing if scope changes materially.
5. Payment terms upon agreement: **Net {{PAYMENT_DAYS}} days**.

---

## Section 7: How to Proceed

1. Review this quotation
2. Confirm scope and requirements
3. We prepare a formal SOW with milestone payments
4. Work begins upon signed SOW and advance payment

**Contact:** {{SUPPORT_EMAIL}} · {{DOMAIN}}

---

## Variables Required

| Variable | Description |
|---|---|
| `{{QUOTE_REF}}` | Quotation reference number |
| `{{QUOTE_DATE}}` | Date of issue |
| `{{VALIDITY_DATE}}` | Expiry date |
| `{{CLIENT_NAME}}` | Client's name |
| `{{SCOPE_SUMMARY}}` | Brief scope description |
| `{{ITEM_N}}` | Line item names |
| `{{ESTIMATED_TOTAL}}` | Total estimated cost |
| `{{CURRENCY}}` | Payment currency |
