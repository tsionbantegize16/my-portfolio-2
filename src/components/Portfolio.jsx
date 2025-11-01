import React from 'react';

const projectsData = [
  { id: 1, img: '/coop-bank.jpg', alt: 'Coop Bank Oromia API Platform', link: 'https://developers.coopbankoromiasc.com/', description: 'Banking API Developer Platform' },
  { id: 2, img: '/etwic.jpg', alt: 'ETWIC - Ethiopian Women in Computing', link: 'https://etwic.org/', description: 'Ethiopian Women in Computing Organization' },
  { id: 3, img: '/etnerd.jpg', alt: 'ETNerd - Ethiopian Tech Community', link: 'https://www.etnerd.com/', description: 'Ethiopian Technology Community Platform' },
  { id: 4, img: '/rick-and-morty-figma.png', alt: 'Rick and Morty Page', link: 'https://rick-morty-pages-rj6a.vercel.app/', description: 'Rick and Morty Character Explorer' },
  { id: 5, img: '/ipv6et.jpg', alt: 'IPv6 Ethiopia', link: 'https://www.ipv6et.org/', description: 'IPv6 Adoption and Education in Ethiopia' },
  { id: 6, img: '/secure-ai-africa.jpg', alt: 'Secure AI Africa', link: 'https://secureaiafrica.africa/', description: 'AI Security and Innovation in Africa' },
];

const Portfolio = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-primary-50 dark:bg-primary-400 transition-colors duration-700 ease-in-out">
      <div className="container mx-auto">
        <div className="heading text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-400 dark:text-primary-50 mb-2 animate-fadeInUp">Projects</h2>
          <span className="text-lg text-primary-200 dark:text-primary-200 font-semibold animate-fadeInUp delay-100">My Recent Work</span>
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
              {/* Project cover image */}
              <img 
                src={project.img} 
                alt={project.alt} 
                className="w-full h-64 object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/logo192.png'; // Fallback image if the project image fails to load
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col items-center justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h3 className="text-white text-xl font-bold mb-2">{project.alt}</h3>
                <p className="text-gray-200 text-sm mb-4 text-center">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-50 text-lg font-semibold bg-primary-200 px-5 py-2 rounded-lg
                             hover:bg-primary-300 transform hover:scale-105 transition-all duration-300 ease-in-out"
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
