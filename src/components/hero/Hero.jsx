import React from 'react';
import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero-container" id="about">
      <div className="hero-badge">
        <span className="badge-dot"></span>
        <span className="badge-text">Next-Gen Studio Production</span>
      </div>

      <h1 className="hero-title">
        Crafting visual experiences <br />
        <span className="hero-title-accent">that redefine brand standards.</span>
      </h1>

      <p className="hero-subtitle">
        LBNY Studios blends state-of-the-art AI visual workflows with high-end creative direction.
        High quality, fast execution, on-brand results.
      </p>

      <div className="hero-actions">
        <a href="#contact" className="hero-btn primary">
          Explore Projects
        </a>
        <a href="#pricing" className="hero-btn secondary">
          View Pricing
        </a>
      </div>
    </section>
  );
};

export default Hero;
