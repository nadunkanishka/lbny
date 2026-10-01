import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Button from '@/components/ui/Button';
import './Navbar.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem('studio-liberny-theme');
    return savedTheme ? savedTheme === 'dark' : false; // Default to light mode
  });
  const location = useLocation();

  // GSAP refs (hover-circle pills, load-in, logo spin, hamburger morph)
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const hoverTweenRefs = useRef([]);
  const navLinksRef = useRef(null);
  const logoRef = useRef(null);
  const logoTweenRef = useRef(null);
  const hamburgerRef = useRef(null);

  const navItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Pricing', href: '/pricing' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', !isDarkMode);
    window.localStorage.setItem('studio-liberny-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // PillNav-style animations: hover circle + label roll on the desktop links, and a load-in
  useEffect(() => {
    const ease = 'power3.easeOut';

    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        const pill = circle?.parentElement;
        if (!pill) return;
        const { width: w, height: h } = pill.getBoundingClientRect();
        if (!w || !h) return; // hidden (mobile layout)

        // A circle wide enough to cover the pill from its bottom edge
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;
        gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${D - delta}px` });

        const label = pill.querySelector('.pill-label');
        const hover = pill.querySelector('.pill-label-hover');
        if (label) gsap.set(label, { y: 0 });
        if (hover) gsap.set(hover, { y: Math.ceil(h + 100), opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);
        if (label) tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
        if (hover) tl.to(hover, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
        tlRefs.current[index] = tl;
      });
    };

    layout();
    window.addEventListener('resize', layout);
    document.fonts?.ready?.then(layout).catch(() => {});

    const timelines = tlRefs.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const logo = logoRef.current;
    const links = navLinksRef.current;
    if (!reduceMotion) {
      if (logo) {
        gsap.set(logo, { scale: 0 });
        gsap.to(logo, { scale: 1, duration: 0.6, ease });
      }
      if (links) {
        gsap.set(links, { width: 0, overflow: 'hidden' });
        gsap.to(links, {
          width: 'auto',
          duration: 0.6,
          ease,
          onComplete: () => {
            gsap.set(links, { clearProps: 'width,overflow' });
            layout();
          },
        });
      }
    }

    return () => {
      window.removeEventListener('resize', layout);
      timelines.forEach((tl) => tl?.kill());
      if (logo) gsap.killTweensOf(logo);
      if (links) gsap.killTweensOf(links);
    };
  }, []);

  const handlePillEnter = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    hoverTweenRefs.current[i]?.kill();
    hoverTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease: 'power3.easeOut', overwrite: 'auto' });
  };

  const handlePillLeave = (i) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    hoverTweenRefs.current[i]?.kill();
    hoverTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease: 'power3.easeOut', overwrite: 'auto' });
  };

  const handleLogoEnter = () => {
    const el = logoRef.current;
    if (!el) return;
    logoTweenRef.current?.kill();
    gsap.set(el, { rotate: 0 });
    logoTweenRef.current = gsap.to(el, { rotate: 360, duration: 0.2, ease: 'power3.easeOut', overwrite: 'auto' });
  };

  // Hamburger lines morph into an X (mobile)
  useEffect(() => {
    const lines = hamburgerRef.current?.querySelectorAll('.hamburger-line');
    if (!lines || lines.length < 2) return;
    const ease = 'power3.easeOut';
    gsap.to(lines[0], { rotation: menuOpen ? 45 : 0, y: menuOpen ? 3 : 0, duration: 0.3, ease });
    gsap.to(lines[1], { rotation: menuOpen ? -45 : 0, y: menuOpen ? -3 : 0, duration: 0.3, ease });
  }, [menuOpen]);

  // Scroll to top and close dropdown menu on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    setIsDarkMode((current) => !current);
  };

  return (
    <header className={`fourmula-header ${scrolled ? 'is-scrolled' : ''}`}>
      {/* Expanding Navbar Card */}
      <div className={`header__navbar-card ${menuOpen ? 'is-open' : ''}`}>
        {/* Top Navbar Row */}
        <div className="header__main">
          {/* Logo inside Navbar */}
          <Link
            to="/"
            className="header__logo-link"
            aria-label="Home"
            onClick={() => setMenuOpen(false)}
            onMouseEnter={handleLogoEnter}
          >
            <div className="header__logo" ref={logoRef}>
              <Logo size={32} />
            </div>
          </Link>

          {/* Inline links (desktop). Mobile uses the Menu dropdown below. */}
          <nav className="header__links" aria-label="Primary" ref={navLinksRef}>
            {navItems.map((item, i) => (
              <Link
                key={item.name}
                to={item.href}
                className={`header__link ${location.pathname === item.href ? 'is-active' : ''}`}
                aria-current={location.pathname === item.href ? 'page' : undefined}
                onMouseEnter={() => handlePillEnter(i)}
                onMouseLeave={() => handlePillLeave(i)}
                onFocus={() => handlePillEnter(i)}
                onBlur={() => handlePillLeave(i)}
              >
                <span
                  className="hover-circle"
                  aria-hidden="true"
                  ref={(el) => { circleRefs.current[i] = el; }}
                />
                <span className="label-stack">
                  <span className="pill-label">{item.name}</span>
                  <span className="pill-label-hover" aria-hidden="true">{item.name}</span>
                </span>
              </Link>
            ))}
          </nav>

          {/* Menu Trigger Button (mobile only) */}
          <button
            className={`header__menu ${menuOpen ? 'is-active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="header__menu-icon" ref={hamburgerRef}>
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </div>
            <span className="header__menu-txt">Menu</span>
          </button>

          {/* Site Theme Toggle Button */}
          <button
            className="header__theme"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="theme-svg-icon">
                <path
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="theme-svg-icon">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.75" />
                <path
                  d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          {/* Contact CTA Button */}
          <Button to="/contact" size="sm" onClick={() => setMenuOpen(false)}>Contact</Button>
        </div>

        {/* Height Expandable Section */}
        <div className="header__expandable-wrapper">
          <div className="header__expandable-inner">
            <div className="dropdown__shade-box">
              <div className="dropdown__list">
                {navItems.map((item, idx) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`dropdown__link ${location.pathname === item.href ? 'is-active' : ''}`}
                    style={{ '--item-index': idx }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="dropdown__link-dot"></span>
                    <span className="dropdown__link-text">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
