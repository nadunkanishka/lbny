/**
 * Project images are picked up by filename from src/assets/projects/<slug>/ :
 *   cover.*          hero visual (optional)
 *   desktop-1.* ...  website screenshots (tall full-page works best)
 *   mobile-1.*  ...  phone screenshots
 *   logo-1.*    ...  logo variants (1 = primary, 2 = reversed)
 *   mockup-1.*  ...  brand applications
 *   before-1.* + after-1.*  ...  comparison slider pairs
 *   process-1.* ...  sketches / wireframes / steps (shown in order)
 */
const FILES = import.meta.glob('/src/assets/projects/*/*.{webp,png,jpg,jpeg,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const KINDS = ['cover', 'desktop', 'mobile', 'logo', 'mockup', 'before', 'after', 'process'];
const bySlug = {};

for (const [path, src] of Object.entries(FILES)) {
  const m = path.match(/\/projects\/([^/]+)\/([^/]+)\.[a-z0-9]+$/i);
  if (!m) continue;
  const [, slug, stem] = m;
  const kind = stem.replace(/-?\d+$/, '').toLowerCase();
  if (!KINDS.includes(kind)) continue;
  const n = parseInt(stem.match(/(\d+)$/)?.[1] ?? '0', 10);
  const group = (bySlug[slug] ??= {});
  (group[kind] ??= []).push({ src, key: stem.toLowerCase(), n });
}

export const getProjectAssets = (slug) => {
  const g = bySlug[slug] ?? {};
  const list = (kind) => [...(g[kind] ?? [])].sort((a, b) => a.n - b.n);
  const assets = {
    cover: list('cover')[0] ?? null,
    desktop: list('desktop'),
    mobile: list('mobile'),
    logo: list('logo'),
    mockup: list('mockup'),
    before: list('before'),
    after: list('after'),
    process: list('process'),
  };
  assets.any = Boolean(
    assets.cover || assets.desktop.length || assets.mobile.length || assets.logo.length || assets.mockup.length ||
      assets.before.length || assets.after.length || assets.process.length
  );
  return assets;
};

/** Empty image slots are drawn in development, or on the live site with ?slots in the URL. */
export const showSlots = () =>
  import.meta.env.DEV || (typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('slots'));
