import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import '../styles/modal-animations.css';

const Modal = ({ isOpen, onClose, children, maxWidth = '900px' }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else if (shouldRender) {
      setIsClosing(true);
      setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = 'unset';
      }, 300);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  const handleBackdropClick = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 300);
  };

  return (
    <div
      className={`modal-backdrop ${isClosing ? 'closing' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.9)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        backdropFilter: 'blur(5px)'
      }}
      onClick={handleBackdropClick}
    >
      <div
        className={`modal-content ${isClosing ? 'closing' : ''}`}
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '16px',
          padding: '48px',
          maxWidth: maxWidth,
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleBackdropClick}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
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
        {children}
      </div>

      <style jsx="true">{`
        @media (max-width: 768px) {
          .modal-content {
            padding: 32px 24px !important;
            max-height: 95vh !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Modal;