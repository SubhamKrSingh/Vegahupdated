import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiMonitor, 
  FiCpu,  // Changed from FiBrain to FiCpu for AI & ML
  FiDatabase, 
  FiCloud, 
  FiGrid, 
  FiShield 
} from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const services = [
    {
      id: 1,
      title: 'Digital Transformation',
      description: 'Reimagine your business processes and customer experiences with our comprehensive digital transformation services.',
      icon: <FiMonitor className="h-8 w-8" />,
      link: '/services/digital-transformation'
    },
    {
      id: 2,
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence and machine learning to gain insights and automate complex processes.',
      icon: <FiCpu className="h-8 w-8" />,  // Changed to FiCpu which is appropriate for AI/ML
      link: '/services/ai-ml'
    },
    {
      id: 3,
      title: 'SAP Managed Services',
      description: 'Optimize your SAP environment with our end-to-end implementation, migration, and support services.',
      icon: <FiDatabase className="h-8 w-8" />,
      link: '/services/sap'
    },
    {
      id: 4,
      title: 'Multi-Cloud Management',
      description: 'Simplify your cloud operations with our comprehensive multi-cloud management solutions.',
      icon: <FiCloud className="h-8 w-8" />,
      link: '/services/cloud'
    },
    {
      id: 5,
      title: 'ERP Solutions',
      description: 'Streamline your business operations with our enterprise resource planning solutions.',
      icon: <FiGrid className="h-8 w-8" />,
      link: '/services/erp'
    },
    {
      id: 6,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our comprehensive cybersecurity solutions and services.',
      icon: <FiShield className="h-8 w-8" />,
      link: '/services/cybersecurity'
    },
  ];

  return (
    <section id="services" className="section bg-[#f9fbff] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 text-center uppercase tracking-wider">Our Services</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We offer a comprehensive suite of technology solutions designed to accelerate your digital transformation journey and drive business growth.
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden h-full hover:scale-[1.02] border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <div className="p-8 flex flex-col h-full">
                <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow text-base leading-[1.7] font-normal">{service.description}</p>
                <Link to={service.link} className="text-primary font-medium hover:text-secondary flex items-center mt-auto group">
                  Learn More
                  <HiArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link 
            to="/services" 
            className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-3 rounded-xl text-white shadow-md hover:scale-105 transition-all duration-300 inline-flex items-center font-semibold"
          >
            Explore Full Capabilities <HiArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;