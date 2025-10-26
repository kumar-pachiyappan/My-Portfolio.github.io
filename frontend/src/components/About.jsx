import React, { useState } from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import { aboutData } from '../data/mock';
import Modal from './Modal';
import '../styles/cyber-theme.css';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="about"
      style={{
        padding: '100px 0',
        background: 'var(--bg-primary)'
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="display-md" style={{ marginBottom: '16px' }}>
            About Me
          </h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'var(--accent-primary)',
              margin: '0 auto'
            }}
          />
        </div>

        <div
          className="feature-card"
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <p className="body-lg" style={{ marginBottom: '32px', lineHeight: 1.8 }}>
            {aboutData.summary}
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="btn-primary"
          >
            <BookOpen size={20} />
            Read More
          </button>
        </div>

        {/* Animated Modal */}
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <h2 className="h1" style={{ marginBottom: '24px' }}>About Kumar Pachiyappan</h2>
          
          <p className="body-lg" style={{ marginBottom: '32px', whiteSpace: 'pre-line', lineHeight: 1.8 }}>
            {aboutData.fullBio}
          </p>

          <div style={{ marginTop: '48px' }}>
            <h3 className="h2" style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <GraduationCap size={28} color="var(--accent-primary)" />
              Education
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {aboutData.education.map((edu, index) => (
                <div
                  key={index}
                  style={{
                    padding: '24px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <h4 className="h3" style={{ marginBottom: '8px', color: 'var(--accent-primary)' }}>
                    {edu.degree}
                  </h4>
                  <p className="body-md" style={{ marginBottom: '4px', fontWeight: '500' }}>
                    {edu.institution}
                  </p>
                  <p className="body-md" style={{ marginBottom: '12px', color: 'var(--text-muted)' }}>
                    {edu.period}
                  </p>
                  <p className="body-md" style={{ lineHeight: 1.6 }}>
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default About;
