import { Reveal } from '@/components/ui/Motion';
import BrowserFrame from '../BrowserFrame';
import PhoneFrame from '../PhoneFrame';
import SectionHead from '../SectionHead';
import Stage from '../Stage';
import Fig from '../Fig';
import './DetailScreens.css';

/** Website work: scrolling browser window(s), then phones hanging over the bottom edge. */
export const DetailScreens = ({ project, assets, slots, number, tone = 'paper' }) => {
  const desktops = assets.desktop.length ? assets.desktop : slots ? [{ src: null, key: 'desktop-1' }] : [];
  const phones = assets.mobile.length
    ? assets.mobile
    : slots
      ? [1, 2, 3].map((n) => ({ src: null, key: `mobile-${n}` }))
      : [];

  return (
    <Stage tone={tone} hang={phones.length > 0} className="pd-screens">
      <div className="pj-wrap">
        <SectionHead number={number} label="Screens" title="The screens" project={project.name} />

        {desktops.map((d, i) => (
          <Reveal key={d.key} variant="scale" className="pd-screens__desktop">
            <BrowserFrame
              scroll
              src={d.src}
              url={project.url}
              slotName={`${d.key}.webp`}
              alt={`${project.name} website, page ${i + 1}`}
            />
            <Fig>{project.captions?.[d.key] ?? `${project.name}, page ${i + 1}`}</Fig>
          </Reveal>
        ))}

        {phones.length > 0 && (
          <div className="pd-phones">
            {phones.map((p, i) => (
              <Reveal key={p.key} delay={Math.min(i + 1, 6)} className="pd-phones__item">
                <PhoneFrame src={p.src} slotName={`${p.key}.webp`} alt={`${project.name} on mobile, screen ${i + 1}`} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </Stage>
  );
};

export default DetailScreens;
