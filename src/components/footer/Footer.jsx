import React from 'react';
import { Link } from 'react-router-dom';
import wordmarkSvg from '../../assets/SVG/Wordmark Liberny White.svg';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer__inner">

        {/* ── Top row ── */}
        <div className="footer__top">
          <div className="footer__top-left">
            <p className="footer__eyebrow">The next idea starts here</p>

            <h2 className="footer__headline">
              Let&rsquo;s make<br />
              something <em className="footer__headline-accent">matter.</em>
            </h2>
          </div>

          <div className="footer__top-right">
            <a
              href="/contact"
              className="footer__cta-circle"
              aria-label="Start a project with us"
            >
              <span className="footer__cta-ripple" aria-hidden="true" />
              <div className="footer__cta-arrow-box" aria-hidden="true">
                <svg
                  className="footer__cta-arrow footer__cta-arrow--base"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
                <svg
                  className="footer__cta-arrow footer__cta-arrow--hover"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
              <span className="footer__cta-label">Start a project<br />with us</span>
            </a>
          </div>
        </div>

        {/* ── Nav links ── */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <Link to="/about" className="footer__nav-link">About us</Link>
          <Link to="/projects" className="footer__nav-link">Work</Link>
          <Link to="/pricing" className="footer__nav-link">Pricing</Link>
        </nav>

        {/* ── Contact row ── */}
        <div className="footer__contact-row">
          <div className="footer__contact-left">
            <a href="tel:+94779760339" className="footer__contact-item">+94 77 976 0339</a>
            <a href="mailto:info@studioliberny.com" className="footer__contact-item">info@studioliberny.com</a>
          </div>
          <div className="footer__contact-right">
            <span className="footer__contact-item">Colombo, Sri Lanka</span>
          </div>
        </div>

      </div>

      {/* ── Giant wordmark (full-bleed edge-to-edge) ── */}
      <div className="footer__wordmark-wrap" aria-hidden="true">
        <img
          src={wordmarkSvg}
          alt="LIBERNY"
          className="footer__wordmark-img"
          draggable="false"
        />
      </div>

      <div className="footer__inner footer__inner--bottom">
        {/* ── Bottom bar ── */}
        <div className="footer__bottom">
          <p className="footer__copy">&copy; {currentYear} Liberny</p>
          <div className="footer__legal">
            <a href="/terms" className="footer__legal-link">Terms &amp; Conditions</a>
            <a href="/privacy" className="footer__legal-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
