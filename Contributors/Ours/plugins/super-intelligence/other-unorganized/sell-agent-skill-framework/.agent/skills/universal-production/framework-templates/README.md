# Framework Templates

This folder contains framework-specific code templates.

## How It Works

1. Agent detects framework from `package.json` or asks user
2. Agent loads templates from the matching framework folder
3. Templates are applied when generating new code

## Available Frameworks

| Framework | Folder | Status |
|-----------|--------|--------|
| Next.js | `nextjs/` | ✅ Included |
| React + Vite | `react-vite/` | ✅ Included |
| Vue 3 | `vue/` | ✅ Included |
| Svelte | `svelte/` | 📋 Planned |
| Express | `express/` | ✅ Included |
| Astro | `astro/` | 📋 Planned |

## Template Structure

Each framework folder contains:
```
[framework]/
├── component.template     ← Component template
├── api-route.template     ← API route template
├── page.template          ← Page/route template
├── test.template          ← Test file template
└── config.yaml            ← Framework-specific settings
```

## Adding New Framework

1. Create folder with framework name
2. Add templates following the structure above
3. Update `config.yaml` with framework settings
4. Agent will auto-detect and use

## Template Variables

Templates use `${VARIABLE}` syntax:
- `${ComponentName}` - PascalCase component name
- `${fileName}` - kebab-case file name
- `${moduleName}` - camelCase module name
