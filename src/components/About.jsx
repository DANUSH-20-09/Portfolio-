import React from 'react';
import { Cpu, Bot, Database, Cloud, Award, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Bot size={28} color="#ff1a40" />,
      title: "Multi-Agent AI & LangGraph",
      desc: "Architecting collaborative multi-agent teams with state management, fallback routing, and real-time streaming tools."
    },
    {
      icon: <Cpu size={28} color="#ff1a40" />,
      title: "GenAI, LLMs & RAG",
      desc: "Integrating cutting-edge LLMs (OpenAI, Groq, Ollama) with context retrieval, prompt engineering, and synthesis."
    },
    {
      icon: <Database size={28} color="#ff1a40" />,
      title: "Data Analytics & ML",
      desc: "Applying machine learning, data preprocessing, and analytical problem-solving to derive actionable insights."
    },
    {
      icon: <Cloud size={28} color="#ff1a40" />,
      title: "Cloud & Oracle APEX",
      desc: "Oracle Certified Professional in Generative AI and APEX Cloud development, proficient in SQL, PL/SQL, and databases."
    }
  ];

  return (
    <section id="about" style={{ padding: '60px 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="section-header">
        <div className="section-tag">About Me</div>
        <h2 className="section-title">Architecting the Future of Agentic AI</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '20px' }}>
            I am a <strong style={{ color: '#ffffff' }}>Bachelor of Technology in Artificial Intelligence and Machine Learning</strong> graduate from <strong style={{ color: '#ff1a40' }}>R.M.D. Engineering College, Chennai</strong>.
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '24px' }}>
            My core passion lies at the intersection of Multi-Agent Systems, LLM orchestration, and Data Science. I focus on converting theoretical AI research into reliable, production-ready software solutions that automate complex workflows and empower data-driven decisions.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {[
              "Multi-Agent System Design",
              "RAG & LangChain Orchestration",
              "Production Data Pipelines",
              "Oracle APEX Cloud Development",
              "FastAPI & Flask Backend APIs",
              "Data Preprocessing & Insights"
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="#ff1a40" />
                <span style={{ color: '#e2e8f0', fontSize: '0.92rem', fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
          <div className="glass-card" style={{ textAlign: 'center', padding: '24px 16px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ff1a40', fontFamily: 'var(--font-heading)' }}>3+</div>
            <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600, marginTop: '4px' }}>Featured Technical Projects</div>
          </div>
          <div className="glass-card" style={{ textAlign: 'center', padding: '24px 16px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>4+</div>
            <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600, marginTop: '4px' }}>Industry Certifications</div>
          </div>
          <div className="glass-card" style={{ textAlign: 'center', padding: '24px 16px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>7.1</div>
            <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600, marginTop: '4px' }}>B.Tech CGPA (AI & ML)</div>
          </div>
          <div className="glass-card" style={{ textAlign: 'center', padding: '24px 16px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ff1a40', fontFamily: 'var(--font-heading)' }}>70%</div>
            <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600, marginTop: '4px' }}>Report Time Reduction</div>
          </div>
        </div>
      </div>

      {/* 4 Feature Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {highlights.map((card, i) => (
          <div key={i} className="glass-card">
            <div style={{ marginBottom: '16px' }}>{card.icon}</div>
            <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '8px', fontWeight: 700 }}>{card.title}</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
