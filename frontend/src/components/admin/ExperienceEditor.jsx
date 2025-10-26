import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { experienceData } from '../../data/mock';

const ExperienceEditor = () => {
  const [experiences, setExperiences] = useState(experienceData);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});

  const handleEdit = (exp) => {
    setFormData(exp);
    setEditingId(exp.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this experience?')) {
      const filtered = experiences.filter(e => e.id !== id);
      setExperiences(filtered);
      localStorage.setItem('portfolioExperiences', JSON.stringify(filtered));
    }
  };

  const handleSave = () => {
    if (editingId) {
      const updated = experiences.map(e => e.id === editingId ? formData : e);
      setExperiences(updated);
      localStorage.setItem('portfolioExperiences', JSON.stringify(updated));
    } else {
      const newExp = [...experiences, { ...formData, id: Date.now() }];
      setExperiences(newExp);
      localStorage.setItem('portfolioExperiences', JSON.stringify(newExp));
    }
    setShowForm(false);
    setEditingId(null);
    setFormData({});
  };

  const handleAddNew = () => {
    setFormData({
      type: 'professional',
      company: '',
      role: '',
      project: '',
      period: '',
      location: '',
      summary: '',
      details: [''],
      tools: ['']
    });
    setShowForm(true);
    setEditingId(null);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {!showForm ? (
        <>
          <button
            onClick={handleAddNew}
            className="btn-primary"
            style={{ marginBottom: '24px' }}
          >
            <Plus size={20} />
            Add New Experience
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {experiences.map((exp) => (
              <div key={exp.id} className="feature-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                  <div>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        background: exp.type === 'professional' ? 'var(--accent-bg)' : 'rgba(127, 74, 142, 0.1)',
                        border: `1px solid ${exp.type === 'professional' ? 'var(--accent-primary)' : 'var(--accent-purple)'}`,
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: exp.type === 'professional' ? 'var(--accent-primary)' : 'var(--accent-purple)',
                        marginBottom: '12px'
                      }}
                    >
                      {exp.type}
                    </span>
                    <h3 className="h3">{exp.role}</h3>
                    <p className="body-md" style={{ color: 'var(--accent-primary)' }}>{exp.company}</p>
                    <p className="body-md" style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{exp.period}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => handleEdit(exp)}
                      style={{
                        padding: '8px 12px',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Edit2 size={16} /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(exp.id)}
                      style={{
                        padding: '8px 12px',
                        background: 'rgba(255, 0, 0, 0.1)',
                        border: '1px solid rgba(255, 0, 0, 0.3)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        color: '#ff6b6b',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </div>
                <p className="body-md">{exp.summary}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="feature-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h3 className="h2">{editingId ? 'Edit Experience' : 'Add New Experience'}</h3>
            <button
              onClick={() => { setShowForm(false); setEditingId(null); setFormData({}); }}
              style={{
                background: 'var(--bg-tertiary)',
                border: 'none',
                borderRadius: '8px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-primary)'
              }}
            >
              <X size={24} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Type</label>
              <select
                value={formData.type || 'professional'}
                onChange={(e) => {
                  if (e.target.value === 'custom') {
                    const custom = prompt('Enter custom type:');
                    if (custom) {
                      setFormData({ ...formData, type: custom });
                    }
                  } else {
                    setFormData({ ...formData, type: e.target.value });
                  }
                }}
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
              >
                <option value="professional">Professional</option>
                <option value="virtual">Virtual Experience</option>
                <option value="custom">+ Add Custom...</option>
              </select>
              {formData.type && formData.type !== 'professional' && formData.type !== 'virtual' && (
                <p style={{ marginTop: '8px', fontSize: '13px', color: 'var(--accent-primary)' }}>
                  Custom: {formData.type}
                </p>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div>
                <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Company</label>
                <input
                  type="text"
                  value={formData.company || ''}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
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
                <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Role</label>
                <input
                  type="text"
                  value={formData.role || ''}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
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

            <div>
              <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Summary</label>
              <textarea
                value={formData.summary || ''}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                rows="3"
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

            <button
              onClick={handleSave}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              <Save size={20} />
              Save Experience
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceEditor;