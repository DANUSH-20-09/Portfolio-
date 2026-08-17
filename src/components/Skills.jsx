import React, { useState } from 'react';
import { Terminal, Code, Cpu, Database, Wrench, Layers, Server } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'ai', label: 'AI/ML & GenAI' },
    { id: 'programming', label: 'Programming' },
    { id: 'web', label: 'Web & APIs' },
    { id: 'tools', label: 'Tools & Databases' }
  ];

  const skillGroups = [
    {
      category: 'ai',
      title: 'AI/ML & GenAI',
      icon: <Cpu size={22} color="#ff1a40" />,
      skills: [
        { name: 'Multi-Agent Systems', detail: 'LangGraph, Autonomous Agents' },
        { name: 'LangChain & LangGraph', detail: 'State management, Tool integration' },
        { name: 'LLMs & RAG', detail: 'OpenAI, Groq, Ollama, Vector DBs' },
        { name: 'Prompt Engineering', detail: 'Structured outputs, System prompts' },
        { name: 'TensorFlow', detail: 'Deep Learning models' },
        { name: 'Scikit-learn', detail: 'Data Mining, Classification & Regression' },
        { name: 'Hugging Face', detail: 'Pre-trained Transformers & Embeddings' }
      ]
    },
    {
      category: 'programming',
      title: 'Programming Languages',
      icon: <Code size={22} color="#ff1a40" />,
      skills: [
        { name: 'Python', detail: 'Data Structures, OOP, Scripting, AI Libraries' },
        { name: 'Java', detail: 'Core Java, OOP Concepts, Fundamentals' },
        { name: 'SQL', detail: 'Complex Queries, Joins, Aggregations, PL/SQL' },
        { name: 'HTML5 / CSS3', detail: 'Responsive UI Design, Modern Styling' }
      ]
    },
    {
      category: 'web',
      title: 'Web Frameworks & APIs',
      icon: <Server size={22} color="#ff1a40" />,
      skills: [
        { name: 'FastAPI', detail: 'Asynchronous REST APIs, OpenAPI, Pydantic' },
        { name: 'Flask', detail: 'Lightweight Web Services, Routing' },
        { name: 'Streamlit', detail: 'Real-time AI Chatbots & Data Dashboards' },
        { name: 'Bootstrap', detail: 'Frontend Layouts & UI Components' }
      ]
    },
    {
      category: 'tools',
      title: 'Tools & Databases',
      icon: <Database size={22} color="#ff1a40" />,
      skills: [
        { name: 'Git & GitHub', detail: 'Version Control, Collaborative Workflows' },
        { name: 'PostgreSQL & MySQL', detail: 'Relational Database Management' },
        { name: 'Oracle APEX', detail: 'Low-code Cloud App Development' },
        { name: 'Jupyter & VS Code', detail: 'Interactive Data Exploration & Dev' }
      ]
    }
  ];

  const filteredGroups = activeCategory === 'all' 
    ? skillGroups 
    : skillGroups.filter(g => g.category === activeCategory);

  return (
    <section id="skills" style={{ padding: '60px 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="section-header">
        <div className="section-tag">Technical Expertise</div>
        <h2 className="section-title">Skills & Technologies</h2>
      </div>

      {/* Category Filter Tabs */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '36px' }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              background: activeCategory === cat.id ? 'var(--accent-red)' : 'rgba(255, 255, 255, 0.05)',
              color: '#ffffff',
              border: activeCategory === cat.id ? 'none' : '1px solid var(--border-color)',
              padding: '10px 22px',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: activeCategory === cat.id ? '0 6px 20px var(--accent-red-glow)' : 'none'
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Display Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {filteredGroups.map((group, idx) => (
          <div key={idx} className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              {group.icon}
              <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 700 }}>{group.title}</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {group.skills.map((skill, sIdx) => (
                <div 
                  key={sIdx}
                  style={{
                    padding: '12px 14px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ color: '#f1f5f9', fontSize: '0.95rem', fontWeight: 600, marginBottom: '4px' }}>
                    {skill.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.4' }}>
                    {skill.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
