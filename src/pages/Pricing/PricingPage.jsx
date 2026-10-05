import PageShell from '@/components/layout/PageShell';
import FaqSection from '@/components/sections/Faq';
import { useSEO } from '@/hooks/useSEO';
import './Pricing.css';
import { FAQS } from './data';
import PricingPlans from './components/PricingPlans';
import PricingCustom from './components/PricingCustom';

export const PricingPage = () => {
  useSEO({
    title: 'Pricing | Studio Liberny',
    description:
      'Clear starting prices for brand identity and web development. From $150 for a Startup BrandKit. Final scope and fees are agreed before work begins.',
    path: '/pricing',
  });

  return (
    <PageShell className="pricing-page" grid={false}>
      <PricingPlans />
      <PricingCustom />
      {/* Same component as the home page FAQ */}
      <FaqSection
        className="faq-section--pricing"
        items={FAQS}
        titleLines={['Good', 'questions.', 'Clear answers.']}
        intro="A few useful answers about working together."
      />
    </PageShell>
  );
};

export default PricingPage;
