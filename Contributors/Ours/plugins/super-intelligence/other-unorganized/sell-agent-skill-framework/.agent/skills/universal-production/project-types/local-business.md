# Local Business Website Skill

Use this skill for location-based businesses (restaurants, shops, clinics, salons, etc.)

## Required Materials Checklist

### Business Essentials
- [ ] Business name
- [ ] Logo
- [ ] Business type/category
- [ ] Year established

### Location & Contact
- [ ] Full address
- [ ] Google Maps coordinates
- [ ] Phone number(s)
- [ ] WhatsApp number (optional)
- [ ] Email
- [ ] Business hours (each day)
- [ ] Holiday hours

### Visual Content
- [ ] Exterior photo of location
- [ ] Interior photos (3-5)
- [ ] Product/service photos
- [ ] Team photos

### Services/Menu
- [ ] Complete list of offerings
- [ ] Prices
- [ ] Categories
- [ ] Featured items

### Trust Signals
- [ ] Google reviews link
- [ ] Testimonials
- [ ] Certifications/licenses
- [ ] Payment methods accepted

## If Materials Missing

### Missing Storefront Photo
```
"Professional exterior photo of a [business type] storefront,
welcoming entrance, good lighting, street visible, local business feel"
```

### Missing Interior Photo
```
"Interior photo of a [business type], clean and organized,
warm lighting, customers welcome feeling, professional service environment"
```

### Missing Product Photos
```
"Professional product photo of [product/service], 
clean background, appetizing/appealing presentation, high quality"
```

## Recommended Structure

```
/                   → Hero with address + hours + CTA
/menu               → Services/products (for restaurants)
/services           → Services list with prices
/gallery            → Photo gallery
/about              → Our story + team
/contact            → Map + form + all contact methods
/reviews            → Testimonials + Google reviews
```

## Critical Features

### Must Have
1. **Prominent Contact Info** - Phone clickable on mobile
2. **Google Maps Embed** - With directions link
3. **Business Hours** - With "Open Now" indicator
4. **WhatsApp Button** - Floating for quick contact
5. **Call-to-Action** - "Call Now", "Get Directions", "Book Now"

### Mobile Priority
- Click-to-call button
- Click-to-directions
- Click-to-WhatsApp
- Fast loading (< 3s on 3G)

## SEO for Local Business

### Google Business Profile
- [ ] Claimed and verified
- [ ] All info matches website
- [ ] Photos uploaded
- [ ] Reviews responded to

### Local Schema Markup
```json
{
  "@type": "LocalBusiness",
  "name": "Business Name",
  "address": {...},
  "geo": {...},
  "openingHours": [...],
  "telephone": "..."
}
```

### Local Keywords
- "[Service] in [City]"
- "[Service] near me"
- "Best [service] [neighborhood]"

## Design Guidelines

- Mobile-first (70%+ traffic is mobile)
- Large touch targets
- Clear phone number (always visible)
- Fast load time (optimize images)
- High contrast for readability
- Dark mode optional

## Tech Stack

| Component | Recommendation |
|-----------|----------------|
| Framework | Next.js |
| Maps | Google Maps Embed |
| Forms | Simple contact form |
| Booking | Cal.com or custom |
| Reviews | Google Reviews widget |
