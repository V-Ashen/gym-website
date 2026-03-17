import React from 'react';

const About = () => {
  return (
    
    <section id="about" className="py-24 bg-brand-dark border-t border-gray-900">
      
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left Gym Image */}
        <div className="md:w-1/2 relative">
          
          {/* Yellow design around image */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-yellow z-0"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-yellow z-0"></div>
          
          {/* Image */}
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
            alt="Person lifting weights" 
            className="w-full h-auto object-cover relative z-10 grayscale hover:grayscale-0 transition duration-500 shadow-xl shadow-black/50"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2">
          <h4 className="text-brand-yellow font-bold tracking-widest text-sm mb-2">ESTABLISHED 2023</h4>
          <h2 className="text-4xl md:text-5xl font-black text-brand-light mb-6">
            MORE THAN A GYM,<br />A MOVEMENT.
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed text-lg">
            At Fitness Sports Center, we believe in the raw power of human potential. 
            Our facility was built for those who refuse to settle. Whether you're lifting 
            your first barbell or training for a podium finish, our community provides 
            the environment you need to thrive.
          </p>
          
          <ul className="space-y-4 text-brand-light font-bold">
            <li className="flex items-center gap-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-yellow text-brand-black text-sm">✔</span> 
              State-of-the-art Strength Equipment
            </li>
            <li className="flex items-center gap-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-yellow text-brand-black text-sm">✔</span> 
              Science-based Training Methodology
            </li>
            <li className="flex items-center gap-4">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-yellow text-brand-black text-sm">✔</span> 
              Supportive High-Performance Community
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;