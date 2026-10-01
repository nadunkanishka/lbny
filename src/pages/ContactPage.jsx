import React from 'react';
import Contact from '@/components/sections/Contact';
import './Pages.css';
import { useSEO } from '@/hooks/useSEO';

export const ContactPage = () => {
  useSEO({
    title: 'Contact Studio Liberny | Start Your Brand or Website Project',
    description:
      'Tell us about your brand or website project. Studio Liberny replies within one working day. Based in Colombo, working worldwide.',
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
