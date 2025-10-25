import React, { useState } from 'react';
import { X, Briefcase, Calendar, MapPin, Code2 } from 'lucide-react';
import { experienceData } from '../data/mock';
import '../styles/cyber-theme.css';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section
      id="experience"
      style={{
        padding: '100px 0',
        background: 'var(--bg-secondary)'
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="display-md" style={{ marginBottom: '16px' }}>
            Experience
          </h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'var(--accent-primary)',
              margin: '0 auto 16px'
            }}
          />
          <p className="body-lg" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Professional & Virtual Experience Programs
          </p>
        </div>

        <div className="card-grid">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="feature-card"
              style={{
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onClick={() => setSelectedExp(exp)}
            >
              {/* Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: exp.type === 'professional' ? 'var(--accent-bg)' : 'rgba(127, 74, 142, 0.1)',
                  border: `1px solid ${exp.type === 'professional' ? 'var(--accent-primary)' : 'var(--accent-purple)'}`,
                  borderRadius: '20px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: exp.type === 'professional' ? 'var(--accent-primary)' : 'var(--accent-purple)',
                  marginBottom: '16px',
                  width: 'fit-content'
                }}
              >
                <Briefcase size={14} />
                {exp.type === 'professional' ? 'Professional' : 'Virtual Experience'}
              </div>

              <h3 className="h3" style={{ marginBottom: '8px' }}>{exp.role}</h3>
              <p className="body-md" style={{ marginBottom: '8px', fontWeight: '600', color: 'var(--accent-primary)' }}>
                {exp.company}
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: 'var(--text-muted)' }}>
                  <Calendar size={16} />
                  {exp.period}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: 'var(--text-muted)' }}>
                  <MapPin size={16} />
                  {exp.location}
                </span>
              </div>

              <p className="body-md" style={{ marginBottom: '16px', flex: 1 }}>
                {exp.summary}
              </p>

              <div
                style={{
                  padding: '12px 20px',
                  background: 'var(--accent-bg)',
                  borderRadius: '8px',
                  color: 'var(--accent-primary)',
                  fontWeight: '600',
                  textAlign: 'center',
                  fontSize: '14px'
                }}
              >
                Click for Details →
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedExp && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.9)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              backdropFilter: 'blur(5px)'
            }}
            onClick={() => setSelectedExp(null)}
          >
            <div
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px',
                padding: '48px',
                maxWidth: '800px',
                maxHeight: '90vh',
                overflow: 'auto',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedExp(null)}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'var(--bg-tertiary)',
                  border: 'none',
                  borderRadius: '8px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-primary)';
                  e.currentTarget.style.color = 'var(--bg-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-tertiary)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
              >
                <X size={24} />
              </button>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: selectedExp.type === 'professional' ? 'var(--accent-bg)' : 'rgba(127, 74, 142, 0.1)',
                  border: `1px solid ${selectedExp.type === 'professional' ? 'var(--accent-primary)' : 'var(--accent-purple)'}`,
                  borderRadius: '20px',
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: selectedExp.type === 'professional' ? 'var(--accent-primary)' : 'var(--accent-purple)',
                  marginBottom: '24px'
                }}
              >
                <Briefcase size={16} />
                {selectedExp.type === 'professional' ? 'Professional Experience' : 'Virtual Experience Program'}
              </div>

              <h2 className="h1" style={{ marginBottom: '12px' }}>{selectedExp.role}</h2>
              <p className="h3" style={{ marginBottom: '24px', color: 'var(--accent-primary)' }}>
                {selectedExp.company} • {selectedExp.project}
              </p>

              <div style={{ display: 'flex', gap: '24px', marginBottom: '32px', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                  <Calendar size={18} />
                  {selectedExp.period}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                  <MapPin size={18} />
                  {selectedExp.location}
                </span>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 className="h3" style={{ marginBottom: '16px' }}>Key Responsibilities & Achievements</h3>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {selectedExp.details.map((detail, index) => (
                    <li key={index} className="body-md" style={{ lineHeight: 1.7 }}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="h3" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Code2 size={20} color="var(--accent-primary)" />
                  Tools & Technologies
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedExp.tools.map((tool, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '8px 16px',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        fontSize: '14px',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
