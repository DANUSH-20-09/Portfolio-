import React, { useState } from 'react';
import { Cpu, Code, Server, Database } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'ALL SKILLS' },
    { id: 'ai', label: 'AI/ML & GENAI' },
    { id: 'programming', label: 'PROGRAMMING' },
    { id: 'web', label: 'WEB & APIS' },
    { id: 'tools', label: 'DATABASES & TOOLS' }
  ];

  const skillGroups = [
    {
      category: 'ai',
      title: 'AI/ML & Generative AI',
      icon: <Cpu size={20} />,
      skills: [
        { name: 'Multi-Agent Systems', detail: 'LangGraph, Autonomous Agents & Routing' },
        { name: 'LangChain & LangGraph', detail: 'State graphs, Tool integration & memory' },
        { name: 'LLMs & RAG', detail: 'OpenAI, Groq, Ollama, Vector DBs' },
        { name: 'Prompt Engineering', detail: 'Structured outputs, Context injection' },
        { name: 'TensorFlow', detail: 'Deep Learning models & neural pipelines' },
        { name: 'Scikit-learn', detail: 'Data Mining, Classification & Regression' },
        { name: 'Hugging Face', detail: 'Pre-trained Transformers & Embeddings' }
      ]
    },
    {
      category: 'programming',
      title: 'Programming Languages',
      icon: <Code size={20} />,
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
      icon: <Server size={20} />,
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
      icon: <Database size={20} />,
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
    <section id="skills" className="studio-section">
      <div className="studio-container">
        
        <div className="section-eyebrow">TECHNICAL EXPERTISE</div>
        <div className="section-heading-row">
          <h2 className="section-title">Core Skills & Tooling</h2>
          <p className="section-desc">
            A specialized toolkit spanning state-of-the-art agentic AI, production backend systems, and deep data analytics.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredGroups.map((group, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-cat-header">
                <div style={{ color: 'var(--accent-coral)' }}>{group.icon}</div>
                <h3 className="skill-cat-title">{group.title}</h3>
              </div>

              <div className="skill-items-list">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-row">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-detail">{skill.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
