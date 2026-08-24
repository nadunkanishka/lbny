import { useEffect } from 'react';

const BASE_URL = 'https://studioliberny.com';
const DEFAULT_TITLE = 'Studio Liberny';
const DEFAULT_DESCRIPTION =
  'Studio Liberny is a creative design studio crafting premium digital experiences, stunning visuals, and thoughtful branding for forward-thinking clients.';

/**
 * useSEO — dynamically updates the page title, meta description,
 * og:title, og:description, og:url, and the canonical link on every route.
 *
 * @param {Object} options
 * @param {string} options.title       - Page-specific title (appended with " | Studio Liberny")
 * @param {string} options.description - Page-specific meta description (max ~160 chars)
 * @param {string} options.path        - Relative path, e.g. "/about" (defaults to current pathname)
 */
export function useSEO({ title, description, path } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Studio Liberny` : DEFAULT_TITLE;
    const fullDescription = description || DEFAULT_DESCRIPTION;
    const canonicalUrl = `${BASE_URL}${path || window.location.pathname}`;

    // Title
    document.title = fullTitle;

    // Helper: find or create a <meta> tag
    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrValue] = attr.split('=');
        el.setAttribute(attrName, attrValue.replace(/"/g, ''));
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
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

    // Primary meta
    setMeta('meta[name="title"]', 'name=title', fullTitle);
    setMeta('meta[name="description"]', 'name=description', fullDescription);

    // Open Graph
    setMeta('meta[property="og:title"]', 'property=og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property=og:description', fullDescription);
    setMeta('meta[property="og:url"]', 'property=og:url', canonicalUrl);

    // Twitter
    setMeta('meta[name="twitter:title"]', 'name=twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name=twitter:description', fullDescription);
    setMeta('meta[name="twitter:url"]', 'name=twitter:url', canonicalUrl);

    // Canonical
    setLink('canonical', canonicalUrl);
  }, [title, description, path]);
}

export default useSEO;
