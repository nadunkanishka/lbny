import { Link } from 'react-router-dom';
import { Reveal, MaskLines } from '@/components/ui/Motion';
import ProjectPlate from '@/pages/Projects/components/ProjectPlate';
import BrowserFrame from '../BrowserFrame';
import AssetSlot from '../AssetSlot';
import './DetailHero.css';

/** Which visual breaks out of the colour field: cover, first website shot, primary logo, an empty slot, or the generated plate. */
const heroVisual = (project, index, assets, slots) => {
  const isWeb = project.disciplines.includes('Web');
  if (assets.cover) {
    return (
      <figure className="pd-cover">
        <img src={assets.cover.src} alt={`${project.name} project cover`} decoding="async" fetchPriority="high" />
      </figure>
    );
  }
  if (assets.desktop[0]) {
    return <BrowserFrame src={assets.desktop[0].src} url={project.url} alt={`${project.name} website`} />;
  }
  if (assets.logo[0]) {
    return (
      <figure className="pd-logo-tile">
        <img src={assets.logo[0].src} alt={`${project.name} logo`} decoding="async" />
      </figure>
    );
  }
  if (slots && isWeb) return <BrowserFrame url={project.url} slotName="cover.webp or desktop-1.webp" />;
  if (slots) {
    return (
      <figure className="pd-logo-tile">
        <AssetSlot name="cover.webp or logo-1.webp" hint="Hero visual: a cover image, or the primary logo" ratio="16 / 7" />
      </figure>
    );
  }
  return <ProjectPlate project={project} index={index} className="pd-hero__plate" />;
};

export const DetailHero = ({ project, index, assets, slots }) => (
  <header className="pd-hero" style={{ '--pj-c': project.color }}>
    <div className="pd-hero__field">
      <span className="pd-hero__num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <div className="pj-wrap pd-hero__inner">
        <Reveal as="div" className="pd-hero__top">
          <Link to="/projects" className="pd-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            All projects
          </Link>
        </Reveal>

        <MaskLines as="h1" className="pd-title" lines={[project.name]} />

        <Reveal as="ul" delay={2} className="pd-tags" aria-label="Disciplines">
          {project.disciplines.map((d) => (
            <li key={d} className="pd-tag">{d}</li>
          ))}
        </Reveal>
      </div>
    </div>

    <Reveal variant="scale" delay={2} className="pj-wrap pd-hero__stage">
      <div className="pd-crop">{heroVisual(project, index, assets, slots)}</div>
    </Reveal>
  </header>
);

export default DetailHero;
