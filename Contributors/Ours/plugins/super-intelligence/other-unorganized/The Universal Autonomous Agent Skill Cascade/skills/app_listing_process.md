# Immutable Connection Guide: Connecting Apps to CloudFetch

This guide details the exact steps for Developers and Platform Admins to create an "Immutable Connection" between an App (e.g., Nano Gen AI) and the Platform (CloudFetch).

## 1. The Core Architecture (How it Works)
The connection relies on two "Source of Truth" flows. Using both ensures the app is always in sync, even if one fails.

### Flow A: The "Golden Token" (Login Sync)
*   **Trigger**: User logs in.
*   **Direction**: Platform -> App (Pull).
*   **Mechanism**: OAuth 2.0 Authorization Code Flow.
*   **Data**: The Access Token (JWT) contains the *latest* `plan_id`, `status`, and `features`2.  **Submit for Listing**:
    *   **Action**: Developer fills out Marketplace details (Description, Screenshots, Logo).
    *   **Configuration**:
        *   **Redirect URIs**: Must be HTTPS.
        *   **Supports Embedding**: Toggle **ON** if you want your app to load in the sidebar (Iframe). If **OFF**, it will open in a new tab.
    *   **Submit**: Clicks "Submit for Review".
    *   **System**: App `status` changes to `pending_review`.
 entitlements.
*   **Action**: The App's **Callback Logic** MUST updates its local `users` table with this data immediately.
*   **Result**: Instant access to purchased features upon login.

### Flow B: The "Webhook Pulse" (Async Sync)
*   **Trigger**: User upgrades, downgrades, or cancels on the Platform (Stripe).
*   **Direction**: Platform -> App (Push).
*   **Mechanism**: Webhooks (`subscription.updated`).
*   **Data**: JSON payload with `plan_id`, `status`, and `pending_change` (for scheduled downgrades).
*   **Action**: The App's **Webhook Handler** MUST listen to this and update the local `users` table.
*   **Result**: Access is revoked or granted in real-time without user action.

---

## 2. Developer Responsibilities (The Code)

### Step A: The "Link Table" Schema
You must modify your User schema to store CloudFetch data. Do NOT depend on live API calls for every request. Store it locally.
```typescript
{
  id: "cf_user_123",        // PRIMARY KEY (Use CloudFetch ID)
  email: "...",
  currentPlan: "pro",       // Updated by Login & Webhook
  subscriptionStatus: "active",
  features: ["4k", "ai"],   // JSON Array
  downgradeAt: Date         // For scheduled changes
}
```

### Step B: The "Seamless" Login Flow
Make your app feel like a first-party Google app.
1.  **Login Page**: Do not show a login form. Auto-redirect to CloudFetch:
    ```javascript
    window.location.href = `${CLOUDFETCH_URL}/oauth/authorize?client_id=...`;
    ```
2.  **Callback**: Exchange code -> Get Token -> **UPSERT USER** -> Set Session.

### Step C: The Webhook Listener
Create an endpoint (e.g., `/api/webhooks/cloudfetch`) to receive updates.
*   **Security**: Verify the signature (Todo).
*   **Logic**:
    *   If `subscription.updated` -> Update `currentPlan` & `features`.
    *   If `downgrade_at` is present -> Store it. UI can show "Plan ends on X".

---

## 3. Platform Admin Responsibilities (The Setup)

### Step A: App Registration
1.  Go to **Developer Console** -> **New App**.
2.  **Redirect URIs**: Enter the **EXACT** callback URL.
    *   Example: `http://localhost:3001/api/auth/callback`
    *   *Note: Spaces or mismatches will block the login (Security).*
3.  **Webhook URL**: Enter the app's listener URL.
    *   Example: `http://localhost:3001/api/webhooks/cloudfetch`

### Step B: Plan Configuration
1.  Create Plans in the Platform (linked to Stripe Prices).
2.  Define **Entitlements** (JSON Features) for each plan.
    *   *Example: Pro Plan = `["4k_export", "unlimited_storage"]`*
3.  These entitlements are what get packed into the **Golden Token**.

### Step C: Embedded App Configuration (If Applicable)
If the developer has toggled "Supports Embedding", the Admin must perform additional checks:
1.  **Iframe Compatibility**:
    *   Admin opens the App in the sidebar.
    *   Verifies no "Refused to connect" or "X-Frame-Options" errors.
2.  **Auth Experience**:
    *   Verifies the app **auto-logs in** (no login screen inside the iframe).
    *   *Failure to auto-login is an immediate rejection for Embedded Apps.*
3.  **Visual Fit**:
    *   Verifies the app looks good in the `w-64` (collapsed) or full-width sidebar view.
    *   Recommends "Responsive Design" adjustments if text is cut off.

---

## 4. API Ecosystem & FAQ

### Q1: Why are there multiple APIs?
You might see `api/check-user` (Legacy) and `api/oauth/token` (Current).
*   **Use `api/oauth/token`**: This is the modern standard. It returns a signed, tamper-proof JWT ("Golden Token") that provides Identity + Subscription in one shot.
*   **Use `api/v1/user/me`**: Call this with your Access Token to re-validate a user's status at any time without re-logging them in.
*   **Ignore `api/check-user`**: This was a primitive method. It is slower and less secure.

### Q2: How do we handle "Dual" Auth?
You don't. You rely 100% on the Platform.
*   **App Side**: Your "Session" is just a cached copy of the Platform's truth.
*   **Logout**: When a user logs out of the App, clear the local cookie. Ideally, also redirect them to `${CLOUDFETCH_URL}/sign-out` if you want a global logout.

### Q3: What if the Webhook fails?
The Golden Token (Flow A) acts as a self-healing mechanism. When the user logs in next time, their data is freshly pulled and corrected.
