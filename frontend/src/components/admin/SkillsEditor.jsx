import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2, Shield, Network, Code2, Terminal } from 'lucide-react';
import { skillsData } from '../../data/mock';
import useLocalStorage from '../../hooks/useLocalStorage';

const SkillsEditor = () => {
  const [skills, setSkills] = useLocalStorage('portfolioSkills', skillsData);
  const [saved, setSaved] = useState(false);

  const skillCategories = [
    { key: 'cybersecurity', icon: Shield, title: 'Cybersecurity', color: 'var(--accent-primary)' },
    { key: 'networking', icon: Network, title: 'Networking', color: 'var(--accent-purple)' },
    { key: 'tools', icon: Code2, title: 'Tools & Technologies', color: 'var(--accent-primary)' },
    { key: 'programming', icon: Terminal, title: 'Programming', color: 'var(--accent-purple)' }
  ];

  const handleSave = () => {
    setSkills(skills);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleSkillChange = (category, index, value) => {
    const newSkills = { ...skills };
    newSkills[category][index] = value;
    setSkills(newSkills);
  };

  const addSkill = (category) => {
    const newSkills = { ...skills };
    newSkills[category] = [...newSkills[category], ''];
    setSkills(newSkills);
  };

  const removeSkill = (category, index) => {
    const newSkills = { ...skills };
    newSkills[category] = newSkills[category].filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {saved && (
        <div
          style={{
            padding: '16px 24px',
            background: 'var(--accent-bg)',
            border: '1px solid var(--accent-primary)',
            borderRadius: '12px',
            marginBottom: '24px',
            color: 'var(--accent-primary)',
            fontWeight: '600',
            textAlign: 'center'
          }}
        >
          ✓ Skills saved successfully!
        </div>
      )}

      <div
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '24px'
        }}
      >
        <h2 className="h2" style={{ marginBottom: '32px' }}>Skills & Expertise</h2>

        {/* Skills Categories */}
        {skillCategories.map((category) => (
          <div
            key={category.key}
            style={{
              marginBottom: '40px',
              padding: '24px',
              background: 'var(--bg-tertiary)',
              borderRadius: '12px',
              border: `1px solid ${category.color}20`
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: `${category.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <category.icon size={20} color={category.color} />
              </div>
              <h3 className="h3">{category.title}</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {skills[category.key].map((skill, index) => (
                <div key={index} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(category.key, index, e.target.value)}
                    placeholder={`Enter ${category.title.toLowerCase()} skill`}
                    style={{
                      flex: 1,
                      padding: '12px 16px',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      fontSize: '16px'
                    }}
                  />
                  <button
                    onClick={() => removeSkill(category.key, index)}
                    style={{
                      padding: '12px',
                      background: 'transparent',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                      e.currentTarget.style.borderColor = 'rgb(239, 68, 68)';
                      e.currentTarget.style.color = 'rgb(239, 68, 68)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.color = 'var(--text-muted)';
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}

              <button
                onClick={() => addSkill(category.key)}
                style={{
                  padding: '12px 16px',
                  background: 'var(--bg-primary)',
                  border: `1px dashed ${category.color}`,
                  borderRadius: '8px',
                  color: category.color,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${category.color}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-primary)';
                }}
              >
                <Plus size={18} />
                Add {category.title} Skill
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="btn-primary"
        style={{
          width: '100%',
          padding: '16px',
          fontSize: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px'
        }}
      >
        <Save size={20} />
        Save Skills
      </button>
    </div>
  );
};

export default SkillsEditor;
