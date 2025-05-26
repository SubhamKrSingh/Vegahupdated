import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TransformationProcess from '../components/sections/TransformationProcess';
import OutcomeStats from '../components/sections/OutcomeStats';
import ClientTestimonials from '../components/sections/ClientTestimonials';

const TransformationBlueprintPage = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">The Vegah Transformation Blueprint</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our structured methodology for delivering successful digital transformation with measurable business outcomes.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/contact" className="btn-primary">Start Your Transformation</Link>
            <a href="#process" className="btn-outline">Explore Our Process</a>
          </div>
        </motion.div>
      </section>
      
      {/* Process Overview */}
      <section id="process" className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Transformation Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A proven four-stage methodology that delivers 25% faster time-to-value and 99.9% implementation success.
          </p>
        </div>
        
        {/* Transformation Process Steps */}
        <TransformationProcess />
      </section>
      
      {/* Key Outcomes */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Measurable Outcomes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our methodology consistently delivers exceptional results across industries.
          </p>
        </div>
        
        <OutcomeStats />
      </section>
      
      {/* Client Success Stories */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="section-title">Client Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our transformation blueprint has delivered exceptional results for our clients.
          </p>
        </div>
        
        <ClientTestimonials />
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-primary text-white">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Schedule a consultation with our transformation experts to discuss your specific needs.
          </p>
          <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TransformationBlueprintPage;