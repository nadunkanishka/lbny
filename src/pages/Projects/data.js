export const FILTERS = ['All', 'Brand identity', 'Web'];

const LOGO = '/assets/home/clients/';

// TODO: confirm with the studio. Only the client names, logos and the Zeal / Priya
// testimonial facts are known; disciplines, summaries and results for the rest are
// placeholders. Optional per project: `image` replaces the generated plate with a real
// screenshot; `story` ([{ title, text }]) adds long-form sections to the project page;
// `gallery` (array of image paths) adds a full-width image stack.
export const PROJECTS = [
  {
    slug: 'zeal-by-roche',
    name: 'Zeal by Roche',
    logo: `${LOGO}zeal-by-roche-new.png`,
    color: '#dff36b',
    disciplines: ['Web'],
    services: ['Web design', 'Development'],
    summary: 'An online store designed to sell, with a clear path from first look to checkout.',
    result: '20% more orders in the first month.',
  },
  {
    slug: 'priya-products',
    name: 'Priya Products',
    color: '#d9c2fa',
    disciplines: ['Brand identity'],
    services: ['Visual identity', 'Tone of voice'],
    summary: 'A complete identity, from the visual system to the way the brand speaks.',
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
  },
  {
    slug: 'tea-select',
    name: 'Tea Select',
    color: '#bfe3d0',
    disciplines: ['Brand identity'],
    services: ['Visual identity'],
    summary: 'A considered identity with the calm, premium feel of the product.',
  },
  {
    slug: 'hypervoid',
    name: 'Hypervoid',
    logo: `${LOGO}hypervoid.png`,
    color: '#b9d4f7',
    disciplines: ['Web'],
    services: ['Web design', 'Development'],
    summary: 'A sharp, fast website with a bold, modern character.',
  },
  {
    slug: 'maha-guru-center',
    name: 'Maha Guru Center',
    logo: `${LOGO}maha-guru-center.png`,
    color: '#f4e3a1',
    disciplines: ['Brand identity'],
    services: ['Visual identity'],
    summary: 'An identity that carries trust and tradition without feeling dated.',
  },
  {
    slug: 'the-fabulous-getaway',
    name: 'The Fabulous Getaway',
    logo: `${LOGO}the-fabulous-getaway.png`,
    color: '#f2b8c6',
    disciplines: ['Web'],
    services: ['Web design', 'Development'],
    summary: 'A travel website that makes you want to book before you finish scrolling.',
  },
  {
    slug: 'essa-art-studio',
    name: 'Essa Art Studio',
    logo: `${LOGO}essa-art-studio.png`,
    color: '#cfe0b4',
    disciplines: ['Brand identity'],
    services: ['Visual identity'],
    summary: 'A confident, expressive identity for a working art studio.',
  },
  {
    slug: 'kings-choice',
    name: 'Kings Choice',
    logo: `${LOGO}kings-choice.png`,
    color: '#e3dcff',
    disciplines: ['Brand identity'],
    services: ['Visual identity'],
    summary: 'A strong, memorable mark built to stand out on shelf and screen.',
  },
];

export const getProject = (slug) => {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  return { project: PROJECTS[index], index, next: PROJECTS[(index + 1) % PROJECTS.length] };
};
