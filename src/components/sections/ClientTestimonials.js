import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ClientTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote: "Vegah's transformation blueprint helped us modernize our legacy systems 30% faster than expected, with zero disruption to our operations.",
      author: "Sarah Johnson",
      position: "CIO",
      company: "Global Financial Services Firm",
      // Optional: avatar and logo could be added here
      // avatar: '/images/avatars/sarah-johnson.jpg',
      // logo: '/images/logos/financial-services-logo.png',
    },
    {
      id: 2,
      quote: "The structured approach provided by Vegah allowed us to achieve our digital transformation goals while reducing our technology costs by 35%.",
      author: "Michael Chen",
      position: "VP of Digital Transformation",
      company: "Healthcare Provider Network",
    },
    {
      id: 3,
      quote: "What impressed us most was how Vegah's methodology adapted to our specific industry challenges while maintaining a clear focus on measurable business outcomes.",
      author: "David Rodriguez",
      position: "COO",
      company: "Manufacturing Enterprise",
    },
  ];

  // Autoplay functionality
  useEffect(() => {
    // Start the autoplay interval
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds

    // Clear the interval when component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextTestimonial]); // Add nextTestimonial as a dependency

  // Reset the interval when user manually changes testimonial
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
  };

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    resetInterval();
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    resetInterval();
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
    resetInterval();
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 text-center uppercase tracking-wider">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Success stories from organizations that have transformed with Vegah.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div className="relative min-h-[300px] md:min-h-[250px]">
              <AnimatePresence mode="wait">
                {testimonials.map((testimonial, index) => (
                  index === activeIndex && (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-white shadow-lg rounded-xl px-10 py-8 max-w-3xl mx-auto text-center flex flex-col items-center justify-center"
                    >
                      {/* Large translucent quote icon */}
                      <div className="absolute top-4 left-4 text-6xl opacity-10 text-primary">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      
                      {/* Testimonial content */}
                      <p className="italic text-lg text-gray-700 mb-6">"{testimonial.quote}"</p>
                      
                      {/* Author info */}
                      <div className="mt-6">
                        {/* Optional: Avatar could be added here */}
                        {/* {testimonial.avatar && (
                          <div className="flex justify-center mb-3">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.author} 
                              className="h-10 w-10 rounded-full object-cover"
                            />
                          </div>
                        )} */}
                        
                        <p className="text-primary font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                        
                        {/* Optional: Client logo could be added here */}
                        {/* {testimonial.logo && (
                          <div className="absolute bottom-4 right-4 opacity-30">
                            <img 
                              src={testimonial.logo} 
                              alt={`${testimonial.company} logo`} 
                              className="h-8"
                            />
                          </div>
                        )} */}
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 items-center space-x-6">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-gray-300'}`}
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    scale: index === activeIndex ? 1.3 : 1,
                    backgroundColor: index === activeIndex ? '#004080' : '#D1D5DB'
                  }}
                  transition={{ duration: 0.3 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;