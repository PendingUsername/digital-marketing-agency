import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-md">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img src="/assets/logo.png" className="h-8 mr-3" alt="Your Agency Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-primary">JLC WebDev</span>
        </Link>
        <div className="flex items-center lg:order-2">
          <Link to="/contact" className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5">
            Contact Us
          </Link>
        </div>
        <div className="hidden lg:flex lg:space-x-6 lg:order-1">
          <Link className="hover:text-primary" to="/">Home</Link>
          <Link className="hover:text-primary" to="/about">About</Link>
          <Link className="hover:text-primary" to="/services">Services</Link>
          <Link className="hover:text-primary" to="/portfolio">Portfolio</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
