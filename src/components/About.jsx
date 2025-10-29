
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import LiquidPhotoTransition from './LiquidPhotoTransition';

const About = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [arrowKey, setArrowKey] = useState(0); // Key to trigger arrow animation
  const [isInView, setIsInView] = useState(false);

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

  // Trigger arrow animation
  const triggerArrowAnimation = () => {
    setArrowKey(prev => prev + 1);
  };

  // Theme change detection
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          triggerArrowAnimation();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Scroll detection for About section
  useEffect(() => {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
            triggerArrowAnimation();
          } else if (!entry.isIntersecting && isInView) {
            setIsInView(false);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    observer.observe(aboutSection);

    return () => observer.disconnect();
  }, [isInView]);

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

  // Arrow bounce animation (triggers on load, theme change, and scroll)
  const arrowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut"
      }
    },
    bounce: {
      y: [0, -8, 0],
      rotate: [-45, -35, -45],
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeInOut"
      }
    }
  };





  // Resume download/view handler
  const handleResumeClick = () => {
    // Google Drive direct view link - modified for better compatibility
    const resumeUrl = 'https://drive.google.com/file/d/11qN6Y5ZqhM9uC6EIhgd49phQ6MNcwSI6/view?usp=drive_link';
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="about" className="min-h-screen bg-white dark:bg-black flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-16"
        >
          {/* Left Section - About Content */}
          <motion.div
            variants={itemVariants}
            className="flex-1 max-w-2xl mobile-about-content"
          >
            {/* Greeting */}
            <motion.div
              variants={itemVariants}
              className="mt-4 sm:mt-0 mb-0 sm:mb-2 flex items-center gap-1"
            >
              <span className="text-base sm:text-lg lg:text-xl font-satoshi font-normal text-gray-600 dark:text-gray-400">
                Hi,{' '}
              </span>
              <span className="text-base sm:text-lg lg:text-xl font-satoshi font-bold text-blue-600 dark:text-blue-400">
                I'm
              </span>
              <motion.i
                key={arrowKey} // Force re-animation when key changes
                className="ri-arrow-down-line text-blue-600 dark:text-blue-400 text-lg sm:text-xl lg:text-2xl transform -rotate-45 ml-1"
                variants={arrowVariants}
                initial="hidden"
                animate={["visible", "bounce"]}
              ></motion.i>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-4xl lg:text-6xl font-satoshi font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 leading-tight"
            >
              Debasish Nayak
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-xl text-gray-600 dark:text-gray-400 mb-3 sm:mb-3 font-satoshi"
            >
              Frontend Developer & UI/UX Enthusiast
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-0 sm:gap-0 mb-4 text-gray-600 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <i className="ri-mail-line text-orange-500"></i>
                <span className="text-sm lg:text-base font-satoshi">debasishnayak3110@gmail.com</span>
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
                <span className="text-sm lg:text-base font-satoshi">Odisha, India</span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm lg:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed font-satoshi max-w-lg"
            >
              A goal-oriented software developer with experience in building web
              applications using modern technologies like{' '}
              <span className="text-blue-600 font-semibold">React</span>,{' '}
              <span className="text-blue-600 font-semibold">Gen AI</span>, and more.
              Seeking to leverage my technical skills to deliver exceptional user
              experiences.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3"
            >
              <button
                onClick={handleResumeClick}
                className="resume-button flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-satoshi font-medium hover:shadow-lg text-sm lg:text-base"
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
                  className="group flex items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 w-10 h-10 lg:w-12 lg:h-12 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-200"
                >
                  <i className="ri-github-line text-lg lg:text-xl group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200"></i>
                </motion.a>

                <motion.a
                  href="mailto:debasishnayak3110@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 w-10 h-10 lg:w-12 lg:h-12 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-200"
                >
                  <i className="ri-mail-line text-lg lg:text-xl group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200"></i>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/debasish-nayak1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 w-10 h-10 lg:w-12 lg:h-12 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-200"
                >
                  <i className="ri-linkedin-line text-lg lg:text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"></i>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Liquid Photo Transition */}
          <motion.div
            variants={itemVariants}
            className="flex-1 max-w-md w-full mt-8 lg:mt-0 lg:flex lg:items-center lg:justify-center"
          >
            <LiquidPhotoTransition />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;