import React from 'react';
import { FiCode, FiDatabase, FiLayers, FiArrowRight, FiCheckCircle, FiCpu, FiCreditCard } from 'react-icons/fi';

const servicesData = [
  {
    title: 'Fintech & Digital Banking Rails',
    icon: FiCreditCard,
    description: 'Engineering secure digital lending workflows, agency banking tools, payment gateway integrations, and high-volume transaction processing.',
    deliverables: ['Digital Lending Workflows', 'Payment Gateway Integrations', 'Agency Banking Portals'],
    tags: ['Fintech', 'Digital Banking', 'Payment Gateways', 'Lending API'],
  },
  {
    title: 'Enterprise Software Architecture',
    icon: FiCpu,
    description: 'Designing resilient microservices and high-availability enterprise backend infrastructure tailored for scale and compliance.',
    deliverables: ['Innovation Incubation System (IIMS)', 'High-Availability Node.js APIs', 'Microservice Security'],
    tags: ['Architecture', 'Enterprise', 'Microservices', 'Node.js'],
  },
  {
    title: 'Full-Stack Web & Mobile Engineering',
    icon: FiCode,
    description: 'Blazing-fast, responsive web interfaces and mobile apps built with React, Next.js, Vue, Nuxt, and Tailwind CSS frameworks.',
    deliverables: ['Custom Web Applications', 'Mobile App UI (React Native/Flutter)', 'Reusable Design Systems'],
    tags: ['React', 'Next.js', 'Vue', 'Nuxt', 'Tailwind'],
  },
  {
    title: 'API Integration & Data Pipelines',
    icon: FiDatabase,
    description: 'Robust RESTful API and GraphQL data pipelines connecting rich frontend client apps with PostgreSQL, Hasura, and headless CMS.',
    deliverables: ['GraphQL & REST Client Architecture', 'Real-Time Data Synchronization', 'PostgreSQL & Hasura Models'],
    tags: ['GraphQL', 'REST API', 'PostgreSQL', 'Hasura', 'Strapi'],
  },
  {
    title: 'Innovation Management & Prototyping',
    icon: FiLayers,
    description: 'Translating concepts into structured innovation management systems and rapid MVP prototypes for digital transformation hubs.',
    deliverables: ['Innovation Management Tracking', 'Interactive Proof-of-Concepts', 'MVP Launch Acceleration'],
    tags: ['KAB Digital', 'DX Valley Incubator', 'MVP Prototyping'],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="heading text-center space-y-2">
          <span>What I Offer</span>
          <h2>Services & Solutions</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base">
            End-to-end digital solutions designed to elevate your brand and engage your audience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-8 glass-card glass-card-hover flex flex-col justify-between relative overflow-hidden border-teal-500/20"
              >
                {/* Header Icon + Title */}
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-500 via-brand-500 to-emerald-500 text-white flex items-center justify-center text-2xl shadow-lg shadow-teal-500/25 group-hover:scale-110 transition-transform duration-300">
                    <Icon />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Key Deliverables List */}
                  <div className="pt-2 space-y-2 border-t border-slate-200/80 dark:border-slate-800">
                    <div className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider">Key Deliverables</div>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <FiCheckCircle className="text-emerald-500 text-sm flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags & Action Link */}
                <div className="pt-6 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-[11px] font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    Start a Project <FiArrowRight className="text-sm" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
