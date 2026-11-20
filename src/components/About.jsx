import React, { useState } from 'react';
import {
  FiBriefcase,
  FiUser,
  FiDownload,
  FiArrowRight,
  FiBookOpen,
  FiAward,
  FiCheckCircle,
  FiLayers
} from 'react-icons/fi';

const tabs = [
  { id: 'overview', label: 'Executive Profile' },
  { id: 'experience', label: 'Career & Experience' },
  { id: 'engineering', label: 'Notable Engineering' },
  { id: 'education', label: 'Education & Honors' },
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
          <span>Full-Stack Engineer & Fintech Innovator</span>
          <h2>About Tsion Bantegize</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base">
            Software Engineer specializing in digital banking, inclusive fintech architectures, and enterprise innovation systems.
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
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="w-full max-w-sm grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl glass-card text-center border border-teal-500/20">
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Education</div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white mt-1">B.Sc. Software Eng.</div>
                <div className="text-[11px] text-teal-600 dark:text-teal-400 font-semibold">Bahir Dar Univ ('26)</div>
              </div>
              
              <div className="p-4 rounded-2xl glass-card text-center border border-teal-500/20">
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Focus</div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white mt-1">Fintech & Banking</div>
                <div className="text-[11px] text-teal-600 dark:text-teal-400 font-semibold">Inclusive Architectures</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Profile Tabs */}
          <div className="lg:col-span-7 space-y-6 animate-slideInRight">
            
            {/* Tabs Bar */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-200/60 dark:bg-slate-900/80 border border-slate-300/50 dark:border-slate-800">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
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
            <div className="glass-card p-6 sm:p-8 min-h-[420px]">
              
              {/* 1. Executive Profile Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FiUser className="text-teal-500" /> Executive Profile
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    I am a <strong className="text-slate-900 dark:text-white">Software Engineer & Fintech Innovator</strong> graduating with a B.Sc. in Software Engineering from <strong className="text-teal-600 dark:text-teal-400">Bahir Dar University (2026)</strong>. My work focuses on building robust offline-first digital banking architectures, scalable enterprise platforms, and high-impact fintech applications.
                  </p>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    My engineering and ecosystem background spans full-stack software development at <strong className="text-slate-900 dark:text-white">Cooperative Bank of Oromia (DX Valley Hub)</strong> and <strong className="text-slate-900 dark:text-white">EagleLion System Technology</strong>, incubation workflow coordination at <strong className="text-teal-600 dark:text-teal-400">BiTec</strong>, and serving as a <strong className="text-slate-900 dark:text-white">National Youth Delegate</strong> representing Ethiopia at the Africa Food Systems Forum in Kigali, Rwanda.
                  </p>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                      <div className="font-bold text-slate-900 dark:text-white mb-1">🏛️ Digital Banking & Inclusion</div>
                      <div className="text-slate-600 dark:text-slate-400">Core SACCO banking, USSD/IVR workflows, and open banking API portal infrastructure.</div>
                    </div>
                    
                    <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                      <div className="font-bold text-slate-900 dark:text-white mb-1">🌍 Policy & Ecosystem Leadership</div>
                      <div className="text-slate-600 dark:text-slate-400">Startup incubator management, national delegation, and regional development initiatives with UNDP.</div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Detailed Career & Experience Tab */}
              {activeTab === 'experience' && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FiBriefcase className="text-teal-500" /> Career & Experience
                  </h3>

                  <div className="space-y-3.5 text-xs sm:text-sm">
                    {/* Coopbank DX Valley */}
                    <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/70 border-l-4 border-emerald-500 space-y-1">
                      <div className="flex items-center justify-between flex-wrap gap-1.5">
                        <h4 className="font-bold text-slate-900 dark:text-white">Software Engineering Intern</h4>
                        <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">Cooperative Bank of Oromia (DX Valley)</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                        Engineered digital banking features, open banking API portals, and prototyping tools aimed at accelerating financial inclusion and open banking across Ethiopia.
                      </p>
                    </div>

                    {/* EagleLion System Technology */}
                    <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/70 border-l-4 border-teal-500 space-y-1">
                      <div className="flex items-center justify-between flex-wrap gap-1.5">
                        <h4 className="font-bold text-slate-900 dark:text-white">Full-Stack Software Engineering Intern</h4>
                        <span className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950 px-2 py-0.5 rounded">EagleLion System Technology (Oct 2025)</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                        Built full-stack software systems and eco-tech mobile initiatives, contributing to <strong>GreenLoop</strong>—a mobile recycling application engineered with Flutter, Clean Architecture, and AI-assisted waste categorization.
                      </p>
                    </div>

                    {/* BiTec Incubation & Ecosystem Operations */}
                    <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/70 border-l-4 border-cyan-500 space-y-1">
                      <div className="flex items-center justify-between flex-wrap gap-1.5">
                        <h4 className="font-bold text-slate-900 dark:text-white">Incubation & Ecosystem Operations Coordinator</h4>
                        <span className="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950 px-2 py-0.5 rounded">Bahir Dar University (BiTec)</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                        Coordinated startup intake, tracking, and incubation workflows at Bahir Dar University’s Business Incubation and Techno-Entrepreneurship Center (BiTec), and developed the Innovation Incubation Management System (IIMS).
                      </p>
                    </div>

                    {/* National & Policy Representation */}
                    <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/70 border-l-4 border-purple-500 space-y-1">
                      <div className="flex items-center justify-between flex-wrap gap-1.5">
                        <h4 className="font-bold text-slate-900 dark:text-white">National Youth Delegate — Ethiopia</h4>
                        <span className="text-[11px] font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950 px-2 py-0.5 rounded">Africa Food Systems Forum (Kigali, Sep 2026)</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                        Represented Ethiopia at the Africa Food Systems Forum in Kigali, Rwanda, and actively engaged in high-level policy events and innovation forums at the <strong>UNDP Regional Service Centre for Africa</strong> in Addis Ababa.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Notable Engineering & Technical Stack Tab */}
              {activeTab === 'engineering' && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FiLayers className="text-teal-500" /> Notable Engineering & Tech Stack
                  </h3>

                  <div className="space-y-3 text-xs">
                    {/* Key Systems Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-700/70">
                        <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 text-xs">
                          <FiCheckCircle className="text-teal-500 shrink-0" />
                          <span>Qershi Link (700K ETB Grant)</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                          Offline-first core banking platform for SACCOs with USSD and IVR support for farmers and rural communities.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-700/70">
                        <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 text-xs">
                          <FiCheckCircle className="text-teal-500 shrink-0" />
                          <span>GreenLoop Eco-Tech App</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                          Mobile recycling platform built with Flutter, Clean Architecture, and AI-assisted object categorization.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-700/70">
                        <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 text-xs">
                          <FiCheckCircle className="text-teal-500 shrink-0" />
                          <span>Enterprise Platforms & ERPs</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                          BiTec IIMS portal, BDA ERP, GATO ERP, IPv6 Ethiopia Initiative portal (Rasbyte), and Coopbank API portal.
                        </p>
                      </div>
                    </div>

                    {/* Technical Stack Pills */}
                    <div className="pt-2 space-y-2 border-t border-slate-200/80 dark:border-slate-800">
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white text-[11px] uppercase tracking-wider">Frontend & Mobile: </span>
                        <span className="text-slate-600 dark:text-slate-400">React, Next.js, Vue.js, Nuxt 3, TypeScript, JavaScript, Tailwind CSS, Flutter, React Native, Figma.</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white text-[11px] uppercase tracking-wider">Backend & Databases: </span>
                        <span className="text-slate-600 dark:text-slate-400">Node.js, Express, Spring Boot, PostgreSQL, Prisma, Supabase, RESTful APIs.</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white text-[11px] uppercase tracking-wider">DevOps & Cloud: </span>
                        <span className="text-slate-600 dark:text-slate-400">Docker, Git/GitHub (tsionbantegize16), Postman, Vercel, Railway.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. Education, Honors & Programs Tab */}
              {activeTab === 'education' && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FiBookOpen className="text-teal-500" /> Education, Honors & Fellowships
                  </h3>

                  <div className="space-y-3 text-xs">
                    {/* B.Sc Degree */}
                    <div className="p-3.5 rounded-xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/30">
                      <div className="flex items-center justify-between flex-wrap gap-1">
                        <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">B.Sc. in Software Engineering</span>
                        <span className="text-[11px] font-semibold text-teal-600 dark:text-teal-400">Bahir Dar University (Graduation: 2026)</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-xs mt-1">
                        Awarded <strong>3rd Place</strong> for final-year software engineering capstone project (2026).
                      </p>
                    </div>

                    {/* Accelerators & Bootcamps */}
                    <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 space-y-1.5">
                      <div className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">Accelerators & Bootcamps</div>
                      <ul className="space-y-1 text-slate-600 dark:text-slate-300 text-xs">
                        <li>• <strong>FinWise Acceleration Bootcamp:</strong> Entrepreneurship Development Institute & UNDP (2026).</li>
                        <li>• <strong>Full Stack & Mobile Development Training:</strong> Minab IT Solution & BiT-CDC.</li>
                        <li>• <strong>Agribusiness Innovation & Climate Change:</strong> GIZ self-employment intervention (2024).</li>
                        <li>• <strong>Responsive Web Design Certification:</strong> freeCodeCamp (2025).</li>
                      </ul>
                    </div>

                    {/* Key Honors */}
                    <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-50/40 dark:bg-amber-950/20 space-y-1.5">
                      <div className="font-bold text-amber-700 dark:text-amber-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
                        <FiAward className="text-sm" /> Prestigious Awards & Honors
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                        <div>🏆 <strong>1st Place</strong> — WTM Addis IWD Hackathon (2025)</div>
                        <div>🥇 <strong>1st Place</strong> — BRUH Women Startup Competition (2024)</div>
                        <div>🎖️ <strong>Recognition</strong> — BiTec Digital Innovation Hackathon (2025)</div>
                        <div>🥉 <strong>3rd Place</strong> — BDU Final-Year Software Engineering (2026)</div>
                      </div>
                    </div>

                    {/* Program Applications */}
                    <div className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-800/50">
                      <span className="font-bold text-slate-900 dark:text-white text-[11px] uppercase tracking-wider">Leadership & Fellowships: </span>
                      <span className="text-slate-600 dark:text-slate-400 text-[11px]">
                        Obama Foundation Leaders, ITU Gender Champions (AI for Good 2027), AfSA & AESPP Earth Observation AI, e-AGRIPRENEUR Cohort 1, Tsehai Young Leaders, CRPP Partnership Forum 2027, WomHub / AIF, Coding Ladies Africa, MASAF/ACN.
                      </span>
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
              <a href="/Tsion_Bante_CV-.PDF" download="Tsion_Bante_CV-.PDF" className="btn-secondary">
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
