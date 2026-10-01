import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/** Counts from `from` up to `to` the first time it is seen. */
export const CountUp = ({ from = 0, to, className = '' }) => {
  const [ref, visible] = useScrollReveal(0.5);
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!visible) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduce ? 1 : 2600;
    const start = performance.now();
    let id;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(Math.round(from + (to - from) * (1 - Math.pow(1 - t, 3))));
      if (t < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [visible, from, to]);

  return <span ref={ref} className={className} aria-label={String(to)}>{value}</span>;
};

export default CountUp;
