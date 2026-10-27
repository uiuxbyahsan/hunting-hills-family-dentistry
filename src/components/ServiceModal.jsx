import React, { useEffect } from 'react';
import { X, CheckCircle2, Calendar, Phone, ArrowRight } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

export default function ServiceModal({ service, onClose, onBookAppointment }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-badges">
            <span className="modal-service-num">Service {service.number}</span>
            <span className="modal-badge">{service.badge}</span>
          </div>
          <h2 className="modal-title">{service.title}</h2>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {service.image && (
            <div className="modal-image-wrap">
              <img src={service.image} alt={service.title} className="modal-img" />
            </div>
          )}

          <div className="modal-desc-section">
            <p className="modal-full-desc">{service.fullDesc}</p>
          </div>

          <div className="modal-features-section">
            <h4 className="features-title">What to Expect</h4>
            <div className="features-grid">
              {service.features.map((feat, idx) => (
                <div key={idx} className="feature-item">
                  <CheckCircle2 size={18} className="feat-check" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Banner */}
          <div className="modal-cta-box">
            <div className="modal-cta-text">
              <h4>Ready to discuss {service.title}?</h4>
              <p>Schedule a one-on-one consultation with our Roanoke dental team.</p>
            </div>
            <div className="modal-actions">
              <button
                className="btn btn-primary"
                onClick={() => {
                  onClose();
                  onBookAppointment(service.title);
                }}
              >
                <Calendar size={16} />
                <span>Request Appointment</span>
                <span className="btn-arrow">→</span>
              </button>
              <a href={`tel:${PRACTICE_INFO.phoneRaw}`} className="btn btn-secondary">
                <Phone size={16} />
                <span>{PRACTICE_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 38, 51, 0.72);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: modalFadeIn 250ms ease forwards;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-dialog {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          width: 100%;
          max-width: 680px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          padding: clamp(28px, 4vw, 44px);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
          animation: modalSlideUp 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          background: var(--color-bg-warm);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color var(--transition-fast);
        }

        .modal-close-btn:hover {
          background: var(--color-teal-light);
          color: var(--color-primary-dark);
        }

        .modal-badges {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .modal-service-num {
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-teal-dark);
        }

        .modal-badge {
          background: var(--color-bg-soft);
          color: var(--color-primary);
          font-size: 12px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 99px;
        }

        .modal-title {
          font-size: clamp(24px, 3vw, 32px);
          color: var(--color-primary);
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .modal-image-wrap {
          margin-bottom: 24px;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--color-bg-soft);
          border: 1px solid var(--color-border);
          max-height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-full-desc {
          font-size: 16px;
          line-height: 1.7;
          color: var(--color-text-dark);
          margin-bottom: 28px;
        }

        .modal-features-section {
          background: var(--color-bg-warm);
          padding: 24px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          margin-bottom: 28px;
        }

        .features-title {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 16px;
        }

        .features-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.45;
        }

        .feat-check {
          color: var(--color-teal-dark);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .modal-cta-box {
          background: var(--color-primary);
          color: #FFFFFF;
          padding: 24px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .modal-cta-text h4 {
          color: #FFFFFF;
          font-size: 18px;
          margin-bottom: 4px;
        }

        .modal-cta-text p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
        }

        .modal-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .modal-actions .btn-secondary {
          color: #FFFFFF;
          border-color: rgba(255, 255, 255, 0.35);
        }
        .modal-actions .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        @media (max-width: 600px) {
          .modal-image-wrap {
            max-height: 170px;
            margin-bottom: 18px;
          }
          .modal-title {
            font-size: 22px;
            margin-bottom: 14px;
          }
          .modal-full-desc {
            font-size: 14.5px;
            margin-bottom: 20px;
          }
          .modal-features-section {
            padding: 16px 14px;
            margin-bottom: 20px;
          }
          .modal-cta-box {
            padding: 18px 16px;
          }
          .modal-actions {
            flex-direction: column;
          }
          .modal-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
