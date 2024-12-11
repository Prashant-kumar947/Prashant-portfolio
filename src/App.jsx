import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./App.css";
import "tailwindcss/tailwind.css";

const App = () => (
  <div className="font-sans bg-gray-50">
  <Navbar />
  <div className="container mx-auto px-4  space-y-12">
    <Hero />
    <About />
    <Projects />
    <Contact />
  </div>
  <Footer />
</div>
);

export default App;