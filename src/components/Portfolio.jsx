import React from 'react';

const projectsData = [
  { id: 1, img: '/1.png', alt: 'Project 1', link: '#' }, // Placeholder
  { id: 2, img: '/2.png', alt: 'Project 2', link: '#' }, // Placeholder
  { id: 3, img: '/wikpedia.png', alt: 'Wikipedia Clone', link: '#' }, // Placeholder
  { id: 4, img: '/rick-and-morty-figma.png', alt: 'Rick and Morty Page', link: 'https://rick-morty-pages-rj6a.vercel.app/' }, // Placeholder
  { id: 5, img: '/list-of-country.png', alt: 'List of Countries', link: '#' }, // Placeholder
  { id: 6, img: '/resto.jpg', alt: 'Restaurant Website', link: '#' }, // Placeholder
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 px-6 bg-gray-100 dark:bg-gray-950 transition-colors duration-700 ease-in-out">
      <div className="container mx-auto">
        <div className="heading text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 animate-fadeInUp">Portfolio</h2>
          <span className="text-lg text-blue-600 dark:text-blue-400 font-semibold animate-fadeInUp delay-100">My Recent Work</span>
        </div>

        <div className="portfolio-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-img relative group rounded-xl overflow-hidden shadow-lg
                         transform hover:scale-102 transition-all duration-300 ease-in-out animate-zoomIn"
              // FIX: Changed `${index * 0.1s}` to `${index * 0.1}s` for correct JavaScript syntax
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder image. Replace with your actual project images in the public folder */}
              <img src={project.img} alt={project.alt} className="w-full h-64 object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl font-semibold bg-blue-600 px-6 py-3 rounded-lg
                             hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
