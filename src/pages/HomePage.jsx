import React from 'react';
import Hero from '../components/hero/Hero';
import StatsSection from '../components/home/StatsSection';
import ProcessSection from '../components/home/ProcessSection';
import ClientGetsSection from '../components/home/ClientGetsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CaseStudiesSection from '../components/home/CaseStudiesSection';
import { useSEO } from '../hooks/useSEO';
import './HomePage.css';

export const HomePage = () => {
  useSEO({
    description:
      'Studio Liberny crafts premium digital experiences, stunning visuals, and thoughtful branding for forward-thinking clients. Explore our work.',
    path: '/',
  });

  return (
    <div className="home-page">
      <Hero />
      <StatsSection />
      <ProcessSection />
      <ClientGetsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
