import React from 'react';
import rblogo from '../assets/rblogo.png'; 
import heroBg from '../assets/hero-bg.png'; 

const Hero = () => {
  return (
    <section 
      className="relative flex items-center min-h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* auto center */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left-Text & Buttons */}
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <h1 className="text-5xl md:text-7xl font-black text-brand-light leading-none mb-6">
            UNLEASH <br /> 
            YOUR <br /> 
            <span className="text-brand-yellow">POTENTIAL</span>
          </h1>
          
          <p className="text-gray-300 mb-8 max-w-lg text-lg">
            Join the elite community of athletes. Premium equipment, expert coaching, 
            and a culture of excellence designed for high performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-brand-yellow text-brand-black px-8 py-3 font-bold hover:brightness-110 transition">
              START TRAINING
            </button>
            <button className="border-2 border-brand-light text-brand-light px-8 py-3 font-bold hover:bg-brand-light hover:text-brand-black transition bg-black/30">
              OUR CLASSES
            </button>
          </div>
        </div>

        {/* Right-Logo */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={rblogo} 
            alt="Gym Hero Graphic" 
            className="w-80 md:w-[450px] drop-shadow-[0_0_30px_rgba(212,154,30,0.4)]" 
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;