
import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const skillIcons = [
    { name: 'React.js', icon: 'ri-reactjs-line', className: 'rotate-animation text-blue-400' },
    { name: 'Next.js', icon: 'ri-nextjs-line', className: 'float-animation text-gray-800 dark:text-white' },
    { name: 'MongoDB', icon: 'ri-database-2-line', className: 'text-green-500' },
    { name: 'Tailwind CSS', icon: 'ri-css3-line', className: 'text-cyan-400' }
  ];

  // Resume download/view handler
  const handleResumeClick = () => {
    // Replace with your Google Drive link or local resume file
    const resumeUrl = 'https://drive.google.com/file/d/YOUR_RESUME_ID/view';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="about" className=" pt-16 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
        >
          {/* Left Section - About Content */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 max-w-2xl"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Debasish Nayak
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-6"
            >
              Frontend Developer & UI/UX Enthusiast
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4 mb-6 text-gray-600 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <i className="ri-mail-line"></i>
                <span>dev842825@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-map-pin-line"></i>
                <span>Odisha, India</span>
              </div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
            >
              A goal-oriented software developer with experience in building web
              applications using modern technologies like React, Next.js, and more.
              Seeking to leverage my technical skills to deliver exceptional user
              experiences.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={handleResumeClick}
                className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
              >
                <i className="ri-download-line"></i>
                Resume
              </button>
              
              <a
                href="https://github.com/Devnyk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
              >
                <i className="ri-github-line"></i>
              </a>
              
              <a
                href="mailto:youremail@gmail.com"
                className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
              >
                <i className="ri-mail-line"></i>
              </a>
              
              <a
                href="https://www.linkedin.com/in/debasish-nayak1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
              >
                <i className="ri-linkedin-line"></i>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Section - Core Skills with Animated Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 max-w-lg"
          >
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {skillIcons.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex flex-col items-center justify-center p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors duration-200"
                >
                  <i className={`${skill.icon} ${skill.className} text-4xl lg:text-5xl mb-3`}></i>
                  <span className="text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;