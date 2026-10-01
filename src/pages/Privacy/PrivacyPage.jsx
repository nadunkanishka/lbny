import PageShell from '@/components/layout/PageShell';
import LegalSection from '@/components/sections/LegalSection';
import { useSEO } from '@/hooks/useSEO';
import { PRIVACY } from './data';

export const PrivacyPage = () => {
  useSEO({
    title: 'Privacy Policy | Studio Liberny',
    description:
      'Learn about how Studio Liberny collects, uses, and protects your personal and project information.',
    path: '/privacy',
  });

  return (
    <PageShell container>
      <LegalSection badge="LEGAL / PRIVACY" title="Privacy Policy" updated="Last updated: September 2026" sections={PRIVACY} />
    </PageShell>
  );
};

export default PrivacyPage;
