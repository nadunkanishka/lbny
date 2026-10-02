import './ProjectPlate.css';

/** Generated project visual: colour field, outlined number and the client mark. Swaps to `project.image` when set. */
export const ProjectPlate = ({ project, index, className = '' }) => (
  <div className={`pj-plate ${className}`} style={{ '--pj-c': project.color }} aria-hidden="true">
    {project.image ? (
      <img className="pj-plate__img" src={project.image} alt="" loading="lazy" decoding="async" />
    ) : (
      <>
        <span className="pj-plate__orb" />
        <span className="pj-plate__num">{String(index + 1).padStart(2, '0')}</span>
        {project.logo ? (
          <img className="pj-plate__logo" src={project.logo} alt="" loading="lazy" decoding="async" />
        ) : (
          <span className="pj-plate__word">{project.name}</span>
        )}
      </>
    )}
    <span className="pj-plate__tag">{project.disciplines.join(' / ')}</span>
  </div>
);

export default ProjectPlate;
