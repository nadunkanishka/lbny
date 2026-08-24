import React from 'react';
import './Pages.css';
import { useSEO } from '../hooks/useSEO';

export const AboutPage = () => {
  useSEO({
    title: 'About Us',
    description:
      'Learn about Studio Liberny — our story, our team, and our passion for creating premium digital experiences and meaningful design.',
    path: '/about',
  });

  return (
    <div className="page-wrapper empty-page">
      <div className="page-bg-grid"></div>
      <div className="page-container">
        <div className="page-header">
          <div className="page-badge">
            <span className="badge-dot"></span>
            <span>STUDIO / ABOUT</span>
          </div>
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
