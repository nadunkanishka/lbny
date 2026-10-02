import { Link } from 'react-router-dom';
import './DetailNext.css';

/** Full-bleed "next project" band in the next project's colour; the whole band is the link. */
export const DetailNext = ({ project }) => (
  <Link
    to={`/projects/${project.slug}`}
    className="pd-next"
    style={{ '--pj-c': project.color }}
    aria-label={`Next project: ${project.name}`}
  >
    <div className="pj-wrap pd-next__inner">
      <span className="pd-next__label">Next project</span>
      <span className="pd-next__name">{project.name}</span>
      <span className="pd-next__arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </div>
  </Link>
);

export default DetailNext;
