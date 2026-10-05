import React from 'react';
import Button from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Motion';
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


      {/* Center Stage Area: Title Wordmark & Logo Layered on the Exact Same Center Axis */}
      <Reveal variant="scale" className="hero__asset-stage">
        {/* Title Wordmark Container (Layered Behind Logo) */}
        <div className="hero__title-container">
          <div className="hero__title-asset-wrapper">
            <img
              src="/assets/brand/wordmark-white.svg"
              alt="Studio Liberny Wordmark"
              className="hero__title-img title-dark-mode"
              width="1000"
              height="408"
              fetchPriority="high"
              decoding="async"
            />
            <img
              src="/assets/brand/wordmark-black.svg"
              alt="Studio Liberny Wordmark"
              className="hero__title-img title-light-mode"
              width="1000"
              height="408"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>

        {/* 3D Purple Logo & Floating Micro Badges Wrapper */}
        <div className="asset__wrapper">
          <div className="hero__logo-glow-bg"></div>

          <img
            src="/assets/brand/icon-purple.svg"
            alt="Studio Liberny 3D Logo Icon"
            className="moro-logo-asset"
            width="240"
            height="240"
            decoding="async"
          />

          <div className="moro-asset-shadow"></div>

          {/* Micro Glass Badges Wrapper */}
          <div className="hero__pills-wrapper">
            {pills.map((pill, idx) => (
              <div key={idx} className={`hero__micro-pill pill-${pill.pos}`}>
                <span className="micro-dot">•</span>
                <span className="micro-text">{pill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Headline, Subtitle & CTA Group */}
      <div className="hero__bottom-content">
        <Reveal as="h1" delay={1} className="hero__headline">
          Make it <span className="hero__headline-accent">matter.</span>
        </Reveal>

        <Reveal as="p" delay={2} className="hero__description">
          We shape brand identities and digital experiences that make an idea impossible to ignore.
        </Reveal>

        <Reveal delay={3} className="hero__cta-group">
          <Button to="/projects" variant="secondary" arrow={false}>Explore Projects</Button>
          <Button to="/about">About Us</Button>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
