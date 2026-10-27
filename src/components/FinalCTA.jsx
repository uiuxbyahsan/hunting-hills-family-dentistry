import React from 'react';
import { Calendar, Phone, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

export default function FinalCTA({ onOpenAppointment }) {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta-card">
          <div className="cta-content-column">
            <span className="text-eyebrow text-eyebrow-orange">BEGIN YOUR JOURNEY TO LIFELONG ORAL HEALTH</span>
            <h2 className="cta-headline">Let's take care of your smile.</h2>
            <p className="cta-supporting">
              Request an appointment with Hunting Hills Family Dentistry. We welcome new families, dental emergencies, and consultations for dental implants and Invisalign®.
            </p>

            <div className="cta-actions-group">
              <button
                onClick={onOpenAppointment}
                className="btn btn-primary btn-lg cta-main-btn"
                id="final-cta-book-btn"
              >
                <Calendar size={18} />
                <span>Book an Appointment</span>
                <span className="btn-arrow">→</span>
              </button>

              <a
                href={`tel:${PRACTICE_INFO.phoneRaw}`}
                className="btn btn-outline-white btn-lg cta-phone-btn"
                id="final-cta-phone-btn"
              >
                <Phone size={18} />
                <span>{PRACTICE_INFO.phone}</span>
              </a>
            </div>

            <div className="cta-trust-perks">
              <div className="perk-item">
                <CheckCircle2 size={16} className="text-teal" />
                <span>Zero Pressure Consultations</span>
              </div>
              <div className="perk-item">
                <CheckCircle2 size={16} className="text-teal" />
                <span>Early 7 AM Visits</span>
              </div>
              <div className="perk-item">
                <CheckCircle2 size={16} className="text-teal" />
                <span>Most Major PPO Insurances</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .final-cta-section {
          background-color: var(--color-bg-warm);
          padding-top: clamp(64px, 8vw, 100px);
          padding-bottom: clamp(64px, 8vw, 100px);
        }

        .final-cta-card {
          background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
          border-radius: var(--radius-xl);
          padding: clamp(48px, 6vw, 84px) clamp(28px, 5vw, 64px);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .final-cta-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(85, 183, 201, 0.22) 0%, transparent 70%);
          pointer-events: none;
        }

        .final-cta-card::after {
          content: '';
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(243, 154, 82, 0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-content-column {
          position: relative;
          z-index: 2;
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-content-column .text-eyebrow {
          margin-bottom: 16px;
        }

        .cta-headline {
          color: #FFFFFF;
          font-size: clamp(34px, 4.4vw, 54px);
          line-height: 1.15;
          margin-bottom: 20px;
        }

        .cta-supporting {
          font-size: clamp(16px, 1.25vw, 20px);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.88);
          margin-bottom: 38px;
        }

        .cta-actions-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .cta-trust-perks {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          flex-wrap: wrap;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .perk-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 14px;
          font-weight: 500;
        }

        @media (max-width: 600px) {
          .cta-actions-group {
            flex-direction: column;
            width: 100%;
          }
          .cta-main-btn, .cta-phone-btn {
            width: 100%;
          }
          .cta-trust-perks {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
