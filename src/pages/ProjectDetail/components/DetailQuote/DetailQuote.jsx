import { Reveal } from '@/components/ui/Motion';
import AssetSlot from '../AssetSlot';
import Stage from '../Stage';
import './DetailQuote.css';

/** One huge pull quote from the client, with a rule in the project's colour. Data: project.quote = { text, name, role }. */
export const DetailQuote = ({ project, slots }) => {
  const q = project.quote;
  if (!q && !slots) return null;

  return (
    <Stage tone="paper" className="pd-quote">
      <div className="pj-wrap pd-quote__inner">
        <span className="pd-quote__mark" aria-hidden="true">&ldquo;</span>
        {q ? (
          <Reveal as="figure" className="pd-quote__fig">
            <blockquote className="pd-quote__text">{q.text}</blockquote>
            <figcaption className="pd-quote__by">
              <b>{q.name}</b>
              {q.role && <span>{q.role}</span>}
            </figcaption>
          </Reveal>
        ) : (
          <AssetSlot name="project.quote" hint="In Projects/data.js: quote: { text, name, role }" ratio="16 / 4" />
        )}
      </div>
    </Stage>
  );
};

export default DetailQuote;
