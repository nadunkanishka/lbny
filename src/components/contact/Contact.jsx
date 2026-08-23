import React, { useState } from 'react';
import './Contact.css';

export const Contact = () => {
  // Tab State: 'inquiry' | 'booking'
  const [activeTab, setActiveTab] = useState('inquiry');

  // Inquiry Form State
  const [selectedServices, setSelectedServices] = useState(['Web Development']);
  const [selectedBudget, setSelectedBudget] = useState('$5k - $10k');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryBrief, setInquiryBrief] = useState('');

  // Booking Form State
  const [sessionType, setSessionType] = useState('30 Min Discovery');
  const [selectedDate, setSelectedDate] = useState(27);
  const [selectedTime, setSelectedTime] = useState('11:30 AM');
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');

  // UI Toast & Success State
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableServices = [
    'Brand Strategy',
    'Web Development',
    'UI/UX Architecture',
    'Creative Direction',
    '3D Motion Systems',
    'AI Workflows',
  ];

  const budgetTiers = ['< $5,000', '$5k - $10k', '$10k - $25k', '$25k+'];
  const sessionTypes = ['15 Min Intro', '30 Min Discovery', '45 Min Deep Dive'];
  const timeSlots = ['10:00 AM', '11:30 AM', '02:30 PM', '04:00 PM'];

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setToastMessage(`Copied ${email} to clipboard!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setInquiryName('');
    setInquiryEmail('');
    setInquiryBrief('');
    setBookingName('');
    setBookingEmail('');
  };

  return (
    <section className="contact-workspace-section" id="contact">
      {/* Ambient Background Grid */}
      <div className="contact-bg-grid"></div>

      {/* Copy Toast Notification */}
      <div className={`copy-toast ${showToast ? 'is-visible' : ''}`}>
        <span className="toast-icon">✓</span>
        <span>{toastMessage}</span>
      </div>

      <div className="contact-workspace-container">
        {/* Large Display Header: GET IN TOUCH */}
        <div className="contact-display-header">
          <h1 className="contact-display-title">
            GET IN <span className="title-purple-accent">TOUCH</span>
          </h1>
        </div>

        {/* Split Grid Workspace Layout */}
        <div className="contact-split-grid">
          {/* LEFT COLUMN: STUDIO INFO & DIRECT CONTACT */}
          <div className="contact-info-card">
            <div className="info-card-header">
              <div className="info-badge-row">
                <span className="live-status-pill">
                  <span className="pulse-green-dot"></span>
                  <span>ACCEPTING PROJECTS Q3/Q4</span>
                </span>
                <span className="est-tag">EST. 2026</span>
              </div>

              <div className="studio-brand-intro">
                <h3 className="studio-brand-name">STUDIO LIBERNY</h3>
                <p className="studio-brand-desc">
                  Independent brand strategy & digital product studio building high-performance web platforms & motion experiences.
                </p>
              </div>

              {/* Direct Email Cards */}
              <div className="email-reach-wrapper">
                <span className="reach-label">DIRECT REACH</span>

                <button
                  type="button"
                  className="email-reach-card"
                  onClick={() => handleCopyEmail('hello@studioliberny.com')}
                >
                  <div className="reach-icon-box">✉</div>
                  <div className="reach-text-box">
                    <span className="reach-type">GENERAL ENQUIRIES</span>
                    <span className="reach-email">hello@studioliberny.com</span>
                  </div>
                  <span className="copy-icon">📋</span>
                </button>

                <button
                  type="button"
                  className="email-reach-card"
                  onClick={() => handleCopyEmail('newbiz@studioliberny.com')}
                >
                  <div className="reach-icon-box">💼</div>
                  <div className="reach-text-box">
                    <span className="reach-type">NEW BUSINESS</span>
                    <span className="reach-email">newbiz@studioliberny.com</span>
                  </div>
                  <span className="copy-icon">📋</span>
                </button>
              </div>
            </div>

            {/* Studio Meta & Social Links */}
            <div className="info-card-footer">
              <div className="meta-location-row">
                <span className="loc-text">📍 COLOMBO, SRI LANKA</span>
                <span className="tz-text">GMT +5:30</span>
              </div>

              <div className="social-pills-row">
                <a href="#" className="social-pill-link">Twitter / X</a>
                <a href="#" className="social-pill-link">Dribbble</a>
                <a href="#" className="social-pill-link">LinkedIn</a>
                <a href="#" className="social-pill-link">Instagram</a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: DUAL-TAB FORM CONTAINER */}
          <div className="contact-form-container">
            {/* Segmented Tab Switcher */}
            <div className="segmented-tab-bar">
              <button
                type="button"
                className={`tab-bar-btn ${activeTab === 'inquiry' ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveTab('inquiry');
                  setIsSubmitted(false);
                }}
              >
                <span>✨ Project Inquiry</span>
              </button>
              <button
                type="button"
                className={`tab-bar-btn ${activeTab === 'booking' ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveTab('booking');
                  setIsSubmitted(false);
                }}
              >
                <span>📅 Book a Call</span>
              </button>
            </div>

            {/* SUCCESS OVERLAY */}
            {isSubmitted ? (
              <div className="contact-success-state">
                <div className="success-badge-icon">✓</div>
                <h3 className="success-title">Message Received!</h3>
                <p className="success-desc">
                  Thank you for connecting with Studio Liberny. Our team will get back to you within 24 hours.
                </p>
                <button type="button" className="reset-btn" onClick={resetForm}>
                  Send Another Brief
                </button>
              </div>
            ) : (
              <>
                {/* TAB 1: PROJECT INQUIRY FORM */}
                {activeTab === 'inquiry' && (
                  <form className="tab-form-content" onSubmit={handleInquirySubmit}>
                    {/* Services Chips */}
                    <div className="form-section">
                      <label className="section-field-label">WHAT SERVICES DO YOU NEED?</label>
                      <div className="chips-wrap-grid">
                        {availableServices.map((service) => {
                          const isSelected = selectedServices.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              className={`chip-select-btn ${isSelected ? 'is-selected' : ''}`}
                              onClick={() => toggleService(service)}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget Chips */}
                    <div className="form-section">
                      <label className="section-field-label">ESTIMATED BUDGET</label>
                      <div className="budget-grid-cols">
                        {budgetTiers.map((tier) => (
                          <button
                            key={tier}
                            type="button"
                            className={`chip-select-btn budget-chip ${selectedBudget === tier ? 'is-selected' : ''}`}
                            onClick={() => setSelectedBudget(tier)}
                          >
                            {tier}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Inputs */}
                    <div className="form-dual-inputs">
                      <div className="field-group">
                        <label htmlFor="inquiry-name">YOUR NAME</label>
                        <input
                          id="inquiry-name"
                          type="text"
                          required
                          placeholder="Alex Morgan"
                          value={inquiryName}
                          onChange={(e) => setInquiryName(e.target.value)}
                        />
                      </div>
                      <div className="field-group">
                        <label htmlFor="inquiry-email">EMAIL ADDRESS</label>
                        <input
                          id="inquiry-email"
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={inquiryEmail}
                          onChange={(e) => setInquiryEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="field-group">
                      <label htmlFor="inquiry-brief">PROJECT BRIEF</label>
                      <textarea
                        id="inquiry-brief"
                        rows="3"
                        required
                        placeholder="Tell us about your project goals, timeline, and vision..."
                        value={inquiryBrief}
                        onChange={(e) => setInquiryBrief(e.target.value)}
                      ></textarea>
                    </div>

                    <button type="submit" className="submit-purple-btn">
                      <span>Send Project Brief</span>
                      <span className="arrow-icon">→</span>
                    </button>
                  </form>
                )}

                {/* TAB 2: BOOK A CALL FORM */}
                {activeTab === 'booking' && (
                  <form className="tab-form-content" onSubmit={handleBookingSubmit}>
                    {/* Session Type Chips */}
                    <div className="form-section">
                      <label className="section-field-label">SELECT SESSION TYPE</label>
                      <div className="budget-grid-cols">
                        {sessionTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            className={`chip-select-btn ${sessionType === type ? 'is-selected' : ''}`}
                            onClick={() => setSessionType(type)}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Mini Calendar Widget & Time Slots */}
                    <div className="calendar-widget-box">
                      <div className="cal-header">
                        <span className="cal-month-title">AUGUST 2026</span>
                        <span className="cal-tz">GMT +5:30</span>
                      </div>

                      <div className="cal-days-grid">
                        {[24, 25, 26, 27, 28, 29, 30].map((day) => (
                          <button
                            key={day}
                            type="button"
                            className={`cal-day-btn ${selectedDate === day ? 'is-selected' : ''}`}
                            onClick={() => setSelectedDate(day)}
                          >
                            <span>AUG</span>
                            <strong>{day}</strong>
                          </button>
                        ))}
                      </div>

                      <div className="time-slots-grid">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            className={`time-slot-btn ${selectedTime === slot ? 'is-selected' : ''}`}
                            onClick={() => setSelectedTime(slot)}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Booking Inputs */}
                    <div className="form-dual-inputs">
                      <div className="field-group">
                        <label htmlFor="booking-name">FULL NAME</label>
                        <input
                          id="booking-name"
                          type="text"
                          required
                          placeholder="Samantha Reed"
                          value={bookingName}
                          onChange={(e) => setBookingName(e.target.value)}
                        />
                      </div>
                      <div className="field-group">
                        <label htmlFor="booking-email">EMAIL ADDRESS</label>
                        <input
                          id="booking-email"
                          type="email"
                          required
                          placeholder="samantha@studio.io"
                          value={bookingEmail}
                          onChange={(e) => setBookingEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <button type="submit" className="submit-purple-btn">
                      <span>Confirm Video Call Booking</span>
                      <span className="arrow-icon">📹</span>
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
