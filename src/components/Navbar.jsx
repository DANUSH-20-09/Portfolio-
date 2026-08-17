import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection, onOpenResume, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
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
    <nav className="navbar">
      <a href="#hero" onClick={() => handleNavClick('hero')} className="nav-brand">
        Portfolio
      </a>

      {/* Desktop Navigation */}
      <div className="nav-links desktop-only" style={{ display: 'flex' }}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button className="btn-get-started" onClick={onOpenResume}>
          <span>Resume</span>
          <ArrowUpRight size={16} />
        </button>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: 'none',
            color: '#fff',
            padding: '8px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'none'
          }}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
