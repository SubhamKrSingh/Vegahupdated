import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGlobeAmericas, FaAward, FaCogs, FaHandshake } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const AboutSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="about" className="section bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <motion.div 
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
            className="bg-primary text-white px-5 py-1.5 rounded-full text-sm font-extrabold uppercase tracking-widest mb-3"
          >
            25+ YEARS OF EXCELLENCE
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-4 text-center uppercase tracking-wider"
          >
            ABOUT VEGAH LLC
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-xl max-w-2xl mx-auto text-center leading-relaxed mb-6 font-semibold"
          >
            Transforming enterprises through innovative technology solutions
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <p className="text-gray-700 mb-6 leading-relaxed text-lg max-w-[650px] mx-auto text-center font-normal leading-[1.7]">
                For over two decades, Vegah LLC has been at the forefront of digital transformation, 
                helping enterprises across multiple industries accelerate their growth and achieve 
                operational excellence through innovative technology solutions.
              </p>
              <p className="text-gray-700 mb-10 leading-relaxed text-lg max-w-[650px] mx-auto text-center font-normal leading-[1.7]">
                Our team of experienced professionals combines deep industry knowledge with technical 
                expertise to deliver customized solutions that address your unique business challenges.
              </p>
            </motion.div>
            
            <motion.div 
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto"
            >
              {/* Global Presence Card */}
              <motion.div 
                variants={itemVariants}
                className="bg-[#f9fbff] p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-200 ease-in-out flex flex-col items-center text-center h-full border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="text-primary text-4xl mb-4 bg-blue-50 p-3 rounded-full">
                  <FaGlobeAmericas />
                </div>
                <h4 className="font-semibold text-primary text-xl mb-3">Global Presence</h4>
                <p className="text-gray-700 leading-relaxed">Serving clients across 6 continents with localized expertise</p>
              </motion.div>
              
              {/* Industry Expertise Card */}
              <motion.div 
                variants={itemVariants}
                className="bg-[#f9fbff] p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-200 ease-in-out flex flex-col items-center text-center h-full border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="text-primary text-4xl mb-4 bg-blue-50 p-3 rounded-full">
                  <FaAward />
                </div>
                <h4 className="font-semibold text-primary text-xl mb-3">Industry Expertise</h4>
                <p className="text-gray-700 leading-relaxed">Specialized solutions for 8+ major industry verticals</p>
              </motion.div>
              
              {/* Certified Professionals Card */}
              <motion.div 
                variants={itemVariants}
                className="bg-[#f9fbff] p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-200 ease-in-out flex flex-col items-center text-center h-full border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="text-primary text-4xl mb-4 bg-blue-50 p-3 rounded-full">
                  <FaCogs />
                </div>
                <h4 className="font-semibold text-primary text-xl mb-3">Certified Professionals</h4>
                <p className="text-gray-700 leading-relaxed">500+ certified technology experts</p>
              </motion.div>
              
              {/* Client Satisfaction Card */}
              <motion.div 
                variants={itemVariants}
                className="bg-[#f9fbff] p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-200 ease-in-out flex flex-col items-center text-center h-full border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className="text-primary text-4xl mb-4 bg-blue-50 p-3 rounded-full">
                  <FaHandshake />
                </div>
                <h4 className="font-semibold text-primary text-xl mb-3">Client Satisfaction</h4>
                <p className="text-gray-700 leading-relaxed">98% client retention rate</p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <Link 
                to="/about" 
                className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-primary hover:to-secondary shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                Why Vegah? 
                <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;