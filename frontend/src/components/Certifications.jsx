import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, ExternalLink, X } from 'lucide-react';
import { certificationsData } from '../data/mock';
import '../styles/cyber-theme.css';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  // Auto-slide effect
  useEffect(() => {
    if (isAutoSliding) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % certificationsData.length);
      }, 4000); // Change slide every 4 seconds
      
      return () => clearInterval(interval);
    }
  }, [isAutoSliding]);

  const nextSlide = () => {
    setIsAutoSliding(false);
    setCurrentIndex((prev) => (prev + 1) % certificationsData.length);
  };

  const prevSlide = () => {
    setIsAutoSliding(false);
    setCurrentIndex((prev) => (prev - 1 + certificationsData.length) % certificationsData.length);
  };

  const goToSlide = (index) => {
    setIsAutoSliding(false);
    setCurrentIndex(index);
  };

  return (
    <section
      id="certifications"
      style={{
        padding: '100px 0',
        background: 'var(--bg-primary)'
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="display-md" style={{ marginBottom: '16px' }}>
            Certifications
          </h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'var(--accent-primary)',
              margin: '0 auto 16px'
            }}
          />
          <p className="body-lg">Industry-recognized credentials & ongoing certifications</p>
        </div>

        {/* Carousel */}
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              overflow: 'hidden',
              borderRadius: '16px'
            }}
          >
            <div
              style={{
                display: 'flex',
                transition: 'transform 0.8s ease-in-out',
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  style={{
                    minWidth: '100%',
                    padding: '24px'
                  }}
                >
                  <div
                    className="feature-card"
                    style={{
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '300px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        marginBottom: '24px',
                        background: 'var(--bg-tertiary)'
                      }}
                    >
                      <img
                        src={cert.image}
                        alt={cert.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'var(--accent-bg)',
                        border: '1px solid var(--accent-primary)',
                        borderRadius: '20px',
                        padding: '6px 12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: 'var(--accent-primary)',
                        marginBottom: '16px'
                      }}
                    >
                      <Award size={14} />
                      {cert.code}
                    </div>

                    <h3 className="h2" style={{ marginBottom: '12px' }}>{cert.name}</h3>
                    <p className="body-md" style={{ marginBottom: '8px', color: 'var(--text-secondary)' }}>
                      {cert.issuer}
                    </p>
                    <p className="body-md" style={{ color: 'var(--text-muted)' }}>
                      {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
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
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg-secondary)';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
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
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg-secondary)';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
            {certificationsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: index === currentIndex ? '32px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  background: index === currentIndex ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedCert && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.95)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              backdropFilter: 'blur(5px)'
            }}
            onClick={() => setSelectedCert(null)}
          >
            <div
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px',
                padding: '32px',
                maxWidth: '800px',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
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
                  transition: 'all 0.2s ease',
                  zIndex: 10
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

              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  marginBottom: '24px'
                }}
              />
              
              <h2 className="h1" style={{ marginBottom: '12px' }}>{selectedCert.name}</h2>
              <p className="h3" style={{ marginBottom: '8px', color: 'var(--accent-primary)' }}>
                {selectedCert.issuer}
              </p>
              <p className="body-lg" style={{ marginBottom: '24px', color: 'var(--text-muted)' }}>
                {selectedCert.date}
              </p>
              
              <a
                href={selectedCert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={20} />
                View Credential
              </a>
            </div>
          </div>
        )}
      </div>

      <style jsx="true">{`
        @media (max-width: 1024px) {
          button[style*="left: -60px"],
          button[style*="right: -60px"] {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;

  return (
    <section
      id="certifications"
      style={{
        padding: '100px 0',
        background: 'var(--bg-primary)'
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="display-md" style={{ marginBottom: '16px' }}>
            Certifications
          </h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'var(--accent-primary)',
              margin: '0 auto 16px'
            }}
          />
          <p className="body-lg">Industry-recognized credentials & ongoing certifications</p>
        </div>

        {/* Carousel */}
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              overflow: 'hidden',
              borderRadius: '16px'
            }}
          >
            <div
              style={{
                display: 'flex',
                transition: 'transform 0.5s ease',
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  style={{
                    minWidth: '100%',
                    padding: '24px'
                  }}
                >
                  <div
                    className="feature-card"
                    style={{
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '300px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        marginBottom: '24px',
                        background: 'var(--bg-tertiary)'
                      }}
                    >
                      <img
                        src={cert.image}
                        alt={cert.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'var(--accent-bg)',
                        border: '1px solid var(--accent-primary)',
                        borderRadius: '20px',
                        padding: '6px 12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: 'var(--accent-primary)',
                        marginBottom: '16px'
                      }}
                    >
                      <Award size={14} />
                      {cert.code}
                    </div>

                    <h3 className="h2" style={{ marginBottom: '12px' }}>{cert.name}</h3>
                    <p className="body-md" style={{ marginBottom: '8px', color: 'var(--text-secondary)' }}>
                      {cert.issuer}
                    </p>
                    <p className="body-md" style={{ color: 'var(--text-muted)' }}>
                      {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
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
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg-secondary)';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
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
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg-secondary)';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
            {certificationsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: index === currentIndex ? '32px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  background: index === currentIndex ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedCert && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.95)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              backdropFilter: 'blur(5px)'
            }}
            onClick={() => setSelectedCert(null)}
          >
            <div
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px',
                padding: '32px',
                maxWidth: '800px',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
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
                  transition: 'all 0.2s ease',
                  zIndex: 10
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

              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  marginBottom: '24px'
                }}
              />
              
              <h2 className="h1" style={{ marginBottom: '12px' }}>{selectedCert.name}</h2>
              <p className="h3" style={{ marginBottom: '8px', color: 'var(--accent-primary)' }}>
                {selectedCert.issuer}
              </p>
              <p className="body-lg" style={{ marginBottom: '24px', color: 'var(--text-muted)' }}>
                {selectedCert.date}
              </p>
              
              <a
                href={selectedCert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={20} />
                View Credential
              </a>
            </div>
          </div>
        )}
      </div>

      <style jsx="true">{`
        @media (max-width: 1024px) {
          button[style*="left: -60px"],
          button[style*="right: -60px"] {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;
