import React from 'react';
import './Pages.css';
import { useSEO } from '../hooks/useSEO';

export const PricingPage = () => {
  useSEO({
    title: 'Pricing',
    description:
      'View Studio Liberny\'s transparent pricing and membership options. Find the perfect plan for your design needs — from one-off projects to ongoing creative partnerships.',
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
