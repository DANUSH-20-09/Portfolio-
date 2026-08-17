import React, { useState } from 'react';
import { X, Download, Copy, Check, Mail, Phone, MapPin, Github, Linkedin, FileText } from 'lucide-react';

const ResumeModal = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const resumeText = `
PONDURI DANUSH
Email: ponduridanush@gmail.com | Phone: +91-9030551889
LinkedIn: linkedin.com/in/ponduri-danush-858b99309 | GitHub: github.com/DANUSH-20-09

PROFESSIONAL SUMMARY:
B. Tech Computer Science and Engineering graduate from R.M.D. Engineering College, Chennai, with hands-on knowledge of Artificial Intelligence, Deep Learning, Generative AI, and Multi-Agent Systems. Skilled in developing scalable AI solutions and applying machine learning techniques to real-world problems. Strong foundation in Python, data structures, databases, and software development, with a passion for building innovative and production-ready AI applications.

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
- Java for Beginners – Core programming fundamentals and object-oriented design
- Oracle APEX Cloud Developer Certified Professional
- Oracle Cloud Infrastructure 2025 Certified Generative AI Professional
- Agentic AI: AI agents, LLM-based workflows, tool usage, and multi-agent systems
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
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '850px' }}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span className="badge-tag">Official Resume</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: '#ffffff', fontWeight: 800, marginTop: '4px' }}>
              Ponduri Danush
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn-secondary" onClick={handleCopy} style={{ padding: '8px 18px', fontSize: '0.86rem' }}>
              {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
              <span>{copied ? 'Copied Resume!' : 'Copy Text'}</span>
            </button>
            <button className="btn-primary" onClick={handlePrint} style={{ padding: '8px 18px', fontSize: '0.86rem' }}>
              <Download size={16} />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Structured Printable Resume Content */}
        <div className="resume-paper" style={{ background: '#0a0d1a', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '30px', color: '#e2e8f0' }}>
          
          {/* Resume Header */}
          <div style={{ textAlign: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '24px' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '1px', marginBottom: '8px' }}>
              PONDURI DANUSH
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.88rem', color: '#94a3b8' }}>
              <a href="mailto:ponduridanush@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>✉️ ponduridanush@gmail.com</a>
              <a href="tel:+919030551889" style={{ color: 'inherit', textDecoration: 'none' }}>📞 +91-9030551889</a>
              <a href="https://www.linkedin.com/in/ponduri-danush-858b99309/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff5271', textDecoration: 'none' }}>🔗 linkedin.com/in/ponduri-danush-858b99309</a>
              <a href="https://github.com/DANUSH-20-09" target="_blank" rel="noopener noreferrer" style={{ color: '#ff5271', textDecoration: 'none' }}>💻 github.com/DANUSH-20-09</a>
            </div>
          </div>

          {/* Summary */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#ff1a40', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
              Professional Summary
            </h3>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#cbd5e1' }}>
              B. Tech Computer Science and Engineering graduate from R.M.D. Engineering College, Chennai, with hands-on knowledge of Artificial Intelligence, Deep Learning, Generative AI, and Multi-Agent Systems. Skilled in developing scalable AI solutions and applying machine learning techniques to real-world problems. Strong foundation in Python, data structures, databases, and software development, with a passion for building innovative and production-ready AI applications.
            </p>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#ff1a40', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.5px' }}>
              Technical Skills
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', color: '#cbd5e1' }}>
              <div><strong>Programming:</strong> Python, Java, SQL, HTML/CSS</div>
              <div><strong>AI/ML & GenAI:</strong> TensorFlow, Scikit-learn, Hugging Face, LLMs, Prompt Engineering, RAG, Multi-Agent Systems</div>
              <div><strong>Web & APIs:</strong> FastAPI, Flask, Bootstrap</div>
              <div><strong>Tools & Platforms:</strong> Git, Jupyter, VS Code, PostgreSQL, MySQL</div>
            </div>
          </div>

          {/* Technical Projects */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#ff1a40', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.5px' }}>
              Technical Projects
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#ffffff' }}>
                  <span>Multi-Agentic Report Generator App | LangGraph, LangChain, Python, LLMs</span>
                  <span style={{ color: '#ff1a40', fontSize: '0.85rem' }}>Nov 2025</span>
                </div>
                <ul style={{ paddingLeft: '20px', marginTop: '6px', fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                  <li>Designed a multi-agent AI system using LangGraph to collaboratively generate structured reports</li>
                  <li>Built specialized agents for research, analysis, and synthesis, reducing report generation time by 70%</li>
                  <li>Integrated multiple LLM APIs (OpenAI, Groq, Ollama) with fallback mechanisms for reliability</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#ffffff' }}>
                  <span>Agentic Chatbot with Tool Integration | LangGraph, LangChain, Streamlit, Python</span>
                  <span style={{ color: '#ff1a40', fontSize: '0.85rem' }}>Oct 2025</span>
                </div>
                <ul style={{ paddingLeft: '20px', marginTop: '6px', fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                  <li>Developed an agentic chatbot with multi-mode support: conversational AI, tool execution, and AI news aggregation</li>
                  <li>Implemented LangGraph-based state management for complex dialogue flows and persistent context</li>
                  <li>Built a Streamlit UI with real-time response streaming and dynamic tool integration</li>
                </ul>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#ffffff' }}>
                  <span>Smart Blood Bank Management System | Python, SQL, HTML, CSS</span>
                  <span style={{ color: '#ff1a40', fontSize: '0.85rem' }}>Showcase</span>
                </div>
                <ul style={{ paddingLeft: '20px', marginTop: '6px', fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                  <li>Developed a centralized blood bank management system to manage donor, recipient, blood inventory, and blood request records</li>
                  <li>Implemented real-time blood availability tracking and request management to reduce delays in finding required blood groups</li>
                  <li>Designed a user-friendly interface with database integration for efficient, secure, and organized blood bank operations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#ff1a40', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.5px' }}>
              Professional Experience
            </h3>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#ffffff' }}>
                <span>Sun Square Technologies Pvt. Ltd. — Data Analytics Intern</span>
                <span style={{ color: '#ff1a40', fontSize: '0.85rem' }}>June 2026 – July 2026</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '6px' }}>Nellore, India</div>
              <ul style={{ paddingLeft: '20px', fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                <li>Completed an academic internship in Data Analytics, gaining practical exposure to data analysis and data-driven problem-solving. Applied Python, data preprocessing, and machine learning techniques to analyze movie data and generate personalized recommendations.</li>
                <li>Applied data preprocessing, analysis, and visualization techniques to analyze datasets and derive meaningful insights. Gained hands-on experience in data analytics, real-world project implementation, and analytical problem-solving.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', color: '#ff1a40', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.5px' }}>
              Education
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ffffff' }}>
                <span><strong>R.M.D. ENGINEERING COLLEGE</strong> — B.Tech in AI & ML</span>
                <span>Current Studying | CGPA: 7.1</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ffffff' }}>
                <span><strong>VOWEL JUNIOR COLLEGE</strong> — MPC Intermediate</span>
                <span>2022–2024 | Percentage: 81.6%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ffffff' }}>
                <span><strong>VOWEL INDIA SCHOOL</strong> — Secondary Education</span>
                <span>2022 | Percentage: 75.67%</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{ fontSize: '1.1rem', color: '#ff1a40', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.5px' }}>
              Certifications
            </h3>
            <ul style={{ paddingLeft: '20px', fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6 }}>
              <li><strong>Oracle Cloud Infrastructure 2025 Certified Generative AI Professional:</strong> Generative AI concepts, OCI AI services, and LLM applications</li>
              <li><strong>Agentic AI:</strong> AI agents, LLM-based workflows, tool usage, and multi-agent systems</li>
              <li><strong>Oracle APEX Cloud Developer Certified Professional:</strong> Oracle APEX application development, SQL, PL/SQL, and database solutions</li>
              <li><strong>Java for Beginners:</strong> Core programming fundamentals and object-oriented design</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
