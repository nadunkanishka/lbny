import { Reveal, MaskLines } from '@/components/ui/Motion';
import './ProjectsHero.css';

export const ProjectsHero = ({ count }) => (
  <header className="pj-head pj-wrap">
    <MaskLines
      as="h1"
      className="pj-title"
      lines={['Selected', <span key="w" className="pj-accent">work.</span>]}
    />
    <Reveal as="p" delay={2} className="pj-head__lead">
      {count} projects across brand identity and the web.{' '}
      <span className="pj-hint pj-hint--hover">Hover a name to peek, click to read the story.</span>
      <span className="pj-hint pj-hint--touch">Tap a project to read the story.</span>
    </Reveal>
  </header>
);

export default ProjectsHero;
