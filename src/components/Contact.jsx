import React, { useState } from 'react';

const Contact = () => {
  //user types
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: 'Membership Inquiry',
    message: ''
  });

  // errors
  const [errors, setErrors] = useState({});
  //successfully sent
  const [isSubmitted, setIsSubmitted] = useState(false);

  //updates state every time the user types a letter
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // If typing start, remove the error message for that field
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  //Validation part
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  //Runs when click the Yellow Button
  const handleSubmit = (e) => {
    e.preventDefault(); // Stops page from refreshing
    const validationErrors = validate(); // Run the checks
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Show errors
      setIsSubmitted(false);
    } else {
      setErrors({});
      setIsSubmitted(true); // Show success message!
      // Clear the form
      setFormData({ name: '', email: '', inquiry: 'Membership Inquiry', message: '' });
      
      // Hide the success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    
    <section id="contact" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row gap-16">
        
        {/* Left Side */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-black text-brand-light leading-none uppercase mb-6">
            READY TO <br />
            <span className="text-brand-yellow">JOIN THE</span><br />
            ELITE?
          </h2>
          <p className="text-gray-400 mb-12 leading-relaxed">
            Our team is ready to help you map out your transformation. Reach out and let's get to work.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-brand-yellow font-bold text-xs tracking-widest uppercase mb-2">Visit Us</h4>
              <p className="text-brand-light text-sm">120/5 Vidya Mawatha,<br />Colombo 07, Sri Lanka</p>
            </div>
            <div>
              <h4 className="text-brand-yellow font-bold text-xs tracking-widest uppercase mb-2">Email Us</h4>
              <p className="text-brand-light text-sm">hello@fitnesscenter.com</p>
            </div>
            <div>
              <h4 className="text-brand-yellow font-bold text-xs tracking-widest uppercase mb-2">Call Us</h4>
              <p className="text-brand-light text-sm">+94 (78) 353-6671</p>
            </div>
          </div>
        </div>

        {/* Right Side(Form) */}
        <div className="md:w-1/2 bg-[#1A1A1A] p-8 rounded-sm border border-gray-800">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div className="flex flex-col md:flex-row gap-6">
              {/* Name Field */}
              <div className="flex-1">
                <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2 block">Full Name</label>
                <input 
                  type="text" name="name" value={formData.name} onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full bg-[#111] border ${errors.name ? 'border-red-500' : 'border-gray-800'} p-3 text-brand-light focus:outline-none focus:border-brand-yellow transition`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div className="flex-1">
                <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2 block">Email Address</label>
                <input 
                  type="text" name="email" value={formData.email} onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full bg-[#111] border ${errors.email ? 'border-red-500' : 'border-gray-800'} p-3 text-brand-light focus:outline-none focus:border-brand-yellow transition`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Dropdown */}
            <div>
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2 block">Inquiry Type</label>
              <select 
                name="inquiry" value={formData.inquiry} onChange={handleChange}
                className="w-full bg-[#111] border border-gray-800 p-3 text-brand-light focus:outline-none focus:border-brand-yellow transition"
              >
                <option>Membership Inquiry</option>
                <option>Personal Training</option>
                <option>General Question</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-2 block">Message</label>
              <textarea 
                name="message" rows="4" value={formData.message} onChange={handleChange}
                placeholder="Tell us about your goals..."
                className={`w-full bg-[#111] border ${errors.message ? 'border-red-500' : 'border-gray-800'} p-3 text-brand-light focus:outline-none focus:border-brand-yellow transition resize-none`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <div className="bg-green-900/30 border border-green-500 text-green-400 p-3 text-sm text-center">
                Message sent successfully! We will contact you soon.
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-brand-yellow text-brand-black font-bold tracking-widest uppercase py-4 hover:brightness-110 transition mt-2"
            >
              Claim Your Session
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;