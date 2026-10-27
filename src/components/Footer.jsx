import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { PRACTICE_INFO, SERVICES } from '../data/practiceData';

export default function Footer({ onOpenAppointment }) {
  const quickLinks = [
    { label: 'Our Practice', href: '#why-us' },
    { label: 'All Dental Services', href: '#services' },
    { label: 'Smile Gallery (Before & After)', href: '#gallery' },
    { label: 'Meet Our Doctors', href: '#team' },
    { label: 'Roanoker Awards', href: '#awards' },
    { label: 'Patient Testimonials', href: '#reviews' },
    { label: 'Patient Resources & FAQ', href: '#resources' },
    { label: 'Office Location & Hours', href: '#location' },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Bio */}
          <div className="footer-col brand-col">
            <div className="footer-logo-wrap">
              <img
                src="/assets/brand/5b16deaa28187_logo.png.webp"
                alt="Hunting Hills Family Dentistry"
                className="footer-logo-img"
              />
            </div>
            <p className="footer-brand-desc">
              Providing exceptional cosmetic, restorative, and family dentistry in Roanoke, Virginia. Dedicated to compassionate care, patient comfort, and lifelong oral wellness.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="footer-link"
                  >
                    <ChevronRight size={14} className="link-arrow" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Featured Services</h4>
            <ul className="footer-links-list">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, '#services')}
                    className="footer-link"
                  >
                    <ChevronRight size={14} className="link-arrow" />
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours Snapshot */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Roanoke Office</h4>
            
            <div className="footer-contact-block">
              <div className="contact-row">
                <MapPin size={18} className="text-teal flex-shrink-0" />
                <span>{PRACTICE_INFO.address.full}</span>
              </div>

              <div className="contact-row">
                <Phone size={18} className="text-teal flex-shrink-0" />
                <a href={`tel:${PRACTICE_INFO.phoneRaw}`} className="footer-tel">
                  {PRACTICE_INFO.phone}
                </a>
              </div>

              <div className="contact-row">
                <Mail size={18} className="text-teal flex-shrink-0" />
                <a href={`mailto:${PRACTICE_INFO.email}`} className="footer-email">
                  {PRACTICE_INFO.email}
                </a>
              </div>

              <div className="contact-row">
                <Clock size={18} className="text-teal flex-shrink-0" />
                <div className="footer-hours-text">
                  <span>Mon–Thu: 7:00 AM – 7:00 PM</span><br />
                  <span>Fri: 7:00 AM – 4:00 PM</span><br />
                  <span>Sat–Sun: Closed</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenAppointment}
              className="btn btn-primary btn-sm full-width"
              id="footer-book-btn"
            >
              <span>Book Appointment</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>

        {/* Bottom Legal & Accessibility Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Hunting Hills Family Dentistry. All rights reserved. Dr. Richard D. Smith II, DDS & Associates.
          </p>
          <div className="footer-bottom-links">
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenAppointment(); }}>Online Appointment Request</a>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--color-primary-dark);
          color: rgba(255, 255, 255, 0.85);
          padding-top: clamp(64px, 8vw, 96px);
          padding-bottom: 36px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1.2fr;
          gap: clamp(32px, 4vw, 48px);
          margin-bottom: 64px;
        }

        .footer-logo-wrap {
          background: rgba(255, 255, 255, 0.95);
          display: inline-flex;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          margin-bottom: 20px;
        }

        .footer-logo-img {
          height: 40px;
          width: auto;
          object-fit: contain;
        }

        .footer-brand-desc {
          font-size: 14.5px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.72);
          margin-bottom: 20px;
        }

        .footer-award-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(85, 183, 201, 0.14);
          border: 1px solid rgba(85, 183, 201, 0.28);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          font-size: 12.5px;
          font-weight: 600;
          color: var(--color-teal);
        }

        .footer-heading {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 22px;
          letter-spacing: 0.02em;
        }

        .footer-links-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14.5px;
          color: rgba(255, 255, 255, 0.75);
          transition: color var(--transition-fast), transform var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--color-teal);
          transform: translateX(3px);
        }

        .link-arrow {
          color: var(--color-teal);
        }

        .footer-contact-block {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 24px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.78);
        }

        .contact-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          line-height: 1.45;
        }

        .flex-shrink-0 {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footer-tel, .footer-email {
          color: #FFFFFF;
          font-weight: 600;
        }

        .footer-tel:hover, .footer-email:hover {
          color: var(--color-teal);
        }

        .footer-hours-text {
          line-height: 1.45;
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.55);
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-bottom-links a {
          color: rgba(255, 255, 255, 0.65);
        }

        .footer-bottom-links a:hover {
          color: #FFFFFF;
        }

        .sep {
          color: rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 1040px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .site-footer {
            padding-top: 48px;
            padding-bottom: 28px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            margin-bottom: 40px;
          }
          .footer-link {
            padding: 4px 0;
            font-size: 14px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            padding-top: 20px;
          }
        }
      `}</style>
    </footer>
  );
}
