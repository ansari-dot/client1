import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

import TestimonialCard from './TestimonialCard';
import Head from "./Head";
import CardAbout from './CardAbout';
import StatsSection from './StatsSection';
import ContactUs from './ContactUs';
import TeamCard from './TeamSection';
import TimelineSection from './TimelineSection';
import img from '../assets/bg1.jpg'; // Your background image

const AboutHeader = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      author: "Morgan Smith, CEO Tech Solutions",
      rating: 5,
      testimonial: "Shehrity has been our trusted security partner for over 5 years. Their professionalism and expertise are unmatched.",
    },
    {
      author: "Sarah Johnson, Operations Manager",
      rating: 5,
      testimonial: "The response time is incredible and their team is always prepared. We feel completely secure with their services.",
    },
    {
      author: "David Chen, Facility Director",
      rating: 5,
      testimonial: "From consultation to implementation, Shehrity delivered beyond our expectations. Highly recommended!",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // optional for parallax feel
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10">
        <Head title="About Us" currentPage="About" />

        {/* Intro */}
        <div className="py-20 px-4 pt-24">
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center">
            We are a leading security solutions provider dedicated to ensuring 
            safety and peace of mind. With years of experience, we offer 
            top-notch cybersecurity, physical security, and emergency response 
            services.
          </p>
        </div>

        {/* Hero Section */}
        <section className="py-20 overflow-hidden w-full">
          <div className="container mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-8">
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4 mr-2" />
                  40+ Years of Experience
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                  HELLO! HERE WE ARE -
                </h1>
                <p className="text-xl leading-relaxed">
                  Shehrity has provided security services to countless businesses since 1980. With over 40 years 
                  of expertise, we've become one of the country's leading security firms. Our team of highly 
                  trained professionals is committed to delivering the highest level of security services available.
                </p>
                <div className="flex flex-wrap gap-6">
                  {["Event Security", "Armed Security", "Venue Security"].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg"
                    alt="Security Professional"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About, Timeline, Stats, Testimonials, Team, Contact */}
        <CardAbout />
        <TimelineSection />
        <StatsSection />

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="max-w-2xl mx-auto">
            <div className="relative h-48">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-300 ${
                    index === currentTestimonial ? "opacity-100" : "opacity-0 translate-x-full"
                  }`}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <TeamCard />

        {/* Contact Section */}
        <div className="bg-gray-200/80 rounded p-10 mb-10">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
