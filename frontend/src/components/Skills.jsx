import React, { useState, useEffect } from 'react';
import { Code2, Network, Shield, Terminal } from 'lucide-react';
import { skillsData as defaultSkillsData } from '../data/mock';
import '../styles/cyber-theme.css';

const Skills = () => {
  const [skillsData, setSkillsData] = useState(defaultSkillsData);

  useEffect(() => {
    const savedSkills = localStorage.getItem('portfolioSkills');
    if (savedSkills) {
      setSkillsData(JSON.parse(savedSkills));
    }
  }, []);

  const skillCategories = [
    { key: 'cybersecurity', icon: Shield, title: 'Cybersecurity', color: 'var(--accent-primary)' },
    { key: 'networking', icon: Network, title: 'Networking', color: 'var(--accent-purple)' },
    { key: 'tools', icon: Code2, title: 'Tools & Technologies', color: 'var(--accent-primary)' },
    { key: 'programming', icon: Terminal, title: 'Programming', color: 'var(--accent-purple)' }
  ];

  return (
    <section
      id="skills"
      style={{
        padding: '100px 0',
        background: 'var(--bg-secondary)'
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="display-md" style={{ marginBottom: '16px' }}>
            Skills & Expertise
          </h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'var(--accent-primary)',
              margin: '0 auto 16px'
            }}
          />
          <p className="body-lg">Technical skills and domain expertise</p>
        </div>

        <div className="card-grid">
          {skillCategories.map((category, index) => (
            <div key={category.key} className="feature-card">
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: `${category.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <category.icon size={28} color={category.color} />
              </div>
              
              <h3 className="h3" style={{ marginBottom: '20px' }}>{category.title}</h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skillsData[category.key].map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '8px 16px',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = category.color + '15';
                      e.currentTarget.style.borderColor = category.color;
                      e.currentTarget.style.color = category.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--bg-tertiary)';
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
