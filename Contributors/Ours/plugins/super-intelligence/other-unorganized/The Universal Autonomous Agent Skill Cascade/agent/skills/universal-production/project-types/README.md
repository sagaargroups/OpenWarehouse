# Project Types Skills

This folder contains specialized skills for different project types.
Agent should check this folder when user describes a new project.

## Available Project Types

| Type | Skill File | Use When |
|------|------------|----------|
| Portfolio | `portfolio.md` | Personal portfolio, developer showcase |
| Business | `business.md` | Company website, service showcase |
| Branding | `personal-branding.md` | Personal brand, influencer site |
| Local Business | `local-business.md` | Location-based business with maps |
| E-commerce | `ecommerce.md` | Online store, product catalog |
| SaaS | `saas.md` | Software as a Service platform |
| Blog | `blog.md` | Content-focused, articles |

## How Agent Uses This

1. User describes project: "I need a portfolio website"
2. Agent searches this folder for matching skill
3. Agent loads `portfolio.md` for specific guidelines
4. Agent asks for materials based on that skill's requirements
5. Agent generates material prompts if needed

## Adding New Project Types

Create a new `.md` file with:
- Description of project type
- Required materials (logo, images, content)
- Recommended structure
- Best practices for that type
- Material prompts for missing assets
