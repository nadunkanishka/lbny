import React from 'react';
import './ClientsSection.css';

const clients = [
  { name: 'Zeal by Roche', src: '/assets/clients/zeal-by-roche.png' },
  { name: 'Essa Art Studio', src: '/assets/clients/essa-art-studio.png' }

];

export const ClientsSection = () => {
  return (
    <section className="clients-section">
      <div className="clients-section__inner">

        {/* Section Header */}
        <div className="clients-section__header">
          <div className="clients-section__title-wrap">
            <h2 className="clients-section__title">
              Our <span className="clients-section__title-accent">clients.</span>
            </h2>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="clients-section__divider" aria-hidden="true"></div>

        {/* Logo Grid */}
        <div className="clients-section__grid">
          {clients.map((client, index) => (
            <div key={index} className="client-logo-wrapper">
              <img
                src={client.src}
                alt={`${client.name} logo`}
                className="client-logo-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;
