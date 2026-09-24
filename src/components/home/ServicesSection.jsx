import React from 'react';
import './ServicesSection.css';

export const ServicesSection = () => {
  const service1 = {
    number: '01',
    title: 'Brand\nIdentity',
    description: 'Distinctive systems that express who you are and where you’re going.',
  };

  const service2 = {
    number: '02',
    title: 'Creative\nStrategy',
    description: 'Clear thinking to connect your ambition with the people you want to reach.',
  };

  const service3 = {
    number: '03',
    title: 'Web Design &\nDevelopment',
    description: 'Digital experiences that look sharp and work beautifully.',
  };

  const renderServiceCard = (service) => (
    <div key={service.number} className={`service-card service-card--${service.number}`}>
      <span className="service-card__number" aria-hidden="true">
        {service.number}
      </span>
      <div className="service-card__content">
        <h3 className="service-card__title">
          {service.title.split('\n').map((line, i) => (
            <span key={i} className="service-card__title-line">
              {line}
            </span>
          ))}
        </h3>
        <p className="service-card__description">
          {service.description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="services-section" aria-label="What we bring to life">
      <div className="services-section__inner">
        {/* Header Row */}
        <div className="services-section__header">
          <div className="services-section__title-wrap">
            <h2 className="services-section__title">
              What we<br />
              <span className="services-section__title-accent">bring to life.</span>
            </h2>
          </div>
          <div className="services-section__desc-wrap">
            <p className="services-section__lead">
              From the first sketch to the final screen, we shape clear, expressive work around what makes your business yours.
            </p>
          </div>
        </div>

        {/* Divider line */}
        <div className="services-section__divider" role="separator" />

        {/* Centered Services Section with Increased Scale */}
        <div className="services-section__centered-wrap">
          {/* Top row: 01 and 02 centered */}
          <div className="services-section__row services-section__row--top">
            {renderServiceCard(service1)}
            {renderServiceCard(service2)}
          </div>

          {/* Bottom row: 03 centered */}
          <div className="services-section__row services-section__row--bottom">
            {renderServiceCard(service3)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
