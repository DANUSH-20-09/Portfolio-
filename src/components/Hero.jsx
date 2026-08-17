import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ArrowRight, FileText, Sparkles, Bot, Brain, Database, Cloud } from 'lucide-react';

const Hero = ({ onOpenResume, onOpenContact }) => {
  const titles = [
    "AI & Machine Learning Engineer",
    "Multi-Agent AI Specialist",
    "Generative AI & RAG Developer",
    "Data Analytics Professional"
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = titles[currentTitleIndex];

      if (isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 90);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  const domainPills = [
    { icon: <Bot size={16} color="#ff1a40" />, label: "Multi-Agent Systems & LangGraph" },
    { icon: <Brain size={16} color="#ff1a40" />, label: "GenAI, LLMs & RAG Pipelines" },
    { icon: <Database size={16} color="#ff1a40" />, label: "Data Analytics & Predictive ML" },
    { icon: <Cloud size={16} color="#ff1a40" />, label: "Oracle Certified AI Professional" }
  ];

  return (
    <section id="hero" style={{ position: 'relative', paddingTop: '30px', paddingBottom: '70px' }}>
      <div style={{ maxWidth: '820px' }}>
        
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '18px', background: 'rgba(255, 26, 64, 0.08)', border: '1px solid rgba(255, 26, 64, 0.25)', padding: '6px 14px', borderRadius: '20px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff1a40', display: 'inline-block' }} />
          <span style={{ fontSize: '0.9rem', color: '#ff5271', fontWeight: 600, letterSpacing: '0.5px' }}>
            Hello, I am
          </span>
        </div>

        <h1 style={{ 
          fontFamily: 'var(--font-heading)', 
          fontSize: 'clamp(3rem, 6vw, 4.8rem)', 
          fontWeight: 800, 
          color: '#ffffff', 
          lineHeight: 1.08, 
          letterSpacing: '-1.5px',
          marginBottom: '18px'
        }}>
          Ponduri <span style={{ color: '#ffffff' }}>Danush</span>
        </h1>

        {/* Dynamic Typing Subtitle */}
        <div style={{ 
          fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)', 
          fontWeight: 600, 
          color: '#ff1a40', 
          minHeight: '36px', 
          display: 'flex', 
          alignItems: 'center',
          marginBottom: '22px'
        }}>
          <span>{displayedText}</span>
          <span className="blinking-cursor" style={{ marginLeft: '4px', animation: 'pulseOrb 1s infinite' }}>|</span>
        </div>

        <p style={{ 
          color: '#cbd5e1', 
          fontSize: '1.08rem', 
          lineHeight: 1.75, 
          maxWidth: '720px', 
          marginBottom: '32px' 
        }}>
          B.Tech Computer Science & Engineering (AI & ML) graduate from R.M.D. Engineering College. Specialized in building scalable Multi-Agent AI workflows, LangGraph stateful systems, RAG applications, and production-ready machine learning solutions.
        </p>

        {/* Core Expertise Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}>
          {domainPills.map((pill, idx) => (
            <div 
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '8px 16px',
                borderRadius: '12px',
                fontSize: '0.86rem',
                color: '#e2e8f0',
                fontWeight: 500
              }}
            >
              {pill.icon}
              <span>{pill.label}</span>
            </div>
          ))}
        </div>

        {/* Find Me On Social Links */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 700, marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            FIND ME ON
          </div>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://github.com/DANUSH-20-09" 
              target="_blank" 
              rel="noopener noreferrer"
              title="GitHub Profile"
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: '#fff',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#ff1a40'; e.currentTarget.style.borderColor = '#ff1a40'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
            >
              <Github size={20} />
            </a>

            <a 
              href="https://www.linkedin.com/in/ponduri-danush-858b99309/" 
              target="_blank" 
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: '#fff',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#ff1a40'; e.currentTarget.style.borderColor = '#ff1a40'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
            >
              <Linkedin size={20} />
            </a>

            <a 
              href="mailto:ponduridanush@gmail.com" 
              title="Send Email"
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: '#fff',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#ff1a40'; e.currentTarget.style.borderColor = '#ff1a40'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
            >
              <Mail size={20} />
            </a>

            <a 
              href="tel:+919030551889" 
              title="Call Phone"
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: '#fff',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-color)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#ff1a40'; e.currentTarget.style.borderColor = '#ff1a40'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button className="btn-primary" onClick={onOpenContact} style={{ padding: '12px 32px', fontSize: '0.98rem' }}>
            Hire Me
          </button>

          <a href="#projects" className="btn-secondary" style={{ padding: '12px 30px', fontSize: '0.98rem' }}>
            Portfolio
          </a>

          <button className="btn-secondary" onClick={onOpenResume} style={{ padding: '12px 28px', fontSize: '0.98rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={18} color="#ff1a40" />
            <span>Resume</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
