import React, { useRef, useState, useEffect } from 'react';
import processImage from '../../assets/hero.png';
import './ProcessSection.css';

const steps = [
  {
    num: '01',
    label: 'Send us a brief.',
    desc: 'One paragraph is enough. We reply within two business days with whether the shape is right for what we do.',
  },
  {
    num: '02',
    label: 'One conversation.',
    desc: 'We define the goal, audience, scope, timeline, and cost before you commit to anything.',
  },
  {
    num: '03',
    label: 'Design and build.',
    desc: 'We turn the approved direction into a polished digital system with motion, structure, and interaction.',
  },
  {
    num: '04',
    label: 'Ship.',
    desc: 'The finished site lands as a clean, confident brand touchpoint ready for real users.',
  },
];

export const ProcessSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frameId = null;

    const updateActiveStep = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const triggerPoint = viewportHeight * 0.55;
      const scrollableDistance = Math.max(rect.height - viewportHeight * 0.35, 1);
      const progress = Math.min(Math.max((triggerPoint - rect.top) / scrollableDistance, 0), 0.999);
      const nextStep = Math.min(Math.floor(progress * steps.length), steps.length - 1);

      setActiveStep(nextStep);
    };

    const handleScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        updateActiveStep();
        frameId = null;
      });
    };

    updateActiveStep();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="process-section" ref={sectionRef}>
      <div className="process-inner">
        <div className={`process-topline ${visible ? 'is-visible' : ''}`}>
          <h2 className="process-title">How we work.</h2>
          <span className="process-kicker">// PROCESS</span>
        </div>

        <div className={`process-body ${visible ? 'is-visible' : ''}`}>
          <div className="process-steps">
            {steps.map((step, i) => (
              <article
                key={i}
                className={`process-step ${i === activeStep ? 'is-active' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="step-marker" />
                <span className="step-number">{step.num}</span>
                <div className="step-copy">
                  <h3 className="step-chip">{step.label}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="process-visual" aria-hidden="true">
            <img src={processImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
