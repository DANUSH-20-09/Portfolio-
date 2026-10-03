import React from 'react';
import { Calendar, MapPin, CheckCircle2, Bot, Database, Sparkles, Server } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Sun Square Technologies Pvt. Ltd.',
      role: 'Data Analytics Intern',
      period: 'June 2026 – July 2026',
      location: 'Nellore, India',
      type: 'Academic Internship',
      description: 'Gained intensive hands-on exposure to data analysis, machine learning algorithms, dataset preprocessing, and predictive modeling during an academic internship in Data Analytics.',
      highlights: [
        'Applied Python, data preprocessing, and machine learning techniques to analyze movie datasets and generate personalized recommendation engines.',
        'Executed exploratory data analysis (EDA) and data visualization techniques to derive meaningful insights from raw data.',
        'Gained end-to-end practical exposure to real-world data analytics pipelines, model evaluation, and analytical problem-solving.'
      ],
      skills: ['Python', 'Data Analytics', 'Machine Learning', 'Data Preprocessing', 'Movie Recommendation ML', 'Data Visualization']
    }
  ];

  const services = [
    {
      icon: <Bot size={24} />,
      title: "Agentic AI & Multi-Agent Architecture",
      desc: "Designing stateful multi-agent workflows with LangGraph, dynamic tool calling, autonomous agent teams, and fallback resilience."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Generative AI & RAG Engineering",
      desc: "Custom RAG pipelines, prompt engineering, vector database indexing, and LLM integrations (OpenAI, Groq, Ollama) for domain-specific automation."
    },
    {
      icon: <Database size={24} />,
      title: "Data Analytics & Predictive ML",
      desc: "End-to-end exploratory data analysis, feature engineering, classification/regression models, and actionable predictive data systems."
    },
    {
      icon: <Server size={24} />,
      title: "APIs & Full-Stack AI Prototyping",
      desc: "Deploying high-speed RESTful APIs with FastAPI/Flask, interactive AI user interfaces with Streamlit, and Oracle APEX database solutions."
    }
  ];

  return (
    <section id="experience" className="studio-section">
      <div className="studio-container">
        
        {/* Section Header */}
        <div className="section-eyebrow">CAREER & SERVICES</div>
        <div className="section-heading-row">
          <h2 className="section-title">Experience & Technical Services</h2>
          <p className="section-desc">
            Professional track record in industry data science combined with specialized technical capabilities in AI engineering.
          </p>
        </div>

        {/* Technical Services 4-Card Grid */}
        <div className="highlights-grid" style={{ marginBottom: '60px' }}>
          {services.map((svc, sIdx) => (
            <div key={sIdx} className="highlight-card">
              <div className="highlight-icon">{svc.icon}</div>
              <h3 className="highlight-title">{svc.title}</h3>
              <p className="highlight-desc">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* Work Experience */}
        <div>
          <h3 style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: '1.6rem', 
            fontWeight: 800, 
            marginBottom: '24px', 
            color: 'var(--text-primary)' 
          }}>
            Industry Experience
          </h3>

          <div className="experience-list">
            {experiences.map((exp, idx) => (
              <div key={idx} className="experience-card">
                <div className="exp-header-row">
                  <div>
                    <span className="project-category-badge" style={{ marginBottom: '8px', display: 'inline-block' }}>
                      {exp.type}
                    </span>
                    <h4 className="exp-role">{exp.role}</h4>
                    <div className="exp-company">{exp.company}</div>
                  </div>

                  <div className="exp-meta">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={15} color="var(--accent-coral)" />
                      {exp.period}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="exp-desc">{exp.description}</p>

                <div className="exp-highlights">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="exp-highlight-item">
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tech-tags" style={{ marginBottom: 0 }}>
                  {exp.skills.map((s, sIdx) => (
                    <span key={sIdx} className="tech-tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
