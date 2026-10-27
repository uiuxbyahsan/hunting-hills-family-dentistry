import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { DOCTORS } from '../data/practiceData';
import DoctorModal from './DoctorModal';

export default function TeamSection({ onBookAppointment }) {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <section className="team-section section-padding" id="team">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="text-eyebrow">
            <Users size={15} /> CLINICAL EXCELLENCE & DEDICATION
          </span>
          <h2 className="h2-section">Meet Our Roanoke Dental Doctors</h2>
          <p className="text-lead">
            Experienced, gentle practitioners dedicated to continuing education, meticulous clinical precision, and warm patient relationships.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="team-grid">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="doctor-card"
              onClick={() => setSelectedDoctor(doc)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedDoctor(doc);
                }
              }}
              aria-label={`View biography of ${doc.name}`}
            >
              {/* Doctor Portrait Container with Zoom */}
              <div className="doctor-media-wrap">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="doctor-portrait-img"
                  loading="lazy"
                />
                <div className="doctor-image-overlay" />
              </div>

              {/* Doctor Details */}
              <div className="doctor-card-content">
                <h3 className="doctor-name">{doc.name}</h3>
                <span className="doctor-role-tag">{doc.role}</span>
                <p className="doctor-summary">{doc.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      {selectedDoctor && (
        <DoctorModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
          onBookAppointment={onBookAppointment}
        />
      )}

      <style>{`
        .team-section {
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--color-border);
          position: relative;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }

        .doctor-card {
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform var(--transition-normal),
                      border-color var(--transition-normal);
          outline: none;
        }

        .doctor-card:hover, .doctor-card:focus-visible {
          transform: translateY(-4px);
          border-color: var(--color-border-hover);
        }

        .doctor-media-wrap {
          position: relative;
          height: 290px;
          background: var(--color-bg-soft);
          overflow: hidden;
        }

        .doctor-portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          transition: transform var(--transition-slow);
        }

        .doctor-card:hover .doctor-portrait-img {
          transform: scale(1.04);
        }

        .doctor-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(23, 59, 77, 0) 50%, rgba(15, 38, 51, 0.45) 100%);
          pointer-events: none;
        }

        .doctor-card-content {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .doctor-name {
          font-family: var(--font-heading);
          font-size: 19px;
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1.25;
          margin-bottom: 4px;
        }

        .doctor-role-tag {
          font-size: 12px;
          font-weight: 600;
          color: var(--color-teal-dark);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 12px;
        }

        .doctor-summary {
          font-size: 14px;
          line-height: 1.55;
          color: var(--color-text-muted);
          margin-bottom: 0;
          flex-grow: 1;
        }

        @media (max-width: 1100px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .doctor-media-wrap {
            height: 250px;
          }
          .doctor-card-content {
            padding: 18px 16px;
          }
          .doctor-name {
            font-size: 18px;
          }
          .doctor-summary {
            font-size: 13.5px;
          }
        }
      `}</style>
    </section>
  );
}
