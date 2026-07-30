import React, { useState } from 'react';
import { FiExternalLink, FiEye, FiX } from 'react-icons/fi';

const categories = ['All', 'Fintech & Banking', 'Enterprise & Innovation', 'Mobile Apps & Tech', 'Community'];

const projectsData = [
  {
    id: 1,
    img: '/IIMS.jpg',
    title: 'Innovation Incubation Management System (IIMS) @ KAB Digital Solution',
    category: 'Enterprise & Innovation',
    shortDesc: 'Designed and engineered at KAB Digital Solution for innovation and incubation tracking.',
    longDesc: 'Lead the architecture and implementation of the Innovation Incubation Management System (IIMS) at KAB Digital Solution, facilitating structured innovation workflows, incubation tracking, and enterprise digital transformation.',
    link: 'https://developers.coopbankoromiasc.com/',
    github: 'https://github.com/tsionbantegize',
    tags: ['React', 'Next.js', 'KAB Digital', 'Node.js', 'Supabase'],
    featured: true,
  },
  {
    id: 2,
    img: '/coop.png',
    title: 'Coop Bank Oromia API @ DX Valley Portal',
    category: 'Fintech & Banking',
    shortDesc: 'Digital banking features engineered within Coopbank’s DX Valley Hub.',
    longDesc: 'Engineered digital banking features, open banking API portals, and prototyping data-driven financial tools aimed at driving digital banking adoption across Ethiopia.',
    link: 'https://developers.coopbankoromiasc.com/',
    github: 'https://github.com/tsionbantegize',
    tags: ['Fintech', 'DX Valley', 'React', 'Banking API', 'Supabase'],
    featured: true,
  },
  {
    id: 3,
    img: '/image copy.png',
    title: 'Green Loop Mobile App @ EagleLion System Tech',
    category: 'Mobile Apps & Tech',
    shortDesc: 'Connecting waste to worth! Mobile recycling platform & nearby center detector.',
    longDesc: 'Engineered Green Loop at EagleLion System Technology—a mobile recycling platform built to locate nearby recycling centers, minimize logistics hassles, connect waste producers to recyclers, and transform waste into valuable resources.',
    link: 'https://github.com/tsionbantegize',
    github: 'https://github.com/tsionbantegize',
    tags: ['Green Loop', 'EagleLion', 'Mobile App', 'Supabase', 'React Native'],
    featured: true,
  },
  {
    id: 4,
    img: '/etwic.png',
    title: 'ETWIC - Women in Computing Platform',
    category: 'Community',
    shortDesc: 'Official platform for Ethiopian Women in Computing organization.',
    longDesc: 'Empowering women in STEM & Tech across Ethiopia through mentorship initiatives, skill bootcamps, community news, and national event organization.',
    link: 'https://etwic.org/',
    github: 'https://github.com/tsionbantegize',
    tags: ['Vue.js', 'Nuxt.js', 'Community', 'Tailwind', 'Supabase'],
    featured: true,
  },
  {
    id: 5,
    img: '/etnerd.png',
    title: 'ETNerd Tech Community Platform',
    category: 'Community',
    shortDesc: 'Leading Ethiopian technology & developer community hub.',
    longDesc: 'A community-driven digital space providing tech news, developer resources, podcast feeds, and local tech event coordination.',
    link: 'https://www.etnerd.com/',
    github: 'https://github.com/tsionbantegize',
    tags: ['React', 'Next.js', 'GraphQL', 'Tailwind', 'Supabase'],
    featured: false,
  },
  {
    id: 6,
    img: '/image copy 2.png',
    title: 'IPv6 Ethiopia Initiative Portal',
    category: 'Enterprise & Innovation',
    shortDesc: 'National IPv6 adoption, advocacy, and internet infrastructure portal for Ethiopia.',
    longDesc: 'Architected and developed the IPv6 Ethiopia Initiative portal—a national advocacy platform accelerating next-generation internet protocol (IPv6) deployment across Ethiopian telecom providers, enterprise ISPs, network engineers, and academic institutions.',
    link: 'https://ipv6et.org/',
    github: 'https://github.com/tsionbantegize',
    tags: ['IPv6', 'Next-Gen Internet', 'Ethiopia', 'React', 'Tailwind', 'Supabase'],
    featured: true,
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-1/3 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="heading text-center space-y-2">
          <span>Portfolio Showcase</span>
          <h2>Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base">
            Selected web applications, developer portals, and community platforms built with modern technology.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-teal-500 via-brand-500 to-emerald-500 text-white shadow-md shadow-teal-500/25 scale-105'
                  : 'bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-teal-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-card glass-card-hover overflow-hidden flex flex-col justify-between animate-fadeIn border-teal-500/20"
            >
              {/* Cover Image + Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/photo.jpg';
                  }}
                />
                
                {/* Overlay Action Buttons */}
                <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-11 h-11 rounded-full bg-white text-slate-900 grid place-items-center hover:bg-teal-400 hover:text-slate-950 transition-colors shadow-lg"
                    title="Quick Preview"
                  >
                    <FiEye className="text-lg" />
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-teal-500 text-white grid place-items-center hover:bg-teal-400 hover:text-slate-950 transition-colors shadow-lg"
                    title="Visit Live Site"
                  >
                    <FiExternalLink className="text-lg" />
                  </a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-teal-500/90 backdrop-blur text-white text-[10px] font-bold shadow-md">
                    ★ Featured
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="category-badge">{project.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tech Tags & Links */}
                <div className="pt-4 space-y-4 border-t border-slate-200/80 dark:border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
                    >
                      Details & Info →
                    </button>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-teal-500 inline-flex items-center gap-1"
                    >
                      Live Demo <FiExternalLink className="text-xs" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-teal-500/30 dark:border-teal-500/30 rounded-3xl overflow-hidden shadow-2xl space-y-6">
            
            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-200 dark:bg-slate-800">
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/photo.jpg';
                }}
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/80 text-white grid place-items-center hover:bg-red-600 transition-colors shadow-lg"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="category-badge">{selectedProject.category}</span>
                {selectedProject.featured && (
                  <span className="px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold">
                    Featured Project
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedProject.longDesc}
              </p>

              <div className="pt-2">
                <div className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2">Technologies Used</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 flex items-center gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1"
                >
                  Visit Live Project <FiExternalLink />
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
