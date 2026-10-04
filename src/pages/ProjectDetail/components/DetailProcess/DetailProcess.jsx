import { useRef, useState } from 'react';
import { Reveal } from '@/components/ui/Motion';
import AssetSlot from '../AssetSlot';
import SectionHead from '../SectionHead';
import Stage from '../Stage';
import './DetailProcess.css';

const STEP_NAMES = ['Sketch', 'Direction', 'Refine', 'Final'];

/** From first marks to final: a swipeable filmstrip. Files: process-1, process-2 ... */
export const DetailProcess = ({ project, assets, slots, number }) => {
  const stripRef = useRef(null);
  const [active, setActive] = useState(0); // phones show this one step; desktop keeps the scrolling strip
  const items = assets.process.length
    ? assets.process
    : slots
      ? [1, 2, 3, 4].map((n) => ({ src: null, key: `process-${n}` }))
      : [];

  const scrollBy = (dir) => {
    const strip = stripRef.current;
    if (!strip) return;
    setActive((a) => Math.min(items.length - 1, Math.max(0, a + dir)));
    if (window.matchMedia('(max-width: 760px)').matches) return; // phones: CSS shows only the active step
    // Go to the neighbouring step's snap position (not a fixed distance, which drifts and skips steps)
    const steps = [...strip.children];
    const pad = parseFloat(getComputedStyle(strip).paddingLeft) || 0;
    const stripLeft = strip.getBoundingClientRect().left;
    const snapLeft = (el) => el.getBoundingClientRect().left - stripLeft + strip.scrollLeft - pad;
    const current = steps.reduce(
      (best, el, i) => (Math.abs(snapLeft(el) - strip.scrollLeft) < Math.abs(snapLeft(steps[best]) - strip.scrollLeft) ? i : best),
      0,
    );
    const target = steps[Math.min(steps.length - 1, Math.max(0, current + dir))];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    strip.scrollTo({ left: snapLeft(target), behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <Stage tone="paper" className="pd-process">
      <div className="pj-wrap">
        <SectionHead number={number} label="Process" title="How we got there" project={project.name} />

        <Reveal className="pd-strip-wrap">
          <ol ref={stripRef} className="pd-strip" aria-label="Process steps, swipe to see more">
            {items.map((item, i) => {
              const name = project.captions?.[item.key] ?? STEP_NAMES[i] ?? `Step ${i + 1}`;
              return (
                <li key={item.key} className={`pd-step${i === active ? ' is-active' : ''}`}>
                  <div className="pd-step__media">
                    {item.src ? (
                      <img src={item.src} alt={`${project.name}, ${name}`} loading="lazy" decoding="async" />
                    ) : (
                      <AssetSlot name={`${item.key}.webp`} hint="Sketch, wireframe, direction or final" ratio="4 / 3" />
                    )}
                  </div>
                  <p className="pd-step__label">
                    <span>Step {String(i + 1).padStart(2, '0')}</span>
                    <b>{name}</b>
                  </p>
                </li>
              );
            })}
          </ol>

          {items.length > 1 && (
            <div className="pd-strip__nav">
              <span className="pd-strip__count" aria-live="polite">
                {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
              </span>
              <button type="button" className="pd-strip__btn" aria-label="Previous step" data-end={active === 0 || undefined} onClick={() => scrollBy(-1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
              <button type="button" className="pd-strip__btn" aria-label="Next step" data-end={active === items.length - 1 || undefined} onClick={() => scrollBy(1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          )}
        </Reveal>
      </div>
    </Stage>
  );
};

export default DetailProcess;
