import React from 'react';
import HeroCarousel from '../components/sections/HeroCarousel';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import ClientTestimonials from '../components/sections/ClientTestimonials';
import CtaSection from '../components/sections/CtaSection';
import TransformationProcess from '../components/sections/TransformationProcess';
import OutcomeStats from '../components/sections/OutcomeStats';

const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      
      {/* Transformation Blueprint Section */}
      <section id="transformation-blueprint" className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 text-center uppercase tracking-wider">The Vegah Transformation Blueprint</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our structured methodology for delivering successful digital transformation with measurable business outcomes.
          </p>
        </div>
        
        {/* Transformation Process Steps */}
        <TransformationProcess />
      </section>
      
      {/* Key Outcomes Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 text-center uppercase tracking-wider">Measurable Outcomes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our methodology consistently delivers exceptional results across industries.
          </p>
        </div>
        
        <OutcomeStats />
      </section>
      
      <ClientTestimonials />
      <CtaSection />
    </div>
  );
};

export default HomePage;