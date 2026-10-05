import Hero from '@/components/sections/Hero';
import StatsSection from '@/components/sections/Stats';
import ServicesSection from '@/components/sections/Services';
import ClientsSection from '@/components/sections/Clients';
import TestimonialSection from '@/components/sections/Testimonial';
import FaqSection from '@/components/sections/Faq';
import { useSEO } from '@/hooks/useSEO';
import './HomePage.css';

export const HomePage = () => {
  useSEO({
    title: 'Studio Liberny | Brand Identity & Web Design Studio',
    description:
      'Studio Liberny crafts premium digital experiences, stunning visuals, and thoughtful branding for forward-thinking clients. Explore our work.',
    path: '/',
  });

  return (
    <div className="home-page">
      <Hero />
      <ServicesSection />
      <StatsSection />
      <ClientsSection />
      <TestimonialSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;
