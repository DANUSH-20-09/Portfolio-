import React, { useState } from 'react';
import { Moon, Sun, Menu, X, ArrowUpRight, FileText } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection, theme, toggleTheme, onOpenResume, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'projects', label: 'PORTFOLIO' },
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'SERVICES' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="studio-navbar">
      <div className="studio-container">
        <div className="navbar-inner">
          
          {/* Logo: DANUSH. with coral dot matching STUDIO. in screenshot */}
          <a href="#hero" onClick={() => handleNavClick('hero')} className="studio-logo">
            <span>DANUSH</span>
            <span className="coral-dot">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="studio-nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`studio-nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Action Buttons Right */}
          <div className="studio-nav-actions">
            
            {/* Theme Toggle Button (Moon / Sun icon matching screenshot) */}
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume Button */}
            <button className="btn-nav-resume" onClick={onOpenResume}>
              <span>Resume</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer open">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`studio-nav-link ${activeSection === item.id ? 'active' : ''}`}
              style={{ textAlign: 'left', padding: '10px 0' }}
            >
              {item.label}
            </button>
          ))}
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <button 
              className="btn-nav-resume" 
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }} 
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <span>Resume</span>
              <FileText size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
