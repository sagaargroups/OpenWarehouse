# Portfolio Website Skill

Use this skill when building portfolio/showcase websites for developers, designers, or creatives.

## Required Materials Checklist

Ask user for these, generate prompts if missing:

### Must Have
- [ ] Professional photo (headshot)
- [ ] Short bio (2-3 sentences)
- [ ] Contact email
- [ ] Social links (GitHub, LinkedIn, Twitter)

### Projects Section
- [ ] 3-6 project descriptions
- [ ] Project screenshots/images
- [ ] Tech stack for each project
- [ ] Live links or GitHub repos

### Nice to Have
- [ ] Resume/CV PDF
- [ ] Testimonials
- [ ] Blog posts
- [ ] Skills list with proficiency

## If Materials Missing

Generate these prompts for user:

### Missing Headshot
```
"Professional headshot photo of a [gender] [profession] in their [age range], 
clean background, warm lighting, friendly expression, suitable for portfolio website"
```

### Missing Project Screenshots
```
"Clean mockup of a [project type] application showing [main feature], 
modern UI design, light/dark mode, browser frame"
```

## Recommended Structure

```
/                   → Hero + intro
/about              → Extended bio + skills
/projects           → Project grid
/projects/[slug]    → Individual project detail
/contact            → Contact form
/blog               → Optional blog
```

## Design Guidelines

- Clean, minimal design
- Large hero with name + tagline
- Dark mode support
- Responsive (mobile-first)
- Fast load time (< 2s)
- Subtle animations

## Tech Stack (Recommended)

| Component | Recommendation |
|-----------|----------------|
| Framework | Next.js (static export possible) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Contact Form | Formspree or custom API |
| Hosting | Vercel (free tier) |

## SEO Checklist

- [ ] Meta title: "Name - Role | Portfolio"
- [ ] Meta description: Brief intro
- [ ] Open Graph image
- [ ] Structured data (Person schema)
- [ ] Sitemap
