# Ecommerce Website Skill

Use this skill when building online stores, product catalogs, or marketplaces.

## For Beginners (Vibe Coders)

If user doesn't know tech, AUTO-CHOOSE these and explain:

| Component | Choice | Simple Explanation |
|-----------|--------|-------------------|
| Framework | Next.js | "Makes your store fast and Google-friendly" |
| Styling | Tailwind CSS | "Makes it look professional easily" |
| Database | PostgreSQL | "Safe storage for products and orders" |
| Payments | Stripe | "Industry standard, takes all cards" |
| Auth | NextAuth | "Handles login/signup securely" |

## Required Materials Checklist

### Business Info
- [ ] Store name
- [ ] Business description
- [ ] Contact email
- [ ] Return policy (agent can draft)

### Visual Assets
- [ ] Logo
- [ ] Product photos
- [ ] Banner images

### Product Data
- [ ] Product list (name, price, description)
- [ ] Categories
- [ ] Inventory counts

## If Materials Missing

### Missing Logo Prompt
```
"Modern minimalist logo for [store name], an online store selling [products].
Style: clean, trustworthy, memorable.
Colors: [brand colors or 'blue and white'].
Suitable for website header and social media."
```

### Missing Product Photo
```
"Professional product photo of [product], 
white background, clean lighting, 
suitable for ecommerce listing, high quality."
```

## Recommended Structure

```
/                       → Home (featured products)
/products               → All products grid
/products/[slug]        → Product detail page
/cart                   → Shopping cart
/checkout               → Checkout with payment
/account                → User account
/orders                 → Order history
/admin                  → Admin dashboard (optional)
```

## Essential Features

### Must Have (Phase 1)
1. Product listing with filters
2. Shopping cart (persisted)
3. Checkout with Stripe
4. Order confirmation email
5. Mobile responsive

### Nice to Have (Phase 2)
1. User accounts
2. Wishlist
3. Reviews
4. Inventory management
5. Admin dashboard

## Teaching Points

When building, explain to user:

### When Creating Product Listing
```
"We're creating a product listing page. This fetches products 
from your database and displays them in a grid. Each product 
card is clickable and leads to the detail page."
```

### When Adding Cart
```
"The cart stores items locally (in browser) so users don't 
lose their selection. When they checkout, it becomes an order 
in the database."
```

### When Adding Payments
```
"Stripe handles all the payment security - you never see or 
store credit card numbers. They pay Stripe, Stripe pays you 
(minus a small fee)."
```

## Tech Stack Explanation (For Beginners)

| Term | What It Means |
|------|---------------|
| Next.js | The engine that runs your website |
| Tailwind | Makes things look pretty with simple words |
| PostgreSQL | A filing cabinet for your products/orders |
| Stripe | A secure cash register |
| API | How your website talks to the database |

## Pricing Guidance

| Store Size | Recommended Hosting | Monthly Cost |
|------------|--------------------|--------------| 
| < 100 products | Vercel Free | $0 |
| 100-1000 products | Vercel Pro | $20 |
| 1000+ products | Vercel Pro + DB plan | $50+ |

## SEO Checklist

- [ ] Product titles in page titles
- [ ] Meta descriptions for products
- [ ] Schema markup (Product, Organization)
- [ ] Sitemap with all products
- [ ] Image alt texts
- [ ] Fast page load (< 3s)
