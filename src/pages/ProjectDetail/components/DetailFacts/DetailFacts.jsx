import { Reveal } from '@/components/ui/Motion';
import './DetailFacts.css';

/** Hairline-divided fact strip (client / discipline / services / result). Not cards. */
export const DetailFacts = ({ project }) => {
  const facts = [
    ['Client', project.name],
    ['Discipline', project.disciplines.join(', ')],
    ['Services', project.services.join(', ')],
    project.result && ['Result', project.result],
  ].filter(Boolean);

  return (
    <Reveal as="section" className="pd-facts pj-wrap" aria-label="Project facts">
      <dl className="pd-facts__list">
        {facts.map(([term, value]) => (
          <div className="pd-facts__item" key={term}>
            <dt>{term}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
};

export default DetailFacts;
