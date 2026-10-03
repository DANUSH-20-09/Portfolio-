import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Github, Linkedin, Mail, Phone, Bot, Brain, Database, Cloud, Sparkles } from 'lucide-react';

const Hero = ({ onOpenResume, onOpenContact }) => {
  const roles = [
    "Multi-Agent AI Specialist",
    "LangGraph & Agentic Systems Developer",
    "Generative AI & RAG Engineer",
    "Data Analytics Professional"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText === current) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 35 : 85);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const domainPills = [
    { icon: <Bot size={14} />, label: "Multi-Agent Systems & LangGraph" },
    { icon: <Brain size={14} />, label: "GenAI, LLMs & RAG Pipelines" },
    { icon: <Database size={14} />, label: "Data Analytics & Predictive ML" },
    { icon: <Cloud size={14} />, label: "Oracle Certified AI Professional" }
  ];

  return (
    <section id="hero" className="studio-hero">
      <div className="studio-container">
        
        {/* Eyebrow: Matching "CREATIVE STUDIO ELITE DESIGNS" in screenshot */}
        <div className="hero-eyebrow">
          <Sparkles size={15} />
          <span>AI & MACHINE LEARNING ENGINEER</span>
        </div>

        {/* Giant Geometric Title "DANUSH" */}
        <h1 className="hero-giant-title">
          DANUSH
        </h1>

        {/* Bottom Row: Left statement, Right CTA button */}
        <div className="hero-bottom-row">
          
          <div className="hero-statement">
            {/* Tagline matching the tone of "We craft bold, geometric..." */}
            <p className="hero-tagline">
              Architecting bold, autonomous, and scalable multi-agent systems & generative AI architectures that refuse to settle for ordinary.
            </p>

            {/* Dynamic Animated Typewriter */}
            <div className="hero-typewriter">
              <span>FOCUS //</span>
              <span>{displayText}</span>
              <span className="cursor-blink" />
            </div>

            {/* Detailed bio summary */}
            <p className="hero-subtext">
              I am <strong>Ponduri Danush</strong>, a B.Tech AI & ML graduate from R.M.D. Engineering College. I build production-ready agentic workflows, LangGraph graph architectures, and high-performance ML pipelines for complex enterprise workflows.
            </p>

            {/* Domain Badges */}
            <div className="hero-pills">
              {domainPills.map((pill, idx) => (
                <span key={idx} className="hero-pill">
                  {pill.icon}
                  <span>{pill.label}</span>
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="hero-socials">
              <a 
                href="https://github.com/DANUSH-20-09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="GitHub Profile"
              >
                <Github size={18} />
              </a>

              <a 
                href="https://www.linkedin.com/in/ponduri-danush-858b99309/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-btn"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>

              <a 
                href="mailto:ponduridanush@gmail.com" 
                className="social-icon-btn"
                title="Email Me"
              >
                <Mail size={18} />
              </a>

              <a 
                href="tel:+919030551889" 
                className="social-icon-btn"
                title="Call Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: CTA Buttons matching "EXPLORE WORK ->" from Screenshot */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn-coral-cta">
              <span>EXPLORE WORK</span>
              <ArrowRight size={18} />
            </a>

            <button className="btn-secondary-link" onClick={onOpenResume}>
              <FileText size={16} />
              <span>VIEW RESUME</span>
            </button>

            <button className="btn-secondary-link" onClick={onOpenContact}>
              <Mail size={16} />
              <span>GET IN TOUCH</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
