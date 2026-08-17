import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, BarChart2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Sun Square Technologies Pvt. Ltd.',
      role: 'Data Analytics Intern',
      period: 'June 2026 – July 2026',
      location: 'Nellore, India',
      type: 'Academic Internship',
      description: 'Gained intensive hands-on exposure to data analysis, machine learning algorithms, dataset preprocessing, and predictive modeling during an academic internship in Data Analytics.',
      highlights: [
        'Applied Python, data preprocessing, and machine learning techniques to analyze movie datasets and generate personalized recommendation engines.',
        'Executed exploratory data analysis (EDA) and data visualization techniques to derive meaningful insights from raw data.',
        'Gained end-to-end practical exposure to real-world data analytics pipelines, model evaluation, and analytical problem-solving.'
      ],
      skills: ['Python', 'Data Analytics', 'Machine Learning', 'Data Preprocessing', 'Movie Recommendation ML', 'Data Visualization']
    }
  ];

  return (
    <section id="experience" style={{ padding: '60px 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="section-header">
        <div className="section-tag">Career Journey</div>
        <h2 className="section-title">Professional Experience</h2>
      </div>

      <div style={{ position: 'relative', paddingLeft: '24px' }}>
        {/* Timeline bar */}
        <div style={{ 
          position: 'absolute', 
          left: '0', 
          top: '12px', 
          bottom: '12px', 
          width: '2px', 
          background: 'linear-gradient(to bottom, #ff1a40, rgba(255,26,64,0.1))' 
        }} />

        {experiences.map((exp, idx) => (
          <div key={idx} style={{ position: 'relative', marginBottom: '30px' }}>
            {/* Timeline Glowing Node */}
            <div style={{
              position: 'absolute',
              left: '-31px',
              top: '6px',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: '#ff1a40',
              boxShadow: '0 0 15px rgba(255,26,64,0.8)',
              border: '3px solid #0b0f1b'
            }} />

            <div className="glass-card" style={{ padding: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                <div>
                  <span className="badge-tag" style={{ marginBottom: '8px' }}>{exp.type}</span>
                  <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                    {exp.role}
                  </h3>
                  <div style={{ fontSize: '1.1rem', color: '#ff1a40', fontWeight: 600, marginTop: '4px' }}>
                    {exp.company}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                  <span style={{ color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={15} color="#ff1a40" />
                    {exp.period}
                  </span>
                  <span style={{ color: '#64748b', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {exp.description}
              </p>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px' }}>
                  Key Contributions & Outcomes
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} color="#ff1a40" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.skills.map((s, sIdx) => (
                  <span key={sIdx} style={{ background: 'rgba(255, 26, 64, 0.08)', border: '1px solid rgba(255, 26, 64, 0.2)', color: '#ff5271', fontSize: '0.8rem', padding: '4px 12px', borderRadius: '12px' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
