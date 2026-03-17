import React from 'react';

// This is the REUSABLE COMPONENT the recruiters want to see!
const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-brand-dark p-10 border-t-4 border-transparent hover:border-brand-yellow transition duration-300 group">
      {/* Icon Placeholder (Turns yellow when you hover over the card) */}
      <div className="w-12 h-12 mb-6 border-2 border-brand-yellow rounded flex items-center justify-center text-brand-yellow font-bold text-xl group-hover:bg-brand-yellow group-hover:text-brand-black transition">
        ⚡
      </div>
      <h3 className="text-2xl font-black text-brand-light mb-4">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-8">
        {description}
      </p>
      <button className="text-brand-yellow text-sm font-bold tracking-widest hover:text-white transition">
        LEARN MORE →
      </button>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-24 bg-brand-black">
      
      {/* THE CONTAINER */}
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        
        {/* Section Header */}
        <div className="mb-16">
          <h4 className="text-brand-yellow font-bold tracking-widest text-sm mb-2">OUR CORE OFFERINGS</h4>
          <h2 className="text-4xl md:text-5xl font-black text-brand-light leading-tight">
            DOMINATE YOUR<br />TRAINING
          </h2>
        </div>

        {/* Grid of Reusable Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="STRENGTH TRAINING" 
            description="Specialized equipment for powerlifting, bodybuilding, and Olympic lifting. Our racks and platforms are built for heavy metal."
          />
          <ServiceCard 
            title="GROUP CLASSES" 
            description="HIIT, mobility flows, and metabolic conditioning. Experience the energy of a pack training for common goals."
          />
          <ServiceCard 
            title="PERSONAL COACHING" 
            description="1-on-1 sessions with elite coaches. Get a customized roadmap tailored to your specific physiological needs."
          />
        </div>

      </div>
    </section>
  );
};

export default Services;