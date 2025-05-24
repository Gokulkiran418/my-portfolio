import React from 'react';
import { data } from '../data';
export function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl animate-on-appear">
      <div className="p-4">
        {project.video ? (
          <video
            src={project.video}
            alt={`${project.title} preview`}
            className="project-video"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            controls
            muted
            autoPlay
            loop
            loading="lazy"
          />
        ) : project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="project-image"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            loading="lazy"
          />
        ) : null}
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>
        <p className="text-gray-500 dark:text-gray-300 mt-2">Technologies: {project.technologies.join(", ")}</p>
        {project.link && (
          <p className="mt-2">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Website link</a>
          </p>
        )}
        {project.githublink && (
          <p className="mt-2">
            <a href={project.githublink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Github</a>
          </p>
        )}
      </div>
    </div>
  );
}