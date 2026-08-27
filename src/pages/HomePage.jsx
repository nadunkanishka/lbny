import React from 'react';
import Hero from '../components/hero/Hero';
import StatsSection from '../components/home/StatsSection';
import ProcessSection from '../components/home/ProcessSection';
import ClientsSection from '../components/home/ClientsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
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
      <ClientsSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
