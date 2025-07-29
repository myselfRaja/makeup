import React from 'react';
import { motion } from 'framer-motion';

// ✅ Import images from src/assets
import gallery1 from '../assets/gallery1.webp';
import gallery2 from '../assets/gallery2.webp';
import gallery3 from '../assets/gallery3.webp';
import gallery4 from '../assets/gallery4.webp';
import gallery5 from '../assets/gallery5.webp';
import gallery6 from '../assets/gallery6.webp';

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-6 md:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Work Gallery
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
