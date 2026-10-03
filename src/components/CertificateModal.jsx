import React from 'react';
import { X, Download, ExternalLink, ShieldCheck, Calendar, Award, CheckCircle2, User, Building } from 'lucide-react';

const CertificateModal = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '920px', width: '95%', maxHeight: '90vh', overflowY: 'auto' }}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close certificate preview">
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="project-category-badge">{certificate.badge}</span>
              <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={14} />
                {certificate.date}
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--text-primary)', fontWeight: 800, lineHeight: 1.25 }}>
              {certificate.title}
            </h2>
            <div style={{ color: 'var(--accent-coral)', fontSize: '0.92rem', fontWeight: 700, marginTop: '4px' }}>
              Issued by: {certificate.issuer}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            {certificate.pdfUrl && (
              <a 
                href={certificate.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-coral-cta"
                style={{ padding: '10px 20px', fontSize: '0.84rem' }}
                download
              >
                <Download size={15} />
                <span>DOWNLOAD PDF</span>
              </a>
            )}
            {certificate.imageUrl && (
              <a 
                href={certificate.imageUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary-link"
                style={{ padding: '10px 18px', fontSize: '0.84rem' }}
              >
                <ExternalLink size={15} />
                <span>FULL IMAGE</span>
              </a>
            )}
          </div>
        </div>

        {/* Certificate High-Res Visual Preview */}
        <div style={{ 
          background: 'var(--bg-secondary)', 
          border: '1px solid var(--border-color)', 
          borderRadius: '8px', 
          padding: '16px', 
          marginBottom: '24px',
          textAlign: 'center',
          boxShadow: 'var(--card-shadow)'
        }}>
          {certificate.imageUrl ? (
            <img 
              src={certificate.imageUrl} 
              alt={certificate.title}
              style={{
                width: '100%',
                maxHeight: '480px',
                objectFit: 'contain',
                borderRadius: '6px',
                border: '1px solid var(--border-light)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)'
              }} 
            />
          ) : (
            <div style={{ padding: '40px', color: 'var(--text-muted)' }}>
              Document Preview Ready
            </div>
          )}
        </div>

        {/* Metadata Details Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '16px', 
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '6px',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
              Recipient Name
            </div>
            <div style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <User size={15} color="var(--accent-coral)" />
              <span>{certificate.recipient || 'Ponduri Danush'}</span>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
              Credential / Verification ID
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
              {certificate.credentialId || 'Verified Record'}
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
              Verification Status
            </div>
            <div style={{ fontSize: '0.88rem', color: '#10b981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} />
              <span>{certificate.validity || 'Official & Verified'}</span>
            </div>
          </div>
        </div>

        {/* Certified Competencies & Topics */}
        {certificate.topics && certificate.topics.length > 0 && (
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Core Knowledge & Competencies
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
              {certificate.topics.map((t, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={15} color="var(--accent-coral)" style={{ flexShrink: 0 }} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CertificateModal;
