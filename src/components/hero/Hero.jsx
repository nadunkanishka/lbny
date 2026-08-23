import React from 'react';
import './Hero.css';

export const Hero = () => {
  const pills = [
    { label: 'CREATIVE STRATEGY', pos: 'top-left' },
    { label: 'WEB DEVELOPMENT', pos: 'top-right' },
    { label: 'BRAND STRATEGY', pos: 'bottom-left' },
    { label: 'UI/UX ARCHITECTURE', pos: 'bottom-right' },
  ];

  return (
    <section className="moro-hero" id="about">
      {/* Ambient Technical Grid & Glow Background */}
      <div className="hero__bg-grid"></div>
      <div className="hero__bg-aura"></div>

      {/* Top Meta Tag */}
      <div className="hero__top-meta">
        <div className="meta-tag">COLOMBO / SRI LANKA</div>
      </div>

      {/* Full-Cover Title Container using Official Vector SVG Assets */}
      <div className="hero__title-container">
        <div className="hero__title-asset-wrapper">
          <img
            src="/assets/wordmark-white.svg"
            alt="STUDIO L!BERNY"
            className="hero__title-img title-dark-mode"
          />
          <img
            src="/assets/wordmark-black.svg"
            alt="STUDIO L!BERNY"
            className="hero__title-img title-light-mode"
          />
        </div>
      </div>

      {/* Center Stage Area with Official Purple Vector SVG Logo Asset */}
      <div className="hero__asset-stage">
        <div className="asset__wrapper">
          <div className="hero__logo-glow-bg"></div>

          <img
            src="/assets/icon-purple.svg"
            alt="Studio Liberny Logo"
            className="moro-logo-asset"
          />

          <div className="moro-asset-shadow"></div>

          {/* Symmetrical High-Visibility Floating Glass Badges */}
          {pills.map((pill, idx) => (
            <div key={idx} className={`hero__micro-pill pill-${pill.pos}`}>
              <span className="micro-dot">•</span>
              <span className="micro-text">{pill.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtitle Tagline & CTA Group */}
      <div className="hero__bottom-content">
        <p className="hero__description">
          Studio Liberny builds cohesive brands and high-performance digital platforms from strategy through execution to drive measurable results.
        </p>

        <div className="hero__cta-group">
          <a href="#projects" className="hero-cta-btn primary">
            <span>Explore Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#contact" className="hero-cta-btn secondary">
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
