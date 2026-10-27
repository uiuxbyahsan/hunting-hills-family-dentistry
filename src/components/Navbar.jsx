import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin, ChevronRight } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

export default function Navbar({ onOpenAppointment }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Team', href: '#team' },
    { label: 'About', href: '#why-us' },
    { label: 'Contact', href: '#location' },
  ];

  const mobileNavLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Smile Gallery', href: '#gallery' },
    { label: 'Our Team', href: '#team' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Patient Resources', href: '#resources' },
    { label: 'Location & Hours', href: '#location' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Main Sticky Navbar */}
      <header className={`site-header ${isScrolled ? 'site-header-scrolled' : ''}`}>
        <div className="container header-container">
          {/* Brand Logo */}
          <a href="#" className="brand-link" aria-label="Hunting Hills Family Dentistry Home">
            <img
              src="/assets/brand/5b16deaa28187_logo.png.webp"
              alt="Hunting Hills Family Dentistry"
              className="brand-logo"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="nav-item"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="header-actions">
            <a href={`tel:${PRACTICE_INFO.phoneRaw}`} className="header-phone" title={`Call ${PRACTICE_INFO.phone}`}>
              <span className="phone-icon-wrap">
                <Phone size={15} />
              </span>
              <span className="phone-number">{PRACTICE_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenAppointment}
              className="btn btn-primary nav-cta-btn"
              id="nav-book-appointment-btn"
            >
              <Calendar size={16} />
              <span>Book Online</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer-open' : ''}`}>
          <div className="mobile-drawer-content">
            <div className="mobile-links">
              {mobileNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="mobile-nav-item"
                >
                  <span>{link.label}</span>
                  <ChevronRight size={18} className="chevron" />
                </a>
              ))}
            </div>

            <div className="mobile-footer-actions">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="btn btn-primary btn-lg full-width"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
                <span className="btn-arrow">→</span>
              </button>

              <a
                href={`tel:${PRACTICE_INFO.phoneRaw}`}
                className="btn btn-secondary btn-lg full-width phone-call-btn"
              >
                <Phone size={18} />
                <span>Call {PRACTICE_INFO.phone}</span>
              </a>

              <div className="mobile-hours-snippet">
                <p><strong>Office Hours:</strong></p>
                <p>Monday – Thursday: 7:00 AM – 7:00 PM</p>
                <p>Friday: 7:00 AM – 4:00 PM</p>
                <p>Saturday & Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <style>{`
        .top-banner {
          background-color: var(--color-primary-dark);
          color: rgba(255, 255, 255, 0.85);
          font-size: 13px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          z-index: 101;
        }
        .top-banner-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 6px;
          padding-bottom: 6px;
        }
        .top-banner-left, .top-banner-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .banner-pill {
          background: rgba(85, 183, 201, 0.22);
          color: var(--color-teal);
          font-weight: 700;
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 99px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .banner-text {
          font-weight: 500;
        }
        .hours-quick {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.7);
        }
        .top-phone-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #FFFFFF;
          font-weight: 600;
        }
        .top-phone-link:hover {
          color: var(--color-teal);
        }

        /* Sticky Header */
        .site-header {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background-color: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(23, 59, 77, 0.08);
          transition: all var(--transition-normal);
        }
        .site-header-scrolled {
          background-color: rgba(255, 255, 255, 0.98);
          box-shadow: var(--shadow-sm);
          border-bottom-color: var(--color-border);
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
          transition: height var(--transition-fast);
        }
        .site-header-scrolled .header-container {
          height: 68px;
        }
        .brand-link {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .brand-logo {
          height: 46px;
          width: auto;
          object-fit: contain;
          transition: height var(--transition-fast);
        }
        .site-header-scrolled .brand-logo {
          height: 40px;
        }

        /* Desktop Nav */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-item {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 600;
          color: var(--color-primary);
          position: relative;
          padding: 6px 0;
          text-decoration: none;
          transition: color var(--transition-fast);
        }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-teal);
          transition: width var(--transition-fast);
          border-radius: 2px;
        }
        .nav-item:hover {
          color: var(--color-teal-dark);
        }
        .nav-item:hover::after {
          width: 100%;
        }

        /* Header Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .header-phone {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 999px;
          background-color: var(--color-bg-soft);
          color: var(--color-primary);
          text-decoration: none;
          transition: all var(--transition-fast);
        }
        .phone-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-teal-dark);
        }
        .phone-number {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: -0.01em;
          white-space: nowrap;
        }
        .header-phone:hover {
          background-color: var(--color-teal-light);
          color: var(--color-teal-dark);
        }
        .header-phone:hover .phone-number {
          color: var(--color-primary-dark);
        }
        .nav-cta-btn {
          font-size: 14px;
          font-weight: 600;
          padding: 10px 18px;
          display: flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
        }

        .mobile-toggle-btn {
          display: none;
          background: none;
          border: none;
          color: var(--color-primary);
          cursor: pointer;
          padding: 8px;
          border-radius: var(--radius-sm);
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 100%;
          left: 0;
          width: 100%;
          height: calc(100vh - 76px);
          background-color: #FFFFFF;
          transform: translateY(-120%);
          opacity: 0;
          pointer-events: none;
          transition: transform 350ms cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 250ms ease;
          overflow-y: auto;
          z-index: 99;
          box-shadow: var(--shadow-md);
        }
        .mobile-drawer-open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }
        .mobile-drawer-content {
          padding: 24px 20px 48px 20px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .mobile-links {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--color-border);
        }
        .mobile-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 4px;
          border-bottom: 1px solid var(--color-border);
          font-family: var(--font-heading);
          font-size: 17px;
          font-weight: 600;
          color: var(--color-primary);
          text-decoration: none;
        }
        .mobile-nav-item .chevron {
          color: var(--color-text-light);
        }
        .mobile-footer-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .full-width {
          width: 100%;
        }
        .phone-call-btn {
          background-color: var(--color-bg-soft);
          border-color: rgba(23, 59, 77, 0.1);
        }
        .mobile-hours-snippet {
          background: var(--color-bg-warm);
          padding: 16px;
          border-radius: var(--radius-md);
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.5;
        }
        .mobile-hours-snippet p strong {
          color: var(--color-primary);
        }

        /* Responsive Breakpoints */
        @media (max-width: 960px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
          }
          .header-phone {
            display: none;
          }
        }
        @media (max-width: 580px) {
          .nav-cta-btn {
            display: none;
          }
          .brand-logo {
            height: 36px;
          }
          .header-container {
            height: 64px;
          }
        }
      `}</style>
    </>
  );
}
