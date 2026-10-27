import React from 'react';
import { Heart, Cpu, Award, Coffee, Check, ArrowRight } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

export default function WhyHuntingHills({ onOpenAppointment }) {
  const pillars = [
    {
      icon: Heart,
      title: "Personalized Care",
      desc: "No rushed treatments or one-size-fits-all recommendations. We listen to your goals and tailor clinical plans that respect your health and budget."
    },
    {
      icon: Cpu,
      title: "Modern Treatment Options",
      desc: "From digital ultra-low radiation X-rays to TeethXpress® immediate restoration protocols and Invisalign® digital simulation."
    },
    {
      icon: Award,
      title: "Experienced Team",
      desc: "Decades of combined clinical skill with doctors educated at The Medical College of Virginia, JMU, and UMMC."
    },
    {
      icon: Coffee,
      title: "Comfort-Focused Experience",
      desc: "Designed from the ground up to reduce anxiety. Enjoy a calm, welcoming environment with gentle anesthesia and compassionate care."
    }
  ];

  return (
    <section className="why-section section-padding" id="why-us">
      <div className="container">
        {/* Editorial Top Headline with Generous Whitespace */}
        <div className="why-intro-block">
          <div className="why-eyebrow-row">
            <span className="text-eyebrow">A REFRESHING PHILOSOPHY</span>
            <div className="eyebrow-line" />
          </div>
          <h2 className="why-main-heading">
            More than a dental visit.<br />
            <span className="heading-accent">A health partnership you can trust for life.</span>
          </h2>
          <p className="why-main-lead">
            At Hunting Hills Family Dentistry, we believe world-class dentistry combines advanced clinical technology with genuine, unhurried human connection. We respect your time, listen attentively to your concerns, and treat every member of your family like our own.
          </p>
        </div>

        {/* Large Cinematic Imagery + Editorial Narrative Grid */}
        <div className="why-content-grid">
          {/* Left: Authentic Project Hero Image with Editorial Floating Badge */}
          <div className="why-image-column">
            <div className="why-image-card">
              <img
                src="/assets/hero/hero-slide-2.webp"
                alt="Hunting Hills Family Dentistry practice environment"
                className="why-primary-image"
                loading="lazy"
              />
              <div className="why-image-overlay" />
              
              <div className="why-floating-badge">
                <span className="badge-stat">25+</span>
                <div className="badge-text">
                  <strong>Years in Roanoke</strong>
                  <span>Serving generations of families</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Four Pillars of Care */}
          <div className="why-pillars-column">
            <div className="pillars-list">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="pillar-row">
                    <div className="pillar-icon-box">
                      <Icon size={20} />
                    </div>
                    <div className="pillar-text-group">
                      <h3 className="pillar-title">{pillar.title}</h3>
                      <p className="pillar-desc">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="why-cta-row">
              <button
                onClick={onOpenAppointment}
                className="btn btn-primary btn-lg"
                id="why-schedule-btn"
              >
                <span>Experience the Difference</span>
                <span className="btn-arrow">→</span>
              </button>

              <div className="quick-guarantee">
                <Check size={16} className="text-teal" />
                <span>New patients & emergencies welcome</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .why-section {
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--color-border);
          position: relative;
        }

        .why-intro-block {
          max-width: 880px;
          margin-bottom: clamp(48px, 6vw, 72px);
        }

        .why-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .eyebrow-line {
          height: 1px;
          flex-grow: 1;
          max-width: 140px;
          background: var(--color-teal);
        }

        .why-main-heading {
          font-size: clamp(34px, 4.4vw, 54px);
          line-height: 1.15;
          color: var(--color-primary);
          margin-bottom: 24px;
        }

        .heading-accent {
          color: var(--color-teal-dark);
          font-weight: 600;
        }

        .why-main-lead {
          font-size: clamp(17px, 1.3vw, 20px);
          line-height: 1.65;
          color: var(--color-text-muted);
        }

        /* Content Grid */
        .why-content-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: center;
        }

        .why-image-card {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1px solid var(--color-border);
          box-shadow: none;
        }

        .why-primary-image {
          width: 100%;
          height: 520px;
          object-fit: cover;
          display: block;
          transition: transform 600ms ease;
        }

        .why-image-card:hover .why-primary-image {
          transform: scale(1.03);
        }

        .why-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(23, 59, 77, 0) 60%, rgba(15, 38, 51, 0.4) 100%);
          pointer-events: none;
        }

        .why-floating-badge {
          position: absolute;
          bottom: 24px;
          left: 24px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 16px 22px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: none;
        }

        .badge-stat {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 800;
          color: var(--color-orange);
          line-height: 1;
        }

        .badge-text {
          display: flex;
          flex-direction: column;
          line-height: 1.3;
        }

        .badge-text strong {
          color: var(--color-primary);
          font-size: 14px;
        }

        .badge-text span {
          font-size: 12px;
          color: var(--color-text-muted);
        }

        /* Pillars Column */
        .pillars-list {
          display: flex;
          flex-direction: column;
          gap: 28px;
          margin-bottom: 40px;
        }

        .pillar-row {
          display: flex;
          align-items: flex-start;
          gap: 18px;
        }

        .pillar-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background-color: var(--color-bg-soft);
          color: var(--color-teal-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
          transition: background-color var(--transition-fast), transform var(--transition-fast);
        }

        .pillar-row:hover .pillar-icon-box {
          background-color: var(--color-teal-light);
          transform: translateY(-2px);
        }

        .pillar-title {
          font-family: var(--font-heading);
          font-size: 19px;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 6px;
        }

        .pillar-desc {
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .why-cta-row {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .quick-guarantee {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 600;
          color: var(--color-primary);
        }

        @media (max-width: 960px) {
          .why-content-grid {
            grid-template-columns: 1fr;
          }
          .why-primary-image {
            height: 380px;
          }
        }
      `}</style>
    </section>
  );
}
