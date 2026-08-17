import React from 'react';
import { X, ExternalLink, Github, Calendar, Layers, CheckCircle, Cpu, Zap } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span className="badge-tag">{project.category}</span>
          <span style={{ color: '#64748b', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Calendar size={14} />
            {project.date}
          </span>
        </div>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: '#ffffff', marginBottom: '16px', fontWeight: 800 }}>
          {project.title}
        </h2>

        <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '24px' }}>
          {project.fullDescription}
        </p>

        {/* Tech Badges */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '0.88rem', color: '#94a3b8', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase' }}>
            Technologies & Frameworks
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tech.map((t, idx) => (
              <span 
                key={idx} 
                style={{ 
                  background: 'rgba(255, 26, 64, 0.1)', 
                  border: '1px solid rgba(255, 26, 64, 0.3)', 
                  color: '#ff5271', 
                  fontSize: '0.85rem', 
                  fontWeight: 600, 
                  padding: '6px 14px', 
                  borderRadius: '16px' 
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Core Highlights */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ fontSize: '0.88rem', color: '#94a3b8', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase' }}>
            Key Architecture & Features
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {project.points.map((point, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Zap size={18} color="#ff1a40" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#e2e8f0', fontSize: '0.94rem', lineHeight: 1.6 }}>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer Buttons */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
          <a 
            href="https://github.com/DANUSH-20-09" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
            style={{ padding: '10px 24px', fontSize: '0.92rem' }}
          >
            <Github size={16} />
            <span>View Source Code</span>
          </a>
          <button 
            className="btn-secondary"
            onClick={onClose}
            style={{ padding: '10px 24px', fontSize: '0.92rem' }}
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
