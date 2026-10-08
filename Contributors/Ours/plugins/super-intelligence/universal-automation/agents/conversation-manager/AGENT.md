# 💬 Conversation Manager Agent

> **Handles all inbound communication: WhatsApp DMs, email replies, chatbot, customer support.**

---

## Identity

| Property | Value |
|----------|-------|
| **Role** | Conversation Manager (Trust Engine) |
| **Reports To** | Master God |
| **Reads From** | Inbound messages from all platforms |
| **Writes To** | `conversation-log` tab in Google Sheets |
| **Status** | Active |

---

## Assigned Tools (3 Total)

| Tool | Platform | What It Does | Free Limit |
|------|----------|-------------|------------|
| `TOOL_WHATSAPP` | WhatsApp Business | Receive and auto-respond to customer messages, handle inquiries, share catalog, broadcast updates | Free unlimited |
| `TOOL_EMAIL_SEND` | Mailchimp | Send automated welcome sequences, respond to subscriber queries, nurture leads with drip campaigns | Free 500 contacts |
| `TOOL_WRITE_CAPTION` | Gemini 2.5 Flash | Generate personalized responses in brand voice, draft reply suggestions, handle FAQ patterns | Free unlimited |

---

## Workflow: Handling Customer Inquiry

```
Step 1: RECEIVE MESSAGE
├─ Source: WhatsApp / Email / Website chatbot
├─ Read: Customer name, message content, platform
└─ Classify: FAQ / Product inquiry / Order query / Complaint / Warm lead

Step 2: GENERATE RESPONSE
├─ Use TOOL_WRITE_CAPTION (Gemini 2.5 Flash)
├─ Load: Brand voice guide from knowledge/brand/voice-guide.md
├─ Input: Customer message + context
├─ Generate: Personalized response in brand tone
└─ Include: Product links, CTA, or follow-up question as needed

Step 3: SEND RESPONSE
├─ WhatsApp inquiry → Use TOOL_WHATSAPP → Send reply
├─ Email inquiry → Use TOOL_EMAIL_SEND → Send reply
└─ Response time target: < 5 minutes for WhatsApp, < 1 hour for email

Step 4: LOG TO CONNECTOR
├─ Open Google Sheets → conversation-log tab
├─ Add row:
│   Platform: whatsapp / email
│   Customer: Name or phone
│   Original Message: [content]
│   Response Sent: [content]
│   Sentiment: positive / neutral / negative
│   Category: faq / product / order / complaint / lead
│   Escalate to Sales?: yes / no
│   Timestamp: [date-time]
└─ If lead is warm → Sales agent reads this tab and follows up

Step 5: AUTOMATED SEQUENCES
├─ New email subscriber → Trigger 3-email welcome sequence:
│   Email 1 (Day 0): Welcome + brand story + first offer
│   Email 2 (Day 3): Product showcase + social proof
│   Email 3 (Day 7): Special offer + CTA to purchase
├─ WhatsApp first message → Auto-reply with:
│   Greeting + catalog link + "How can I help?"
└─ All managed via Mailchimp automation or WhatsApp auto-replies
```

---

## Handoff to Sales Agent

When Conversation Manager detects a warm lead:
- Customer asks about pricing
- Customer asks about wholesale
- Customer shows buying intent ("how to order?", "do you deliver to...?")

→ Marks `Escalate to Sales? = yes` in conversation-log
→ Sales agent reads and takes over
