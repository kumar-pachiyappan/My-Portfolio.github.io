import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Save, X, Upload } from 'lucide-react';
import { blogData } from '../../data/mock';
import Modal from '../Modal';

const BlogEditor = () => {
  const [blogs, setBlogs] = useState(blogData);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [previewImage, setPreviewImage] = useState(null);

  const handleEdit = (blog) => {
    setFormData(blog);
    setEditingId(blog.id);
    setPreviewImage(blog.image);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      const filtered = blogs.filter(b => b.id !== id);
      setBlogs(filtered);
      localStorage.setItem('portfolioBlogs', JSON.stringify(filtered));
    }
  };

  const handleSave = () => {
    if (editingId) {
      const updated = blogs.map(b => b.id === editingId ? { ...formData, image: previewImage } : b);
      setBlogs(updated);
      localStorage.setItem('portfolioBlogs', JSON.stringify(updated));
    } else {
      const newBlog = [...blogs, { ...formData, id: Date.now(), image: previewImage }];
      setBlogs(newBlog);
      localStorage.setItem('portfolioBlogs', JSON.stringify(newBlog));
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
      excerpt: '',
      author: 'Kumar Pachiyappan',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: '5 min read',
      category: '',
      image: '',
      content: ''
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
        Create New Blog Post
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {blogs.map((blog) => (
          <div key={blog.id} className="feature-card">
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <div
                style={{
                  width: '220px',
                  height: '140px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'var(--bg-tertiary)',
                  flexShrink: 0
                }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ flex: 1, minWidth: '280px' }}>
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
                  {blog.category}
                </div>
                <h3 className="h3" style={{ marginBottom: '8px' }}>{blog.title}</h3>
                <p className="body-md" style={{ marginBottom: '12px', fontSize: '14px' }}>{blog.excerpt}</p>
                <p className="body-md" style={{ marginBottom: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
                  {blog.date} • {blog.readTime}
                </p>
                
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => handleEdit(blog)}
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
                    onClick={() => handleDelete(blog.id)}
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
      <Modal isOpen={showForm} onClose={handleClose} maxWidth="900px">
        <h3 className="h2" style={{ marginBottom: '24px' }}>
          {editingId ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxHeight: '70vh', overflowY: 'auto', paddingRight: '10px' }}>
          {/* Image Upload */}
          <div>
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Featured Image</label>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  style={{ width: '180px', height: '110px', borderRadius: '8px', objectFit: 'cover' }}
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
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Title</label>
            <input
              type="text"
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter blog post title"
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
                placeholder="e.g., Security Architecture"
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
              <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Read Time</label>
              <input
                type="text"
                value={formData.readTime || ''}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                placeholder="e.g., 5 min read"
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
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Excerpt</label>
            <textarea
              value={formData.excerpt || ''}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              rows="2"
              placeholder="Brief summary of the blog post"
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
            <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Content</label>
            <textarea
              value={formData.content || ''}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows="10"
              placeholder="Full blog content (Markdown supported)"
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
              {editingId ? 'Update Post' : 'Publish Post'}
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

export default BlogEditor;