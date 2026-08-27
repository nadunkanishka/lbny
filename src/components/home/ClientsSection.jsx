import React, { useEffect, useRef, useState } from 'react';
import './ClientsSection.css';

const clients = [
  'ABSOLUT.',
  "BEN & JERRY'S",
  'CANON',
  'CapitalOne',
  'Coca-Cola',
  'enterprise',
  'FOX',
  'Nestle',

];

export const ClientsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.18 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="clients-section" ref={sectionRef}>
      <div className={`clients-inner ${visible ? 'is-visible' : ''}`}>
        <div className={`clients-topline ${visible ? 'is-visible' : ''}`}>
          <h2 className="clients-title">Our clients.</h2>
          <span className="clients-kicker">// PROCESS</span>
        </div>

        <p className="clients-copy">
          We have experience working with clients in Consumer Electronics, CPG, Automotive,
          Financial Services, Travel and Tourism, Entertainment, Retail industries and more.
        </p>

        <div className="clients-grid" aria-label="Client logo list">
          {clients.map((client, index) => (
            <div
              key={client}
              className="client-logo-card"
              style={{ transitionDelay: `${index * 0.035}s` }}
            >
              <span>{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
