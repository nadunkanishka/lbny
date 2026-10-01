import React from 'react';
import Button from '../components/ui/Button';
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
          <Button to="/">Return to Homepage</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
