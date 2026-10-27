import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  SlidersHorizontal, 
  X, 
  Maximize2,
  Camera,
  Layers
} from 'lucide-react';
import { SMILE_GALLERY_CASES } from '../data/practiceData';

export default function SmileGallerySection({ onBookAppointment }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCase, setSelectedCase] = useState(null);
  const [comparisonPositions, setComparisonPositions] = useState({});

  const categories = [
    'All',
    'Cosmetic Veneers',
    'Invisalign®',
    'TeethXpress® & Implants',
    'Restorative Crowns'
  ];

  const filteredCases = activeCategory === 'All'
    ? SMILE_GALLERY_CASES
    : SMILE_GALLERY_CASES.filter(c => c.category === activeCategory);

  const handleSliderMove = (caseId, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 100);
    setComparisonPositions(prev => ({ ...prev, [caseId]: percent }));
  };

  return (
    <section className="gallery-section section-padding" id="gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="text-eyebrow">
            <Camera size={15} /> REAL PATIENT TRANSFORMATIONS
          </span>
          <h2 className="h2-section">Smile Gallery: Before & After Results</h2>
          <p className="text-lead">
            Explore authentic cosmetic, restorative, and implant smile transformations performed by Dr. Richard D. Smith II and our Roanoke dental team.
          </p>
        </div>

        {/* Category Filters */}
        <div className="gallery-filters-row">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-pill-btn ${activeCategory === cat ? 'filter-pill-active' : ''}`}
            >
              <span>{cat}</span>
              {cat === 'All' && <span className="filter-count">{SMILE_GALLERY_CASES.length}</span>}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="gallery-grid">
          {filteredCases.map((item) => {
            const sliderPos = comparisonPositions[item.id] !== undefined ? comparisonPositions[item.id] : 50;

            return (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => setSelectedCase(item)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedCase(item);
                  }
                }}
                aria-label={`View transformation details for ${item.title}`}
              >
                {/* Visual Before / After Canvas */}
                <div className="gallery-card-media">
                  <img
                    src={item.compositeImage}
                    alt={`${item.title} - Before and After`}
                    className="gallery-composite-img"
                    loading="lazy"
                  />

                  {/* Left / Right Distinct Overlays */}
                  <div className="before-after-divider-line" />
                  
                  <span className="badge-tag badge-tag-before">
                    <span>BEFORE</span>
                  </span>

                  <span className="badge-tag badge-tag-after">
                    <span>AFTER</span>
                  </span>

                  <div className="gallery-hover-overlay">
                    <span className="expand-pill">
                      <Maximize2 size={14} /> Click to Inspect Case
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="gallery-card-body">
                  <div className="gallery-card-header-row">
                    <span className="gallery-category-tag">{item.category}</span>
                    <span className="gallery-case-num">{item.tag}</span>
                  </div>

                  <h3 className="gallery-card-title">{item.title}</h3>
                  <p className="gallery-procedure">
                    <strong>Procedure:</strong> {item.procedure}
                  </p>
                  <p className="gallery-desc">{item.description}</p>

                  <div className="gallery-card-footer">
                    <span className="gallery-inspect-link">
                      <span>View Full Case & Protocol</span>
                      <span className="btn-arrow">→</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Disclaimer & Consultation Action */}
        <div className="gallery-bottom-banner">
          <div className="gallery-banner-left">
            <CheckCircle2 size={24} className="text-teal flex-shrink-0" />
            <div>
              <h4>Ready to transform your own smile?</h4>
              <p>
                Every smile makeover is customized to your unique facial aesthetics and oral health. Schedule a private consultation with Dr. Smith today.
              </p>
            </div>
          </div>
          <button
            onClick={() => onBookAppointment('Smile Gallery Consultation')}
            className="btn btn-primary btn-lg"
            id="gallery-consultation-btn"
          >
            <span>Request Smile Consultation</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Case Lightbox / Detail Modal */}
      {selectedCase && (
        <div className="modal-backdrop" onClick={() => setSelectedCase(null)} role="dialog" aria-modal="true">
          <div className="modal-dialog gallery-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedCase(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="gallery-modal-header">
              <div className="modal-badges">
                <span className="modal-service-num">{selectedCase.category}</span>
                <span className="modal-badge">{selectedCase.tag}</span>
              </div>
              <h2 className="modal-title">{selectedCase.title}</h2>
              <p className="modal-procedure-title">
                <strong>Clinical Procedure:</strong> {selectedCase.procedure}
              </p>
            </div>

            {/* Side by Side Enlarged Showcase */}
            <div className="gallery-modal-media-wrap">
              <div className="modal-comparison-grid">
                <div className="comparison-side">
                  <div className="comparison-img-box">
                    <img
                      src={selectedCase.beforeImage}
                      alt="Before treatment"
                      className="comparison-img"
                    />
                    <span className="side-label label-before">BEFORE TREATMENT</span>
                  </div>
                </div>
                <div className="comparison-side">
                  <div className="comparison-img-box">
                    <img
                      src={selectedCase.afterImage}
                      alt="After treatment"
                      className="comparison-img"
                    />
                    <span className="side-label label-after">AFTER TREATMENT</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="gallery-modal-narrative">
              <h4>Case Clinical Notes</h4>
              <p>{selectedCase.description}</p>
              <p className="disclaimer-text">
                * Real patient clinical photography from Hunting Hills Family Dentistry. Individual clinical outcomes depend on personal oral anatomy and biological response.
              </p>
            </div>

            <div className="modal-cta-box">
              <div className="modal-cta-text">
                <h4>Interested in a similar transformation?</h4>
                <p>Speak with our Roanoke dental team to review treatment options and pricing.</p>
              </div>
              <div className="modal-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedCase(null);
                    onBookAppointment(`Consultation for ${selectedCase.title}`);
                  }}
                >
                  <Calendar size={16} />
                  <span>Request Consultation</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-section {
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--color-border);
          position: relative;
        }

        .gallery-filters-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .filter-pill-btn {
          background: var(--color-bg-warm);
          border: 1px solid var(--color-border);
          padding: 10px 20px;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          color: var(--color-primary);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all var(--transition-fast);
        }

        .filter-pill-btn:hover {
          border-color: var(--color-teal);
          background-color: var(--color-bg-soft);
          transform: translateY(-2px);
        }

        .filter-pill-active {
          background-color: var(--color-primary);
          color: #FFFFFF;
          border-color: var(--color-primary);
          box-shadow: 0 4px 12px rgba(23, 59, 77, 0.2);
        }

        .filter-count {
          background: rgba(85, 183, 201, 0.22);
          color: var(--color-teal-dark);
          font-size: 11px;
          padding: 2px 7px;
          border-radius: 99px;
        }
        .filter-pill-active .filter-count {
          background: rgba(255, 255, 255, 0.25);
          color: #FFFFFF;
        }

        /* Gallery Grid */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 64px;
        }

        .gallery-card {
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          cursor: pointer;
          transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 300ms cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 300ms cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
        }

        .gallery-card:hover, .gallery-card:focus-visible {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-teal);
        }

        .gallery-card-media {
          position: relative;
          height: 190px;
          background: #000000;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gallery-composite-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-card:hover .gallery-composite-img {
          transform: scale(1.05);
        }

        .before-after-divider-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
          pointer-events: none;
          z-index: 2;
        }

        .badge-tag {
          position: absolute;
          top: 12px;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
          z-index: 3;
        }

        .badge-tag-before {
          left: 12px;
          background: rgba(15, 38, 51, 0.85);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .badge-tag-after {
          right: 12px;
          background: var(--color-orange);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.4);
        }

        .gallery-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 38, 51, 0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
          z-index: 4;
        }

        .gallery-card:hover .gallery-hover-overlay {
          opacity: 1;
        }

        .expand-pill {
          background: #FFFFFF;
          color: var(--color-primary);
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          transform: translateY(6px);
          transition: transform var(--transition-fast);
        }

        .gallery-card:hover .expand-pill {
          transform: translateY(0);
        }

        /* Card Content */
        .gallery-card-body {
          padding: 22px 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .gallery-card-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .gallery-category-tag {
          font-size: 11.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-teal-dark);
        }

        .gallery-case-num {
          font-size: 11.5px;
          font-weight: 600;
          color: var(--color-text-light);
          background: var(--color-bg-soft);
          padding: 2px 8px;
          border-radius: 99px;
        }

        .gallery-card-title {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1.3;
          margin-bottom: 8px;
        }

        .gallery-procedure {
          font-size: 13px;
          color: var(--color-text-dark);
          margin-bottom: 8px;
        }

        .gallery-procedure strong {
          color: var(--color-primary);
        }

        .gallery-desc {
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 18px;
          flex-grow: 1;
        }

        .gallery-card-footer {
          border-top: 1px solid var(--color-border-subtle);
          padding-top: 14px;
        }

        .gallery-inspect-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 13.5px;
          font-weight: 700;
          color: var(--color-primary);
          transition: color var(--transition-fast);
        }

        .gallery-card:hover .gallery-inspect-link {
          color: var(--color-orange);
        }

        .gallery-card:hover .btn-arrow {
          transform: translateX(5px);
        }

        /* Bottom Callout Banner */
        .gallery-bottom-banner {
          background: var(--color-bg-soft);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          padding: 32px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          box-shadow: var(--shadow-sm);
        }

        .gallery-banner-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .gallery-banner-left h4 {
          font-size: 20px;
          color: var(--color-primary);
          margin-bottom: 4px;
        }

        .gallery-banner-left p {
          font-size: 15px;
          color: var(--color-text-muted);
          max-width: 650px;
        }

        /* Lightbox Modal */
        .gallery-modal-dialog {
          max-width: 820px !important;
        }

        .gallery-modal-header {
          margin-bottom: 24px;
        }

        .modal-procedure-title {
          font-size: 15px;
          color: var(--color-teal-dark);
        }

        .gallery-modal-media-wrap {
          margin-bottom: 24px;
        }

        .modal-comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .comparison-img-box {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #000000;
          box-shadow: var(--shadow-md);
          height: 260px;
        }

        .comparison-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .side-label {
          position: absolute;
          bottom: 12px;
          left: 12px;
          padding: 5px 12px;
          border-radius: var(--radius-sm);
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          box-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }

        .label-before {
          background: rgba(15, 38, 51, 0.9);
          color: #FFFFFF;
        }

        .label-after {
          background: var(--color-orange);
          color: #FFFFFF;
        }

        .gallery-modal-narrative {
          background: var(--color-bg-warm);
          padding: 22px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          margin-bottom: 24px;
        }

        .gallery-modal-narrative h4 {
          font-size: 16px;
          color: var(--color-primary);
          margin-bottom: 8px;
        }

        .gallery-modal-narrative p {
          font-size: 15px;
          color: var(--color-text-dark);
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .disclaimer-text {
          font-size: 12.5px !important;
          color: var(--color-text-muted) !important;
          margin-bottom: 0 !important;
          font-style: italic;
        }

        @media (max-width: 1080px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 720px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
          .gallery-bottom-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 24px;
          }
          .gallery-bottom-banner .btn {
            width: 100%;
          }
          .modal-comparison-grid {
            grid-template-columns: 1fr;
          }
          .comparison-img-box {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
