import { useEffect } from 'react';

const BASE_URL = 'https://studioliberny.com';
const DEFAULT_TITLE = 'Studio Liberny | Creative Design Studio';
const DEFAULT_DESCRIPTION =
  'Studio Liberny is a creative design studio crafting premium digital experiences, stunning visuals, and thoughtful branding for forward-thinking clients.';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

/**
 * useSEO — dynamically updates the document title, meta descriptions,
 * robots directives, Open Graph, Twitter cards, and canonical link per route.
 *
 * @param {Object} options
 * @param {string} [options.title]       - Page title (appended with " | Studio Liberny" if not included)
 * @param {string} [options.description] - Page meta description (150-160 chars recommended)
 * @param {string} [options.path]        - Canonical path, e.g. "/about" (defaults to window.location.pathname)
 * @param {string} [options.image]       - Social preview image URL (defaults to /og-image.png)
 * @param {boolean} [options.noindex]    - Set to true only if page should NOT be indexed (default false)
 */
export function useSEO({ title, description, path, image, noindex = false } = {}) {
  useEffect(() => {
    const fullTitle = title
      ? (title.includes('Studio Liberny') ? title : `${title} | Studio Liberny`)
      : DEFAULT_TITLE;
    const fullDescription = description || DEFAULT_DESCRIPTION;
    const canonicalUrl = `${BASE_URL}${path || window.location.pathname}`;
    const socialImage = image || DEFAULT_IMAGE;
    const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow';

    // Title
    document.title = fullTitle;

    // Helper: find or create a <meta> tag
    const setMeta = (selector, attrName, attrValue, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper: find or create a <link> tag
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Primary meta tags
    setMeta('meta[name="title"]', 'name', 'title', fullTitle);
    setMeta('meta[name="description"]', 'name', 'description', fullDescription);
    setMeta('meta[name="robots"]', 'name', 'robots', robotsContent);

    // Open Graph
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', fullDescription);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[property="og:image"]', 'property', 'og:image', socialImage);
    setMeta('meta[property="og:image:width"]', 'property', 'og:image:width', '1200');
    setMeta('meta[property="og:image:height"]', 'property', 'og:image:height', '630');
    setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', fullTitle);

    // Twitter Card
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', fullDescription);
    setMeta('meta[name="twitter:url"]', 'name', 'twitter:url', canonicalUrl);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', socialImage);
    setMeta('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', fullTitle);

    // Canonical Link
    setLink('canonical', canonicalUrl);
  }, [title, description, path, image, noindex]);
}

export default useSEO;
