import './PageShell.css';

/**
 * Standard page wrapper. `grid` adds the ambient background grid, `container`
 * wraps the children in the centred `.page-container`.
 */
export const PageShell = ({ className = '', grid = true, container = false, children }) => (
  <div className={className ? `page-wrapper ${className}` : 'page-wrapper'}>
    {grid && <div className="page-bg-grid"></div>}
    {container ? <div className="page-container">{children}</div> : children}
  </div>
);

export default PageShell;
