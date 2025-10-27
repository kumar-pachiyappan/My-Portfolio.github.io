import React from 'react';
import { Download, Linkedin, Github, Twitter, Shield } from 'lucide-react';
import { profileData } from '../data/mock';
import '../styles/cyber-theme.css';

const Hero = () => {
  return (
    <section
      id="home"
      className="cyber-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background Elements */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(218, 255, 1, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite'
        }}
      />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Welcome Banner */}
        <div
          className="animate-fade-in"
          style={{
            display: 'inline-block',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--accent-primary)',
            borderRadius: '16px',
            padding: '16px 32px',
            marginBottom: '32px',
            boxShadow: '0 0 30px rgba(218, 255, 1, 0.2)'
          }}
        >
          <p className="body-lg" style={{ color: 'var(--accent-primary)', fontWeight: '600', margin: 0 }}>
            👋 Welcome to my Website!
          </p>
        </div>

        {/* Profile Image with Glow */}
        <div
          style={{
            width: '220px',
            height: '220px',
            margin: '0 auto 32px',
            borderRadius: '50%',
            border: '3px solid var(--accent-primary)',
            padding: '6px',
            background: 'var(--bg-secondary)',
            boxShadow: '0 0 30px rgba(218, 255, 1, 0.4)'
          }}
          className="animate-fade-in"
        >
          <img
            src={profileData.profileImage}
            alt={profileData.name}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Cyber Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--accent-bg)',
            border: '1px solid var(--accent-primary)',
            borderRadius: '20px',
            padding: '8px 16px',
            marginBottom: '24px',
            color: 'var(--accent-primary)',
            fontSize: '14px',
            fontWeight: '600'
          }}
          className="animate-fade-in"
        >
          <Shield size={16} />
          <span>Cybersecurity Professional</span>
        </div>

        {/* Name and Title */}
        <h1
          className="display-lg animate-fade-in"
          style={{
            marginBottom: '16px',
            background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--accent-primary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {profileData.name}
        </h1>

        <p
          className="h2 animate-fade-in"
          style={{
            marginBottom: '16px',
            color: 'var(--text-secondary)'
          }}
        >
          {profileData.title}
        </p>

        <p
          className="body-lg animate-fade-in"
          style={{
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}
        >
          {profileData.tagline}
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}
          className="animate-fade-in"
        >
          <a href={profileData.resumeUrl} className="btn-primary" download>
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}
      >
        <div
          style={{
            width: '2px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--accent-primary), transparent)',
          }}
        />
      </div>

      <style jsx="true">{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        @media (max-width: 768px) {
          .display-lg { font-size: 36px !important; }
          .h2 { font-size: 18px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
