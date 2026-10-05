import { Reveal, MaskLines } from '@/components/ui/Motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { HERO_PHOTO } from '../../data';
import './AboutHero.css';

export const AboutHero = ({ photo = HERO_PHOTO }) => {
  const [photoRef, photoVisible] = useScrollReveal(0.2);

  return (
    <section className="ab-hero ab-wrap">
      <MaskLines
        as="h1"
        className="ab-hero__title"
        lines={['Small studio.', <span key="b" className="ab-accent">Big thinking.</span>]}
      />
      <Reveal as="p" delay={2} className="ab-hero__lead">
        We&rsquo;re Studio Liberny, an independent creative studio working across brand identity, strategy, and the web.
      </Reveal>

      <figure ref={photoRef} className={`ab-hero__figure ${photoVisible ? 'is-visible' : ''}`}>
        <div className="ab-hero__frame">
          {photo ? (
            <img src={photo} alt="Creative direction meets technical thinking at Studio Liberny" className="ab-hero__img" width="1400" height="788" fetchPriority="high" decoding="async" />
          ) : (
            <div className="ab-hero__img ab-placeholder" role="img" aria-label="Studio photo placeholder" />
          )}
        </div>
        <figcaption className="ab-hero__captions">
          <span>Creative direction meets technical thinking.</span>
          <span>Colombo, Sri Lanka.</span>
        </figcaption>
      </figure>
    </section>
  );
};

export default AboutHero;
