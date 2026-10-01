import React from 'react';
import './CoverflowNav.css';

const Arrow = ({ dir }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {dir === 'prev'
      ? (<><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></>)
      : (<><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></>)}
  </svg>
);

/** Prev / next arrows with position dots for a coverflow carousel (mobile only). */
export const CoverflowNav = ({ count, active, onPrev, onNext, label = 'Carousel controls', itemLabel = 'item' }) => (
  <div className="lb-cf-nav" aria-label={label}>
    <button type="button" className="lb-cf-arrow" aria-label={`Previous ${itemLabel}`} onClick={onPrev}>
      <Arrow dir="prev" />
    </button>
    <div className="lb-cf-dots" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className={`lb-cf-dot${i === active ? ' is-active' : ''}`} />
      ))}
    </div>
    <button type="button" className="lb-cf-arrow" aria-label={`Next ${itemLabel}`} onClick={onNext}>
      <Arrow dir="next" />
    </button>
  </div>
);

export default CoverflowNav;
