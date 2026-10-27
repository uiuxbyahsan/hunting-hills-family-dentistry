import React, { useEffect } from 'react';
import { X, GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

export default function DoctorModal({ doctor, onClose, onBookAppointment }) {
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

  if (!doctor) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog doctor-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close profile">
          <X size={20} />
        </button>

        <div className="doctor-modal-grid">
          {/* Left Column: Portrait & Credentials */}
          <div className="doctor-modal-left">
            <div className="doctor-modal-portrait-wrap">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="doctor-modal-img"
              />
            </div>
            <div className="doctor-modal-badge">
              <GraduationCap size={16} className="text-teal" />
              <span>{doctor.education}</span>
            </div>
          </div>

          {/* Right Column: Bio & Highlights */}
          <div className="doctor-modal-right">
            <span className="text-eyebrow">HUNTING HILLS CLINICAL TEAM</span>
            <h2 className="doctor-modal-name">{doctor.name}</h2>
            <p className="doctor-modal-role">{doctor.role}</p>

            <div className="doctor-modal-bio">
              <p>{doctor.bio}</p>
            </div>

            <div className="doctor-highlights-box">
              <h4>Key Focus & Credentials</h4>
              <div className="highlights-list">
                {doctor.highlights.map((h, i) => (
                  <div key={i} className="highlight-item">
                    <CheckCircle2 size={16} className="text-teal" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="doctor-modal-actions">
              <button
                className="btn btn-primary"
                onClick={() => {
                  onClose();
                  onBookAppointment(`Consultation with ${doctor.name}`);
                }}
              >
                <Calendar size={16} />
                <span>Request Visit with {doctor.prefix} {doctor.name.split(' ').slice(-1)[0]}</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .doctor-modal-dialog {
          max-width: 820px !important;
          padding: clamp(24px, 4vw, 40px) !important;
        }

        .doctor-modal-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 36px;
          align-items: start;
        }

        .doctor-modal-portrait-wrap {
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--color-bg-soft);
          border: 1px solid var(--color-border);
          margin-bottom: 16px;
        }

        .doctor-modal-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          display: block;
        }

        .doctor-modal-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--color-bg-soft);
          padding: 10px 14px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-subtle);
          font-size: 13px;
          font-weight: 600;
          color: var(--color-primary);
        }

        .doctor-modal-name {
          font-size: clamp(24px, 3vw, 32px);
          color: var(--color-primary);
          line-height: 1.2;
          margin-bottom: 4px;
        }

        .doctor-modal-role {
          font-size: 15px;
          color: var(--color-teal-dark);
          font-weight: 600;
          margin-bottom: 20px;
        }

        .doctor-modal-bio {
          font-size: 15.5px;
          line-height: 1.7;
          color: var(--color-text-dark);
          margin-bottom: 24px;
        }

        .doctor-highlights-box {
          background: var(--color-bg-warm);
          padding: 20px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          margin-bottom: 28px;
        }

        .doctor-highlights-box h4 {
          font-size: 15px;
          color: var(--color-primary);
          margin-bottom: 12px;
        }

        .highlights-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: var(--color-text-muted);
        }

        @media (max-width: 768px) {
          .doctor-modal-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .doctor-modal-portrait-wrap {
            max-width: 240px;
            margin: 0 auto 16px auto;
          }
          .doctor-modal-img {
            height: 260px;
          }
        }
      `}</style>
    </div>
  );
}
