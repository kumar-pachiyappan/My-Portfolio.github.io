import React, { useState } from 'react';
import { Save, Linkedin, Github, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { profileData, skillsData } from '../../data/mock';

const ContactEditor = () => {
  const [contact, setContact] = useState({
    email: profileData.email,
    phone: profileData.contact,
    location: profileData.location,
    social: profileData.social
  });
  const [skills, setSkills] = useState(skillsData);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem('portfolioContact', JSON.stringify(contact));
    localStorage.setItem('portfolioSkills', JSON.stringify(skills));
    
    console.log('Saving contact info:', contact, skills);
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
            color: 'var(--accent-primary)',
            marginBottom: '24px',
            textAlign: 'center'
          }}
        >
          ✅ Contact information saved successfully!
        </div>
      )}

      <div className="feature-card" style={{ marginBottom: '24px' }}>
        <h3 className="h2" style={{ marginBottom: '24px' }}>Contact Information</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={18} color="var(--accent-primary)" />
              Email Address
            </label>
            <input
              type="email"
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--bg-tertiary)',
                border: '2px solid var(--border-primary)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontSize: '16px',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={18} color="var(--accent-primary)" />
              Phone Number
            </label>
            <input
              type="tel"
              value={contact.phone}
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--bg-tertiary)',
                border: '2px solid var(--border-primary)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontSize: '16px',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={18} color="var(--accent-primary)" />
              Location
            </label>
            <input
              type="text"
              value={contact.location}
              onChange={(e) => setContact({ ...contact, location: e.target.value })}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--bg-tertiary)',
                border: '2px solid var(--border-primary)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontSize: '16px',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </div>

      <div className="feature-card" style={{ marginBottom: '24px' }}>
        <h3 className="h2" style={{ marginBottom: '24px' }}>Social Media Links</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Linkedin size={18} color="var(--accent-primary)" />
              LinkedIn Profile
            </label>
            <input
              type="url"
              value={contact.social.linkedin}
              onChange={(e) => setContact({ ...contact, social: { ...contact.social, linkedin: e.target.value } })}
              placeholder="https://linkedin.com/in/username"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--bg-tertiary)',
                border: '2px solid var(--border-primary)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontSize: '16px',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Github size={18} color="var(--accent-primary)" />
              GitHub Profile
            </label>
            <input
              type="url"
              value={contact.social.github}
              onChange={(e) => setContact({ ...contact, social: { ...contact.social, github: e.target.value } })}
              placeholder="https://github.com/username"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--bg-tertiary)',
                border: '2px solid var(--border-primary)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontSize: '16px',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Twitter size={18} color="var(--accent-primary)" />
              Twitter Profile
            </label>
            <input
              type="url"
              value={contact.social.twitter}
              onChange={(e) => setContact({ ...contact, social: { ...contact.social, twitter: e.target.value } })}
              placeholder="https://twitter.com/username"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--bg-tertiary)',
                border: '2px solid var(--border-primary)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontSize: '16px',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </div>

      <div className="feature-card" style={{ marginBottom: '24px' }}>
        <h3 className="h2" style={{ marginBottom: '24px' }}>Skills Management</h3>
        
        {Object.keys(skills).map((category) => (
          <div key={category} style={{ marginBottom: '24px' }}>
            <h4 className="h3" style={{ marginBottom: '16px', textTransform: 'capitalize' }}>{category} Skills</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {skills[category].map((skill, index) => (
                <div key={index} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(category, index, e.target.value)}
                    placeholder={`Enter ${category} skill`}
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      background: 'var(--bg-tertiary)',
                      border: '2px solid var(--border-primary)',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                  <button
                    onClick={() => removeSkill(category, index)}
                    style={{
                      padding: '10px 14px',
                      background: 'rgba(255, 0, 0, 0.1)',
                      border: '1px solid rgba(255, 0, 0, 0.3)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      color: '#ff6b6b',
                      fontSize: '14px'
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={() => addSkill(category)}
                style={{
                  padding: '10px 16px',
                  background: 'var(--accent-bg)',
                  border: '1px solid var(--accent-primary)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  color: 'var(--accent-primary)',
                  fontSize: '14px',
                  fontWeight: '600',
                  width: 'fit-content'
                }}
              >
                + Add {category} Skill
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        className="btn-primary"
        style={{ width: '100%' }}
      >
        <Save size={20} />
        Save Contact & Skills
      </button>
    </div>
  );
};

export default ContactEditor;
