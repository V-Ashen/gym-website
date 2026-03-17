import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="min-h-screen bg-brand-black font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  );
}

export default App;