import React from 'react';
import Hero from '../components/hero/Hero';
import { useSEO } from '../hooks/useSEO';

export const HomePage = () => {
  useSEO({
    title: 'Creative Design Studio',
    description:
      'Studio Liberny crafts premium digital experiences, stunning visuals, and thoughtful branding for forward-thinking clients. Explore our work.',
    path: '/',
  });

  return <Hero />;
};

export default HomePage;
