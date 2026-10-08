# The Developer Journey: From Onboarding to Marketplace

This document outlines the complete lifecycle of a Developer on the CloudFetch Platform. It details the interaction points, "waiting rooms," and Admin approval steps required to list an application.

---

## 🏗 Phase 1: Becoming a Developer (Onboarding)

Before creating apps, a user must be verified as a trusted Developer.

1.  **Request Access**:
    *   **Action**: User navigates to `/developer`.
    *   **Form**: Submits Company Name, Website, and Use Case.
    *   **System**: Creates a `developer_onboarding_request` (Status: `pending`).
    *   **UI**: User is redirected to a "Waiting Room" page (`/developer/onboarding`). Access to the Console is blocked.

2.  **Admin Review (The Gatekeeper)**:
    *   **Action**: Admin reviews the request in the Admin Panel.
    *   **Decision**:
        *   **Approve**: User role updated to `developer`. Request status -> `approved`.
        *   **Reject**: User remains `member`. Request status -> `rejected`.

3.  **Result**:
    *   Once approved, the user gains access to the **Developer Console** (`/developer/applications`).

---

## 🛠 Phase 2: Building the Application

Once verified, the Developer creates the technical "shell" of their app.

1.  **Create App**:
    *   **Action**: Developer clicks "New App" in Console.
    *   **Input**: App Name, Homepage URL, Callback URL, Webhook URL.
    *   **System**: Generates `Client ID` and `Client Secret`.
    *   **Status**: App created with `admin_status: approved` (default for creation) but `status: unlisted` (not in marketplace).

2.  **Technical Integration (The Code)**:
    *   Developer downloads the **Integration Kit**.
    *   **Decision Point**: Choose your Integration Mode.
    
    #### Track A: Standalone Web App (The Standard)
    *   **User Experience**: Opens in a new browser tab.
    *   **Auth**: Standard OAuth redirect + Cookies.
    *   **Pros**: Easiest to build. No iframe restrictions.
    
    #### Track B: Embedded App (The Premium Experience)
    *   **User Experience**: Opens directly in the Platform Sidebar (Iframe).
    *   **Auth**: Token-based (URL param -> LocalStorage). *Requires AuthProvider update.*
    *   **Pros**: Higher user engagement. seamless feel.
    *   **Requirements**: Must handle `?token=...` and remove X-Frame headers.

    *   **Test**: Uses `localhost` to verify login and data syncing.

---

## 🛒 Phase 3: Product Listing & Monetization

Now the Developer turns their "App" into a sellable "Product".

1.  **Create Plans**:
    *   Developer defines "Plans" (e.g., Free, Pro $10/mo) in the Console.
    *   **Entitlements**: Maps features (e.g., `["4k_video", "ai_model_v2"]`) to each plan.

2.  **Submit for Listing**:
    *   **Action**: Developer fills out Marketplace details (Description, Screenshots, Logo).
    *   **Submit**: Clicks "Submit for Review".
    *   **System**: App `status` changes to `pending_review`.

3.  **Marketplace Review (The Second Gate)**:
    *   **Action**: Admin tests the App (Log in, check entitlements, verify quality).
    *   **Decision**:
        *   **Approve**: App `status` -> `listed`. It now appears in the public Marketplace.
        *   **Reject**: Feedback sent. Status -> `draft`.

---

## 🚀 Phase 4: Live Operations

1.  **User Acquisition**:
    *   Users find the App on CloudFetch Marketplace.
    *   **Click "Try"**: Redirects to App -> Auto-Login (Zero Friction).
    *   **Subscribe**: User pays CloudFetch -> CloudFetch updates App via Webhook.

2.  **Payouts**:
    *   CloudFetch collects payments.
    *   Developer sees earnings in `/developer/monetization`.
    *   Payouts processed monthly to Developer's connected bank account.

---

## Summary of Statuses

| Entity | Status | Meaning |
| :--- | :--- | :--- |
| **User** | `member` | Standard user. Cannot access Developer Console. |
| **User** | `developer` | Verified partner. Can build Apps. |
| **Onboarding** | `pending` | Waiting for Admin approval. |
| **App** | `unlisted` | Private. Only visible to Developer and Team. |
| **App** | `pending_review` | Submitted to Admin for Marketplace listing. |
| **App** | `listed` | Live in Marketplace. Available to public. |
