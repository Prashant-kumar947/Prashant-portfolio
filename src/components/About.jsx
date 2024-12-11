import React from 'react';

const About = () => (
  <section id="about" className="p-8 bg-white shadow-md rounded-lg mx-auto  text-center animate-slideInLeft">
    <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
    <p className="text-gray-600">I am a passionate developer who loves creating elegant and efficient solutions. With expertise in various technologies, I build responsive and user-friendly websites and applications.</p>
    <div className="mt-6 flex justify-center items-center space-x-6">
      
      <div className="text-left">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Who I Am</h3>
        <p className="text-gray-600 max-w-[970px]">I am a dedicated developer with a passion for crafting elegant solutions and building seamless user experiences. My expertise spans a wide array of modern web technologies and tools.</p>
      </div>
      <img src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Me" className="w-40 h-40 rounded-full shadow-md" />
    </div>
  </section>
);

export default About;