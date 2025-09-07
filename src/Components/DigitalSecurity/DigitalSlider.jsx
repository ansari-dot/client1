import React, { useState } from "react";
import { motion } from "framer-motion";
import DigitalServices from "./DigitalServices";

const DigitalSlider = () => {
  const slides = [
    { id: 1, image: "../assets/Images/guardb.jpg" },
    { id: 2, image: "../assets/Images/tec.jpg" },
    { id: 3, image: "../assets/Images/cmo.jpg" },
    { id: 4, image: "../assets/Images/1122.jpg" },
    { id: 5, image: "../assets/Images/guardb.jpg" },
    { id: 6, image: "../assets/Images/tec.jpg" },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Hero Slider */}
      <div className="relative w-full overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-full h-[90vh] flex justify-center items-center"
            >
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Digital Security Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Advanced cybersecurity protecting your digital presence.
          </p>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute inset-y-0 left-0 flex items-center justify-center w-12 text-white hover:bg-white/20 rounded-s-lg z-10"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute inset-y-0 right-0 flex items-center justify-center w-12 text-white hover:bg-white/20 rounded-e-lg z-10"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Dots Pagination */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full border transition ${
                current === index
                  ? "bg-[#15487d] border-blue-700"
                  : "border-gray-300 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <DigitalServices />
    </>
  );
};

export default DigitalSlider;
