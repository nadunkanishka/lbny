import { useState } from 'react';
import { Reveal } from '@/components/ui/Motion';
import Modal from '@/components/ui/Modal';
import AssetSlot from '../AssetSlot';
import SectionHead from '../SectionHead';
import Stage from '../Stage';
import Fig from '../Fig';
import './DetailMockups.css';

/** Brand applications (cards, packaging, signage, social...) in an asymmetric grid; click to enlarge. */
export const DetailMockups = ({ project, assets, slots, number, tone = 'paper' }) => {
  const [open, setOpen] = useState(null);
  const items = assets.mockup.length
    ? assets.mockup
    : slots
      ? [1, 2, 3, 4, 5, 6].map((n) => ({ src: null, key: `mockup-${n}` }))
      : [];
  const caption = (item, i) => project.captions?.[item.key] ?? `${project.name}, application ${i + 1}`;
  const current = open !== null ? items[open] : null;

  return (
    <Stage tone={tone} className="pd-mockups">
      <div className="pj-wrap">
        <SectionHead number={number} label="In the wild" title="In the wild" project={project.name} />

        <div className="pd-mock-grid">
          {items.map((item, i) => (
            <Reveal as="figure" key={item.key} variant="scale" delay={Math.min((i % 3) + 1, 6)} className="pd-mock">
              <div className={`pd-mock__media${i === 0 ? ' pd-crop' : ''}`}>
                {item.src ? (
                  <button type="button" className="pd-mock__btn" onClick={() => setOpen(i)} aria-label={`Enlarge: ${caption(item, i)}`}>
                    <img src={item.src} alt={caption(item, i)} loading="lazy" decoding="async" />
                  </button>
                ) : (
                  <AssetSlot name={`${item.key}.webp`} hint="Mockup: card, packaging, signage, social post" ratio="auto" className="pd-mock__slot" />
                )}
              </div>
              <Fig>{caption(item, i)}</Fig>
            </Reveal>
          ))}
        </div>
      </div>

      {current && (
        <Modal className="pd-lightbox" title={caption(current, open)} onClose={() => setOpen(null)}>
          <img className="pd-lightbox__img" src={current.src} alt={caption(current, open)} />
        </Modal>
      )}
    </Stage>
  );
};

export default DetailMockups;
