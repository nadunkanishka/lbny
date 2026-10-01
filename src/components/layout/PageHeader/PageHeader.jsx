import './PageHeader.css';

/** Badge + title + subtitle block used at the top of simple pages. `children` render below (e.g. a button). */
export const PageHeader = ({ badge, title, subtitle, style, children }) => (
  <div className="page-header" style={style}>
    <div className="page-badge">
      <span className="badge-dot"></span>
      <span>{badge}</span>
    </div>
    <h1 className="page-title">{title}</h1>
    <p className="page-subtitle">{subtitle}</p>
    {children}
  </div>
);

export default PageHeader;
