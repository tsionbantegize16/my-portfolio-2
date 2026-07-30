import React, { useState } from 'react';
import { FiBriefcase, FiUser, FiDownload, FiArrowRight, FiBookOpen } from 'react-icons/fi';

const tabs = [
  { id: 'overview', label: 'Executive Profile' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'education', label: 'Education & Credentials' },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="about" className="relative py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Background Ambient Lighting */}
      <div className="pointer-events-none absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-teal-500/15 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="heading text-center mb-16 space-y-2">
          <span>Full-Stack Engineer & UX Designer</span>
          <h2>About Tsion Bantegize</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Shapes user journeys, interface systems, and the frontend craft behind every KAB Digital Solution build.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-6 animate-slideInLeft">
            <div className="relative group w-72 sm:w-80 lg:w-[22rem] aspect-[4/5]">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-teal-500 via-brand-500 to-emerald-500 blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl">
                <img
                  src="/tsion.jpg"
                  alt="Tsion Bantegize"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/photo.jpg';
                  }}
                />
                
                {/* Floating Highlight Badge */}
                <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur border border-slate-200/80 dark:border-slate-800 text-xs font-extrabold text-teal-600 dark:text-teal-400 shadow-md">
                  🚀 Founder @ KAB Digital
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="w-full max-w-sm grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl glass-card text-center border border-teal-500/20">
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Degree</div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white mt-1">B.S. Software Eng.</div>
                <div className="text-[11px] text-teal-600 dark:text-teal-400 font-semibold">Bahir Dar Univ ('26)</div>
              </div>
              
              <div className="p-4 rounded-2xl glass-card text-center border border-teal-500/20">
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Specialization</div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white mt-1">Fintech & Banking</div>
                <div className="text-[11px] text-teal-600 dark:text-teal-400 font-semibold">Enterprise Architecture</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Profile Tabs */}
          <div className="lg:col-span-7 space-y-6 animate-slideInRight">
            
            {/* Tabs */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-200/60 dark:bg-slate-900/80 border border-slate-300/50 dark:border-slate-800 max-w-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Display Panel */}
            <div className="glass-card p-6 sm:p-8 min-h-[380px]">
              
              {/* Executive Profile Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FiUser className="text-teal-500" /> Executive Profile
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    I am a <strong className="text-slate-900 dark:text-white">Full-Stack Engineer & UX Designer</strong> who shapes user journeys, interface systems, and the frontend craft behind every KAB Digital Solution build.
                  </p>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    Beyond founding <strong className="text-slate-900 dark:text-white">KAB Digital Solution</strong>, my professional footprint spans leading technology innovators and financial institutions in Ethiopia, including <strong className="text-teal-600 dark:text-teal-400">EagleLion System Technology, Cooperative Bank of Oromia (DX Valley Hub), Minab IT Solution, and BiT-CDC</strong>.
                  </p>

                  <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                      <div className="font-bold text-slate-900 dark:text-white mb-1">🏛️ Digital Banking & Fintech</div>
                      <div className="text-slate-600 dark:text-slate-400">Digital lending workflows, agency banking & payment gateway integrations.</div>
                    </div>
                    
                    <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                      <div className="font-bold text-slate-900 dark:text-white mb-1">⚡ Enterprise Architecture</div>
                      <div className="text-slate-600 dark:text-slate-400">High-volume full-stack APIs, microservices & system resilience.</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Detailed Work Experience Tab */}
              {activeTab === 'experience' && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FiBriefcase className="text-teal-500" /> Key Professional Experience
                  </h3>

                  <div className="space-y-5 text-sm">
                    {/* KAB Digital Solution */}
                    <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/70 border-l-4 border-teal-500 space-y-1.5">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h4 className="font-bold text-slate-900 dark:text-white">Founder & Lead Architect</h4>
                        <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950 px-2 py-0.5 rounded">KAB Digital Solution</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                        Lead the overall architecture and engineering of resilient digital platforms. Designed and engineered the <strong>Innovation Incubation Management System (IIMS)</strong>, facilitating structured innovation workflows and enterprise incubation tracking.
                      </p>
                    </div>

                    {/* EagleLion System Technology */}
                    <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/70 border-l-4 border-brand-500 space-y-1.5">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h4 className="font-bold text-slate-900 dark:text-white">Software Engineer / Technical Collaborator</h4>
                        <span className="text-xs font-semibold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950 px-2 py-0.5 rounded">EagleLion System Technology</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                        Contributed to full-stack engineering initiatives for mobile super apps and eco-tech platforms, including <strong>Green Loop</strong>—a mobile recycling app connecting waste to worth with nearby center detection.
                      </p>
                    </div>

                    {/* Cooperative Bank of Oromia */}
                    <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/70 border-l-4 border-emerald-500 space-y-1.5">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h4 className="font-bold text-slate-900 dark:text-white">Developer & Resident Innovator</h4>
                        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">Coopbank (DX Valley Hub)</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                        Engineered digital banking features and fintech solutions within Coopbank’s official technology incubation and innovation center (DX Valley). Participated in prototyping data-driven financial tools to drive digital banking adoption.
                      </p>
                    </div>

                    {/* Minab IT Solution & BiT-CDC */}
                    <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/70 border-l-4 border-indigo-500 space-y-1.5">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h4 className="font-bold text-slate-900 dark:text-white">Full-Stack Engineering Fellow</h4>
                        <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded">Minab IT Solution & BiT-CDC</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                        Completed advanced full-stack software development tracks, mastering clean code practices, system design, and database optimizations. Developed web prototypes and competed in innovation hackathons.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Education & Credentials Tab */}
              {activeTab === 'education' && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FiBookOpen className="text-cyan-500" /> Education & Credentials
                  </h3>

                  <div className="space-y-4 text-sm">
                    <div className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
                      <div className="font-bold text-slate-900 dark:text-white text-base">B.S. in Software Engineering</div>
                      <div className="text-cyan-600 dark:text-cyan-400 font-semibold text-xs mt-0.5">Bahir Dar University (Expected Graduation: 2026)</div>
                      <p className="text-slate-600 dark:text-slate-400 text-xs mt-2">
                        Core curriculum: Software Architecture, Algorithms & Data Structures, Database Systems, Distributed Computing, Agile Product Management.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
                        <div className="font-bold text-slate-900 dark:text-white text-xs">Full-Stack Development Cert.</div>
                        <div className="text-slate-600 dark:text-slate-400 text-[11px] mt-1">Minab IT Solution & BiT-CDC</div>
                      </div>

                      <div className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
                        <div className="font-bold text-slate-900 dark:text-white text-xs">Advanced Software Engineering</div>
                        <div className="text-slate-600 dark:text-slate-400 text-[11px] mt-1">Specialized Industry Track</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex items-center gap-4">
              <a href="#projects" className="btn-primary">
                View Key Projects <FiArrowRight />
              </a>
              <a href="/Tsion_Bantegize_CV.docx" download="Tsion_Bantegize_CV.docx" className="btn-secondary">
                <FiDownload className="text-teal-500" /> Printable Resume / CV
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
