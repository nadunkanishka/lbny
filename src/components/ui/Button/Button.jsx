import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const ArrowIcon = () => (
  <svg
    className="lb-btn__arrow"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

/**
 * Site-wide CTA button (lime pill, hard black shadow, arrow).
 *
 *   <Button to="/contact">Reach us</Button>          // router link
 *   <Button href="mailto:hi@x.com">Email</Button>    // plain anchor
 *   <Button type="submit" loading>Send</Button>      // <button>
 *
 * Props: variant ("primary" lime | "secondary" black), size ("md" | "sm"), arrow (default true), loading, disabled, className.
 * Any other props (onClick, aria-*, target, ...) pass through to the element.
 */
const Button = ({
  to,
  href,
  variant = 'primary',
  size = 'md',
  arrow = true,
  loading = false,
  disabled = false,
  className = '',
  children,
  type = 'button',
  ...rest
}) => {
  const classes = ['lb-btn', variant !== 'primary' && `lb-btn--${variant}`, size !== 'md' && `lb-btn--${size}`, loading && 'is-loading', className]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span className="lb-btn__label">{children}</span>
      {arrow && !loading && <ArrowIcon />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={classes} disabled={disabled || loading} {...rest}>
      {content}
    </button>
  );
};

export default Button;
