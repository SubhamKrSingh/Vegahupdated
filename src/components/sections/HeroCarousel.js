import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Accelerate Your Digital Transformation',
      subtitle: 'Leverage our 25+ years of experience to drive innovation',
      cta: 'Get Started',
      ctaLink: '/contact',
      secondaryCta: 'Learn More',
      secondaryCtaLink: '/services',
      bgImage: 'bg-[url("/src/assets/images/hero-1.jpg")]',
      keyword: ''
    },
    {
      id: 2,
      title: 'Velocity in Transformation',
      subtitle: 'Unlock new opportunities with our AI and ML solutions',
      cta: 'Schedule a Consultation',
      ctaLink: '/contact',
      secondaryCta: 'View Case Studies',
      secondaryCtaLink: '/success-stories',
      bgImage: 'bg-[url("/src/assets/images/hero-2.jpg")]',
      keyword: ''
    },
    {
      id: 3,
      title: 'Real Gain. Real Impact.',
      subtitle: 'Streamline operations with our SAP and cloud managed services',
      cta: 'Talk to an Expert',
      ctaLink: '/contact',
      secondaryCta: 'Explore Solutions',
      secondaryCtaLink: '/services',
      bgImage: 'bg-[url("/src/assets/images/hero-3.jpg")]',
      keyword: ''
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Background with overlay */}
          <div className={`absolute inset-0 ${slide.bgImage} bg-cover bg-center`}>
            <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-20 flex items-center justify-center h-full">
            <div className="container mx-auto px-4 text-center text-white">
              <span className="inline-block text-xl md:text-2xl font-light mb-2 opacity-90">{slide.keyword}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{slide.subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to={slide.ctaLink} className="btn-primary text-lg">
                  {slide.cta}
                </Link>
                <Link to={slide.secondaryCtaLink} className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg">
                  {slide.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30">
        <div className="flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;