import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './StatsSection.css';

const stats = [
  { value: 8,   suffix: '+',  label: 'Years of Experience' },
  { value: 15,  suffix: '+',  label: 'Industries Served'   },
  { value: 100, suffix: '+',  label: 'Projects Shipped'    },
  { value: 73,  suffix: '%',  label: 'Return Clients'      },
];

function useCountUp(target, duration = 1600, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const raf = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(raf);
      else setCount(target);
    };
    requestAnimationFrame(raf);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, animate, delayClass }) {
  const count = useCountUp(stat.value, 1600, animate);
  return (
    <article className={`stats-card reveal reveal--scale ${delayClass} ${animate ? 'is-visible' : ''}`}>
      <p className="stats-card__value">
        <span className="stats-card__number">{count}</span>
        <span className="stats-card__suffix">{stat.suffix}</span>
      </p>
      <p className="stats-card__label">{stat.label}</p>
    </article>
  );
}

export const StatsSection = () => {
  const [sectionRef, sectionVisible] = useScrollReveal(0.15);
  // We still track a separate ref for the grid to trigger count-ups
  const gridRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  const delayClasses = ['reveal-d1', 'reveal-d2', 'reveal-d3', 'reveal-d4'];

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-section__inner">

        {/* Headline */}
        <div className="stats-section__header">
          <h2 className={`stats-section__headline reveal ${sectionVisible ? 'is-visible' : ''}`}>
            Good work begins<br />
            with <span className="stats-section__headline-accent">good people</span>.
          </h2>
          <p className={`stats-section__subtext reveal reveal-d2 ${sectionVisible ? 'is-visible' : ''}`}>
            We work closely with founders and teams who care about the details.
            Every collaboration begins with listening, then making something useful and distinct together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-section__grid" ref={gridRef}>
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              animate={animate}
              delayClass={delayClasses[i]}
            />
          ))}
        </div>

        {/* CTA */}
        <div className={`stats-section__cta reveal reveal-d2 ${animate ? 'is-visible' : ''}`}>
          <Link to="/contact" className="stats-section__cta-btn">
            <span>Contact Us</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
