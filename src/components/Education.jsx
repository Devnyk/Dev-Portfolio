import React from 'react';
import 'remixicon/fonts/remixicon.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: 'Biju Patnaik University of Technology, Rourkela',
      degree: 'B.Tech, Computer Science and Engineering',
      duration: 'Sep 2020 - May 2024',
      cgpa: '8.66/10',
      icon: 'ri-graduation-cap-line',
      color: 'blue'
    },
    {
      id: 2,
      institution: 'DAV Public School, Brajrajnagar',
      degree: 'Class 12 (Science)',
      duration: 'Aug 2018 - May 2020',
      cgpa: '9.78/10',
      icon: 'ri-book-open-line',
      color: 'green'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Education</h2>
            <div className="w-24 h-1 mx-auto rounded bg-blue-600 dark:bg-blue-400"></div>
          </div>

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className={`bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 lg:p-8 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900/20 hover:scale-[1.02] hover:-translate-y-1 group animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-14 h-14 ${
                    edu.color === 'blue' 
                      ? 'bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50' 
                      : 'bg-green-100 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-900/50'
                  } rounded-xl flex items-center justify-center transition-all duration-300 hover:rotate-6`}>
                    <i className={`${edu.icon} ${
                      edu.color === 'blue' 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-green-600 dark:text-green-400'
                    } text-2xl`}></i>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {edu.institution}
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                          {edu.degree}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {edu.duration}
                        </p>
                      </div>
                      
                      <div className={`${
                        edu.color === 'blue' 
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                          : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                      } px-4 py-2 rounded-full text-sm font-semibold hover:scale-110 transition-transform duration-300`}>
                        CGPA: {edu.cgpa}
                      </div>
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

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Education;