import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaEye,
  FaCloud,
  FaUserShield,
  FaNetworkWired,
  FaKey,
  FaExclamationTriangle,
  FaClipboardCheck,
  FaMobileAlt,
  FaCamera,
  FaWalking,
} from "react-icons/fa";
import img1 from "../assets/bg3.png";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
    },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    transition: { duration: 0.3 },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

const PhysicalServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);

  const physicalServices = [
    {
      id: 1,
      title: "Cyber Threat Monitoring",
      icon: <FaShieldAlt className="w-8 h-8" />,
      image: "/assets/Images/security1.webp",
      description:
        "24/7 real-time monitoring of your digital infrastructure to detect and respond to cyber threats instantly.",
      details:
        "Advanced AI-powered threat detection with immediate response protocols, protecting against malware, ransomware, and sophisticated cyber attacks.",
      benefits: [
        "Real-time threat detection",
        "Instant response protocols",
        "AI-powered analysis",
        "24/7 monitoring",
      ],
      applySteps: [
        "Contact our cybersecurity team",
        "Schedule infrastructure assessment",
        "Receive customized monitoring plan",
        "Deploy monitoring agents",
        "Begin 24/7 protection",
      ],
    },
    {
      id: 2,
      title: "Endpoint Security",
      icon: <FaLock className="w-8 h-8" />,
      image: "/assets/Images/security.jpeg",
      description:
        "Comprehensive protection for all devices connected to your network including laptops, mobiles, and IoT devices.",
      details:
        "Multi-layered endpoint protection with advanced antivirus, firewall, and intrusion prevention systems for complete device security.",
      benefits: [
        "Device-level protection",
        "Multi-platform support",
        "Zero-day threat protection",
        "Remote device management",
      ],
      applySteps: [
        "Device inventory assessment",
        "Security policy configuration",
        "Agent installation on devices",
        "Security testing and validation",
        "Ongoing monitoring and updates",
      ],
    },
    {
      id: 3,
      title: "Network Security",
      icon: <FaNetworkWired className="w-8 h-8" />,
      image: "/assets/Images/guardb.jpg",
      description:
        "Secure your network infrastructure with advanced firewalls, intrusion detection, and traffic analysis.",
      details:
        "Enterprise-grade network security solutions including next-gen firewalls, VPNs, and network segmentation to prevent unauthorized access.",
      benefits: [
        "Network traffic monitoring",
        "Intrusion prevention",
        "Secure remote access",
        "Network segmentation",
      ],
      applySteps: [
        "Network architecture review",
        "Security gap analysis",
        "Firewall deployment",
        "VPN configuration",
        "Security testing and optimization",
      ],
    },
    {
      id: 4,
      title: "Cloud Security",
      icon: <FaCloud className="w-8 h-8" />,
      image: "/assets/Images/tec.jpg",
      description:
        "Protect your cloud infrastructure and data with comprehensive cloud security solutions.",
      details:
        "Secure cloud migration, data encryption, access controls, and compliance management for AWS, Azure, and Google Cloud platforms.",
      benefits: [
        "Cloud data protection",
        "Access control management",
        "Compliance automation",
        "Multi-cloud security",
      ],
      applySteps: [
        "Cloud environment assessment",
        "Security architecture design",
        "Access policy configuration",
        "Data encryption implementation",
        "Compliance validation",
      ],
    },
    {
      id: 5,
      title: "Identity & Access Management",
      icon: <FaUserShield className="w-8 h-8" />,
      image: "/assets/Images/1.jpg",
      description:
        "Control who has access to your systems and data with advanced identity and access management solutions.",
      details:
        "Comprehensive IAM including single sign-on, multi-factor authentication, and privileged access management for enhanced security.",
      benefits: [
        "Single sign-on (SSO)",
        "Multi-factor authentication",
        "Privileged access management",
        "User lifecycle management",
      ],
      applySteps: [
        "Identity assessment",
        "Access policy design",
        "SSO implementation",
        "MFA deployment",
        "User training and onboarding",
      ],
    },
    {
      id: 6,
      title: "Vulnerability Assessment",
      icon: <FaEye className="w-8 h-8" />,
      image: "/assets/Images/44.jpg",
      description:
        "Identify and prioritize security vulnerabilities in your systems before attackers can exploit them.",
      details:
        "Comprehensive vulnerability scanning and penetration testing to identify security weaknesses and provide remediation guidance.",
      benefits: [
        "Comprehensive scanning",
        "Risk prioritization",
        "Remediation guidance",
        "Regular assessments",
      ],
      applySteps: [
        "Scope definition",
        "Vulnerability scanning",
        "Risk assessment report",
        "Remediation planning",
        "Follow-up validation",
      ],
    },
    {
      id: 7,
      title: "Security Key Management",
      icon: <FaKey className="w-8 h-8" />,
      image: "/assets/Images/cmo.jpg",
      description:
        "Secure management of cryptographic keys and certificates for data encryption and digital signatures.",
      details:
        "Enterprise-grade key management solutions for encryption keys, SSL certificates, and API keys with automated rotation and lifecycle management.",
      benefits: [
        "Automated key rotation",
        "Certificate lifecycle management",
        "Secure key storage",
        "Compliance reporting",
      ],
      applySteps: [
        "Key inventory assessment",
        "Management platform setup",
        "Policy configuration",
        "Integration with systems",
        "Monitoring and maintenance",
      ],
    },
    {
      id: 8,
      title: "Incident Response",
      icon: <FaExclamationTriangle className="w-8 h-8" />,
      image: "/assets/Images/22.jpg",
      description:
        "Rapid response to security incidents with expert incident handling and recovery services.",
      details:
        "24/7 incident response team ready to handle security breaches, malware infections, and other cybersecurity emergencies with rapid containment and recovery.",
      benefits: [
        "24/7 response team",
        "Rapid containment",
        "Forensic analysis",
        "Recovery assistance",
      ],
      applySteps: [
        "Incident response plan review",
        "Team contact establishment",
        "Escalation procedures",
        "Response activation",
        "Post-incident analysis",
      ],
    },
    {
      id: 9,
      title: "Compliance Management",
      icon: <FaClipboardCheck className="w-8 h-8" />,
      image: "/assets/Images/b1.jpg",
      description:
        "Ensure compliance with industry standards and regulations including GDPR, HIPAA, and PCI-DSS.",
      details:
        "Comprehensive compliance management services including gap analysis, policy development, and ongoing monitoring to meet regulatory requirements.",
      benefits: [
        "Regulatory compliance",
        "Gap analysis",
        "Policy development",
        "Ongoing monitoring",
      ],
      applySteps: [
        "Compliance requirements review",
        "Gap analysis",
        "Remediation plan",
        "Policy implementation",
        "Continuous monitoring",
      ],
    },
    {
      id: 10,
      title: "Security Risk Assessment",
      icon: <FaEye className="w-8 h-8" />,
      image: "/assets/Images/security.jpeg",
      description:
        "Comprehensive evaluation of security risks and vulnerabilities in your environment.",
      details:
        "Professional security assessments including physical security audits, threat analysis, and development of risk mitigation strategies.",
      benefits: [
        "Comprehensive analysis",
        "Risk identification",
        "Mitigation strategies",
        "Regular updates",
      ],
      applySteps: [
        "Site survey request",
        "Assessment scheduling",
        "Detailed evaluation",
        "Report delivery",
        "Implementation support",
      ],
    },
    {
      id: 11,
      title: "Drone Surveillance",
      icon: <FaCamera className="w-8 h-8" />,
      image: "/assets/Images/drone.jpg",
      description:
        "Aerial surveillance for large perimeters and difficult-to-reach areas.",
      details:
        "Utilizing advanced drones equipped with high-resolution cameras and thermal imaging for comprehensive site monitoring and rapid incident response.",
      benefits: [
        "Wide area coverage",
        "Rapid deployment",
        "Thermal imaging",
        "Cost-effective monitoring",
      ],
      applySteps: [
        "Consultation and site assessment",
        "Flight plan development",
        "Regulatory compliance check",
        "Deployment and monitoring",
        "Data analysis and reporting",
      ],
    },
    {
      id: 12,
      title: "K9 Security Services",
      icon: <FaWalking className="w-8 h-8" />,
      image: "/assets/Images/k9.jpg",
      description:
        "Highly trained K9 units for enhanced detection and deterrence.",
      details:
        "Specialized K9 teams providing expert detection of contraband, explosives, and intruders, as well as crowd control and executive protection.",
      benefits: [
        "Enhanced detection",
        "Strong deterrence",
        "Crowd control",
        "Specialized training",
      ],
      applySteps: [
        "Needs assessment and K9 suitability",
        "Deployment strategy",
        "Handler and K9 team assignment",
        "On-site integration",
        "Ongoing training and support",
      ],
    },
  ];

  const ServiceCard = ({ service }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
      <motion.div
        className="relative w-full h-48 cursor-pointer"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        whileHover="hover"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Front: Image only */}
          <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Back: simplified details */}
          <div
            className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-lg p-3 shadow-md bg-gradient-to-br from-orange-500 to-amber-600 border border-orange-400/50 flex flex-col"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div className="text-center mb-1">
              <div className="inline-block p-1.5 rounded bg-white/20">
                <div className="w-5 h-5">{service.icon}</div>
              </div>
              <h3
                className="text-sm font-bold text-black mt-1"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
              >
                {service.title}
              </h3>
            </div>
            <p
              className="text-black text-xs text-center mb-1"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              {service.description.substring(0, 45)}...
            </p>
            <div className="mt-auto flex justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(service);
                  setShowApplyModal(true);
                }}
                className="bg-amber-500 text-black py-1 px-2 rounded text-xs font-semibold hover:bg-amber-600 transition"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                Apply
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center py-20"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="text-center mb-8"
        >
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-black mb-2"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}
            variants={childVariants}
          >
            Physical Security Services
          </motion.h1>
          <motion.p
            className="text-sm text-black max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            variants={childVariants}
          >
            Comprehensive physical and digital security solutions designed to protect your infrastructure and assets
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {physicalServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
      {/* How to Apply Modal */}
      {showApplyModal && selectedService && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowApplyModal(false)}
        >
          <motion.div
            variants={modalVariants}
            className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2
                className="text-2xl font-bold text-black"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
              >
                How to Apply for {selectedService.title}
              </h2>
              <button
                onClick={() => setShowApplyModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h3
                  className="text-lg font-semibold text-black mb-3"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  Application Process
                </h3>
                <div className="space-y-3">
                  {selectedService.applySteps.map((step, index) => (
                    <motion.div
                      key={index}
                      variants={childVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ amount: 0.3 }}
                      className="flex items-start space-x-3"
                    >
                      <div
                        className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <p
                          className="text-black"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                        >
                          {step}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                variants={childVariants}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <h4
                  className="font-semibold text-black mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  Ready to get started?
                </h4>
                <p
                  className="text-black mb-3"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  Contact our team today to begin securing your infrastructure and assets.
                </p>
                <motion.button
                  className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  Contact Us Now
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PhysicalServices;
