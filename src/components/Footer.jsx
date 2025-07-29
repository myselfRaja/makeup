import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#fdf7f4] text-[#222222] pt-12 pb-6 px-6 md:px-16 lg:px-24 border-t border-[#eee]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Name / Logo */}
        <div>
          <h2 className="text-2xl font-bold text-[#D19C97] mb-4">Glam By [YourName]</h2>
          <p className="text-sm leading-6">
            Professional makeup services for bridal, party, and special occasions. Helping you look your best on your big day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#D19C97] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-[#D19C97] transition">Home</a></li>
            <li><a href="#about" className="hover:text-[#D19C97] transition">About</a></li>
            <li><a href="#services" className="hover:text-[#D19C97] transition">Services</a></li>
            <li><a href="#gallery" className="hover:text-[#D19C97] transition">Gallery</a></li>
            <li><a href="#contact" className="hover:text-[#D19C97] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-[#D19C97] mb-4">Get in Touch</h3>
          <ul className="text-sm space-y-2">
            <li>Email: <a href="mailto:youremail@example.com" className="hover:text-[#D19C97]">youremail@example.com</a></li>
            <li>Phone: <a href="tel:+911234567890" className="hover:text-[#D19C97]">+91 12345 67890</a></li>
            <li>Location: Kolkata, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-[#eee] pt-6 text-center text-sm text-[#777]">
        &copy; {new Date().getFullYear()} Glam By Sakti. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
