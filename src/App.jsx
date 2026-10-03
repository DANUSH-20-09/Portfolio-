import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('studio_theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('studio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'about', 'experience', 'skills', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 220;

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenContact = () => {
    setActiveSection('contact');
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="studio-app">
      {/* Studio Header Navbar */}
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setShowResumeModal(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Studio Content Area */}
      <main>
        <Hero 
          onOpenResume={() => setShowResumeModal(true)}
          onOpenContact={handleOpenContact}
        />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Contact onOpenResume={() => setShowResumeModal(true)} />
      </main>

      {/* Minimalist Editorial Studio Footer */}
      <footer className="studio-footer">
        <div className="studio-container">
          <div className="footer-inner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <a href="#hero" onClick={scrollToTop} className="studio-logo" style={{ fontSize: '1.25rem' }}>
                <span>DANUSH</span>
                <span className="coral-dot">.</span>
              </a>
              <span className="footer-copy">
                © {new Date().getFullYear()} Ponduri Danush. AI & ML Engineer.
              </span>
            </div>

            <div className="footer-links">
              <a href="https://github.com/DANUSH-20-09" target="_blank" rel="noopener noreferrer" className="footer-link">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ponduri-danush-858b99309/" target="_blank" rel="noopener noreferrer" className="footer-link">
                LinkedIn
              </a>
              <a href="mailto:ponduridanush@gmail.com" className="footer-link">
                Email
              </a>
              <button 
                onClick={scrollToTop} 
                className="footer-link" 
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Official Resume Modal */}
      {showResumeModal && (
        <ResumeModal onClose={() => setShowResumeModal(false)} />
      )}
    </div>
  );
}

export default App;
