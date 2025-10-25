import React from 'react';
import { TrendingUp, Clock, CheckCircle2 } from 'lucide-react';
import { upskillData } from '../data/mock';
import '../styles/cyber-theme.css';

const Upskill = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress':
        return 'var(--accent-primary)';
      case 'Active':
        return 'var(--accent-purple)';
      case 'Planned':
        return 'var(--text-muted)';
      default:
        return 'var(--text-secondary)';
    }
  };

  return (
    <section
      id="upskill"
      style={{
        padding: '100px 0',
        background: 'var(--bg-primary)'
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="display-md" style={{ marginBottom: '16px' }}>
            Continuous Learning
          </h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'var(--accent-primary)',
              margin: '0 auto 16px'
            }}
          />
          <p className="body-lg">Staying ahead in the evolving cybersecurity landscape</p>
        </div>

        <div className="card-grid">
          {upskillData.map((item) => (
            <div
              key={item.id}
              className="feature-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'visible'
              }}
            >
              {/* Status Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '24px',
                  padding: '6px 12px',
                  background: 'var(--bg-secondary)',
                  border: `2px solid ${getStatusColor(item.status)}`,
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: getStatusColor(item.status)
                }}
              >
                {item.status}
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
                  marginBottom: '16px',
                  width: 'fit-content'
                }}
              >
                <TrendingUp size={14} />
                {item.category}
              </div>

              <h3 className="h3" style={{ marginBottom: '12px' }}>{item.title}</h3>
              <p className="body-md" style={{ marginBottom: '24px', flex: 1 }}>
                {item.description}
              </p>

              {/* Progress Bar */}
              <div style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                    Progress
                  </span>
                  <span style={{ fontSize: '14px', color: 'var(--accent-primary)', fontWeight: '600' }}>
                    {item.progress}%
                  </span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '8px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      width: `${item.progress}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, ${getStatusColor(item.status)}, var(--accent-primary))`,
                      transition: 'width 0.5s ease',
                      borderRadius: '4px'
                    }}
                  />
                </div>
              </div>

              {/* Estimated Completion */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--text-muted)',
                  fontSize: '14px'
                }}
              >
                <Clock size={16} />
                Target: {item.estimatedCompletion}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          style={{
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px'
          }}
        >
          <div
            style={{
              padding: '32px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                margin: '0 auto 16px',
                borderRadius: '12px',
                background: 'var(--accent-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <TrendingUp size={24} color="var(--accent-primary)" />
            </div>
            <h3 className="display-md" style={{ marginBottom: '8px', color: 'var(--accent-primary)' }}>
              {upskillData.filter(i => i.status === 'In Progress').length}
            </h3>
            <p className="body-md">In Progress</p>
          </div>

          <div
            style={{
              padding: '32px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                margin: '0 auto 16px',
                borderRadius: '12px',
                background: 'rgba(127, 74, 142, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CheckCircle2 size={24} color="var(--accent-purple)" />
            </div>
            <h3 className="display-md" style={{ marginBottom: '8px', color: 'var(--accent-purple)' }}>
              {upskillData.filter(i => i.status === 'Active').length}
            </h3>
            <p className="body-md">Active Learning</p>
          </div>

          <div
            style={{
              padding: '32px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                margin: '0 auto 16px',
                borderRadius: '12px',
                background: 'var(--bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Clock size={24} color="var(--text-muted)" />
            </div>
            <h3 className="display-md" style={{ marginBottom: '8px' }}>
              {upskillData.filter(i => i.status === 'Planned').length}
            </h3>
            <p className="body-md">Planned</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upskill;
