import PageShell from '@/components/layout/PageShell';
import PageHeader from '@/components/layout/PageHeader';
import Button from '@/components/ui/Button';
import { useSEO } from '@/hooks/useSEO';

export const NotFoundPage = () => {
  useSEO({
    title: '404 - Page Not Found',
    description: 'The page you were looking for does not exist or has been moved.',
    noindex: true,
  });

  return (
    <PageShell className="empty-page" container>
      <PageHeader
        badge="ERROR 404"
        title="Page Not Found"
        subtitle="The page you are looking for doesn't exist, has been removed, or was moved to another URL."
      >
        <Button to="/">Return to Homepage</Button>
      </PageHeader>
    </PageShell>
  );
};

export default NotFoundPage;
