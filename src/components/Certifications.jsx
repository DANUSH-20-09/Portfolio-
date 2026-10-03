import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Sparkles, Database, Code } from 'lucide-react';

const Certifications = () => {
  const certificationsList = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      issuer: 'Oracle Cloud Infrastructure (OCI)',
      badge: 'Certified Professional',
      year: '2025',
      icon: <Sparkles size={20} />,
      topics: ['Generative AI Concepts', 'OCI AI Services', 'LLM Applications', 'Prompt Engineering', 'Fine-Tuning Strategies']
    },
    {
      title: 'Agentic AI Mastery',
      issuer: 'Advanced Agentic Engineering',
      badge: 'Agent Specialist',
      year: '2025',
      icon: <ShieldCheck size={20} />,
      topics: ['Autonomous AI Agents', 'LLM Workflows', 'Tool Invocation', 'Multi-Agent State Management', 'LangGraph Patterns']
    },
    {
      title: 'Oracle APEX Cloud Developer Certified Professional',
      issuer: 'Oracle University',
      badge: 'Certified Professional',
      year: '2025',
      icon: <Database size={20} />,
      topics: ['Oracle APEX Apps', 'SQL & PL/SQL', 'Database Solutions', 'REST Data Services', 'Enterprise Security']
    },
    {
      title: 'Java for Beginners',
      issuer: 'Core Programming Certification',
      badge: 'Certified Foundations',
      year: '2024',
      icon: <Code size={20} />,
      topics: ['Core Java Syntax', 'Object-Oriented Design (OOP)', 'Collections Framework', 'Data Structures', 'Exception Handling']
    }
  ];

  return (
    <section id="certifications" className="studio-section">
      <div className="studio-container">
        
        <div className="section-eyebrow">VERIFIED CREDENTIALS</div>
        <div className="section-heading-row">
          <h2 className="section-title">Certifications & Honors</h2>
          <p className="section-desc">
            Industry-recognized certifications in Generative AI, Autonomous Agents, and Enterprise Cloud Application Engineering.
          </p>
        </div>

        <div className="dual-section-grid">
          {certificationsList.map((cert, idx) => (
            <div key={idx} className="edu-cert-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <div className="highlight-icon" style={{ marginBottom: 0, width: '42px', height: '42px' }}>
                    {cert.icon}
                  </div>
                  <span className="project-category-badge">{cert.year}</span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 800, marginBottom: '6px', lineHeight: 1.35 }}>
                  {cert.title}
                </h3>

                <div style={{ color: 'var(--accent-coral)', fontSize: '0.88rem', fontWeight: 700, marginBottom: '16px' }}>
                  Issued by: {cert.issuer}
                </div>

                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Certified Competencies
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {cert.topics.map((top, tIdx) => (
                    <div key={tIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={15} color="var(--accent-coral)" />
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.86rem' }}>{top}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '0.84rem', fontWeight: 600 }}>
                <ShieldCheck size={16} />
                <span>Verified Industry Credential</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
