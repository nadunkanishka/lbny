import Button from '@/components/ui/Button';
import CountUp from '@/components/ui/CountUp';
import { Reveal } from '@/components/ui/Motion';
import { STORY } from '../../data';
import './AboutStory.css';

export const AboutStory = ({ paragraphs = STORY }) => (
  <section className="ab-story ab-wrap">
    <div className="ab-story__text">
      {paragraphs.map((p, i) => (
        <Reveal as="p" key={i} delay={i + 1}>{p}</Reveal>
      ))}
    </div>
    <Reveal variant="scale" delay={2} className="ab-story__stat">
      <div className="ab-story__num" aria-label="2026">
        <span className="ab-story__quote" aria-hidden="true">&ldquo;</span>
        <CountUp from={17} to={26} />
      </div>
      <Button to="/contact" size="sm">Contact us</Button>
    </Reveal>
  </section>
);

export default AboutStory;
