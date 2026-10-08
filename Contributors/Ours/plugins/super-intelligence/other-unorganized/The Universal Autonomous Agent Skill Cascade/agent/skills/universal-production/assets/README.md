# Assets Folder

This folder contains project assets that the agent will integrate into your project.

## Folder Structure

```
assets/
├── brand/          ← Logo, favicon, brand assets
│   └── README.md
├── images/         ← Product images, screenshots
│   └── README.md
└── fonts/          ← Custom fonts (woff2, ttf)
    └── README.md
```

## How to Add Assets

1. Drop files into the appropriate subfolder
2. Agent will:
   - Detect file types
   - Copy to project's public/ folder
   - Update CSS/config as needed
   - Record in preferences

## Supported Formats

| Type | Formats |
|------|---------|
| Images | PNG, JPG, WebP, SVG, ICO |
| Fonts | WOFF2, WOFF, TTF, OTF |
| Icons | SVG, ICO, PNG |

## Example

```
assets/brand/logo.svg
assets/brand/favicon.ico
assets/fonts/my-font.woff2
```

After adding, agent integrates:
```tsx
// In your code
import Logo from '@/public/brand/logo.svg';

// In CSS
@font-face {
  font-family: 'MyFont';
  src: url('/fonts/my-font.woff2');
}
```
