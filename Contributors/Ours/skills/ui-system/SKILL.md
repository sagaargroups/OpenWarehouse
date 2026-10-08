# 🎨 Universal UI System — Agent Skill

> This skill defines EVERY visual, interaction, and navigation parameter for building consistent, premium UI. Part 1 is the parameter registry with defaults. Part 2 instructs the agent to interview the user and generate a per-app `user-app-skill/SKILL.md`.

---

## PART 1 — PARAMETER REGISTRY

Every parameter below has a default. Override per-app in `user-app-skill/SKILL.md`.

---

### 1. COLOR SYSTEM

```yaml
# Brand
primary: "orange-500"              # Main action color
primary-hover: "orange-600"        # Hover state
primary-foreground: "white"        # Text on primary
secondary: "slate-100"             # Secondary surfaces
secondary-hover: "slate-200"
accent: "violet-500"               # Accent highlights
accent-hover: "violet-600"
destructive: "red-500"
destructive-hover: "red-600"

# Semantic
success: "emerald-500"
success-bg: "emerald-50"
warning: "amber-500"
warning-bg: "amber-50"
info: "blue-500"
info-bg: "blue-50"
error: "red-500"
error-bg: "red-50"

# Surfaces
background: "white"
foreground: "slate-900"
muted: "slate-100"
muted-foreground: "slate-500"
card-bg: "white"
card-border: "slate-200"
popover-bg: "white"
popover-border: "slate-200"

# Gradients
gradient-primary: "from-orange-500 to-red-500"
gradient-accent: "from-violet-500 to-indigo-500"
gradient-surface: "from-slate-50 to-white"

# Glass (Glassmorphism)
glass-bg: "white/80"
glass-border: "white/20"
glass-blur: "backdrop-blur-xl"
```

### 2. DARK MODE

```yaml
mode-default: "system"              # dark | light | system
toggle-strategy: "class-based"      # class-based | media-query
dark-bg: "#0B0D14"
dark-card: "white/5"
dark-card-hover: "white/10"
dark-border: "white/10"
dark-foreground: "gray-100"
dark-muted: "slate-400"
dark-input-bg: "white/5"
dark-popover: "#1a1d27"
dark-sidebar-bg: "#0B0D14"
dark-selection: "orange-500/20"
```

### 3. TYPOGRAPHY

```yaml
font-sans: "Inter, system-ui, sans-serif"
font-mono: "JetBrains Mono, monospace"
font-display: "Inter"               # For hero headings

# Scale (size / weight / line-height / tracking)
h1: "text-3xl / font-bold / leading-tight / tracking-tight"
h2: "text-2xl / font-bold / leading-tight / tracking-tight"
h3: "text-xl / font-semibold / leading-snug / tracking-normal"
h4: "text-lg / font-semibold / leading-snug / tracking-normal"
h5: "text-base / font-semibold / leading-normal / tracking-normal"
h6: "text-sm / font-semibold / leading-normal / tracking-normal"
body: "text-sm / font-normal / leading-relaxed"
body-lg: "text-base / font-normal / leading-relaxed"
caption: "text-xs / font-medium / text-muted-foreground"
label: "text-xs / font-medium / uppercase tracking-wider / text-slate-500"
code: "text-sm / font-mono / bg-slate-100 dark:bg-white/10 / px-1.5 py-0.5 rounded"

# Truncation
truncation-default: "truncate"      # truncate | line-clamp-2 | line-clamp-3
description-max-width: "max-w-prose"
```

### 4. SPACING & LAYOUT

```yaml
page-max-width: "max-w-7xl"
page-padding: "px-4 sm:px-6 lg:px-8"
page-vertical: "py-8 lg:py-12"
section-gap: "space-y-8"
card-padding: "p-6"
card-header-padding: "px-6 py-4"
inline-gap: "gap-2"                 # Between inline elements
stack-gap: "gap-4"                  # Between stacked elements
grid-gap: "gap-4 md:gap-6"

# Grid Columns
grid-2: "grid-cols-1 md:grid-cols-2"
grid-3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
grid-4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"

# Sidebar
sidebar-width-expanded: "w-64"      # 256px
sidebar-width-collapsed: "w-16"     # 64px
sidebar-collapse-breakpoint: "lg"   # Below this = mobile sheet
```

### 5. BORDERS & RADIUS

```yaml
radius-sm: "rounded-md"             # Inputs, badges
radius-md: "rounded-lg"             # Cards, dropdowns
radius-lg: "rounded-xl"             # Modals, sheets
radius-xl: "rounded-2xl"            # Hero cards, feature sections
radius-full: "rounded-full"         # Avatars, pills, circular buttons
border-width: "border"              # 1px default
border-divider: "border-b border-slate-200 dark:border-white/10"
border-dashed: "border-2 border-dashed border-slate-200 dark:border-white/10"
```

### 6. SHADOWS & ELEVATION

```yaml
shadow-none: "shadow-none"
shadow-card: "shadow-sm"
shadow-card-hover: "shadow-md"
shadow-dropdown: "shadow-lg"
shadow-modal: "shadow-2xl"
shadow-glow: "shadow-[0_0_15px_rgba(249,115,22,0.15)]"  # Brand glow
elevation-hover: "hover:shadow-md transition-shadow"

# Z-Index Layers
z-dropdown: "z-50"
z-sticky: "z-40"
z-modal: "z-50"
z-toast: "z-[100]"
z-tooltip: "z-[60]"
```

### 7. BUTTONS

```yaml
# Variants
btn-default: "bg-primary text-primary-foreground hover:bg-primary-hover"
btn-secondary: "bg-secondary text-foreground hover:bg-secondary-hover"
btn-outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
btn-ghost: "hover:bg-accent hover:text-accent-foreground"
btn-destructive: "bg-destructive text-white hover:bg-destructive-hover"
btn-link: "text-primary underline-offset-4 hover:underline"

# Sizes
btn-sm: "h-8 px-3 text-xs rounded-md"
btn-default-size: "h-9 px-4 text-sm rounded-md"
btn-lg: "h-11 px-6 text-base rounded-lg"
btn-icon: "h-9 w-9 rounded-md"

# States
btn-disabled-opacity: "opacity-50 cursor-not-allowed"
btn-loading: "Loader2 animate-spin w-4 h-4 mr-2"
btn-transition: "transition-colors duration-150"
btn-focus: "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
```

### 8. CARDS

```yaml
card-bg: "bg-white dark:bg-white/5"
card-border: "border border-slate-200 dark:border-white/10"
card-radius: "rounded-xl"
card-shadow: "shadow-sm"
card-padding: "p-6"
card-hover: "hover:border-slate-300 dark:hover:border-white/20 transition-colors"
card-interactive: "cursor-pointer hover:shadow-md transition-all duration-200"

# Glass Variant
card-glass: "bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/20"

# KPI Card
kpi-card: "border-l-4"              # Left accent border
kpi-value: "text-2xl font-bold"
kpi-label: "text-sm font-medium text-muted-foreground"
kpi-change: "text-xs mt-1"
```

### 9. INPUTS & FORMS

```yaml
input-height: "h-9"
input-padding: "px-3"
input-bg: "bg-background dark:bg-white/5"
input-border: "border border-input"
input-radius: "rounded-md"
input-focus: "focus:ring-2 focus:ring-ring focus:border-transparent"
input-error: "border-red-500 focus:ring-red-500"
input-placeholder: "text-muted-foreground"
input-disabled: "opacity-50 cursor-not-allowed bg-muted"
textarea-min-height: "min-h-[80px]"
label-position: "top"               # top | inline | floating
label-style: "text-xs font-medium text-slate-500 mb-1 block"
error-text: "text-xs text-red-500 mt-1"
required-indicator: "text-red-500 ml-0.5"
```

### 10. BADGES & STATUS

```yaml
badge-radius: "rounded-full"
badge-padding: "px-2.5 py-0.5"
badge-text: "text-xs font-semibold"

# Status Colors
status-active: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
status-pending: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
status-draft: "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300"
status-error: "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400"
status-suspended: "bg-red-100 text-red-800 dark:bg-red-500/15 dark:text-red-300"
status-info: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"

# Dot Indicator
dot-active: "w-2 h-2 rounded-full bg-emerald-500"
dot-inactive: "w-2 h-2 rounded-full bg-slate-300"
```

### 11. TABLES

```yaml
table-header-bg: "bg-slate-50 dark:bg-white/5"
table-header-text: "text-xs font-medium text-slate-500 uppercase tracking-wider"
table-row-hover: "hover:bg-slate-50 dark:hover:bg-white/5"
table-row-divider: "divide-y divide-slate-200 dark:divide-white/10"
table-cell-padding: "px-6 py-4"
table-sticky-header: true
table-empty-state: "py-12 text-center text-muted-foreground"
table-border: "border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden"
```

### 12. NAVIGATION & SIDEBAR

```yaml
# Sidebar Items
nav-item-padding: "px-3 py-2"
nav-item-radius: "rounded-lg"
nav-item-active-bg: "bg-primary/10 dark:bg-primary/20"
nav-item-active-text: "text-primary font-medium"
nav-item-hover-bg: "hover:bg-slate-100 dark:hover:bg-white/10"
nav-item-text: "text-sm text-slate-600 dark:text-slate-400"
nav-item-icon-size: "w-4 h-4"
nav-item-icon-gap: "gap-3"
nav-section-label: "text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 mb-2"

# Active Indicator
nav-active-indicator: "left-border"  # left-border | bg-fill | underline

# Mobile
nav-mobile-type: "sheet"            # sheet | drawer | overlay
nav-mobile-width: "w-[280px]"

# Breadcrumbs
breadcrumb-separator: "/"
breadcrumb-text: "text-sm text-muted-foreground"
breadcrumb-active: "text-foreground font-medium"

# Scroll behavior
scroll-behavior: "smooth"
scroll-to-top-on-nav: true
```

### 13. TABS

```yaml
tab-style: "underline"              # underline | pill | card
tab-active-border: "border-b-2 border-foreground"
tab-active-text: "text-foreground font-medium"
tab-inactive-text: "text-muted-foreground hover:text-foreground"
tab-padding: "py-4 px-1"
tab-gap: "space-x-8"
tab-icon-size: "w-4 h-4 mr-2"
tab-overflow: "overflow-x-auto"
tab-transition: "transition-all duration-150"
```

### 14. MODALS & DIALOGS

```yaml
modal-overlay: "bg-black/50 backdrop-blur-sm"
modal-sm: "max-w-sm"
modal-md: "max-w-lg"
modal-lg: "max-w-2xl"
modal-full: "max-w-5xl"
modal-radius: "rounded-xl"
modal-padding: "p-6"
modal-animation: "fade-in scale-95 animate-in"
modal-close-position: "top-4 right-4"
modal-header-gap: "mb-4"
modal-footer-gap: "mt-6"
modal-footer-align: "flex justify-end gap-2"
```

### 15. TOASTS & NOTIFICATIONS

```yaml
toast-position: "bottom-right"      # top-right | bottom-right | top-center | bottom-center
toast-duration-ms: 4000
toast-success: "border-l-4 border-emerald-500"
toast-error: "border-l-4 border-red-500"
toast-warning: "border-l-4 border-amber-500"
toast-info: "border-l-4 border-blue-500"
toast-icon: true                    # Show status icon
toast-stack-limit: 3
toast-animation: "slide-in-from-right"
```

### 16. EMPTY STATES

```yaml
empty-icon-size: "w-12 h-12"
empty-icon-opacity: "opacity-60"
empty-icon-color: "text-primary"
empty-heading: "text-lg font-semibold"
empty-description: "text-sm text-muted-foreground max-w-sm mx-auto"
empty-padding: "py-20"
empty-border: "border-2 border-dashed rounded-xl"
empty-cta: true                     # Show action button
empty-layout: "text-center flex flex-col items-center"
```

### 17. LOADING STATES

```yaml
spinner-component: "Loader2"
spinner-class: "animate-spin"
spinner-size-sm: "w-4 h-4"
spinner-size-md: "w-6 h-6"
spinner-size-lg: "w-8 h-8"
spinner-color: "text-primary"
skeleton-bg: "bg-slate-200 dark:bg-white/10 animate-pulse"
skeleton-radius: "rounded-md"
loading-full-page: "flex items-center justify-center h-64"
loading-inline: "inline-flex items-center gap-2"
```

### 18. ANIMATIONS & TRANSITIONS

```yaml
transition-fast: "duration-100"
transition-default: "duration-150"
transition-slow: "duration-300"
transition-easing: "ease-in-out"
hover-scale: "hover:scale-[1.02]"
hover-lift: "hover:-translate-y-0.5"
fade-in: "animate-in fade-in-0"
slide-up: "animate-in slide-in-from-bottom-2"
slide-right: "animate-in slide-in-from-left-2"
collapse-animation: "transition-all duration-200 ease-in-out"
reduced-motion: "motion-reduce:transition-none motion-reduce:animate-none"
```

### 19. ICONS

```yaml
icon-library: "lucide-react"
icon-size-xs: "w-3 h-3"
icon-size-sm: "w-4 h-4"
icon-size-md: "w-5 h-5"
icon-size-lg: "w-6 h-6"
icon-size-xl: "w-8 h-8"
icon-stroke-width: 2
icon-color: "currentColor"          # Inherits from parent text
icon-muted: "text-muted-foreground"
icon-interactive: "text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
```

### 20. RESPONSIVE

```yaml
breakpoint-sm: "640px"
breakpoint-md: "768px"
breakpoint-lg: "1024px"
breakpoint-xl: "1280px"
breakpoint-2xl: "1536px"
approach: "mobile-first"
sidebar-collapse-at: "lg"
stack-at: "md"                      # Grid columns stack below this
hide-on-mobile: "hidden sm:block"
show-on-mobile: "sm:hidden"
```

### 21. ACCESSIBILITY

```yaml
focus-ring: "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
focus-ring-offset: "focus-visible:ring-offset-background"
sr-only-class: "sr-only"
min-tap-target: "min-h-[44px] min-w-[44px]"
contrast-ratio: "4.5:1"
aria-labels: "mandatory for icon-only buttons"
skip-link: true
keyboard-nav: true
reduced-motion-respect: true
```

### 22. TOOLTIPS & POPOVERS

```yaml
tooltip-bg: "bg-slate-900 dark:bg-white"
tooltip-text: "text-xs text-white dark:text-slate-900"
tooltip-radius: "rounded-md"
tooltip-padding: "px-2 py-1"
tooltip-delay-ms: 300
tooltip-animation: "fade-in duration-150"
popover-width: "w-72"
popover-padding: "p-4"
popover-radius: "rounded-lg"
popover-shadow: "shadow-lg"
```

### 23. AVATARS & PROFILES

```yaml
avatar-xs: "w-6 h-6"
avatar-sm: "w-8 h-8"
avatar-md: "w-10 h-10"
avatar-lg: "w-12 h-12"
avatar-xl: "w-16 h-16"
avatar-radius: "rounded-full"
avatar-fallback-bg: "bg-primary/10"
avatar-fallback-text: "text-primary font-semibold"
avatar-border: "ring-2 ring-white dark:ring-slate-900"
avatar-group-overlap: "-ml-2"
```

### 24. PROGRESS & METERS

```yaml
progress-height: "h-2"
progress-bg: "bg-slate-200 dark:bg-white/10"
progress-fill: "bg-primary"
progress-radius: "rounded-full"
progress-animation: "transition-all duration-500 ease-out"
stepper-active: "bg-primary text-white"
stepper-completed: "bg-emerald-500 text-white"
stepper-pending: "bg-slate-200 text-slate-500"
stepper-connector: "h-0.5 bg-slate-200 dark:bg-white/10"
```

### 25. LINKS & TEXT ACTIONS

```yaml
link-color: "text-primary"
link-hover: "hover:underline underline-offset-4"
link-external-icon: true            # Show external link icon
selection-bg: "selection:bg-primary/20"
text-highlight: "bg-yellow-100 dark:bg-yellow-500/20 px-1 rounded"
```

### 26. SCROLLBAR

```yaml
scrollbar-width: "w-1.5"
scrollbar-track: "bg-transparent"
scrollbar-thumb: "bg-slate-300 dark:bg-white/20"
scrollbar-thumb-hover: "bg-slate-400 dark:bg-white/30"
scrollbar-radius: "rounded-full"
```

### 27. DROPDOWNS & MENUS

```yaml
dropdown-bg: "bg-white dark:bg-[#1a1d27]"
dropdown-border: "border border-slate-200 dark:border-white/10"
dropdown-shadow: "shadow-lg"
dropdown-radius: "rounded-lg"
dropdown-item-padding: "px-3 py-2"
dropdown-item-hover: "bg-slate-100 dark:bg-white/10"
dropdown-item-active: "bg-primary/10 text-primary"
dropdown-separator: "border-t border-slate-100 dark:border-white/10 my-1"
dropdown-animation: "animate-in fade-in-0 zoom-in-95 duration-100"
```

### 28. ERROR PAGES

```yaml
error-layout: "min-h-screen flex items-center justify-center"
error-icon-size: "w-16 h-16 text-muted-foreground/50"
error-code: "text-7xl font-bold text-muted-foreground/20"
error-heading: "text-2xl font-bold mt-4"
error-description: "text-muted-foreground max-w-md text-center mt-2"
error-cta: "mt-6"
```

### 29. DATA VISUALIZATION

```yaml
chart-colors: ["#f97316","#8b5cf6","#06b6d4","#10b981","#f43f5e","#6366f1"]
chart-grid: "stroke-slate-200 dark:stroke-white/10"
chart-text: "text-xs fill-slate-500"
chart-tooltip-bg: "bg-slate-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg"
```

### 30. CONFIRMATION & DESTRUCTIVE PATTERNS

```yaml
confirm-dialog: true                 # Always confirm destructive actions
confirm-type: "alert-dialog"         # alert-dialog | inline-confirm | undo-toast
destructive-delay-ms: 0              # 0 = instant, 3000 = undo window
destructive-btn-text: "Delete"
destructive-btn-style: "bg-red-500 hover:bg-red-600 text-white"
confirm-message-pattern: "Are you sure? This action cannot be undone."
```

---

## PART 2 — AGENT QUESTIONNAIRE

When a user asks to set up the UI system for their app, the agent MUST:

### Step 1: Ask These Questions

```
1. What is your app name and primary brand color? (e.g. "CloudFetch, orange")
2. Dark mode, light mode, or system default?
3. What CSS framework? (Tailwind / Vanilla CSS / Other)
4. What component library? (shadcn/ui / Radix / MUI / Custom)
5. What icon library? (lucide-react / heroicons / phosphor)
6. What font? (Inter / Outfit / Roboto / System)
7. Sidebar navigation or top navigation?
8. Toast position preference? (bottom-right / top-right / top-center)
9. Card style preference? (solid / glass / outlined / elevated)
10. Animation level? (full / subtle / minimal / none)
11. Is this a dashboard app, marketing site, or both?
12. Any specific accent color for success/charts/highlights?
```

### Step 2: Generate the File

After collecting answers, generate `user-app-skill/SKILL.md` at:

```
.agents/skills/user-app-skill/SKILL.md
```

The generated file MUST:
1. Copy the full parameter registry from Part 1
2. Replace ALL placeholder values with the user's chosen values
3. Add an `## APP IDENTITY` section at the top with app name, brand, and context
4. Add a `## RULES` section that says:
   - "Every UI element MUST use values from this file"
   - "Never hardcode colors, sizes, or spacing outside this system"
   - "Always support both dark and light mode"
   - "Every interactive element needs hover + focus + disabled states"
   - "Every icon-only button needs aria-label or sr-only text"
   - "Never nest `<button>` inside `<button>` or `<a>` inside `<a>`"
   - "Empty states must always have icon + heading + description + CTA"
   - "Loading states must always use the defined spinner pattern"
   - "Tables must have hover rows, sticky headers, and empty state"
   - "Forms must show validation inline, never alert()"
   - "All pages must have consistent max-width and padding"
   - "Sidebar active state must match current URL path"
   - "Modals must trap focus and close on Escape"
   - "Respect prefers-reduced-motion"
   - "Never use `any` color — always reference this system"

### Step 3: Confirm

Show the user a summary of their choices and the file path. Ask if they want to adjust any values.

---

## USAGE RULE FOR ALL AGENTS

When building ANY UI in this project:

1. **READ** `user-app-skill/SKILL.md` first
2. **APPLY** every parameter from it — no exceptions
3. **NEVER** invent colors, spacing, or patterns outside the system
4. If a parameter is missing, check this parent skill file for the default
5. If still missing, ASK the user before inventing
