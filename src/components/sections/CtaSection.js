import React, { useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiZap, FiPhone, FiMail, FiSend, FiCheckCircle, FiLoader } from 'react-icons/fi';

const CtaSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Refs for form elements
  const formRef = useRef(null);

  // Animate elements when they come into view
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    try {
      // Form submission logic would go here
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      // Show success toast
      setToastMessage('Thank you! We\'ll be in touch within 24 hours.');
      setShowToast(true);
      
      // Hide toast after 5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    } catch (error) {
      // Show error toast
      setToastMessage('Something went wrong. Please try again.');
      setShowToast(true);
      
      // Hide toast after 5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-blue-700 to-primary">
      {/* Decorative SVG divider at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-20 text-white opacity-10">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content Block */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl font-bold mb-4 leading-tight text-white">Let's Accelerate Together</h2>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                Ready to unlock your organization's velocity? Our team of experts is ready to help you navigate your digital transformation journey.
              </p>
            </motion.div>
            
            {/* SVG Illustration - Tech/Computer Related */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center lg:justify-start"
            >
              <svg className="w-64 h-64" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Monitor/Screen */}
                <rect x="100" y="100" width="300" height="200" rx="10" fill="#0066CC" fillOpacity="0.2" stroke="white" strokeWidth="3"/>
                <rect x="120" y="120" width="260" height="160" rx="5" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="2"/>
                
                {/* Monitor Stand */}
                <rect x="220" y="300" width="60" height="20" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="2"/>
                <rect x="200" y="320" width="100" height="10" rx="5" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="2"/>
                
                {/* Code Elements on Screen */}
                <line x1="140" y1="140" x2="220" y2="140" stroke="#0088FF" strokeWidth="2"/>
                <line x1="140" y1="160" x2="240" y2="160" stroke="#0088FF" strokeWidth="2"/>
                <line x1="140" y1="180" x2="200" y2="180" stroke="#0088FF" strokeWidth="2"/>
                <line x1="140" y1="200" x2="260" y2="200" stroke="#0088FF" strokeWidth="2"/>
                <line x1="140" y1="220" x2="180" y2="220" stroke="#0088FF" strokeWidth="2"/>
                <line x1="140" y1="240" x2="230" y2="240" stroke="#0088FF" strokeWidth="2"/>
                
                {/* Circuit Board Elements */}
                <circle cx="300" cy="150" r="15" fill="white" fillOpacity="0.2" stroke="#0088FF" strokeWidth="2"/>
                <circle cx="340" cy="190" r="15" fill="white" fillOpacity="0.2" stroke="#0088FF" strokeWidth="2"/>
                <circle cx="300" cy="230" r="15" fill="white" fillOpacity="0.2" stroke="#0088FF" strokeWidth="2"/>
                
                <line x1="300" y1="165" x2="300" y2="215" stroke="#0088FF" strokeWidth="2"/>
                <line x1="315" y1="150" x2="325" y2="150" stroke="#0088FF" strokeWidth="2"/>
                <line x1="325" y1="150" x2="325" y2="190" stroke="#0088FF" strokeWidth="2"/>
                <line x1="325" y1="190" x2="325" y2="190" stroke="#0088FF" strokeWidth="2"/>
                
                {/* Digital Transformation Elements */}
                <path d="M400 350C400 377.614 377.614 400 350 400C322.386 400 300 377.614 300 350C300 322.386 322.386 300 350 300C377.614 300 400 322.386 400 350Z" fill="#0066CC" fillOpacity="0.2" stroke="white" strokeWidth="2"/>
                <path d="M200 350C200 377.614 177.614 400 150 400C122.386 400 100 377.614 100 350C100 322.386 122.386 300 150 300C177.614 300 200 322.386 200 350Z" fill="#0066CC" fillOpacity="0.2" stroke="white" strokeWidth="2"/>
                
                {/* Connection Lines */}
                <path d="M200 350H300" stroke="white" strokeWidth="2" strokeDasharray="5 5"/>
                <path d="M150 300V250" stroke="white" strokeWidth="2" strokeDasharray="5 5"/>
                <path d="M350 300V250" stroke="white" strokeWidth="2" strokeDasharray="5 5"/>
                
                {/* Cloud Element */}
                <path d="M250 100C250 77.9086 267.909 60 290 60H310C332.091 60 350 77.9086 350 100V100H250V100Z" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2"/>
                <path d="M150 100C150 77.9086 167.909 60 190 60H210C232.091 60 250 77.9086 250 100V100H150V100Z" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2"/>
                
                {/* Data Flow Animation */}
                <circle cx="250" cy="350" r="5" fill="white">
                  <animate attributeName="cx" values="200;300;200" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="150" cy="275" r="5" fill="white">
                  <animate attributeName="cy" values="300;250;300" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="350" cy="275" r="5" fill="white">
                  <animate attributeName="cy" values="300;250;300" dur="2.5s" repeatCount="indefinite" />
                </circle>
              </svg>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
                <div className="text-accent">
                  <FiAward className="h-8 w-8" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">Proven Expertise</h3>
                  <p className="text-white/80">25+ years delivering enterprise solutions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
                <div className="text-accent">
                  <FiZap className="h-8 w-8" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">Rapid Results</h3>
                  <p className="text-white/80">Accelerate time-to-value with proven methods</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 pt-4">
              <a href="tel:+18005551234" className="inline-flex items-center text-white hover:text-accent transition-colors duration-300 group">
                <FiPhone className="h-5 w-5 mr-2 group-hover:animate-pulse" aria-hidden="true" />
                <span>(800) 555-1234</span>
              </a>
              
              <a href="mailto:info@vegahllc.com" className="inline-flex items-center text-white hover:text-accent transition-colors duration-300 group">
                <FiMail className="h-5 w-5 mr-2 group-hover:animate-pulse" aria-hidden="true" />
                <span>info@vegahllc.com</span>
              </a>
            </motion.div>
          </div>
          
          {/* Form Block */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl shadow-2xl p-8 lg:p-10 transform transition-all duration-300 hover:shadow-3xl"
          >
            <h3 className="text-primary text-2xl font-bold mb-4">Schedule a Consultation</h3>
            <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-gray-700 transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-gray-700 transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company, Inc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-gray-700 transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">How can we help?</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or requirements..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-gray-700 transition-all duration-300"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-secondary text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                aria-label="Submit consultation request"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="h-5 w-5 animate-spin" aria-hidden="true" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Start Your Transformation</span>
                    {/* Removed FiSend icon */}
                  </>
                )}
              </button>
              <p className="text-center text-gray-500 text-sm mt-2">We'll respond within 24 hours</p>
            </form>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Toast Notification */}
      <div className={`fixed bottom-4 right-4 z-50 transition-all duration-500 transform ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 max-w-md">
          <FiCheckCircle className="h-6 w-6 text-green-500" />
          <p className="text-gray-700">{toastMessage}</p>
          <button 
            onClick={() => setShowToast(false)}
            className="ml-auto text-gray-400 hover:text-gray-600"
            aria-label="Close notification"
          >
            &times;
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;