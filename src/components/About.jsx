
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import Lottie from 'lottie-react';
import aiStarOrbitAnimation from '../assets/ai star orbit.json';

const About = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Copy email to clipboard
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('debasishnayak3110@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy email: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = 'debasishnayak3110@gmail.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

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
    { name: 'React.js', icon: 'ri-reactjs-line', type: 'remix', className: 'lg:rotate-animation text-blue-400' },
    { name: 'Next.js', icon: 'ri-nextjs-line', type: 'remix', className: 'lg:float-animation text-gray-800 dark:text-white' },
    { name: 'MongoDB', icon: 'ri-database-2-line', type: 'remix', className: 'lg:mongo-vertical-animation text-green-500' },
    { name: 'Gen AI', icon: aiStarOrbitAnimation, type: 'lottie', className: '' }
  ];

  // Resume download/view handler
  const handleResumeClick = () => {
    // Google Drive direct view link - modified for better compatibility
    const resumeUrl = 'https://drive.google.com/file/d/11qN6Y5ZqhM9uC6EIhgd49phQ6MNcwSI6/view?usp=sharing';
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="about" className="pt-12 lg:pt-16 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16"
        >
          {/* Left Section - About Content */}
          <motion.div
            variants={itemVariants}
            className="flex-1 max-w-2xl"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4"
            >
              Debasish Nayak
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-4 lg:mb-6"
            >
              <span className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 cursor-pointer">Frontend Developer</span> <span className="font-bold cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:bg-clip-text hover:text-transparent">&</span> <span className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300 cursor-pointer">UI/UX Enthusiast</span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 text-gray-600 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <i className="ri-mail-line text-orange-500"></i>
                <span className="text-sm sm:text-base">debasishnayak3110@gmail.com</span>
                <button
                  onClick={copyEmailToClipboard}
                  className="ml-1 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 group"
                  title={emailCopied ? "Copied!" : "Copy email"}
                >
                  <i className={`${emailCopied ? 'ri-check-line text-green-500' : 'ri-file-copy-line text-gray-400 dark:text-gray-500'} text-sm group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200`}></i>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-map-pin-line text-green-500"></i>
                <span className="text-sm sm:text-base">Odisha, India</span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-6 lg:mb-8 leading-relaxed"
            >
              A goal-oriented software developer with experience in building web
              applications using modern technologies like React, Next.js, and more.
              Seeking to leverage my technical skills to deliver exceptional user
              experiences.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 lg:gap-4"
            >
              <button
                onClick={handleResumeClick}
                className="resume-button flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg font-medium hover:shadow-lg text-sm lg:text-base"
              >
                <span className="button-content flex items-center gap-2">
                  <i className="ri-download-line"></i>
                  Resume
                </span>
              </button>

              <div className="flex gap-2">
                <motion.a
                  href="https://github.com/Devnyk"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 w-11 h-11 lg:w-12 lg:h-12 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-400 dark:hover:border-purple-500 hover:text-purple-700 dark:hover:text-purple-400"
                >
                  <i className="ri-github-line text-lg"></i>
                </motion.a>

                <motion.a
                  href="mailto:debasishnayak3110@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 w-11 h-11 lg:w-12 lg:h-12 rounded-lg font-medium hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:border-orange-400 dark:hover:border-orange-500 hover:text-orange-700 dark:hover:text-orange-400"
                >
                  <i className="ri-mail-line text-lg"></i>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/debasish-nayak1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 w-11 h-11 lg:w-12 lg:h-12 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <i className="ri-linkedin-line text-lg"></i>
                </motion.a>
              </div>
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
                  className="flex flex-col items-center justify-center p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 transition-colors duration-200"
                >
                  {skill.type === 'remix' ? (
                    <i className={`${skill.icon} ${skill.className} text-4xl lg:text-5xl mb-3`}></i>
                  ) : skill.type === 'lottie' ? (
                    <div className="w-10 h-10 lg:w-12 lg:h-12 mb-3">
                      <Lottie
                        animationData={skill.icon}
                        loop={isDesktop} // Only animate on desktop
                        autoplay={isDesktop}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                  ) : (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className={`${skill.className} w-12 h-12 lg:w-16 lg:h-16 mb-3 object-contain`}
                    />
                  )}
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