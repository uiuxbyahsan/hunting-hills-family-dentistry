import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/practiceData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="testimonials-section section-padding" id="reviews">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="text-eyebrow">
            <Star size={15} fill="currentColor" /> PATIENT TESTIMONIALS & REPUTATION
          </span>
          <h2 className="h2-section">What Our Patients Say About Us</h2>
          <p className="text-lead">
            Real feedback from Roanoke families who trust Dr. Smith, Dr. Hutchison, Dr. Simpson, and Dr. Vakay with their lifelong dental care.
          </p>
        </div>

        {/* Large Editorial Testimonial Card */}
        <div className="editorial-testimonial-card">
          <div className="quote-watermark">
            <Quote size={120} />
          </div>

          <div className="testimonial-card-inner">
            {/* Stars Row */}
            <div className="stars-row">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={22} fill="#F39A52" color="#F39A52" />
              ))}
              <span className="verified-patient-tag">
                <CheckCircle2 size={14} className="text-teal" /> Verified Roanoke Patient
              </span>
            </div>

            {/* Editorial Quote */}
            <blockquote className="editorial-quote">
              "{current.quote}"
            </blockquote>

            {/* Author Meta & Controls */}
            <div className="testimonial-footer-row">
              <div className="author-info">
                <h4 className="author-name">— {current.author}</h4>
                <span className="author-role">{current.role}</span>
              </div>

              <div className="testimonial-nav-controls">
                <span className="slide-counter">
                  0{currentIndex + 1} / 0{TESTIMONIALS.length}
                </span>
                <div className="nav-buttons-group">
                  <button
                    onClick={prevReview}
                    className="test-arrow-btn"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextReview}
                    className="test-arrow-btn"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Quick Switcher List */}
        <div className="testimonials-selector-grid">
          {TESTIMONIALS.map((t, index) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(index)}
              className={`test-selector-card ${index === currentIndex ? 'test-selector-active' : ''}`}
            >
              <div className="selector-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#F39A52" color="#F39A52" />
                ))}
              </div>
              <p className="selector-snippet">"{t.quote.slice(0, 75)}..."</p>
              <strong className="selector-author">{t.author}</strong>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background-color: var(--color-bg-soft);
          border-bottom: 1px solid var(--color-border);
          position: relative;
        }

        .editorial-testimonial-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          padding: clamp(36px, 5vw, 64px);
          position: relative;
          box-shadow: none;
          margin-bottom: 40px;
          overflow: hidden;
        }

        .quote-watermark {
          position: absolute;
          top: 20px;
          right: 30px;
          color: rgba(85, 183, 201, 0.08);
          pointer-events: none;
        }

        .testimonial-card-inner {
          position: relative;
          z-index: 2;
        }

        .stars-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .verified-patient-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--color-bg-soft);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 12px;
          font-weight: 600;
          color: var(--color-primary);
          margin-left: 12px;
        }

        .editorial-quote {
          font-family: var(--font-heading);
          font-size: clamp(20px, 2.4vw, 30px);
          font-weight: 500;
          line-height: 1.45;
          color: var(--color-primary);
          margin-bottom: 36px;
          letter-spacing: -0.015em;
        }

        .testimonial-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid var(--color-border-subtle);
          padding-top: 28px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .author-name {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 4px;
        }

        .author-role {
          font-size: 14px;
          color: var(--color-text-muted);
        }

        .testimonial-nav-controls {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .slide-counter {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          color: var(--color-text-muted);
          letter-spacing: 0.1em;
        }

        .nav-buttons-group {
          display: flex;
          gap: 8px;
        }

        .test-arrow-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          background: var(--color-bg-warm);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
        }

        .test-arrow-btn:hover {
          background-color: var(--color-primary);
          color: #FFFFFF;
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }

        /* Selector Grid */
        .testimonials-selector-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .test-selector-card {
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 16px 14px;
          text-align: left;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: all var(--transition-fast);
        }

        .test-selector-card:hover {
          border-color: var(--color-teal);
          transform: translateY(-2px);
        }

        .test-selector-active {
          border-color: var(--color-orange);
          background: #FFFDF9;
        }

        .selector-stars {
          display: flex;
          gap: 2px;
        }

        .selector-snippet {
          font-size: 12px;
          color: var(--color-text-muted);
          line-height: 1.35;
        }

        .selector-author {
          font-size: 13px;
          color: var(--color-primary);
          font-family: var(--font-heading);
        }

        @media (max-width: 1024px) {
          .testimonials-selector-grid {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
