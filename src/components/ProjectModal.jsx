import React from 'react';
import { X, Github, Calendar, CheckCircle2 } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <span className="project-category-badge">{project.category}</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Calendar size={14} color="var(--accent-coral)" />
            {project.date}
          </span>
        </div>

        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '16px', fontWeight: 800 }}>
          {project.title}
        </h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '24px' }}>
          {project.fullDescription}
        </p>

        {/* Tech Badges */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
            Technologies & Frameworks
          </div>
          <div className="project-tech-tags">
            {project.tech.map((t, idx) => (
              <span key={idx} className="tech-tag" style={{ color: 'var(--accent-coral)', borderColor: 'var(--accent-coral-border)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Core Highlights */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Key Architecture & Features
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {project.points.map((point, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={16} color="var(--accent-coral)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer Buttons */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
          <a 
            href="https://github.com/DANUSH-20-09" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-coral-cta"
            style={{ padding: '12px 24px', fontSize: '0.86rem' }}
          >
            <Github size={16} />
            <span>VIEW ON GITHUB</span>
          </a>
          <button 
            className="btn-secondary-link"
            onClick={onClose}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
