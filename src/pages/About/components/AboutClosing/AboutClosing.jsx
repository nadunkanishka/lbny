import Button from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Motion';
import './AboutClosing.css';

export const AboutClosing = () => (
  <section className="ab-close ab-wrap">
    <Reveal variant="scale">
      <img src="/assets/brand/icon-purple.svg" alt="" className="ab-close__icon" width="56" height="56" />
    </Reveal>
    <Reveal as="p" delay={1} className="ab-close__text">
      A brand people remember. A website people want to use. A clear direction for what comes next.
    </Reveal>
    <Reveal delay={2}>
      <Button to="/contact" size="sm">Reach us</Button>
    </Reveal>
  </section>
);

export default AboutClosing;
