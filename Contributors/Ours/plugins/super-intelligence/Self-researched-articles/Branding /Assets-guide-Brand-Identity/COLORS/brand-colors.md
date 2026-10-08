# CloudFetch Platform — Complete Color System

> Updated to reflect full Light + Dark mode support. No color effects in light mode — pure white surfaces.

---

## Light Mode Colors

| Role | HEX | Tailwind | Usage |
|---|---|---|---|
| **Background (Page)** | `#F8FAFC` | `bg-slate-50` | Main content area background |
| **Background (Sidebar/Header)** | `#FFFFFF` | `bg-white` | Sidebar, header, cards — clean white |
| **Card / Surface** | `#FFFFFF` | `bg-white` | Elevated cards, panels |
| **Border** | `#E2E8F0` | `border-slate-200` | All dividers, card borders |
| **Primary Text** | `#0F172A` | `text-slate-900` | Headlines, body copy |
| **Secondary Text** | `#475569` | `text-slate-600` | Subtext, labels |
| **Muted Text** | `#94A3B8` | `text-slate-400` | Placeholders, timestamps |
| **Hover Background** | `#F1F5F9` | `bg-slate-100` | Item hover states |
| **Active Background** | `#F1F5F9` | `bg-slate-100` | Active sidebar/menu items |

> **RULE:** No gradient blurs, no orange tint, no colored backgrounds in light mode. Pure white with slate tones only.

---

## Dark Mode Colors

| Role | HEX | Tailwind | Usage |
|---|---|---|---|
| **Background (Page)** | `#0B0D14` | `dark:bg-[#0B0D14]` | Root page background |
| **Background (Sidebar/Header)** | `#0B0D14` | `dark:bg-[#0B0D14]` | Sidebar, header |
| **Card / Surface** | `#0F0F0F` | N/A | Standard card backgrounds |
| **Elevated Surface** | `#1A1A1A` | N/A | Modals, popovers, dropdowns |
| **Border** | `rgba(255,255,255,0.1)` | `dark:border-white/10` | All dividers |
| **Primary Text** | `#FFFFFF` | `dark:text-white` | Headlines, body copy |
| **Secondary Text** | `#94A3B8` | `dark:text-slate-400` | Subtext, labels |
| **Muted Text** | `#64748B` | `dark:text-slate-500` | Placeholders |
| **Hover Background** | `rgba(255,255,255,0.05)` | `dark:hover:bg-white/5` | Item hover states |
| **Active Background** | `rgba(255,255,255,0.1)` | `dark:bg-white/10` | Active sidebar/menu items |

> Dark mode retains subtle gradient blur effects (orange/indigo) for premium feel.

---

## Accent (Brand) Color — Orange

| Role | HEX | Tailwind | Usage |
|---|---|---|---|
| **Primary Accent** | `#F97316` | `bg-orange-500` | Buttons, badges, active icons |
| **Primary Accent (Light mode)** | `#EA580C` | `text-orange-600` | Active icon tint in light mode |
| **Primary Hover** | `#EA580C` | `bg-orange-600` | Button hover |
| **Primary Light** | `#FDBA74` | `bg-orange-300` | Subtle gradients (dark mode only) |

---

## Semantic Status Colors

| Role | HEX | Tailwind | Usage |
|---|---|---|---|
| **Success** | `#22C55E` | `text-green-500` | Completed, active, positive |
| **Warning** | `#F59E0B` | `text-amber-500` | Pending, caution |
| **Error** | `#EF4444` | `text-red-500` | Deletion, failure |
| **Info** | `#3B82F6` | `text-blue-500` | Informational, links |

---

## Gradients & Effects (Dark Mode Only)

- **Sidebar Blur (top-right):** `bg-orange-500/5`, `blur-[50px]` — hidden in light mode via `hidden dark:block`
- **Sidebar Blur (bottom-left):** `bg-indigo-500/5`, `blur-[50px]` — hidden in light mode
- **Primary Button Gradient:** `linear-gradient(135deg, #F97316, #EA580C)` — used in both modes
- **Glass Card (Dark only):** `rgba(255,255,255,0.05)` + `backdrop-filter: blur(10px)`

---

## Color Formats Reference

| Color | HEX | RGB | HSL |
|---|---|---|---|
| Orange 500 | `#F97316` | `249, 115, 22` | `25, 95%, 53%` |
| Orange 600 | `#EA580C` | `234, 88, 12` | `21, 90%, 48%` |
| Slate 50 | `#F8FAFC` | `248, 250, 252` | `210, 40%, 98%` |
| Slate 100 | `#F1F5F9` | `241, 245, 249` | `210, 40%, 96%` |
| Slate 200 | `#E2E8F0` | `226, 232, 240` | `210, 31%, 91%` |
| Slate 400 | `#94A3B8` | `148, 163, 184` | `215, 20%, 65%` |
| Slate 600 | `#475569` | `71, 85, 105` | `215, 19%, 35%` |
| Slate 900 | `#0F172A` | `15, 23, 42` | `222, 47%, 11%` |
| Dark BG | `#0B0D14` | `11, 13, 20` | `227, 29%, 6%` |
