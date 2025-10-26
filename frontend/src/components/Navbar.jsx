import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Lock, Sun, Moon } from 'lucide-react';
import '../styles/cyber-theme.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      applyTheme(savedTheme === 'dark');
    }
  }, []);

  const applyTheme = (isDark) => {
    const root = document.documentElement;
    if (isDark) {
      // Dark theme (existing neon-dark-kit)
      root.style.setProperty('--bg-primary', '#0a0b0d');
      root.style.setProperty('--bg-secondary', '#1a1c1e');
      root.style.setProperty('--bg-tertiary', '#2a2d30');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#e0e0e0');
      root.style.setProperty('--text-muted', '#a0a0a0');
      root.style.setProperty('--accent-primary', '#daff01');
      root.style.setProperty('--accent-bg', 'rgba(218, 255, 1, 0.1)');
      root.style.setProperty('--border-primary', '#daff01');
      root.style.setProperty('--border-subtle', 'rgba(255, 255, 255, 0.1)');
    } else {
      // Light theme
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f5f5f5');
      root.style.setProperty('--bg-tertiary', '#e8e8e8');
      root.style.setProperty('--text-primary', '#0a0b0d');
      root.style.setProperty('--text-secondary', '#2a2d30');
      root.style.setProperty('--text-muted', '#606060');
      root.style.setProperty('--accent-primary', '#6b8e00');
      root.style.setProperty('--accent-bg', 'rgba(107, 142, 0, 0.1)');
      root.style.setProperty('--border-primary', '#6b8e00');
      root.style.setProperty('--border-subtle', 'rgba(0, 0, 0, 0.1)');
    }
  };

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Upskill', href: '#upskill' },
    { name: 'Blog', href: '#blog' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(26, 28, 30, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ padding: '16px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Desktop Menu */}
          <div style={{ display: 'none', gap: '32px', alignItems: 'center' }} className="desktop-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  transition: 'color 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.name}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-primary)',
                borderRadius: '8px',
                padding: '8px 12px',
                color: 'var(--accent-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent-bg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Admin Direct Link */}
            <Link
              to="/admin/login"
              style={{
                background: 'transparent',
                border: '1px solid var(--border-primary)',
                borderRadius: '8px',
                padding: '8px 12px',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.color = 'var(--accent-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-primary)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <Lock size={16} />
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'block',
              background: 'transparent',
              border: 'none',
              color: 'var(--accent-primary)',
              cursor: 'pointer'
            }}
            className="mobile-menu-btn"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            style={{
              display: 'block',
              marginTop: '24px',
              padding: '24px',
              background: 'var(--bg-secondary)',
              borderRadius: '12px',
              border: '1px solid var(--border-subtle)'
            }}
            className="mobile-menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  display: 'block',
                  padding: '12px 0',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '18px',
                  borderBottom: '1px solid var(--border-subtle)',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              style={{
                display: 'block',
                width: '100%',
                marginTop: '16px',
                padding: '12px',
                background: 'var(--accent-bg)',
                color: 'var(--accent-primary)',
                border: '1px solid var(--border-primary)',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              {darkMode ? <Sun size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> : <Moon size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

            <Link
              to="/admin/login"
              style={{
                display: 'block',
                marginTop: '12px',
                padding: '12px',
                background: 'var(--accent-bg)',
                color: 'var(--accent-primary)',
                textDecoration: 'none',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: '600'
              }}
            >
              <Lock size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              Admin Login
            </Link>
          </div>
        )}
      </div>

      <style jsx="true">{`
        @media (min-width: 769px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
