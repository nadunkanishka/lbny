import { Reveal, MaskLines } from '@/components/ui/Motion';
import './AboutMean.css';

export const AboutMean = () => (
  <section className="ab-mean ab-wrap">
    <div className="ab-mean__left">
      <MaskLines lines={['Make it mean', <span key="s" className="ab-accent ab-accent--soft">something.</span>]} />
      <Reveal as="p" delay={2} className="ab-mean__small">
        We care about the big idea and the small detail. That balance guides us from the first conversation to the final delivery.
      </Reveal>
    </div>
    <Reveal as="p" delay={1} className="ab-mean__big">
      Every project starts with understanding the people behind it. We ask questions, find the useful truth, and turn that into a visual and digital experience that feels like you.
    </Reveal>
  </section>
);

export default AboutMean;
