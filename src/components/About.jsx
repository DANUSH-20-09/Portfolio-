import React from 'react';
import { Bot, Cpu, Database, Cloud, CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Bot size={24} />,
      title: "Multi-Agent AI & LangGraph",
      desc: "Architecting collaborative multi-agent teams with state management, fallback routing, and real-time streaming tools."
    },
    {
      icon: <Cpu size={24} />,
      title: "GenAI, LLMs & RAG",
      desc: "Integrating cutting-edge LLMs (OpenAI, Groq, Ollama) with context retrieval, prompt engineering, and structured outputs."
    },
    {
      icon: <Database size={24} />,
      title: "Data Analytics & ML",
      desc: "Applying machine learning, predictive modeling, EDA, and preprocessing pipelines to derive actionable business intelligence."
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud & Oracle APEX",
      desc: "Oracle Certified Professional in Generative AI and APEX Cloud development, proficient in SQL, PL/SQL, and relational databases."
    }
  ];

  return (
    <section id="about" className="studio-section">
      <div className="studio-container">
        
        <div className="section-eyebrow">ABOUT ME</div>
        <div className="section-heading-row">
          <h2 className="section-title">Architecting Autonomous Intelligence</h2>
          <p className="section-desc">
            Bridging theoretical artificial intelligence research with scalable, battle-tested software engineering.
          </p>
        </div>

        {/* Bio & Stats Grid */}
        <div className="about-grid">
          <div>
            <p className="about-bio">
              I am a <strong>Bachelor of Technology in Artificial Intelligence and Machine Learning</strong> graduate from <strong>R.M.D. Engineering College, Chennai</strong>.
            </p>
            <p className="about-bio">
              My core obsession lies at the intersection of Multi-Agent Systems, LangGraph orchestration, and Data Science. I specialize in turning complex agentic graphs and large language models into fast, dependable applications that solve high-stakes challenges.
            </p>

            <div className="about-checklist">
              {[
                "Multi-Agent System Design",
                "RAG & LangChain Orchestration",
                "Production Data Pipelines",
                "Oracle APEX Cloud Development",
                "FastAPI & Flask Backend APIs",
                "Data Preprocessing & Insights"
              ].map((item, idx) => (
                <div key={idx} className="check-item">
                  <CheckCircle2 size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number coral">3+</div>
              <div className="stat-label">Featured Technical Projects</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">4+</div>
              <div className="stat-label">Industry Certifications</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">7.1</div>
              <div className="stat-label">B.Tech CGPA (AI & ML)</div>
            </div>
            <div className="stat-box">
              <div className="stat-number coral">70%</div>
              <div className="stat-label">Report Generation Acceleration</div>
            </div>
          </div>
        </div>

        {/* 4 Feature Highlights */}
        <div className="highlights-grid">
          {highlights.map((card, i) => (
            <div key={i} className="highlight-card">
              <div className="highlight-icon">{card.icon}</div>
              <h3 className="highlight-title">{card.title}</h3>
              <p className="highlight-desc">{card.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
