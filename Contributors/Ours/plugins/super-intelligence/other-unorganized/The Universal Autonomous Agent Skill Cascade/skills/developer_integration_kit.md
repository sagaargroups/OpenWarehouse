# Developer Integration Kit V2.0: The Universal Connection

> **Welcome, Developer.**
> This is your definitive guide to integrating any application with the CloudFetch Platform. Whether you are building from scratch or connecting an existing SaaS, this kit provides the **Universal Patterns** to ensure your app works seamlessly in both *Standalone* (Browser Tab) and *Embedded* (Sidebar Iframe) modes.

---

## 📚 Table of Contents
1.  **Architecture & Vision** (How it works)
2.  **Strategy: New vs. Existing Codebase** (Where to put the code)
3.  **Phase 1: Database Schema** (The "Link Table")
4.  **Phase 2: Universal Authentication** (The "Golden Token")
5.  **Phase 3: Embedded App Integration** (The "Hydrator")
6.  **Phase 4: Webhooks** (The "Pulse")
7.  **Future: The CloudFetch SDK** (What's coming)

---

## 1. Architecture & Vision

We believe in a **"Source of Truth"** architecture. Your app should never guess a user's status; it should be told by the Platform.

### The "Golden Token" Concept
When a user accesses your app (via Login Button or Sidebar), CloudFetch hands you a secure JWT called the **Golden Token**. This token contains EVERYTHING you need:
*   **Identity**: `user_id`, `email`, `name`
*   **Subscription**: `plan_id` (e.g., 'pro'), `status` (e.g., 'active')
*   **Entitlements**: `features` (e.g., `['4k_export', 'ai_v2']`)

**Your Job:** Receive this token, validate it, and UPSERT it into your local database. That's it.

---

## 2. Strategy: New vs. Existing Codebase

### Scenario A: Brand New Project
*   **Action**: Use this kit as your simplified starter.
*   **Structure**: Copy the folders exactly as shown (`src/lib/auth`, `src/app/api/...`).

### Scenario B: Existing Codebase (The "Sidecar" Method)
*   **Challenge**: You already have `users` table and `auth` logic.
*   **Solution**: Do NOT replace your auth. **Augment it.**
    1.  **Database**: Add `cf_user_id` and `plan_data` columns to your existing `users` table.
    2.  **Auth**: Keep your existing login. Add `api/auth/callback/cloudfetch` as a parallel login route.
    3.  **Isolation**: Put all CloudFetch logic in a specific folder (e.g., `src/lib/cloudfetch/`) to avoid polluting your core logic.

---

## 3. Phase 1: Database Schema ("The Link Table")

You need a place to store the data we send you.

#### Recommended Schema (Drizzle ORM)
If you are using Prisma or TypeORM, adapt this structure. The key is to have a `json` column for `features` and a string for `current_plan`.

**File:** `src/db/schema.ts`

```typescript
import { pgTable, text, varchar, timestamp, json, boolean } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  // --- CORE IDENTITY ---
  id: text('id').primaryKey(),          // Your ID (or map to cf_user_id)
  email: varchar('email', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }),

  // --- CLOUDFETCH INTEGRATION ---
  cfUserId: varchar('cf_user_id', { length: 255 }).unique(), // The Link ("sub" in token)
  
  // --- SUBSCRIPTION DATA (Updated via Token/Webhook) ---
  planId: varchar('plan_id', { length: 50 }),           // subscription.plan_id
  planStatus: varchar('plan_status', { length: 20 }),   // subscription.status
  startDate: timestamp('start_date'),                   // subscription.start_date (optional)
  endDate: timestamp('end_date'),                       // subscription.current_period_end
  
  // --- ENTITLEMENTS ---
  features: json('features'), // entitlements.features (e.g. ["4k", "ai"])
  
  updatedAt: timestamp('updated_at').defaultNow(),
});
```

---

## 4. Phase 2: Universal Authentication

This Logic handles the OAuth handshake. It works for **Standard Web Apps**.

### 4.1 The Redirect (Login Page)
Don't show a login form. Redirect immediately.

**File:** `src/app/login/page.tsx`
```tsx
'use client';
import { useEffect } from 'react';

export default function LoginPage() {
  useEffect(() => {
    // Redirect to Platform OAuth
    const AUTH_URL = `${process.env.NEXT_PUBLIC_CLOUDFETCH_URL}/oauth/authorize`;
    const CLIENT_ID = process.env.NEXT_PUBLIC_CLOUDFETCH_CLIENT_ID;
    const REDIRECT_URI = `${window.location.origin}/api/auth/callback`; // Auto-detect domain
    
    window.location.href = `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`;
  }, []);

  return <div>Redirecting to CloudFetch...</div>;
}

### 4.2 The Callback (Token Exchange)
This endpoint### 5.1 (Alternative) The Universal Profile Card (Top Header)
If your app uses a Top Navigation Bar, use this "Profile Card" component. It provides a premium, modal-like experience.

**File:** `src/components/header-account-nav.tsx`

```tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { LogOut, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function HeaderAccountNav({ user }: { user: any }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const CLOUDFETCH_URL = process.env.NEXT_PUBLIC_CLOUDFETCH_URL || 'https://cloudfetch.tech';
    const initial = (user.name || user.email || 'U')[0].toUpperCase();

    return (
            </div>

            {/* Sub Items */}
            {(isProfileOpen || isCollapsed) && (
                <div className={cn("space-y-1", !isCollapsed && "border-l border-white/10 ml-[11px] pl-3")}>
                    {profileItems.map((item) => (
                        <Link key={item.label} href={item.href} target={item.external ? "_blank" : undefined}>
                            <Button
                                variant='ghost'
                                className={getItemClasses(false)} // Always inactive as they are external links
                            >
                                <item.icon className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                                {!isCollapsed && item.label}
                            </Button>
                        </Link>
                    ))}
                     <Button
                        variant='ghost'
                        className={getItemClasses(false)}
                        onClick={() => window.location.href = '/api/auth/logout'} // Local Logout
                    >
                        <LogOut className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                        {!isCollapsed && "Sign Out"}
                    </Button>
                </div>
            )}
        </TooltipProvider>
    );
}
```
This endpoint verifies the code, gets the token, and updates your DB.

**File:** `src/app/api/auth/callback/route.ts`
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { decodeJwt } from 'jose';

export async function GET(req: NextRequest) {
    const code = req.nextUrl.searchParams.get('code');
    if (!code) return NextResponse.redirect('/login?error=no_code');

    try {
        // A. Exchange Code for Token
        const tokenRes = await fetch(`${process.env.CLOUDFETCH_URL}/api/v1/oauth/token`, {
            method: 'POST',
            body: JSON.stringify({
                client_id: process.env.CLOUDFETCH_CLIENT_ID,
                client_secret: process.env.CLOUDFETCH_CLIENT_SECRET,
                code,
                grant_type: 'authorization_code'
            })
        });

        const { access_token } = await tokenRes.json();
        
        // B. Decode Golden Token
        const payload = decodeJwt(access_token);
        // Payload Structure:
        // {
        //   "sub": "user_cf_123",            <-- Use this as stable ID
        //   "user": { 
        //     "email": "...", 
        //     "name": "..." 
        //   },
        //   "subscription": {
        //     "plan_id": "pro-monthly",
        //     "status": "active",
        //     "current_period_end": 1700000000
        //   },
        //   "entitlements": {
        //     "features": ["4k_export", "ai_magic"]
        //   }
        // }

        // C. Update Database (UPSERT)
        // await db.insert(users).values({
        //     cfUserId: payload.sub,
        //     email: payload.user.email,
        //     planId: payload.subscription.plan_id,
        //     planStatus: payload.subscription.status,
        //     endDate: new Date(payload.subscription.current_period_end * 1000),
        //     features: payload.entitlements.features
        // }).onConflictDoUpdate(...)

        // D. Create Session & Redirect
        // ... (Set your app's cookie here) ...
        
        return NextResponse.redirect('/');
        
    } catch (err) {
        console.error("Auth Failed", err);
        return NextResponse.redirect('/login?error=server_error');
    }
}
```

---

## 5. Phase 3: Embedded App Integration (Iframe Support)

If your app runs in the sidebar, **Cookies will fail**. You must use the "Hydration" pattern.

### 5.1 Client-Side Hydrator
Place this in your `layout.tsx` or root provider. It listens for `?token=...` in the URL.

```tsx
// src/components/cloudfetch-hydrator.tsx
'use client';
import { useEffect } from 'react';

export function CloudFetchHydrator({ onLogin }: { onLogin: (user: any) => void }) {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        if (token) {
            // 1. Save to LocalStorage (Persist across reloads in iframe)
            localStorage.setItem('cf_token', token);
            
            // 2. Clear URL (Cosmetic)
            window.history.replaceState({}, '', window.location.pathname);
            
            // 3. Trigger Login in your App
            // decodeJwt(token) -> onLogin(user_data)
        }
    }, []);
    return null; // Headless component
}
```

### 5.2 Server Action Compatibility (Next.js)
Server Actions don't see `localStorage`. You must pass the token manually.

**Bad (Cookie Only):**
```typescript
export async function myAction() {
   const session = cookies().get('session'); // FAILS in Iframe
}
```

**Good (Universal):**
```typescript
export async function myAction(data: any, token?: string) {
   // 1. Try Cookie (Standalone Mode)
   let session = cookies().get('session');
   
   // 2. Try Manual Token (Embedded Mode)
   if (!session && token) {
      session = await verifyToken(token); // Verify signature manually
   }
   
   if (!session) throw new Error("Unauthorized");
}
```

---

## 6. Phase 4: Webhooks (The Pulse)

When a user upgrades their plan on CloudFetch, your app needs to know *instantly*.

**Endpoint:** `POST /api/webhooks/cloudfetch`
**Payload:**
```json
{
  "event": "subscription.updated",
  "data": {
    "user_id": "cf_123",
    "plan_id": "pro",
    "status": "active",
    "features": ["4k", "ai"]
  }
}
```

**Logic:**
1.  Verify Signature (HMAC).
2.  Find User by `cf_123`.
3.  Update `currentPlan` and `entitlements`.
4.  Respond `200 OK`.

---

## 7. Future: The CloudFetch JS SDK

We are building a comprehensive SDK to replace this manual wiring.

**Vision:** `npm install @cloudfetch/sdk`

```typescript
// Future Code Example
import { CloudFetch } from '@cloudfetch/sdk';

const cf = new CloudFetch({ apiKey: '...' });

// 1. Middleware for Auth
export const middleware = cf.nextjs.middleware();

// 2. Unified Session (Works in Tab & Iframe automatically)
const session = await cf.auth.getSession(); 

// 3. Feature glags
if (session.can('4k_export')) { ... }
```

### Low Code / No Code
We plan to release a **Widget Kit** that automatically renders UI elements based on entitlements (e.g., a "Upgrade to Pro" lock screen that handles the checkout flow automatically).

---

> **Ready to Build?**
> Start by running `npm install jose drizzle-orm` and copying the Database Schema in Phase 1.
