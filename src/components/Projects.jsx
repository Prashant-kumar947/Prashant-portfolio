import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    { title: "Project Title 1", description: "Brief description of the project.", image: "https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.jpg?s=612x612&w=0&k=20&c=5A0CEsRbIrgnci0Q7LSxbrUZ1pliXy8C04ffpnjnVIw=" },
    { title: "Project Title 2", description: "Brief description of the project.", image: "https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-132231.jpg" },
    { title: "Project Title 1", description: "Brief description of the project.", image: "https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.jpg?s=612x612&w=0&k=20&c=5A0CEsRbIrgnci0Q7LSxbrUZ1pliXy8C04ffpnjnVIw=" },
    { title: "Project Title 2", description: "Brief description of the project.", image: "https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-132231.jpg" }
  ];

  return (
    <section id="projects" className="p-8 bg-gray-50 shadow-md rounded-lg mx-auto max-w-6xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;