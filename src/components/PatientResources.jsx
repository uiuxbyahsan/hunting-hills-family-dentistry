import React, { useState } from 'react';
import { FileText, ShieldAlert, CreditCard, HelpCircle, ChevronDown, ChevronUp, Download, Phone, Calendar } from 'lucide-react';
import { FAQS, PRACTICE_INFO } from '../data/practiceData';

export default function PatientResources({ onOpenAppointment }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const resources = [
    {
      icon: FileText,
      title: "New Patient Forms",
      desc: "Complete your medical history and registration in advance to streamline your first visit at our Roanoke office.",
      actionText: "Request Digital Check-In",
      actionType: "appointment"
    },
    {
      icon: ShieldAlert,
      title: "Post-Op Instructions",
      desc: "Detailed recovery guides and clinical aftercare steps for dental implants, crown placements, and extractions.",
      actionText: "View Clinical Guides",
      actionType: "postop"
    },
    {
      icon: CreditCard,
      title: "Insurance & Payments",
      desc: "We accept most major PPO dental plans and file all paperwork on your behalf to maximize your policy benefits.",
      actionText: "Verify Your Coverage",
      actionType: "phone"
    }
  ];

  return (
    <section className="resources-section section-padding" id="resources">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="text-eyebrow">
            <FileText size={15} /> HELPFUL INFORMATION & CARE GUIDES
          </span>
          <h2 className="h2-section">Patient Resources & Answers</h2>
          <p className="text-lead">
            Everything you need for an effortless, stress-free dental experience from initial registration to post-procedure care.
          </p>
        </div>

        {/* Top 3 Resource Cards */}
        <div className="resources-cards-grid">
          {resources.map((res, idx) => {
            const Icon = res.icon;
            return (
              <div key={idx} className="resource-card">
                <div className="res-icon-wrap">
                  <Icon size={24} />
                </div>
                <h3 className="res-title">{res.title}</h3>
                <p className="res-desc">{res.desc}</p>

                <div className="res-action">
                  {res.actionType === 'appointment' && (
                    <button
                      onClick={onOpenAppointment}
                      className="btn btn-primary btn-sm"
                    >
                      <span>{res.actionText}</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  )}
                  {res.actionType === 'postop' && (
                    <a
                      href="#faq-accordion"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById('faq-accordion');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn btn-secondary btn-sm"
                    >
                      <span>{res.actionText}</span>
                      <span className="btn-arrow">↓</span>
                    </a>
                  )}
                  {res.actionType === 'phone' && (
                    <a
                      href={`tel:${PRACTICE_INFO.phoneRaw}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <Phone size={14} />
                      <span>{res.actionText}</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQs Accordion */}
        <div className="faq-wrapper" id="faq-accordion">
          <div className="faq-header-row">
            <div className="faq-header-left">
              <span className="text-eyebrow text-eyebrow-orange">COMMON QUESTIONS</span>
              <h3 className="faq-main-title">Frequently Asked Questions</h3>
            </div>
            <p className="faq-subtext">
              Have a specific clinical or scheduling question? Feel free to call our front desk at{' '}
              <a href={`tel:${PRACTICE_INFO.phoneRaw}`} className="faq-phone-link">
                {PRACTICE_INFO.phone}
              </a>
              .
            </p>
          </div>

          <div className="faq-list">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                >
                  <button
                    className="faq-trigger"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question">{faq.question}</span>
                    <span className="faq-icon-toggle">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-pane">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .resources-section {
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--color-border);
          position: relative;
        }

        .resources-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 64px;
        }

        .resource-card {
          background: var(--color-bg-warm);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), border-color var(--transition-normal);
        }

        .resource-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-border-hover);
        }

        .res-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          color: var(--color-teal-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .res-title {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 10px;
        }

        .res-desc {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--color-text-muted);
          margin-bottom: 24px;
          flex-grow: 1;
        }

        /* FAQ Section */
        .faq-wrapper {
          background: var(--color-bg-soft);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          padding: clamp(32px, 5vw, 56px);
        }

        .faq-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .faq-main-title {
          font-size: clamp(24px, 2.8vw, 32px);
          color: var(--color-primary);
          line-height: 1.2;
          margin-top: 6px;
        }

        .faq-subtext {
          font-size: 15px;
          color: var(--color-text-muted);
          max-width: 480px;
        }

        .faq-phone-link {
          color: var(--color-primary);
          font-weight: 700;
          text-decoration: underline;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item {
          background: #FFFFFF;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          overflow: hidden;
          transition: border-color var(--transition-fast);
        }

        .faq-item-open {
          border-color: var(--color-teal);
        }

        .faq-trigger {
          width: 100%;
          background: none;
          border: none;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
          text-align: left;
        }

        .faq-question {
          font-family: var(--font-heading);
          font-size: 16.5px;
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1.35;
        }

        .faq-icon-toggle {
          color: var(--color-teal-dark);
          flex-shrink: 0;
        }

        .faq-answer-pane {
          padding: 0 24px 22px 24px;
          font-size: 15px;
          line-height: 1.65;
          color: var(--color-text-muted);
          border-top: 1px solid var(--color-border-subtle);
          padding-top: 16px;
        }

        @media (max-width: 960px) {
          .resources-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 40px;
          }
        }

        @media (max-width: 640px) {
          .resource-card {
            padding: 22px 18px;
          }
          .res-icon-wrap {
            width: 44px;
            height: 44px;
            margin-bottom: 14px;
          }
          .res-title {
            font-size: 18px;
          }
          .res-desc {
            font-size: 14px;
            margin-bottom: 18px;
          }
          .faq-wrapper {
            padding: 22px 16px;
          }
          .faq-header-row {
            margin-bottom: 20px;
            gap: 14px;
          }
          .faq-main-title {
            font-size: 22px;
          }
          .faq-trigger {
            padding: 16px 14px;
            min-height: 50px;
          }
          .faq-question {
            font-size: 15px;
          }
          .faq-answer-pane {
            padding: 0 14px 16px 14px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
