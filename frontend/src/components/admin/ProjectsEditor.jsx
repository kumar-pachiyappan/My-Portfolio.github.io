import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Save, X, Upload, Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../../data/mock';
import Modal from '../Modal';

const ProjectsEditor = () => {
  const [projects, setProjects] = useState(projectsData);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [previewImage, setPreviewImage] = useState(null);

  const handleEdit = (project) => {
    setFormData(project);
    setEditingId(project.id);
    setPreviewImage(project.image);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const filtered = projects.filter(p => p.id !== id);
      setProjects(filtered);
      localStorage.setItem('portfolioProjects', JSON.stringify(filtered));
    }
  };

  const handleSave = () => {
    if (editingId) {
      const updated = projects.map(p => p.id === editingId ? { ...formData, image: previewImage } : p);
      setProjects(updated);
      localStorage.setItem('portfolioProjects', JSON.stringify(updated));
    } else {
      const newProject = [...projects, { ...formData, id: Date.now(), image: previewImage }];
      setProjects(newProject);
      localStorage.setItem('portfolioProjects', JSON.stringify(newProject));
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
      title: '',
      category: '',
      description: '',
      image: '',
      details: [''],
      tools: [''],
      outcomes: '',
      githubUrl: '',
      demoUrl: ''
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

  const handleArrayChange = (field, index, value) => {
    const newArray = [...(formData[field] || [])];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const addArrayItem = (field) => {
    setFormData({ ...formData, [field]: [...(formData[field] || []), ''] });
  };

  const removeArrayItem = (field, index) => {
    const newArray = (formData[field] || []).filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: newArray });
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <button
        onClick={handleAddNew}
        className="btn-primary"
        style={{ marginBottom: '24px' }}
      >
        <Plus size={20} />
        Add New Project
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {projects.map((project) => (
          <div key={project.id} className="feature-card">
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div
                style={{
                  width: '200px',
                  height: '130px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'var(--bg-tertiary)',
                  flexShrink: 0
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ flex: 1, minWidth: '250px' }}>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    background: 'var(--accent-bg)',
                    border: '1px solid var(--accent-primary)',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--accent-primary)',
                    marginBottom: '10px'
                  }}
                >
                  {project.category}
                </div>
                <h3 className="h3" style={{ marginBottom: '8px' }}>{project.title}</h3>
                <p className="body-md" style={{ marginBottom: '12px' }}>{project.description}</p>
                
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => handleEdit(project)}
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
                      fontSize: '13px'
                    }}
                  >
                    <Edit2 size={14} /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
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
                      fontSize: '13px'
                    }}
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit/Add Modal */}
      <Modal isOpen={showForm} onClose={handleClose} maxWidth="800px">
        <h3 className="h2" style={{ marginBottom: '24px' }}>
          {editingId ? 'Edit Project' : 'Add New Project'}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxHeight: '70vh', overflowY: 'auto', paddingRight: '10px' }}>
          {/* Image Upload */}
          <div>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Project Image</label>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  style={{ width: '160px', height: '100px', borderRadius: '8px', objectFit: 'cover' }}
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

          <div>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Project Title</label>
            <input
              type="text"
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., AutoReconX - Reconnaissance Framework"
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
                placeholder="e.g., Security Automation"
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
              <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>GitHub URL</label>
              <input
                type="url"
                value={formData.githubUrl || ''}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                placeholder="https://github.com/..."
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
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Description</label>
            <textarea
              value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows="2"
              placeholder="Brief description of the project"
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
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Outcomes</label>
            <textarea
              value={formData.outcomes || ''}
              onChange={(e) => setFormData({ ...formData, outcomes: e.target.value })}
              rows="2"
              placeholder="Project outcomes and results"
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

          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            <button
              onClick={handleSave}
              className="btn-primary"
              style={{ flex: 1 }}
            >
              <Save size={18} />
              Save Project
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

export default ProjectsEditor;