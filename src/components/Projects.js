import React from 'react';

const projects = [
  {
    title: 'Property-management-software',
    description: 'A web application built with React and Flask that allows you manage diffrent properties of different landlords and their tenants.',
    techStack: 'React, Flask, Postgres',
    imageUrl: '/property.jpg',
    liveLink: 'https://github.com/Emmamwitimi/Property-management-software.git',
  },
  {
    title: 'NAWIRI',
    description: 'Nawiri is a simple web application that allows users to search, filter, and book stays at various houses located in different regions. ',
    techStack: 'React, Tailwind CSS, flask',
    imageUrl: '/nawiri.png',
    liveLink: 'https://nawiri-in-react.vercel.app/',
  },
  {
    title: 'Learning Management System (LMS)',
    description: 'This project is a Learning Management System (LMS) web application built with React. It provides an intuitive interface where users can access courses and navigate through the content.',
    techStack: 'React, Flask, Postgres',
    imageUrl: '/neda.png',
    liveLink: 'https://neda-lms-soft.vercel.app/',
  },
  // Add more projects here
];

function Projects() {
  return (
    <section className="py-16 dark:bg-gray-900 text-gray-900 dark:text-gray-100" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-teal-500 mb-10">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover"
                onError={(e) => e.target.src = 'https://via.placeholder.com/300'}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">{project.techStack}</div>
                <a
                  href={project.liveLink}
                  className="text-teal-500 hover:text-teal-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*view more Button */}
      <a
            href="https://github.com/Emmamwitimi"
            
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md font-medium hover:bg-teal-600 transition-transform transform hover:scale-105"
          >
            View more projects
          </a>
    </section>
  );
}

export default Projects;
