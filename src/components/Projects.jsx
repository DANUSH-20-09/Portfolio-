import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Bot, Layers, Sparkles, Database, CheckCircle2 } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('ALL');

  const projectsData = [
    {
      id: 'multi-agent-report',
      index: '01',
      title: 'Multi-Agentic Report Generator App',
      date: 'November 2025',
      category: 'MULTI-AGENT AI',
      subtitle: 'LangGraph, LangChain, Python, LLMs',
      tech: ['LangGraph', 'LangChain', 'Python', 'OpenAI API', 'Groq', 'Ollama', 'Multi-Agent Orchestration'],
      shortDescription: 'Designed an autonomous multi-agent system using LangGraph that collaborates to generate comprehensive structured reports, accelerating generation speed by 70%.',
      fullDescription: 'Designed and deployed a state-of-the-art multi-agent AI system utilizing LangGraph for dynamic task graph execution and agentic state persistence. The system splits report creation across dedicated specialized agents: a Research Agent for web/data fetching, an Analysis Agent for data synthesis, and a Drafting Agent for structured markdown rendering.',
      points: [
        'Designed a multi-agent AI system using LangGraph to collaboratively generate structured reports',
        'Built specialized agents for research, analysis, and synthesis, reducing report generation time by 70%',
        'Integrated multiple LLM APIs (OpenAI, Groq, Ollama) with intelligent fallback mechanisms for zero-downtime reliability'
      ],
      icon: <Bot size={24} />
    },
    {
      id: 'agentic-chatbot',
      index: '02',
      title: 'Agentic Chatbot with Tool Integration',
      date: 'October 2025',
      category: 'AGENTIC AI & WEB',
      subtitle: 'LangGraph, LangChain, Streamlit, Python',
      tech: ['LangGraph', 'Streamlit', 'Python', 'LangChain', 'Web Scraping', 'AI News API'],
      shortDescription: 'Built an agentic chatbot supporting conversational AI, live tool invocation, and AI news aggregation with real-time response streaming.',
      fullDescription: 'Developed an end-to-end interactive conversational agent leveraging LangGraph stateful dialogue management. Supports real-time execution of web search tools, calculation tools, and automated news feed scraping, delivered through a sleek Streamlit web front-end.',
      points: [
        'Developed an agentic chatbot with multi-mode support: conversational AI, tool execution, and AI news aggregation',
        'Implemented LangGraph-based state management for complex dialogue flows and persistent context',
        'Built a Streamlit UI with real-time response streaming and dynamic tool integration'
      ],
      icon: <Sparkles size={24} />
    },
    {
      id: 'blood-bank',
      index: '03',
      title: 'Smart Blood Bank Management System',
      date: 'Project Showcase',
      category: 'WEB & DATABASES',
      subtitle: 'Python, SQL, HTML, CSS',
      tech: ['Python', 'SQL', 'PostgreSQL/MySQL', 'HTML5', 'CSS3', 'Database Operations'],
      shortDescription: 'A centralized inventory and request management system enabling real-time blood group tracking to prevent supply delays.',
      fullDescription: 'Developed a robust centralized blood bank management application designed to organize donor records, recipient requests, and real-time blood stock levels across hospital networks.',
      points: [
        'Developed a centralized blood bank management system to manage donor, recipient, blood inventory, and blood request records',
        'Implemented real-time blood availability tracking and request management to reduce delays in finding required blood groups',
        'Designed a user-friendly interface with database integration for efficient, secure, and organized blood bank operations'
      ],
      icon: <Database size={24} />
    }
  ];

  const categories = ['ALL', 'MULTI-AGENT AI', 'AGENTIC AI & WEB', 'WEB & DATABASES'];

  const filteredProjects = filter === 'ALL' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="studio-section">
      <div className="studio-container">
        
        {/* Section Header */}
        <div className="section-eyebrow">FEATURED WORKS</div>
        <div className="section-heading-row">
          <h2 className="section-title">Selected Projects & AI Systems</h2>
          <p className="section-desc">
            Production-grade autonomous AI agents, stateful LangGraph workflows, and scalable database architectures engineered for real impact.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-tab ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div>
                <div className="project-card-header">
                  <span className="project-index">{project.index}</span>
                  <span className="project-category-badge">{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <div className="project-subtitle">{project.subtitle}</div>
                
                <p className="project-desc">{project.shortDescription}</p>

                <ul className="project-points">
                  {project.points.map((point, pIdx) => (
                    <li key={pIdx} className="project-point">
                      <CheckCircle2 size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-tech-tags">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <button 
                  className="btn-project-detail"
                  onClick={() => setSelectedProject(project)}
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight size={14} />
                </button>

                <a 
                  href="https://github.com/DANUSH-20-09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="View on GitHub"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
