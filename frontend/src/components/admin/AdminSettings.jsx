import React, { useState } from 'react';
import { Save, Key, Mail, Eye, EyeOff } from 'lucide-react';

const AdminSettings = () => {
  const [credentials, setCredentials] = useState({
    currentEmail: 'admin@kumar.com',
    newEmail: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  const handleSaveEmail = () => {
    if (!credentials.newEmail) {
      setError('Please enter a new email');
      return;
    }
    // Save to localStorage
    localStorage.setItem('adminEmail', credentials.newEmail);
    console.log('Updating email to:', credentials.newEmail);
    setSaved(true);
    setError('');
    setTimeout(() => {
      setSaved(false);
      setCredentials({ ...credentials, currentEmail: credentials.newEmail, newEmail: '' });
    }, 3000);
  };

  const handleSavePassword = () => {
    setError('');
    
    if (!credentials.currentPassword || !credentials.newPassword || !credentials.confirmPassword) {
      setError('Please fill all password fields');
      return;
    }

    if (credentials.newPassword !== credentials.confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (credentials.newPassword.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    // Save to localStorage (in production, use proper encryption)
    localStorage.setItem('adminPassword', credentials.newPassword);
    console.log('Updating password');
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setCredentials({
        ...credentials,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    }, 3000);
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      {saved && (
        <div
          style={{
            padding: '16px 24px',
            background: 'var(--accent-bg)',
            border: '1px solid var(--accent-primary)',
            borderRadius: '12px',
            color: 'var(--accent-primary)',
            marginBottom: '24px',
            textAlign: 'center'
          }}
        >
          ✅ Credentials updated successfully!
        </div>
      )}

      {error && (
        <div
          style={{
            padding: '16px 24px',
            background: 'rgba(255, 0, 0, 0.1)',
            border: '1px solid rgba(255, 0, 0, 0.3)',
            borderRadius: '12px',
            color: '#ff6b6b',
            marginBottom: '24px',
            textAlign: 'center'
          }}
        >
          {error}
        </div>
      )}

      {/* Email Section */}
      <div className="feature-card" style={{ marginBottom: '24px' }}>
        <h3 className="h2" style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Mail size={24} color="var(--accent-primary)" />
          Change Email
        </h3>
        
        <div style={{ marginBottom: '20px' }}>
          <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
            Current Email
          </label>
          <input
            type="email"
            value={credentials.currentEmail}
            disabled
            style={{
              width: '100%',
              padding: '12px 16px',
              background: 'var(--bg-tertiary)',
              border: '2px solid var(--border-primary)',
              borderRadius: '8px',
              color: 'var(--text-muted)',
              fontSize: '16px',
              opacity: 0.7
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
            New Email
          </label>
          <input
            type="email"
            value={credentials.newEmail}
            onChange={(e) => setCredentials({ ...credentials, newEmail: e.target.value })}
            placeholder="Enter new email address"
            style={{
              width: '100%',
              padding: '12px 16px',
              background: 'var(--bg-tertiary)',
              border: '2px solid var(--border-primary)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontSize: '16px',
              outline: 'none'
            }}
          />
        </div>

        <button
          onClick={handleSaveEmail}
          className="btn-primary"
          style={{ width: '100%' }}
        >
          <Save size={20} />
          Update Email
        </button>
      </div>

      {/* Password Section */}
      <div className="feature-card">
        <h3 className="h2" style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Key size={24} color="var(--accent-primary)" />
          Change Password
        </h3>
        
        <div style={{ marginBottom: '20px' }}>
          <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
            Current Password
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPasswords.current ? 'text' : 'password'}
              value={credentials.currentPassword}
              onChange={(e) => setCredentials({ ...credentials, currentPassword: e.target.value })}
              placeholder="Enter current password"
              style={{
                width: '100%',
                padding: '12px 16px',
                paddingRight: '50px',
                background: 'var(--bg-tertiary)',
                border: '2px solid var(--border-primary)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontSize: '16px',
                outline: 'none'
              }}
            />
            <button
              type="button"
              onClick={() => setShowPasswords({ ...showPasswords, current: !showPasswords.current })}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              {showPasswords.current ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
            New Password
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPasswords.new ? 'text' : 'password'}
              value={credentials.newPassword}
              onChange={(e) => setCredentials({ ...credentials, newPassword: e.target.value })}
              placeholder="Enter new password (min 8 characters)"
              style={{
                width: '100%',
                padding: '12px 16px',
                paddingRight: '50px',
                background: 'var(--bg-tertiary)',
                border: '2px solid var(--border-primary)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontSize: '16px',
                outline: 'none'
              }}
            />
            <button
              type="button"
              onClick={() => setShowPasswords({ ...showPasswords, new: !showPasswords.new })}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              {showPasswords.new ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label className="body-md" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
            Confirm New Password
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPasswords.confirm ? 'text' : 'password'}
              value={credentials.confirmPassword}
              onChange={(e) => setCredentials({ ...credentials, confirmPassword: e.target.value })}
              placeholder="Confirm new password"
              style={{
                width: '100%',
                padding: '12px 16px',
                paddingRight: '50px',
                background: 'var(--bg-tertiary)',
                border: '2px solid var(--border-primary)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontSize: '16px',
                outline: 'none'
              }}
            />
            <button
              type="button"
              onClick={() => setShowPasswords({ ...showPasswords, confirm: !showPasswords.confirm })}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              {showPasswords.confirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          onClick={handleSavePassword}
          className="btn-primary"
          style={{ width: '100%' }}
        >
          <Save size={20} />
          Update Password
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
