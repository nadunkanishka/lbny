import Button from '@/components/ui/Button';
import { Reveal, MaskLines } from '@/components/ui/Motion';
import './ProjectsClosing.css';

export const ProjectsClosing = () => (
  <section className="pj-closing">
    <div className="pj-wrap">
      <MaskLines className="pj-closing__title" lines={['Your project', 'is next.']} />
      <Reveal as="p" delay={2} className="pj-closing__text">
        Tell us what you&rsquo;re building and we&rsquo;ll shape the brand, the website or both around it.
      </Reveal>
      <Reveal delay={3}>
        <Button to="/contact" size="sm">Start a project</Button>
      </Reveal>
    </div>
  </section>
);

export default ProjectsClosing;
