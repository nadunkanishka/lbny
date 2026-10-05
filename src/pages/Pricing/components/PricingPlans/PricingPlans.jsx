import { useState } from 'react';
import { Reveal, MaskLines } from '@/components/ui/Motion';
import Modal from '@/components/ui/Modal';
import { ContactForm } from '@/components/sections/Contact';
import CoverflowNav from '@/components/ui/CoverflowNav';
import { useCoverflow } from '@/hooks/useCoverflow';
import { PLANS } from '../../data';
import PlanCard from '../PlanCard';
import './PricingPlans.css';

export const PricingPlans = ({ plans = PLANS }) => {
  // Mobile: the plans become a coverflow carousel (same effect as the team on the About page)
  const { active, setActive, step, offsetOf, swipeHandlers } = useCoverflow(plans.length);
  const [selectedPlan, setSelectedPlan] = useState(null);

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

      <Reveal as="p" className="pr-note">
        All starting prices are in USD. Final scope and fees are agreed before work begins.<br />
        Timelines depend on content readiness and feedback.
      </Reveal>

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
