import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, Loader2, FileText, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/90dfaaf294f92b53c628c6f25720b994', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _replyto: formData.email.trim(),
          subject: formData.subject.trim() || 'Portfolio Contact Inquiry',
          _subject: formData.subject.trim() 
            ? `Portfolio Message: ${formData.subject.trim()} (from ${formData.name.trim()})` 
            : `Portfolio Inquiry from ${formData.name.trim()}`,
          message: formData.message.trim(),
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ee5d6c', '#0a0a0a', '#ffffff']
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Fallback needed');
      }
    } catch (err) {
      const subject = encodeURIComponent(formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`);
      const body = encodeURIComponent(`Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`);
      window.open(`mailto:ponduridanush@gmail.com?subject=${subject}&body=${body}`, '_blank');
      
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ee5d6c', '#ffffff']
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="studio-section">
      <div className="studio-container">
        
        <div className="section-eyebrow">GET IN TOUCH</div>
        <div className="section-heading-row">
          <h2 className="section-title">Let's Discuss Next-Gen AI</h2>
          <p className="section-desc">
            Available for full-time AI/ML roles, autonomous agent architecture projects, and high-impact engineering collaborations.
          </p>
        </div>

        <div className="contact-layout">
          
          {/* Direct Contact Info */}
          <div className="contact-info-block">
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '10px' }}>
              Whether you are looking to deploy autonomous multi-agent workflows, integrate production LLMs, or solve complex data analytics problems, I'm ready to collaborate.
            </p>

            <a href="mailto:ponduridanush@gmail.com" className="contact-info-card">
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.08em' }}>Direct Email</div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>ponduridanush@gmail.com</div>
              </div>
            </a>

            <a href="tel:+919030551889" className="contact-info-card">
              <div className="contact-icon-box">
                <Phone size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.08em' }}>Phone / WhatsApp</div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>+91 9030551889</div>
              </div>
            </a>

            <div className="contact-info-card" style={{ cursor: 'default' }}>
              <div className="contact-icon-box">
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.08em' }}>Location</div>
                <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>Chennai / Andhra Pradesh, India</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', marginTop: '10px' }}>
              <button className="btn-secondary-link" onClick={onOpenResume} style={{ flex: 1, justifyContent: 'center' }}>
                <FileText size={16} />
                <span>VIEW RESUME</span>
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-container">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--accent-coral-light)', color: 'var(--accent-coral)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '24px' }}>
                  Thank you for reaching out. I'll review your inquiry and get back to you promptly.
                </p>
                <button 
                  className="btn-secondary-link"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label">YOUR NAME *</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">YOUR EMAIL *</label>
                  <input 
                    type="email"
                    required
                    placeholder="alex@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">SUBJECT</label>
                  <input 
                    type="text"
                    placeholder="Job Opportunity / AI Project / Collaboration"
                    className="form-input"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">MESSAGE *</label>
                  <textarea 
                    required
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-coral-cta"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="spin-icon" />
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
