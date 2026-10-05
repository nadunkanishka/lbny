import { Reveal } from '@/components/ui/Motion';
import AssetSlot from '../AssetSlot';
import SectionHead from '../SectionHead';
import Stage from '../Stage';
import './DetailBrand.css';

/** Readable label colour on top of a swatch. */
const inkOn = (hex) => {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.55 ? '#0a0a0a' : '#ffffff';
};

/**
 * Identity board: deliberately uneven tiles (logo, reversed mark, palette, type, variants).
 * Logo files come from the assets folder; palette and fonts come from project.brand in data.js.
 */
export const DetailBrand = ({ project, assets, slots, number }) => {
  const [primary, secondary, ...variants] = assets.logo;
  const palette = project.brand?.palette ?? [];
  const fonts = project.brand?.fonts ?? [];

  // Real logo file when supplied; otherwise the client logo already on the site, forced to one colour
  const logoSrc = primary?.src ?? project.logo ?? null;
  const logoStyle = primary ? undefined : { filter: 'brightness(0)' };
  const reversedSrc = secondary?.src ?? logoSrc;
  const reversedStyle = secondary ? undefined : { filter: 'brightness(0) invert(1)' };

  return (
    <Stage tone="paper" className="pd-brand">
      <div className="pj-wrap">
      <SectionHead number={number} label="Identity" title="The identity" project={project.name} />

      <div className="pd-board">
        <Reveal variant="scale" className="pd-tile pd-tile--logo pd-crop">
          <span className="pd-tile__label pd-figtag">Logo</span>
          {logoSrc ? (
            <img className="pd-tile__logo" src={logoSrc} style={logoStyle} alt={`${project.name} logo`} loading="lazy" decoding="async" />
          ) : (
            slots && <AssetSlot name="logo-1.webp" hint="Primary logo on transparent background" ratio="16 / 9" />
          )}
        </Reveal>

        <Reveal variant="scale" delay={2} className="pd-tile pd-tile--reversed">
          <span className="pd-tile__label pd-figtag">Reversed</span>
          {reversedSrc ? (
            <img className="pd-tile__logo" src={reversedSrc} style={reversedStyle} alt={`${project.name} logo, reversed`} loading="lazy" decoding="async" />
          ) : (
            slots && <AssetSlot name="logo-2.webp" hint="Logo for dark backgrounds" ratio="1 / 1" />
          )}
        </Reveal>

        {(fonts.length > 0 || slots) && (
          <Reveal delay={1} className="pd-tile pd-tile--type">
            <span className="pd-tile__label pd-figtag">Typography</span>
            {fonts.length > 0 ? (
              <>
                <span className="pd-type__aa" style={fonts[0].family ? { fontFamily: fonts[0].family } : undefined} aria-hidden="true">Aa</span>
                <ul className="pd-type__list">
                  {fonts.map((f) => (
                    <li key={f.name}>
                      <strong>{f.name}</strong> <span>{f.role}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <AssetSlot name="project.brand.fonts" hint="In Projects/data.js: fonts: [{ name, role }]" ratio="4 / 3" />
            )}
          </Reveal>
        )}

        {(palette.length > 0 || slots) && (
          <Reveal delay={2} className="pd-tile pd-tile--palette">
            <span className="pd-tile__label pd-figtag">Palette</span>
            {palette.length > 0 ? (
              <ul className="pd-swatches">
                {palette.map((c) => (
                  <li
                    key={c.hex}
                    className="pd-swatch"
                    style={{ '--sw': c.hex, '--sw-ink': inkOn(c.hex), flexGrow: c.weight ?? 1 }}
                  >
                    <span className="pd-swatch__name">{c.name}</span>
                    <span className="pd-swatch__hex">{c.hex.toUpperCase()}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <AssetSlot name="project.brand.palette" hint="In Projects/data.js: palette: [{ name, hex }]" ratio="16 / 4" />
            )}
          </Reveal>
        )}

        {variants.map((v, i) => (
          <Reveal key={v.key} variant="scale" delay={Math.min(i + 2, 6)} className="pd-tile pd-tile--variant">
            <img src={v.src} alt={`${project.name} logo variation ${i + 1}`} loading="lazy" decoding="async" />
          </Reveal>
        ))}
      </div>
      </div>
    </Stage>
  );
};

export default DetailBrand;
