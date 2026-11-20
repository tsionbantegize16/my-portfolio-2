import React from 'react';
import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiArrowRight,
  FiCheckCircle,
  FiCpu,
  FiCreditCard,
  FiGlobe
} from 'react-icons/fi';

const servicesData = [
  {
    title: 'Fintech & Digital Banking Systems',
    icon: FiCreditCard,
    description:
      'Engineering core banking platforms, offline-first SACCO solutions, USSD and IVR workflows, payment gateways, and open banking API portal infrastructure.',
    deliverables: [
      'Core SACCO & Microfinance Portals (Qershi Link)',
      'USSD & IVR Rural Banking Workflows',
      'Open Banking & API Portals'
    ],
    tags: ['Fintech', 'Digital Banking', 'USSD/IVR', 'Payment Gateways', 'SACCO'],
  },
  {
    title: 'Enterprise Software & ERP Systems',
    icon: FiCpu,
    description:
      'Architecting resilient full-stack systems, institutional ERP workflows (BDA & GATO ERP), and backend services tailored for scale, security, and high reliability.',
    deliverables: [
      'Institutional Management Systems (BiTec IIMS)',
      'Enterprise ERP Workflows & Database Modeling',
      'High-Availability Node.js & Spring Boot Services'
    ],
    tags: ['Enterprise', 'Spring Boot', 'Node.js', 'PostgreSQL', 'Prisma'],
  },
  {
    title: 'Full-Stack Web & Mobile Engineering',
    icon: FiCode,
    description:
      'Building performant, accessible web applications and cross-platform mobile apps using React, Next.js, Vue, Nuxt 3, Flutter, and Tailwind CSS.',
    deliverables: [
      'Production Web Apps (React, Next.js, Nuxt 3)',
      'Mobile Apps with Clean Architecture (Flutter & React Native)',
      'Reusable Design Systems & Figma-to-Code'
    ],
    tags: ['React', 'Next.js', 'Flutter', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Backend Architecture & API Integration',
    icon: FiDatabase,
    description:
      'Designing robust RESTful APIs, relational data models, real-time database synchronization, and secure authentication pipelines connecting frontend clients.',
    deliverables: [
      'RESTful API Architecture & Postman Documentation',
      'PostgreSQL, Prisma & Supabase Optimizations',
      'Secure Role-Based Access Control (RBAC)'
    ],
    tags: ['REST APIs', 'PostgreSQL', 'Supabase', 'Express', 'Security'],
  },
  {
    title: 'Incubation & Startup Ecosystem Platforms',
    icon: FiLayers,
    description:
      'Developing structured incubation tracking platforms, startup workflow evaluation tools, and rapid MVP prototypes for techno-entrepreneurship centers.',
    deliverables: [
      'Innovation Incubation Management Systems (IIMS)',
      'Startup Intake & Pipeline Tracking',
      'Rapid MVP Prototyping & Lean Validation'
    ],
    tags: ['BiTec Incubation', 'DX Valley', 'MVP Prototyping', 'Lean Startup'],
  },
  {
    title: 'AI-Assisted & National Tech Infrastructure',
    icon: FiGlobe,
    description:
      'Engineering purpose-driven software integrating AI-assisted classification (such as GreenLoop), AI cybersecurity platforms (SAI²), and national tech portals (IPv6 Ethiopia).',
    deliverables: [
      'Eco-Tech & Smart Recycling Applications',
      'AI Security & Capacity Building Platforms',
      'National Tech Advocacy & Infrastructure Hubs'
    ],
    tags: ['AI Security', 'Clean Architecture', 'Eco-Tech', 'IPv6 Initiative'],
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
            End-to-end software engineering, inclusive fintech platforms, and scalable enterprise architectures tailored for growth and impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
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
