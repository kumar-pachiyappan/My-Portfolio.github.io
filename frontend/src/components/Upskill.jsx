import React from 'react';
import { TrendingUp, Clock, CheckCircle2 } from 'lucide-react';
import { upskillData } from '../data/mock';
import '../styles/cyber-theme.css';

const Upskill = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Basic':
        return 'var(--accent-primary)';
      case 'Intermediate':
        return 'var(--accent-purple)';
      case 'Expert':
        return 'rgb(34, 197, 94)'; // green
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
      </div>
    </section>
  );
};

export default Upskill;
