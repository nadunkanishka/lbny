import { Reveal } from '@/components/ui/Motion';
import CountUp from '@/components/ui/CountUp';
import AssetSlot from '../AssetSlot';
import Stage from '../Stage';
import './DetailFacts.css';

/**
 * Black band: the result as a marker-highlighted line, optional counting-up metrics
 * (project.metrics = [{ value, suffix, label }]), then the facts as a drawn title block.
 */
export const DetailFacts = ({ project, slots }) => {
  const metrics = project.metrics ?? [];
  const facts = [
    ['Client', project.name],
    ['Discipline', project.disciplines.join(', ')],
    ['Services', project.services.join(', ')],
  ];

  return (
    <Stage tone="ink" className="pd-facts" aria-label="Project facts">
      <div className="pj-wrap">
        {project.result && (
          <Reveal className="pd-result">
            <span className="pd-result__label">The result</span>
            <p className="pd-result__text">
              <mark>{project.result}</mark>
            </p>
          </Reveal>
        )}

        {metrics.length > 0 ? (
          <Reveal delay={1} as="ul" className="pd-metrics">
            {metrics.map((m) => (
              <li className="pd-metric" key={m.label}>
                <span className="pd-metric__num">
                  <CountUp to={m.value} />
                  {m.suffix}
                </span>
                <span className="pd-metric__label">{m.label}</span>
              </li>
            ))}
          </Reveal>
        ) : (
          slots && (
            <div className="pd-metrics-slot">
              <AssetSlot name="project.metrics" hint="In Projects/data.js: metrics: [{ value: 20, suffix: '%', label: '...' }]" ratio="16 / 3" />
            </div>
          )
        )}

        <Reveal as="dl" delay={2} className="pd-titleblock">
          {facts.map(([term, value]) => (
            <div className="pd-titleblock__cell" key={term}>
              <dt>{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </Stage>
  );
};

export default DetailFacts;
