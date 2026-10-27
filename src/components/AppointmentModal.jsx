import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Check, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { PRACTICE_INFO, SERVICES } from '../data/practiceData';

export default function AppointmentModal({ isOpen, onClose, initialReason = '' }) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Form Fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    patientType: 'new', // 'new' or 'existing'
    preferredDate: '',
    preferredTime: 'morning', // 'morning', 'afternoon', 'evening'
    serviceInterest: initialReason || 'Comprehensive Exam & Cleaning',
    notes: ''
  });

  useEffect(() => {
    if (initialReason) {
      setFormData(prev => ({ ...prev, serviceInterest: initialReason }));
    }
  }, [initialReason]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit telephone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep2()) {
      setIsSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      patientType: 'new',
      preferredDate: '',
      preferredTime: 'morning',
      serviceInterest: 'Comprehensive Exam & Cleaning',
      notes: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="appt-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="appt-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="appt-close-btn" onClick={onClose} aria-label="Close appointment request">
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header with 2-Step Progress Indicator */}
            <div className="appt-header">
              <span className="text-eyebrow text-eyebrow-orange">ONLINE SCHEDULING</span>
              <h2 className="appt-main-title">Request an Appointment</h2>
              
              {/* Progress Indicator */}
              <div className="appt-progress-container">
                <div className="progress-steps-row">
                  <div className={`step-node ${step >= 1 ? 'step-node-active' : ''}`}>
                    <span className="step-num">{step > 1 ? <Check size={14} /> : '1'}</span>
                    <span className="step-text">Your Information</span>
                  </div>
                  <div className={`step-connector ${step === 2 ? 'step-connector-active' : ''}`} />
                  <div className={`step-node ${step === 2 ? 'step-node-active' : ''}`}>
                    <span className="step-num">2</span>
                    <span className="step-text">Appointment Details</span>
                  </div>
                </div>
              </div>

              {/* Crucial Non-Confirmation Rule Notice */}
              <div className="confirmation-notice-banner">
                <Clock size={16} className="text-teal" />
                <span>
                  <strong>Notice:</strong> Your requested time is not confirmed until our team contacts you.
                </span>
              </div>
            </div>

            {/* Form Steps */}
            <form onSubmit={step === 1 ? handleNext : handleSubmit} className="appt-form" noValidate>
              {step === 1 && (
                <div className="form-step-pane">
                  {/* Patient Status Selector */}
                  <div className="form-group">
                    <label className="field-label">Are you a new or existing patient?</label>
                    <div className="patient-type-selector">
                      <label className={`type-option ${formData.patientType === 'new' ? 'type-option-active' : ''}`}>
                        <input
                          type="radio"
                          name="patientType"
                          value="new"
                          checked={formData.patientType === 'new'}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span>I am a New Patient</span>
                      </label>
                      <label className={`type-option ${formData.patientType === 'existing' ? 'type-option-active' : ''}`}>
                        <input
                          type="radio"
                          name="patientType"
                          value="existing"
                          checked={formData.patientType === 'existing'}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span>I am an Established Patient</span>
                      </label>
                    </div>
                  </div>

                  {/* Names Row */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="appt-first-name" className="field-label">
                        First Name <span className="required-star">*</span>
                      </label>
                      <input
                        id="appt-first-name"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="e.g. Sarah"
                        className={`field-input ${errors.firstName ? 'field-input-error' : ''}`}
                        autoFocus
                      />
                      {errors.firstName && <span className="field-error-text">{errors.firstName}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="appt-last-name" className="field-label">
                        Last Name
                      </label>
                      <input
                        id="appt-last-name"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="e.g. Jenkins"
                        className="field-input"
                      />
                    </div>
                  </div>

                  {/* Phone & Email Row */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="appt-phone" className="field-label">
                        Phone Number <span className="required-star">*</span>
                      </label>
                      <input
                        id="appt-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(540) 555-0123"
                        className={`field-input ${errors.phone ? 'field-input-error' : ''}`}
                      />
                      {errors.phone && <span className="field-error-text">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="appt-email" className="field-label">
                        Email Address <span className="required-star">*</span>
                      </label>
                      <input
                        id="appt-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@example.com"
                        className={`field-input ${errors.email ? 'field-input-error' : ''}`}
                      />
                      {errors.email && <span className="field-error-text">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Step 1 Actions */}
                  <div className="form-actions-row">
                    <button type="submit" className="btn btn-primary btn-lg full-width" id="appt-step1-continue">
                      <span>Continue to Appointment Details</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="form-step-pane">
                  {/* Service Interest */}
                  <div className="form-group">
                    <label htmlFor="appt-service" className="field-label">
                      Primary Reason for Visit
                    </label>
                    <select
                      id="appt-service"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="field-input"
                    >
                      <option value="Comprehensive Exam & Cleaning">Comprehensive Exam & Hygiene Cleaning</option>
                      <option value="Dental Implants Consultation">Dental Implants Consultation</option>
                      <option value="Invisalign® Clear Aligners Consultation">Invisalign® Clear Aligners Consultation</option>
                      <option value="TeethXpress® Same-Day Restorations">TeethXpress® Full-Arch Restoration</option>
                      <option value="Cosmetic Dentistry & Porcelain Veneers">Cosmetic Dentistry & Veneers</option>
                      <option value="Crowns, Fillings & Restorative">Restorative Care (Crowns/Fillings)</option>
                      <option value="Tooth Pain / Dental Emergency">Tooth Pain / Urgent Concern</option>
                      <option value="Second Opinion / General Consultation">Second Opinion / General Consultation</option>
                    </select>
                  </div>

                  {/* Date & Time Preferences */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="appt-date" className="field-label">
                        Preferred Date <span className="required-star">*</span>
                      </label>
                      <input
                        id="appt-date"
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`field-input ${errors.preferredDate ? 'field-input-error' : ''}`}
                      />
                      {errors.preferredDate && <span className="field-error-text">{errors.preferredDate}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="appt-time" className="field-label">
                        Preferred Time of Day <span className="required-star">*</span>
                      </label>
                      <select
                        id="appt-time"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="field-input"
                      >
                        <option value="morning">Early Morning (7:00 AM – 10:00 AM)</option>
                        <option value="midday">Midday (10:00 AM – 2:00 PM)</option>
                        <option value="afternoon">Afternoon / Evening (2:00 PM – 7:00 PM)</option>
                        <option value="first-available">First Available Time</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Special Requests */}
                  <div className="form-group">
                    <label htmlFor="appt-notes" className="field-label">
                      Anything you'd like us to know? <span className="optional-text">(Optional)</span>
                    </label>
                    <textarea
                      id="appt-notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="e.g. Prefer Dr. Smith, mild dental anxiety, insurance questions..."
                      className="field-input field-textarea"
                    />
                  </div>

                  {/* Required Subtle PHI Notice */}
                  <p className="phi-notice-text">
                    <ShieldCheck size={14} className="text-teal" />
                    <span>Please do not include sensitive medical or Protected Health Information (PHI) in this form.</span>
                  </p>

                  {/* Step 2 Actions */}
                  <div className="form-actions-split">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn btn-secondary"
                    >
                      <ArrowLeft size={16} />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg flex-grow"
                      id="appt-request-submit-btn"
                    >
                      <span>Request Appointment</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              )}
            </form>

            {/* Direct Phone Conversion Alternative (No duplicate contact form!) */}
            <div className="appt-call-alternative">
              <span>Prefer to speak with someone directly?</span>
              <a href={`tel:${PRACTICE_INFO.phoneRaw}`} className="call-now-pill">
                <Phone size={14} />
                <span>Call our office at {PRACTICE_INFO.phone}</span>
              </a>
            </div>
          </>
        ) : (
          /* SUCCESS STATE */
          <div className="appt-success-pane">
            <div className="success-icon-badge">
              <CheckCircle2 size={44} />
            </div>

            <span className="success-pretitle">REQUEST RECEIVED</span>
            <h2 className="success-title">Thank You, {formData.firstName}!</h2>

            <div className="success-card">
              <p className="success-lead">
                Thank you for contacting Hunting Hills Family Dentistry. Our scheduling team will review your request and contact you to confirm availability.
              </p>

              <div className="success-summary-box">
                <div className="summary-item">
                  <span className="summary-label">Requested Service:</span>
                  <strong>{formData.serviceInterest}</strong>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Preferred Date:</span>
                  <strong>{formData.preferredDate || 'Earliest available'}</strong>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Contact Phone:</span>
                  <strong>{formData.phone}</strong>
                </div>
              </div>

              <p className="success-sub">
                If you have an urgent toothache or emergency, please do not wait for email confirmation — call our front desk directly at{' '}
                <a href={`tel:${PRACTICE_INFO.phoneRaw}`} className="text-navy-link">
                  {PRACTICE_INFO.phone}
                </a>
                .
              </p>
            </div>

            <div className="success-buttons-row">
              <button onClick={handleResetAndClose} className="btn btn-navy btn-lg">
                <span>Return Home</span>
              </button>
              <a href={`tel:${PRACTICE_INFO.phoneRaw}`} className="btn btn-secondary btn-lg">
                <Phone size={16} />
                <span>Call Office ({PRACTICE_INFO.phone})</span>
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .appt-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 38, 51, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 210;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: apptFadeIn 250ms ease forwards;
        }

        @keyframes apptFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .appt-dialog {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          width: 100%;
          max-width: 660px;
          max-height: 94vh;
          overflow-y: auto;
          position: relative;
          padding: clamp(28px, 4.5vw, 44px);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
          animation: apptSlideUp 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes apptSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .appt-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--color-border);
          background: var(--color-bg-warm);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color var(--transition-fast);
        }

        .appt-close-btn:hover {
          background-color: var(--color-teal-light);
        }

        .appt-header {
          margin-bottom: 24px;
        }

        .appt-main-title {
          font-size: clamp(24px, 3.2vw, 32px);
          color: var(--color-primary);
          margin-top: 4px;
          margin-bottom: 18px;
        }

        /* Progress Steps */
        .appt-progress-container {
          background: var(--color-bg-soft);
          padding: 12px 18px;
          border-radius: var(--radius-md);
          margin-bottom: 18px;
          border: 1px solid var(--color-border-subtle);
        }

        .progress-steps-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .step-node {
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0.55;
          transition: opacity var(--transition-fast);
        }

        .step-node-active {
          opacity: 1;
        }

        .step-num {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--color-border);
          color: var(--color-primary);
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-node-active .step-num {
          background: var(--color-primary);
          color: #FFFFFF;
        }

        .step-text {
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .step-connector {
          flex-grow: 1;
          height: 2px;
          background: var(--color-border);
          margin: 0 16px;
          transition: background-color var(--transition-fast);
        }

        .step-connector-active {
          background: var(--color-teal);
        }

        /* Notice Banner */
        .confirmation-notice-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #FFF9F2;
          border: 1px solid rgba(243, 154, 82, 0.35);
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 13px;
          color: #8C4E1A;
          line-height: 1.4;
        }

        /* Form Inputs */
        .appt-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .field-label {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 700;
          color: var(--color-primary);
        }

        .required-star {
          color: var(--color-orange);
        }

        .optional-text {
          font-weight: 400;
          font-size: 12px;
          color: var(--color-text-muted);
        }

        .field-input {
          height: 52px;
          padding: 0 16px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(23, 59, 77, 0.18);
          background: #FFFFFF;
          color: var(--color-text-dark);
          font-size: 15px;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
          outline: none;
        }

        .field-input:focus {
          border-color: var(--color-teal);
          box-shadow: 0 0 0 3px rgba(85, 183, 201, 0.25);
        }

        .field-input-error {
          border-color: var(--color-error);
          background: var(--color-error-bg);
        }

        .field-error-text {
          font-size: 12px;
          color: var(--color-error);
          font-weight: 600;
        }

        .field-textarea {
          height: auto;
          min-height: 80px;
          padding: 12px 16px;
          resize: vertical;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        /* Patient Type Radio Pills */
        .patient-type-selector {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .type-option {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
          background: var(--color-bg-warm);
          cursor: pointer;
          font-size: 13.5px;
          font-weight: 600;
          color: var(--color-primary);
          transition: all var(--transition-fast);
          user-select: none;
        }

        .type-option-active {
          background: var(--color-primary);
          color: #FFFFFF;
          border-color: var(--color-primary);
        }

        .phi-notice-text {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--color-text-muted);
          line-height: 1.4;
          background: var(--color-bg-warm);
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border-subtle);
        }

        .form-actions-split {
          display: flex;
          gap: 12px;
          margin-top: 10px;
        }

        .flex-grow {
          flex-grow: 1;
        }

        .appt-call-alternative {
          margin-top: 24px;
          border-top: 1px solid var(--color-border);
          padding-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13.5px;
          color: var(--color-text-muted);
          flex-wrap: wrap;
          gap: 10px;
        }

        .call-now-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--color-bg-soft);
          color: var(--color-primary);
          font-weight: 700;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          transition: background-color var(--transition-fast);
        }

        .call-now-pill:hover {
          background-color: var(--color-teal-light);
        }

        /* Success Pane */
        .appt-success-pane {
          text-align: center;
          padding: 20px 0;
          animation: apptFadeIn 300ms ease;
        }

        .success-icon-badge {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--color-success-bg);
          color: var(--color-success);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px auto;
        }

        .success-pretitle {
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-teal-dark);
          display: block;
          margin-bottom: 6px;
        }

        .success-title {
          font-size: 28px;
          color: var(--color-primary);
          margin-bottom: 20px;
        }

        .success-card {
          background: var(--color-bg-warm);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          padding: 24px;
          margin-bottom: 28px;
          text-align: left;
        }

        .success-lead {
          font-size: 15.5px;
          color: var(--color-text-dark);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .success-summary-box {
          background: #FFFFFF;
          border: 1px solid var(--color-border-subtle);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
        }

        .summary-label {
          color: var(--color-text-muted);
        }

        .summary-item strong {
          color: var(--color-primary);
        }

        .success-sub {
          font-size: 13px;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        .text-navy-link {
          color: var(--color-primary);
          font-weight: 700;
          text-decoration: underline;
        }

        .success-buttons-row {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        @media (max-width: 600px) {
          .form-row-2, .patient-type-selector {
            grid-template-columns: 1fr;
          }
          .appt-call-alternative {
            flex-direction: column;
            align-items: flex-start;
          }
          .call-now-pill {
            width: 100%;
            justify-content: center;
          }
          .success-buttons-row {
            flex-direction: column;
          }
          .success-buttons-row .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
