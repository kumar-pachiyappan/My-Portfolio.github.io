import React, { useState } from 'react';
import { X, Calendar, Clock, User, Tag } from 'lucide-react';
import { blogData } from '../data/mock';
import '../styles/cyber-theme.css';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section
      id="blog"
      style={{
        padding: '100px 0',
        background: 'var(--bg-secondary)'
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="display-md" style={{ marginBottom: '16px' }}>
            Blog & Insights
          </h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'var(--accent-primary)',
              margin: '0 auto 16px'
            }}
          />
          <p className="body-lg">Thoughts on cybersecurity, networking, and technology</p>
        </div>

        <div className="card-grid">
          {blogData.map((post) => (
            <div
              key={post.id}
              className="feature-card"
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
              onClick={() => setSelectedPost(post)}
            >
              <div
                style={{
                  width: '100%',
                  height: '200px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  background: 'var(--bg-tertiary)'
                }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'var(--accent-bg)',
                  border: '1px solid var(--accent-primary)',
                  borderRadius: '20px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'var(--accent-primary)',
                  marginBottom: '12px',
                  width: 'fit-content'
                }}
              >
                <Tag size={14} />
                {post.category}
              </div>

              <h3 className="h3" style={{ marginBottom: '12px', flex: 1 }}>{post.title}</h3>
              <p className="body-md" style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>
                {post.excerpt}
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '14px',
                  color: 'var(--text-muted)'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={16} />
                  {post.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={16} />
                  {post.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPost && (
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
            onClick={() => setSelectedPost(null)}
          >
            <div
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px',
                padding: '48px',
                maxWidth: '900px',
                maxHeight: '90vh',
                overflow: 'auto',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPost(null)}
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
                  transition: 'all 0.2s ease',
                  zIndex: 10
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

              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  marginBottom: '24px'
                }}
              />

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'var(--accent-bg)',
                  border: '1px solid var(--accent-primary)',
                  borderRadius: '20px',
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--accent-primary)',
                  marginBottom: '16px'
                }}
              >
                <Tag size={14} />
                {selectedPost.category}
              </div>

              <h2 className="h1" style={{ marginBottom: '24px' }}>{selectedPost.title}</h2>

              <div
                style={{
                  display: 'flex',
                  gap: '24px',
                  marginBottom: '32px',
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  flexWrap: 'wrap'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <User size={16} />
                  {selectedPost.author}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={16} />
                  {selectedPost.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={16} />
                  {selectedPost.readTime}
                </span>
              </div>

              <div
                style={{
                  padding: '24px',
                  background: 'var(--bg-tertiary)',
                  borderRadius: '12px',
                  marginBottom: '24px'
                }}
              >
                <p className="body-lg" style={{ lineHeight: 1.8 }}>
                  {selectedPost.excerpt}
                </p>
              </div>

              <p className="body-lg" style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                {selectedPost.content}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
