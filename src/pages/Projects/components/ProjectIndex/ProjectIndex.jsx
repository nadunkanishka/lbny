import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/ui/Motion';
import { useCursorFollow } from '@/hooks/useCursorFollow';
import ProjectPlate from '../ProjectPlate';
import { FILTERS, PROJECTS } from '../../data';
import './ProjectIndex.css';

const canFollow = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const ProjectIndex = () => {
  const [filter, setFilter] = useState('All');
  const [hovered, setHovered] = useState(null); // slug of the row under the mouse
  const [shown, setShown] = useState(0); // last previewed index, kept so the plate can fade out
  const [followEnabled] = useState(canFollow);
  const floatRef = useRef(null);

  useCursorFollow(floatRef, followEnabled);

  const matches = (p) => filter === 'All' || p.disciplines.includes(filter);
  const previewing = followEnabled && !!hovered;

  return (
    <section className="pj-index pj-wrap">
      <Reveal className="pj-filters" role="group" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className="pj-filter"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
        <span className="pj-filters__count" aria-live="polite">
          {PROJECTS.filter(matches).length} / {PROJECTS.length}
        </span>
      </Reveal>

      <ol className="pj-list">
        {PROJECTS.map((p, i) => (
          <li
            key={p.slug}
            className="pj-row"
            data-match={matches(p)}
            onPointerEnter={(e) => {
              if (e.pointerType !== 'mouse') return;
              setHovered(p.slug);
              setShown(i);
            }}
            onPointerLeave={() => setHovered((h) => (h === p.slug ? null : h))}
          >
            <Link className="pj-row__btn" to={`/projects/${p.slug}`}>
              <span className="pj-row__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="pj-row__name">{p.name}</span>
              <span className="pj-row__tags">{p.disciplines.join(' · ')}</span>
              <span className="pj-row__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </Link>
          </li>
        ))}
      </ol>

      {followEnabled && (
        <div className="pj-float" ref={floatRef} aria-hidden="true">
          <div className="pj-float__plate" data-visible={!!previewing}>
            <ProjectPlate project={PROJECTS[shown]} index={shown} />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectIndex;
