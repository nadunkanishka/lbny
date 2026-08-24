import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

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

  // Scroll to top and close dropdown menu on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    const nextDarkState = !isDarkMode;
    setIsDarkMode(nextDarkState);
    if (nextDarkState) {
      document.documentElement.classList.remove('light-theme');
    } else {
      document.documentElement.classList.add('light-theme');
    }
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
          >
            <div className="header__logo">
              <Logo size={32} />
            </div>
          </Link>

          {/* Menu Trigger Button */}
          <button
            className={`header__menu ${menuOpen ? 'is-active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="header__menu-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="menu-svg-icon">
                {menuOpen ? (
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M4 8H20M4 16H20"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
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
          <Link
            to="/contact"
            className="btn-primary"
            onClick={() => setMenuOpen(false)}
          >
            <span>Contact</span>
          </Link>
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
