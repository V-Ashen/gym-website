import React from 'react';
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    
    <footer className="bg-brand-black py-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Logo & Name */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Fitness Logo" className="w-12" />
          <div>
            <h4 className="text-brand-light font-black tracking-widest uppercase leading-none">FITNESS SPORTS</h4>
            <span className="text-brand-yellow text-[10px] font-bold tracking-widest uppercase">Center • Est. 2023</span>
          </div>
        </div>

        {/* Middle: Links */}
        <div className="flex gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
          <a href="#" className="hover:text-brand-yellow transition">Privacy Policy</a>
          <a href="#" className="hover:text-brand-yellow transition">Terms of Service</a>
          <a href="#" className="hover:text-brand-yellow transition">Careers</a>
        </div>

        {/* Right: Copyright */}
        <div className="text-[10px] text-gray-600 uppercase tracking-widest text-right">
          © 2026 Fitness Sports Center. <br className="md:hidden" />All Rights Reserved.<br />
          <span className="text-brand-yellow">STAY HARD.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;