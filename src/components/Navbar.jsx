import React from 'react';
import logo from '../assets/logo.png'; // Importing your logo!

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-8 md:px-16 bg-brand-black border-b border-gray-800">
      {/* Left side: Small Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Fitness Logo" className="w-16" />
        <span className="text-xl font-bold tracking-widest text-brand-yellow">FITNESS</span>
      </div>

      {/* Middle: Links (Hidden on small phones, visible on desktop) */}
      <ul className="hidden md:flex space-x-10 text-brand-light text-sm font-bold tracking-widest">
        <li className="hover:text-brand-yellow cursor-pointer transition">HOME</li>
        <li className="hover:text-brand-yellow cursor-pointer transition">ABOUT</li>
        <li className="hover:text-brand-yellow cursor-pointer transition">SERVICES</li>
        <li className="hover:text-brand-yellow cursor-pointer transition">CONTACT</li>
      </ul>

      {/* Right side: Button */}
      <button className="bg-brand-yellow text-brand-black px-6 py-2 text-sm font-bold hover:bg-yellow-600 transition">
        JOIN NOW
      </button>
    </nav>
  );
};

export default Navbar;