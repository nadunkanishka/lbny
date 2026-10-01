import { useRef, useState } from 'react';
import { Reveal, MaskLines } from '@/components/ui/Motion';
import { TEAM } from '../../data';
import './AboutTeam.css';

export const AboutTeam = ({ team = TEAM }) => {
  // Team coverflow (mobile): the active member sits centred, neighbours tilt away at the sides
  const [active, setActive] = useState(0);
  const touchX = useRef(null);
  const step = (dir) => setActive((a) => (a + dir + team.length) % team.length);

  const offsetOf = (i) => {
    let o = (i - active + team.length) % team.length;
    if (o > team.length / 2) o -= team.length;
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
    <section className="ab-team ab-wrap">
      <MaskLines lines={['The minds', <span key="l">behind <span className="ab-accent ab-accent--soft">Liberny.</span></span>]} />
      <Reveal as="p" delay={2} className="ab-team__lead">
        Three people. One shared standard.<br />Meet the people who will make your project happen.
      </Reveal>

      <div className="ab-team__grid" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {team.map((m, i) => {
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
          {team.map((m, i) => <span key={m.name} className={`ab-team__dot${i === active ? ' is-active' : ''}`} />)}
        </div>
        <button type="button" className="ab-team__arrow" aria-label="Next team member" onClick={() => step(1)}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default AboutTeam;
