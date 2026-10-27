import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/practiceData';

export default function HeroSlider({ onOpenAppointment }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Autoplay (6 seconds) with pause on hover/interaction
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const handleCtaClick = (cta) => {
    if (cta.action === 'appointment') {
      onOpenAppointment();
    } else if (cta.target) {
      const el = document.querySelector(cta.target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      className="hero-slider-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Featured Highlights"
    >
      {/* Slides Deck */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`hero-slide ${isActive ? 'hero-slide-active' : ''}`}
            aria-hidden={!isActive}
          >
            {/* Background Image with Slow Subtle Ken-Burns Scale */}
            <div
              className={`hero-bg-image ${isActive ? 'hero-bg-animating' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Cinematic Gradient Overlays for High Legibility */}
            <div className="hero-overlay-dark" />
            <div className="hero-overlay-radial" />

            {/* Slide Content */}
            <div className="container hero-container">
              <div className={`hero-content-box ${isActive ? 'hero-content-animating' : ''}`}>
                {/* Eyebrow */}
                {slide.eyebrow && (
                  <div className="hero-eyebrow">
                    <span className="eyebrow-dot" />
                    <span>{slide.eyebrow}</span>
                  </div>
                )}

                {/* Main Headline */}
                <h1 className="h1-hero hero-title">{slide.headline}</h1>

                {/* Supporting Paragraph */}
                <p className="hero-description">{slide.description}</p>

                {/* CTA Action Group */}
                <div className="hero-cta-group">
                  <button
                    onClick={() => handleCtaClick(slide.primaryCta)}
                    className="btn btn-primary btn-lg hero-btn-primary"
                    id={`hero-slide-${slide.id}-primary-cta`}
                  >
                    <span>{slide.primaryCta.text}</span>
                    <span className="btn-arrow">→</span>
                  </button>

                  {slide.secondaryCta && (
                    <button
                      onClick={() => handleCtaClick(slide.secondaryCta)}
                      className="btn btn-outline-white btn-lg hero-btn-secondary"
                      id={`hero-slide-${slide.id}-secondary-cta`}
                    >
                      <span>{slide.secondaryCta.text}</span>
                    </button>
                  )}
                </div>

                {/* Trust Indicator Pill */}
                {slide.trust && (
                  <div className="hero-trust-indicator">
                    <div className="trust-stars">
                      {[...Array(slide.trust.stars)].map((_, i) => (
                        <Star key={i} size={15} fill="#F39A52" color="#F39A52" />
                      ))}
                    </div>
                    <div className="trust-text">
                      <span className="trust-label">{slide.trust.label}</span>
                      <span className="trust-sub">{slide.trust.sub}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        className="slider-arrow slider-arrow-prev"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="slider-arrow slider-arrow-next"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators / Thumbnails */}
      <div className="slider-indicators" role="tablist">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Go to slide ${index + 1}`}
            className={`indicator-dot ${index === currentSlide ? 'indicator-dot-active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            <span className="indicator-progress" />
          </button>
        ))}
      </div>

      <style>{`
        .hero-slider-section {
          position: relative;
          height: clamp(680px, 86vh, 920px);
          width: 100%;
          overflow: hidden;
          background-color: var(--color-primary-dark);
          color: #FFFFFF;
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          visibility: hidden;
          transition: opacity 900ms cubic-bezier(0.25, 1, 0.5, 1),
                      visibility 900ms ease;
          display: flex;
          align-items: center;
          z-index: 1;
        }

        .hero-slide-active {
          opacity: 1;
          visibility: visible;
          z-index: 2;
        }

        .hero-bg-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center 30%;
          transform: scale(1.0);
          transition: transform 7000ms ease-out;
          will-change: transform;
        }

        .hero-bg-animating {
          transform: scale(1.08);
        }

        /* Dual Overlays: Dark wash + Gradient for max contrast and warmth */
        .hero-overlay-dark {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(15, 38, 51, 0.90) 0%,
            rgba(23, 59, 77, 0.82) 42%,
            rgba(23, 59, 77, 0.40) 80%,
            rgba(15, 38, 51, 0.55) 100%
          );
          z-index: 1;
        }

        .hero-overlay-radial {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 20% 50%,
            rgba(85, 183, 201, 0.15) 0%,
            transparent 60%
          );
          z-index: 1;
        }

        .hero-container {
          position: relative;
          z-index: 3;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .hero-content-box {
          max-width: 720px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) 200ms,
                      transform 800ms cubic-bezier(0.16, 1, 0.3, 1) 200ms;
        }

        .hero-content-animating {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--color-teal);
          margin-bottom: 20px;
          background: rgba(85, 183, 201, 0.15);
          padding: 6px 14px;
          border-radius: 99px;
          border: 1px solid rgba(85, 183, 201, 0.3);
        }

        .eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-orange);
          box-shadow: 0 0 10px var(--color-orange);
        }

        .hero-title {
          color: #FFFFFF;
          margin-bottom: 22px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .hero-description {
          font-size: clamp(17px, 1.3vw, 21px);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.90);
          margin-bottom: 36px;
          max-width: 620px;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
        }

        .hero-trust-indicator {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 10px 18px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(8px);
        }

        .trust-stars {
          display: flex;
          gap: 3px;
        }

        .trust-text {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
        }

        .trust-label {
          font-size: 13px;
          font-weight: 700;
          color: #FFFFFF;
        }

        .trust-sub {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.72);
        }

        /* Arrows */
        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all var(--transition-fast);
          backdrop-filter: blur(6px);
        }

        .slider-arrow:hover {
          background: rgba(255, 255, 255, 0.28);
          border-color: #FFFFFF;
          transform: translateY(-50%) scale(1.05);
        }

        .slider-arrow-prev {
          left: 28px;
        }

        .slider-arrow-next {
          right: 28px;
        }

        /* Indicators */
        .slider-indicators {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 10;
        }

        .indicator-dot {
          width: 44px;
          height: 5px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.30);
          border: none;
          cursor: pointer;
          padding: 0;
          position: relative;
          overflow: hidden;
          transition: background-color var(--transition-fast), width var(--transition-normal);
        }

        .indicator-dot-active {
          background: var(--color-orange);
          width: 64px;
        }

        @media (max-width: 900px) {
          .slider-arrow {
            display: none;
          }
          .hero-slider-section {
            height: clamp(620px, 80vh, 760px);
          }
          .hero-overlay-dark {
            background: linear-gradient(
              180deg,
              rgba(15, 38, 51, 0.85) 0%,
              rgba(23, 59, 77, 0.85) 60%,
              rgba(15, 38, 51, 0.95) 100%
            );
          }
          .hero-content-box {
            max-width: 100%;
          }
        }

        @media (max-width: 600px) {
          .hero-slider-section {
            height: clamp(580px, 85vh, 660px);
          }
          .hero-cta-group {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }
          .hero-btn-primary, .hero-btn-secondary {
            width: 100%;
          }
          .slider-indicators {
            bottom: 20px;
          }
          .indicator-dot {
            width: 28px;
          }
          .indicator-dot-active {
            width: 44px;
          }
        }
      `}</style>
    </section>
  );
}
