# Business Website Skill

Use this skill when building company/business showcase websites.

## Required Materials Checklist

Ask user for these, generate prompts if missing:

### Brand Identity
- [ ] Company logo (SVG preferred)
- [ ] Brand colors (primary, secondary)
- [ ] Company name
- [ ] Tagline/slogan

### About Company
- [ ] Company description (who, what, why)
- [ ] Year founded
- [ ] Team photos (optional)
- [ ] Mission/vision statement

### Services/Products
- [ ] List of services/products
- [ ] Description for each
- [ ] Pricing (if applicable)
- [ ] Icons or images for each

### Trust Signals
- [ ] Client logos
- [ ] Testimonials (with photos)
- [ ] Case studies
- [ ] Certifications/awards

### Contact
- [ ] Business address
- [ ] Phone number
- [ ] Email
- [ ] Business hours
- [ ] Social media links

## If Materials Missing

### Missing Logo Prompt
```
"Professional minimalist logo for [company name], a [industry] company.
Style: modern, clean, memorable. Colors: [brand colors].
Format: suitable for web and print"
```

### Missing Team Photos
```
"Professional business headshot of a [role] in corporate attire,
neutral background, confident expression, suitable for company website"
```

### Missing Service Icons
```
"Flat icon representing [service name] in [brand color],
simple line art style, suitable for business website"
```

## Recommended Structure

```
/                   → Hero + value proposition
/about              → Company story + team
/services           → Services grid
/services/[slug]    → Individual service detail
/portfolio          → Work examples/case studies
/testimonials       → Client reviews
/contact            → Contact form + map
/blog               → Company blog
```

## Design Guidelines

- Professional, trust-building design
- Clear call-to-actions
- Fast loading (optimize images)
- Mobile responsive
- Accessibility compliant
- Trust badges visible

## Essential Pages

1. **Home**: Hero → Services overview → Testimonials → CTA
2. **About**: Story → Team → Values → Timeline
3. **Services**: Grid → Details → Pricing → FAQ
4. **Contact**: Form → Map → Hours → Social

## Tech Stack

| Component | Recommendation |
|-----------|----------------|
| Framework | Next.js |
| Forms | React Hook Form + email service |
| Maps | Google Maps or Mapbox |
| Analytics | Google Analytics |
| CMS | Optional: Sanity, Contentful |

## SEO Checklist

- [ ] Local SEO (Google Business Profile)
- [ ] Schema markup (LocalBusiness, Organization)
- [ ] Meta titles with location + service
- [ ] Alt text for all images
- [ ] Fast Core Web Vitals
