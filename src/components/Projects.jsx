import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Dummy projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Matchwize',
      description: 'Matchwize analyzes your resume against job descriptions to give you a match score and actionable suggestions to improve your chances.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1200&fit=crop',
      technologies: ['Next.js', 'Node.js', 'Express.js', 'Supabase', 'Tailwind CSS', 'Gemini API'],
      features: [
        'Gemini API integration for resume analysis',
        'Supabase for data storage',
        'Real-time match scoring',
        'Actionable improvement suggestions'
      ],
      liveUrl: '#',
      codeUrl: '#',
      status: 'Live'
    },
    {
      id: 2,
      title: 'English Expressway',
      description: 'An online platform to join courses and buy ebooks to learn English, featuring role-based authentication and payment integration.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=1200&fit=crop',
      technologies: ['Next.js', 'NextAuth.js', 'Tailwind CSS', 'MongoDB', 'Razorpay'],
      features: [
        'Role-based authentication using NextAuth.js and JWT',
        'Integrated Razorpay for payment transactions',
        'Course management system',
        'User dashboard for enrolled courses'
      ],
      liveUrl: '#',
      codeUrl: '#',
      status: 'Live'
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment processing.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1200&fit=crop',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and wishlist functionality',
        'Secure payment processing with Stripe'
      ],
      liveUrl: '#',
      codeUrl: '#',
      status: 'In Progress'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h2>
            <div className="w-24 h-1 mx-auto rounded bg-blue-600 dark:bg-blue-400"></div>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl dark:hover:shadow-gray-900/30 group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                  
                  {/* Project Image - Scrollable */}
                  <div 
                    className="w-full lg:w-1/2"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="relative bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group/image">
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          project.status === 'Live' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                            : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}>
                          <i className={`ri-${project.status === 'Live' ? 'check' : 'time'}-line mr-1`}></i>
                          {project.status}
                        </span>
                      </div>

                      {/* Scrollable Image Container */}
                      <div 
                        className="h-80 lg:h-96 overflow-hidden cursor-pointer transition-all duration-700 ease-out"
                        style={{
                          backgroundImage: `url(${project.image})`,
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: hoveredProject === project.id ? '0% 100%' : '0% 0%'
                        }}
                      >
                        {/* Overlay with Links */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 hover:scale-110 transform"
                          >
                            <i className="ri-external-link-line"></i>
                            Live Demo
                          </a>
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 hover:scale-110 transform"
                          >
                            <i className="ri-github-line"></i>
                            View Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li 
                            key={idx}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300 hover:translate-x-2 transition-transform duration-200"
                          >
                            <i className="ri-arrow-right-s-line text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200 cursor-default hover:scale-105 hover:-translate-y-1 animate-fade-in-up"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105 hover:shadow-lg"
                      >
                        <i className="ri-external-link-line"></i>
                        Live Demo
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105 hover:shadow-lg"
                      >
                        <i className="ri-github-line"></i>
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Projects;