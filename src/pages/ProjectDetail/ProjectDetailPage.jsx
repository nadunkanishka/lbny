import { useParams } from 'react-router-dom';
import PageShell from '@/components/layout/PageShell';
import NotFoundPage from '@/pages/NotFound';
import { useSEO } from '@/hooks/useSEO';
import '../Projects/Projects.css';
import './ProjectDetail.css';
import { getProject } from '../Projects/data';
import DetailHero from './components/DetailHero';
import DetailFacts from './components/DetailFacts';
import DetailBody from './components/DetailBody';
import DetailNext from './components/DetailNext';

const ProjectDetail = ({ project, index, next }) => {
  useSEO({
    title: `${project.name} | Studio Liberny`,
    description: [project.summary, project.result].filter(Boolean).join(' '),
    path: `/projects/${project.slug}`,
  });

  return (
    <PageShell className="projects-page project-detail" grid={false}>
      <DetailHero project={project} index={index} />
      <DetailFacts project={project} />
      <DetailBody project={project} />
      <DetailNext project={next} />
    </PageShell>
  );
};

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const data = getProject(slug);
  if (!data) return <NotFoundPage />;
  // `key` resets scroll-reveal state when moving from one project straight to the next
  return <ProjectDetail key={slug} {...data} />;
};

export default ProjectDetailPage;
