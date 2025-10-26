import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/mock';
import '../styles/cyber-theme.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save to localStorage
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    const newMessage = {
      id: Date.now(),
      ...formData,
      timestamp: new Date().toISOString()
    };
    messages.push(newMessage);
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    
    // Show success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      style={{
        padding: '100px 0',
        background: 'var(--bg-primary)'
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="display-md" style={{ marginBottom: '16px' }}>
            Get In Touch
          </h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'var(--accent-primary)',
              margin: '0 auto 16px'
            }}
          />
          <p className="body-lg">Let's discuss cybersecurity opportunities and collaborations</p>
        </div>

        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          {/* Contact Form */}
          <div className="feature-card">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '24px'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--accent-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Mail size={24} color="var(--accent-primary)" />
              </div>
              <h3 className="h2">Send a Message</h3>
            </div>

            {submitted ? (
              <div
                style={{
                  padding: '48px',
                  textAlign: 'center',
                  background: 'var(--accent-bg)',
                  borderRadius: '12px',
                  border: '1px solid var(--accent-primary)'
                }}
              >
                <CheckCircle2 size={48} color="var(--accent-primary)" style={{ marginBottom: '16px' }} />
                <h3 className="h3" style={{ marginBottom: '8px', color: 'var(--accent-primary)' }}>
                  Message Sent!
                </h3>
                <p className="body-md">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      background: 'var(--bg-tertiary)',
                      border: '2px solid var(--border-primary)',
                      borderRadius: '12px',
                      fontSize: '16px',
                      color: 'var(--text-primary)',
                      transition: 'all 0.2s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-primary)';
                      e.target.style.boxShadow = '0 0 0 4px rgba(218, 255, 1, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-primary)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      background: 'var(--bg-tertiary)',
                      border: '2px solid var(--border-primary)',
                      borderRadius: '12px',
                      fontSize: '16px',
                      color: 'var(--text-primary)',
                      transition: 'all 0.2s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-primary)';
                      e.target.style.boxShadow = '0 0 0 4px rgba(218, 255, 1, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-primary)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label
                    htmlFor="subject"
                    style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      background: 'var(--bg-tertiary)',
                      border: '2px solid var(--border-primary)',
                      borderRadius: '12px',
                      fontSize: '16px',
                      color: 'var(--text-primary)',
                      transition: 'all 0.2s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-primary)';
                      e.target.style.boxShadow = '0 0 0 4px rgba(218, 255, 1, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-primary)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      background: 'var(--bg-tertiary)',
                      border: '2px solid var(--border-primary)',
                      borderRadius: '12px',
                      fontSize: '16px',
                      color: 'var(--text-primary)',
                      transition: 'all 0.2s ease',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-primary)';
                      e.target.style.boxShadow = '0 0 0 4px rgba(218, 255, 1, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-primary)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  <Send size={20} />
                  Send Message
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
