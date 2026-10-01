import React from 'react';
import Button from '@/components/ui/Button';
import { Reveal, MaskLines } from '@/components/ui/Motion';
import FaqSection from '@/components/sections/Faq';
import CoverflowNav from '@/components/ui/CoverflowNav';
import { useCoverflow } from '@/hooks/useCoverflow';
import { useSEO } from '@/hooks/useSEO';
import './Pricing.css';

const PLANS = [
  {
    kicker: '01 / For new businesses',
    title: ['Startup', 'BrandKit'],
    text: 'A focused identity to get a new business off the ground with confidence.',
    features: [
      'Primary and secondary logos',
      'Color palette and typography',
      'One-page brand guide',
      'Basic collateral',
      'Two revision rounds',
    ],
    price: '$150',
    timeline: 'Typical timeline: up to 2 weeks',
  },
  {
    kicker: '02 / For growing brands',
    title: ['Complete', 'Brand Identity'],
    text: 'A more comprehensive system, with the research and tools to grow consistently.',
    features: [
      'Market and competitor review',
      'Complete identity system',
      'Full brand guidelines',
      'Pitch deck or packaging concepts',
      'Five revision rounds',
    ],
    price: '$300',
    timeline: 'Typical timeline: up to 2–4 weeks',
    featured: true,
  },
  {
    kicker: '03 / Your digital home',
    title: ['Web', 'Development'],
    text: 'A digital home designed and built around your business, audience and content.',
    features: [
      'Discovery and website scope',
      'Page design and user experience',
      'Responsive development',
      'Content setup and testing',
      'CMS or ecommerce requirements scoped individually',
    ],
    price: '$600',
    timeline: 'Typical timeline: up to 4–8 weeks',
  },
];

const FAQS = [
  {
    question: 'Are these fixed prices?',
    answer: 'They are starting prices. Once we understand your goals, we agree a clear scope and a final fee in writing before any work begins.',
  },
  {
    question: 'What does a revision round mean?',
    answer: 'A round is one consolidated set of feedback from you, followed by our updates. Rounds keep the work focused and moving forward.',
  },
  {
    question: 'What is included in the website price?',
    answer: 'Discovery, page design, responsive development, and content setup with testing. Extra needs such as a CMS or ecommerce are scoped individually.',
  },
  {
    question: 'Can I combine branding and a website?',
    answer: 'Yes, many clients do. Tell us what you need and we will shape a combined scope around it.',
  },
];

export const PricingPage = () => {
  useSEO({
    title: 'Pricing: Brand Identity from $150 | Studio Liberny',
    description:
      'Clear starting prices for brand identity and web development. From $150 for a Startup BrandKit. Final scope and fees are agreed before work begins.',
    path: '/pricing',
  });

  // Mobile: the three plans become a coverflow carousel (same effect as the team on the About page)
  const { active, setActive, step, offsetOf, swipeHandlers } = useCoverflow(PLANS.length);

  return (
    <div className="page-wrapper pricing-page">

      {/* ── Plans ── */}
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
          {PLANS.map((plan, i) => {
            const o = offsetOf(i);
            return (
              <Reveal
                as="article"
                key={plan.kicker}
                delay={i + 1}
                className={`pr-slot${o === 0 ? ' is-active' : ''}`}
                style={{ '--o': o, '--abs': Math.abs(o), zIndex: 10 - Math.abs(o) }}
                onClick={o !== 0 ? () => setActive(i) : undefined}
              >
                <div className={`pr-card${plan.featured ? ' pr-card--featured' : ''}`}>
                  <p className="pr-card__kicker">{plan.kicker}</p>
                  <h2 className="pr-card__title">
                    {plan.title[0]}
                    <span className="pr-card__title-accent">{plan.title[1]}</span>
                  </h2>
                  <p className="pr-card__text">{plan.text}</p>

                  <ul className="pr-card__list">
                    {plan.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>

                  <div className="pr-card__foot">
                    <p className="pr-card__price">
                      <span className="pr-card__from">From</span>
                      <span className="pr-card__amount">{plan.price}</span>
                    </p>
                    <p className="pr-card__timeline">{plan.timeline}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <CoverflowNav
          count={PLANS.length}
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
      </section>

      {/* ── Different kind of project ── */}
      <section className="pr-custom">
        <div className="pr-wrap">
          <MaskLines className="pr-custom__title" lines={['Need a different kind', 'of project?']} />
          <Reveal as="p" delay={2} className="pr-custom__text">
            Need a brand and website together, creative strategy or a different mix of deliverables? Let&rsquo;s shape a scope around you.
          </Reveal>
          <Reveal delay={3}>
            <Button to="/contact" size="sm">Contact us</Button>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ (same component as the home page) ── */}
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
