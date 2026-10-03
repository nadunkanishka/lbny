# Graph Report - lbny  (2026-10-03)

## Corpus Check
- 141 files · ~317,091 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 44 file(s) not represented in the graph (top: .css 39, (none) 3, .ico 1)

## Summary
- 254 nodes · 614 edges · 11 communities (9 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- App Shell & Layout
- UI Motion Primitives
- Dependencies & Package
- Home Sections (Clients/FAQ)
- SEO & SPA Entry
- Navbar & Contact
- Project Index & Cursor
- Pricing Page
- Lint Config
- Coverflow Nav

## God Nodes (most connected - your core abstractions)
1. `Reveal()` - 34 edges
2. `react` - 24 edges
3. `Button()` - 22 edges
4. `useScrollReveal()` - 22 edges
5. `MaskLines()` - 20 edges
6. `useSEO()` - 19 edges
7. `PageShell()` - 17 edges
8. `App()` - 13 edges
9. `AboutPage()` - 12 edges
10. `HomePage()` - 10 edges

## Surprising Connections (you probably didn't know these)
- `robots.txt Rules` --semantically_similar_to--> `SEO, Open Graph and Twitter Meta Tags`  [INFERRED] [semantically similar]
  public/robots.txt → index.html
- `robots.txt Rules` --references--> `sitemap.xml`  [EXTRACTED]
  public/robots.txt → README.md
- `App()` --calls--> `Navbar()`  [EXTRACTED]
  src/App.jsx → src/components/layout/Navbar/Navbar.jsx
- `App()` --calls--> `AboutPage()`  [EXTRACTED]
  src/App.jsx → src/pages/About/AboutPage.jsx
- `App()` --calls--> `HomePage()`  [EXTRACTED]
  src/App.jsx → src/pages/Home/HomePage.jsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **SEO and Crawler Configuration** — index_seo_meta_tags, index_json_ld, public_robots_rules, readme_sitemap [INFERRED 0.85]
- **Static SPA Deployment Flow** — readme_deployment, readme_redirects_headers, readme_env_variables, readme_routes [EXTRACTED 0.95]

## Communities (11 total, 2 thin omitted)

### Community 0 - "App Shell & Layout"
Cohesion: 0.08
Nodes (21): react-dom, react-router-dom, App(), Footer(), PageHeader(), PageShell(), LegalSection(), useSEO() (+13 more)

### Community 1 - "UI Motion Primitives"
Cohesion: 0.12
Nodes (19): CountUp(), MaskLines(), Reveal(), useCoverflow(), AboutPage(), AboutClosing(), AboutHero(), AboutMean() (+11 more)

### Community 2 - "Dependencies & Package"
Cohesion: 0.07
Nodes (28): dependencies, @emailjs/browser, gsap, react, react-dom, react-router-dom, devDependencies, oxlint (+20 more)

### Community 3 - "Home Sections (Clients/FAQ)"
Cohesion: 0.15
Nodes (15): react, clients, ClientsSection(), faqs, FaqSection(), Hero(), ServicesSection(), StatCard() (+7 more)

### Community 4 - "SEO & SPA Entry"
Cohesion: 0.11
Nodes (19): Design Services (Brand Identity, Creative Strategy, Web Design), FAQPage Content, Google Fonts Plus Jakarta Sans, index.html SPA Entry, JSON-LD Structured Data, src/main.jsx Entry Script, Noscript Fallback, SEO, Open Graph and Twitter Meta Tags (+11 more)

### Community 5 - "Navbar & Contact"
Cohesion: 0.15
Nodes (13): @emailjs/browser, gsap, Logo(), Navbar(), ArrowIcon(), BUDGETS, Contact(), InstagramIcon() (+5 more)

### Community 6 - "Project Index & Cursor"
Cohesion: 0.18
Nodes (8): useCursorFollow(), canFollow(), ProjectIndex(), ProjectPlate(), ProjectsClosing(), FILTERS, PROJECTS, ProjectsPage()

### Community 7 - "Pricing Page"
Cohesion: 0.24
Nodes (4): PricingCustom(), FAQS, PLANS, PricingPage()

### Community 9 - "Lint Config"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

## Knowledge Gaps
- **39 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+34 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 53 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Home Sections (Clients/FAQ)` to `App Shell & Layout`, `UI Motion Primitives`, `Dependencies & Package`, `Navbar & Contact`, `Project Index & Cursor`, `Coverflow Nav`?**
  _High betweenness centrality (0.244) - this node is a cross-community bridge._
- **Why does `Reveal()` connect `UI Motion Primitives` to `App Shell & Layout`, `Home Sections (Clients/FAQ)`, `Project Index & Cursor`, `Pricing Page`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **Why does `react-router-dom` connect `App Shell & Layout` to `UI Motion Primitives`, `Dependencies & Package`, `Navbar & Contact`, `Project Index & Cursor`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _39 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App Shell & Layout` be split into smaller, more focused modules?**
  _Cohesion score 0.08315863032844165 - nodes in this community are weakly interconnected._
- **Should `UI Motion Primitives` be split into smaller, more focused modules?**
  _Cohesion score 0.11529411764705882 - nodes in this community are weakly interconnected._
- **Should `Dependencies & Package` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._