import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import HomePage from '@/pages/Home';
const AboutPage = lazy(() => import('@/pages/About'));
const ProjectsPage = lazy(() => import('@/pages/Projects'));
const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetail'));
const PricingPage = lazy(() => import('@/pages/Pricing'));
const ContactPage = lazy(() => import('@/pages/Contact'));
const TermsPage = lazy(() => import('@/pages/Terms'));
const PrivacyPage = lazy(() => import('@/pages/Privacy'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <div className="app-main-wrapper">
        <a className="skip-link" href="#main">Skip to content</a>
        <Navbar />
        <main id="main" tabIndex={-1}>
          {/* Home loads with the main bundle (it's the LCP page); every other route is its own chunk */}
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
