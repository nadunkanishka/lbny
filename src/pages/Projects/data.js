export const FILTERS = ['All', 'Web'];

const LOGO = '/assets/home/clients/';

// Project images are NOT listed here. Drop them into src/assets/projects/<slug>/ and the project
// page picks them up by filename (see src/pages/ProjectDetail/assets.js):
//   cover.*  desktop-1.* (tall full-page works best)  mobile-1.*  logo-1.* / logo-2.*  mockup-1.*
// Optional per project, for things an image can't carry:
//   `url`        shown in the browser window, e.g. 'zealbyroche.com'
//   `brand`      { palette: [{ name, hex, weight? }], fonts: [{ name, role, family? }] }
//   `captions`   { 'mockup-1': 'Business cards', 'process-1': 'First sketches' }  (keyed by image filename
//                without extension; also 'compare-1' for the before/after caption)
//   `quote`      { text, name, role }  one big client quote
//   `metrics`    [{ value: 20, suffix: '%', label: 'More orders in the first month' }]  counting-up numbers
//   Also supported as files: before-1 + after-1 (comparison slider), process-1, process-2 ... (filmstrip)
//   `story`      [{ title, text }] long-form sections
//   `image`      replaces the generated plate used in the project list preview
export const PROJECTS = [
  {
    slug: 'essa-art-studio',
    name: 'Essa Art Studio',
    client: 'Essa Almohannadi',
    country: 'Qatar',
    logo: `${LOGO}essa-art-studio.png`,
    color: '#cfe0b4',
    disciplines: ['Web'],
    services: ['Web design'],
    summary: 'A confident, expressive website for a working art studio.',
    url: 'essaartstudio.com',
    brand: { palette: [{ name: 'Primary Light', hex: '#FEFFFA', weight: 2 }, { name: 'Primary Dark', hex: '#070707', weight: 2 }, { name: 'Accent Green', hex: '#37451C' }], fonts: [{ name: 'Helvetica Now Display Medium', role: 'Headings and key messages' }, { name: 'Helvetica Now Display Regular', role: 'Body text' }, { name: 'Helvetica Now Display Medium Italic', role: 'Accents, used sparingly' }] },
    quote: { text: '', name: 'Essa Almohannadi', role: 'Artist, Essa Art Studio' },
    metrics: [{ value: 5, suffix: '', label: 'Pages designed' }, { value: 3, suffix: 'x', label: 'Faster than before' }],
    story: [{ title: 'The approach', text: 'Essa’s signature is the brand, so the website steps back and lets it lead. A black and white foundation with a single green accent, generous white space and typography-led layouts give the artwork a quiet, gallery-style stage. Everything is built mobile first, so the work reads just as well on a phone as on a desktop.' }],
  },
];

export const getProject = (slug) => {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  return { project: PROJECTS[index], index, next: PROJECTS[(index + 1) % PROJECTS.length] };
};

/** Live site link for a project; placeholder `.example` domains return null so no dead links render. */
export const siteHref = (project) =>
  project.url && !project.url.endsWith('.example') ? `https://${project.url}` : null;
