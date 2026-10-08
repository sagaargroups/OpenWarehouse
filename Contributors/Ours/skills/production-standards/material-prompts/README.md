# Material Prompts

Ready-to-use prompts for generating project materials using AI image generators.

## How to Use

1. User says they're missing a material (logo, photos, etc.)
2. Agent picks appropriate prompt from this folder
3. Agent customizes prompt with user's details
4. User uses prompt in AI image generator (DALL-E, Midjourney, etc.)
5. User places generated asset in `.agent/skills/.../assets/`

## Prompt Categories

| File | Use For |
|------|---------|
| `logos.md` | Company logos, wordmarks |
| `headshots.md` | Professional photos |
| `product-photos.md` | Product/service images |
| `mockups.md` | UI/app mockups |
| `backgrounds.md` | Hero backgrounds, patterns |
| `icons.md` | Service/feature icons |

## Prompt Format

Each prompt includes:
- Base prompt (copy-paste ready)
- Variables to replace [in brackets]
- Style modifiers
- Negative prompts (what to avoid)

## Example

```
Base: "Professional logo for [company name], a [industry] company"
Style: "minimalist, modern, clean lines"
Color: "[brand colors or 'blue and white']"
Negative: "no text, no gradients, no complex shapes"

Final: "Professional minimalist logo for App Markit, a cloud storage company, 
modern clean lines, blue and white colors, no text, no gradients"
```
