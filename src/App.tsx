/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WalkthroughExperience } from './components/WalkthroughExperience';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection, ProjectItem } from './components/ProjectsSection';
import { PropertySection } from './components/PropertySection';
import { WhyDesignLinksSection } from './components/WhyDesignLinksSection';
import { ProcessSection } from './components/ProcessSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Architectural Design');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsConsultationOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStartWalkthrough = () => {
    const el = document.getElementById('walkthrough-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-neutral-100 flex flex-col font-sans selection:bg-[#ea580c] selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Flow */}
      <main className="flex-1 w-full">
        {/* 1. Cinematic Opening Hero */}
        <HeroSection
          onExploreServices={handleExploreServices}
          onOpenConsultation={() => handleOpenConsultation()}
          onStartWalkthrough={handleStartWalkthrough}
        />

        {/* 2. Scroll-Controlled 3D Walkthrough Experience */}
        <WalkthroughExperience />

        {/* 3. About Design Links */}
        <AboutSection />

        {/* 4. Six Core Services */}
        <ServicesSection onSelectService={(svc) => handleOpenConsultation(svc)} />

        {/* 5. Project Showcase */}
        <ProjectsSection onOpenProjectModal={(project) => setSelectedProject(project)} />

        {/* 6. Property Section */}
        <PropertySection onRegisterPropertyInquiry={handleScrollToContact} />

        {/* 7. Why Design Links */}
        <WhyDesignLinksSection />

        {/* 8. Process Timeline */}
        <ProcessSection />

        {/* 9. Visual Gallery with Lightbox */}
        <GallerySection />

        {/* 10. Location & Google Maps */}
        <LocationSection />

        {/* 11. Contact Inquiry */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={selectedService}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestQuote={(projectName) => {
          setSelectedService(`Project: ${projectName}`);
          setIsConsultationOpen(true);
        }}
      />
    </div>
  );
}
