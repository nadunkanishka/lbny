/**
 * A full-bleed colour band. `tone` sets the background and re-points the text and frame tokens
 * (see ProjectDetail.css) so everything inside adapts. `hang` lets the last element overhang the
 * bottom edge into whatever follows.
 */
export const Stage = ({ tone = 'paper', hang = false, as: Tag = 'section', className = '', children, ...rest }) => (
  <Tag className={`pd-stage pd-stage--${tone}${hang ? ' pd-hang' : ''} ${className}`.trim()} {...rest}>
    {children}
  </Tag>
);

export default Stage;
