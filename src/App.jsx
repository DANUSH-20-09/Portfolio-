import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SidebarSteps from './components/SidebarSteps';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (let sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenContact = () => {
    setActiveSection('contact');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="template-canvas">
      
      {/* Ambient background blurred lighting orbs matching reference template */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      {/* Solid red ambient circles outside card container matching reference template */}
      <div className="solid-red-orb solid-orb-top-right" />
      <div className="solid-red-orb solid-orb-bottom-left" />
      <div className="solid-red-orb solid-orb-mid-right" />

      {/* Main Glass Card Container matching template design */}
      <div className="portfolio-card-container">
        
        {/* Subtle dot pattern inside card container */}
        <div className="dot-pattern" />

        {/* Header Navbar */}
        <Navbar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          onOpenResume={() => setShowResumeModal(true)}
          onOpenContact={handleOpenContact}
        />

        {/* Side Step Indicator (01, 02, 03, 04, 05, 06) */}
        <SidebarSteps 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />

        {/* Content Area */}
        <main className="main-content">
          <Hero 
            onOpenResume={() => setShowResumeModal(true)}
            onOpenContact={handleOpenContact}
          />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact onOpenResume={() => setShowResumeModal(true)} />
        </main>

        {/* Footer */}
        <footer style={{ 
          borderTop: '1px solid var(--border-color)', 
          padding: '24px 60px', 
          display: 'flex', 
          justify: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          color: 'var(--text-muted)',
          fontSize: '0.88rem'
        }}>
          <div>
            © {new Date().getFullYear()} <strong style={{ color: '#fff' }}>Ponduri Danush</strong>. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="https://github.com/DANUSH-20-09" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/ponduri-danush-858b99309/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
            <a href="mailto:ponduridanush@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>Email</a>
          </div>
        </footer>

      </div>

      {/* Modal Dialog for Full Resume */}
      {showResumeModal && (
        <ResumeModal onClose={() => setShowResumeModal(false)} />
      )}

    </div>
  );
}

export default App;
