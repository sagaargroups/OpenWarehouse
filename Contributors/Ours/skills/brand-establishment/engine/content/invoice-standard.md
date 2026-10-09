# Standard Invoice — Content Module

> **Module Version:** `v1.0`  
> **Compatible Formats:** `invoice-table`  
> **Document Type:** Standard billing invoice

---

## Invoice Metadata

| Field | Value |
|---|---|
| Invoice Number | {{INVOICE_NUM}} |
| Invoice Date | {{INVOICE_DATE}} |
| Due Date | {{DUE_DATE}} |
| PO / Reference | {{PO_NUMBER}} (if applicable) |

---

## From (Provider)

| Field | Value |
|---|---|
| Name | {{BRAND_NAME}} |
| Address | {{BRAND_ADDRESS}} |
| Email | {{SUPPORT_EMAIL}} |
| GST / Tax ID | {{TAX_ID}} (if applicable) |

---

## Bill To (Client)

| Field | Value |
|---|---|
| Name | {{CLIENT_NAME}} |
| Company | {{CLIENT_COMPANY}} |
| Address | {{CLIENT_ADDRESS}} |
| Email | {{CLIENT_EMAIL}} |
| GST / Tax ID | {{CLIENT_TAX_ID}} (if applicable) |

---

## Line Items

| # | Description | Qty | Rate | Amount |
|---|---|---|---|---|
| 1 | {{ITEM_1_DESC}} | {{ITEM_1_QTY}} | {{ITEM_1_RATE}} | {{ITEM_1_AMOUNT}} |
| 2 | {{ITEM_2_DESC}} | {{ITEM_2_QTY}} | {{ITEM_2_RATE}} | {{ITEM_2_AMOUNT}} |
| 3 | {{ITEM_3_DESC}} | {{ITEM_3_QTY}} | {{ITEM_3_RATE}} | {{ITEM_3_AMOUNT}} |

---

## Totals

| | Amount |
|---|---|
| **Subtotal** | {{SUBTOTAL}} |
| **Tax ({{TAX_RATE}}%)** | {{TAX_AMOUNT}} |
| **Discount** | {{DISCOUNT}} (if applicable) |
| **TOTAL DUE** | **{{TOTAL_DUE}}** |

---

## Payment Details

| Method | Details |
|---|---|
| Bank Transfer | {{BANK_NAME}} · Acc: {{ACCOUNT_NUM}} · IFSC: {{IFSC_CODE}} |
| UPI | {{UPI_ID}} |
| PayPal | {{PAYPAL_EMAIL}} (if applicable) |

---

## Notes

{{INVOICE_NOTES}}

> Payment is due within **{{PAYMENT_DAYS}} days** of invoice date. Late payments are subject to a **{{LATE_FEE_RATE}}%** monthly interest charge.

---

## Variables Required

| Variable | Description |
|---|---|
| `{{INVOICE_NUM}}` | Invoice identifier |
| `{{INVOICE_DATE}}` | Date of issue |
| `{{DUE_DATE}}` | Payment deadline |
| `{{BRAND_NAME}}` | Provider's brand name |
| `{{CLIENT_NAME}}` | Client's name |
| `{{ITEM_N_DESC}}` | Line item descriptions |
| `{{ITEM_N_QTY}}` | Quantities |
| `{{ITEM_N_RATE}}` | Per-unit rates |
| `{{ITEM_N_AMOUNT}}` | Line totals |
| `{{SUBTOTAL}}` | Pre-tax total |
| `{{TAX_RATE}}` | Tax percentage |
| `{{TOTAL_DUE}}` | Final amount |
| `{{BANK_NAME}}` | Bank name |
| `{{ACCOUNT_NUM}}` | Bank account number |
| `{{IFSC_CODE}}` | Bank IFSC code |
| `{{UPI_ID}}` | UPI handle |
| `{{PAYMENT_DAYS}}` | Payment terms |
