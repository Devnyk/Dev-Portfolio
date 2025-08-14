import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front End',
      skills: [
        { name: 'JavaScript', icon: '📄', color: 'yellow' },
        { name: 'React.js', icon: '⚛️', color: 'blue' },
        { name: 'Next.js', icon: '⭕', color: 'gray' },
        { name: 'HTML', icon: '🔶', color: 'orange' },
        { name: 'CSS', icon: '📘', color: 'blue' },
        { name: 'Bootstrap', icon: '🅱️', color: 'purple' },
        { name: 'Tailwind CSS', icon: '💨', color: 'cyan' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: '🍃', color: 'green' },
        { name: 'MySQL', icon: '🐬', color: 'blue' }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: '🔶', color: 'orange' },
        { name: 'GitHub', icon: '🐙', color: 'gray' },
        { name: 'VS Code', icon: '💻', color: 'blue' },
        { name: 'Figma', icon: '🎨', color: 'purple' },
        { name: 'Vercel', icon: '▲', color: 'gray' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2 
              variants={categoryVariants}
              className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4"
            >
              My Skills
            </motion.h2>
            
            <motion.p 
              variants={categoryVariants}
              className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Technologies and tools I've worked with throughout my projects and experience
            </motion.p>
          </div>

          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className="text-left"
              >
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-8">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        y: -8,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group cursor-pointer"
                    >
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl text-center">
                        <motion.div
                          whileHover={{ 
                            rotate: [0, -10, 10, 0],
                            scale: 1.1
                          }}
                          transition={{ duration: 0.4 }}
                          className="mb-4 text-4xl"
                        >
                          {skill.icon}
                        </motion.div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {skill.name}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;