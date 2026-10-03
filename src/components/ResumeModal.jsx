import React, { useState } from 'react';
import { X, Download, Copy, Check, Mail, Phone, MapPin, Github, Linkedin, FileText, Printer } from 'lucide-react';

const ResumeModal = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const resumeText = `PONDURI DANUSH
Email: ponduridanush@gmail.com | Phone: +91-9030551889
LinkedIn: linkedin.com/in/ponduri-danush-858b99309 | GitHub: github.com/DANUSH-20-09
Location: Andhra Pradesh, India

Professional Summary
B. Tech Computer Science and Engineering graduate from R.M.D. Engineering College, Chennai, with hands-on knowledge of Artificial Intelligence, Deep Learning, Generative AI, and Multi-Agent Systems. Skilled in developing scalable AI solutions and applying machine learning techniques to real-world problems. Strong foundation in Python, data structures, databases, and software development, with a passion for building innovative and production-ready AI applications.

Technical Skills
- Programming: Python, Java, SQL, HTML/CSS
- AI/ML & GenAI: TensorFlow, Scikit-learn, Hugging Face, LLMs, Prompt Engineering, RAG, Multi-Agent Systems
- Web & APIs: FastAPI, Flask, Bootstrap
- Tools & Platforms: Git, Jupyter, VS Code, PostgreSQL, MySQL

Technical Projects
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

Professional Experience
Sun Square Technologies Pvt. Ltd. | Data Analytics Intern (June 2026 – July 2026, Nellore, Andhra Pradesh, India)
- Completed an academic internship in Data Analytics, gaining practical exposure to data analysis and data-driven problem-solving.
- Applied Python, data preprocessing, and machine learning techniques to analyze movie data and generate personalized recommendations.
- Applied data preprocessing, analysis, and visualization techniques to analyze datasets and derive meaningful insights.
- Gained hands-on experience in data analytics, real-world project implementation, and analytical problem-solving.

Education
- R.M.D. ENGINEERING COLLEGE: Bachelor of Technology in Artificial Intelligence and Machine Learning (Current studying | CGPA: 7.1)
- VOWEL JUNIOR COLLEGE: MPC Intermediate (2022-2024 | Percentage: 81.6%)
- VOWEL INDIA SCHOOL: Secondary Education (2022 | Percentage: 75.67%)

Certifications
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
      <div className="modal-content resume-modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '880px', width: '95%' }}>
        <button className="modal-close-btn no-print" onClick={onClose} aria-label="Close resume">
          <X size={18} />
        </button>

        {/* Modal Header Actions (Hidden on Print) */}
        <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <span className="project-category-badge">1-PAGE OFFICIAL RESUME</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-primary)', fontWeight: 800, marginTop: '4px' }}>
              Ponduri Danush
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a 
              href="./Danush_Ponduri_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-coral-cta" 
              style={{ padding: '9px 18px', fontSize: '0.82rem' }}
              download
            >
              <Download size={15} />
              <span>DOWNLOAD PDF</span>
            </a>

            <button className="btn-secondary-link" onClick={handlePrint} style={{ padding: '9px 16px', fontSize: '0.82rem' }}>
              <Printer size={15} />
              <span>PRINT (1-PAGE)</span>
            </button>

            <button className="btn-secondary-link" onClick={handleCopy} style={{ padding: '9px 14px', fontSize: '0.82rem' }}>
              {copied ? <Check size={15} color="#10b981" /> : <Copy size={15} />}
              <span>{copied ? 'COPIED!' : 'COPY TEXT'}</span>
            </button>
          </div>
        </div>

        {/* Exact 1-Page Printable Paper Document (Matching Image Format) */}
        <div id="printable-resume" className="printable-resume-sheet">
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '10px', borderBottom: '1px solid #000', paddingBottom: '8px' }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '24pt', fontWeight: 800, color: '#000000', letterSpacing: '0.5px', margin: '0 0 4px 0', textTransform: 'uppercase' }}>
              PONDURI DANUSH
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px 14px', fontSize: '8.8pt', color: '#333333', fontWeight: 500 }}>
              <span>✉️ ponduridanush@gmail.com</span>
              <span>•</span>
              <span>📞 +91-9030551889</span>
              <span>•</span>
              <a href="https://www.linkedin.com/in/ponduri-danush-858b99309/" target="_blank" rel="noreferrer" style={{ color: '#000', textDecoration: 'none', fontWeight: 600 }}>
                🔗 LinkedIn
              </a>
              <span>•</span>
              <a href="https://github.com/DANUSH-20-09" target="_blank" rel="noreferrer" style={{ color: '#000', textDecoration: 'none', fontWeight: 600 }}>
                💻 GitHub
              </a>
              <span>•</span>
              <span>📍 Andhra Pradesh, India</span>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div style={{ marginBottom: '8px' }}>
            <h2 className="resume-section-title">
              Professional Summary
            </h2>
            <p style={{ fontSize: '8.8pt', lineHeight: 1.42, color: '#1f2937', margin: 0 }}>
              B. Tech Computer Science and Engineering graduate from R.M.D. Engineering College, Chennai, with hands-on knowledge of Artificial Intelligence, Deep Learning, Generative AI, and Multi-Agent Systems. Skilled in developing scalable AI solutions and applying machine learning techniques to real-world problems. Strong foundation in Python, data structures, databases, and software development, with a passion for building innovative and production-ready AI applications.
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div style={{ marginBottom: '8px' }}>
            <h2 className="resume-section-title">
              Technical Skills
            </h2>
            <div style={{ fontSize: '8.8pt', lineHeight: 1.45, color: '#1f2937' }}>
              <div><strong>Programming:</strong> Python, Java, SQL, HTML/CSS</div>
              <div><strong>AI/ML & GenAI:</strong> TensorFlow, Scikit-learn, Hugging Face, LLMs, Prompt Engineering, RAG, Multi-Agent Systems</div>
              <div><strong>Web & APIs:</strong> FastAPI, Flask, Bootstrap</div>
              <div><strong>Tools & Platforms:</strong> Git, Jupyter, VS Code, PostgreSQL, MySQL</div>
            </div>
          </div>

          {/* Section: Technical Projects */}
          <div style={{ marginBottom: '8px' }}>
            <h2 className="resume-section-title">
              Technical Projects
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 700, fontSize: '9pt', color: '#000' }}>
                  <span>Multi-Agentic Report Generator App | LangGraph, LangChain, Python, LLMs</span>
                  <span style={{ fontSize: '8.4pt', fontWeight: 600, color: '#374151' }}>November 2025</span>
                </div>
                <ul className="resume-bullets">
                  <li>Designed a multi-agent AI system using LangGraph to collaboratively generate structured reports.</li>
                  <li>Built specialized agents for research, analysis, and synthesis, reducing report generation time by 70%.</li>
                  <li>Integrated multiple LLM APIs (OpenAI, Groq, Ollama) with fallback mechanisms for zero-downtime reliability.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 700, fontSize: '9pt', color: '#000' }}>
                  <span>Agentic Chatbot with Tool Integration | LangGraph, LangChain, Streamlit, Python</span>
                  <span style={{ fontSize: '8.4pt', fontWeight: 600, color: '#374151' }}>October 2025</span>
                </div>
                <ul className="resume-bullets">
                  <li>Developed an agentic chatbot with multi-mode support: conversational AI, tool execution, and AI news aggregation.</li>
                  <li>Implemented LangGraph-based state management for complex dialogue flows and persistent context.</li>
                  <li>Built a Streamlit UI with real-time response streaming and dynamic tool integration.</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 700, fontSize: '9pt', color: '#000' }}>
                  <span>Smart Blood Bank Management System | Python, SQL, HTML, CSS</span>
                  <span style={{ fontSize: '8.4pt', fontWeight: 600, color: '#374151' }}>Project Showcase</span>
                </div>
                <ul className="resume-bullets">
                  <li>Developed a centralized blood bank management system to manage donor, recipient, blood inventory, and blood request records.</li>
                  <li>Implemented real-time blood availability tracking and request management to reduce delays in finding required blood groups.</li>
                  <li>Designed a user-friendly interface with database integration for efficient, secure, and organized blood bank operations.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Professional Experience */}
          <div style={{ marginBottom: '8px' }}>
            <h2 className="resume-section-title">
              Professional Experience
            </h2>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 700, fontSize: '9pt', color: '#000' }}>
                <span>Sun Square Technologies Pvt. Ltd. — Data Analytics Intern</span>
                <span style={{ fontSize: '8.4pt', fontWeight: 600, color: '#374151' }}>June 2026 – July 2026</span>
              </div>
              <div style={{ fontSize: '8.2pt', color: '#4b5563', fontStyle: 'italic', marginBottom: '2px' }}>
                Nellore, Andhra Pradesh, India
              </div>
              <ul className="resume-bullets">
                <li>Completed an academic internship in Data Analytics, gaining practical exposure to data analysis and data-driven problem-solving. Applied Python, data preprocessing, and machine learning techniques to analyze movie data and generate personalized recommendations.</li>
                <li>Applied data preprocessing, analysis, and visualization techniques to analyze datasets and derive meaningful insights.</li>
                <li>Gained hands-on experience in data analytics, real-world project implementation, and analytical problem-solving.</li>
              </ul>
            </div>
          </div>

          {/* Section: Education */}
          <div style={{ marginBottom: '8px' }}>
            <h2 className="resume-section-title">
              Education
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '8.8pt', color: '#1f2937' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <strong>R.M.D. ENGINEERING COLLEGE</strong> — Bachelor of Technology in Artificial Intelligence and Machine Learning
                </div>
                <span style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>Current Studying (CGPA: 7.1)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <strong>VOWEL JUNIOR COLLEGE</strong> — MPC Intermediate (Mathematics, Physics, Chemistry)
                </div>
                <span style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>2022–2024 (Percentage: 81.6%)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <strong>VOWEL INDIA SCHOOL</strong> — Secondary School Education (Class X)
                </div>
                <span style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>2022 (Percentage: 75.67%)</span>
              </div>
            </div>
          </div>

          {/* Section: Certifications */}
          <div>
            <h2 className="resume-section-title">
              Certifications
            </h2>
            <ul className="resume-bullets" style={{ marginBottom: 0 }}>
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
