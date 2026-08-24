import React from 'react';
import './Pages.css';
import { useSEO } from '../hooks/useSEO';

export const ProjectsPage = () => {
  useSEO({
    title: 'Projects',
    description:
      'Explore Studio Liberny\'s portfolio of creative projects — from branding and UI design to full digital experiences crafted with precision.',
    path: '/projects',
  });

  return (
    <div className="page-wrapper empty-page">
      <div className="page-bg-grid"></div>
      <div className="page-container">
        <div className="page-header">
          <div className="page-badge">
            <span className="badge-dot"></span>
            <span>PORTFOLIO / PROJECTS</span>
          </div>
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
