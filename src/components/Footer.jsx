import React from "react";
import { Link } from "react-router-dom";
import { BiBrain } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + Tagline */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <BiBrain className="text-emerald-150 text-3xl" />
            <h2 className="text-xl font-bold font-serif text-emerald-150">CareerCompass</h2>
          </div>
          <p className="text-sm text-gray-200">
            Guiding you towards the right career path with personalized tools and insights.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/quiz" className="hover:underline">Quiz</Link></li>
            <li><Link to="/counselling" className="hover:underline">Counselling</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/jobs" className="hover:underline">Find Jobs</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="bg-white p-2 rounded-full text-emerald-800 hover:bg-emerald-300 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white p-2 rounded-full text-emerald-800 hover:bg-emerald-300 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-white p-2 rounded-full text-emerald-800 hover:bg-emerald-300 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-white p-2 rounded-full text-emerald-800 hover:bg-emerald-300 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Career Compass. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
