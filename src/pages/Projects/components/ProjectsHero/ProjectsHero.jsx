import { Reveal, MaskLines } from '@/components/ui/Motion';
import './ProjectsHero.css';

export const ProjectsHero = () => (
  <header className="pj-head pj-wrap">
    <MaskLines
      as="h1"
      className="pj-title"
      lines={['Selected', <span key="w" className="pj-accent">work.</span>]}
    />
    <Reveal as="p" delay={2} className="pj-head__lead">
      <span>Websites designed and built to put the work first.</span>
      <span className="pj-hint pj-hint--hover">Hover a name for a peek, then open it to read the story.</span>
      <span className="pj-hint pj-hint--touch">Tap a project to read the story.</span>
    </Reveal>
  </header>
);

export default ProjectsHero;
