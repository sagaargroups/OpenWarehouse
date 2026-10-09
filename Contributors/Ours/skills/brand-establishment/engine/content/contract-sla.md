# Service Level Agreement (SLA) — Content Module

> **Module Version:** `v1.0`  
> **Compatible Formats:** `a4-letterhead`  
> **Document Type:** Service performance guarantees and support commitments

---

## Header

**SERVICE LEVEL AGREEMENT**  
Appendix to Master Services Agreement dated {{MSA_DATE}}

---

## Section 1: Overview

This Service Level Agreement ("SLA") defines the performance standards, uptime commitments, support tiers, and remedies that **{{BRAND_NAME}}** ("Provider") guarantees to **{{CLIENT_NAME}}** ("Client") for the services described below.

| Field | Value |
|---|---|
| **Service** | {{SERVICE_NAME}} |
| **SLA Effective Date** | {{SLA_DATE}} |
| **Review Frequency** | {{REVIEW_FREQUENCY}} |

---

## Section 2: Service Availability

| Metric | Target |
|---|---|
| **Monthly Uptime** | {{UPTIME_TARGET}}% |
| **Scheduled Maintenance Window** | {{MAINTENANCE_WINDOW}} |
| **Planned Downtime Notice** | {{DOWNTIME_NOTICE}} advance |

### Uptime Calculation
```
Uptime % = ((Total Minutes - Downtime Minutes) / Total Minutes) × 100
```

Exclusions from downtime calculation:
- Scheduled maintenance within the declared window
- Force majeure events
- Client-caused outages (e.g., DNS changes, credential revocation)
- Third-party service failures beyond Provider's control

---

## Section 3: Support Tiers

| Priority | Description | Response Time | Resolution Target |
|---|---|---|---|
| **P1 — Critical** | Service completely unavailable | {{P1_RESPONSE}} | {{P1_RESOLUTION}} |
| **P2 — High** | Major feature impaired, workaround exists | {{P2_RESPONSE}} | {{P2_RESOLUTION}} |
| **P3 — Medium** | Minor feature issue, no business impact | {{P3_RESPONSE}} | {{P3_RESOLUTION}} |
| **P4 — Low** | Cosmetic issue, enhancement request | {{P4_RESPONSE}} | {{P4_RESOLUTION}} |

### Support Channels
| Channel | Availability | Contact |
|---|---|---|
| Email | {{EMAIL_HOURS}} | {{SUPPORT_EMAIL}} |
| Phone / WhatsApp | {{PHONE_HOURS}} | {{SUPPORT_PHONE}} |
| Ticketing System | 24/7 | {{TICKET_URL}} |

---

## Section 4: Performance Metrics

| Metric | Target | Measurement |
|---|---|---|
| Page Load Time | < {{PAGE_LOAD_TARGET}} | Lighthouse / WebPageTest |
| API Response Time | < {{API_RESPONSE_TARGET}} | Server logs |
| Error Rate | < {{ERROR_RATE_TARGET}}% | Application monitoring |
| Core Web Vitals (LCP) | < {{LCP_TARGET}} | Google Search Console |

---

## Section 5: Service Credits (Remedies)

If Provider fails to meet the Monthly Uptime target:

| Monthly Uptime | Service Credit |
|---|---|
| {{UPTIME_TARGET}}% – {{TIER_1_FLOOR}}% | {{TIER_1_CREDIT}}% of monthly fee |
| {{TIER_1_FLOOR}}% – {{TIER_2_FLOOR}}% | {{TIER_2_CREDIT}}% of monthly fee |
| Below {{TIER_2_FLOOR}}% | {{TIER_3_CREDIT}}% of monthly fee |

- **Maximum credit:** {{MAX_CREDIT}}% of monthly fee per incident
- **Credit request:** Client must submit a claim within {{CREDIT_WINDOW}} of the incident
- **Credits apply** to future invoices only; no cash refunds

---

## Section 6: Reporting

Provider shall deliver:

- **Monthly SLA Report:** Uptime statistics, incident log, resolution times
- **Quarterly Review:** Performance trends, improvement recommendations
- **Incident Reports:** Root cause analysis for any P1/P2 incident within {{RCA_DEADLINE}}

---

## Section 7: Escalation Path

| Level | Contact | Triggered When |
|---|---|---|
| Level 1 | {{L1_CONTACT}} | Initial support request |
| Level 2 | {{L2_CONTACT}} | No resolution within SLA response time |
| Level 3 | {{L3_CONTACT}} | P1 incident > {{L3_THRESHOLD}} without resolution |

---

## Signatures

| | Provider | Client |
|---|---|---|
| **Name** | _________________________ | _________________________ |
| **Title** | _________________________ | _________________________ |
| **Date** | _________________________ | _________________________ |

---

## Variables Required

| Variable | Description |
|---|---|
| `{{BRAND_NAME}}` | Provider's brand name |
| `{{CLIENT_NAME}}` | Client's name |
| `{{SERVICE_NAME}}` | Name of the service covered |
| `{{UPTIME_TARGET}}` | Monthly uptime percentage (e.g., 99.9) |
| `{{MAINTENANCE_WINDOW}}` | Planned downtime window |
| `{{P1_RESPONSE}}` – `{{P4_RESPONSE}}` | Response time per priority |
| `{{P1_RESOLUTION}}` – `{{P4_RESOLUTION}}` | Resolution target per priority |
| `{{SUPPORT_EMAIL}}` | Support email |
| `{{JURISDICTION}}` | Governing law |
