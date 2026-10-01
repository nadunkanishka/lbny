import Button from '@/components/ui/Button';
import { Reveal, MaskLines } from '@/components/ui/Motion';
import './PricingCustom.css';

export const PricingCustom = () => (
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
);

export default PricingCustom;
