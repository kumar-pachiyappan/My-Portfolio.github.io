import React, { useState } from 'react';
import { Save, Upload, X } from 'lucide-react';
import { profileData, aboutData } from '../../data/mock';

const ProfileEditor = () => {
  const [profile, setProfile] = useState(profileData);
  const [about, setAbout] = useState(aboutData);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // TODO: Save to Firebase
    console.log('Saving profile:', profile, about);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
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
          ✅ Profile saved successfully!
        </div>
      )}

      <div className="feature-card" style={{ marginBottom: '24px' }}>
        <h3 className="h2" style={{ marginBottom: '24px' }}>Basic Information</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
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
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Title</label>
            <input
              type="text"
              value={profile.title}
              onChange={(e) => setProfile({ ...profile, title: e.target.value })}
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
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
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
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Contact</label>
            <input
              type="text"
              value={profile.contact}
              onChange={(e) => setProfile({ ...profile, contact: e.target.value })}
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

        <div style={{ marginTop: '20px' }}>
          <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Tagline</label>
          <input
            type="text"
            value={profile.tagline}
            onChange={(e) => setProfile({ ...profile, tagline: e.target.value })}
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

        <div style={{ marginTop: '20px' }}>
          <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Profile Image</label>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <img
              src={profile.profileImage}
              alt="Profile"
              style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <button className="btn-secondary" style={{ gap: '8px' }}>
              <Upload size={18} />
              Upload New Image
            </button>
          </div>
        </div>
      </div>

      <div className="feature-card" style={{ marginBottom: '24px' }}>
        <h3 className="h2" style={{ marginBottom: '24px' }}>About Section</h3>
        
        <div style={{ marginBottom: '20px' }}>
          <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Summary</label>
          <textarea
            value={about.summary}
            onChange={(e) => setAbout({ ...about, summary: e.target.value })}
            rows="4"
            style={{
              width: '100%',
              padding: '12px 16px',
              background: 'var(--bg-tertiary)',
              border: '2px solid var(--border-primary)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontSize: '16px',
              outline: 'none',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
          />
        </div>

        <div>
          <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Full Bio</label>
          <textarea
            value={about.fullBio}
            onChange={(e) => setAbout({ ...about, fullBio: e.target.value })}
            rows="8"
            style={{
              width: '100%',
              padding: '12px 16px',
              background: 'var(--bg-tertiary)',
              border: '2px solid var(--border-primary)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontSize: '16px',
              outline: 'none',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
          />
        </div>
      </div>

      <button
        onClick={handleSave}
        className="btn-primary"
        style={{ width: '100%' }}
      >
        <Save size={20} />
        Save Changes
      </button>
    </div>
  );
};

export default ProfileEditor;