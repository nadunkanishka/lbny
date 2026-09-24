import React from 'react';
import './Pages.css';
import { useSEO } from '../hooks/useSEO';

export const TermsPage = () => {
  useSEO({
    title: 'Terms & Conditions',
    description:
      'Review the terms and conditions for engaging Studio Liberny creative design and development services.',
    path: '/terms',
  });

  return (
    <div className="page-wrapper">
      <div className="page-bg-grid"></div>
      <div className="page-container">
        <div className="page-header" style={{ textAlign: 'center' }}>
          <div className="page-badge">
            <span className="badge-dot"></span>
            <span>LEGAL / TERMS</span>
          </div>
          <h1 className="page-title">Terms &amp; Conditions</h1>
          <p className="page-subtitle">Last updated: September 2026</p>
        </div>

        <div className="page-content-card">
          <h2>1. Overview</h2>
          <p>
            Welcome to Studio Liberny. By accessing our website or retaining our design and digital
            services, you agree to comply with and be bound by these terms.
          </p>

          <h2>2. Services &amp; Engagements</h2>
          <p>
            Studio Liberny provides brand identity, digital design, UI/UX architecture, and web development
            services. All project deliverables, timelines, and milestones are outlined in individual project
            scopes or proposals agreed upon with the client.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            Upon full settlement of agreed fees, final approved deliverables transfer to the client. Studio
            Liberny reserves the right to showcase approved work, design artifacts, and case studies in
            our portfolio, social channels, and awards submissions.
          </p>

          <h2>4. Payments &amp; Invoicing</h2>
          <p>
            Payments are structured according to milestones agreed upon in the project statement of work.
            Late payments may result in pausing ongoing development and delivery schedules.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            For any inquiries regarding these terms, please contact us at{' '}
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

export default TermsPage;
