import React from "react";
import { motion } from "framer-motion";
import { FaFingerprint } from "react-icons/fa";
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Styles.css";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";
import ourservice from '../assets/ourservices.jpg'
export default function Service() {
  return (
    <div 
      className="py-8 px-4 sm:px-6 lg:px-12 relative"
      style={{
        backgroundImage: `url(${ourservice})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content container */}
      <div className="relative z-10">
      {/* ✅ Heading */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center align-center">
          <span className="text-white font-semibold px-2 py-1 rounded-full text-base sm:text-lg flex gap-1 font-['Roboto_Condensed',sans-serif]">
            Our Services
          </span>
        </div>
        <motion.h2
          className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-tight font-['Roboto_Condensed',sans-serif]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Smart Security Services for Your Safety
        </motion.h2>
      </motion.div>

      {/* ✅ Swiper Carousel */}
      <div className="relative w-full max-w-5xl mx-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={600}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2, spaceBetween: 25 },
          }}
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {[
            "/assets/Images/girls.jpg",
            "/assets/Images/12.jpg",
            "/assets/Images/girls.jpg",
            "/assets/Images/13.png",
            "/assets/Images/22.jpg",
            "/assets/Images/girls.jpg",
          ].map((img, i) => (
            <SwiperSlide key={i} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={img}
                alt={`Service ${i + 1}`}
                className="w-full h-40 sm:h-48 md:h-52 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-1 sm:-left-6 top-1/2 -translate-y-1/2 bg-white/80 text-black w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-sm flex items-center justify-center z-20 hover:bg-gray-200 duration-200">
          <BiSolidLeftArrowAlt size={16} />
        </button>
        <button className="swiper-button-next-custom absolute right-1 sm:-right-6 top-1/2 -translate-y-1/2 bg-white/80 text-black w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-sm flex items-center justify-center z-20 hover:bg-gray-200 duration-200">
          <BiSolidRightArrowAlt size={16} />
        </button>
      </div>
    </div>
  </div>
  );
}
