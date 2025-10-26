import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { upskillData } from '../../data/mock';
import Modal from '../Modal';

const UpskillEditor = () => {
  const [upskills, setUpskills] = useState(upskillData);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this upskill item?')) {
      const filtered = upskills.filter(u => u.id !== id);
      setUpskills(filtered);
      localStorage.setItem('portfolioUpskills', JSON.stringify(filtered));
    }
  };

  const handleSave = () => {
    if (editingId) {
      const updated = upskills.map(u => u.id === editingId ? formData : u);
      setUpskills(updated);
      localStorage.setItem('portfolioUpskills', JSON.stringify(updated));
    } else {
      const newUpskill = [...upskills, { ...formData, id: Date.now() }];
      setUpskills(newUpskill);
      localStorage.setItem('portfolioUpskills', JSON.stringify(newUpskill));
    }
    handleClose();
  };

  const handleClose = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({});
  };

  const handleAddNew = () => {
    setFormData({
      title: '',
      category: '',
      status: 'Basic',
      description: '',
      estimatedCompletion: ''
    });
    setShowForm(true);
    setEditingId(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Basic':
        return 'var(--accent-primary)';
      case 'Intermediate':
        return 'var(--accent-purple)';
      case 'Expert':
        return 'rgb(34, 197, 94)'; // green
      default:
        return 'var(--text-secondary)';
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <button
        onClick={handleAddNew}
        className="btn-primary"
        style={{ marginBottom: '24px' }}
      >
        <Plus size={20} />
        Add New Upskill Item
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
        {upskills.map((item) => (
          <div key={item.id} className="feature-card" style={{ position: 'relative' }}>
            {/* Status Badge */}
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                right: '24px',
                padding: '6px 12px',
                background: 'var(--bg-secondary)',
                border: `2px solid ${getStatusColor(item.status)}`,
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600',
                color: getStatusColor(item.status)
              }}
            >
              {item.status}
            </div>

            <div
              style={{
                display: 'inline-block',
                padding: '6px 12px',
                background: 'var(--accent-bg)',
                border: '1px solid var(--accent-primary)',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: '600',
                color: 'var(--accent-primary)',
                marginBottom: '12px'
              }}
            >
              {item.category}
            </div>

            <h3 className="h3" style={{ marginBottom: '12px', fontSize: '18px' }}>{item.title}</h3>
            <p className="body-md" style={{ marginBottom: '20px', fontSize: '14px' }}>{item.description}</p>

            <p className="body-md" style={{ marginBottom: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
              Target: {item.estimatedCompletion}
            </p>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => handleEdit(item)}
                style={{
                  padding: '8px 14px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '13px',
                  flex: 1
                }}
              >
                <Edit2 size={14} /> Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                style={{
                  padding: '8px 14px',
                  background: 'rgba(255, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 0, 0, 0.3)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  color: '#ff6b6b',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '13px',
                  flex: 1
                }}
              >
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit/Add Modal */}
      <Modal isOpen={showForm} onClose={handleClose} maxWidth="700px">
        <h3 className="h2" style={{ marginBottom: '24px' }}>
          {editingId ? 'Edit Upskill Progress' : 'Add New Upskill Item'}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Title</label>
            <input
              type="text"
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., CompTIA Security+ (SY0-701)"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--bg-tertiary)',
                border: '2px solid var(--border-primary)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontSize: '15px',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Category</label>
              <input
                type="text"
                value={formData.category || ''}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g., Certification Prep"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--bg-tertiary)',
                  border: '2px solid var(--border-primary)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '15px',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Status</label>
              <select
                value={formData.status || 'Basic'}
                onChange={(e) => {
                  if (e.target.value === 'custom') {
                    const custom = prompt('Enter custom status level:');
                    if (custom) {
                      setFormData({ ...formData, status: custom });
                    }
                  } else {
                    setFormData({ ...formData, status: e.target.value });
                  }
                }}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--bg-tertiary)',
                  border: '2px solid var(--border-primary)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '15px',
                  outline: 'none'
                }}
              >
                <option value="Basic">Basic</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
                <option value="custom">+ Add Custom...</option>
              </select>
              {formData.status && !['Basic', 'Intermediate', 'Expert'].includes(formData.status) && (
                <p style={{ marginTop: '8px', fontSize: '13px', color: 'var(--accent-primary)' }}>
                  Custom: {formData.status}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Description</label>
            <textarea
              value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows="3"
              placeholder="Brief description of what you're learning"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--bg-tertiary)',
                border: '2px solid var(--border-primary)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontSize: '15px',
                outline: 'none',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>

          <div>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Target Date</label>
            <input
              type="text"
              value={formData.estimatedCompletion || ''}
              onChange={(e) => setFormData({ ...formData, estimatedCompletion: e.target.value })}
              placeholder="e.g., June 2025"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--bg-tertiary)',
                border: '2px solid var(--border-primary)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontSize: '15px',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <button
              onClick={handleSave}
              className="btn-primary"
              style={{ flex: 1 }}
            >
              <Save size={18} />
              Save Progress
            </button>
            <button
              onClick={handleClose}
              className="btn-secondary"
              style={{ flex: 1 }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UpskillEditor;