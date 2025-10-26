import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LogOut,
  FileText,
  Briefcase,
  Award,
  BookOpen,
  TrendingUp,
  MessageSquare,
  User,
  Code2,
  ArrowLeft
} from 'lucide-react';
import ProfileEditor from '../components/admin/ProfileEditor';
import ExperienceEditor from '../components/admin/ExperienceEditor';
import CertificationsEditor from '../components/admin/CertificationsEditor';
import ProjectsEditor from '../components/admin/ProjectsEditor';
import UpskillEditor from '../components/admin/UpskillEditor';
import BlogEditor from '../components/admin/BlogEditor';
import '../styles/cyber-theme.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);

  const handleLogout = () => {
    navigate('/');
  };

  const sections = [
    { id: 'profile', icon: User, title: 'Profile & About', description: 'Edit personal information and bio', color: 'var(--accent-primary)', component: ProfileEditor },
    { id: 'experience', icon: Briefcase, title: 'Experience', description: 'Manage work experience entries', color: 'var(--accent-purple)', component: ExperienceEditor },
    { id: 'certifications', icon: Award, title: 'Certifications', description: 'Upload and manage certificates', color: 'var(--accent-primary)', component: CertificationsEditor },
    { id: 'projects', icon: Code2, title: 'Projects', description: 'Add or edit project details', color: 'var(--accent-purple)', component: ProjectsEditor },
    { id: 'upskill', icon: TrendingUp, title: 'Upskill Progress', description: 'Update learning progress', color: 'var(--accent-primary)', component: UpskillEditor },
    { id: 'blog', icon: MessageSquare, title: 'Blog Posts', description: 'Create and manage blog content', color: 'var(--accent-purple)', component: BlogEditor },
  ];

  const ActiveComponent = activeSection ? sections.find(s => s.id === activeSection)?.component : null;

  return (
    <div className="cyber-bg" style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '40px' }}>
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
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {activeSection && (
              <button
                onClick={() => setActiveSection(null)}
                className="btn-ghost"
                style={{ padding: '8px' }}
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <h1 className="h1">{activeSection ? sections.find(s => s.id === activeSection)?.title : 'Admin Dashboard'}</h1>
          </div>
          <button
            onClick={handleLogout}
            className="btn-secondary"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>

      <div className="container">
        {!activeSection ? (
          <>
            <div style={{ marginBottom: '40px' }}>
              <p className="body-lg" style={{ marginBottom: '8px' }}>Welcome back, Kumar!</p>
              <p className="body-md" style={{ color: 'var(--text-muted)' }}>Manage your portfolio content from here</p>
            </div>

            {/* Dashboard Cards */}
            <div className="card-grid">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="feature-card"
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                  onClick={() => setActiveSection(section.id)}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '12px',
                      background: `${section.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}
                  >
                    <section.icon size={28} color={section.color} />
                  </div>
                  <h3 className="h3" style={{ marginBottom: '8px' }}>{section.title}</h3>
                  <p className="body-md" style={{ marginBottom: '20px', flex: 1 }}>{section.description}</p>
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
          </>
        ) : (
          <div style={{ marginTop: '40px' }}>
            {ActiveComponent && <ActiveComponent />}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;