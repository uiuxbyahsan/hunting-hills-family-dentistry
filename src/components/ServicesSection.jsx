import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Smile, 
  Layers, 
  Activity, 
  HeartHandshake, 
  ArrowRight,
  CheckCircle2,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { SERVICES } from '../data/practiceData';
import ServiceModal from './ServiceModal';

export default function ServicesSection({ onBookAppointment }) {
  const [selectedService, setSelectedService] = useState(null);

  // Icon map for services
  const iconMap = {
    preventive: Activity,
    cosmetic: Sparkles,
    implants: Layers,
    invisalign: Smile,
    teethxpress: ShieldCheck,
    restorative: HeartHandshake
  };

  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="text-eyebrow">
            <Sparkles size={15} /> CLINICAL EXCELLENCE & PROCEDURES
          </span>
          <h2 className="h2-section">Complete dental care, thoughtfully delivered.</h2>
          <p className="text-lead">
            From routine gentle hygiene to full-mouth dental implant restoration, our experienced Roanoke doctors provide personalized treatment in a relaxed, state-of-the-art environment.
          </p>
        </div>

        {/* Premium Services Grid */}
        <div className="services-grid">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.id] || Sparkles;
            return (
              <div
                key={service.id}
                className="service-card"
                onClick={() => setSelectedService(service)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedService(service);
                  }
                }}
                aria-label={`View clinical details for ${service.title}`}
              >
                {/* Top Subtle Brand Gradient Accent Line */}
                <div className="card-top-accent" />

                {/* Visual Header with Real Photography */}
                <div className="service-card-media">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-thumb-img"
                    loading="lazy"
                  />
                  <div className="service-media-scrim" />

                  {/* Top Floating Glass Badges */}
                  <div className="service-card-meta">
                    <span className="service-num-badge">{service.number}</span>
                    <span className="service-badge-pill">{service.badge}</span>
                  </div>

                  {/* Partner Logo Watermark (Invisalign / TeethXpress) */}
                  {service.partnerLogo && (
                    <div className="partner-logo-pill">
                      <img src={service.partnerLogo} alt="Certified Partner" />
                    </div>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="service-card-content">
                  <div className="service-icon-heading-row">
                    <div className="service-icon-box">
                      <Icon size={20} />
                    </div>
                    <div className="service-title-group">
                      <h3 className="service-card-title">{service.title}</h3>
                    </div>
                  </div>

                  <p className="service-card-desc">{service.shortDesc}</p>

                  {/* 3 Key Clinical Highlights */}
                  {service.highlights && (
                    <div className="service-highlights-list">
                      {service.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="service-highlight-row">
                          <CheckCircle2 size={15} className="highlight-check" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Link Footer */}
                  <div className="service-card-footer">
                    <span className="service-learn-more-btn">
                      <span>View Treatment Details</span>
                      <span className="btn-arrow">→</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast-Track Consultation Banner */}
        <div className="services-bottom-callout">
          <div className="callout-left">
            <div className="callout-icon-circle">
              <Calendar size={24} />
            </div>
            <div className="callout-text">
              <h4>Not sure which treatment fits your smile best?</h4>
              <p>Our Roanoke dentists provide thorough clinical consultations with zero-pressure, transparent guidance.</p>
            </div>
          </div>
          <button
            onClick={() => onBookAppointment()}
            className="btn btn-primary btn-lg"
            id="services-consultation-btn"
          >
            <span>Request a Consultation</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBookAppointment={onBookAppointment}
        />
      )}

      <style>{`
        .services-section {
          background-color: var(--color-bg-soft);
          border-bottom: 1px solid var(--color-border);
          position: relative;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 56px;
        }

        /* Architectural Card */
        .service-card {
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          cursor: pointer;
          position: relative;
          transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 300ms cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 300ms cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
        }

        /* Top Accent Highlight */
        .card-top-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--color-teal) 0%, var(--color-orange) 100%);
          opacity: 0;
          transition: opacity var(--transition-fast);
          z-index: 5;
        }

        .service-card:hover, .service-card:focus-visible {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-teal);
        }

        .service-card:hover .card-top-accent {
          opacity: 1;
        }

        /* Media Container */
        .service-card-media {
          position: relative;
          height: 200px;
          background: var(--color-primary-dark);
          overflow: hidden;
        }

        .service-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 650ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-card:hover .service-thumb-img {
          transform: scale(1.06);
        }

        .service-media-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(15, 38, 51, 0.40) 0%,
            rgba(15, 38, 51, 0.15) 50%,
            rgba(15, 38, 51, 0.70) 100%
          );
          pointer-events: none;
        }

        /* Floating Badges */
        .service-card-meta {
          position: absolute;
          top: 14px;
          left: 14px;
          right: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 3;
        }

        .service-num-badge {
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 800;
          color: #FFFFFF;
          background: rgba(15, 38, 51, 0.75);
          backdrop-filter: blur(8px);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .service-badge-pill {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-primary);
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(8px);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .partner-logo-pill {
          position: absolute;
          bottom: 12px;
          right: 14px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          height: 28px;
          display: flex;
          align-items: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          z-index: 3;
        }

        .partner-logo-pill img {
          max-height: 20px;
          width: auto;
          object-fit: contain;
        }

        /* Card Content */
        .service-card-content {
          padding: 26px 26px 22px 26px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .service-icon-heading-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }

        .service-icon-box {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          background: var(--color-bg-soft);
          border: 1px solid var(--color-border-subtle);
          color: var(--color-teal-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background-color var(--transition-fast), color var(--transition-fast);
        }

        .service-card:hover .service-icon-box {
          background-color: var(--color-primary);
          color: #FFFFFF;
        }

        .service-title-group {
          flex-grow: 1;
        }

        .service-card-title {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1.25;
        }

        .service-card-desc {
          font-size: 14.5px;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        /* Clinical Highlights */
        .service-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-bottom: 24px;
          background: var(--color-bg-warm);
          padding: 14px 16px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-subtle);
          flex-grow: 1;
        }

        .service-highlight-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: var(--color-text-dark);
          line-height: 1.35;
        }

        .highlight-check {
          color: var(--color-teal-dark);
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Card Footer */
        .service-card-footer {
          border-top: 1px solid var(--color-border-subtle);
          padding-top: 16px;
        }

        .service-learn-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          color: var(--color-primary);
          transition: color var(--transition-fast);
        }

        .service-card:hover .service-learn-more-btn {
          color: var(--color-orange);
        }

        .service-card:hover .btn-arrow {
          transform: translateX(6px);
        }

        /* Bottom Callout Banner */
        .services-bottom-callout {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          padding: 32px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          box-shadow: var(--shadow-sm);
        }

        .callout-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .callout-icon-circle {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: var(--color-bg-soft);
          color: var(--color-teal-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .callout-text h4 {
          font-size: 20px;
          color: var(--color-primary);
          margin-bottom: 4px;
        }

        .callout-text p {
          font-size: 15px;
          color: var(--color-text-muted);
          max-width: 620px;
        }

        @media (max-width: 1080px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 720px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .services-bottom-callout {
            flex-direction: column;
            align-items: flex-start;
            padding: 24px;
          }
          .services-bottom-callout .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
