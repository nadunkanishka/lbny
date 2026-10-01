import FaqSection from '@/components/sections/Faq';
import { useSEO } from '@/hooks/useSEO';
import './Pricing.css';
import { FAQS } from './data';
import PricingPlans from './components/PricingPlans';
import PricingCustom from './components/PricingCustom';

export const PricingPage = () => {
  useSEO({
    title: 'Pricing: Brand Identity from $150 | Studio Liberny',
    description:
      'Clear starting prices for brand identity and web development. From $150 for a Startup BrandKit. Final scope and fees are agreed before work begins.',
    path: '/pricing',
  });

  return (
    <div className="page-wrapper pricing-page">
      <PricingPlans />
      <PricingCustom />
      {/* Same component as the home page FAQ */}
      <FaqSection
        className="faq-section--pricing"
        items={FAQS}
        titleLines={['Good', 'questions.', 'Clear answers.']}
        intro="A few useful answers about working together."
      />
    </div>
  );
};

export default PricingPage;
