import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Smile, Layers } from 'lucide-react';
import { PRACTICE_INFO } from '../data/practiceData';

export default function FeaturedTreatments({ onOpenAppointment }) {
  const treatments = [
    {
      id: "implants-feature",
      tag: "PERMANENT RESTORATION",
      headline: "Dental Implants: The Gold Standard for Missing Teeth",
      lead: "Before modern dental implants, loose dentures or invasive tooth-supported bridges were the only alternatives. Implants restore complete function, aesthetics, and bone preservation.",
      body: "An implant functions like a natural root, fusing permanently with your jawbone to provide unwavering stability. You can eat your favorite meals, speak with total clarity, and smile with effortless confidence knowing your teeth will never slip.",
      benefits: [
        "100% natural bite strength restored",
        "Prevents jawbone deterioration & sunken facial contours",
        "No adjacent teeth ground down or compromised",
        "Engineered for decades or a lifetime of dependable use"
      ],
      image: "/assets/brand/implants-treatment.webp",
      imageAlt: "Advanced dental implants precision model",
      badge: "Lifetime Stability",
      ctaText: "Consult on Dental Implants",
      reverse: false
    },
    {
      id: "invisalign-feature",
      tag: "DISCREET ORTHODONTICS",
      headline: "Invisalign® Clear Aligners: Your Smile, Realigned Digitally",
      lead: "Achieve the aligned, radiant smile you've always desired without unsightly metal brackets or intrusive wires.",
      body: "Hunting Hills Family Dentistry provides custom Invisalign® treatment backed by high-resolution digital scanning. We create a step-by-step 3D roadmap so you can visualize your future smile before starting. The aligners are crystal clear, smooth, and easily removed for meals and brushing.",
      benefits: [
        "Virtually invisible SmartTrack® medical-grade polymer",
        "Removable anytime for dining, brushing, and special events",
        "No painful wire tightening or emergency bracket appointments",
        "Custom computerized digital plan tailored to your timeline"
      ],
      image: "/assets/brand/Invisalign.png.webp",
      imageAlt: "Invisalign Clear Aligners certified provider",
      badge: "Invisalign® Provider",
      ctaText: "Explore Invisalign® Options",
      reverse: true
    },
    {
      id: "teethxpress-feature",
      tag: "SAME-DAY REHABILITATION",
      headline: "TeethXpress®: Secure, Natural-Looking Teeth in One Day",
      lead: "Say goodbye to loose, slipping dentures and messy adhesives. TeethXpress® secures a full arch of teeth in a single visit.",
      body: "As certified TeethXpress® specialists in Roanoke, Dr. Smith and our clinical team utilize precision implant technology to anchor a natural-looking, permanent set of teeth onto 4 to 6 biocompatible implants. Walk into our office with failing dentition and leave the very same day with a secure, functional smile.",
      benefits: [
        "Complete full-arch stabilization in as little as one day",
        "No bulky acrylic roof covering your palate — taste food fully",
        "Eliminates painful gum sores, slipping, and adhesives forever",
        "Certified clinical provider offering high-precision care"
      ],
      image: "/assets/brand/Certified-Provider-TeethXpress.png.webp",
      imageAlt: "Certified TeethXpress Provider Hunting Hills Family Dentistry",
      badge: "Certified TeethXpress®",
      ctaText: "Learn About Same-Day Teeth",
      reverse: false
    }
  ];

  return (
    <section className="featured-treatments-section" id="featured-treatments">
      <div className="container">
        {/* Section Intro */}
        <div className="section-header">
          <span className="text-eyebrow">
            <Sparkles size={15} /> SPECIALIZED PROCEDURES
          </span>
          <h2 className="h2-section">Advanced Treatments, Exceptional Results</h2>
          <p className="text-lead">
            Explore our three signature restorative and cosmetic dental treatments, each delivered with gentle precision and modern digital technology.
          </p>
        </div>

        {/* Alternating Treatment Blocks */}
        <div className="treatments-stack">
          {treatments.map((t, idx) => (
            <div
              key={t.id}
              id={t.id}
              className={`treatment-block ${t.reverse ? 'treatment-reverse' : ''}`}
            >
              {/* Media Container */}
              <div className="treatment-media-wrap">
                <div className="treatment-card-canvas">
                  <img
                    src={t.image}
                    alt={t.imageAlt}
                    className="treatment-img"
                    loading="lazy"
                  />
                  <div className="treatment-badge-tag">
                    <ShieldCheck size={14} className="text-teal" />
                    <span>{t.badge}</span>
                  </div>
                </div>
              </div>

              {/* Content Narrative */}
              <div className="treatment-text-content">
                <span className="text-eyebrow text-eyebrow-orange">{t.tag}</span>
                <h3 className="treatment-headline">{t.headline}</h3>
                <p className="treatment-lead">{t.lead}</p>
                <p className="treatment-body">{t.body}</p>

                {/* Benefits Checklist */}
                <div className="treatment-benefits-list">
                  {t.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="benefit-row">
                      <CheckCircle2 size={18} className="benefit-icon" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="treatment-actions">
                  <button
                    onClick={onOpenAppointment}
                    className="btn btn-primary"
                    id={`treatment-${t.id}-cta`}
                  >
                    <span>{t.ctaText}</span>
                    <span className="btn-arrow">→</span>
                  </button>
                  <a
                    href={`tel:${PRACTICE_INFO.phoneRaw}`}
                    className="btn btn-secondary"
                  >
                    <span>Ask a Question</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .featured-treatments-section {
          background-color: #FFFFFF;
          padding-top: clamp(64px, 8vw, 112px);
          padding-bottom: clamp(64px, 8vw, 112px);
          border-bottom: 1px solid var(--color-border);
        }

        .treatments-stack {
          display: flex;
          flex-direction: column;
          gap: clamp(64px, 9vw, 120px);
        }

        .treatment-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: center;
        }

        .treatment-reverse {
          direction: rtl;
        }

        .treatment-reverse > * {
          direction: ltr;
        }

        .treatment-media-wrap {
          position: relative;
        }

        .treatment-card-canvas {
          background: var(--color-bg-soft);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: clamp(24px, 4vw, 48px);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          min-height: 380px;
          overflow: hidden;
        }

        .treatment-img {
          max-height: 320px;
          max-width: 100%;
          object-fit: contain;
          transition: transform var(--transition-normal);
        }

        .treatment-card-canvas:hover .treatment-img {
          transform: scale(1.04);
        }

        .treatment-badge-tag {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border: 1px solid var(--color-border);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          color: var(--color-primary);
        }

        /* Text Content */
        .treatment-text-content {
          display: flex;
          flex-direction: column;
        }

        .treatment-text-content .text-eyebrow {
          margin-bottom: 12px;
        }

        .treatment-headline {
          font-size: clamp(28px, 3.2vw, 40px);
          color: var(--color-primary);
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .treatment-lead {
          font-size: 17px;
          line-height: 1.6;
          color: var(--color-text-dark);
          font-weight: 500;
          margin-bottom: 14px;
        }

        .treatment-body {
          font-size: 15.5px;
          line-height: 1.65;
          color: var(--color-text-muted);
          margin-bottom: 24px;
        }

        .treatment-benefits-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
          background: var(--color-bg-warm);
          padding: 20px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-subtle);
        }

        .benefit-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14.5px;
          color: var(--color-text-dark);
          line-height: 1.4;
        }

        .benefit-icon {
          color: var(--color-teal-dark);
          flex-shrink: 0;
          margin-top: 1px;
        }

        .treatment-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        @media (max-width: 960px) {
          .treatment-block {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .treatment-reverse {
            direction: ltr;
          }
          .treatment-card-canvas {
            min-height: 280px;
            padding: 24px;
          }
          .treatment-img {
            max-height: 240px;
          }
        }

        @media (max-width: 640px) {
          .treatments-stack {
            gap: 56px;
          }
          .treatment-card-canvas {
            min-height: 220px;
            padding: 16px;
          }
          .treatment-img {
            max-height: 190px;
          }
          .treatment-badge-tag {
            top: 12px;
            left: 12px;
            font-size: 11px;
            padding: 4px 10px;
          }
          .treatment-headline {
            font-size: 22px;
            margin-bottom: 12px;
          }
          .treatment-lead {
            font-size: 15px;
            margin-bottom: 10px;
          }
          .treatment-body {
            font-size: 14px;
            margin-bottom: 18px;
          }
          .treatment-benefits-list {
            padding: 14px;
            gap: 10px;
            margin-bottom: 20px;
          }
          .benefit-row {
            font-size: 13.5px;
            gap: 10px;
          }
          .treatment-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }
          .treatment-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
