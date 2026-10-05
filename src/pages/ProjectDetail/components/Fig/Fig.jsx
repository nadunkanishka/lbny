/** Catalogue caption. The `FIG. 04` number is a CSS counter, so it follows page order automatically. */
export const Fig = ({ children, className = '' }) => (
  <p className={`pd-fig ${className}`.trim()}>
    <span>{children}</span>
  </p>
);

export default Fig;
