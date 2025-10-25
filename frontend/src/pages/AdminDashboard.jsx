import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Upload, FileText, Award, Briefcase, BookOpen, TrendingUp } from 'lucide-react';
import '../styles/cyber-theme.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const dashboardCards = [
    { icon: FileText, title: 'Profile & About', description: 'Edit personal information and bio', color: 'var(--accent-primary)' },
    { icon: Briefcase, title: 'Experience', description: 'Manage work experience entries', color: 'var(--accent-purple)' },
    { icon: Award, title: 'Certifications', description: 'Upload and manage certificates', color: 'var(--accent-primary)' },
    { icon: BookOpen, title: 'Projects', description: 'Add or edit project details', color: 'var(--accent-purple)' },
    { icon: TrendingUp, title: 'Upskill Progress', description: 'Update learning progress', color: 'var(--accent-primary)' },
    { icon: Upload, title: 'Blog Posts', description: 'Create and manage blog content', color: 'var(--accent-purple)' },
  ];

  return (
    <div className="cyber-bg" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      {/* Header */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: 'rgba(26, 28, 30, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '20px 0',
          zIndex: 1000
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 className="h1">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="btn-secondary"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '80px' }}>
        <div style={{ marginBottom: '40px' }}>
          <p className="body-lg" style={{ marginBottom: '8px' }}>Welcome back, Kumar!</p>
          <p className="body-md" style={{ color: 'var(--text-muted)' }}>Manage your portfolio content from here</p>
        </div>

        {/* Dashboard Cards */}
        <div className="card-grid">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="feature-card"
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: `${card.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                <card.icon size={28} color={card.color} />
              </div>
              <h3 className="h3" style={{ marginBottom: '8px' }}>{card.title}</h3>
              <p className="body-md" style={{ marginBottom: '20px', flex: 1 }}>{card.description}</p>
              <div
                style={{
                  padding: '10px 20px',
                  background: 'var(--accent-bg)',
                  borderRadius: '8px',
                  color: 'var(--accent-primary)',
                  fontWeight: '600',
                  fontSize: '14px'
                }}
              >
                Manage →
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder Note */}
        <div
          className="feature-card"
          style={{
            marginTop: '48px',
            textAlign: 'center',
            padding: '48px'
          }}
        >
          <Upload size={48} color="var(--accent-primary)" style={{ marginBottom: '16px' }} />
          <h3 className="h2" style={{ marginBottom: '12px' }}>Full Admin Functionality Coming Soon</h3>
          <p className="body-lg" style={{ color: 'var(--text-muted)' }}>
            Firebase integration will enable complete CRUD operations for all portfolio sections.
            Image uploads, content management, and real-time updates will be available shortly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
