import React, { useEffect, useRef, useState } from 'react';
import './StatsSection.css';

const stats = [
  { value: 5, suffix: '', label: 'Years in Motion', variant: 'tall' },
  { value: 50, suffix: '+', label: 'Projects Delivered', variant: 'hero' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', variant: 'small' },
  { value: 3, suffix: 'x', label: 'Avg. ROI Increase', variant: 'small' },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, animate }) {
  const count = useCountUp(stat.value, 1800, animate);
  return (
    <article className={`stat-card stat-card--${stat.variant}`}>
      <div className="stat-value">
        <span className="stat-number">{count}</span>
        <span className="stat-suffix">{stat.suffix}</span>
      </div>
      <p className="stat-label">{stat.label}</p>
    </article>
  );
}

export const StatsSection = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-inner">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} animate={animate} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
