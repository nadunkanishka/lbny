import { Reveal } from '@/components/ui/Motion';
import './PlanCard.css';

/** One pricing plan. `offset` is its position relative to the active card in the mobile coverflow. */
export const PlanCard = ({ plan, index, offset, onSelect }) => (
  <Reveal
    as="article"
    delay={index + 1}
    className={`pr-slot${offset === 0 ? ' is-active' : ''}`}
    style={{ '--o': offset, '--abs': Math.abs(offset), zIndex: 10 - Math.abs(offset) }}
    onClick={offset !== 0 ? onSelect : undefined}
  >
    <div className={`pr-card${plan.featured ? ' pr-card--featured' : ''}`}>
      <p className="pr-card__kicker">{plan.kicker}</p>
      <h2 className="pr-card__title">
        {plan.title[0]}
        <span className="pr-card__title-accent">{plan.title[1]}</span>
      </h2>
      <p className="pr-card__text">{plan.text}</p>

      <ul className="pr-card__list">
        {plan.features.map((f) => <li key={f}>{f}</li>)}
      </ul>

      <div className="pr-card__foot">
        <p className="pr-card__price">
          <span className="pr-card__from">From</span>
          <span className="pr-card__amount">{plan.price}</span>
        </p>
        <p className="pr-card__timeline">{plan.timeline}</p>
      </div>
    </div>
  </Reveal>
);

export default PlanCard;
