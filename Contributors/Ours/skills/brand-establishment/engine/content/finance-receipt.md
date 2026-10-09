# Payment Receipt — Content Module

> **Module Version:** `v1.0`  
> **Compatible Formats:** `invoice-table`  
> **Document Type:** Post-payment confirmation  
> **Department:** Finance

---

## Header

**PAYMENT RECEIPT**

---

## Section 1: Receipt Metadata

| Field | Value |
|---|---|
| Receipt Number | {{RECEIPT_NUM}} |
| Date | {{RECEIPT_DATE}} |
| Payment Method | {{PAYMENT_METHOD}} |
| Transaction Reference | {{TRANSACTION_REF}} |

---

## Section 2: Parties

**Received By:**  
{{BRAND_NAME}}  
{{BRAND_ADDRESS}}  
{{SUPPORT_EMAIL}}

**Received From:**  
{{CLIENT_NAME}}  
{{CLIENT_COMPANY}}  
{{CLIENT_EMAIL}}

---

## Section 3: Payment Details

| Reference | Description | Amount |
|---|---|---|
| Invoice #{{INVOICE_REF}} | {{PAYMENT_DESCRIPTION}} | {{PAYMENT_AMOUNT}} |

| | |
|---|---|
| **Amount Received** | **{{PAYMENT_AMOUNT}}** |
| **Payment Method** | {{PAYMENT_METHOD}} |
| **Currency** | {{CURRENCY}} |

---

## Section 4: Status

| Field | Value |
|---|---|
| Invoice Amount | {{INVOICE_TOTAL}} |
| Amount Paid (this receipt) | {{PAYMENT_AMOUNT}} |
| Previous Payments | {{PREVIOUS_PAYMENTS}} |
| **Outstanding Balance** | **{{BALANCE_DUE}}** |

---

## Section 5: Acknowledgment

> This receipt confirms that {{BRAND_NAME}} has received payment of **{{PAYMENT_AMOUNT}} {{CURRENCY}}** from {{CLIENT_NAME}} on {{RECEIPT_DATE}}.

Thank you for your payment.

**{{BRAND_NAME}}**  
{{SUPPORT_EMAIL}} · {{DOMAIN}}

---

## Variables Required

| Variable | Description |
|---|---|
| `{{RECEIPT_NUM}}` | Receipt identifier |
| `{{RECEIPT_DATE}}` | Date of receipt |
| `{{PAYMENT_METHOD}}` | Bank transfer / UPI / PayPal / etc. |
| `{{TRANSACTION_REF}}` | Bank transaction reference |
| `{{INVOICE_REF}}` | Related invoice number |
| `{{PAYMENT_AMOUNT}}` | Amount received |
| `{{BALANCE_DUE}}` | Remaining balance (0 if fully paid) |
| `{{CURRENCY}}` | Payment currency |
