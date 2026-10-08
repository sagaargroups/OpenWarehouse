# Building Embedded Apps for CloudFetch

This guide explains how to build developer applications that can be embedded directly within the CloudFetch dashboard using an iframe ("Option C"), rather than opening in a new tab ("Option B").

## Overview

When an app is "Embedded", it loads inside the CloudFetch layout. This provides a seamless user experience but introduces specific technical constraints, primarily regarding **Authentication** and **Cookies**.

### The Challenge: Third-Party Cookies
When your app is loaded inside an iframe on `cloudfetch.com`, browsers treat your app (`yourapp.com`) as a "Third Party". Modern browsers (Safari, Firefox, Chrome Incognito) **block third-party cookies** by default.

This means standard session-based auth (where you set a `session_id` cookie) **will not work** reliably. The cookie will be dropped, and the user will appear unauthenticated.

## The Solution: Token-Based Authentication

To support embedding, your app must allow authentication via a **Token** passed in the URL or Header, instead of relying solely on cookies.

### Protocol Flow

1.  **Launch**: CloudFetch opens your app in an iframe with an auth token in the URL query parameters.
    ```
    https://yourapp.com/dashboard?auth_token=eyJhbGciOi...
    ```

2.  **Storage**: Your app should check for this `auth_token` on load.
    *   **Do NOT** try to set a cookie.
    *   **DO** save it in `localStorage` or `sessionStorage` (which works in iframes).

3.  **API Requests**: For every backend request your frontend makes, attach the token in the `Authorization` header.
    ```javascript
    fetch('/api/data', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    ```

## Developer Checklist

To mark your app as "Embeddable" (`supports_embedding = true`), ensure the following:

### 1. Accept Auth Token
Check for `auth_token` (or `token`) in the URL query string on your landing page.

```javascript
// Example (React)
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get('auth_token');
  if (token) {
    localStorage.setItem('app_token', token);
    // Optional: Remove token from URL to clean it up
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}, []);
```

### 2. Use Header-Based Auth (or Manual Passing)
Ensure your backend accepts Bearer tokens in addition to (or instead of) cookies.

**For Next.js Server Actions:**
Since headers cannot be easily injected into Server Actions from the client, we recommend passing the token as an argument.

1.  **Client Component**: Retrieve token from `localStorage` and pass it.
    ```tsx
    const token = localStorage.getItem('auth_token');
    await myServerAction({ ...data, token });
    ```
2.  **Server Action**: Verify the token if no session cookie is present.
    ```typescript
    // actions.ts
    export async function myAction(data) {
       let session = await getSession();
       if (!session && data.token) {
           session = await verifyToken(data.token);
       }
       // ...
    }
    ```

### 3. Allow Iframe Embedding
Ensure your server creates response headers that allow embedding on CloudFetch.
*   **Remove** `X-Frame-Options: DENY` or `SAMEORIGIN`.
*   **Configure** `Content-Security-Policy`:
    ```
    frame-ancestors 'self' https://cloudfetch.com https://*.cloudfetch.com;
    ```
    *(Replace with your actual CloudFetch domain)*

## Configuration

In your App Settings on the Developer Console:
1.  Go to **Sidebar Configuration**.
2.  Toggle **"Supports Embedding"** to ON.
3.  Ensure your app URL is HTTPS.

If "Supports Embedding" is OFF, your app will always open in a new tab (Option B) to ensure compatibility.
