import AssetSlot from '../AssetSlot';
import './PhoneFrame.css';

export const PhoneFrame = ({ src, alt = '', slotName = 'mobile-1.webp', className = '' }) => (
  <figure className={`pd-phone ${className}`}>
    <div className="pd-phone__screen">
      {src ? (
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      ) : (
        <AssetSlot name={slotName} hint="Phone screenshot, 390 × 844" ratio="9 / 19.5" />
      )}
    </div>
  </figure>
);

export default PhoneFrame;
