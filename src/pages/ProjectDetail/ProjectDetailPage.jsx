import { useParams } from 'react-router-dom';
import PageShell from '@/components/layout/PageShell';
import NotFoundPage from '@/pages/NotFound';
import { useSEO } from '@/hooks/useSEO';
import '../Projects/Projects.css';
import './ProjectDetail.css';
import { getProject } from '../Projects/data';
import { getProjectAssets, showSlots } from './assets';
import DetailHero from './components/DetailHero';
import DetailFacts from './components/DetailFacts';
import DetailBody from './components/DetailBody';
import DetailNext from './components/DetailNext';

const ProjectDetail = ({ project, index, next }) => {
  const assets = getProjectAssets(project.slug);
  const slots = showSlots();

  useSEO({
    title: `${project.name} | Studio Liberny`,
    description: [project.summary, project.result].filter(Boolean).join(' '),
    path: `/projects/${project.slug}`,
    image: (assets.cover ?? assets.desktop[0])?.src,
  });

  return (
    <PageShell className="projects-page project-detail" grid={false}>
      <div className="pd-page" style={{ '--pj-c': project.color }}>
        <DetailHero project={project} index={index} assets={assets} slots={slots} />
        <DetailFacts project={project} slots={slots} />
        <DetailBody project={project} assets={assets} slots={slots} />
      </div>
      {next.slug !== project.slug && <DetailNext project={next} />}
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
