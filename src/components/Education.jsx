import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle } from 'lucide-react';

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
    <section id="education" style={{ padding: '60px 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="section-header">
        <div className="section-tag">Academic Background</div>
        <h2 className="section-title">Education & Foundation</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {educationData.map((edu, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ background: 'rgba(255,26,64,0.12)', padding: '10px', borderRadius: '12px' }}>
                  <GraduationCap size={24} color="#ff1a40" />
                </div>
                <span className="badge-tag">{edu.score}</span>
              </div>

              <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={14} />
                {edu.status}
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 800, marginBottom: '6px', fontFamily: 'var(--font-heading)' }}>
                {edu.institution}
              </h3>

              <div style={{ fontSize: '0.98rem', color: '#ff1a40', fontWeight: 600, marginBottom: '12px' }}>
                {edu.degree}
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 500, marginBottom: '12px' }}>
                <strong>Field:</strong> {edu.specialization}
              </p>

              <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.6 }}>
                {edu.highlights}
              </p>
            </div>

            <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid var(--border-color)', fontSize: '0.82rem', color: '#64748b' }}>
              📍 {edu.location}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
