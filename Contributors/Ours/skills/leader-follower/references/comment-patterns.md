# Comment Patterns — Leader Scaffolding Templates

> Leaders paste these blocks at the top of every file they create.
> Followers read them as their ONLY instruction source.

---

## Rule: Every comment block MUST answer these 4 questions
1. **What** is this file? (PURPOSE)
2. **Who** uses it? (USED BY / ROUTE)
3. **How** should it work? (BEHAVIOR / FEATURES)
4. **Where** to look for context? (READ)

---

## React Component

```jsx
// FILE: ComponentName.jsx
// PURPOSE: [one sentence]
// USED BY: [parent component or route path]
// PROPS: { propName: type, propName: type }
// BEHAVIOR:
//   - [what it renders]
//   - [what it handles]
//   - [edge cases]
// STATE: [list useState hooks if needed]
// READ: [path/to/file] — [why to read it]
// INSTALL: [package] — ONLY if listed in TASKS.md Phase 1

export default function ComponentName({ prop1, prop2 }) {
  // TODO: Implement according to comments above
  return null;
}
```

---

## Page Component

```jsx
// FILE: PageName.jsx
// PURPOSE: [what page, what it shows]
// ROUTE: /exact-path
// AUTH: REQUIRED | NOT REQUIRED
// CONTENT SOURCE: [API call | markdown import | hardcoded | Supabase query]
// LAYOUT: [sidebar + main | single column | grid]
// FEATURES:
//   - [feature 1]
//   - [feature 2]
// EXTRACTS FROM: [source file:lines] — if migrating existing code
// CTA: [button text and behavior]
// READ: [path/to/file] — [why]

export default function PageName() {
  // TODO: Implement according to comments above
  return null;
}
```

---

## Markdown Content

```markdown
---
title: "Title"
date: YYYY-MM-DD
author: Author Name
tags: [tag1, tag2]
summary: "One sentence summary."
---

<!--
  AI INSTRUCTION: [what to write]
  TONE: [Formal | Casual | Technical | Emotional | Human]
  LENGTH: [Short ~200 words | Medium ~500 words | Long ~1000 words]
  STRUCTURE:
    1. [Section 1 — what to cover]
    2. [Section 2 — what to cover]
    3. [Section 3 — what to cover]
  READ: [path/to/file] — [for context on brand/tone/facts]
  AVOID: [things NOT to say or do]
-->

# Title

TODO: Write content following the structure above.
```

---

## Configuration File

```javascript
// FILE: configName.js
// PURPOSE: [what this config controls]
// MODIFIES: [what behavior changes]
// EXPORTS: { key: type } — [what other files import from this]
// VALUES:
//   key1: type — [description, valid range]
//   key2: type — [description, valid range]
// READ: [path/to/file] — [for context]
```

---

## API Route / Serverless Function

```javascript
// FILE: routeName.js
// PURPOSE: [what this endpoint does]
// METHOD: GET | POST | PUT | DELETE
// PATH: /api/endpoint-name
// AUTH: Required (check session) | Public
// INPUT:
//   body: { field: type }
//   params: { field: type }
//   query: { field: type }
// OUTPUT:
//   200: { field: type } — success
//   400: { error: string } — validation failure
//   401: { error: string } — unauthorized
// SIDE EFFECTS: [DB writes, email sends, etc.]
// READ: [path/to/file] — [for schema/context]
```

---

## Utility / Helper

```javascript
// FILE: utilName.js
// PURPOSE: [what this utility does]
// USED BY: [which files import this]
// PURE: Yes | No (has side effects?)
// FUNCTIONS:
//   functionName(param: type, param: type) → returnType
//     [one-line description]
//   anotherFunction(param: type) → returnType
//     [one-line description]
// READ: [path/to/file] — [for context]
```

---

## CSS / Stylesheet

```css
/* FILE: styleName.css */
/* PURPOSE: [what these styles control] */
/* SCOPE: [which components/pages use these] */
/* DESIGN SYSTEM: Use var(--name) from index.css — do NOT hardcode colors */
/* DARK MODE: Support .dark class on <body> */
/* RESPONSIVE: Must work 320px → 1920px */
/* ANIMATIONS: Use prefers-reduced-motion media query */
```

---

## Test File

```javascript
// FILE: componentName.test.js
// PURPOSE: Tests for [ComponentName]
// TESTS:
//   1. [renders without crashing]
//   2. [handles empty state]
//   3. [handles error state]
//   4. [user interaction — click/submit/etc]
// MOCKS: [list things to mock — supabase, fetch, etc.]
// READ: [path/to/component] — the component being tested
```

---

## Migration / Schema

```sql
-- FILE: migration_name.sql
-- PURPOSE: [what this migration does]
-- TABLE: [table name]
-- COLUMNS:
--   column_name TYPE — description
-- RLS: [describe row level security rules]
-- INDEXES: [list indexes to create]
-- READ: [path/to/file] — [for schema context]
```
