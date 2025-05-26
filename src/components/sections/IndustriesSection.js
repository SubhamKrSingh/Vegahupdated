import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiDollarSign, 
  FiHeart, 
  FiShoppingBag, 
  FiTool, 
  FiHome, 
  FiZap, 
  FiWifi, 
  FiCompass 
} from 'react-icons/fi';
import { HiArrowRight } from 'react-icons/hi';

const IndustriesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const industries = [
    {
      id: 1,
      title: 'Finance',
      subtitle: 'Banking & Investment',
      icon: <FiDollarSign className="h-7 w-7" />,
      link: '/industries/finance'
    },
    {
      id: 2,
      title: 'Healthcare',
      subtitle: 'Medical & Life Sciences',
      icon: <FiHeart className="h-7 w-7" />,
      link: '/industries/healthcare'
    },
    {
      id: 3,
      title: 'Retail',
      subtitle: 'Commerce & Distribution',
      icon: <FiShoppingBag className="h-7 w-7" />,
      link: '/industries/retail'
    },
    {
      id: 4,
      title: 'Manufacturing',
      subtitle: 'Production & Operations',
      icon: <FiTool className="h-7 w-7" />,
      link: '/industries/manufacturing'
    },
    {
      id: 5,
      title: 'Government',
      subtitle: 'Public Sector & Services',
      icon: <FiHome className="h-7 w-7" />,
      link: '/industries/government'
    },
    {
      id: 6,
      title: 'Energy',
      subtitle: 'Utilities & Resources',
      icon: <FiZap className="h-7 w-7" />,
      link: '/industries/energy'
    },
    {
      id: 7,
      title: 'Telecom',
      subtitle: 'Communications & Media',
      icon: <FiWifi className="h-7 w-7" />,
      link: '/industries/telecom'
    },
    {
      id: 8,
      title: 'Hospitality',
      subtitle: 'Travel & Leisure',
      icon: <FiCompass className="h-7 w-7" />,
      link: '/industries/hospitality'
    },
  ];

  return (
    <section id="industries" className="section bg-[#f9fbff] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 text-center uppercase tracking-wider">Industries We Serve</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
            We deliver specialized solutions across a wide range of industries, leveraging our deep domain expertise to address your unique challenges.
          </p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {industries.map((industry) => (
            <motion.div 
              key={industry.id} 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Link to={industry.link} className="block h-full">
                <div className="bg-gray-50 hover:bg-white rounded-xl p-6 text-center h-full flex flex-col items-center transition-all duration-300 hover:shadow-lg">
                  <div className="p-3 bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-primary">
                    {industry.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-primary mb-1">{industry.title}</h3>
                  <p className="text-gray-500 text-sm">{industry.subtitle}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">Explore our industry-specific solutions and success stories</p>
          <Link 
            to="/industries" 
            className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center font-semibold"
          >
            View All Industries <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;