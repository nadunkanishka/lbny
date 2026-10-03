import { Reveal, MaskLines } from '@/components/ui/Motion';

/** Running head (`01 / SCREENS ------ ZEAL BY ROCHE`) over a big tight title that rises out of a mask. */
export const SectionHead = ({ number, label, title, project }) => (
  <div className="pd-head">
    <Reveal className="pd-head__run">
      <span><b>{number}</b> / {label}</span>
      <i aria-hidden="true" />
      <span>{project}</span>
    </Reveal>
    <MaskLines
      as="h2"
      className="pd-head__title"
      lines={[
        <span key="t">
          {title}
          <span className="pd-accent">.</span>
        </span>,
      ]}
    />
  </div>
);

export default SectionHead;
