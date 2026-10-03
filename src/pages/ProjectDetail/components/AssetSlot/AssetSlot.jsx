/** Labelled placeholder for an image that hasn't been added yet (dev / ?slots only). */
export const AssetSlot = ({ name, hint, ratio = '16 / 10', className = '' }) => (
  <div
    className={`pd-slot ${className}`}
    style={{ aspectRatio: ratio }}
    role="img"
    aria-label={`Placeholder for ${name}`}
  >
    <span className="pd-slot__name">{name}</span>
    {hint && <span className="pd-slot__hint">{hint}</span>}
  </div>
);

export default AssetSlot;
