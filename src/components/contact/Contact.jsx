import React, { useState } from 'react';
import './Contact.css';

export const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetTiers = ['< $1,000', '$1k – $5k', '$5k – $15k', '$15k+'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setSelectedBudget('');
    setMessage('');
    setIsSubmitted(false);
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
              <a href="mailto:dumindu.kavishkaluvi@gmail.com" className="cm-info-value">
                dumindu.kavishkaluvi@gmail.com
              </a>
            </div>

            <div className="cm-info-block">
              <span className="cm-info-label">Phone</span>
              <a href="tel:+945282820" className="cm-info-value">
                +(94) 528 2820
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
            {isSubmitted ? (
              <div className="cm-success">
                <p className="cm-success-msg">✓ &nbsp;Message sent. We'll be in touch within 24&nbsp;hours.</p>
                <button type="button" className="cm-submit-btn" onClick={resetForm}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="cm-form" onSubmit={handleSubmit} noValidate>

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

                {/* Budget — below Email */}
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

                {/* Submit — pill style matching hero CTA */}
                <button type="submit" className="cm-submit-btn">
                  Submit
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
