import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.webp';

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#fef2f8] py-20 px-6 md:px-10 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <motion.div
          className="text-center md:text-left md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1f2937] leading-tight">
            Be Bold. Be Beautiful. <br />
            <span className="text-[#ec4899]">Be You.</span>
          </h1>
          <p className="text-[#1f2937] text-lg md:text-xl">
            Premium bridal and party makeup services that enhance your natural beauty.
          </p>
          <a href="tel:+9108981111297">
          
            <button className="bg-[#ec4899] text-white px-6 py-3 rounded hover:bg-pink-600 transition duration-300">
              Book Appointment
            </button>
       
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src={heroImg}
            alt="Makeup Artist Hero"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
