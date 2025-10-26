import React from 'react';

const ProjectsEditor = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div className="feature-card" style={{ textAlign: 'center', padding: '64px 32px' }}>
        <h3 className="h2" style={{ marginBottom: '16px' }}>Projects Editor</h3>
        <p className="body-lg" style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
          Add, edit, and manage your cybersecurity projects.
        </p>
        <p className="body-md" style={{ color: 'var(--text-muted)' }}>
          Full Firebase integration coming soon!
        </p>
      </div>
    </div>
  );
};

export default ProjectsEditor;