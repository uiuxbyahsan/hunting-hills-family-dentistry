import React from 'react';
import { HeartHandshake, ClipboardCheck, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { PATIENT_STEPS } from '../data/practiceData';

export default function PatientExperience({ onOpenAppointment }) {
  const stepIcons = {
    HeartHandshake,
    ClipboardCheck,
    Sparkles
  };

  return (
    <section className="experience-section section-padding" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="text-eyebrow">
            <HeartHandshake size={15} /> THE THREE-STEP PROMISE
          </span>
          <h2 className="h2-section">Designed around your comfort.</h2>
          <p className="text-lead">
            Visiting the dentist shouldn't feel stressful or overwhelming. We've built our entire patient workflow around empathy, clarity, and unhurried clinical care.
          </p>
        </div>

        {/* Process Steps Track */}
        <div className="process-track-wrapper">
          <div className="process-timeline-line" />

          <div className="process-steps-grid">
            {PATIENT_STEPS.map((item, idx) => {
              const Icon = stepIcons[item.icon] || Sparkles;
              return (
                <div key={idx} className="process-card">
                  {/* Step Badge */}
                  <div className="process-badge-header">
                    <span className="process-number">{item.step}</span>
                    <div className="process-icon-circle">
                      <Icon size={24} />
                    </div>
                  </div>

                  <h3 className="process-title">{item.title}</h3>
                  <p className="process-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Comfort Guarantee */}
        <div className="comfort-banner">
          <div className="comfort-left">
            <ShieldCheck size={28} className="text-teal" />
            <div>
              <h4>Dental Anxiety? We're Here For You.</h4>
              <p>We provide warm blankets, soothing music, gentle numbing techniques, and a compassionate team that checks in on you at every single step.</p>
            </div>
          </div>
          <button
            onClick={onOpenAppointment}
            className="btn btn-navy"
            id="experience-book-btn"
          >
            <span>Book Your Comfortable Visit</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>

      <style>{`
        .experience-section {
          background-color: var(--color-bg-warm);
          border-bottom: 1px solid var(--color-border);
          position: relative;
        }

        .process-track-wrapper {
          position: relative;
          margin-bottom: 56px;
        }

        .process-timeline-line {
          position: absolute;
          top: 45px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: linear-gradient(90deg, rgba(85, 183, 201, 0.2) 0%, rgba(85, 183, 201, 0.8) 50%, rgba(85, 183, 201, 0.2) 100%);
          z-index: 1;
        }

        .process-steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          position: relative;
          z-index: 2;
        }

        .process-card {
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          padding: clamp(28px, 4vw, 40px);
          transition: transform var(--transition-normal), border-color var(--transition-normal);
          display: flex;
          flex-direction: column;
        }

        .process-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-border-hover);
        }

        .process-badge-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .process-number {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 800;
          color: var(--color-teal);
          line-height: 1;
        }

        .process-icon-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--color-bg-soft);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color var(--transition-fast), color var(--transition-fast);
        }

        .process-card:hover .process-icon-circle {
          background-color: var(--color-primary);
          color: #FFFFFF;
        }

        .process-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 12px;
        }

        .process-desc {
          font-size: 15px;
          line-height: 1.65;
          color: var(--color-text-muted);
        }

        /* Comfort Banner */
        .comfort-banner {
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 28px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .comfort-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .comfort-left h4 {
          font-size: 18px;
          color: var(--color-primary);
          margin-bottom: 4px;
        }

        .comfort-left p {
          font-size: 14.5px;
          color: var(--color-text-muted);
          max-width: 650px;
        }

        @media (max-width: 960px) {
          .process-steps-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .process-timeline-line {
            display: none;
          }
          .comfort-banner {
            flex-direction: column;
            align-items: flex-start;
          }
          .comfort-banner .btn {
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .process-track-wrapper {
            margin-bottom: 36px;
          }
          .process-card {
            padding: 20px 18px;
          }
          .process-badge-header {
            margin-bottom: 16px;
          }
          .process-number {
            font-size: 26px;
          }
          .process-icon-circle {
            width: 44px;
            height: 44px;
          }
          .process-title {
            font-size: 18.5px;
            margin-bottom: 8px;
          }
          .process-desc {
            font-size: 14px;
          }
          .comfort-banner {
            padding: 20px 16px;
            gap: 18px;
          }
          .comfort-left {
            gap: 14px;
            align-items: flex-start;
          }
          .comfort-left h4 {
            font-size: 17px;
          }
          .comfort-left p {
            font-size: 13.5px;
          }
        }
      `}</style>
    </section>
  );
}
