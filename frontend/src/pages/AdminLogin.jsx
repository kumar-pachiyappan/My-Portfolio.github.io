import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ArrowLeft, Mail } from 'lucide-react';
import '../styles/cyber-theme.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Mock authentication - will be replaced with Firebase
    setTimeout(() => {
      if (formData.email === 'admin@kumar.com' && formData.password === 'admin123') {
        navigate('/admin/dashboard');
      } else {
        setError('Invalid credentials');
      }
      setLoading(false);
    }, 1000);
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Mock password reset
    console.log('Password reset for:', resetEmail);
    setResetSent(true);
    setTimeout(() => {
      setResetSent(false);
      setShowReset(false);
      setResetEmail('');
    }, 3000);
  };

  return (
    <div
      className="cyber-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
    >
      <div
        className="feature-card"
        style={{
          maxWidth: '450px',
          width: '100%'
        }}
      >
        <button
          onClick={() => navigate('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            marginBottom: '24px',
            fontSize: '14px',
            padding: '8px 0',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        <div
          style={{
            width: '64px',
            height: '64px',
            margin: '0 auto 24px',
            borderRadius: '16px',
            background: 'var(--accent-bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Lock size={32} color="var(--accent-primary)" />
        </div>

        <h1 className="h1" style={{ textAlign: 'center', marginBottom: '12px' }}>
          Admin Login
        </h1>
        <p className="body-md" style={{ textAlign: 'center', marginBottom: '32px', color: 'var(--text-muted)' }}>
          Access the dashboard to manage your portfolio
        </p>

        {!showReset ? (
          <>
            {error && (
              <div
                style={{
                  padding: '12px 16px',
                  background: 'rgba(255, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 0, 0, 0.3)',
                  borderRadius: '8px',
                  color: '#ff6b6b',
                  marginBottom: '24px',
                  fontSize: '14px'
                }}
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--text-secondary)'
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'var(--bg-tertiary)',
                    border: '2px solid var(--border-primary)',
                    borderRadius: '12px',
                    fontSize: '16px',
                    color: 'var(--text-primary)',
                    transition: 'all 0.2s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--accent-primary)';
                    e.target.style.boxShadow = '0 0 0 4px rgba(218, 255, 1, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border-primary)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label
                  htmlFor="password"
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'var(--text-secondary)'
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    background: 'var(--bg-tertiary)',
                    border: '2px solid var(--border-primary)',
                    borderRadius: '12px',
                    fontSize: '16px',
                    color: 'var(--text-primary)',
                    transition: 'all 0.2s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--accent-primary)';
                    e.target.style.boxShadow = '0 0 0 4px rgba(218, 255, 1, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border-primary)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', marginBottom: '16px' }}
                disabled={loading}
              >
                {loading ? 'Authenticating...' : 'Login to Dashboard'}
              </button>

              <button
                type="button"
                onClick={() => setShowReset(true)}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--accent-primary)',
                  cursor: 'pointer',
                  fontSize: '14px',
                  textDecoration: 'underline'
                }}
              >
                Forgot Password?
              </button>
            </form>
          </>
        ) : (
          <>
            {resetSent ? (
              <div
                style={{
                  padding: '48px',
                  textAlign: 'center',
                  background: 'var(--accent-bg)',
                  borderRadius: '12px',
                  border: '1px solid var(--accent-primary)'
                }}
              >
                <Mail size={48} color="var(--accent-primary)" style={{ marginBottom: '16px' }} />
                <h3 className="h3" style={{ marginBottom: '8px', color: 'var(--accent-primary)' }}>
                  Reset Link Sent!
                </h3>
                <p className="body-md">Check your email for password reset instructions.</p>
              </div>
            ) : (
              <form onSubmit={handlePasswordReset}>
                <h3 className="h3" style={{ marginBottom: '16px', textAlign: 'center' }}>Reset Password</h3>
                <p className="body-md" style={{ marginBottom: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
                  Enter your email to receive reset instructions
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <label
                    htmlFor="resetEmail"
                    style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="resetEmail"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      background: 'var(--bg-tertiary)',
                      border: '2px solid var(--border-primary)',
                      borderRadius: '12px',
                      fontSize: '16px',
                      color: 'var(--text-primary)',
                      transition: 'all 0.2s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-primary)';
                      e.target.style.boxShadow = '0 0 0 4px rgba(218, 255, 1, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-primary)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', marginBottom: '12px' }}
                >
                  Send Reset Link
                </button>

                <button
                  type="button"
                  onClick={() => setShowReset(false)}
                  className="btn-secondary"
                  style={{ width: '100%' }}
                >
                  Back to Login
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
