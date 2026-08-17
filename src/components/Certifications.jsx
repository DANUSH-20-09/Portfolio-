import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Sparkles, Database, Code, Cloud } from 'lucide-react';

const Certifications = () => {
  const certificationsList = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      issuer: 'Oracle Cloud Infrastructure (OCI)',
      badge: 'Certified Professional',
      year: '2025',
      icon: <Sparkles size={26} color="#ff1a40" />,
      topics: ['Generative AI Concepts', 'OCI AI Services', 'LLM Applications', 'Prompt Engineering', 'Fine-Tuning Strategies']
    },
    {
      title: 'Agentic AI Mastery',
      issuer: 'Advanced Agentic Engineering',
      badge: 'Agent Specialist',
      year: '2025',
      icon: <ShieldCheck size={26} color="#ff1a40" />,
      topics: ['Autonomous AI Agents', 'LLM Workflows', 'Tool Invocation', 'Multi-Agent State Management', 'LangGraph Patterns']
    },
    {
      title: 'Oracle APEX Cloud Developer Certified Professional',
      issuer: 'Oracle University',
      badge: 'Certified Professional',
      year: '2025',
      icon: <Database size={26} color="#ff1a40" />,
      topics: ['Oracle APEX Apps', 'SQL & PL/SQL', 'Database Solutions', 'REST Data Services', 'Enterprise Security']
    },
    {
      title: 'Java for Beginners',
      issuer: 'Core Programming Certification',
      badge: 'Certified Foundations',
      year: '2024',
      icon: <Code size={26} color="#ff1a40" />,
      topics: ['Core Java Syntax', 'Object-Oriented Design (OOP)', 'Collections Framework', 'Data Structures', 'Exception Handling']
    }
  ];

  return (
    <section id="certifications" style={{ padding: '60px 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="section-header">
        <div className="section-tag">Verified Credentials</div>
        <h2 className="section-title">Certifications & Honors</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {certificationsList.map((cert, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ background: 'rgba(255,26,64,0.12)', padding: '12px', borderRadius: '14px' }}>
                  {cert.icon}
                </div>
                <span className="badge-tag">{cert.year}</span>
              </div>

              <h3 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 800, marginBottom: '8px', lineHeight: 1.4, fontFamily: 'var(--font-heading)' }}>
                {cert.title}
              </h3>

              <div style={{ color: '#ff1a40', fontSize: '0.88rem', fontWeight: 600, marginBottom: '16px' }}>
                Issued by: {cert.issuer}
              </div>

              <div style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px' }}>
                Certified Competencies
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {cert.topics.map((top, tIdx) => (
                  <div key={tIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#ff1a40" />
                    <span style={{ color: '#cbd5e1', fontSize: '0.86rem' }}>{top}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '0.85rem', fontWeight: 600 }}>
              <ShieldCheck size={16} />
              <span>Verified Credential</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
