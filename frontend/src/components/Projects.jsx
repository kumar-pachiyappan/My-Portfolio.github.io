import React, { useState } from 'react';
import { X, Github, ExternalLink, Code2, Target } from 'lucide-react';
import { projectsData } from '../data/mock';
import '../styles/cyber-theme.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      style={{
        padding: '100px 0',
        background: 'var(--bg-secondary)'
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="display-md" style={{ marginBottom: '16px' }}>
            Projects
          </h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'var(--accent-primary)',
              margin: '0 auto 16px'
            }}
          />
          <p className="body-lg">Academic & security research projects showcasing hands-on expertise</p>
        </div>

        <div className="card-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="feature-card"
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
              onClick={() => setSelectedProject(project)}
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
                  src={project.image}
                  alt={project.title}
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
                {project.category}
              </div>

              <h3 className="h3" style={{ marginBottom: '12px', flex: 1 }}>{project.title}</h3>
              <p className="body-md" style={{ marginBottom: '16px' }}>
                {project.description}
              </p>

              <div
                style={{
                  padding: '12px 20px',
                  background: 'var(--accent-bg)',
                  borderRadius: '8px',
                  color: 'var(--accent-primary)',
                  fontWeight: '600',
                  textAlign: 'center',
                  fontSize: '14px'
                }}
              >
                View Details →
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
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
            onClick={() => setSelectedProject(null)}
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
                onClick={() => setSelectedProject(null)}
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
                src={selectedProject.image}
                alt={selectedProject.title}
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
                {selectedProject.category}
              </div>

              <h2 className="h1" style={{ marginBottom: '24px' }}>{selectedProject.title}</h2>
              <p className="body-lg" style={{ marginBottom: '32px' }}>{selectedProject.description}</p>

              <div style={{ marginBottom: '32px' }}>
                <h3 className="h3" style={{ marginBottom: '16px' }}>Key Features & Implementation</h3>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {selectedProject.details.map((detail, index) => (
                    <li key={index} className="body-md" style={{ lineHeight: 1.7 }}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 className="h3" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Code2 size={20} color="var(--accent-primary)" />
                  Tools & Technologies
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedProject.tools.map((tool, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '8px 16px',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        fontSize: '14px',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 className="h3" style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Target size={20} color="var(--accent-primary)" />
                  Outcomes
                </h3>
                <p className="body-lg" style={{ padding: '16px', background: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                  {selectedProject.outcomes}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Github size={20} />
                  View on GitHub
                </a>
                {selectedProject.demoUrl !== '#' && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
