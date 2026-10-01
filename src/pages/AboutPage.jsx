import React, { useEffect, useRef, useState } from 'react';
import Button from '../components/ui/Button';
import { Reveal, MaskLines } from '../components/ui/Motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSEO } from '../hooks/useSEO';
import './About.css';

/* ─────────── Content ─────────── */

const STORY = [
  'Studio Liberny began in January 2026. After working independently as a designer since 2017, founder Dumindu Kavishka took the next step: building a studio where ambitious ideas could grow beyond a solo practice.',
  'Today, Dumindu leads the creative work as Founder & Creative Director. His brother Nadun works as Web Developer, alongside Lassen, a Senior Web Developer who brings further industry experience to the team. Together, we connect visual identity with digital execution.',
  'Our work is guided by creativity, excellence, adaptability and empathy. We listen closely, think openly and care about how the finished work feels in the real world.',
];

const PROCESS = [
  { n: '01', title: 'Discover', text: 'We start with a conversation about your business, audience and ambitions. We ask questions, look at what exists and agree on the challenge.' },
  { n: '02', title: 'Define', text: "We turn what we've learned into a direction: the priorities, visual approach and scope that will guide the work." },
  { n: '03', title: 'Create', text: 'We explore, design and refine. You see the work take shape and share feedback at key points along the way.' },
  { n: '04', title: 'Deliver', text: 'We prepare the final assets or website for use, hand everything over clearly and make sure you know what comes next.' },
];

// `photo` is optional; without one a neutral placeholder is shown.
const TEAM = [
  { name: 'Nadun Kanishka', role: 'Web Developer', photo: '/assets/about/nadun.webp', text: 'Connects design and development to build digital experiences that work across devices.' },
  { name: 'Dumindu Kavishka', role: 'Founder & Creative Director', photo: '/assets/about/dumindu.webp', text: 'Shapes the visual identity and creative direction, from the first idea to the finest detail.' },
  { name: 'Lassen Deenath', role: 'Sr. Web Developer', photo: '/assets/about/lassen.webp', text: 'Brings industry experience to website development and technical problem-solving.' },
];

// Studio photo under the hero text.
const HERO_PHOTO = '/assets/about/studio.webp';

/* ─────────── Animation helpers ─────────── */

/** Counts from `from` up to `to` the first time it is seen. */
const CountUp = ({ from = 0, to, className = '' }) => {
  const [ref, visible] = useScrollReveal(0.5);
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!visible) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduce ? 1 : 2600;
    const start = performance.now();
    let id;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(Math.round(from + (to - from) * (1 - Math.pow(1 - t, 3))));
      if (t < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [visible, from, to]);

  return <span ref={ref} className={className} aria-label={String(to)}>{value}</span>;
};

const ProcessRow = ({ item, index }) => {
  const [ref, visible] = useScrollReveal(0.35);
  return (
    <li ref={ref} className={`ab-process__row ${visible ? 'is-visible' : ''}`} style={{ '--i': index }}>
      <span className="ab-process__num">{item.n}</span>
      <h3 className="ab-process__name">{item.title}</h3>
      <p className="ab-process__text">{item.text}</p>
    </li>
  );
};

/* ─────────── Page ─────────── */

export const AboutPage = () => {
  useSEO({
    title: 'About Studio Liberny | Brand & Web Design Studio, Colombo',
    description:
      'Studio Liberny is an independent creative studio in Colombo, Sri Lanka. Meet the team behind our brand identity, strategy and web design work.',
    path: '/about',
  });

  const [photoRef, photoVisible] = useScrollReveal(0.2);

  // Team coverflow (mobile): the active member sits centred, neighbours tilt away at the sides
  const [active, setActive] = useState(0);
  const touchX = useRef(null);
  const step = (dir) => setActive((a) => (a + dir + TEAM.length) % TEAM.length);

  const offsetOf = (i) => {
    let o = (i - active + TEAM.length) % TEAM.length;
    if (o > TEAM.length / 2) o -= TEAM.length;
    return o;
  };

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
  };

  return (
    <div className="page-wrapper about-page">

      {/* ── Hero ── */}
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
            {HERO_PHOTO ? (
              <img src={HERO_PHOTO} alt="Creative direction meets technical thinking at Studio Liberny" className="ab-hero__img" width="1400" height="788" fetchpriority="high" decoding="async" />
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

      {/* ── Story ── */}
      <section className="ab-story ab-wrap">
        <div className="ab-story__text">
          {STORY.map((p, i) => (
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

      <div className="ab-wrap">
        <Reveal className="ab-rule" />
      </div>

      {/* ── Make it mean something ── */}
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

      {/* ── Process ── */}
      <section className="ab-process">
        <div className="ab-wrap">
          <div className="ab-process__head">
            <MaskLines lines={['From first', 'question to', <span key="n" className="ab-accent ab-accent--lime">what&rsquo;s next.</span>]} />
            <Reveal as="p" delay={2} className="ab-process__lead">
              A clear process gives every idea room to grow, grounded in your goals.
            </Reveal>
          </div>
          <ol className="ab-process__list">
            {PROCESS.map((item, i) => <ProcessRow key={item.n} item={item} index={i} />)}
          </ol>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="ab-team ab-wrap">
        <MaskLines lines={['The minds', <span key="l">behind <span className="ab-accent ab-accent--soft">Liberny.</span></span>]} />
        <Reveal as="p" delay={2} className="ab-team__lead">
          Three people. One shared standard.<br />Meet the people who will make your project happen.
        </Reveal>

        <div className="ab-team__grid" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {TEAM.map((m, i) => {
            const o = offsetOf(i);
            return (
              <Reveal
                as="article"
                key={m.name}
                delay={i + 1}
                className={`ab-member${o === 0 ? ' is-active' : ''}`}
                style={{ '--o': o, '--abs': Math.abs(o), zIndex: 10 - Math.abs(o) }}
                onClick={o !== 0 ? () => setActive(i) : undefined}
              >
                <div className="ab-member__card">
                  <div className="ab-member__photo">
                    {m.photo ? (
                      <img src={m.photo} alt={m.name} width="900" height="1125" loading="lazy" decoding="async" />
                    ) : (
                      <div className="ab-placeholder" role="img" aria-label={`${m.name} photo placeholder`} />
                    )}
                  </div>
                  <h3 className="ab-member__name">{m.name}</h3>
                  <p className="ab-member__role">{m.role}</p>
                  <p className="ab-member__text">{m.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="ab-team__nav" aria-label="Team carousel controls">
          <button type="button" className="ab-team__arrow" aria-label="Previous team member" onClick={() => step(-1)}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <div className="ab-team__dots" aria-hidden="true">
            {TEAM.map((m, i) => <span key={m.name} className={`ab-team__dot${i === active ? ' is-active' : ''}`} />)}
          </div>
          <button type="button" className="ab-team__arrow" aria-label="Next team member" onClick={() => step(1)}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="ab-close ab-wrap">
        <Reveal variant="scale">
          <img src="/assets/icon-purple.svg" alt="" className="ab-close__icon" width="56" height="56" />
        </Reveal>
        <Reveal as="p" delay={1} className="ab-close__text">
          A brand people remember. A website people want to use. A clear direction for what comes next.
        </Reveal>
        <Reveal delay={2}>
          <Button to="/contact" size="sm">Reach us</Button>
        </Reveal>
      </section>

    </div>
  );
};

export default AboutPage;
