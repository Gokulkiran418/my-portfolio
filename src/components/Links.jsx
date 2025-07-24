import React from "react";
import { data } from '../data';
export function Links() {
  return (
    <section id="links" className="py-12 fade-in">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Links</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
      
      <p className="text-gray-600 dark:text-gray-400 flex flex-col md:flex-row items-center md:items-start text-center md:text-left break-words">
      <span className="flex items-center">
        <i className="fab fa-github mr-2 text-blue-500 dark:text-blue-300"></i>
        GitHub:
      </span>
        <a href={data.links.github} target="_blank" className="text-blue-500 hover:underline ml-1 break-all">
          {data.links.github}
        </a>
      </p>
      <p className="text-gray-600 dark:text-gray-400 flex flex-col md:flex-row items-center md:items-start text-center md:text-left break-words">
      <span className="flex items-center">
        <i className="fas fa-brain mr-2 text-blue-500 dark:text-blue-300"></i>
        RAG Website:
      </span>
        <a href={data.links.RAGApp} target="_blank" className="text-blue-500 hover:underline ml-1 break-all">
          {data.links.RAGApp}
        </a>
      </p>
      <p className="text-gray-600 dark:text-gray-400 flex flex-col md:flex-row items-center md:items-start text-center md:text-left break-words">
      <span className="flex items-center">
        <i className="fas fa-newspaper text-blue-500 dark:text-blue-300 mr-2"></i>
        News Website
      </span>
        <a href={data.links.newsapp} target="_blank" className="text-blue-500 hover:underline ml-1 break-all">
          {data.links.newsapp}
        </a>
      </p>
      <p className="text-gray-600 dark:text-gray-400 flex flex-col md:flex-row items-center md:items-start text-center md:text-left break-words">
      <span className="flex items-center">
         <i className="fas fa-shopping-cart mr-2 text-blue-500 dark:text-blue-300"></i>
        E-Shop Ecommerce WebApp:
      </span>
        <a href={data.links.ecommerce} target="_blank" className="text-blue-500 hover:underline ml-1 break-all">
          {data.links.ecommerce}
        </a>
      </p>
      <p className="text-gray-600 dark:text-gray-400 flex flex-col md:flex-row items-center md:items-start text-center md:text-left break-words">
      <span className="flex items-center">
       <i className="fas fa-cloud mr-2 text-blue-500 dark:text-blue-300"></i>
        Weather WebAPP:
      </span>
        <a href={data.links.weatherapp} target="_blank" className="text-blue-500 hover:underline ml-1 break-all">
          {data.links.weatherapp}
        </a>
      </p>
      </div>
    </section>
  );
}