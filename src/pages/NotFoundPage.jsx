import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import { useSEO } from '../hooks/useSEO';

export const NotFoundPage = () => {
  useSEO({
    title: '404 - Page Not Found',
    description: 'The page you were looking for does not exist or has been moved.',
    noindex: true,
  });

  return (
    <div className="page-wrapper empty-page">
      <div className="page-bg-grid"></div>
      <div className="page-container">
        <div className="page-header">
          <div className="page-badge">
            <span className="badge-dot"></span>
            <span>ERROR 404</span>
          </div>
          <h1 className="page-title">Page Not Found</h1>
          <p className="page-subtitle">
            The page you are looking for doesn't exist, has been removed, or was moved to another URL.
          </p>
          <Link to="/" className="not-found-cta">
            <span>Return to Homepage</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
