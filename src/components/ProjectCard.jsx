import React from 'react';

const ProjectCard = ({ title, description, image }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden animate-zoomIn">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default ProjectCard;