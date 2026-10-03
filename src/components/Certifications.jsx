import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, Sparkles, Database, ExternalLink, Download, FileText, Eye } from 'lucide-react';
import CertificateModal from './CertificateModal';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificationsList = [
    {
      id: 'oracle-genai-2025',
      title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      issuer: 'Oracle University / OCI',
      badge: 'Oracle Certified Professional',
      date: 'October 09, 2025',
      validity: 'Valid until October 09, 2027',
      credentialId: '102867678OCI25GAIOCP',
      recipient: 'Ponduri Danush',
      imageUrl: './certificates/oracle-generative-ai-professional-2025.png',
      pdfUrl: './certificates/oracle-generative-ai-professional-2025.pdf',
      icon: <Sparkles size={22} />,
      topics: [
        'Generative AI Core Architecture & LLM Foundations',
        'OCI AI Services & Vector Embeddings',
        'Retrieval-Augmented Generation (RAG) Systems',
        'Prompt Engineering & Structured Output Synthesis',
        'LLM Fine-Tuning & Deployment Strategies'
      ]
    },
    {
      id: 'oracle-apex-developer',
      title: 'Oracle APEX Cloud Developer Certified Professional',
      issuer: 'Oracle University',
      badge: 'Oracle Certified Professional',
      date: 'October 09, 2025',
      validity: 'Official Oracle Certified Professional',
      credentialId: '102867678APEX24CDOCP',
      recipient: 'Ponduri Danush',
      imageUrl: './certificates/oracle-apex-cloud-developer-professional.png',
      pdfUrl: './certificates/oracle-apex-cloud-developer-professional.pdf',
      icon: <Database size={22} />,
      topics: [
        'Oracle APEX Low-Code Cloud App Development',
        'SQL, PL/SQL & Database Stored Procedures',
        'REST Data Services & API Integration',
        'Data Modeling, Schemas & Transaction Integrity',
        'Enterprise Security & User Access Controls'
      ]
    },
    {
      id: 'oracle-ai-db-sql',
      title: 'Oracle AI Database SQL Certified Associate',
      issuer: 'Oracle University',
      badge: 'Oracle Certified Associate',
      date: 'August 14, 2026',
      validity: 'Official Oracle Certified Associate',
      credentialId: '103517558DB23AISQLOCA',
      recipient: 'PONDURI DANUSH',
      imageUrl: './certificates/oracle-ai-database-sql-associate.png',
      pdfUrl: './certificates/oracle-ai-database-sql-associate.pdf',
      icon: <Database size={22} />,
      topics: [
        'Oracle AI-Assisted Database Operations',
        'Complex SQL Queries, Subqueries & Analytics Functions',
        'Schema Design, Constraints, Indexes & Joins',
        'Data Definition (DDL) & Data Manipulation (DML)',
        'Database Optimization & Relational Performance'
      ]
    },
    {
      id: 'sun-square-internship',
      title: 'Data Analytics Academic Internship Certification',
      issuer: 'Sun Square Technologies Pvt. Ltd.',
      badge: 'Industry Internship',
      date: 'July 13, 2026',
      validity: 'Academic Internship (11-06-2026 to 11-07-2026)',
      credentialId: 'Reg No: 111524204042 (R.M.D. Engg College)',
      recipient: 'Mr. P. DANUSH',
      imageUrl: './certificates/sun-square-data-analytics-internship.png',
      pdfUrl: './certificates/sun-square-data-analytics-internship.pdf',
      icon: <Award size={22} />,
      topics: [
        'Data Analytics Pipelines & Dataset Engineering in Python',
        'Movie Recommendation ML Engine Implementation',
        'Exploratory Data Analysis (EDA) & Feature Scaling',
        'Data Visualization & Analytical Problem Solving',
        'Model Evaluation & Real-World Dataset Insights'
      ]
    }
  ];

  return (
    <section id="certifications" className="studio-section">
      <div className="studio-container">
        
        <div className="section-eyebrow">VERIFIED CREDENTIALS</div>
        <div className="section-heading-row">
          <h2 className="section-title">Certifications & Honors</h2>
          <p className="section-desc">
            Official industry certifications recognized by Oracle Corporation and practical industry experience certificates. Click any certificate to preview high-resolution documents and download PDFs.
          </p>
        </div>

        <div className="dual-section-grid">
          {certificationsList.map((cert) => (
            <div 
              key={cert.id} 
              className="edu-cert-card"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                {/* Header / Badges */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div className="highlight-icon" style={{ marginBottom: 0, width: '40px', height: '40px' }}>
                      {cert.icon}
                    </div>
                    <span className="project-category-badge">{cert.badge}</span>
                  </div>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>{cert.date}</span>
                </div>

                {/* Certificate Image Thumbnail Preview */}
                <div 
                  onClick={() => setSelectedCert(cert)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '180px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-secondary)',
                    marginBottom: '16px',
                    cursor: 'pointer'
                  }}
                  className="cert-thumbnail-box"
                >
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      transition: 'transform 0.3s ease'
                    }} 
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0,0,0,0.4)',
                      opacity: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.86rem',
                      transition: 'opacity 0.25s ease',
                      backdropFilter: 'blur(2px)'
                    }}
                    className="cert-overlay"
                  >
                    <Eye size={18} />
                    <span>Click to View Full Certificate</span>
                  </div>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 800, marginBottom: '6px', lineHeight: 1.35 }}>
                  {cert.title}
                </h3>

                <div style={{ color: 'var(--accent-coral)', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px' }}>
                  Issued by: {cert.issuer}
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '16px' }}>
                  ID: {cert.credentialId}
                </div>

                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Certified Competencies
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                  {cert.topics.map((top, tIdx) => (
                    <div key={tIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={15} color="var(--accent-coral)" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.5 }}>{top}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ 
                paddingTop: '16px', 
                borderTop: '1px solid var(--border-color)', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                flexWrap: 'wrap', 
                gap: '10px' 
              }}>
                <button 
                  onClick={() => setSelectedCert(cert)}
                  className="btn-project-detail"
                  style={{ fontSize: '0.84rem' }}
                >
                  <Eye size={16} />
                  <span>PREVIEW CERTIFICATE</span>
                </button>

                <a 
                  href={cert.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary-link"
                  style={{ padding: '6px 14px', fontSize: '0.78rem' }}
                  download
                >
                  <Download size={13} />
                  <span>PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Certificate Preview Modal */}
      {selectedCert && (
        <CertificateModal 
          certificate={selectedCert} 
          onClose={() => setSelectedCert(null)} 
        />
      )}
    </section>
  );
};

export default Certifications;
