import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Lock } from 'lucide-react';
import '../styles/cyber-theme.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAdminMenu, setShowAdminMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          {/* Logo - Removed as per user request */}

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

            {/* Admin Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setShowAdminMenu(!showAdminMenu)}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-primary)',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
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
              </button>

              {showAdminMenu && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '8px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '12px',
                    padding: '8px',
                    minWidth: '150px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  <Link
                    to="/admin/login"
                    style={{
                      display: 'block',
                      padding: '12px 16px',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'var(--accent-bg)';
                      e.target.style.color = 'var(--accent-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'var(--text-secondary)';
                    }}
                  >
                    Admin Login
                  </Link>
                </div>
              )}
            </div>
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
            <Link
              to="/admin/login"
              style={{
                display: 'block',
                marginTop: '16px',
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
