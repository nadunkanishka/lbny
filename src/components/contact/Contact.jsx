import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../ui/Button';
import './Contact.css';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const SERVICES = ['Brand identity', 'Website', 'Brand + website', 'Not sure yet'];
const BUDGETS = ['$150–$300', '$300–$600', '$600+', 'Not decided'];
const STEPS = [
  { title: 'We read your message', text: 'And reply within one working day.' },
  { title: 'A short call', text: '20 minutes to understand your business and goals.' },
  { title: 'Your scope and fee', text: 'A clear proposal in writing. No surprises.' },
];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const errors = {
    name: name.trim() ? '' : 'Add your name so we know who to reply to.',
    email: EMAIL_RE.test(email.trim()) ? '' : 'Enter an email like name@company.com.',
    message: message.trim() ? '' : 'Tell us a little about the project, even one sentence helps.',
  };
  const show = (field) => (submitted && errors[field] ? errors[field] : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setSubmitted(true);
    if (errors.name || errors.email || errors.message) return;

    setStatus('sending');

    const details = [
      service && `Service: ${service}`,
      budget && `Budget: ${budget}`,
    ].filter(Boolean);

    const templateParams = {
      from_name: name.trim(),
      from_email: email.trim(),
      service: service || 'Not specified',
      budget: budget || 'Not specified',
      message: details.length ? `${details.join('\n')}\n\n${message}` : message,
      to_email: 'info@studioliberny.com',
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus('success');
    } catch (err) {
      console.error('EmailJS error:', err?.status, err?.text, err);
      setStatus('error');
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setService('');
    setBudget('');
    setMessage('');
    setSubmitted(false);
    setStatus('idle');
  };

  const pills = (options, value, setValue, label) => (
    <div className="cm-pills" role="group" aria-label={label}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          className={`cm-pill${value === opt ? ' is-active' : ''}`}
          aria-pressed={value === opt}
          onClick={() => setValue(value === opt ? '' : opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );

  return (
    <section className="cm-section" id="contact">
      <div className="cm-inner">

        <div className="cm-body">

          {/* LEFT: contact info */}
          <div className="cm-info">
            <div className="cm-info-top">
              <h1 className="cm-title">
                Your next idea.
                <span className="cm-title-accent">Let&rsquo;s talk.</span>
              </h1>
              <div className="cm-contact">
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
              </div>

              <div className="cm-steps">
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
              </div>
            </div>

            <p className="cm-location">
              <span className="cm-location-city">Colombo, Sri Lanka</span>
              Working with brands everywhere.
            </p>
          </div>

          {/* RIGHT: form card */}
          <div className="cm-card">
            {status === 'success' ? (
              <div className="cm-success">
                <p className="cm-success-msg">
                  ✓ &nbsp;Message sent — we&rsquo;ll be in touch within 24&nbsp;hours.
                </p>
                <Button onClick={resetForm}>Send another</Button>
              </div>
            ) : (
              <form className="cm-form" onSubmit={handleSubmit} noValidate>

                <div className="cm-row">
                  <div className="cm-field">
                    <label className="cm-label" htmlFor="cm-name">Your name</label>
                    <input
                      id="cm-name"
                      className={`cm-input${show('name') ? ' has-error' : ''}`}
                      type="text"
                      autoComplete="name"
                      aria-invalid={!!show('name')}
                      aria-describedby="cm-name-err"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <p className="cm-field-error" id="cm-name-err" role="alert">{show('name')}</p>
                  </div>
                  <div className="cm-field">
                    <label className="cm-label" htmlFor="cm-email">Email address</label>
                    <input
                      id="cm-email"
                      className={`cm-input${show('email') ? ' has-error' : ''}`}
                      type="email"
                      autoComplete="email"
                      aria-invalid={!!show('email')}
                      aria-describedby="cm-email-err"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="cm-field-error" id="cm-email-err" role="alert">{show('email')}</p>
                  </div>
                </div>

                <div className="cm-field">
                  <span className="cm-label">What can we help with?</span>
                  {pills(SERVICES, service, setService, 'Service')}
                </div>

                <div className="cm-field">
                  <span className="cm-label">
                    Budget <span className="cm-label-opt">(optional)</span>
                  </span>
                  {pills(BUDGETS, budget, setBudget, 'Budget')}
                </div>

                <div className="cm-field cm-field--grow">
                  <label className="cm-label" htmlFor="cm-message">Tell us about your project</label>
                  <textarea
                    id="cm-message"
                    className={`cm-input cm-textarea${show('message') ? ' has-error' : ''}`}
                    rows={3}
                    placeholder="What you do, what you need, and any deadline."
                    aria-invalid={!!show('message')}
                    aria-describedby="cm-message-err"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <p className="cm-field-error" id="cm-message-err" role="alert">{show('message')}</p>
                </div>

                {status === 'error' && (
                  <p className="cm-field-error" role="alert">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <Button type="submit" loading={status === 'sending'} className="cm-submit-btn">
                  {status === 'sending' ? (
                    <>
                      <span className="cm-spinner" />
                      Sending…
                    </>
                  ) : 'Send message'}
                </Button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
