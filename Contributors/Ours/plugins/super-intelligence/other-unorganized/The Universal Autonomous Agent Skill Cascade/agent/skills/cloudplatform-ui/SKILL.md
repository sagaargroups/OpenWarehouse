---
name: CloudFetch Platform UI Standards
description: Design system standards for CloudFetch SaaS platform. Dark theme with orange accent, mobile-first responsive design, and component patterns.
version: 1.0.0
---

# CloudFetch Platform UI Standards

> Premium dark theme with orange gradient accents, mobile-first responsive patterns.

---

## 1. Color Palette

### 1.1 Dark Theme (Primary)

```css
/* Core Colors */
--background: #0a0a0a;         /* Deep black */
--background-card: #0f0f0f;    /* Card backgrounds */
--background-elevated: #1a1a1a; /* Elevated surfaces */

/* Primary Accent: Orange */
--primary: #F97316;            /* Orange-500 */
--primary-hover: #EA580C;      /* Orange-600 */
--primary-light: #FDBA74;      /* Orange-300 (for gradients) */

/* Text */
--foreground: #fafafa;         /* Primary text */
--muted-foreground: #a1a1aa;   /* Secondary text */

/* Borders */
--border: rgba(255, 255, 255, 0.08);
--border-hover: rgba(255, 255, 255, 0.12);

/* Status Colors */
--success: #22C55E;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;
```

### 1.2 Gradient Specifications

```css
/* Primary orange radial gradient (for backgrounds) */
.gradient-background {
  background: 
    radial-gradient(ellipse at top right, rgba(249, 115, 22, 0.15), transparent 50%),
    radial-gradient(ellipse at bottom left, rgba(249, 115, 22, 0.1), transparent 50%),
    #0a0a0a;
}

/* Button gradient */
.btn-primary-gradient {
  background: linear-gradient(135deg, #F97316 0%, #EA580C 100%);
}

/* Orange glow effect */
.glow-orange {
  box-shadow: 0 0 30px rgba(249, 115, 22, 0.3);
}
```

---

## 2. Typography

### 2.1 Font Family
```css
--font-sans: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### 2.2 Scale (Mobile-First)

| Token | Mobile | Desktop | Usage |
|-------|--------|---------|-------|
| `text-xs` | 11px | 12px | Badges, labels |
| `text-sm` | 13px | 14px | Body small |
| `text-base` | 15px | 16px | Body |
| `text-lg` | 17px | 18px | Subheadings |
| `text-xl` | 19px | 20px | Section titles |
| `text-2xl` | 22px | 24px | Page titles |
| `text-3xl` | 28px | 30px | Hero headings |

---

## 3. Spacing System

Base unit: **4px**

| Token | Value | Usage |
|-------|-------|-------|
| `space-0` | 0 | Reset |
| `space-1` | 4px | Tight inline |
| `space-2` | 8px | Default inline |
| `space-3` | 12px | Between elements |
| `space-4` | 16px | Section padding |
| `space-6` | 24px | Card padding |
| `space-8` | 32px | Section gaps |
| `space-12` | 48px | Major sections |

---

## 4. Responsive Breakpoints

### 4.1 Mobile-First Breakpoints

```css
/* Base: Mobile (< 640px) */
sm: 640px   /* Large phones */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### 4.2 Common Patterns

```tsx
// Mobile: stack, Desktop: row
<div className="flex flex-col md:flex-row gap-4">

// Mobile: 1 col, Tablet: 2 col, Desktop: 3 col
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Mobile: hidden, Desktop: visible
<div className="hidden lg:block">

// Mobile: full width, Desktop: constrained
<div className="w-full max-w-4xl mx-auto">
```

---

## 5. Component Standards

### 5.1 Buttons

```tsx
// Primary (orange gradient)
<Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25">
  Action
</Button>

// Loading state
<Button disabled={loading}>
  {loading ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Processing...
    </>
  ) : 'Submit'}
</Button>
```

### 5.2 Cards

```tsx
// Dark translucent card
<Card className="bg-white/5 dark:bg-black/20 border border-white/10 backdrop-blur-sm">
  <CardContent className="p-6">
    {/* Content */}
  </CardContent>
</Card>
```

### 5.3 Inputs

```tsx
<Input 
  className="bg-black/20 border-white/10 focus:border-orange-500 focus:ring-orange-500/20 placeholder:text-gray-500"
/>
```

### 5.4 Touch Targets

All interactive elements: **minimum 44x44px**

```tsx
// Example: Icon button with proper touch target
<Button size="icon" className="h-11 w-11">
  <IconComponent className="h-5 w-5" />
</Button>
```

---

## 6. Glassmorphism Effects

```css
/* Standard glass card */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
}

/* Elevated glass (modals, popovers) */
.glass-elevated {
  background: rgba(15, 15, 15, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

---

## 7. Sidebar Responsiveness

### 7.1 Desktop (≥1024px)
- Fixed sidebar, 280px width
- Always visible

### 7.2 Tablet (768px - 1023px)
- Collapsible sidebar
- Icon-only mode (64px width)
- Expand on hover

### 7.3 Mobile (<768px)
- Hidden by default
- Sheet/drawer from left
- Hamburger menu trigger
- Full-screen overlay when open

---

## 8. Animation Standards

### 8.1 Timing Functions

```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### 8.2 Durations

| Type | Duration | Usage |
|------|----------|-------|
| Micro | 100ms | Hover states |
| Short | 150ms | Button clicks |
| Medium | 200ms | Modals, popovers |
| Long | 300ms | Page transitions |

### 8.3 Common Animations

```css
/* Subtle fade in */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Orange glow pulse */
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
  50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.5); }
}
```

---

## 9. Dark Mode CSS Variables

Add to `globals.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --primary: 24.6 95% 53.1%;
    --primary-foreground: 0 0% 100%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --border: 0 0% 89.8%;
    --ring: 24.6 95% 53.1%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 5.9%;
    --card-foreground: 0 0% 98%;
    --primary: 24.6 95% 53.1%;
    --primary-foreground: 0 0% 100%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --border: 0 0% 14.9%;
    --ring: 24.6 95% 53.1%;
  }
}
```

---

## 10. API Response Standards

### 10.1 Success Response

```json
{
  "success": true,
  "data": { /* payload */ },
  "meta": {
    "timestamp": "ISO8601",
    "requestId": "uuid"
  }
}
```

### 10.2 Error Response

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human readable message",
    "details": []
  }
}
```

---

## Quick Reference

| Element | Dark Theme |
|---------|------------|
| Page background | `#0a0a0a` + orange gradient |
| Card background | `bg-white/5` or `#0f0f0f` |
| Primary button | Orange gradient with glow |
| Text primary | `#fafafa` |
| Text secondary | `#a1a1aa` |
| Border | `rgba(255,255,255,0.08)` |
| Orange accent | `#F97316` |
