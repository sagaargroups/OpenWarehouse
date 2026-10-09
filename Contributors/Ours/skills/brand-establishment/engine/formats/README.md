# Format Shells — Visual Layout Templates

> **Version:** `formats-v1.0`

## What Are Format Shells?

Format shells define the **visual container** (layout, headers, footers, margins, typography rules) for branded documents. They contain no document-specific content — only the branded frame.

## How to Use

1. Pick a format shell that matches your document's physical output (A4 paper, slide deck, email, etc.)
2. Pick a content module from `../content/` that provides the document body
3. Merge: inject the content module's sections into the format's `<!-- CONTENT_SLOT -->` area
4. Replace all `{{VARIABLES}}` with the brand's locked tokens
5. Output the final document to `outputs/<brand>/documents/`

## Available Formats

| Format | File | Best For |
|---|---|---|
| A4 Letterhead | `a4-letterhead.md` | Contracts, proposals, letters, agreements, SOWs |
| 16:9 Presentation | `16x9-presentation.md` | Pitch decks, client presentations |
| Email HTML | `email-html.md` | Email signatures, branded email bodies |
| 1-Page Summary | `1-page-summary.md` | Executive summaries, capability statements |
| Invoice Table | `invoice-table.md` | Billing documents, payment records |

## Adding New Formats

Create a new `.md` file in this directory following the pattern:
1. Header section with brand marks and contact info
2. Typography and color rules for the format
3. `<!-- CONTENT_SLOT -->` marker where content gets injected
4. Footer section with sovereignty notice / legal line
