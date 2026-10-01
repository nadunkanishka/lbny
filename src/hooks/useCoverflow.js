import { useRef, useState } from 'react';

/**
 * State for a coverflow-style carousel: one active item with its neighbours positioned either side.
 * `offsetOf(i)` is the item's signed distance from the active one (wraps around), which the
 * CSS turns into position, scale and tilt.
 */
export function useCoverflow(count) {
  const [active, setActive] = useState(0);
  const touchX = useRef(null);

  const step = (dir) => setActive((a) => (a + dir + count) % count);

  const offsetOf = (i) => {
    let o = (i - active + count) % count;
    if (o > count / 2) o -= count;
    return o;
  };

  const swipeHandlers = {
    onTouchStart: (e) => {
      touchX.current = e.touches[0].clientX;
    },
    onTouchEnd: (e) => {
      if (touchX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchX.current;
      touchX.current = null;
      if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
    },
  };

  return { active, setActive, step, offsetOf, swipeHandlers };
}
