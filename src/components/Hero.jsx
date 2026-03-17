import React from 'react';
import rblogo from '../assets/rblogo.png'; 
import heroBg from '../assets/hero-bg.png'; 

const Hero = () => {
  return (
    <section 
      className="relative flex flex-col justify-center min-h-[85vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* 
        THIS IS THE FIX! 
        bg-gradient-to-r fades from Black (Left) -> Semi-Black (Middle) -> Transparent (Right).
        Now your white wall will show perfectly behind the logo! 
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between gap-12 mt-10">
        
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
            <button className="bg-brand-yellow text-brand-black px-8 py-3 font-bold hover:brightness-110 transition rounded-sm">
              START TRAINING
            </button>
            <button className="border border-white/30 text-brand-light px-8 py-3 font-bold hover:bg-white/10 transition rounded-sm">
              OUR CLASSES
            </button>
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

      {/* 
        BONUS FIX: The Stats Bar from your Figma design! 
        It sits perfectly at the bottom left of the Hero section.
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 mt-auto pb-12">
        <div className="flex gap-10">
          <div>
            <h3 className="text-3xl font-black text-brand-yellow">24/7</h3>
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1">Access</p>
          </div>
          <div>
            <h3 className="text-3xl font-black text-brand-yellow">50+</h3>
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1">Classes</p>
          </div>
          <div>
            <h3 className="text-3xl font-black text-brand-yellow">15+</h3>
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-1">Trainers</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;