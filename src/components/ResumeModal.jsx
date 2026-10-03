import React, { useState } from 'react';
import { X, Download, Copy, Check, Mail, Phone, MapPin, Github, Linkedin, FileText, ArrowRight, ExternalLink } from 'lucide-react';

const ResumeModal = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const resumeText = `
PONDURI DANUSH
Email: ponduridanush@gmail.com | Phone: +91-9030551889
LinkedIn: linkedin.com/in/ponduri-danush-858b99309 | GitHub: github.com/DANUSH-20-09
Location: Andhra Pradesh, India

PROFESSIONAL SUMMARY:
B. Tech Computer Science and Engineering graduate from R.M.D. Engineering College, Chennai, with hands-on knowledge of Artificial Intelligence, Deep Learning, Generative AI, and Multi-Agent Systems. Skilled in developing scalable AI solutions and applying machine learning techniques to real-world problems. Strong foundation in Python, data structures, databases, and software development, with a passion for building innovative and production-ready AI applications.

TECHNICAL SKILLS:
- Programming: Python, Java, SQL, HTML/CSS
- AI/ML & GenAI: TensorFlow, Scikit-learn, Hugging Face, LLMs, Prompt Engineering, RAG, Multi-Agent Systems
- Web & APIs: FastAPI, Flask, Bootstrap
- Tools & Platforms: Git, Jupyter, VS Code, PostgreSQL, MySQL

TECHNICAL PROJECTS:
1. Multi-Agentic Report Generator App | LangGraph, LangChain, Python, LLMs (November 2025)
   - Designed a multi-agent AI system using LangGraph to collaboratively generate structured reports
   - Built specialized agents for research, analysis, and synthesis, reducing report generation time by 70%
   - Integrated multiple LLM APIs (OpenAI, Groq, Ollama) with fallback mechanisms for reliability

2. Agentic Chatbot with Tool Integration | LangGraph, LangChain, Streamlit, Python (October 2025)
   - Developed an agentic chatbot with multi-mode support: conversational AI, tool execution, and AI news aggregation
   - Implemented LangGraph-based state management for complex dialogue flows and persistent context
   - Built a Streamlit UI with real-time response streaming and dynamic tool integration

3. Smart Blood Bank Management System | Python, SQL, HTML, CSS
   - Developed a centralized blood bank management system to manage donor, recipient, blood inventory, and blood request records
   - Implemented real-time blood availability tracking and request management to reduce delays in finding required blood groups
   - Designed a user-friendly interface with database integration for efficient, secure, and organized blood bank operations

PROFESSIONAL EXPERIENCE:
Sun Square Technologies Pvt. Ltd. | Data Analytics Intern (June 2026 - July 2026, Nellore, Andhra Pradesh, India)
- Completed an academic internship in Data Analytics, gaining practical exposure to data analysis and data-driven problem-solving.
- Applied Python, data preprocessing, and machine learning techniques to analyze movie data and generate personalized recommendations.
- Applied data preprocessing, analysis, and visualization techniques to analyze datasets and derive meaningful insights.
- Gained hands-on experience in data analytics, real-world project implementation, and analytical problem-solving.

EDUCATION:
- R.M.D. ENGINEERING COLLEGE: Bachelor of Technology in Artificial Intelligence and Machine Learning (Current studying | CGPA: 7.1)
- VOWEL JUNIOR COLLEGE: MPC Intermediate (2022-2024 | Percentage: 81.6%)
- VOWEL INDIA SCHOOL: Secondary Education (2022 | Percentage: 75.67%)

CERTIFICATIONS:
- Java for Beginners – Core programming fundamentals and object-oriented design
- Oracle APEX Cloud Developer Certified Professional: Oracle APEX application development, SQL, PL/SQL, and database solutions
- Oracle Cloud Infrastructure 2025 Certified Generative AI Professional: Generative AI concepts, OCI AI services, and LLM applications
- Agentic AI: AI agents, LLM-based workflows, tool usage, and multi-agent systems
- Oracle AI Database SQL Certified Associate: Advanced SQL, subqueries, schema design and relational operations
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
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '900px' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close resume">
          <X size={18} />
        </button>

        {/* Modal Header Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="project-category-badge">OFFICIAL RESUME</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--text-primary)', fontWeight: 800, marginTop: '6px' }}>
              Ponduri Danush
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a 
              href="./Danush_Ponduri_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-coral-cta" 
              style={{ padding: '10px 20px', fontSize: '0.84rem' }}
              download
            >
              <Download size={15} />
              <span>DOWNLOAD RESUME PDF</span>
            </a>

            <button className="btn-secondary-link" onClick={handleCopy} style={{ padding: '10px 16px', fontSize: '0.84rem' }}>
              {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
              <span>{copied ? 'COPIED!' : 'COPY TEXT'}</span>
            </button>

            <button className="btn-secondary-link" onClick={handlePrint} style={{ padding: '10px 16px', fontSize: '0.84rem' }}>
              <FileText size={15} />
              <span>PRINT</span>
            </button>
          </div>
        </div>

        {/* Paper Document Preview */}
        <div style={{ 
          background: 'var(--bg-secondary)', 
          border: '1px solid var(--border-color)', 
          borderRadius: '6px', 
          padding: '36px', 
          color: 'var(--text-primary)' 
        }}>
          
          <div style={{ textAlign: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '24px' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 800, letterSpacing: '0.5px', marginBottom: '8px' }}>
              PONDURI DANUSH
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <span>✉️ ponduridanush@gmail.com</span>
              <span>📞 +91-9030551889</span>
              <span>📍 Andhra Pradesh, India</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', fontSize: '0.86rem', color: 'var(--accent-coral)', marginTop: '8px', fontWeight: 600 }}>
              <a href="https://www.linkedin.com/in/ponduri-danush-858b99309/" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>LinkedIn Profile</a>
              <span>•</span>
              <a href="https://github.com/DANUSH-20-09" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>GitHub Profile</a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.12em', color: 'var(--accent-coral)', textTransform: 'uppercase', marginBottom: '10px' }}>
              // PROFESSIONAL SUMMARY
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7 }}>
              B. Tech Computer Science and Engineering graduate from R.M.D. Engineering College, Chennai, with hands-on knowledge of Artificial Intelligence, Deep Learning, Generative AI, and Multi-Agent Systems. Skilled in developing scalable AI solutions and applying machine learning techniques to real-world problems. Strong foundation in Python, data structures, databases, and software development, with a passion for building innovative and production-ready AI applications.
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
              <div><strong style={{ color: 'var(--text-primary)' }}>Web & APIs:</strong> FastAPI, Flask, Bootstrap</div>
              <div><strong style={{ color: 'var(--text-primary)' }}>Tools & Platforms:</strong> Git, Jupyter, VS Code, PostgreSQL, MySQL</div>
            </div>
          </div>

          {/* Section: Technical Projects */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.12em', color: 'var(--accent-coral)', textTransform: 'uppercase', marginBottom: '14px' }}>
              // TECHNICAL PROJECTS
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--text-primary)', flexWrap: 'wrap' }}>
                  <span>Multi-Agentic Report Generator App | LangGraph, LangChain, Python, LLMs</span>
                  <span style={{ color: 'var(--accent-coral)', fontSize: '0.86rem' }}>November 2025</span>
                </div>
                <ul style={{ paddingLeft: '18px', marginTop: '6px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <li>Designed a multi-agent AI system using LangGraph to collaboratively generate structured reports.</li>
                  <li>Built specialized agents for research, analysis, and synthesis, reducing report generation time by 70%.</li>
                  <li>Integrated multiple LLM APIs (OpenAI, Groq, Ollama) with fallback mechanisms for reliability.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--text-primary)', flexWrap: 'wrap' }}>
                  <span>Agentic Chatbot with Tool Integration | LangGraph, LangChain, Streamlit, Python</span>
                  <span style={{ color: 'var(--accent-coral)', fontSize: '0.86rem' }}>October 2025</span>
                </div>
                <ul style={{ paddingLeft: '18px', marginTop: '6px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <li>Developed an agentic chatbot with multi-mode support: conversational AI, tool execution, and AI news aggregation.</li>
                  <li>Implemented LangGraph-based state management for complex dialogue flows and persistent context.</li>
                  <li>Built a Streamlit UI with real-time response streaming and dynamic tool integration.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--text-primary)', flexWrap: 'wrap' }}>
                  <span>Smart Blood Bank Management System | Python, SQL, HTML, CSS</span>
                  <span style={{ color: 'var(--accent-coral)', fontSize: '0.86rem' }}>Project Showcase</span>
                </div>
                <ul style={{ paddingLeft: '18px', marginTop: '6px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <li>Developed a centralized blood bank management system to manage donor, recipient, blood inventory, and blood request records.</li>
                  <li>Implemented real-time blood availability tracking and request management to reduce delays in finding required blood groups.</li>
                  <li>Designed a user-friendly interface with database integration for efficient, secure, and organized blood bank operations.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Professional Experience */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.12em', color: 'var(--accent-coral)', textTransform: 'uppercase', marginBottom: '10px' }}>
              // PROFESSIONAL EXPERIENCE
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--text-primary)', flexWrap: 'wrap' }}>
              <span>Sun Square Technologies Pvt. Ltd. — Data Analytics Intern</span>
              <span style={{ color: 'var(--accent-coral)', fontSize: '0.86rem' }}>June 2026 – July 2026</span>
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Nellore, Andhra Pradesh, India</div>
            <ul style={{ paddingLeft: '18px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <li>Completed an academic internship in Data Analytics, gaining practical exposure to data analysis and data-driven problem-solving. Applied Python, data preprocessing, and machine learning techniques to analyze movie data and generate personalized recommendations.</li>
              <li>Applied data preprocessing, analysis, and visualization techniques to analyze datasets and derive meaningful insights.</li>
              <li>Gained hands-on experience in data analytics, real-world project implementation, and analytical problem-solving.</li>
            </ul>
          </div>

          {/* Section: Education */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.12em', color: 'var(--accent-coral)', textTransform: 'uppercase', marginBottom: '10px' }}>
              // EDUCATION
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <span><strong>R.M.D. ENGINEERING COLLEGE</strong> — B.Tech in AI & ML</span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Current Studying | CGPA: 7.1</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <span><strong>VOWEL JUNIOR COLLEGE</strong> — MPC Intermediate</span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>2022–2024 | Percentage: 81.6%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <span><strong>VOWEL INDIA SCHOOL</strong> — Secondary Education</span>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>2022 | Percentage: 75.67%</span>
              </div>
            </div>
          </div>

          {/* Section: Certifications */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '0.12em', color: 'var(--accent-coral)', textTransform: 'uppercase', marginBottom: '10px' }}>
              // CERTIFICATIONS
            </h3>
            <ul style={{ paddingLeft: '18px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <li><strong>Java for Beginners:</strong> Core programming fundamentals and object-oriented design</li>
              <li><strong>Oracle APEX Cloud Developer Certified Professional:</strong> Oracle APEX application development, SQL, PL/SQL, and database solutions</li>
              <li><strong>Oracle Cloud Infrastructure 2025 Certified Generative AI Professional:</strong> Generative AI concepts, OCI AI services, and LLM applications</li>
              <li><strong>Agentic AI:</strong> AI agents, LLM-based workflows, tool usage, and multi-agent systems</li>
              <li><strong>Oracle AI Database SQL Certified Associate:</strong> Advanced SQL, subqueries, schema design and relational operations</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
