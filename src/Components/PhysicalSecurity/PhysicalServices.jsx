import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaEye, FaCamera, FaLock, FaUserShield, FaExclamationTriangle, FaClipboardCheck, FaKey, FaBell, FaWalking } from 'react-icons/fa';

const PhysicalServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);

  const physicalServices = [
    {
      id: 1,
      title: "24/7 Security Guard Services",
      icon: <FaShieldAlt className="w-8 h-8" />,
      image: "/assets/Images/guardb.jpg",
      description: "Professional security guards providing round-the-clock protection for your premises.",
      details: "Highly trained security personnel equipped with advanced communication systems and emergency response protocols to ensure comprehensive protection.",
      benefits: ["24/7 monitoring", "Trained professionals", "Emergency response", "Access control"],
      applySteps: [
        "Schedule site assessment",
        "Security needs analysis",
        "Guard deployment plan",
        "Contract agreement",
        "Service commencement"
      ]
    },
    {
      id: 2,
      title: "CCTV Surveillance Systems",
      icon: <FaCamera className="w-8 h-8" />,
      image: "/assets/Images/1122.jpg",
      description: "Advanced CCTV systems with remote monitoring and AI-powered analytics.",
      details: "State-of-the-art surveillance cameras with night vision, motion detection, and cloud storage capabilities for comprehensive security coverage.",
      benefits: ["HD recording", "Remote monitoring", "Motion alerts", "Cloud storage"],
      applySteps: [
        "Site survey and assessment",
        "System design proposal",
        "Installation scheduling",
        "System testing",
        "Training and handover"
      ]
    },
    {
      id: 3,
      title: "Access Control Systems",
      icon: <FaLock className="w-8 h-8" />,
      image: "/assets/Images/1.jpg",
      description: "Biometric and card-based access control systems for secure entry management.",
      details: "Advanced access control solutions including fingerprint scanners, facial recognition, and RFID card systems with centralized management.",
      benefits: ["Biometric authentication", "Access logs", "Remote management", "Integration capability"],
      applySteps: [
        "Access requirements analysis",
        "System selection",
        "Installation planning",
        "User registration",
        "System activation"
      ]
    },
    {
      id: 4,
      title: "Mobile Patrol Services",
      icon: <FaWalking className="w-8 h-8" />,
      image: "/assets/Images/22.jpg",
      description: "Scheduled and random mobile patrols to secure large areas and multiple locations.",
      details: "Professional mobile patrol units conducting regular inspections, perimeter checks, and emergency response across multiple sites.",
      benefits: ["Regular patrols", "Area coverage", "Emergency response", "Incident reporting"],
      applySteps: [
        "Patrol area assessment",
        "Route planning",
        "Patrol scheduling",
        "Service agreement",
        "Patrol commencement"
      ]
    },
    {
      id: 5,
      title: "Executive Protection",
      icon: <FaUserShield className="w-8 h-8" />,
      image: "/assets/Images/12.jpg",
      description: "Personal security services for high-profile individuals and corporate executives.",
      details: "Elite protection services including close protection officers, secure transportation, and risk assessment for VIP security.",
      benefits: ["Close protection", "Risk assessment", "Secure transport", "24/7 availability"],
      applySteps: [
        "Security risk assessment",
        "Protection plan development",
        "Team assignment",
        "Route planning",
        "Service activation"
      ]
    },
    {
      id: 6,
      title: "Intrusion Detection Systems",
      icon: <FaExclamationTriangle className="w-8 h-8" />,
      image: "/assets/Images/44.jpg",
      description: "Advanced sensors and alarms to detect unauthorized entry attempts immediately.",
      details: "Comprehensive intrusion detection including motion sensors, door/window contacts, glass break detectors, and integrated alarm systems.",
      benefits: ["Immediate alerts", "Multiple sensor types", "Integration capability", "False alarm reduction"],
      applySteps: [
        "Security vulnerability assessment",
        "System design",
        "Sensor installation",
        "System testing",
        "Monitoring setup"
      ]
    },
    {
      id: 7,
      title: "Security Consulting",
      icon: <FaClipboardCheck className="w-8 h-8" />,
      image: "/assets/Images/guad.jpg",
      description: "Expert security assessments and customized protection strategies for your specific needs.",
      details: "Comprehensive security consulting including risk assessments, security audits, and development of customized security protocols.",
      benefits: ["Risk assessment", "Customized solutions", "Expert guidance", "Compliance support"],
      applySteps: [
        "Initial consultation",
        "Security assessment",
        "Solution proposal",
        "Implementation planning",
        "Ongoing support"
      ]
    },
    {
      id: 8,
      title: "Key Management Systems",
      icon: <FaKey className="w-8 h-8" />,
      image: "/assets/Images/cmo.jpg",
      description: "Secure key storage, tracking, and management systems for facility access.",
      details: "Advanced key management solutions including electronic key cabinets, key tracking systems, and access logging for complete key security.",
      benefits: ["Secure key storage", "Access tracking", "Audit trails", "Automated management"],
      applySteps: [
        "Key inventory assessment",
        "System selection",
        "Installation and setup",
        "User training",
        "System activation"
      ]
    },
    {
      id: 9,
      title: "Alarm Monitoring Services",
      icon: <FaBell className="w-8 h-8" />,
      image: "/assets/Images/tec.jpg",
      description: "24/7 professional monitoring of security alarms with immediate response dispatch.",
      details: "Central monitoring station services with trained operators monitoring your security systems and dispatching emergency response when needed.",
      benefits: ["24/7 monitoring", "Trained operators", "Emergency dispatch", "Real-time alerts"],
      applySteps: [
        "System compatibility check",
        "Monitoring agreement",
        "System integration",
        "Testing and verification",
        "Monitoring activation"
      ]
    },
    {
      id: 10,
      title: "Security Risk Assessment",
      icon: <FaEye className="w-8 h-8" />,
      image: "/assets/Images/security.jpeg",
      description: "Comprehensive evaluation of security risks and vulnerabilities in your environment.",
      details: "Professional security assessments including physical security audits, threat analysis, and development of risk mitigation strategies.",
      benefits: ["Comprehensive analysis", "Risk identification", "Mitigation strategies", "Regular updates"],
      applySteps: [
        "Site survey request",
        "Assessment scheduling",
        "Detailed evaluation",
        "Report delivery",
        "Implementation support"
      ]
    }
  ];

  const ServiceCard = ({ service }) => {
    return (
      <div className="relative h-[450px] cursor-pointer group [perspective:1000px]">
        <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front Side (Image only) */}
          <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back Side (match Digital) */}
          <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-blue-900/90 to-purple-900/90 backdrop-blur-xl border border-blue-700/50 rounded-2xl shadow-2xl p-8 flex flex-col">
            <div className="flex items-start mb-6">
              <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white ml-4">{service.title}</h3>
            </div>

            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              {service.details}
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-white font-semibold text-sm mb-2">Key Benefits:</p>
                <ul className="text-sm text-gray-200 space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-300 mr-2 mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(service);
                  setShowApplyModal(true);
                }}
                className="w-full bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent mb-6">
            Physical Security Services
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade physical security solutions designed to protect your sites with expert precision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {physicalServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* How to Apply Modal */}
      {showApplyModal && selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowApplyModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">How to Apply for {selectedService.title}</h2>
              <button
                onClick={() => setShowApplyModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Application Process</h3>
                <div className="space-y-3">
                  {selectedService.applySteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-gray-700">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">Ready to secure your premises?</h4>
                <p className="text-amber-700 mb-3">Contact our security team today to discuss your protection needs.</p>
                <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                  Contact Us Now
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PhysicalServices;