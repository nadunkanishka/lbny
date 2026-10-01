import PageShell from '@/components/layout/PageShell';
import LegalSection from '@/components/sections/LegalSection';
import { useSEO } from '@/hooks/useSEO';
import { TERMS } from './data';

export const TermsPage = () => {
  useSEO({
    title: 'Terms & Conditions | Studio Liberny',
    description:
      'Review the terms and conditions for engaging Studio Liberny creative design and development services.',
    path: '/terms',
  });

  return (
    <PageShell container>
      <LegalSection badge="LEGAL / TERMS" title="Terms & Conditions" updated="Last updated: September 2026" sections={TERMS} />
    </PageShell>
  );
};

export default TermsPage;
