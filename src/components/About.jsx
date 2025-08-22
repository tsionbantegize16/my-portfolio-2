import React from 'react';
import { FiUser, FiPhone, FiMail } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-gray-900 transition-colors duration-700 ease-in-out">
      <div className="container mx-auto">
        <div className="heading text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 animate-fadeInUp">About Me</h2>
          <span className="text-lg text-blue-600 dark:text-blue-400 font-semibold animate-fadeInUp delay-100">Introduction</span>
        </div>

        <div className="about-container flex flex-col md:flex-row items-center gap-12">
          <div className="about-img flex-shrink-0 animate-slideInLeft">
            {/* Placeholder image. Replace with your actual photo_2.jpg in the public folder */}
            <img src="/photo_2.jpg" alt="Tsion Bantegize" className="w-80 h-80 rounded-full object-cover shadow-xl border-4 border-indigo-200 dark:border-indigo-600 hover:shadow-2xl transition-all duration-500 ease-in-out" />
          </div>

          <div className="about-text text-center md:text-left animate-slideInRight">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              I am currently studying Software Engineering at Bahirdar University, where I’ve developed a strong foundation in computer science, programming, algorithms, and software development.
              I actively seek practical experience through independent and collaborative projects, refining my skills in both software development and UX/UI design. As a proficient Full Stack Developer and UX/UI expert, I aim to create impactful and intuitive digital experiences.
              My aspiration is to lead projects that revolutionize technology interaction and make a lasting impact on the industry and society.
            </p>

            <div className="information grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {/* Box 1 */}
              <div className="info-box group">
                <FiUser className="info-icon" />
                <span>Tsion Bantegize</span>
              </div>
              {/* Box 2 */}
              <div className="info-box group">
                <FiPhone className="info-icon" />
                <span>+251 995 220 266</span>
              </div>
              {/* Box 3 */}
              <div className="info-box group">
                <FiMail className="info-icon" />
                <span>tsionbantegize@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
