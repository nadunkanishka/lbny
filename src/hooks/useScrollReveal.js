import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — Fires once when the element enters the viewport.
 * Returns a [ref, isVisible] tuple.
 * @param {number} threshold  0–1, fraction of element visible to trigger (default 0.15)
 * @param {string} rootMargin Shift the trigger point (default '0px 0px -60px 0px')
 */
export function useScrollReveal(threshold = 0.15, rootMargin = '0px 0px -60px 0px') {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // fire once only
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
