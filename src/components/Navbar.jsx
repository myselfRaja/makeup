import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-[#ec4899] font-bold text-2xl">
            GlamorGlow
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-[#1f2937] hover:text-[#ec4899] cursor-pointer font-medium"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-[#1f2937] hover:text-[#ec4899] cursor-pointer font-medium"
            >
              About
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="text-[#1f2937] hover:text-[#ec4899] cursor-pointer font-medium"
            >
              Services
            </Link>
            <Link
              to="gallery"
              smooth={true}
              duration={500}
              className="text-[#1f2937] hover:text-[#ec4899] cursor-pointer font-medium"
            >
              Gallery
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-[#1f2937] hover:text-[#ec4899] cursor-pointer font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-[#ec4899] text-white px-5 py-2 rounded hover:bg-pink-600 transition duration-300">
              Book Now
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1f2937] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          {['home', 'about', 'services', 'gallery', 'contact'].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block text-[#1f2937] hover:text-[#ec4899] cursor-pointer font-medium"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
          <button className="bg-[#ec4899] text-white w-full py-2 rounded hover:bg-pink-600 transition duration-300">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
