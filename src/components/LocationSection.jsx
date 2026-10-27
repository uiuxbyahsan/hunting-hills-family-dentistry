import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink, CheckCircle } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

export default function LocationSection() {
  const [currentStatus, setCurrentStatus] = useState({ isOpen: false, text: "Checking office hours..." });

  useEffect(() => {
    // Calculate current open/closed status based on US Eastern Time (Roanoke, VA)
    const checkOpenStatus = () => {
      try {
        const now = new Date();
        const roanokeTimeStr = now.toLocaleString("en-US", { timeZone: "America/New_York" });
        const roanokeDate = new Date(roanokeTimeStr);
        const day = roanokeDate.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
        const hour = roanokeDate.getHours();
        const minute = roanokeDate.getMinutes();
        const currentMinuteOfDay = hour * 60 + minute;

        // Mon-Thu (1-4): 7:00 AM to 7:00 PM (420 to 1140 min)
        // Fri (5): 7:00 AM to 4:00 PM (420 to 960 min)
        // Sat-Sun (0, 6): Closed
        let isOpen = false;
        let text = "Currently Closed";

        if (day >= 1 && day <= 4) {
          if (currentMinuteOfDay >= 420 && currentMinuteOfDay < 1140) {
            isOpen = true;
            text = "Open Now (until 7:00 PM)";
          } else if (currentMinuteOfDay < 420) {
            text = "Opens Today at 7:00 AM";
          } else {
            text = "Closed for the Evening";
          }
        } else if (day === 5) {
          if (currentMinuteOfDay >= 420 && currentMinuteOfDay < 960) {
            isOpen = true;
            text = "Open Now (until 4:00 PM)";
          } else if (currentMinuteOfDay < 420) {
            text = "Opens Today at 7:00 AM";
          } else {
            text = "Closed for the Weekend";
          }
        } else {
          text = "Closed for the Weekend (Opens Mon 7:00 AM)";
        }

        setCurrentStatus({ isOpen, text });
      } catch (e) {
        setCurrentStatus({ isOpen: true, text: "Open Mon–Fri from 7:00 AM" });
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="location-section section-padding" id="location">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="text-eyebrow">
            <MapPin size={15} /> VISIT OUR PRACTICE
          </span>
          <h2 className="h2-section">Our Roanoke Office & Hours</h2>
          <p className="text-lead">
            Conveniently situated in southwest Roanoke on Franklin Road with ample free parking and early morning hours to accommodate your busy family schedule.
          </p>
        </div>

        {/* Location & Hours Grid */}
        <div className="location-grid">
          {/* Left Column: Office Address, Direct Actions & Map View */}
          <div className="location-card address-column">
            <div className="location-card-header">
              <div className="address-icon-wrap">
                <MapPin size={24} />
              </div>
              <div>
                <span className="location-tag">Primary Practice Facility</span>
                <h3 className="location-title">Hunting Hills Family Dentistry</h3>
              </div>
            </div>

            <div className="address-details">
              <p className="address-line">
                <strong>{PRACTICE_INFO.address.street}</strong><br />
                {PRACTICE_INFO.address.city}, {PRACTICE_INFO.address.state} {PRACTICE_INFO.address.zip}
              </p>
              <p className="address-note">Located right off Route 220 in the Hunting Hills corridor.</p>
            </div>

            <div className="contact-links-grid">
              <a href={`tel:${PRACTICE_INFO.phoneRaw}`} className="contact-link-item">
                <Phone size={18} className="text-teal" />
                <div className="contact-link-text">
                  <span>Telephone</span>
                  <strong>{PRACTICE_INFO.phone}</strong>
                </div>
              </a>

              <a href={`mailto:${PRACTICE_INFO.email}`} className="contact-link-item">
                <Mail size={18} className="text-teal" />
                <div className="contact-link-text">
                  <span>Direct Inquiries</span>
                  <strong>{PRACTICE_INFO.email}</strong>
                </div>
              </a>
            </div>

            {/* Interactive Map Visual */}
            <div className="map-embed-wrapper">
              <iframe
                title="Hunting Hills Family Dentistry Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.280145610813!2d-79.9600749234851!3d37.22870427212791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d0d5efd5e4a8b%3A0x6b42b93fcb9c3f3a!2sHunting%20Hills%20Family%20Dentistry!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="directions-cta-wrap">
              <a
                href={PRACTICE_INFO.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-navy full-width"
                id="get-directions-btn"
              >
                <Navigation size={16} />
                <span>Get Driving Directions</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Office Hours Table & Status Badge */}
          <div className="location-card hours-column">
            <div className="location-card-header">
              <div className="address-icon-wrap hours-icon-wrap">
                <Clock size={24} />
              </div>
              <div>
                <span className="location-tag">Our Regular Schedule</span>
                <h3 className="location-title">Office Hours</h3>
              </div>
            </div>

            {/* Live Open Status Indicator */}
            <div className={`live-status-badge ${currentStatus.isOpen ? 'status-open' : 'status-closed'}`}>
              <span className="status-pulse-dot" />
              <div className="status-text-block">
                <span className="status-title">{currentStatus.isOpen ? 'Open Today' : 'Office Status'}</span>
                <span className="status-detail">{currentStatus.text}</span>
              </div>
            </div>

            {/* Verified Hours Table */}
            <div className="hours-table">
              {PRACTICE_INFO.hours.map((schedule, idx) => (
                <div
                  key={idx}
                  className={`hours-row ${!schedule.isOpen ? 'hours-closed-row' : ''}`}
                >
                  <span className="day-label">{schedule.day}</span>
                  <div className="time-display">
                    {schedule.isOpen ? (
                      <span className="time-open">
                        {schedule.open} — {schedule.close}
                      </span>
                    ) : (
                      <span className="time-closed">Closed</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Patient Scheduling Note */}
            <div className="hours-note-box">
              <p>
                <strong>Extended Appointments:</strong> Early 7:00 AM visits allow you to complete hygiene checkups or major restorative appointments without taking time off work or missing school.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .location-section {
          background-color: var(--color-bg-warm);
          border-bottom: 1px solid var(--color-border);
        }

        .location-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 32px;
          align-items: start;
        }

        .location-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          padding: clamp(28px, 4vw, 40px);
        }

        .location-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .address-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background-color: var(--color-bg-soft);
          color: var(--color-teal-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hours-icon-wrap {
          color: var(--color-primary);
        }

        .location-tag {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-teal-dark);
          display: block;
          margin-bottom: 2px;
        }

        .location-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .address-details {
          margin-bottom: 24px;
        }

        .address-line {
          font-size: 18px;
          color: var(--color-text-dark);
          line-height: 1.4;
          margin-bottom: 6px;
        }

        .address-note {
          font-size: 14px;
          color: var(--color-text-muted);
        }

        .contact-links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 24px;
        }

        .contact-link-item {
          background: var(--color-bg-soft);
          padding: 12px 14px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-subtle);
          display: flex;
          align-items: center;
          gap: 12px;
          transition: background-color var(--transition-fast), border-color var(--transition-fast);
        }

        .contact-link-item:hover {
          background-color: var(--color-teal-light);
          border-color: var(--color-teal);
        }

        .contact-link-text {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
        }

        .contact-link-text span {
          font-size: 11px;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contact-link-text strong {
          font-size: 13.5px;
          color: var(--color-primary);
        }

        .map-embed-wrapper {
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--color-border);
          margin-bottom: 20px;
          background: #E8F4F7;
        }

        .directions-cta-wrap .btn {
          width: 100%;
        }

        /* Live Status Badge */
        .live-status-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 18px;
          border-radius: var(--radius-md);
          margin-bottom: 24px;
          border: 1px solid transparent;
        }

        .status-open {
          background-color: var(--color-success-bg);
          border-color: rgba(30, 135, 93, 0.25);
          color: var(--color-success);
        }

        .status-closed {
          background-color: var(--color-bg-soft);
          border-color: var(--color-border);
          color: var(--color-text-muted);
        }

        .status-pulse-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: currentColor;
          box-shadow: 0 0 8px currentColor;
        }

        .status-text-block {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
        }

        .status-title {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .status-detail {
          font-size: 14px;
          font-weight: 600;
          color: var(--color-primary);
        }

        /* Hours Table */
        .hours-table {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--color-border-subtle);
          margin-bottom: 24px;
        }

        .hours-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 4px;
          border-bottom: 1px solid var(--color-border-subtle);
          font-size: 15px;
        }

        .hours-row:last-child {
          border-bottom: none;
        }

        .day-label {
          font-family: var(--font-heading);
          font-weight: 600;
          color: var(--color-primary);
        }

        .time-open {
          font-weight: 600;
          color: var(--color-text-dark);
        }

        .time-closed {
          font-weight: 600;
          color: #A0B5BD;
        }

        .hours-closed-row .day-label {
          color: var(--color-text-muted);
        }

        .hours-note-box {
          background: var(--color-bg-warm);
          padding: 16px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-subtle);
          font-size: 13.5px;
          line-height: 1.5;
          color: var(--color-text-muted);
        }

        .hours-note-box strong {
          color: var(--color-primary);
        }

        @media (max-width: 960px) {
          .location-grid {
            grid-template-columns: 1fr;
          }
          .contact-links-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
