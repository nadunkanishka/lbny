import { Link } from 'react-router-dom';
import { Reveal, MaskLines } from '@/components/ui/Motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ProjectPlate from '@/pages/Projects/components/ProjectPlate';
import './DetailHero.css';

export const DetailHero = ({ project, index }) => {
  const [figRef, visible] = useScrollReveal(0.1);

  return (
    <header className="pd-hero pj-wrap">
      <Reveal as="div" className="pd-hero__top">
        <Link to="/projects" className="pd-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          All projects
        </Link>
        <span className="pd-hero__index">
          {String(index + 1).padStart(2, '0')} · {project.disciplines.join(' / ')}
        </span>
      </Reveal>

      <MaskLines as="h1" className="pd-title" lines={[project.name]} />

      <figure ref={figRef} className={`pd-hero__figure${visible ? ' is-visible' : ''}`}>
        <ProjectPlate project={project} index={index} className="pd-hero__plate" />
      </figure>
    </header>
  );
};

export default DetailHero;
