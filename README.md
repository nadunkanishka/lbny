# Studio Liberny

Marketing website for [Studio Liberny](https://studioliberny.com), a creative design studio. Built with React 19, Vite and React Router.

## Getting started

Requires Node.js 18+ (Vite 8 may require a newer version; check `npm install` warnings).

```bash
npm install
npm run dev       # start the dev server with HMR
```

### Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the Vite dev server           |
| `npm run build`   | Production build into `dist/`       |
| `npm run preview` | Serve the production build locally  |
| `npm run lint`    | Lint with Oxlint                    |

## Environment variables

The contact form sends email through [EmailJS](https://dashboard.emailjs.com). Create a `.env.local` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

1. Create a free EmailJS account.
2. Add an Email Service (e.g. Gmail) and copy the Service ID.
3. Create an Email Template and copy the Template ID.
4. Under Account → API Keys, copy the Public Key.

Restart the dev server after changing these. `.env.local` should not be committed.

## Project structure

```
public/                 Static files: favicons, og-image, robots.txt, sitemap.xml,
                        _headers, _redirects
  assets/brand/         Shared logos and wordmarks
  assets/home/          Home page images (client logos)
  assets/about/         About page photos
src/
  main.jsx  App.jsx    Entry point; router and layout (Navbar, routes, Footer)
  styles/               Global tokens, base styles, animations
  hooks/                useSEO, useScrollReveal, useCoverflow
  components/
    layout/             Navbar, Footer, PageShell, PageHeader
    ui/                 Button, Motion, CoverflowNav, CountUp
    sections/           Reusable page sections: Hero, Services, Stats, Clients,
                        Testimonial, Faq, Contact, LegalSection
  pages/                One folder per route; the page file only composes sections
    Home/ About/ Pricing/ Contact/ Projects/ NotFound/ Terms/ Privacy/
    About/components/   Page-only sections (AboutHero, AboutStory, ...)
    Pricing/components/ PricingPlans, PlanCard, PricingCustom
scratch/                One-off Python scripts used for logo conversion
```

Every component lives in its own folder with an `index.js`, its `.jsx`, and its own `.css`.
Import with the `@` alias, e.g. `import Button from '@/components/ui/Button'`.
Page content (copy, plans, team) lives in a `data.js` next to the page.

## Routes

`/`, `/about`, `/projects`, `/projects/:slug`, `/pricing`, `/contact`, `/terms`, `/privacy`, and a catch-all 404.

## Deployment

The site is a static SPA, deployed to a host that reads `public/_redirects` and `public/_headers` (Netlify / Cloudflare Pages style):

- Build command: `npm run build`
- Publish directory: `dist`
- `_redirects` forces HTTPS and the non-`www` domain, and falls back to `index.html` so deep links work with client-side routing.
- Remember to set the three `VITE_EMAILJS_*` variables in the host's environment settings.
- `sitemap.xml` in `public/` should be updated when routes are added.
