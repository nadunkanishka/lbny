import PageShell from '@/components/layout/PageShell';
import PageHeader from '@/components/layout/PageHeader';
import { useSEO } from '@/hooks/useSEO';

export const ProjectsPage = () => {
  useSEO({
    title: 'Projects | Brand & Web Design Portfolio | Studio Liberny',
    description:
      'Explore Studio Liberny\'s portfolio of creative projects — from branding and UI design to full digital experiences crafted with precision.',
    path: '/projects',
    noindex: true, // thin "coming soon" page: remove this line when the portfolio is live
  });

  return (
    <PageShell className="empty-page" container>
      <PageHeader badge="PORTFOLIO / PROJECTS" title="Projects" subtitle="Coming Soon" />
    </PageShell>
  );
};

export default ProjectsPage;
