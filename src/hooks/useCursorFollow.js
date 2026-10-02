import { useEffect } from 'react';

/**
 * useCursorFollow: moves `ref.current` toward the mouse with eased (lerped) motion.
 * Writes transform directly (no re-renders). Pass `active=false` to turn it off.
 */
export function useCursorFollow(ref, active, { ease = 0.16, gutter = 400 } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!active || !el) return;

    const pos = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let raf = 0;
    let seeded = false;

    const tick = () => {
      pos.x += (target.x - pos.x) * ease;
      pos.y += (target.y - pos.y) * ease;
      el.style.transform = `translate3d(${pos.x.toFixed(1)}px, ${pos.y.toFixed(1)}px, 0)`;
      const settled = Math.abs(target.x - pos.x) < 0.1 && Math.abs(target.y - pos.y) < 0.1;
      raf = settled ? 0 : requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      // keep the preview inside the viewport on the right edge
      target.x = Math.min(e.clientX, window.innerWidth - gutter);
      target.y = e.clientY;
      if (!seeded) {
        pos.x = target.x;
        pos.y = target.y;
        seeded = true;
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [ref, active, ease, gutter]);
}
