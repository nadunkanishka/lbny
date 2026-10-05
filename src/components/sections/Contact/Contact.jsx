import React from 'react';
import { Reveal } from '@/components/ui/Motion';
import ContactForm from './ContactForm';
import './Contact.css';

const STEPS = [
  { title: 'We read your message', text: 'And reply within one working day.' },
  { title: 'A short call', text: '20 minutes to understand your business and goals.' },
  { title: 'Your scope and fee', text: 'A clear proposal in writing. No surprises.' },
];

const ArrowIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4L3 21z" />
    <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.3-1.9-1-.8.8c-.9-.4-1.7-1.2-2.1-2.1l.8-.8-1-1.9L9 9.5z" />
  </svg>
);

export const Contact = () => {
  return (
    <section className="cm-section" id="contact">
      <div className="cm-inner">

        <div className="cm-body">

          {/* LEFT: contact info */}
          <div className="cm-info">
            <div className="cm-info-top">
              <Reveal as="h1" className="cm-title">
                Your next idea.
                <span className="cm-title-accent">Let&rsquo;s talk.</span>
              </Reveal>
              <Reveal className="cm-contact" delay={1}>
              <span className="cm-info-label">Get in touch</span>
              <a href="mailto:info@studioliberny.com" className="cm-info-email">
                info@studioliberny.com
              </a>
              <div className="cm-social">
                <a
                  href="https://instagram.com/studioliberny"
                  className="cm-social-pill cm-social-pill--instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon /> Instagram <ArrowIcon />
                </a>
                <a
                  href="https://wa.me/94779760339"
                  className="cm-social-pill cm-social-pill--whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Studio Liberny on WhatsApp"
                >
                  <WhatsAppIcon /> WhatsApp <ArrowIcon />
                </a>
              </div>
              </Reveal>

              <Reveal className="cm-steps" delay={2}>
                <h2 className="cm-steps-title">What happens next</h2>
                <ol className="cm-steps-list">
                  {STEPS.map((step, i) => (
                    <li className="cm-step" key={step.title}>
                      <span className="cm-step-num" aria-hidden="true">{i + 1}</span>
                      <div>
                        <h3 className="cm-step-title">{step.title}</h3>
                        <p className="cm-step-text">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>

            <p className="cm-location">
              <span className="cm-location-city">Colombo, Sri Lanka</span>
              Working with brands everywhere.
            </p>
          </div>

          {/* RIGHT: form card */}
          <ContactForm reveal revealDelay={2} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
