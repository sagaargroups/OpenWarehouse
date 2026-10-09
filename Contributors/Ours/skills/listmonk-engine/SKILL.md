---
name: listmonk-engine
description: 'Master operating manual for self-hosted Listmonk email marketing and
  transactional platform on our sovereign cloud cluster. Governs the complete 14-category
  OpenAPI endpoint directory, action-based execution contracts, safety tagging ([read],
  [write], [destructive]), live credentials, and multi-relay SMTP pooling/switching
  rules.

  '
metadata:
  version: v1.0.0
  category: marketing
  tags:
  - listmonk
  - email
  - transactional
  - smtp-pooling
  - sovereign-cloud
  icon: mark_email_read
  publisher: d2cwithahrik
  support_tier: primary
  created_at: '2026-10-08'
  updated_at: '2026-10-09'
---

# Listmonk Master Operating & Governance Protocol

> **Platform:** Self-Hosted Listmonk on Sovereign Cloud Cluster  
> **API Base URL:** `https://listmonk.appmarkit.com/api`  
> **Auth Scheme:** HTTP Basic Auth (`mcp_agent:<password>`)  
> **Verified Sender Domain:** `d2cwith.ahrik.com` (`D2C with Ahrik <hello@d2cwith.ahrik.com>`)  
> **Core Mandate:** Zero third-party bloat, complete OpenAPI endpoint coverage, multi-relay pooling with automated quota-rotation, and strict agentic safety governance.

---

## 1. Safety & Execution Governance

Every agent interacting with Listmonk must strictly adhere to action-level safety classifications:

| Safety Tag | Scope | Rule |
| :--- | :--- | :--- |
| `[read]` | Data retrieval (counts, queries, lists, templates, settings) | Safe to run autonomously. |
| `[write]` | State changes (creating subscribers, drafting campaigns, updating lists, switching SMTP) | Requires validated payload; log changes clearly. |
| `[destructive]` | Permanent changes (deleting subscribers/campaigns, blocklisting, clearing data) | **Hard confirmation required** — must confirm target ID and get user approval first. |

---

## 2. Live Connection Profiles & Authentication

* **Base URL:** `https://listmonk.appmarkit.com/api`
* **Auth:** Standard HTTP Basic Auth
  * Username: `mcp_agent`
  * Password: `baegMDs1zquoJg93e3YwTVsotthYRtA3B6wB2kwmVuWMPIpq`
* **Headers:** `Content-Type: application/json`

### Direct CLI / cURL Test
```bash
curl -s -u "mcp_agent:baegMDs1zquoJg93e3YwTVsotthYRtA3B6wB2kwmVuWMPIpq" \
  https://listmonk.appmarkit.com/api/dashboard/counts
```

---

## 3. Multi-Relay Pooling & Automated Quota-Rotation Strategy

To dispatch tens of thousands of emails per month for \$0.00 while maintaining high deliverability, the agent rotates through pre-warmed free SMTP relays before hitting daily limits:

### The 4-Tier Free Relay Pool Ladder

| Tier | Relay Provider | Free Allowance | Protocol | Role in Pool |
| :-: | :--- | :--- | :--- | :--- |
| **1** | **Resend** | **100 / day** (3,000 / mo) | Port 465 (TLS) | Primary transactional & priority discovery |
| **2** | **Brevo** | **300 / day** (9,000 / mo) | Port 587 (STARTTLS) | Secondary overflow when Resend hits 90/day |
| **3** | **Scaleway** | **10,000 / mo** | Port 587 (STARTTLS) | Mid-volume campaigns & bulk nurturing |
| **4** | **Amazon SES** | $0.10 per 1,000 emails | Port 587 (STARTTLS) | High-volume scaling fallback |

### The Rotation Rule (Switch Before Limit)
1. Query daily dispatch count via `GET /api/dashboard/counts`.
2. When current active relay hits **90% of its daily quota** (e.g., 90 sends on Resend), trigger `PUT /api/settings` to enable the next tier relay (e.g., Brevo) and disable the exhausted relay.
3. Verify new relay connectivity using `POST /api/settings/smtp/test`.

---

## 4. Complete 14-Category OpenAPI Endpoint Directory

### Category 01: Transactional (`/api/tx`)
* `POST /api/tx` `[write]` — Send immediate transactional email.
  ```json
  {
    "subscriber_email": "prospect@example.com",
    "template_id": 1,
    "data": { "name": "Prospect Name", "offer": "D2C Scaling Audit" }
  }
  ```

### Category 02: Settings & SMTP Relay Management (`/api/settings`)
* `GET /api/settings` `[read]` — Fetch all global settings and the active `smtp` array.
* `PUT /api/settings` `[write]` — Update settings (including enabling/disabling or adding SMTP relays).
* `POST /api/settings/smtp/test` `[write]` — Test SMTP connection by dispatching a verification email.
  ```json
  {
    "uuid": "eb0813f2-5033-4cac-bbef-ffe8fc91a379",
    "email": "hello@d2cwith.ahrik.com"
  }
  ```

### Category 03: Subscribers (`/api/subscribers`)
* `GET /api/subscribers` `[read]` — Search & list subscribers (`?query=...&page=1&per_page=20`).
* `GET /api/subscribers/{id}` `[read]` — Fetch single subscriber by ID.
* `POST /api/subscribers` `[write]` — Create new subscriber.
  ```json
  {
    "email": "lead@company.com",
    "name": "Lead Name",
    "status": "enabled",
    "lists": [1],
    "attribs": { "city": "Surat", "industry": "Fashion D2C" },
    "preconfirm_subscriptions": true
  }
  ```
* `PUT /api/subscribers/{id}` `[write]` — Update subscriber details or list memberships.
* `DELETE /api/subscribers/{id}` `[destructive]` — Permanently delete subscriber.
* `PUT /api/subscribers/lists` `[write]` — Bulk manage subscriptions (`action: "add" | "remove" | "unsubscribe"`).
* `PUT /api/subscribers/blocklist` `[destructive]` — Blocklist subscribers.

### Category 04: Lists (`/api/lists`)
* `GET /api/lists` `[read]` — Fetch all lists with subscriber counters.
* `POST /api/lists` `[write]` — Create list (`name`, `type: "public" | "private"`, `optin: "single" | "double"`).
* `GET /api/lists/{id}` `[read]` — Fetch single list details.
* `PUT /api/lists/{id}` `[write]` — Update list name or type.
* `DELETE /api/lists/{id}` `[destructive]` — Delete list.

### Category 05: Campaigns (`/api/campaigns`)
* `GET /api/campaigns` `[read]` — List campaigns with statuses (`draft`, `scheduled`, `running`, `paused`, `finished`).
* `POST /api/campaigns` `[write]` — Create draft campaign (`name`, `subject`, `lists`, `type`, `body`, `template_id`).
* `GET /api/campaigns/{id}` `[read]` — Fetch campaign details.
* `PUT /api/campaigns/{id}` `[write]` — Update draft campaign content.
* `PUT /api/campaigns/{id}/status` `[write]` — Change campaign status (`"running"`, `"paused"`, `"cancelled"`).
* `POST /api/campaigns/{id}/test` `[write]` — Send test preview to admin or specified emails.
* `GET /api/campaigns/{id}/preview` `[read]` — Render HTML preview inside the active template.
* `DELETE /api/campaigns/{id}` `[destructive]` — Delete campaign permanently.

### Category 06: Templates (`/api/templates`)
* `GET /api/templates` `[read]` — List all email templates (campaign, transactional).
* `GET /api/templates/{id}` `[read]` — Fetch template source body.
* `POST /api/templates` `[write]` — Create new HTML template.
* `PUT /api/templates/{id}` `[write]` — Update template body.
* `PUT /api/templates/{id}/default` `[write]` — Set template as default.
* `DELETE /api/templates/{id}` `[destructive]` — Delete template.

### Category 07: Media (`/api/media`)
* `GET /api/media` `[read]` — List uploaded media assets.
* `POST /api/media` `[write]` — Upload media file (multipart form).
* `DELETE /api/media/{id}` `[destructive]` — Delete media file.

### Category 08: Bounces (`/api/bounces`)
* `GET /api/bounces` `[read]` — List recorded bounce records.
* `DELETE /api/bounces/{id}` `[destructive]` — Delete bounce record.
* `POST /api/bounces/scan` `[write]` — Trigger manual scan of POP/IMAP bounce mailboxes.

### Category 09: Import (`/api/import/subscribers`)
* `POST /api/import/subscribers` `[write]` — Bulk CSV subscriber import.
* `GET /api/import/subscribers/status` `[read]` — Check progress of active import job.
* `DELETE /api/import/subscribers` `[destructive]` — Abort import job.

### Category 10: Admin & Users (`/api/users`)
* `GET /api/users` `[read]` — List administrative and API users.
* `POST /api/users` `[write]` — Create new user / token.
* `DELETE /api/users/{id}` `[destructive]` — Revoke user / token.

### Category 11: Logs (`/api/logs`)
* `GET /api/logs` `[read]` — Fetch system application logs.

### Category 12: Maintenance (`/api/maintenance`)
* `POST /api/maintenance` `[destructive]` — Trigger database vacuum and orphan cleanup.

### Category 13: Dashboard & Analytics (`/api/dashboard/counts`)
* `GET /api/dashboard/counts` `[read]` — Total counts of subscribers, lists, campaigns, messages.
* `GET /api/dashboard/charts` `[read]` — Aggregate view and click timeline charts.

### Category 14: System Health (`/api/health`)
* `GET /api/health` `[read]` — Check server ping and database connectivity.

---

## 5. Antigravity MCP Integration

Configured in `~/.gemini/antigravity/mcp_config.json`:

```json
{
  "mcpServers": {
    "ListmonkMCP": {
      "$typeName": "exa.cascade_plugins_pb.CascadePluginCommandTemplate",
      "command": "npx",
      "args": ["-y", "@kieksme/listmonk-mcp", "--stdio"],
      "env": {
        "LISTMONK_URL": "https://listmonk.appmarkit.com",
        "LISTMONK_API_USER": "mcp_agent",
        "LISTMONK_API_TOKEN": "baegMDs1zquoJg93e3YwTVsotthYRtA3B6wB2kwmVuWMPIpq"
      }
    }
  }
}
```

Whenever executing email or newsletter workflows, AI agents must load this skill first to ensure zero quota exhaustion and 100% relational integrity.
