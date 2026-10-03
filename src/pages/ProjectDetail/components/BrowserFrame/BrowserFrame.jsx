import { useEffect, useRef } from 'react';
import AssetSlot from '../AssetSlot';
import './BrowserFrame.css';

/**
 * Flat browser window. With `scroll`, the (tall) screenshot travels through the window as the
 * page scrolls past it, so the whole site is visible without a click. Transform only.
 */
export const BrowserFrame = ({ src, alt = '', url, scroll = false, slotName = 'desktop-1.webp', className = '' }) => {
  const frameRef = useRef(null);
  const viewportRef = useRef(null);
  const shotRef = useRef(null);

  useEffect(() => {
    const frame = frameRef.current;
    const viewport = viewportRef.current;
    const shot = shotRef.current;
    if (!scroll || !src || !frame || !viewport || !shot) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let raf = 0;
    const update = () => {
      raf = 0;
      const max = shot.offsetHeight - viewport.clientHeight;
      if (max <= 0) return;
      const rect = frame.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
      const q = Math.min(1, Math.max(0, (p - 0.2) / 0.6)); // reaches the bottom while still on screen
      shot.style.transform = `translate3d(0, ${(-q * max).toFixed(1)}px, 0)`;
    };
    const request = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        window.addEventListener('scroll', request, { passive: true });
        window.addEventListener('resize', request);
        request();
      } else {
        window.removeEventListener('scroll', request);
        window.removeEventListener('resize', request);
      }
    });
    io.observe(frame);
    shot.addEventListener('load', request);

    return () => {
      io.disconnect();
      shot.removeEventListener('load', request);
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
      cancelAnimationFrame(raf);
    };
  }, [scroll, src]);

  return (
    <div className={`pd-crop ${className}`.trim()}>
      <div ref={frameRef} className="pd-browser">
        <div className="pd-browser__bar" aria-hidden="true">
          <span className="pd-browser__dots"><i /><i /><i /></span>
          {url && <span className="pd-browser__url">{url}</span>}
        </div>
        <div ref={viewportRef} className="pd-browser__viewport">
          {src ? (
            <img ref={shotRef} className="pd-browser__shot" src={src} alt={alt} loading="lazy" decoding="async" />
          ) : (
            <AssetSlot
              name={slotName}
              hint="Website screenshot, 1440 wide. A tall full-page capture scrolls inside the window."
              ratio="16 / 10"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowserFrame;
