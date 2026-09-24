import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ClientsSection.css';

const clients = [
  { name: 'Zeal by Roche', src: '/assets/clients/zeal-by-roche-new.png' },
  { name: 'Hummingbirds Learning Center', src: '/assets/clients/hummingbirds.png' },
  { name: 'Hypervoid', src: '/assets/clients/hypervoid.png' },
  { name: "King's Choice", src: '/assets/clients/kings-choice.png' },
  { name: 'The Fabulous Getaway', src: '/assets/clients/the-fabulous-getaway.png' },
  { name: 'Essa Art Studio', src: '/assets/clients/essa-art-studio.png' }
];

export const ClientsSection = () => {
  const [sectionRef, sectionVisible] = useScrollReveal(0.1);

  return (
    <section className="clients-section" ref={sectionRef}>
      <div className="clients-section__inner">

        {/* Section Header */}
        <div className="clients-section__header">
          <div className={`clients-section__title-wrap reveal reveal--left ${sectionVisible ? 'is-visible' : ''}`}>
            <h2 className="clients-section__title">
              Our <span className="clients-section__title-accent">clients.</span>
            </h2>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className={`clients-section__divider reveal-line reveal-d2 ${sectionVisible ? 'is-visible' : ''}`} aria-hidden="true"></div>

        {/* Logo Grid */}
        <div className="clients-section__grid">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`client-logo-wrapper reveal reveal--scale reveal-d${index + 2} ${sectionVisible ? 'is-visible' : ''}`}
            >
              <img
                src={client.src}
                alt={`${client.name} logo`}
                className="client-logo-img"
                width="180"
                height="50"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;
