import PageShell from '@/components/layout/PageShell';
import { Reveal } from '@/components/ui/Motion';
import { useSEO } from '@/hooks/useSEO';
import './About.css';
import AboutHero from './components/AboutHero';
import AboutStory from './components/AboutStory';
import AboutMean from './components/AboutMean';
import AboutProcess from './components/AboutProcess';
import AboutTeam from './components/AboutTeam';
import AboutClosing from './components/AboutClosing';

export const AboutPage = () => {
  useSEO({
    title: 'About Studio Liberny | Brand & Web Design Studio, Colombo',
    description:
      'Studio Liberny is an independent creative studio in Colombo, Sri Lanka. Meet the team behind our brand identity, strategy and web design work.',
    path: '/about',
  });

  return (
    <PageShell className="about-page" grid={false}>
      <AboutHero />
      <AboutStory />
      <div className="ab-wrap">
        <Reveal className="ab-rule" />
      </div>
      <AboutMean />
      <AboutProcess />
      <AboutTeam />
      <AboutClosing />
    </PageShell>
  );
};

export default AboutPage;
