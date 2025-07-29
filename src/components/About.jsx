import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about.webp';

const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-20 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image with animation */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={aboutImg}
            alt="Makeup Artist"
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </motion.div>

        {/* Right Content with animation */}
        <motion.div
          className="md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937]">
            About Me
          </h2>
          <p className="text-[#4b5563] text-lg leading-relaxed">
            I'm a professional makeup artist with over 5 years of experience in bridal, party, and editorial makeup. 
            I believe in enhancing natural beauty while giving you the confidence to shine on your special day.
            Every brushstroke tells your story — let’s make it beautiful.
          </p>
          <p className="text-[#ec4899] font-semibold text-lg">— Sakti</p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
