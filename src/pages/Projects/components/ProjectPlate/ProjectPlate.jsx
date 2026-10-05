import { getProjectAssets } from '@/pages/ProjectDetail/assets';
import './ProjectPlate.css';

/** Fixed project card: colour field with only the logo (the project's own logo file if it has one, else the client logo). */
export const ProjectPlate = ({ project, className = '' }) => {
  const src = getProjectAssets(project.slug).logo[0]?.src ?? project.logo;
  return (
    <div className={`pj-plate ${className}`} style={{ '--pj-c': project.color }} aria-hidden="true">
      {src ? (
        <img className="pj-plate__logo" src={src} alt="" loading="lazy" decoding="async" />
      ) : (
        <span className="pj-plate__word">{project.name}</span>
      )}
    </div>
  );
};

export default ProjectPlate;
