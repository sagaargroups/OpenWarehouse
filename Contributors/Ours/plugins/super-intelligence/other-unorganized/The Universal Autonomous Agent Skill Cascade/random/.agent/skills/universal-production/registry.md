# Framework & Feature Registry

> Single source of truth for all available capabilities.
> Agent should read this file to know what's available - NOT hardcoded lists.

## How to Add New Framework

1. Create folder: `framework-templates/[name]/`
2. Add: `config.yaml` + `component.template.txt`
3. Update registry below
4. Done! Agent will auto-detect.

## How to Add New Project Type

1. Create file: `project-types/[name].md`
2. Update registry below
3. Done!

---

## Frameworks Registry

```yaml
frameworks:
  - name: nextjs
    displayName: "Next.js"
    version: "15+"
    status: available        # available | beta | planned
    folder: framework-templates/nextjs/
    description: "Full-stack React framework with App Router"
    bestFor: ["full-stack", "ecommerce", "saas", "blog"]
    
  - name: react-vite
    displayName: "React + Vite"
    version: "18+"
    status: available
    folder: framework-templates/react-vite/
    description: "Fast frontend-only React setup"
    bestFor: ["spa", "dashboard", "frontend-only"]
    
  - name: vue
    displayName: "Vue 3"
    version: "3+"
    status: available
    folder: framework-templates/vue/
    description: "Progressive JavaScript framework"
    bestFor: ["spa", "dashboard", "quick-projects"]
    
  - name: express
    displayName: "Express.js"
    version: "4+"
    status: available
    folder: framework-templates/express/
    description: "Minimal Node.js API framework"
    bestFor: ["api-only", "backend", "microservices"]
    
  - name: svelte
    displayName: "Svelte"
    version: "4+"
    status: planned
    folder: framework-templates/svelte/
    description: "Compile-time reactive framework"
    bestFor: ["lightweight", "animations", "fast-load"]
    eta: "Q2 2024"
    
  - name: astro
    displayName: "Astro"
    version: "4+"
    status: planned
    folder: framework-templates/astro/
    description: "Content-focused static site builder"
    bestFor: ["blog", "docs", "marketing", "content-heavy"]
    eta: "Q2 2024"
    
  - name: nuxt
    displayName: "Nuxt 3"
    version: "3+"
    status: planned
    folder: framework-templates/nuxt/
    description: "Full-stack Vue framework"
    bestFor: ["full-stack-vue", "ssr", "hybrid"]
    eta: "Q3 2024"
```

---

## Project Types Registry

```yaml
projectTypes:
  - name: portfolio
    displayName: "Portfolio Website"
    status: available
    file: project-types/portfolio.md
    keywords: ["portfolio", "showcase", "developer", "designer", "resume"]
    
  - name: business
    displayName: "Business Website"
    status: available
    file: project-types/business.md
    keywords: ["business", "company", "corporate", "service", "agency"]
    
  - name: local-business
    displayName: "Local Business"
    status: available
    file: project-types/local-business.md
    keywords: ["local", "restaurant", "shop", "clinic", "salon", "store"]
    
  - name: ecommerce
    displayName: "Ecommerce Store"
    status: available
    file: project-types/ecommerce.md
    keywords: ["ecommerce", "shop", "store", "products", "sell", "cart"]
    
  - name: personal-branding
    displayName: "Personal Branding"
    status: available
    file: project-types/personal-branding.md
    keywords: ["personal", "influencer", "coach", "speaker", "author"]
    
  - name: saas
    displayName: "SaaS Application"
    status: planned
    file: project-types/saas.md
    keywords: ["saas", "subscription", "app", "platform", "software"]
    eta: "Q2 2024"
    
  - name: blog
    displayName: "Blog / Content Site"
    status: planned
    file: project-types/blog.md
    keywords: ["blog", "articles", "content", "news", "magazine"]
    eta: "Q2 2024"
    
  - name: documentation
    displayName: "Documentation Site"
    status: planned
    file: project-types/documentation.md
    keywords: ["docs", "documentation", "api-docs", "manual", "guide"]
    eta: "Q2 2024"
```

---

## Material Prompts Registry

```yaml
materialPrompts:
  - name: logos
    displayName: "Logo Generation"
    status: available
    file: material-prompts/logos.md
    
  - name: headshots
    displayName: "Professional Headshots"
    status: available
    file: material-prompts/headshots.md
    
  - name: product-photos
    displayName: "Product Photography"
    status: planned
    file: material-prompts/product-photos.md
    eta: "Q2 2024"
    
  - name: backgrounds
    displayName: "Hero Backgrounds"
    status: planned
    file: material-prompts/backgrounds.md
    eta: "Q2 2024"
```

---

## Agent Instructions

### How to Use This Registry

```
1. Read this file (registry.md) on startup
2. Parse the YAML blocks to get available items
3. Filter by status: "available" for production use
4. Match user request to keywords for project types
5. Never hardcode - always check registry
```

### Dynamic Capability Check

```
When user asks "can you build X?":
1. Read registry.md
2. Search projectTypes[].keywords for match
3. If found AND status=available → Load the skill file
4. If found AND status=planned → Tell user "Coming soon, ETA: X"
5. If not found → Use universal standards, offer to create new type
```

### Adding New Capability

Anyone can add new capabilities:
1. Create the template/skill file
2. Add entry to this registry
3. Agent will auto-discover it

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2024-02-01 | Initial registry with 4 frameworks, 5 project types |
