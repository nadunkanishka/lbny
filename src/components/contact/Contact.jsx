import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
  const formRef = useRef(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const budgetTiers = ['< $1,000', '$1k – $5k', '$5k – $15k', '$15k+'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    const templateParams = {
      from_name: `${firstName} ${lastName}`.trim(),
      from_email: email,
      budget: selectedBudget || 'Not specified',
      message,
      to_email: 'info@studioliberny.com',
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus('success');
    } catch (err) {
      console.error('EmailJS error — status:', err?.status);
      console.error('EmailJS error — text:', err?.text);
      console.error('EmailJS error — full:', err);
      setStatus('error');
    }
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setSelectedBudget('');
    setMessage('');
    setStatus('idle');
  };

  return (
    <section className="cm-section" id="contact">

      {/* Inner constrained column */}
      <div className="cm-inner">

        {/* ── Hero Row ── */}
        <div className="cm-hero">
          <h1 className="cm-hero-title">Work With Us</h1>
        </div>

        {/* ── Two-Column Body ── */}
        <div className="cm-body">

          {/* LEFT: Contact Info */}
          <div className="cm-info">
            <div className="cm-info-block">
              <span className="cm-info-label">Email</span>
              <a href="mailto:info@studioliberny.com" className="cm-info-value">
                info@studioliberny.com
              </a>
            </div>

            <div className="cm-info-block">
              <span className="cm-info-label">Phone</span>
              <a href="https://wa.me/94779760339" className="cm-info-value">
                +(94)77 976 0339
              </a>
            </div>

            <div className="cm-info-block">
              <span className="cm-info-label">Address</span>
              <span className="cm-info-value">
                Colombo, Sri Lanka<br />
              </span>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="cm-form-col">

            {/* ── Success ── */}
            {status === 'success' ? (
              <div className="cm-success">
                <p className="cm-success-msg">
                  ✓ &nbsp;Message sent — we'll be in touch within 24&nbsp;hours.
                </p>
                <button type="button" className="cm-submit-btn" onClick={resetForm}>
                  Send Another
                </button>
              </div>

            ) : (
              <form ref={formRef} className="cm-form" onSubmit={handleSubmit} noValidate>

                {/* Name Row */}
                <div className="cm-row">
                  <div className="cm-field">
                    <label className="cm-label" htmlFor="cm-first-name">First Name</label>
                    <input
                      id="cm-first-name"
                      className="cm-input"
                      type="text"
                      required
                      autoComplete="given-name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="cm-field">
                    <label className="cm-label" htmlFor="cm-last-name">Last Name</label>
                    <input
                      id="cm-last-name"
                      className="cm-input"
                      type="text"
                      required
                      autoComplete="family-name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="cm-field">
                  <label className="cm-label" htmlFor="cm-email">Email</label>
                  <input
                    id="cm-email"
                    className="cm-input"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Budget */}
                <div className="cm-field">
                  <label className="cm-label">Budget</label>
                  <div className="cm-budget-grid">
                    {budgetTiers.map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        className={`cm-budget-btn${selectedBudget === tier ? ' is-active' : ''}`}
                        onClick={() => setSelectedBudget(tier)}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="cm-field">
                  <label className="cm-label" htmlFor="cm-message">Message</label>
                  <textarea
                    id="cm-message"
                    className="cm-input cm-textarea"
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <p className="cm-error-msg">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className={`cm-submit-btn${status === 'sending' ? ' is-sending' : ''}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <span className="cm-spinner" />
                      Sending…
                    </>
                  ) : 'Send Message'}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
