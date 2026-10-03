import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: 'R.M.D. ENGINEERING COLLEGE',
      location: 'Chennai, Tamil Nadu',
      degree: 'Bachelor of Technology (B.Tech)',
      specialization: 'Artificial Intelligence and Machine Learning',
      status: 'Current Studying',
      score: 'CGPA: 7.1',
      highlights: 'Focus on Neural Networks, Multi-Agent Systems, Generative AI, Data Structures & Algorithms, Deep Learning, and Cloud Computing.'
    },
    {
      institution: 'VOWEL JUNIOR COLLEGE',
      location: 'India',
      degree: 'MPC Intermediate (Class XI - XII)',
      specialization: 'Mathematics, Physics, Chemistry',
      status: '2022 – 2024',
      score: 'Percentage: 81.6%',
      highlights: 'Strong foundation in Advanced Mathematics, Calculus, Analytical Reasoning, and Physical Sciences.'
    },
    {
      institution: 'VOWEL INDIA SCHOOL',
      location: 'India',
      degree: 'Secondary School Education (Class X)',
      specialization: 'General Sciences & Mathematics',
      status: '2022',
      score: 'Percentage: 75.67%',
      highlights: 'Academic excellence with focus on core science, mathematics, and logical reasoning fundamentals.'
    }
  ];

  return (
    <section id="education" className="studio-section">
      <div className="studio-container">
        
        <div className="section-eyebrow">ACADEMIC FOUNDATION</div>
        <div className="section-heading-row">
          <h2 className="section-title">Education & Qualifications</h2>
          <p className="section-desc">
            Strong formal education in Artificial Intelligence, Computer Science principles, and Advanced Mathematics.
          </p>
        </div>

        <div className="dual-section-grid">
          {educationData.map((edu, idx) => (
            <div key={idx} className="edu-cert-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <div className="highlight-icon" style={{ marginBottom: 0, width: '42px', height: '42px' }}>
                    <GraduationCap size={20} />
                  </div>
                  <span className="project-category-badge">{edu.score}</span>
                </div>

                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={14} color="var(--accent-coral)" />
                  {edu.status}
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 800, marginBottom: '6px' }}>
                  {edu.institution}
                </h3>

                <div style={{ fontSize: '0.98rem', color: 'var(--accent-coral)', fontWeight: 700, marginBottom: '10px' }}>
                  {edu.degree}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', fontWeight: 600, marginBottom: '12px' }}>
                  Field: {edu.specialization}
                </p>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {edu.highlights}
                </p>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-color)', fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={14} />
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
