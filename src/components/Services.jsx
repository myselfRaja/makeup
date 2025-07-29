import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Special Occasion Makeup',
    desc: 'Flawless looks tailored for weddings, receptions, and festive events.',
    icon: '✨',
  },
  {
    title: 'Bridal Make-up',
    desc: 'Timeless and radiant bridal looks that last all day and night.',
    icon: '👰',
  },
  {
    title: 'Fashion Show Makeup',
    desc: 'High-definition runway looks for fashion shows and shoots.',
    icon: '💄',
  },
  {
    title: 'All Types of Party',
    desc: 'From casual to grand parties — makeup styles that suit the vibe.',
    icon: '🎉',
  },
  {
    title: 'Party Makeup',
    desc: 'Get ready to slay your evening with flawless glam makeup.',
    icon: '💃',
  },
  {
    title: 'Personal Services',
    desc: 'Customized makeup sessions based on your unique style and needs.',
    icon: '🤝',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#fdf2f8] py-20 px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md border border-pink-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#1f2937] mb-2">
                {service.title}
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
