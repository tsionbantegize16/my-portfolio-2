import React from 'react';
import { FiCode, FiServer, FiPenTool } from 'react-icons/fi';
import { FaFigma } from 'react-icons/fa'; // Figma icon from Font Awesome

const servicesData = [
  { title: 'Web Development', icon: <FiCode className="service-icon" />, description: 'Crafting responsive and dynamic web applications.' },
  { title: 'Backend Development', icon: <FiServer className="service-icon" />, description: 'Building robust and scalable server-side solutions.' },
  { title: 'UI/UX Design', icon: <FiPenTool className="service-icon" />, description: 'Designing intuitive and engaging user interfaces.' },
  { title: 'Figma Design', icon: <FaFigma className="service-icon" />, description: 'Creating stunning and functional designs with Figma.' },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-6 bg-primary-50 dark:bg-primary-400 transition-colors duration-700 ease-in-out">
      <div className="container mx-auto">
        <div className="heading text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-400 dark:text-primary-50 mb-2 animate-fadeInUp">Services</h2>
          <span className="text-lg text-primary-200 dark:text-primary-200 font-semibold animate-fadeInUp delay-100">What I Offer</span>
        </div>

        <div className="services-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="services-box p-8 rounded-xl shadow-lg bg-primary-50 dark:bg-primary-400 flex flex-col items-center text-center
                         transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out animate-zoomIn"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-primary-200 dark:text-primary-200 text-6xl mb-6 group-hover:rotate-12 transition-transform duration-500 ease-in-out">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-primary-400 dark:text-primary-50 mb-4">{service.title}</h3>
              <p className="text-primary-400 dark:text-primary-50 mb-6">{service.description}</p>
              <a href="#" className="text-primary-200 dark:text-primary-200 font-medium hover:underline hover:text-primary-300 dark:hover:text-primary-100 transition-colors duration-300">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
