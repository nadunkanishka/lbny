import { Reveal, MaskLines } from '@/components/ui/Motion';
import { PROCESS } from '../../data';
import ProcessRow from './ProcessRow';
import './AboutProcess.css';

export const AboutProcess = ({ steps = PROCESS }) => (
  <section className="ab-process">
    <div className="ab-wrap">
      <div className="ab-process__head">
        <MaskLines lines={['From first', 'question to', <span key="n" className="ab-accent ab-accent--lime">what&rsquo;s next.</span>]} />
        <Reveal as="p" delay={2} className="ab-process__lead">
          A clear process gives every idea room to grow, grounded in your goals.
        </Reveal>
      </div>
      <ol className="ab-process__list">
        {steps.map((item, i) => <ProcessRow key={item.n} item={item} index={i} />)}
      </ol>
    </div>
  </section>
);

export default AboutProcess;
