import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaEye, FaCloud, FaUserShield, FaNetworkWired, FaKey, FaExclamationTriangle, FaClipboardCheck, FaMobileAlt } from 'react-icons/fa';

const DigitalServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);

  const digitalServices = [
    {
      id: 1,
      title: "Cyber Threat Monitoring",
      icon: <FaShieldAlt className="w-8 h-8" />,
      image: "/assets/Images/security1.webp",
      description: "24/7 real-time monitoring of your digital infrastructure to detect and respond to cyber threats instantly.",
      details: "Advanced AI-powered threat detection with immediate response protocols, protecting against malware, ransomware, and sophisticated cyber attacks.",
      benefits: ["Real-time threat detection", "Instant response protocols", "AI-powered analysis", "24/7 monitoring"],
      applySteps: [
        "Contact our cybersecurity team",
        "Schedule infrastructure assessment",
        "Receive customized monitoring plan",
        "Deploy monitoring agents",
        "Begin 24/7 protection"
      ]
    },
    {
      id: 2,
      title: "Endpoint Security",
      icon: <FaLock className="w-8 h-8" />,
      image: "/assets/Images/security.jpeg",
      description: "Comprehensive protection for all devices connected to your network including laptops, mobiles, and IoT devices.",
      details: "Multi-layered endpoint protection with advanced antivirus, firewall, and intrusion prevention systems for complete device security.",
      benefits: ["Device-level protection", "Multi-platform support", "Zero-day threat protection", "Remote device management"],
      applySteps: [
        "Device inventory assessment",
        "Security policy configuration",
        "Agent installation on devices",
        "Security testing and validation",
        "Ongoing monitoring and updates"
      ]
    },
    {
      id: 3,
      title: "Network Security",
      icon: <FaNetworkWired className="w-8 h-8" />,
      image: "/assets/Images/guardb.jpg",
      description: "Secure your network infrastructure with advanced firewalls, intrusion detection, and traffic analysis.",
      details: "Enterprise-grade network security solutions including next-gen firewalls, VPNs, and network segmentation to prevent unauthorized access.",
      benefits: ["Network traffic monitoring", "Intrusion prevention", "Secure remote access", "Network segmentation"],
      applySteps: [
        "Network architecture review",
        "Security gap analysis",
        "Firewall deployment",
        "VPN configuration",
        "Security testing and optimization"
      ]
    },
    {
      id: 4,
      title: "Cloud Security",
      icon: <FaCloud className="w-8 h-8" />,
      image: "/assets/Images/tec.jpg",
      description: "Protect your cloud infrastructure and data with comprehensive cloud security solutions.",
      details: "Secure cloud migration, data encryption, access controls, and compliance management for AWS, Azure, and Google Cloud platforms.",
      benefits: ["Cloud data protection", "Access control management", "Compliance automation", "Multi-cloud security"],
      applySteps: [
        "Cloud environment assessment",
        "Security architecture design",
        "Access policy configuration",
        "Data encryption implementation",
        "Compliance validation"
      ]
    },
    {
      id: 5,
      title: "Identity & Access Management",
      icon: <FaUserShield className="w-8 h-8" />,
      image: "/assets/Images/1.jpg",
      description: "Control who has access to your systems and data with advanced identity and access management solutions.",
      details: "Comprehensive IAM including single sign-on, multi-factor authentication, and privileged access management for enhanced security.",
      benefits: ["Single sign-on (SSO)", "Multi-factor authentication", "Privileged access management", "User lifecycle management"],
      applySteps: [
        "Identity assessment",
        "Access policy design",
        "SSO implementation",
        "MFA deployment",
        "User training and onboarding"
      ]
    },
    {
      id: 6,
      title: "Vulnerability Assessment",
      icon: <FaEye className="w-8 h-8" />,
      image: "/assets/Images/44.jpg",
      description: "Identify and prioritize security vulnerabilities in your systems before attackers can exploit them.",
      details: "Comprehensive vulnerability scanning and penetration testing to identify security weaknesses and provide remediation guidance.",
      benefits: ["Comprehensive scanning", "Risk prioritization", "Remediation guidance", "Regular assessments"],
      applySteps: [
        "Scope definition",
        "Vulnerability scanning",
        "Risk assessment report",
        "Remediation planning",
        "Follow-up validation"
      ]
    },
    {
      id: 7,
      title: "Security Key Management",
      icon: <FaKey className="w-8 h-8" />,
      image: "/assets/Images/cmo.jpg",
      description: "Secure management of cryptographic keys and certificates for data encryption and digital signatures.",
      details: "Enterprise-grade key management solutions for encryption keys, SSL certificates, and API keys with automated rotation and lifecycle management.",
      benefits: ["Automated key rotation", "Certificate lifecycle management", "Secure key storage", "Compliance reporting"],
      applySteps: [
        "Key inventory assessment",
        "Management platform setup",
        "Policy configuration",
        "Integration with systems",
        "Monitoring and maintenance"
      ]
    },
    {
      id: 8,
      title: "Incident Response",
      icon: <FaExclamationTriangle className="w-8 h-8" />,
      image: "/assets/Images/22.jpg",
      description: "Rapid response to security incidents with expert incident handling and recovery services.",
      details: "24/7 incident response team ready to handle security breaches, malware infections, and other cybersecurity emergencies with rapid containment and recovery.",
      benefits: ["24/7 response team", "Rapid containment", "Forensic analysis", "Recovery assistance"],
      applySteps: [
        "Incident response plan review",
        "Team contact establishment",
        "Escalation procedures",
        "Response activation",
        "Post-incident analysis"
      ]
    },
    {
      id: 9,
      title: "Compliance Management",
      icon: <FaClipboardCheck className="w-8 h-8" />,
      image: "/assets/Images/b1.jpg",
      description: "Ensure compliance with industry standards and regulations including GDPR, HIPAA, and PCI-DSS.",
      details: "Comprehensive compliance management services including gap analysis, policy development, and ongoing monitoring to meet regulatory requirements.",
      benefits: ["Regulatory compliance", "Gap analysis", "Policy development", "Ongoing monitoring"],
      applySteps: [
        "Compliance requirements review",
        "Gap analysis",
        "Remediation plan",
        "Policy implementation",
        "Continuous monitoring"
      ]
    },
    {
      id: 10,
      title: "Mobile Security",
      icon: <FaMobileAlt className="w-8 h-8" />,
      image: "/assets/Images/12.jpg",
      description: "Protect mobile devices and applications from security threats with comprehensive mobile security solutions.",
      details: "Enterprise mobile security including mobile device management (MDM), mobile application security, and secure mobile app development.",
      benefits: ["Device management", "App security testing", "Secure development", "Remote wipe capabilities"],
      applySteps: [
        "Mobile environment assessment",
        "MDM solution deployment",
        "App security testing",
        "Policy configuration",
        "User training and support"
      ]
    }
  ];

  const ServiceCard = ({ service }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
      <motion.div
        className="relative w-full h-80 cursor-pointer"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Front of card */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-xl p-6 flex flex-col items-center justify-center text-white shadow-lg">
            <div className="mb-4 text-4xl">{service.icon}</div>
            <h3 className="text-xl font-bold text-center mb-2">{service.title}</h3>
            <p className="text-sm text-center opacity-90">{service.description}</p>
            <div className="mt-4 text-xs opacity-75">Hover to see details</div>
          </div>

          {/* Back of card */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-orange-500 via-red-500 to-amber-600 rounded-xl p-6 shadow-lg" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
            <h4 className="text-lg font-bold text-white mb-3">{service.title}</h4>
            <p className="text-sm text-orange-100 mb-4">{service.details}</p>
            <div className="mb-4">
              <h5 className="text-sm font-semibold text-white mb-2">Key Benefits:</h5>
              <ul className="text-xs text-orange-100 space-y-1">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-1 h-1 bg-amber-300 rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedService(service);
                setShowApplyModal(true);
              }}
              className="w-full bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition-colors text-sm font-semibold"
            >
              How to Apply
            </button>
          </div>
        </motion.div>
      </motion.div>
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
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            Digital Security Services
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade cybersecurity solutions designed to protect your digital infrastructure with cutting-edge technology and expert precision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {digitalServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-64 cursor-pointer group [perspective:1000px]"
            >
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side (Image only) */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-xl overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back Side (simplified) */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-orange-500 to-amber-600 backdrop-blur-xl border border-orange-400/50 rounded-xl shadow-lg p-4 flex flex-col">
                  <div className="text-center mb-2">
                    <div className="inline-block p-2 rounded-lg bg-white/20">
                      {service.icon}
                    </div>
                    <h3 className="text-base font-bold text-white mt-1">{service.title}</h3>
                  </div>
                  <p className="text-orange-100 text-xs text-center mb-2">
                    {service.description.substring(0, 60)}...
                  </p>
                  <div className="mt-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                        setShowApplyModal(true);
                      }}
                      className="w-full bg-amber-500 text-white py-1.5 px-2 rounded text-xs font-semibold hover:bg-amber-600 transition"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
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
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-gray-700">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Ready to get started?</h4>
                <p className="text-blue-700 mb-3">Contact our team today to begin securing your digital infrastructure.</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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

export default DigitalServices;