# GreenShield Pest Control — Website

A premium, enterprise-grade pest control marketing website built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. Fully static (SSG), SEO-optimized, and data-driven: all services, cities, blog posts, plans, and testimonials live in typed data files that feed reusable page templates.

## Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (55 static pages)
npm run start    # serve production build
```

## Architecture

```
app/                    # App Router pages (all statically generated)
  services/[slug]/      # 18 service pages from data/services.ts
  service-areas/[slug]/ # 6 city pages from data/locations.ts
  blog/[slug]/          # 8 articles from data/blog-posts.ts
components/
  ui/                   # Primitives: button, card, badge, inputs, accordion
  layout/               # Header (mega menu), footer, announcement bar, sticky call bar
  shared/               # Motion wrappers, section heading, CTA banner, breadcrumb,
                        # stats counter, testimonial carousel, image placeholders, JSON-LD
  cards/                # Service, blog, pricing, review cards
  forms/                # Quote, inspection, contact, newsletter, career (RHF + Zod)
  home/                 # Hero, before/after comparison slider
  blog/                 # Filterable/searchable blog list
data/                   # ← ALL site content lives here (typed)
  site.ts               # Company identity, contact, hours, stats, guarantees
  services.ts           # 18 services with full page content
  locations.ts          # City pages with local pest intel
  blog-posts.ts         # Articles with structured content blocks
  plans.ts / faqs.ts / testimonials.ts / industries.ts / team.ts / navigation.ts
lib/
  seo.ts                # Metadata builder + JSON-LD schema builders
  validations.ts        # Zod schemas for every form
  utils.ts              # cn(), formatDate()
types/index.ts          # Shared TypeScript interfaces
```

## Key Decisions

- **Data-driven pages** — adding a service, city, or article means adding one object to a data file; the template, sitemap, nav, and schema markup update automatically.
- **SEO** — per-page metadata + canonical URLs, Open Graph/Twitter cards, and JSON-LD (Organization, LocalBusiness/PestControlService, Service, FAQPage, BreadcrumbList, BlogPosting). `app/sitemap.ts` and `app/robots.ts` generate automatically.
- **Forms** — React Hook Form + Zod validation. Submissions are currently simulated client-side (`console.info` + success state); wire the `onSubmit` handlers in `components/forms/*` to your CRM or an API route.
- **Images** — all photography is defined once in `data/images.ts` (visually verified Unsplash imagery with descriptive alt text) and rendered through `components/shared/site-image.tsx` (`next/image` with fill, responsive `sizes`, lazy loading). Swap any registry entry for brand photography without touching page code. `next.config.ts` whitelists `images.unsplash.com`.
- **Accessibility** — skip link, ARIA labels/expanded states, keyboard-operable accordions and menus, focus styles, `prefers-reduced-motion` support.
- **Brand tokens** — colors, fonts, shadows, and utilities (`container-site`, `glass`, `bg-dot-grid`) are defined in `app/globals.css` via Tailwind v4 `@theme`.

## Placeholder Content to Replace Before Launch

- Company name/phone/address/social URLs in `data/site.ts`
- `public/og-image.jpg` and `public/logo.png` (referenced by SEO metadata)
- Stock imagery in `data/images.ts` → replace with brand photography before launch
- Google Maps embed on the contact page (currently a static map image)
- Form submission endpoints
