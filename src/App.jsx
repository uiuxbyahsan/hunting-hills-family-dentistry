import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import AwardsSection from './components/AwardsSection';
import ServicesSection from './components/ServicesSection';
import WhyHuntingHills from './components/WhyHuntingHills';
import FeaturedTreatments from './components/FeaturedTreatments';
import SmileGallerySection from './components/SmileGallerySection';
import PatientExperience from './components/PatientExperience';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import PatientResources from './components/PatientResources';
import LocationSection from './components/LocationSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [appointmentInitialReason, setAppointmentInitialReason] = useState('');

  const handleOpenAppointment = (reason = '') => {
    setAppointmentInitialReason(reason);
    setAppointmentModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setAppointmentModalOpen(false);
    setAppointmentInitialReason('');
  };

  // Scroll-triggered subtle reveal animations
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elementsToReveal = document.querySelectorAll(
      '.section-header, .service-card, .gallery-card, .doctor-card, .treatment-block, .process-card, .editorial-testimonial-card, .award-card, .resource-card'
    );

    elementsToReveal.forEach((el) => {
      el.classList.add('reveal-init');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-root">
      {/* Sticky Navigation */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      <main id="main-content">
        {/* Full-Width Cinematic Hero Slider */}
        <HeroSlider onOpenAppointment={() => handleOpenAppointment()} />

        {/* Awards & Certified Provider Recognition */}
        <AwardsSection />

        {/* Comprehensive Dental Services Grid & Detail Modals */}
        <ServicesSection onBookAppointment={(serviceTitle) => handleOpenAppointment(serviceTitle)} />

        {/* Why Hunting Hills (Editorial section with large authentic asset) */}
        <WhyHuntingHills onOpenAppointment={() => handleOpenAppointment()} />

        {/* Featured Signature Treatments: Implants, Invisalign, TeethXpress */}
        <FeaturedTreatments onOpenAppointment={() => handleOpenAppointment()} />

        {/* Smile Gallery: Real Patient Before & After Transformations */}
        <SmileGallerySection onBookAppointment={(reason) => handleOpenAppointment(reason)} />

        {/* Patient Experience: 01 Listen, 02 Plan, 03 Care */}
        <PatientExperience onOpenAppointment={() => handleOpenAppointment()} />

        {/* Our Team: Dr. Smith, Dr. Hutchison, Dr. Simpson, Dr. Vakay */}
        <TeamSection onBookAppointment={(doctorName) => handleOpenAppointment(doctorName)} />

        {/* Testimonials: Real feedback from Roanoke patients */}
        <TestimonialsSection />

        {/* Patient Resources: Digital check-in, post-op, insurance & FAQ */}
        <PatientResources onOpenAppointment={() => handleOpenAppointment()} />

        {/* Practice Location & Verified Office Hours */}
        <LocationSection />

        {/* Final Conversion CTA */}
        <FinalCTA onOpenAppointment={() => handleOpenAppointment()} />
      </main>

      {/* Global Footer */}
      <Footer onOpenAppointment={() => handleOpenAppointment()} />

      {/* 2-Step Appointment Request Modal (Single clean conversion path, no duplicate contact forms) */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={handleCloseAppointment}
        initialReason={appointmentInitialReason}
      />
    </div>
  );
}
