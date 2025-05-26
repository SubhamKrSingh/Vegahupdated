import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

// Import SVG files
import AssessSvg from '../../assets/icons/asses.svg';
import ArchitectSvg from '../../assets/icons/architect.svg';
import TransformSvg from '../../assets/icons/transform.svg';
import MaximizeSvg from '../../assets/icons/maximize.svg';

function TransformationProcess() {
  // Animation controls for each step
  const titleControls = useAnimation();
  const step1Controls = useAnimation();
  const step2Controls = useAnimation();
  const step3Controls = useAnimation();
  const step4Controls = useAnimation();
  const ctaControls = useAnimation();
  
  // Create refs for each step with lower threshold for earlier triggering
  const [titleRef, titleInView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: false, threshold: 0.1 });
  
  // Start animations when elements come into view
  React.useEffect(() => {
    if (titleInView) titleControls.start('visible');
    if (inView1) step1Controls.start('visible');
    if (inView2) step2Controls.start('visible');
    if (inView3) step3Controls.start('visible');
    if (inView4) step4Controls.start('visible');
    if (ctaInView) ctaControls.start('visible');
  }, [titleInView, inView1, inView2, inView3, inView4, ctaInView, titleControls, step1Controls, step2Controls, step3Controls, step4Controls, ctaControls]);
  
  // Animation variants
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };
  
  const numberVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.4, type: 'spring', stiffness: 200 }
    }
  };
  
  const steps = [
    {
      id: 1,
      title: 'Assess',
      subtitle: 'Strategic Discovery & Planning',
      description: 'We conduct a comprehensive assessment of your current state, identify opportunities, and develop a strategic roadmap aligned with your business objectives.',
      icon: <img src={AssessSvg} alt="Assess" className="w-28 h-28 md:w-36 md:h-36" />,
      kpis: ['Current State Analysis', 'Opportunity Identification', 'Strategic Roadmap'],
      controls: step1Controls
    },
    {
      id: 2,
      title: 'Architect',
      subtitle: 'Solution Design & Preparation',
      description: 'We design a tailored solution architecture that addresses your specific needs, ensuring scalability, security, and alignment with industry best practices.',
      icon: <img src={ArchitectSvg} alt="Architect" className="w-28 h-28 md:w-40 md:h-40" />,
      kpis: ['Solution Architecture', 'Technology Selection', 'Implementation Planning'],
      controls: step2Controls
    },
    {
      id: 3,
      title: 'Transform',
      subtitle: 'Implementation Excellence',
      description: 'Our expert team executes the transformation with precision, following agile methodologies to ensure rapid delivery while maintaining the highest quality standards.',
      icon: <img src={TransformSvg} alt="Transform" className="w-32 h-32 md:w-40 md:h-40" />,
      kpis: ['Agile Implementation', 'Quality Assurance', 'Change Management'],
      controls: step3Controls
    },
    {
      id: 4,
      title: 'Maximize',
      subtitle: 'Continuous Optimization & Innovation',
      description: 'We ensure long-term success through continuous monitoring, optimization, and innovation, helping you adapt to changing market conditions and emerging opportunities.',
      icon: <img src={MaximizeSvg} alt="Maximize" className="w-28 h-28 md:w-36 md:h-36" />,
      kpis: ['Performance Monitoring', 'Continuous Improvement', 'Innovation Pipeline'],
      controls: step4Controls
    },
  ];

  return (
    <div className="relative py-8">
      {/* Section Title */}
      <motion.div 
        ref={titleRef}
        variants={containerVariants}
        initial="hidden"
        animate={titleControls}
        className="text-center mb-16"
      >
        {/* <h2 className="text-3xl font-bold text-primary mb-4">The Vegah Transformation Blueprint</h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-base">
          Our structured methodology for delivering successful digital transformation with measurable business outcomes.
        </p> */}
      </motion.div>
      
      {/* Timeline connector - Fixed height and animation */}
      <motion.div 
        initial={{ scaleY: 0, opacity: 0.5 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-primary hidden md:block z-0"
        style={{ 
          transformOrigin: "top",
          height: "calc(100% - 12rem)", // Fixed height that doesn't extend to the bottom
          top: "8rem" // Start below the title section
        }}
      />
      
      {/* Process Steps */}
      <div className="relative z-10 space-y-24 md:space-y-32 max-w-6xl mx-auto px-4">
        {steps.map((step, index) => {
          // Use the appropriate ref and inView value based on index
          const ref = index === 0 ? ref1 : index === 1 ? ref2 : index === 2 ? ref3 : ref4;
          const inView = index === 0 ? inView1 : index === 1 ? inView2 : index === 2 ? inView3 : inView4;
          
          const isEven = index % 2 === 0;
          
          return (
            <div ref={ref} key={step.id} className="relative">
              {/* Timeline marker - Positioned exactly on top of the line */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 top-0 -mt-6 w-12 h-12 bg-primary rounded-full z-10 hidden md:flex items-center justify-center text-white font-bold text-xl shadow-md"
                style={{
                  marginTop: '-24px',
                  left: '48%',  // Moved from 45% to 43% to shift 2% more left
                  transform: 'translateX(-50%)',
                }}
              >
                {step.id}
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 w-full"
              >
                {/* Content container with proper width and spacing */}
                <div className={`w-full md:w-[45%] ${isEven ? '' : 'md:order-2 md:ml-auto'}`}>
                  <div className={`${isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 text-center uppercase tracking-wider font-['Roboto']">{step.title}</h3>
                    <h4 className="text-lg font-medium text-gray-700 mb-3">{step.subtitle}</h4>
                    <p className="text-base text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                    <ul className={`space-y-2 ${isEven ? 'md:ml-auto' : ''}`}>
                      {step.kpis.map((kpi, i) => (
                        <li key={i} className={`flex items-center ${isEven ? 'md:justify-end' : ''}`}>
                          <svg className={`w-5 h-5 text-primary ${isEven ? 'md:order-2 md:ml-2' : 'mr-2'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{kpi}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Icon container with proper positioning */}
                <motion.div 
                  className={`flex-shrink-0 bg-white p-5 rounded-full shadow-lg text-primary mx-auto ${isEven ? 'md:order-2 md:ml-auto' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-blue-50 p-5 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <motion.div 
        ref={ctaRef}
        initial={{ opacity: 0, y: 30 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-20"
      >
        <Link 
          to="/contact" 
          className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 group shadow-md hover:shadow-lg"
        >
          Start Your Transformation Journey
          <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </motion.div>
    </div>
  );
}

export default TransformationProcess;