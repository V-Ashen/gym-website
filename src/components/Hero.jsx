import React, { useState, useEffect } from 'react';
import rblogo from '../assets/rblogo.png'; 
import heroBg from '../assets/hero-bg.png'; 

// Number Counter Component
const NumberCounter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = Math.abs(Math.floor(duration / end));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const Hero = () => {
  return (
    
    <section 
      id="home" className="relative flex flex-col min-h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 flex-1 flex flex-col md:flex-row items-center justify-between gap-12 pt-12 pb-8">
        
        {/* Left Column: Text & Buttons */}
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <h1 className="text-5xl md:text-7xl font-black text-brand-light leading-none mb-6">
            UNLEASH <br /> 
            YOUR <br /> 
            <span className="text-brand-yellow">POTENTIAL</span>
          </h1>
          
          <p className="text-gray-300 mb-8 max-w-lg text-sm leading-relaxed">
            Join the elite community of athletes and fitness enthusiasts. 
            Premium equipment, expert coaching, and a culture of excellence designed for high performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#contact" className="bg-brand-yellow text-brand-black px-8 py-3 font-bold hover:brightness-110 transition rounded-sm text-center">
              START TRAINING
            </a>
            <a href="#services" className="border border-white/30 text-brand-light px-8 py-3 font-bold hover:bg-white/10 transition rounded-sm text-center">
              OUR CLASSES
            </a>
          </div>
        </div>

        {/* Right Column: Giant Logo graphic */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={rblogo} 
            alt="Gym Hero Graphic" 
            className="w-80 md:w-[450px] drop-shadow-2xl" 
          />
        </div>

      </div>

         {/* Stats Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pb-6">
        <div className="flex gap-10">
          <div>
            <h3 className="text-3xl font-black text-brand-yellow">
              <NumberCounter end={24} suffix="/7" duration={1000} />
            </h3>
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1">Access</p>
          </div>
          <div>
            <h3 className="text-3xl font-black text-brand-yellow">
              <NumberCounter end={50} suffix="+" duration={2000} />
            </h3>
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1">Classes</p>
          </div>
          <div>
            <h3 className="text-3xl font-black text-brand-yellow">
              <NumberCounter end={15} suffix="+" duration={1500} />
            </h3>
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1">Trainers</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;