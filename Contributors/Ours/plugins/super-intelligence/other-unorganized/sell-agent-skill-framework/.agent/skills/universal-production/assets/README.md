# Assets Folder

This folder contains project assets that the agent will integrate into your project.

## How to Add Assets

1. Drop files into the appropriate subfolder:
   - `brand/` - Logo, favicon, brand assets
   - `images/` - Product images, screenshots
   - `fonts/` - Custom fonts (woff2, ttf)

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
