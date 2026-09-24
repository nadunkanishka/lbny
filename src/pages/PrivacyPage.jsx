import React from 'react';
import './Pages.css';
import { useSEO } from '../hooks/useSEO';

export const PrivacyPage = () => {
  useSEO({
    title: 'Privacy Policy',
    description:
      'Learn about how Studio Liberny collects, uses, and protects your personal and project information.',
    path: '/privacy',
  });

  return (
    <div className="page-wrapper">
      <div className="page-bg-grid"></div>
      <div className="page-container">
        <div className="page-header" style={{ textAlign: 'center' }}>
          <div className="page-badge">
            <span className="badge-dot"></span>
            <span>LEGAL / PRIVACY</span>
          </div>
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-subtitle">Last updated: September 2026</p>
        </div>

        <div className="page-content-card">
          <h2>1. Information We Collect</h2>
          <p>
            When you contact us, request a project quote, or interact with our site, we may collect your
            name, email address, phone number, and details regarding your business or project scope.
          </p>

          <h2>2. How We Use Information</h2>
          <p>
            We use the information we collect to communicate with you regarding your design inquiries,
            prepare proposals, deliver services, and enhance user experience across our digital properties.
          </p>

          <h2>3. Cookies &amp; Analytics</h2>
          <p>
            Our website may use standard analytics cookies to evaluate traffic patterns, Core Web Vitals,
            and user engagement. We do not sell your personal data to third parties.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement industry-standard encryption, SSL/TLS security protocols, and strict access
            controls to protect confidential client materials and personal data.
          </p>

          <h2>5. Inquiries</h2>
          <p>
            If you have questions about your privacy rights or this policy, please reach out to us at{' '}
            <a href="mailto:info@studioliberny.com" style={{ color: 'var(--accent-color)' }}>
              info@studioliberny.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
