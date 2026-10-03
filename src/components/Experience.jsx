import React, { useState } from 'react';
import { Calendar, MapPin, CheckCircle2, Bot, Database, Sparkles, Server, Award, Eye, Download, FileText, ExternalLink } from 'lucide-react';
import CertificateModal from './CertificateModal';

const Experience = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const internshipCertificate = {
    id: 'sun-square-internship',
    title: 'Data Analytics Academic Internship Certification',
    issuer: 'Sun Square Technologies Pvt. Ltd.',
    badge: 'Verified Industry Internship',
    date: 'July 13, 2026',
    validity: 'Academic Internship (11-06-2026 to 11-07-2026)',
    credentialId: 'Reg No: 111524204042 (R.M.D. Engg College)',
    recipient: 'Mr. P. DANUSH',
    imageUrl: './certificates/sun-square-data-analytics-internship.png',
    pdfUrl: './certificates/sun-square-data-analytics-internship.pdf',
    topics: [
      'Data Analytics Pipelines & Dataset Engineering in Python',
      'Movie Recommendation ML Engine Implementation',
      'Exploratory Data Analysis (EDA) & Feature Scaling',
      'Data Visualization & Analytical Problem Solving',
      'Model Evaluation & Real-World Dataset Insights'
    ]
  };

  const experiences = [
    {
      company: 'Sun Square Technologies Pvt. Ltd.',
      role: 'Data Analytics Intern',
      period: 'June 2026 – July 2026',
      location: 'Nellore, Andhra Pradesh, India',
      type: 'Academic Internship',
      description: 'Completed an academic internship in Data Analytics, gaining intensive hands-on exposure to data analysis, machine learning algorithms, dataset preprocessing, and predictive modeling.',
      highlights: [
        'Applied Python, data preprocessing, and machine learning techniques to analyze movie datasets and generate personalized recommendation engines.',
        'Executed exploratory data analysis (EDA) and data visualization techniques to derive meaningful insights from raw data.',
        'Gained end-to-end practical exposure to real-world data analytics pipelines, model evaluation, and analytical problem-solving.'
      ],
      skills: ['Python', 'Data Analytics', 'Machine Learning', 'Data Preprocessing', 'Movie Recommendation ML', 'Data Visualization'],
      certificate: internshipCertificate
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

                <div className="project-tech-tags" style={{ marginBottom: '24px' }}>
                  {exp.skills.map((s, sIdx) => (
                    <span key={sIdx} className="tech-tag">{s}</span>
                  ))}
                </div>

                {/* Verified Internship Certificate Box Embedded in Experience */}
                {exp.certificate && (
                  <div style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '16px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div 
                        onClick={() => setSelectedCert(exp.certificate)}
                        style={{
                          width: '72px',
                          height: '52px',
                          borderRadius: '4px',
                          overflow: 'hidden',
                          border: '1px solid var(--border-color)',
                          cursor: 'pointer',
                          flexShrink: 0,
                          background: '#fff'
                        }}
                        title="Click to view full certificate"
                      >
                        <img 
                          src={exp.certificate.imageUrl} 
                          alt="Sun Square Internship Certificate" 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#10b981', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          <Award size={14} />
                          <span>Verified Academic Internship Certificate</span>
                        </div>
                        <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>
                          Sun Square Technologies Pvt. Ltd. (Reg No: 111524204042)
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          Issued: July 13, 2026 • Nellore, AP
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button 
                        onClick={() => setSelectedCert(exp.certificate)}
                        className="btn-project-detail"
                        style={{ fontSize: '0.82rem' }}
                      >
                        <Eye size={15} />
                        <span>PREVIEW CERTIFICATE</span>
                      </button>

                      <a 
                        href={exp.certificate.pdfUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-secondary-link"
                        style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                        download
                      >
                        <Download size={14} />
                        <span>PDF</span>
                      </a>
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <CertificateModal 
          certificate={selectedCert} 
          onClose={() => setSelectedCert(null)} 
        />
      )}
    </section>
  );
};

export default Experience;
