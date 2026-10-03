export const FILTERS = ['All', 'Brand identity', 'Web'];

const LOGO = '/assets/home/clients/';

// TODO: confirm with the studio. Everything marked "sample" (quotes, metrics, palettes, captions, story
// text) and every image in src/assets/projects/ is placeholder content: replace it with the real thing.
// Only the client names, logos and the Zeal / Priya
// testimonial facts are known; disciplines, summaries and results for the rest are
// placeholders.
//
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
    slug: 'zeal-by-roche',
    name: 'Zeal by Roche',
    logo: `${LOGO}zeal-by-roche-new.png`,
    color: '#dff36b',
    disciplines: ['Web'],
    services: ['Web design', 'Development'],
    summary: 'An online store designed to sell, with a clear path from first look to checkout.',
    url: 'zealbyroche.com',
    captions: { 'desktop-1': 'Zeal by Roche homepage', 'process-1': 'First sketches', 'process-2': 'Layout direction', 'process-3': 'Refined design', 'process-4': 'Final build', 'compare-1': 'The old site against the new one' },
    quote: { text: 'Sample testimonial: the new store made it easy for customers to find what they wanted and check out.', name: 'Client name', role: 'Founder, Zeal by Roche' },
    metrics: [{ value: 20, suffix: '%', label: 'More orders in the first month' }, { value: 35, suffix: '%', label: 'Faster page loads (sample)' }, { value: 4, suffix: 'x', label: 'More returning visitors (sample)' }],
    story: [{ title: 'The challenge', text: 'Sample copy: the old store hid its best products and lost people before checkout.' }, { title: 'The approach', text: 'Sample copy: we simplified the path from first look to payment and built it for speed.' }],
    result: '20% more orders in the first month.',
  },
  {
    slug: 'priya-products',
    name: 'Priya Products',
    color: '#d9c2fa',
    disciplines: ['Brand identity'],
    services: ['Visual identity', 'Tone of voice'],
    summary: 'A complete identity, from the visual system to the way the brand speaks.',
    brand: { palette: [{ name: 'Lavender', hex: '#d9c2fa', weight: 2 }, { name: 'Plum', hex: '#4b2a7b' }, { name: 'Cream', hex: '#fbf6ee' }, { name: 'Ink', hex: '#1a1423' }], fonts: [{ name: 'Sample Display', role: 'Headlines' }, { name: 'Sample Sans', role: 'Body text' }] },
    captions: { 'mockup-1': 'Business cards', 'mockup-2': 'Packaging', 'mockup-3': 'Signage', 'mockup-4': 'Stationery', 'process-1': 'First sketches', 'process-2': 'Mark exploration', 'process-3': 'Refined mark', 'process-4': 'Final system', 'compare-1': 'The old mark against the new one' },
    quote: { text: 'Sample testimonial: the identity finally looks and sounds like us.', name: 'Client name', role: 'Founder, Priya Products' },
    metrics: [{ value: 3, suffix: 'x', label: 'More enquiries after launch (sample)' }, { value: 12, suffix: '', label: 'Brand applications delivered (sample)' }],
    story: [{ title: 'The challenge', text: 'Sample copy: the brand looked different everywhere it appeared.' }, { title: 'The approach', text: 'Sample copy: one clear visual system and a tone of voice to match.' }],
    result: 'A clear uptick in client engagement after launch.',
  },
  {
    slug: 'hummingbirds',
    name: 'Hummingbirds Learning Center',
    logo: `${LOGO}hummingbirds.png`,
    color: '#f6c7a6',
    disciplines: ['Brand identity', 'Web'],
    services: ['Visual identity', 'Web design'],
    summary: 'A warm, friendly presence for a learning center, online and off.',
    url: 'hummingbirds.example',
    brand: { palette: [{ name: 'Apricot', hex: '#f6c7a6', weight: 2 }, { name: 'Leaf', hex: '#3f7a4f' }, { name: 'Sky', hex: '#cfe6f5' }, { name: 'Ink', hex: '#1d1a17' }], fonts: [{ name: 'Sample Rounded', role: 'Headlines' }, { name: 'Sample Sans', role: 'Body text' }] },
    captions: { 'mockup-1': 'Business cards', 'mockup-2': 'Packaging', 'mockup-3': 'Signage', 'mockup-4': 'Stationery', 'process-1': 'First sketches', 'process-2': 'Mark exploration', 'process-3': 'Refined mark', 'process-4': 'Final system', 'compare-1': 'The old mark against the new one' },
    quote: { text: 'Sample testimonial: parents tell us the new look feels as warm as the classroom.', name: 'Client name', role: 'Director, Hummingbirds Learning Center' },
    metrics: [{ value: 40, suffix: '%', label: 'More enquiry forms sent (sample)' }, { value: 2, suffix: '', label: 'Channels, one look: web and print (sample)' }],
    story: [{ title: 'The challenge', text: 'Sample copy: a caring centre with a cold, mismatched look.' }, { title: 'The approach', text: 'Sample copy: a friendly identity first, then a website built on top of it.' }],
  },
  {
    slug: 'tea-select',
    name: 'Tea Select',
    color: '#bfe3d0',
    disciplines: ['Brand identity'],
    services: ['Visual identity'],
    summary: 'A considered identity with the calm, premium feel of the product.',
    brand: { palette: [{ name: 'Jade', hex: '#bfe3d0', weight: 2 }, { name: 'Tea', hex: '#2f5d46' }, { name: 'Paper', hex: '#f7f4ec' }, { name: 'Ink', hex: '#14201a' }], fonts: [{ name: 'Sample Serif', role: 'Headlines' }, { name: 'Sample Sans', role: 'Body text' }] },
    captions: { 'mockup-1': 'Business cards', 'mockup-2': 'Packaging', 'mockup-3': 'Signage', 'mockup-4': 'Stationery', 'process-1': 'First sketches', 'process-2': 'Mark exploration', 'process-3': 'Refined mark', 'process-4': 'Final system', 'compare-1': 'The old mark against the new one' },
    quote: { text: 'Sample testimonial: the packaging looks as calm as the tea tastes.', name: 'Client name', role: 'Owner, Tea Select' },
    metrics: [{ value: 6, suffix: '', label: 'Packaging designs (sample)' }, { value: 25, suffix: '%', label: 'More repeat buyers (sample)' }],
    story: [{ title: 'The approach', text: 'Sample copy: quiet colour, generous space and a mark that feels premium.' }],
  },
  {
    slug: 'hypervoid',
    name: 'Hypervoid',
    logo: `${LOGO}hypervoid.png`,
    color: '#b9d4f7',
    disciplines: ['Web'],
    services: ['Web design', 'Development'],
    summary: 'A sharp, fast website with a bold, modern character.',
    url: 'hypervoid.example',
    captions: { 'desktop-1': 'Hypervoid homepage', 'process-1': 'First sketches', 'process-2': 'Layout direction', 'process-3': 'Refined design', 'process-4': 'Final build', 'compare-1': 'The old site against the new one' },
    quote: { text: 'Sample testimonial: fast, sharp and exactly the character we wanted.', name: 'Client name', role: 'Founder, Hypervoid' },
    metrics: [{ value: 98, suffix: '', label: 'Performance score (sample)' }, { value: 2, suffix: 'x', label: 'Longer time on site (sample)' }],
    story: [{ title: 'The approach', text: 'Sample copy: a bold, modern layout with no wasted weight, built to load instantly.' }],
  },
  {
    slug: 'maha-guru-center',
    name: 'Maha Guru Center',
    logo: `${LOGO}maha-guru-center.png`,
    color: '#f4e3a1',
    disciplines: ['Brand identity'],
    services: ['Visual identity'],
    summary: 'An identity that carries trust and tradition without feeling dated.',
    brand: { palette: [{ name: 'Saffron', hex: '#f4e3a1', weight: 2 }, { name: 'Maroon', hex: '#6b1f2a' }, { name: 'Ivory', hex: '#fbf7ea' }, { name: 'Ink', hex: '#201a14' }], fonts: [{ name: 'Sample Serif', role: 'Headlines' }, { name: 'Sample Sans', role: 'Body text' }] },
    captions: { 'mockup-1': 'Business cards', 'mockup-2': 'Packaging', 'mockup-3': 'Signage', 'mockup-4': 'Stationery', 'process-1': 'First sketches', 'process-2': 'Mark exploration', 'process-3': 'Refined mark', 'process-4': 'Final system', 'compare-1': 'The old mark against the new one' },
    quote: { text: 'Sample testimonial: it feels respectful of our tradition and still current.', name: 'Client name', role: 'Trustee, Maha Guru Center' },
    metrics: [{ value: 8, suffix: '', label: 'Brand applications (sample)' }, { value: 100, suffix: '%', label: 'Consistent across print and web (sample)' }],
    story: [{ title: 'The approach', text: 'Sample copy: classic proportions and warm colour, set with modern restraint.' }],
  },
  {
    slug: 'the-fabulous-getaway',
    name: 'The Fabulous Getaway',
    logo: `${LOGO}the-fabulous-getaway.png`,
    color: '#f2b8c6',
    disciplines: ['Web'],
    services: ['Web design', 'Development'],
    summary: 'A travel website that makes you want to book before you finish scrolling.',
    url: 'fabulousgetaway.example',
    captions: { 'desktop-1': 'The Fabulous Getaway homepage', 'process-1': 'First sketches', 'process-2': 'Layout direction', 'process-3': 'Refined design', 'process-4': 'Final build', 'compare-1': 'The old site against the new one' },
    quote: { text: 'Sample testimonial: visitors now book before they reach the bottom of the page.', name: 'Client name', role: 'Owner, The Fabulous Getaway' },
    metrics: [{ value: 45, suffix: '%', label: 'More booking requests (sample)' }, { value: 60, suffix: '%', label: 'Of visits on mobile (sample)' }],
    story: [{ title: 'The approach', text: 'Sample copy: big photography, a short booking path and nothing in the way.' }],
  },
  {
    slug: 'essa-art-studio',
    name: 'Essa Art Studio',
    logo: `${LOGO}essa-art-studio.png`,
    color: '#cfe0b4',
    disciplines: ['Brand identity'],
    services: ['Visual identity'],
    summary: 'A confident, expressive identity for a working art studio.',
    brand: { palette: [{ name: 'Sage', hex: '#cfe0b4', weight: 2 }, { name: 'Moss', hex: '#4d5e2e' }, { name: 'Clay', hex: '#c8773f' }, { name: 'Ink', hex: '#1c1d16' }], fonts: [{ name: 'Sample Display', role: 'Headlines' }, { name: 'Sample Sans', role: 'Body text' }] },
    captions: { 'mockup-1': 'Business cards', 'mockup-2': 'Packaging', 'mockup-3': 'Signage', 'mockup-4': 'Stationery', 'process-1': 'First sketches', 'process-2': 'Mark exploration', 'process-3': 'Refined mark', 'process-4': 'Final system', 'compare-1': 'The old mark against the new one' },
    quote: { text: 'Sample testimonial: expressive, confident, and unmistakably ours.', name: 'Client name', role: 'Artist, Essa Art Studio' },
    metrics: [{ value: 5, suffix: '', label: 'Print pieces designed (sample)' }, { value: 3, suffix: 'x', label: 'More studio visits (sample)' }],
    story: [{ title: 'The approach', text: 'Sample copy: loose, confident marks that look made by hand.' }],
  },
  {
    slug: 'kings-choice',
    name: 'Kings Choice',
    logo: `${LOGO}kings-choice.png`,
    color: '#e3dcff',
    disciplines: ['Brand identity'],
    services: ['Visual identity'],
    summary: 'A strong, memorable mark built to stand out on shelf and screen.',
    brand: { palette: [{ name: 'Lilac', hex: '#e3dcff', weight: 2 }, { name: 'Royal', hex: '#3b2a8f' }, { name: 'Gold', hex: '#d9a833' }, { name: 'Ink', hex: '#15122b' }], fonts: [{ name: 'Sample Display', role: 'Headlines' }, { name: 'Sample Sans', role: 'Body text' }] },
    captions: { 'mockup-1': 'Business cards', 'mockup-2': 'Packaging', 'mockup-3': 'Signage', 'mockup-4': 'Stationery', 'process-1': 'First sketches', 'process-2': 'Mark exploration', 'process-3': 'Refined mark', 'process-4': 'Final system', 'compare-1': 'The old mark against the new one' },
    quote: { text: 'Sample testimonial: the mark stands out on the shelf and on the screen.', name: 'Client name', role: 'Founder, Kings Choice' },
    metrics: [{ value: 7, suffix: '', label: 'Product labels (sample)' }, { value: 30, suffix: '%', label: 'More shelf recognition (sample)' }],
    story: [{ title: 'The approach', text: 'Sample copy: a strong, simple mark built to be recognised at a glance.' }],
  },
];

export const getProject = (slug) => {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  return { project: PROJECTS[index], index, next: PROJECTS[(index + 1) % PROJECTS.length] };
};
