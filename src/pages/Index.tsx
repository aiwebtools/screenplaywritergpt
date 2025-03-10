
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import LegalDisclaimer from '../components/LegalDisclaimer';
import VideoSection from '../components/VideoSection';
import Footer from '../components/Footer';
import DisclaimerPopup from '../components/DisclaimerPopup';

const Index = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    // Check if user has already agreed to disclaimer
    const hasAgreed = localStorage.getItem('disclaimerAgreed') === 'true';
    if (!hasAgreed) {
      setShowDisclaimer(true);
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 100,
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Add page loaded animation
    document.body.classList.add('opacity-0');
    setTimeout(() => {
      document.body.classList.remove('opacity-0');
      document.body.classList.add('animate-fade-in');
    }, 100);
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <LegalDisclaimer />
        <VideoSection />
      </main>
      <Footer />
      <DisclaimerPopup 
        isOpen={showDisclaimer} 
        onClose={() => setShowDisclaimer(false)} 
      />
    </div>
  );
};

export default Index;
