import React from 'react';
import { Link } from 'react-router-dom';

const MegaMenu = ({ type, onMouseEnter, onMouseLeave }) => {
  // Define menu items based on type
  const getMenuItems = () => {
    switch (type) {
      case 'professionalServices':
        return [
          { name: 'Digital Transformation', link: '/services/digital-transformation' },
          { name: 'Cloud Managed Services', link: '/services/cloud-managed-services' },
          { name: 'Application Development', link: '/services/application-development' },
          { name: 'ERP Implementations', link: '/services/erp-implementations' },
          { name: 'AI/ML & Emerging Tech', link: '/services/ai-ml-emerging-tech' },
        ];
      case 'consulting':
        return [
          { name: 'Strategy Consulting', link: '/services/strategy-consulting' },
          { name: 'Process Optimization', link: '/services/process-optimization' },
          { name: 'Technology Assessment', link: '/services/technology-assessment' },
        ];
      case 'sapProducts':
        return [
          { name: 'SAP S/4HANA', link: '/sap/s4hana' },
          { name: 'SAP Business One', link: '/sap/business-one' },
          { name: 'SAP SuccessFactors', link: '/sap/successfactors' },
        ];
      case 'sapServices':
        return [
          { name: 'SAP Implementation', link: '/sap/implementation' },
          { name: 'SAP Migration', link: '/sap/migration' },
          { name: 'SAP Support', link: '/sap/support' },
        ];
      default:
        return [];
    }
  };

  return (
    <div 
      className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-md py-2 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {getMenuItems().map((item, index) => (
        <Link 
          key={index}
          to={item.link}
          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors duration-200"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default MegaMenu;