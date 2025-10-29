import { useState } from 'react';
import { motion } from 'motion/react';
import 'remixicon/fonts/remixicon.css';
import citrusLabImage from '../assets/images/citrus_welcome.png';
import pluginImage from '../assets/images/plugin_welcome.png';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Dummy projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'CitrusLab',
      description: 'Built an AI-powered collaborative workspace where developers and AI co-create in real-time — like Figma meets ChatGPT with memory. Powered by LangChain, multi-LLM intelligence, and vector memory, it transforms raw ideas into production-ready architecture through seamless teamwork and context retention.',
      image: citrusLabImage,
      technologies: ['LangChain', 'React JS', 'Pinecone DB', 'Socket.IO', 'SendGrid'],
      features: [
        'Real-time multi-user collaboration with Socket.IO',
        'Multi-LLM workspace powered by LangChain (GPT-4, Claude)',
        'RAG with Pinecone DB for persistent memory and context retention',
        'Automated schema setup reducing hallucinations by 80%',
      ],
      liveUrl: 'https://citrus-lab-frontend.onrender.com/',
      codeUrl: 'https://github.com/Citrus-Lab',
      status: 'Live'
    },
    {
      id: 2,
      title: 'PluginPlay',
      description: 'An online platform to book movies with role-based authentication, admin controls, and secure Razorpay payments, featuring TMDB-powered movie data and automated email updates.',
      image: pluginImage,
      technologies: ['React JS', 'Clerk', 'TMDB API', 'MongoDB', 'Razorpay'],
      features: [
        'Role-based access for admins and users',
        'Secure authentication via Clerk and Razorpay payments',
        'Dynamic movie data from TMDB API',
        'Deployed on Render for seamless scalability'
      ],
      liveUrl: 'https://quickshow-bxra.onrender.com/',
      codeUrl: 'https://github.com/Devnyk/PluginPlay',
      status: 'Live'
    },
    {
      id: 3,
      title: 'Cortxt',
      description: 'A lightning-fast CLI NPM package that converts any codebase into AI-ready context, featuring smart file filtering, folder-tree visualization, and instant clipboard copy — 800+ downloads within weeks.',
      image: 'https://ik.imagekit.io/1ukuaaqqhl/cortxt2.png?updatedAt=1755861293199',
      technologies: ['JS', 'Node JS', 'NPM', 'Commander JS'],
      features: [
        'AI-optimized context extraction for any project size',
        'Folder-tree visualization and smart file filtering',
        'Instant clipboard copy for seamless ChatGPT/Claude/Gemini input',
      ],
      liveUrl: 'https://www.npmjs.com/package/cortxt',
      codeUrl: 'https://github.com/Devnyk/Cortxt-AiContextProvider',
      status: 'Live'
    },
    {
      id: 4,
      title: 'OneTap',
      description: 'A viral, beginner-friendly CLI NPM package that generates production-ready frontend, backend, fullstack, and AI projects in seconds. Integrated with Tailwind, JWT Auth, and secure configs, OneTap cuts project setup time by 90%, helping developers start coding instantly.',
      image: 'https://ik.imagekit.io/1ukuaaqqhl/Frame%207.png?updatedAt=1761634249652',
      technologies: ['JS', 'Helmet', 'NPM', 'Commander JS', 'Inquirer JS'],
      features: [
        'One-command setup for MERN, Fullstack, and AI projects',
        'AI-powered custom structure generator with smart file creation',
        'Fully customizable — auto-installs user-defined packages',
      ],
      liveUrl: 'https://www.npmjs.com/package/onetap',
      codeUrl: 'https://github.com/Devnyk/onetap',
      status: 'In Progress'
    }
  ];

  return (
    <section id="projects" className="py-12 lg:py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Header - Mobile Optimized */}
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Projects
            </h2>
            <div className="w-24 h-1 mx-auto rounded bg-blue-600 dark:bg-blue-400"></div>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl lg:rounded-3xl p-4 lg:p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 group backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{
                  y: -3,
                  boxShadow: "0 20px 40px -12px rgb(0 0 0 / 0.2)",
                  transition: {
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-4 lg:gap-12 items-center`}>

                  {/* Project Image - Mobile Optimized Rectangular */}
                  <motion.div
                    className="w-full lg:w-1/2"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    whileHover={{ scale: 1.01 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <div className="relative w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 group/image">

                      {/* Status Badge with Animation */}
                      <motion.div
                        className="absolute top-3 right-3 z-20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                      >
                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-full backdrop-blur-sm border transition-all duration-300 ${project.status === 'Live'
                          ? 'bg-green-100/90 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-400 dark:border-green-700'
                          : 'bg-yellow-100/90 text-yellow-700 border-yellow-200 dark:bg-yellow-900/40 dark:text-yellow-400 dark:border-yellow-700'
                          } hover:scale-105 transform`}>
                          <motion.i
                            className={`ri-${project.status === 'Live' ? 'check' : 'time'}-line mr-1`}
                            animate={{ rotate: project.status === 'Live' ? 0 : 360 }}
                            transition={{ duration: 2, repeat: project.status !== 'Live' ? Infinity : 0, ease: "linear" }}
                          ></motion.i>
                          {project.status}
                        </span>
                      </motion.div>

                      {/* Main Image Container - Rectangular aspect ratio */}
                      <div className="relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden cursor-pointer group/imageinner">
                        {/* Background Image with Smooth Zoom Effect */}
                        <motion.div
                          className="absolute inset-0 w-full h-full"
                          style={{
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: index < 2 ? 'left center' : 'center center',
                            backgroundRepeat: 'no-repeat',
                          }}
                          animate={{
                            scale: hoveredProject === project.id ? 1.03 : 1,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeOut"
                          }}
                        />

                        {/* Dark Overlay for Better Contrast */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/imageinner:opacity-100 transition-opacity duration-500 ease-out" />

                        {/* Animated Overlay with Links */}
                        <motion.div
                          className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center gap-3"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: hoveredProject === project.id ? 1 : 0,
                          }}
                          transition={{
                            duration: 0.4,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                        >
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 px-4 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg text-sm"
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ y: 15, opacity: 0 }}
                            animate={{
                              y: hoveredProject === project.id ? 0 : 15,
                              opacity: hoveredProject === project.id ? 1 : 0
                            }}
                            transition={{
                              delay: 0.1,
                              duration: 0.3,
                              ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                          >
                            <i className="ri-external-link-line"></i>
                            Live Demo
                          </motion.a>

                          <motion.a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-900 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-lg text-sm"
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ y: 15, opacity: 0 }}
                            animate={{
                              y: hoveredProject === project.id ? 0 : 15,
                              opacity: hoveredProject === project.id ? 1 : 0
                            }}
                            transition={{
                              delay: 0.15,
                              duration: 0.3,
                              ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                          >
                            <i className="ri-github-line"></i>
                            View Code
                          </motion.a>
                        </motion.div>


                      </div>
                    </div>
                  </motion.div>

                  {/* Project Content - Mobile Optimized */}
                  <motion.div
                    className="w-full lg:w-1/2 space-y-4 lg:space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div>
                      <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white mb-2 lg:mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-base xl:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features - Mobile Optimized */}
                    <div>
                      <h4 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <i className="ri-star-line text-blue-600 dark:text-blue-400"></i>
                        Key Features:
                      </h4>
                      <ul className="space-y-1.5">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:translate-x-1 transition-transform duration-150 group/feature"
                          >
                            <i className="ri-arrow-right-s-line text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-150 text-sm"></i>
                            <span className="group-hover/feature:text-gray-900 dark:group-hover/feature:text-white transition-colors duration-150 leading-snug">
                              {feature}
                            </span>
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-xs text-gray-500 dark:text-gray-400 ml-5">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Technologies - Mobile Optimized */}
                    <div>
                      <h4 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <i className="ri-code-line text-blue-600 dark:text-blue-400"></i>
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs lg:text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700/50 cursor-default hover:scale-105 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-150"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons - Mobile Optimized */}
                    <div className="flex gap-3 pt-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 hover:scale-105 hover:shadow-lg text-sm flex-1 justify-center"
                      >
                        <i className="ri-external-link-line"></i>
                        Live Demo
                      </a>

                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 hover:scale-105 hover:shadow-lg text-sm flex-1 justify-center"
                      >
                        <i className="ri-github-line"></i>
                        View Code
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
};

export default Projects;