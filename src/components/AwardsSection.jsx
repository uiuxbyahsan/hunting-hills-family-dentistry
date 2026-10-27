import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AWARDS } from '../data/practiceData';

export default function AwardsSection() {
  const certifications = [
    {
      name: "TeethXpress® Certified Provider",
      logo: "/assets/brand/Certified-Provider-TeethXpress.png.webp",
      desc: "Officially certified full-arch immediate implant stabilization center."
    },
    {
      name: "Invisalign® Preferred Provider",
      logo: "/assets/brand/Invisalign.png.webp",
      desc: "Advanced digital clear aligner orthodontics for adults & teens."
    },
    {
      name: "TeethXpress® Immediate Restorations",
      logo: "/assets/brand/TeethXpress_color.png.webp",
      desc: "Same-day permanent implant solutions replacing failing dentures."
    }
  ];

  return (
    <section className="awards-section section-padding-sm" id="awards">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="text-eyebrow">
            <Award size={15} /> EXCELLENCE IN ROANOKE HEALTHCARE
          </span>
          <h2 className="h2-section">Recognized by Our Community</h2>
          <p className="text-lead">
            For years, Roanoke Valley families and <em>The Roanoker Magazine</em> readers have voted Hunting Hills Family Dentistry among the finest dental practices in southwest Virginia.
          </p>
        </div>

        {/* Awards Badges Showcase */}
        <div className="awards-grid">
          {AWARDS.map((award, idx) => (
            <div key={idx} className="award-card">
              <div className="award-badge-wrap">
                <img
                  src={award.image}
                  alt={`${award.year} ${award.tier} - ${award.title}`}
                  className="award-badge-img"
                  loading="lazy"
                />
              </div>
              <div className="award-info">
                <span className="award-year-tag">{award.year} Winner</span>
                <h4 className="award-tier">{award.tier}</h4>
                <p className="award-title">{award.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Provider Certifications Bar */}
        <div className="certifications-banner">
          <div className="cert-intro">
            <span className="cert-eyebrow">CERTIFIED CLINICAL EXCELLENCE</span>
            <h3 className="cert-heading">Specialized Technologies & Accreditations</h3>
            <p className="cert-desc">
              Our clinical team continuously trains with world-class dental engineering partners to bring state-of-the-art procedures home to Roanoke.
            </p>
          </div>

          <div className="cert-logos-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <div className="cert-logo-container">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="cert-logo-img"
                    loading="lazy"
                  />
                </div>
                <div className="cert-card-text">
                  <div className="cert-name-row">
                    <CheckCircle2 size={16} className="text-teal" />
                    <strong>{cert.name}</strong>
                  </div>
                  <p>{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .awards-section {
          background-color: var(--color-bg-warm);
          border-bottom: 1px solid var(--color-border);
        }

        .awards-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 18px;
          margin-bottom: 56px;
        }

        .award-card {
          background: #FFFFFF;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          padding: 20px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform var(--transition-normal), border-color var(--transition-normal);
        }

        .award-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-border-hover);
        }

        .award-badge-wrap {
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }

        .award-badge-img {
          max-height: 90px;
          width: auto;
          object-fit: contain;
          transition: transform var(--transition-fast);
        }

        .award-card:hover .award-badge-img {
          transform: scale(1.04);
        }

        .award-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .award-year-tag {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-teal-dark);
        }

        .award-tier {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .award-title {
          font-size: 12px;
          color: var(--color-text-muted);
          line-height: 1.3;
        }

        /* Certifications Banner */
        .certifications-banner {
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          padding: clamp(28px, 4vw, 44px);
        }

        .cert-intro {
          max-width: 680px;
          margin-bottom: 32px;
        }

        .cert-eyebrow {
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--color-orange);
          text-transform: uppercase;
          display: block;
          margin-bottom: 6px;
        }

        .cert-heading {
          font-size: clamp(22px, 2.4vw, 28px);
          margin-bottom: 8px;
        }

        .cert-desc {
          color: var(--color-text-muted);
          font-size: 15px;
        }

        .cert-logos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .cert-card {
          background: var(--color-bg-soft);
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-md);
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform var(--transition-fast), background-color var(--transition-fast);
        }

        .cert-card:hover {
          transform: translateY(-3px);
          background-color: #FFFFFF;
          border-color: var(--color-border-hover);
        }

        .cert-logo-container {
          height: 60px;
          display: flex;
          align-items: center;
        }

        .cert-logo-img {
          max-height: 52px;
          max-width: 100%;
          object-fit: contain;
        }

        .cert-card-text {
          font-size: 13px;
          color: var(--color-text-muted);
          line-height: 1.45;
        }

        .cert-name-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
          font-family: var(--font-heading);
          font-size: 14px;
          color: var(--color-primary);
        }

        @media (max-width: 1100px) {
          .awards-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 900px) {
          .cert-logos-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .certifications-banner {
            padding: 28px 24px;
          }
        }

        @media (max-width: 680px) {
          .cert-logos-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .certifications-banner {
            padding: 20px 16px;
          }
          .cert-intro {
            margin-bottom: 24px;
          }
        }

        @media (max-width: 600px) {
          .awards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-bottom: 36px;
          }
          .award-card {
            padding: 14px 8px;
          }
          .award-badge-wrap {
            height: 75px;
            margin-bottom: 8px;
          }
          .award-badge-img {
            max-height: 65px;
          }
          .award-tier {
            font-size: 13px;
          }
          .award-title {
            font-size: 11px;
          }
        }

        @media (max-width: 360px) {
          .awards-grid {
            grid-template-columns: 1fr;
          }
          .award-badge-wrap {
            height: 85px;
          }
          .award-badge-img {
            max-height: 75px;
          }
        }
      `}</style>
    </section>
  );
}
