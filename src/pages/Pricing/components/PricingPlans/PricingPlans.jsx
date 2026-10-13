import { useState } from 'react';
import { Reveal, MaskLines } from '@/components/ui/Motion';
import Modal from '@/components/ui/Modal';
import { ContactForm } from '@/components/sections/Contact';
import CoverflowNav from '@/components/ui/CoverflowNav';
import { useCoverflow } from '@/hooks/useCoverflow';
import { useUsdToLkr, formatPrice } from '@/hooks/useUsdToLkr';
import { PLANS } from '../../data';
import PlanCard from '../PlanCard';
import './PricingPlans.css';

export const PricingPlans = ({ plans = PLANS }) => {
  // Mobile: the plans become a coverflow carousel (same effect as the team on the About page)
  const { active, setActive, step, offsetOf, swipeHandlers } = useCoverflow(plans.length);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [currency, setCurrency] = useState(() => {
    try {
      return localStorage.getItem('lb-currency') === 'LKR' ? 'LKR' : 'USD';
    } catch {
      return 'USD';
    }
  });
  const { rate } = useUsdToLkr();

  const chooseCurrency = (c) => {
    setCurrency(c);
    try {
      localStorage.setItem('lb-currency', c);
    } catch {
      /* ignore */
    }
  };

  return (
    <section className="pr-plans pr-wrap">
      <div className="pr-head">
        <MaskLines
          as="h1"
          className="pr-title"
          lines={['Good design.', <span key="s" className="pr-accent">Clear scope.</span>]}
        />
        <Reveal as="p" delay={2} className="pr-head__lead">
          Choose a starting point for your brand. We&rsquo;ll shape the final scope together around what you actually need.
        </Reveal>
      </div>

      <div className="pr-grid" {...swipeHandlers}>
        {plans.map((plan, i) => (
          <PlanCard
            key={plan.kicker}
            plan={plan}
            price={formatPrice(plan.usd, currency, rate)}
            index={i}
            offset={offsetOf(i)}
            onSelect={() => setActive(i)}
            onGetStarted={() => setSelectedPlan(plan)}
          />
        ))}
      </div>

      <CoverflowNav
        count={plans.length}
        active={active}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
        label="Pricing plans carousel controls"
        itemLabel="plan"
      />

      <div className="pr-foot">
        <Reveal as="p" className="pr-note">
          {currency === 'LKR'
            ? `LKR prices are approximate, converted at today's rate (1 USD ≈ Rs ${Math.round(rate)}). `
            : 'All starting prices are in USD. '}
          Final scope and fees are agreed before work begins.<br />
          Timelines depend on content readiness and feedback.
        </Reveal>
        <div className="pr-currency" role="group" aria-label="Currency" data-currency={currency}>
          <span className="pr-currency__thumb" aria-hidden="true" />
          {['USD', 'LKR'].map((c) => (
            <button
              key={c}
              type="button"
              className="pr-currency__btn"
              aria-pressed={currency === c}
              onClick={() => chooseCurrency(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {selectedPlan && (
        <Modal
          className="cm-modal"
          title="Tell us about your project"
          onClose={() => setSelectedPlan(null)}
        >
          <ContactForm
            key={selectedPlan.kicker}
            initialService={selectedPlan.service}
            initialBudget={selectedPlan.budget}
            planName={selectedPlan.title.join(' ')}
          />
        </Modal>
      )}
    </section>
  );
};

export default PricingPlans;
