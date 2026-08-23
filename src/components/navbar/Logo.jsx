import React from 'react';

export const Logo = ({ size = 32, className = '' }) => {
  return (
    <img
      src="/logo.png"
      alt="Logo"
      width={size}
      height={size}
      className={`rekorder-logo-img ${className}`}
      style={{ objectFit: 'contain', display: 'block' }}
    />
  );
};

export default Logo;
