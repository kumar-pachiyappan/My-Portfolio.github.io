import React, { useEffect, useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import '../styles/cyber-theme.css';

const Welcome = () => {
  const [show, setShow] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem('hasVisited');
    if (!visited) {
      setTimeout(() => setShow(true), 800);
    } else {
      setHasVisited(true);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem('hasVisited', 'true');
    setTimeout(() => setHasVisited(true), 500);
  };

  if (hasVisited && !show) return null;

  return (
    <>
      {/* Backdrop with fade animation */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          zIndex: 9999,
          display: show ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(5px)',
          padding: '24px',
          animation: show ? 'fadeIn 0.5s ease-out' : 'fadeOut 0.5s ease-out',
          opacity: show ? 1 : 0
        }}
        onClick={handleClose}
      >
        {/* Welcome Card with scale + fade animation */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '2px solid var(--accent-primary)',
            borderRadius: '20px',
            padding: '48px',
            maxWidth: '600px',
            width: '100%',
            position: 'relative',
            textAlign: 'center',
            animation: show ? 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'scaleOut 0.3s ease-in',
            boxShadow: '0 0 50px rgba(218, 255, 1, 0.3)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
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
              transition: 'all 0.2s ease'
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

          {/* Icon */}
          <div
            style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 24px',
              borderRadius: '20px',
              background: 'var(--accent-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'pulse 2s ease-in-out infinite'
            }}
          >
            <Sparkles size={40} color="var(--accent-primary)" />
          </div>

          {/* Welcome Text */}
          <h2
            className="display-md"
            style={{
              marginBottom: '16px',
              background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--accent-primary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Welcome! 👋
          </h2>

          <p className="body-lg" style={{ marginBottom: '24px', lineHeight: 1.8 }}>
            I'm <strong style={{ color: 'var(--accent-primary)' }}>Kumar Pachiyappan</strong>, a Cybersecurity Professional with a passion for securing digital infrastructures.
          </p>

          <p className="body-md" style={{ marginBottom: '32px', color: 'var(--text-muted)' }}>
            Explore my journey through 2.8 years of network engineering at TCS, academic cybersecurity projects, and ongoing certifications. From FTTP network design to penetration testing, incident response, and emerging AI security tools.
          </p>

          {/* Highlights */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}
          >
            <div
              style={{
                padding: '16px',
                background: 'var(--bg-tertiary)',
                borderRadius: '12px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div className="h2" style={{ color: 'var(--accent-primary)', marginBottom: '4px' }}>2.8+</div>
              <div className="body-md" style={{ fontSize: '14px' }}>Years Experience</div>
            </div>
            <div
              style={{
                padding: '16px',
                background: 'var(--bg-tertiary)',
                borderRadius: '12px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div className="h2" style={{ color: 'var(--accent-primary)', marginBottom: '4px' }}>10+</div>
              <div className="body-md" style={{ fontSize: '14px' }}>Projects</div>
            </div>
            <div
              style={{
                padding: '16px',
                background: 'var(--bg-tertiary)',
                borderRadius: '12px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div className="h2" style={{ color: 'var(--accent-primary)', marginBottom: '4px' }}>MSc</div>
              <div className="body-md" style={{ fontSize: '14px' }}>Cybersecurity</div>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="btn-primary"
            style={{ width: '100%' }}
          >
            Explore Portfolio
          </button>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes scaleOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.9);
          }
        }
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(218, 255, 1, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(218, 255, 1, 0.6);
          }
        }
        @media (max-width: 768px) {
          .display-md { font-size: 32px !important; }
        }
      `}</style>
    </>
  );
};

export default Welcome;