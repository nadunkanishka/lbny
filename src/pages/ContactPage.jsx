import React from 'react';
import Contact from '../components/contact/Contact';
import './Pages.css';

export const ContactPage = () => {
  return (
    <div className="page-wrapper contact-page">
      <div className="page-bg-grid"></div>
      <Contact />
    </div>
  );
};

export default ContactPage;
