import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Save, X, Upload, ExternalLink } from 'lucide-react';
import { certificationsData } from '../../data/mock';
import Modal from '../Modal';

const CertificationsEditor = () => {
  const [certifications, setCertifications] = useState(certificationsData);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [previewImage, setPreviewImage] = useState(null);

  const handleEdit = (cert) => {
    setFormData(cert);
    setEditingId(cert.id);
    setPreviewImage(cert.image);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this certification?')) {
      setCertifications(certifications.filter(c => c.id !== id));
    }
  };

  const handleSave = () => {
    if (editingId) {
      setCertifications(certifications.map(c => c.id === editingId ? { ...formData, image: previewImage } : c));
    } else {
      setCertifications([...certifications, { ...formData, id: Date.now(), image: previewImage }]);
    }
    handleClose();
  };

  const handleClose = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({});
    setPreviewImage(null);
  };

  const handleAddNew = () => {
    setFormData({
      name: '',
      issuer: '',
      code: '',
      date: '',
      image: '',
      credentialUrl: ''
    });
    setShowForm(true);
    setEditingId(null);
    setPreviewImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
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
        Add New Certification
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {certifications.map((cert) => (
          <div key={cert.id} className="feature-card" style={{ padding: '20px' }}>
            <div
              style={{
                width: '100%',
                height: '180px',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '16px',
                background: 'var(--bg-tertiary)'
              }}
            >
              <img
                src={cert.image}
                alt={cert.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div
              style={{
                display: 'inline-block',
                padding: '4px 10px',
                background: 'var(--accent-bg)',
                border: '1px solid var(--accent-primary)',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: '600',
                color: 'var(--accent-primary)',
                marginBottom: '10px'
              }}
            >
              {cert.code}
            </div>

            <h4 className="h3" style={{ marginBottom: '8px', fontSize: '16px' }}>{cert.name}</h4>
            <p className="body-md" style={{ marginBottom: '4px', fontSize: '14px' }}>{cert.issuer}</p>
            <p className="body-md" style={{ marginBottom: '16px', color: 'var(--text-muted)', fontSize: '13px' }}>{cert.date}</p>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleEdit(cert)}
                style={{
                  padding: '8px 12px',
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
                onClick={() => handleDelete(cert.id)}
                style={{
                  padding: '8px 12px',
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
          {editingId ? 'Edit Certification' : 'Add New Certification'}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Image Upload */}
          <div>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Certificate Image</label>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  style={{ width: '120px', height: '80px', borderRadius: '8px', objectFit: 'cover' }}
                />
              )}
              <label
                style={{
                  padding: '12px 24px',
                  background: 'var(--bg-tertiary)',
                  border: '2px solid var(--border-primary)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px'
                }}
              >
                <Upload size={16} />
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div>
              <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Certificate Name</label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., CompTIA Security+"
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
              <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Issuer</label>
              <input
                type="text"
                value={formData.issuer || ''}
                onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
                placeholder="e.g., CompTIA"
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
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div>
              <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Code/ID</label>
              <input
                type="text"
                value={formData.code || ''}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                placeholder="e.g., SY0-701"
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
              <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Date</label>
              <input
                type="text"
                value={formData.date || ''}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                placeholder="e.g., 2024"
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
          </div>

          <div>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Credential URL</label>
            <input
              type="url"
              value={formData.credentialUrl || ''}
              onChange={(e) => setFormData({ ...formData, credentialUrl: e.target.value })}
              placeholder="https://..."
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
              Save Certification
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

export default CertificationsEditor;