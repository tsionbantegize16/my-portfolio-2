import React from 'react';
import { FiCode, FiDatabase, FiLayers, FiPenTool, FiServer } from 'react-icons/fi';
import { FaFigma } from 'react-icons/fa'; // Figma icon from Font Awesome

const servicesData = [
  {
    title: 'Front-End Development',
    icon: <FiCode className="text-2xl" />,
    description: 'Fast, responsive, and maintainable web interfaces built with Vue.js, Nuxt, React, and Next.js using clean architecture and reusable components powered by Tailwind CSS.',
  },
  {
    title: 'UI/UX Design',
    icon: <FiPenTool className="text-2xl" />,
    description: 'Intuitive, visually balanced interfaces crafted in Figma and Canva where accessibility, clarity, and aesthetics work together for effortless experiences.',
  },
  {
    title: 'API Integration & Data Handling',
    icon: <FiDatabase className="text-2xl" />,
    description: 'GraphQL and REST integrations that bridge interfaces with real data, leveraging PostgreSQL, Hasura, and Strapi for secure, performant content management.',
  },
  {
    title: 'Back-End Support',
    icon: <FiServer className="text-2xl" />,
    description: 'Lightweight back-end services using Node.js, Strapi, Spring, and Docker to deliver deployable solutions that pair seamlessly with modern front-end frameworks.',
  },
  {
    title: 'Product Prototyping',
    icon: <FiLayers className="text-2xl" />,
    description: 'Concept-to-prototype workflows that translate ideas into interactive mockups and responsive UI components for rapid validation.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-16 px-6 bg-primary-50 dark:bg-primary-400 transition-colors duration-700 ease-in-out overflow-hidden">
      {/* Minimal decorative wash */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_65%)]">
        <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-primary-200/40 dark:bg-primary-300/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-24 w-[26rem] h-[26rem] rounded-full bg-primary-100/60 dark:bg-primary-300/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="heading text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 dark:from-primary-50 dark:to-primary-200 animate-fadeInUp">Services</h2>
          <span className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary-100/70 dark:bg-primary-300/20 border border-primary-200/60 dark:border-primary-300/30 text-primary-400 dark:text-primary-50 animate-fadeInUp delay-100">What I Offer</span>
        </div>

        {/* Alternating feature rows (no cards) */}
        <div className="relative">
          {/* Vertical rail */}
          <div className="hidden md:block absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200/80 via-primary-300/40 to-transparent"></div>

          <ul className="space-y-2">
            {servicesData.map((service, index) => (
              <li key={index} className={`${index % 2 === 0 ? 'bg-primary-100/40 dark:bg-primary-300/10' : 'bg-transparent'} rounded-lg transition-colors`}>
                <div className="grid md:grid-cols-12 items-start gap-6 px-4 md:px-6 py-6">
                  {/* Icon + rail node */}
                  <div className="md:col-span-2 flex md:block items-center md:items-start md:pl-2 relative">
                    {/* Rail node */}
                    <div className="hidden md:block absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-primary-300 to-primary-400"></div>
                    <div className="inline-flex items-center justify-center w-12 h-12 md:mt-[-4px] rounded-full bg-gradient-to-br from-primary-200 to-primary-300 text-primary-700 dark:text-primary-100">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-10">
                    <h3 className="text-xl md:text-2xl font-semibold text-primary-500 dark:text-primary-50">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-primary-500/90 dark:text-primary-50/85 max-w-3xl">
                      {service.description}
                    </p>

                    {/* Underline accent */}
                    <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary-300 to-primary-400 opacity-70"></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
