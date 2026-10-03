import React, { useState } from 'react';
import { X, Download, Copy, Check, Mail, Phone, MapPin, Github, Linkedin, FileText, ArrowRight } from 'lucide-react';

const ResumeModal = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const resumeText = `
PONDURI DANUSH
Email: ponduridanush@gmail.com | Phone: +91-9030551889
LinkedIn: linkedin.com/in/ponduri-danush-858b99309 | GitHub: github.com/DANUSH-20-09

PROFESSIONAL SUMMARY:
B.Tech Computer Science and Engineering graduate from R.M.D. Engineering College, Chennai, with hands-on knowledge of Artificial Intelligence, Deep Learning, Generative AI, and Multi-Agent Systems. Skilled in developing scalable AI solutions and applying machine learning techniques to real-world problems. Strong foundation in Python, data structures, databases, and software development, with a passion for building innovative and production-ready AI applications.

TECHNICAL SKILLS:
- Programming: Python, Java, SQL, HTML/CSS
- AI/ML & GenAI: TensorFlow, Scikit-learn, Hugging Face, LLMs, Prompt Engineering, RAG, Multi-Agent Systems
- Web & APIs: FastAPI, Flask, Bootstrap
- Tools & Platforms: Git, Jupyter, VS Code, PostgreSQL, MySQL

TECHNICAL PROJECTS:
1. Multi-Agentic Report Generator App | LangGraph, LangChain, Python, LLMs (Nov 2025)
   - Designed a multi-agent AI system using LangGraph to collaboratively generate structured reports
   - Built specialized agents for research, analysis, and synthesis, reducing report generation time by 70%
   - Integrated multiple LLM APIs (OpenAI, Groq, Ollama) with fallback mechanisms for reliability

2. Agentic Chatbot with Tool Integration | LangGraph, LangChain, Streamlit, Python (Oct 2025)
   - Developed an agentic chatbot with multi-mode support: conversational AI, tool execution, and AI news aggregation
   - Implemented LangGraph-based state management for complex dialogue flows and persistent context
   - Built a Streamlit UI with real-time response streaming and dynamic tool integration

3. Smart Blood Bank Management System | Python, SQL, HTML, CSS
   - Developed a centralized blood bank management system to manage donor, recipient, blood inventory, and blood request records
   - Implemented real-time blood availability tracking and request management to reduce delays in finding required blood groups
   - Designed a user-friendly interface with database integration for efficient, secure, and organized blood bank operations

PROFESSIONAL EXPERIENCE:
Sun Square Technologies Pvt. Ltd. | Data Analytics Intern (June 2026 - July 2026, Nellore, AP)
- Completed an academic internship in Data Analytics, gaining practical exposure to data analysis and data-driven problem-solving.
- Applied Python, data preprocessing, and machine learning techniques to analyze movie data and generate personalized recommendations.
- Applied data preprocessing, analysis, and visualization techniques to analyze datasets and derive meaningful insights.

EDUCATION:
- R.M.D. ENGINEERING COLLEGE: Bachelor of Technology in Artificial Intelligence and Machine Learning (Current studying | CGPA: 7.1)
- VOWEL JUNIOR COLLEGE: MPC Intermediate (2022-2024 | Percentage: 81.6%)
- VOWEL INDIA SCHOOL: Secondary Education (2022 | Percentage: 75.67%)

CERTIFICATIONS:
- Oracle Cloud Infrastructure 2025 Certified Generative AI Professional (Oracle University, ID: 102867678OCI25GAIOCP)
- Oracle APEX Cloud Developer Certified Professional (Oracle University, ID: 102867678APEX24CDOCP)
- Oracle AI Database SQL Certified Associate (Oracle University, ID: 103517558DB23AISQLOCA)
- Data Analytics Academic Internship Certification (Sun Square Technologies Pvt. Ltd., Reg No: 111524204042)
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '880px' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close resume">
          <X size={18} />
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="project-category-badge">OFFICIAL RESUME</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text-primary)', fontWeight: 800, marginTop: '6px' }}>
              Ponduri Danush
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn-secondary-link" onClick={handleCopy} style={{ padding: '10px 18px', fontSize: '0.84rem' }}>
              {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
              <span>{copied ? 'COPIED!' : 'COPY TEXT'}</span>
            </button>
            <button className="btn-coral-cta" onClick={handlePrint} style={{ padding: '10px 22px', fontSize: '0.84rem' }}>
              <Download size={16} />
              <span>PRINT / PDF</span>
            </button>
          </div>
        </div>

        {/* Paper Document */}
        <div style={{ 
          background: 'var(--bg-secondary)', 
          border: '1px solid var(--border-color)', 
          borderRadius: '6px', 
          padding: '36px', 
          color: 'var(--text-primary)' 
        }}>
          
          <div style={{ textAlign: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '24px' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '8px' }}>
              PONDURI DANUSH
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <span>✉️ ponduridanush@gmail.com</span>
              <span>📞 +91-9030551889</span>
              <span>📍 Chennai / Nellore, India</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', fontSize: '0.86rem', color: 'var(--accent-coral)', marginTop: '8px', fontWeight: 600 }}>
              <a href="https://linkedin.com/in/ponduri-danush-858b99309" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>LinkedIn</a>
              <span>•</span>
              <a href="https://github.com/DANUSH-20-09" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>GitHub</a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.12em', color: 'var(--accent-coral)', textTransform: 'uppercase', marginBottom: '10px' }}>
              // PROFESSIONAL SUMMARY
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7 }}>
              B.Tech Computer Science and Engineering (AI & ML) graduate from R.M.D. Engineering College, Chennai, with hands-on expertise in Artificial Intelligence, Deep Learning, Generative AI, and Multi-Agent Systems. Skilled in developing scalable AI solutions and applying machine learning techniques to real-world problems. Strong foundation in Python, data structures, databases, and software development, with a passion for building innovative, production-ready AI applications.
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.12em', color: 'var(--accent-coral)', textTransform: 'uppercase', marginBottom: '10px' }}>
              // TECHNICAL SKILLS
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              <div><strong style={{ color: 'var(--text-primary)' }}>Programming:</strong> Python, Java, SQL, HTML/CSS</div>
              <div><strong style={{ color: 'var(--text-primary)' }}>AI/ML & GenAI:</strong> TensorFlow, Scikit-learn, Hugging Face, LLMs, Prompt Engineering, RAG, Multi-Agent Systems</div>
              <div><strong style={{ color: 'var(--text-primary)' }}>Web & APIs:</strong> FastAPI, Flask, Streamlit, Bootstrap</div>
              <div><strong style={{ color: 'var(--text-primary)' }}>Tools & Platforms:</strong> Git & GitHub, Jupyter, VS Code, PostgreSQL, MySQL, Oracle APEX</div>
            </div>
          </div>

          {/* Section: Technical Projects */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.12em', color: 'var(--accent-coral)', textTransform: 'uppercase', marginBottom: '14px' }}>
              // KEY PROJECTS
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--text-primary)' }}>
                  <span>Multi-Agentic Report Generator App</span>
                  <span style={{ color: 'var(--accent-coral)' }}>Nov 2025</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '6px' }}>LangGraph, LangChain, Python, LLMs</div>
                <ul style={{ paddingLeft: '18px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <li>Designed a multi-agent AI system using LangGraph to collaboratively generate structured reports.</li>
                  <li>Built specialized agents for research, analysis, and synthesis, reducing report generation time by 70%.</li>
                  <li>Integrated multiple LLM APIs (OpenAI, Groq, Ollama) with fallback mechanisms for zero-downtime reliability.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--text-primary)' }}>
                  <span>Agentic Chatbot with Tool Integration</span>
                  <span style={{ color: 'var(--accent-coral)' }}>Oct 2025</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '6px' }}>LangGraph, LangChain, Streamlit, Python</div>
                <ul style={{ paddingLeft: '18px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <li>Developed an agentic chatbot with conversational AI, tool execution, and AI news aggregation.</li>
                  <li>Implemented LangGraph-based state management for complex dialogue flows and persistent context.</li>
                  <li>Built a Streamlit UI with real-time response streaming and dynamic tool integration.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--text-primary)' }}>
                  <span>Smart Blood Bank Management System</span>
                  <span style={{ color: 'var(--accent-coral)' }}>Project Showcase</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Python, SQL, HTML, CSS</div>
                <ul style={{ paddingLeft: '18px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <li>Developed a centralized blood bank management system to manage donor, recipient, and blood inventory.</li>
                  <li>Implemented real-time blood availability tracking to reduce delays in finding critical blood units.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Experience */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.12em', color: 'var(--accent-coral)', textTransform: 'uppercase', marginBottom: '10px' }}>
              // PROFESSIONAL EXPERIENCE
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--text-primary)' }}>
              <span>Sun Square Technologies Pvt. Ltd. — Data Analytics Intern</span>
              <span style={{ color: 'var(--accent-coral)' }}>June 2026 – July 2026</span>
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Nellore, AP, India</div>
            <ul style={{ paddingLeft: '18px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <li>Completed an academic internship in Data Analytics, analyzing real-world datasets and workflows.</li>
              <li>Applied Python, data preprocessing, and ML algorithms to build movie recommendation models.</li>
              <li>Executed exploratory data analysis (EDA) and data visualization for actionable insights.</li>
            </ul>
          </div>

          {/* Section: Education & Certs */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.12em', color: 'var(--accent-coral)', textTransform: 'uppercase', marginBottom: '10px' }}>
              // EDUCATION & CERTIFICATIONS
            </h3>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              <div>• <strong>R.M.D. Engineering College:</strong> B.Tech in Artificial Intelligence & Data Science / ML (CGPA: 7.1)</div>
              <div>• <strong>Oracle Cloud Infrastructure 2025:</strong> Certified Generative AI Professional (ID: 102867678OCI25GAIOCP)</div>
              <div>• <strong>Oracle University:</strong> APEX Cloud Developer Certified Professional (ID: 102867678APEX24CDOCP)</div>
              <div>• <strong>Oracle University:</strong> Oracle AI Database SQL Certified Associate (ID: 103517558DB23AISQLOCA)</div>
              <div>• <strong>Sun Square Technologies:</strong> Data Analytics Academic Internship Certification</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
