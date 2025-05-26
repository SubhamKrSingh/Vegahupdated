import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import MegaMenu from './MegaMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuTimeout, setMenuTimeout] = useState(null);

  // Clean up timeout on unmount
  React.useEffect(() => {
    return () => {
      if (menuTimeout) clearTimeout(menuTimeout);
    };
  }, [menuTimeout]);

  // Handle scroll
  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function for industry links
  const getIndustryLinks = () =>
    [
      { name: 'Healthcare', link: '/industries/healthcare' },
      { name: 'Finance', link: '/industries/finance' },
      { name: 'Retail', link: '/industries/retail' },
      { name: 'Government', link: '/industries/government' },
      { name: 'Education', link: '/industries/education' },
      { name: 'Manufacturing', link: '/industries/manufacturing' },
      { name: 'Energy', link: '/industries/energy' },
      { name: 'Telecom', link: '/industries/telecom' },
    ];

  // Menu handlers
  const handleMenuHover = (menuName) => {
    if (menuTimeout) clearTimeout(menuTimeout);
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
    setMenuTimeout(timeout);
  };

  const handleSubmenuEnter = (menuName) => {
    if (menuTimeout) clearTimeout(menuTimeout);
    setActiveMenu(menuName);
  };

  const handleSubmenuLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
    setMenuTimeout(timeout);
  };

  const handleMenuClick = (menuName) => {
    if (menuTimeout) clearTimeout(menuTimeout);
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={isScrolled ? 
              require('../../assets/logo/vegahdark.png') : 
              require('../../assets/logo/vegahlight.png')} 
            alt="VEGAH LLC" 
            className="h-12" 
            style={{ transform: 'scale(3)', transformOrigin: 'left center' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={`${isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:underline'} font-medium`}>
            Home
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleMenuHover('services')}
            onMouseLeave={handleMenuLeave}
          >
            <button 
              className={`${isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:underline'} font-medium flex items-center`}
              onClick={(e) => {
                e.stopPropagation();
                handleMenuClick('services');
              }}
            >
              Services
              <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {activeMenu === 'services' && (
              <div 
                className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50"
                onMouseEnter={() => handleSubmenuEnter('services')}
                onMouseLeave={handleSubmenuLeave}
              >
                <div className="relative">
                  <div 
                    className="py-2 hover:bg-blue-50 px-4 flex justify-between items-center cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMenuClick('professionalServices');
                    }}
                  >
                    <span className="text-gray-700">Professional Services</span>
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {/* {activeMenu === 'professionalServices' && (
                    <MegaMenu 
                      type="professionalServices" 
                      onMouseEnter={() => handleSubmenuEnter('professionalServices')}
                      onMouseLeave={handleSubmenuLeave}
                    />
                  )} */}

                  <div 
                    className="py-2 hover:bg-blue-50 px-4 flex justify-between items-center cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMenuClick('consulting');
                    }}
                  >
                    <span className="text-gray-700">Consulting</span>
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {/* {activeMenu === 'consulting' && (
                    <MegaMenu 
                      type="consulting" 
                      onMouseEnter={() => handleSubmenuEnter('consulting')}
                      onMouseLeave={handleSubmenuLeave}
                    />
                  )} */}
                </div>
              </div>
            )}
          </div>

          {/* SAP Solutions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleMenuHover('sapSolutions')}
            onMouseLeave={handleMenuLeave}
          >
            <button 
              className={`${isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:underline'} font-medium flex items-center`}
              onClick={(e) => {
                e.stopPropagation();
                handleMenuClick('sapSolutions');
              }}
            >
              SAP Solutions
              <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {activeMenu === 'sapSolutions' && (
              <div 
                className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50"
                onMouseEnter={() => handleSubmenuEnter('sapSolutions')}
                onMouseLeave={handleSubmenuLeave}
              >
                <div className="relative">
                  <div 
                    className="py-2 hover:bg-blue-50 px-4 flex justify-between items-center cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMenuClick('sapProducts');
                    }}
                  >
                    <span className="text-gray-700">SAP Products</span>
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {/* {activeMenu === 'sapProducts' && (
                    <MegaMenu 
                      type="sapProducts" 
                      onMouseEnter={() => handleSubmenuEnter('sapProducts')}
                      onMouseLeave={handleSubmenuLeave}
                    />
                  )} */}

                  <div 
                    className="py-2 hover:bg-blue-50 px-4 flex justify-between items-center cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMenuClick('sapServices');
                    }}
                  >
                    <span className="text-gray-700">SAP Services</span>
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {/* {activeMenu === 'sapServices' && (
                    <MegaMenu 
                      type="sapServices" 
                      onMouseEnter={() => handleSubmenuEnter('sapServices')}
                      onMouseLeave={handleSubmenuLeave}
                    />
                  )} */}
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleMenuHover('industries')}
            onMouseLeave={handleMenuLeave}
          >
            <button 
              className={`${isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:underline'} font-medium flex items-center`}
              onClick={() => handleMenuClick('industries')}
            >
              Industries
              <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {activeMenu === 'industries' && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50 py-2">
                {getIndustryLinks().map((item, index) => (
                  <Link 
                    key={index}
                    to={item.link}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className={`${isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:underline'} font-medium`}>
            Contact
          </Link>
          <Link to="/start-transformation" className="btn-primary">
            Start Your Transformation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`lg:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-4 py-3 space-y-1">
            <Link to="/" className="block py-2 text-gray-800 font-medium border-b border-gray-200">
              Home
            </Link>
            <div className="py-2 border-b border-gray-200">
              <button 
                className="w-full text-left text-gray-800 font-medium py-2"
                onClick={() => handleMenuClick('mobileServices')}
              >
                Services
              </button>
              {activeMenu === 'mobileServices' && (
                <div className="pl-4 pb-2">
                  <Link to="/services/digital-transformation" className="block py-2 text-gray-700">Digital Transformation</Link>
                  <Link to="/services/ai-ml" className="block py-2 text-gray-700">AI/ML</Link>
                  <Link to="/services/sap" className="block py-2 text-gray-700">SAP Managed Services</Link>
                  <Link to="/services/cloud" className="block py-2 text-gray-700">Cloud Management</Link>
                  <Link to="/services/erp" className="block py-2 text-gray-700">ERP</Link>
                  <Link to="/services/cybersecurity" className="block py-2 text-gray-700">Cybersecurity</Link>
                  <Link to="/services/staffing" className="block py-2 text-gray-700">Staffing</Link>
                </div>
              )}
            </div>
            <div className="py-2 border-b border-gray-200">
              <button 
                className="w-full text-left text-gray-800 font-medium py-2"
                onClick={() => handleMenuClick('mobileSapSolutions')}
              >
                SAP Solutions
              </button>
              {activeMenu === 'mobileSapSolutions' && (
                <div className="pl-4 pb-2">
                  <Link to="/sap/s4hana" className="block py-2 text-gray-700">SAP S/4HANA</Link>
                  <Link to="/sap/s4hana-cloud" className="block py-2 text-gray-700">SAP S/4HANA Cloud</Link>
                  <Link to="/sap/business-one" className="block py-2 text-gray-700">SAP Business One</Link>
                  <Link to="/sap/implementation" className="block py-2 text-gray-700">SAP Implementation</Link>
                  <Link to="/sap/migration" className="block py-2 text-gray-700">SAP Migration</Link>
                  <Link to="/sap/support" className="block py-2 text-gray-700">SAP Support</Link>
                </div>
              )}
            </div>
            <div className="py-2 border-b border-gray-200">
              <button 
                className="w-full text-left text-gray-800 font-medium py-2"
                onClick={() => handleMenuClick('mobileIndustries')}
              >
                Industries
              </button>
              {activeMenu === 'mobileIndustries' && (
                <div className="pl-4 pb-2">
                  <Link to="/industries/finance" className="block py-2 text-gray-700">Finance</Link>
                  <Link to="/industries/healthcare" className="block py-2 text-gray-700">Healthcare</Link>
                  <Link to="/industries/retail" className="block py-2 text-gray-700">Retail</Link>
                  <Link to="/industries/manufacturing" className="block py-2 text-gray-700">Manufacturing</Link>
                  <Link to="/industries/government" className="block py-2 text-gray-700">Government</Link>
                  <Link to="/industries/energy" className="block py-2 text-gray-700">Energy</Link>
                  <Link to="/industries/telecom" className="block py-2 text-gray-700">Telecom</Link>
                  <Link to="/industries/hospitality" className="block py-2 text-gray-700">Hospitality</Link>
                </div>
              )}
            </div>
            <Link to="/contact" className="block py-2 text-primary font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;