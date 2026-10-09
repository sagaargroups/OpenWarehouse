# Email HTML — Inline-CSS Format Shell

> **Format Version:** `v1.0`  
> **Output:** HTML with inline styles (email-client safe)  
> **Compatible Content:** Email signatures, branded email bodies, outbound communications

---

## Constraints

- **No external CSS** — all styles must be inline
- **No JavaScript** — email clients strip it
- **Table-based layout** — for maximum compatibility
- **Max width:** 600px (email best practice)
- **Font fallback:** Always include system font stack

---

## Email Signature Layout

```html
<table cellpadding="0" cellspacing="0" border="0" style="
  font-family: '{{BODY_FONT}}', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: {{PRIMARY_INK}};
  font-size: 14px;
  line-height: 20px;
  max-width: 400px;
">
  <tr>
    <td style="padding-bottom: 8px;">
      <!-- CONTENT_SLOT: Name and title -->
      <span style="font-weight: 700; font-size: 16px; letter-spacing: -0.2px; color: {{PRIMARY_INK}};">
        {{SENDER_NAME}}
      </span>
      <span style="color: {{MUTED_INK}}; font-size: 13px; margin-left: 8px;">
        · {{SENDER_TITLE}}
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-bottom: 12px; border-bottom: 1px solid {{RULE_COLOR}};">
      <span style="color: {{MUTED_INK}}; font-size: 13px; font-style: italic;">
        "{{TAGLINE}}"
      </span>
    </td>
  </tr>
  <tr>
    <td style="padding-top: 12px; font-size: 12px; color: {{MUTED_INK}};">
      <a href="https://{{DOMAIN}}" style="color: {{PRIMARY_INK}}; text-decoration: none; font-weight: 600;">
        {{DOMAIN}}
      </a>
      <span style="margin: 0 6px; color: {{RULE_COLOR}};">|</span>
      <a href="mailto:{{SUPPORT_EMAIL}}" style="color: {{PRIMARY_INK}}; text-decoration: none;">
        {{SUPPORT_EMAIL}}
      </a>
    </td>
  </tr>
</table>
```

---

## Branded Email Body Layout

```html
<table cellpadding="0" cellspacing="0" border="0" style="
  max-width: 600px;
  margin: 0 auto;
  font-family: '{{BODY_FONT}}', -apple-system, sans-serif;
  color: {{PRIMARY_INK}};
">
  <!-- Header -->
  <tr>
    <td style="padding: 24px 0; border-bottom: 1px solid {{RULE_COLOR}};">
      <span style="font-family: '{{DISPLAY_FONT}}', serif; font-weight: 700; font-size: 18px;">
        {{BRAND_NAME}}
      </span>
    </td>
  </tr>

  <!-- Body -->
  <tr>
    <td style="padding: 24px 0; font-size: 15px; line-height: 24px;">
      <!-- CONTENT_SLOT: Email body content injected here -->
    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td style="padding: 16px 0; border-top: 1px solid {{RULE_COLOR}}; font-size: 11px; color: {{MUTED_INK}};">
      {{BRAND_NAME}} — {{TAGLINE}}<br/>
      {{SUPPORT_EMAIL}} · {{DOMAIN}}
    </td>
  </tr>
</table>
```

---

## Variable Reference

| Variable | Description |
|---|---|
| `{{BRAND_NAME}}` | Full brand name |
| `{{DISPLAY_FONT}}` | Headline font (used in header) |
| `{{BODY_FONT}}` | Body font (used throughout) |
| `{{PRIMARY_INK}}` | Primary text color |
| `{{MUTED_INK}}` | Secondary text color |
| `{{RULE_COLOR}}` | Divider line color |
| `{{DOMAIN}}` | Web domain |
| `{{SUPPORT_EMAIL}}` | Contact email |
| `{{TAGLINE}}` | Brand tagline |
| `{{SENDER_NAME}}` | Person's name (for signature) |
| `{{SENDER_TITLE}}` | Person's title (for signature) |
