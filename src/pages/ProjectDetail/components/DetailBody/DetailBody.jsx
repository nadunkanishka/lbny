import Button from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Motion';
import DetailScreens from '../DetailScreens';
import DetailBrand from '../DetailBrand';
import DetailCompare from '../DetailCompare';
import DetailProcess from '../DetailProcess';
import DetailMockups from '../DetailMockups';
import DetailQuote from '../DetailQuote';
import './DetailBody.css';

/**
 * Body: overview, then the showcase blocks (each only when the project has the images or data, or
 * when empty slots are being shown), then story, scope and the CTA. Colour is rationed: one lavender
 * band per page (screens, or mockups when there are no screens); the rest sit on the page background.
 */
export const DetailBody = ({ project, assets, slots }) => {
  const isWeb = project.disciplines.includes('Web');
  const isBrand = project.disciplines.includes('Brand identity');

  const hasScreens = assets.desktop.length > 0 || assets.mobile.length > 0 || (slots && isWeb);
  const hasBrand = assets.logo.length > 0 || Boolean(project.brand) || (slots && isBrand);
  const hasCompare = assets.before.length > 0 || assets.after.length > 0 || slots;
  const hasProcess = assets.process.length > 0 || slots;
  const hasMockups = assets.mockup.length > 0 || (slots && isBrand);
  const hasQuote = Boolean(project.quote) || slots;

  // Running 01, 02, 03 across whichever bands are present
  let n = 0;
  const nextNumber = () => String(++n).padStart(2, '0');

  return (
    <div className="pd-body">
      <div className="pj-wrap">
        <section className="pd-block pd-block--first">
          <Reveal as="h2" className="pd-block__label">Overview</Reveal>
          <div className="pd-block__main">
            <Reveal as="p" delay={1} className="pd-statement">{project.summary}</Reveal>
          </div>
        </section>
      </div>

      {hasScreens && <DetailScreens project={project} assets={assets} slots={slots} number={nextNumber()} tone="lavender" />}
      {hasBrand && <DetailBrand project={project} assets={assets} slots={slots} number={nextNumber()} />}
      {hasCompare && <DetailCompare project={project} assets={assets} slots={slots} number={nextNumber()} />}
      {hasProcess && <DetailProcess project={project} assets={assets} slots={slots} number={nextNumber()} />}
      {hasMockups && (
        <DetailMockups project={project} assets={assets} slots={slots} number={nextNumber()} tone={hasScreens ? 'paper' : 'lavender'} />
      )}
      {hasQuote && <DetailQuote project={project} slots={slots} />}

      <div className="pj-wrap">
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

        <Reveal className="pd-body__cta">
          <Button to="/contact" size="sm">Start a project like this</Button>
        </Reveal>
      </div>
    </div>
  );
};

export default DetailBody;
