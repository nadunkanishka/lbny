import PageShell from '@/components/layout/PageShell';
import { useSEO } from '@/hooks/useSEO';
import './Projects.css';
import { PROJECTS } from './data';
import ProjectsHero from './components/ProjectsHero';
import ProjectIndex from './components/ProjectIndex';
import ProjectsClosing from './components/ProjectsClosing';

export const ProjectsPage = () => {
  useSEO({
    title: 'Projects | Brand & Web Design Portfolio | Studio Liberny',
    description:
      'Selected brand identity and web design projects by Studio Liberny, from visual identities to websites built to perform.',
    path: '/projects',
  });

  return (
    <PageShell className="projects-page" grid={false}>
      <ProjectsHero count={PROJECTS.length} />
      <ProjectIndex />
      <ProjectsClosing />
    </PageShell>
  );
};

export default ProjectsPage;
