import React from 'react';

export const Logo = ({ size = 32, className = '' }) => {
  return (
    <div className={`rekorder-logo-wrapper ${className}`} style={{ width: size, height: size, display: 'block' }}>
      <img
        src="/assets/icon-purple.svg"
        alt="Logo"
        width={size}
        height={size}
        className="rekorder-logo-img"
        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default Logo;
