import React from "react";
import { motion } from "framer-motion";
import DigitalServices from "./DigitalServices";
import { Shield, Monitor, Lock, Cpu, ArrowRight, CheckCircle, Zap, Database } from "lucide-react";

// Enhanced animation variants with smoother transitions
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

const fadeInUpVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const slideInVariants = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  idle: { 
    scale: 1,
    boxShadow: "0 4px 20px rgba(34, 197, 94, 0.3)",
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 8px 30px rgba(34, 197, 94, 0.5)",
    transition: { 
      duration: 0.2,
      ease: "easeInOut"
    },
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1 }
  },
};

const DigitalSlider = () => {
  const features = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "24/7 Cyber Monitoring",
      description: "Real-time threat detection and response"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Firewall Protection",
      description: "Multi-layered network security solutions"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Encryption & Privacy",
      description: "Enterprise-grade data protection"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Powered Security",
      description: "Intelligent threat analysis and prevention"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Digital Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.3) 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }} />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            className="mb-8"
            variants={fadeInUpVariants}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full px-4 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">Digital Security Innovation</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-emerald-100 to-green-200 bg-clip-text text-transparent mb-6 leading-tight">
              Advanced
              <span className="block bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Digital Security
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Protecting your digital infrastructure with cutting-edge cybersecurity solutions, advanced threat detection, and comprehensive data protection services.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUpVariants}
          >
            <motion.button
              className="group bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2 shadow-xl"
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
            
            <motion.button
              className="group border-2 border-emerald-400/30 text-emerald-300 font-semibold px-8 py-4 rounded-full backdrop-blur-sm hover:bg-emerald-500/10 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="relative py-20 bg-gradient-to-r from-emerald-950/50 to-green-950/50 backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cybersecurity Solutions?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Industry-leading digital protection powered by advanced AI and expert security professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-emerald-400/30 transition-all duration-300"
                variants={slideInVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.1)"
                }}
              >
                <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Value Proposition Section */}
      <motion.section
        className="relative py-20 bg-gradient-to-b from-slate-900 to-emerald-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Next-Generation Cybersecurity
                <span className="block text-emerald-400">Protection & Intelligence</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our comprehensive digital security services combine AI-powered threat detection, advanced encryption technologies, and expert cybersecurity professionals to deliver complete protection for your digital assets and infrastructure.
              </p>
              
              <div className="space-y-4">
                {[
                  "Advanced threat detection and prevention",
                  "Real-time network monitoring and analysis",
                  "Data encryption and privacy protection",
                  "24/7 cybersecurity incident response"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    variants={fadeInUpVariants}
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              variants={fadeInUpVariants}
            >
              <div className="relative bg-gradient-to-br from-emerald-600/20 to-green-600/20 rounded-3xl p-8 backdrop-blur-sm border border-emerald-400/20">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-3xl" />
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-8 left-6 w-2 h-2 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                <div className="relative z-10 text-center">
                  <Shield className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Intelligent Protection
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Securing your digital future with AI-powered cybersecurity solutions and expert threat intelligence.
                  </p>
                  <motion.button
                    className="bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
      >
        <DigitalServices />
      </motion.div>
    </div>
  );
};

export default DigitalSlider;