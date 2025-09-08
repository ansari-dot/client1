import React from "react";
import { motion } from "framer-motion";
import PhysicalServices from "./PhysicalServices";
import img1 from "../assets/bg3.png"; // ✅ Background image

const PhysicalSlider = () => {
  return (
    <>
      {/* Hero Section with Background */}
      <div
        className="relative w-full h-[90vh] flex justify-center items-center bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${img1})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Overlay */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Physical Security Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive protection for your physical assets and personnel.
          </p>
        </div>
      </div>

      {/* Info Section */}
      <section className="w-full bg-[#15487d] text-white py-16 flex flex-col items-center text-center px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-bold mb-6">
          All-in-One Physical Security Solutions
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl text-md md:text-lg leading-relaxed mb-8">
          Our physical security services provide comprehensive on-ground
          protection, including on-site guards, advanced CCTV monitoring, secure
          transport, and 24/7 support. With Shehrity, your people, property, and
          assets are always protected.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#services"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 8px 20px rgba(255,255,255,0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full shadow-md transition-colors duration-300 hover:bg-blue-700 hover:text-black !no-underline">
          Explore Our Service
        </motion.a>
      </section>

      {/* Services Cards Section */}
      <PhysicalServices />
    </>
  );
};

export default PhysicalSlider;
