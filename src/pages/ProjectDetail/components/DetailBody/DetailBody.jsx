import Button from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Motion';
import './DetailBody.css';

/** Long-form body: overview statement, optional story, scope list, optional gallery. */
export const DetailBody = ({ project }) => (
  <div className="pd-body pj-wrap">
    <section className="pd-block">
      <Reveal as="h2" className="pd-block__label">Overview</Reveal>
      <div className="pd-block__main">
        <Reveal as="p" delay={1} className="pd-statement">{project.summary}</Reveal>
      </div>
    </section>

    {project.story?.map((s) => (
      <section className="pd-block" key={s.title}>
        <Reveal as="h2" className="pd-block__label">{s.title}</Reveal>
        <div className="pd-block__main">
          <Reveal as="p" delay={1} className="pd-copy">{s.text}</Reveal>
        </div>
      </section>
    ))}

    <section className="pd-block">
      <Reveal as="h2" className="pd-block__label">Scope</Reveal>
      <ol className="pd-block__main pd-scope">
        {project.services.map((s, i) => (
          <Reveal as="li" key={s} delay={Math.min(i + 1, 6)} className="pd-scope__item">
            <span className="pd-scope__num">{String(i + 1).padStart(2, '0')}</span>
            <span className="pd-scope__name">{s}</span>
          </Reveal>
        ))}
      </ol>
    </section>

    {project.gallery?.length > 0 && (
      <div className="pd-gallery">
        {project.gallery.map((src) => (
          <Reveal as="figure" variant="scale" key={src} className="pd-gallery__item">
            <img src={src} alt="" loading="lazy" decoding="async" />
          </Reveal>
        ))}
      </div>
    )}

    <Reveal className="pd-body__cta">
      <Button to="/contact" size="sm">Start a project like this</Button>
    </Reveal>
  </div>
);

export default DetailBody;
