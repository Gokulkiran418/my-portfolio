import React from 'react';
import { data } from '../data';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const [showAll, setShowAll] = React.useState(false);
  const visibleProjects = showAll ? data.projects : data.projects.slice(0, 4);

  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      {data.projects.length > 4 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  );
}