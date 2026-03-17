import React from 'react';

// 1. IMPORT YOUR ICONS HERE
import iconStrength from '../assets/icon-strength.png';
import iconGroup from '../assets/icon-group.png';
import iconPersonal from '../assets/icon-personal.png';

// 2. UPDATED REUSABLE COMPONENT: Now accepts an 'icon' image
const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-brand-dark p-10 border-t-2 border-transparent hover:border-brand-yellow transition duration-300 group rounded-sm">
      
      {/* The Icon Image */}
      <div className="mb-8">
        <img 
          src={icon} 
          alt={`${title} icon`} 
          className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
        />
      </div>
      
      <h3 className="text-2xl font-black text-brand-light mb-4">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-8">
        {description}
      </p>
      
      <button className="text-brand-yellow text-xs font-bold tracking-widest hover:text-brand-light transition uppercase flex items-center gap-2">
        LEARN MORE <span>→</span>
      </button>
      
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        
        {/* 3. UPDATED HEADER LAYOUT: Title on left, paragraph on right (Like Figma!) */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="md:w-1/2">
            <h4 className="text-brand-yellow font-bold tracking-widest text-xs mb-4 uppercase">
              OUR CORE OFFERINGS
            </h4>
            <h2 className="text-4xl md:text-6xl font-black text-brand-light leading-none uppercase">
              DOMINATE YOUR<br />TRAINING
            </h2>
          </div>
          
          <div className="md:w-1/2 md:flex md:justify-end">
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We provide elite infrastructure and expertise for every aspect of your physical journey.
            </p>
          </div>
        </div>

        {/* 4. GRID OF CARDS: Passing the icons into the components */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard 
            title="STRENGTH TRAINING" 
            description="Specialized equipment for powerlifting, bodybuilding, and Olympic lifting. Our racks and platforms are built for heavy metal."
            icon={iconStrength}
          />
          <ServiceCard 
            title="GROUP CLASSES" 
            description="HIIT, mobility flows, and metabolic conditioning. Experience the energy of a pack training for common goals."
            icon={iconGroup}
          />
          <ServiceCard 
            title="PERSONAL COACHING" 
            description="1-on-1 sessions with elite coaches. Get a customized roadmap tailored to your specific physiological needs."
            icon={iconPersonal}
          />
        </div>

      </div>
    </section>
  );
};

export default Services;