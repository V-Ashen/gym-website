import React from 'react';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <nav className="bg-brand-black border-b border-gray-800">
      {/* THIS is the container: max-w-7xl keeps it from getting too wide, mx-auto centers it! */}
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-8 md:px-16">
        
        {/* Left side: Logo & Yellow Text */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Fitness Logo" className="w-16" />
          <span className="text-xl font-bold tracking-widest text-brand-yellow">FITNESS</span>
        </div>

        {/* Middle: Links */}
        <ul className="hidden md:flex space-x-10 text-brand-light text-sm font-bold tracking-widest">
          <li className="hover:text-brand-yellow cursor-pointer transition">HOME</li>
          <li className="hover:text-brand-yellow cursor-pointer transition">ABOUT</li>
          <li className="hover:text-brand-yellow cursor-pointer transition">SERVICES</li>
          <li className="hover:text-brand-yellow cursor-pointer transition">CONTACT</li>
        </ul>

        {/* Right side: Solid Yellow Button */}
        <button className="bg-brand-yellow text-brand-black px-6 py-2 text-sm font-bold hover:brightness-110 transition">
          JOIN NOW
        </button>

      </div>
    </nav>
  );
};

export default Navbar;