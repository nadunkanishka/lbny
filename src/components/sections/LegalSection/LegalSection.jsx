import { Fragment } from 'react';
import PageHeader from '@/components/layout/PageHeader';
import './LegalSection.css';

/**
 * Legal document: header plus a card of numbered sections.
 * `sections` items: { heading, text, email? } (email renders a mailto link after the text).
 */
export const LegalSection = ({ badge, title, updated, sections }) => (
  <>
    <PageHeader badge={badge} title={title} subtitle={updated} style={{ textAlign: 'center' }} />

    <div className="page-content-card">
      {sections.map(({ heading, text, email }) => (
        <Fragment key={heading}>
          <h2>{heading}</h2>
          <p>
            {text}
            {email && (
              <>
                {' '}
                <a href={`mailto:${email}`} style={{ color: 'var(--accent-color)' }}>
                  {email}
                </a>
                .
              </>
            )}
          </p>
        </Fragment>
      ))}
    </div>
  </>
);

export default LegalSection;
