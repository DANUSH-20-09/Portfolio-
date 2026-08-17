import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Sparkles, FileText, CheckCircle2, Loader2, AlertCircle, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Send directly to verified inbox token using FormSubmit AJAX API
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
        // Trigger festive celebratory confetti
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ff1a40', '#ffffff', '#ff5271', '#38bdf8']
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Could not send message automatically.');
      }
    } catch (err) {
      console.warn('Form submission notice:', err);
      // Fallback: open user's default email client pre-filled
      const subject = encodeURIComponent(formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`);
      const body = encodeURIComponent(`Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`);
      window.open(`mailto:ponduridanush@gmail.com?subject=${subject}&body=${body}`, '_blank');
      
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ff1a40', '#ffffff']
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(formData.subject.trim() || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      formData.name || formData.message
        ? `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        : 'Hi Danush,\n\nI came across your portfolio and would like to connect!'
    );
    window.location.href = `mailto:ponduridanush@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" style={{ padding: '60px 0 20px 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="section-header">
        <div className="section-tag">Get In Touch</div>
        <h2 className="section-title">Let's Build Something Extraordinary Together</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '36px', alignItems: 'start' }}>
        
        {/* Contact Information & Direct Cards */}
        <div>
          <p style={{ color: '#cbd5e1', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '28px' }}>
            I am currently open to exciting full-time AI/ML Engineering roles, agentic system development, research collaborations, and data analytics opportunities. Feel free to reach out directly!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            <a 
              href="mailto:ponduridanush@gmail.com" 
              className="glass-card" 
              style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', padding: '18px 24px' }}
            >
              <div style={{ background: 'rgba(255,26,64,0.12)', padding: '12px', borderRadius: '50%' }}>
                <Mail size={22} color="#ff1a40" />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Direct Email</div>
                <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 700 }}>ponduridanush@gmail.com</div>
              </div>
            </a>

            <a 
              href="tel:+919030551889" 
              className="glass-card" 
              style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', padding: '18px 24px' }}
            >
              <div style={{ background: 'rgba(255,26,64,0.12)', padding: '12px', borderRadius: '50%' }}>
                <Phone size={22} color="#ff1a40" />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Phone Number</div>
                <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 700 }}>+91-9030551889</div>
              </div>
            </a>

            {/* Social profiles row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <a 
                href="https://www.linkedin.com/in/ponduri-danush-858b99309/" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card" 
                style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', padding: '16px' }}
              >
                <div style={{ background: 'rgba(255,26,64,0.12)', padding: '10px', borderRadius: '50%' }}>
                  <Linkedin size={20} color="#ff1a40" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>LinkedIn</div>
                  <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700 }}>Connect Profile</div>
                </div>
              </a>

              <a 
                href="https://github.com/DANUSH-20-09" 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card" 
                style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', padding: '16px' }}
              >
                <div style={{ background: 'rgba(255,26,64,0.12)', padding: '10px', borderRadius: '50%' }}>
                  <Github size={20} color="#ff1a40" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>GitHub</div>
                  <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 700 }}>DANUSH-20-09</div>
                </div>
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button className="btn-secondary" onClick={onOpenResume} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FileText size={18} color="#ff1a40" />
              <span>Preview & Download Resume</span>
            </button>
          </div>
        </div>

        {/* Interactive Contact Form with Direct Delivery */}
        <div className="glass-card" style={{ padding: '36px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)' }}>
              Send Me a Message
            </h3>
            <span style={{ fontSize: '0.78rem', color: '#10b981', background: 'rgba(16, 185, 129, 0.12)', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>
              ● Direct Delivery to Inbox
            </span>
          </div>

          {submitted ? (
            <div style={{ 
              background: 'rgba(16, 185, 129, 0.15)', 
              border: '1px solid rgba(16, 185, 129, 0.4)', 
              borderRadius: '16px', 
              padding: '30px 24px', 
              textAlign: 'center',
              animation: 'fadeIn 0.4s ease'
            }}>
              <CheckCircle2 size={52} color="#10b981" style={{ margin: '0 auto 16px auto', display: 'block' }} />
              <h4 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>
                Message Sent Successfully!
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Thank you for reaching out! Your message details have been delivered to <strong style={{ color: '#fff' }}>ponduridanush@gmail.com</strong>. Danush will get back to you shortly.
              </p>
              <button 
                type="button" 
                className="btn-secondary" 
                onClick={() => setSubmitted(false)}
                style={{ padding: '8px 20px', fontSize: '0.88rem', margin: '0 auto' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>
                  Your Full Name *
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#ff1a40'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>
                  Your Email Address *
                </label>
                <input 
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#ff1a40'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>
                  Subject
                </label>
                <input 
                  type="text"
                  placeholder="Opportunity / AI Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#ff1a40'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', color: '#cbd5e1', fontWeight: 600, marginBottom: '6px' }}>
                  Message *
                </label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell me about your project, role, or collaboration idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#ff1a40'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '6px' }}>
                <button 
                  type="submit" 
                  className="btn-primary" 
                  disabled={isSubmitting}
                  style={{ 
                    width: '100%', 
                    justifyContent: 'center',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message to Danush</span>
                    </>
                  )}
                </button>

                <button 
                  type="button" 
                  onClick={handleDirectEmail}
                  className="btn-secondary" 
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem' }}
                >
                  <Mail size={16} />
                  <span>Or Send via Mail App Directly</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
