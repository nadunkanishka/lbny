import React from 'react';
import Contact from '../components/contact/Contact';
import './Pages.css';
import { useSEO } from '../hooks/useSEO';

export const ContactPage = () => {
  useSEO({
    title: 'Contact',
    description:
      'Get in touch with Studio Liberny. Whether you have a project in mind or just want to say hello, we\'d love to hear from you.',
    path: '/contact',
  });

  return (
    <div className="page-wrapper contact-page">
      <div className="page-bg-grid"></div>
      <Contact />
    </div>
  );
};

export default ContactPage;
