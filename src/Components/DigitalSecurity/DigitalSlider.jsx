import React from "react";
import { motion } from "framer-motion";
import DigitalServices from "./DigitalServices";
import img1 from "../assets/bg3.png"; // ✅ Background image

const DigitalSlider = () => {
  return (
    <>
      {/* Hero Section with Background */}
      <div
        className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${img1}})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold mb-4">
            Digital Security Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-lg md:text-xl max-w-3xl mx-auto">
            Advanced cybersecurity solutions protecting your digital presence,
            data, and infrastructure.
          </motion.p>

          <motion.a
            href="#services"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 8px 20px rgba(255,255,255,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow-md transition-colors duration-300 hover:bg-blue-700 hover:text-black !no-underline">
            Explore Our Services
          </motion.a>
        </div>
      </div>

      {/* Services Section */}
      <DigitalServices />
    </>
  );
};

export default DigitalSlider;
