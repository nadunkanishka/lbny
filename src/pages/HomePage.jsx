import React from 'react';
import Hero from '../components/hero/Hero';
import StatsSection from '../components/home/StatsSection';
import ServicesSection from '../components/home/ServicesSection';
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
      <ServicesSection />
      <StatsSection />
    </div>
  );
};

export default HomePage;
