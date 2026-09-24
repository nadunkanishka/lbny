import React from 'react';
import './Pages.css';
import { useSEO } from '../hooks/useSEO';

export const PricingPage = () => {
  useSEO({
    title: 'Pricing',
    description:
      'Explore Studio Liberny\'s transparent pricing and flexible creative memberships — from tailored brand identity to full-service digital design partnerships.',
    path: '/pricing',
  });

  return (
    <div className="page-wrapper empty-page">
      <div className="page-bg-grid"></div>
      <div className="page-container">
        <div className="page-header">
          <div className="page-badge">
            <span className="badge-dot"></span>
            <span>MEMBERSHIP / PRICING</span>
          </div>
          <h1 className="page-title">Pricing</h1>
          <p className="page-subtitle">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
