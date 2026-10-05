import { useState } from 'react';
import { Reveal } from '@/components/ui/Motion';
import AssetSlot from '../AssetSlot';
import SectionHead from '../SectionHead';
import Stage from '../Stage';
import Fig from '../Fig';
import './DetailCompare.css';

/**
 * Drag-to-compare. A transparent native range input sits over the image, so mouse, touch and the
 * arrow keys all work; the "before" image is revealed with clip-path.
 */
const CompareSlider = ({ before, after, label }) => {
  const [pos, setPos] = useState(50);

  return (
    <div className="pd-crop">
      <div className="pd-compare" style={{ '--pos': `${pos}%` }}>
        <div className="pd-compare__layer">
          {after ? <img src={after.src} alt={`${label}, after`} loading="lazy" decoding="async" /> : <AssetSlot name="after-1.webp" hint="The new version" ratio="16 / 10" />}
        </div>
        <div className="pd-compare__layer pd-compare__layer--before">
          {before ? <img src={before.src} alt={`${label}, before`} loading="lazy" decoding="async" /> : <AssetSlot name="before-1.webp" hint="The old version" ratio="16 / 10" />}
        </div>

        <span className="pd-compare__chip pd-compare__chip--before">Before</span>
        <span className="pd-compare__chip pd-compare__chip--after">After</span>

        <input
          className="pd-compare__range"
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Drag to compare ${label}, before and after`}
        />
        <span className="pd-compare__bar" aria-hidden="true">
          <span className="pd-compare__knob">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 6 3 12 9 18" />
              <polyline points="15 6 21 12 15 18" />
            </svg>
          </span>
        </span>
      </div>
    </div>
  );
};

/** Old vs new. Pairs are before-N / after-N. */
export const DetailCompare = ({ project, assets, slots, number }) => {
  const count = Math.max(assets.before.length, assets.after.length);
  const pairs = Array.from({ length: count }, (_, i) => ({
    before: assets.before[i],
    after: assets.after[i],
    key: `pair-${i + 1}`,
  }));
  const list = pairs.length ? pairs : slots ? [{ before: null, after: null, key: 'pair-1' }] : [];

  return (
    <Stage tone="paper" className="pd-comparison">
      <div className="pj-wrap">
        <SectionHead number={number} label="Before / after" title="Before and after" project={project.name} />

        {list.map((p, i) => (
          <Reveal key={p.key} variant="scale" className="pd-comparison__item">
            <CompareSlider before={p.before} after={p.after} label={`${project.name}, comparison ${i + 1}`} />
            <Fig>{project.captions?.[`compare-${i + 1}`] ?? 'Before and after. Drag to compare'}</Fig>
          </Reveal>
        ))}
      </div>
    </Stage>
  );
};

export default DetailCompare;
