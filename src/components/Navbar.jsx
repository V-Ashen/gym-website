import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 150; 

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-brand-black border-b border-gray-800 sticky top-0 z-50"> 
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-8 md:px-16">
        
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Fitness Logo" className="w-12" />
          <span className="text-xl font-bold tracking-widest text-brand-yellow">FITNESS</span>
        </a>

        <ul className="hidden md:flex space-x-10 text-sm font-bold tracking-widest">
          <li>
            <a href="#home" className={`transition ${active === 'home' ? 'text-brand-yellow' : 'text-brand-light hover:text-brand-yellow'}`}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className={`transition ${active === 'about' ? 'text-brand-yellow' : 'text-brand-light hover:text-brand-yellow'}`}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#services" className={`transition ${active === 'services' ? 'text-brand-yellow' : 'text-brand-light hover:text-brand-yellow'}`}>
              SERVICES
            </a>
          </li>
          <li>
            <a href="#contact" className={`transition ${active === 'contact' ? 'text-brand-yellow' : 'text-brand-light hover:text-brand-yellow'}`}>
              CONTACT
            </a>
          </li>
        </ul>

        <a href="#contact" className="bg-brand-yellow text-brand-black px-6 py-2 text-sm font-bold hover:brightness-110 transition">
          JOIN NOW
        </a>

      </div>
    </nav>
  );
};

export default Navbar;