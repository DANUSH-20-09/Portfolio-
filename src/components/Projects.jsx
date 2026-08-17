import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Bot, Layers, Sparkles, Database } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const projectsData = [
    {
      id: 'multi-agent-report',
      title: 'Multi-Agentic Report Generator App',
      date: 'November 2025',
      category: 'Multi-Agent AI',
      subtitle: 'LangGraph, LangChain, Python, LLMs',
      tech: ['LangGraph', 'LangChain', 'Python', 'OpenAI API', 'Groq', 'Ollama', 'Multi-Agent Orchestration'],
      shortDescription: 'Designed an autonomous multi-agent system using LangGraph that collaborates to generate comprehensive structured reports, accelerating speed by 70%.',
      fullDescription: 'Designed and deployed a state-of-the-art multi-agent AI system utilizing LangGraph for dynamic task graph execution and agentic state persistence. The system splits report creation across dedicated specialized agents: a Research Agent for web/data fetching, an Analysis Agent for data synthesis, and a Drafting Agent for structured markdown rendering.',
      points: [
        'Designed a multi-agent AI system using LangGraph to collaboratively generate structured reports',
        'Built specialized agents for research, analysis, and synthesis, reducing report generation time by 70%',
        'Integrated multiple LLM APIs (OpenAI, Groq, Ollama) with intelligent fallback mechanisms for zero-downtime reliability'
      ],
      icon: <Bot size={26} color="#ff1a40" />
    },
    {
      id: 'agentic-chatbot',
      title: 'Agentic Chatbot with Tool Integration',
      date: 'October 2025',
      category: 'Agentic AI & Web',
      subtitle: 'LangGraph, LangChain, Streamlit, Python',
      tech: ['LangGraph', 'Streamlit', 'Python', 'LangChain', 'Web Scraping', 'AI News API'],
      shortDescription: 'Built an agentic chatbot supporting conversational AI, live tool invocation, and AI news aggregation with real-time response streaming.',
      fullDescription: 'Developed an end-to-end interactive conversational agent leveraging LangGraph stateful dialogue management. Supports real-time execution of web search tools, calculation tools, and automated news feed scraping, delivered through a sleek Streamlit web front-end.',
      points: [
        'Developed an agentic chatbot with multi-mode support: conversational AI, tool execution, and AI news aggregation',
        'Implemented LangGraph-based state management for complex dialogue flows and persistent context',
        'Built a Streamlit UI with real-time response streaming and dynamic tool integration'
      ],
      icon: <Sparkles size={26} color="#ff1a40" />
    },
    {
      id: 'blood-bank',
      title: 'Smart Blood Bank Management System',
      date: 'Project Showcase',
      category: 'Web & Databases',
      subtitle: 'Python, SQL, HTML, CSS',
      tech: ['Python', 'SQL', 'PostgreSQL/MySQL', 'HTML5', 'CSS3', 'Database Operations'],
      shortDescription: 'A centralized inventory and request management system enabling real-time blood group tracking to prevent supply delays.',
      fullDescription: 'Developed a robust centralized blood bank management application designed to organize donor records, recipient requests, and real-time blood stock levels across hospital networks.',
      points: [
        'Developed a centralized blood bank management system to manage donor, recipient, blood inventory, and blood request records',
        'Implemented real-time blood availability tracking and request management to reduce delays in finding required blood groups',
        'Designed a user-friendly interface with database integration for efficient, secure, and organized blood bank operations'
      ],
      icon: <Database size={26} color="#ff1a40" />
    }
  ];

  const categories = ['All', 'Multi-Agent AI', 'Agentic AI & Web', 'Web & Databases'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ padding: '60px 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="section-header">
        <div className="section-tag">Featured Works</div>
        <h2 className="section-title">Technical Projects & AI Systems</h2>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              background: filter === cat ? 'var(--accent-red)' : 'rgba(255, 255, 255, 0.05)',
              color: '#ffffff',
              border: filter === cat ? 'none' : '1px solid var(--border-color)',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="glass-card" 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justify: 'space-between',
              cursor: 'pointer'
            }}
            onClick={() => setSelectedProject(project)}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ background: 'rgba(255,26,64,0.12)', padding: '10px', borderRadius: '12px' }}>
                  {project.icon}
                </div>
                <span className="badge-tag">{project.category}</span>
              </div>

              <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600, marginBottom: '6px' }}>
                {project.date}
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 700, marginBottom: '10px', lineHeight: 1.3 }}>
                {project.title}
              </h3>

              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {project.shortDescription}
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {project.tech.slice(0, 4).map((t, idx) => (
                  <span key={idx} style={{ background: 'rgba(255,255,255,0.05)', color: '#cbd5e1', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '8px' }}>
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span style={{ background: 'rgba(255,255,255,0.05)', color: '#64748b', fontSize: '0.78rem', padding: '4px 10px', borderRadius: '8px' }}>
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px', 
                color: '#ff1a40', 
                fontSize: '0.9rem', 
                fontWeight: 700 
              }}>
                <span>View Full Details</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
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
