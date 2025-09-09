import React from "react";
import { motion } from "framer-motion";
import PhysicalServices from "./PhysicalServices";
import img2 from "../assets/bg6.png";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 110,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.1,
    boxShadow: "0px 10px 25px rgba(255,255,255,0.5)",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95 },
};

const PhysicalSlider = () => {
  return (
    <motion.div
      className="relative bg-gradient-to-b from-gray-900 to-blue-950"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
    >
      {/* Hero Section with Background */}
      <motion.div
        className="relative w-full h-[90vh] flex justify-center items-center bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(59, 130, 246, 0.3), rgba(236, 72, 153, 0.3)), url(${img2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {/* Text Overlay with Box Shadow */}
        <motion.div
          className="relative z-10 text-center text-white px-6 md:px-12 bg-black/20 rounded-xl py-8"
          style={{
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
          }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              textShadow: "0 10px 20px rgba(0, 0, 0, 0.9)", // Enhanced shadow for clarity
            }}
            variants={textVariants}
          >
            Physical Security Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              textShadow: "0 10px 20px rgba(0, 0, 0, 0.9)", // Enhanced shadow for clarity
            }}
            variants={textVariants}
          >
            Comprehensive protection for your physical assets and personnel with cutting-edge solutions.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Info Section */}
      <motion.section
        className="w-full bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20 flex flex-col items-center text-center px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-8 tracking-tight"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}
          variants={childVariants}
        >
          All-in-One Physical Security Solutions
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="max-w-3xl text-lg md:text-xl leading-relaxed mb-10"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          variants={childVariants}
        >
          Our physical security services deliver unparalleled on-ground protection, featuring on-site guards, advanced CCTV monitoring, secure transport, and 24/7 support. With Shehrity, your people, property, and assets are safeguarded with precision and care.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#services"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg transition-colors duration-300 hover:from-blue-700 hover:to-indigo-700 !no-underline"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          whileHover="hover"
          whileTap="tap"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
        >
          Explore Our Services
        </motion.a>
      </motion.section>

      {/* Services Cards Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <PhysicalServices />
      </motion.div>
    </motion.div>
  );
};

export default PhysicalSlider;