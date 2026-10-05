import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Motion';
import './Contact.css';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const SERVICES = ['Brand identity', 'Website', 'Brand + website', 'Not sure yet'];
const BUDGETS = ['$150–$300', '$300–$600', '$600+', 'Not decided'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * The contact form card. Used on the Contact page and inside the pricing pop-up.
 * `initialService` / `initialBudget` pre-select the pills, `planName` is added to the email,
 * `reveal` animates the card in on scroll like the rest of the page.
 */
export const ContactForm = ({
  initialService = '',
  initialBudget = '',
  planName = '',
  reveal = false,
  revealDelay = 0,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService);
  const [budget, setBudget] = useState(initialBudget);
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
      planName && `Plan: ${planName}`,
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
    setService(initialService);
    setBudget(initialBudget);
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

  const Card = reveal ? Reveal : 'div';
  const cardProps = reveal ? { delay: revealDelay, className: 'cm-card' } : { className: 'cm-card' };

  return (
    <Card {...cardProps}>
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
                inputMode="email"
                autoCapitalize="none"
                autoCorrect="off"
                enterKeyHint="next"
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
    </Card>
  );
};

export default ContactForm;
