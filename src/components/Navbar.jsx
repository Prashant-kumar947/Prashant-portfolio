import React from 'react';

const Navbar = () => (
  <nav className="bg-[#fff] shadow-md p-4 flex justify-between items-center sticky top-0 z-50 ">
  <div className="text-[#232323] text-xl font-bold">Prashant's-Portfolio</div>
  <ul className="flex space-x-4 text-gray-600">
    <li><a href="#about" className="hover:text-blue-600">About</a></li>
    <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
    <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
  </ul>
</nav>
);

export default Navbar;