import PageShell from '@/components/layout/PageShell';
import Contact from '@/components/sections/Contact';
import { useSEO } from '@/hooks/useSEO';

export const ContactPage = () => {
  useSEO({
    title: 'Contact Studio Liberny | Start Your Brand or Website Project',
    description:
      'Tell us about your brand or website project. Studio Liberny replies within one working day. Based in Colombo, working worldwide.',
    path: '/contact',
  });

  return (
    <PageShell className="contact-page">
      <Contact />
    </PageShell>
  );
};

export default ContactPage;
