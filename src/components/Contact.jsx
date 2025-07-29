import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-10 lg:px-20 bg-[#f8f9fa] text-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#1f2937]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        {/* Form */}
        <motion.form
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thanks for contacting!'); // 🔧 Later connect to backend or email
          }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D19C97]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D19C97]"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D19C97]"
            required
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-md bg-[#D19C97] text-white font-semibold hover:bg-[#bb867f] transition duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* Optional Contact Info */}
        <motion.div
          className="mt-12 text-center text-sm text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Or reach me at: <br />
          📞 <span className="font-medium">+91 98765 43210</span> <br />
          📧 <span className="font-medium">makeup@example.com</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
