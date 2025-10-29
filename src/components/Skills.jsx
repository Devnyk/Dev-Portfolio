import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

// Import icons
import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
import jsIcon from '../assets/icons/js.png';
import nodejsIcon from '../assets/icons/nodejs.png';
import nextIcon from '../assets/icons/next.png';
import tailwindIcon from '../assets/icons/tailwind.png';
import mongoIcon from '../assets/icons/mongoDB.png';
import gitIcon from '../assets/icons/git.png';
import githubIcon from '../assets/icons/github.png';
import awsIcon from '../assets/icons/aws.png';
import dockerIcon from '../assets/icons/docker.png';
import vercelIcon from '../assets/icons/vercel.png';
import photoshopIcon from '../assets/icons/photoshop.png';
import illustratorIcon from '../assets/icons/illustrator.png';
import reduxIcon from '../assets/icons/redux.png';
import typescriptIcon from '../assets/icons/typescript.png';
import sassIcon from '../assets/icons/sass.png';
import postmanIcon from '../assets/icons/postman.png';
import renderIcon from '../assets/icons/render.png';
import genaiIcon from '../assets/icons/genai.png';
import langchainIcon from '../assets/icons/langchain.png';
import pineconeIcon from '../assets/icons/pineconeDB.png';
import expressjsIcon from '../assets/icons/expressjs.png';
import expressBlackIcon from '../assets/icons/expressblack.png';
import figmaIcon from '../assets/icons/figma.png';
import socketioIcon from '../assets/icons/Socket-io.png';
import redisIcon from '../assets/icons/redisDB.png';
import framerIcon from '../assets/icons/framer.png'

const Skills = () => {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'JavaScript', icon: jsIcon },
        { name: 'TypeScript', icon: typescriptIcon },
        { name: 'Next.js', icon: nextIcon },
        { name: 'Redux', icon: reduxIcon },
        { name: 'Tailwind CSS', icon: tailwindIcon },
        { name: 'Sass', icon: sassIcon }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: nodejsIcon },
        { name: 'Express.js', icon: isDark ? expressjsIcon : expressBlackIcon },
        { name: 'MongoDB', icon: mongoIcon },
        { name: 'Pinecone', icon: pineconeIcon },
        { name: 'Socket.IO', icon: socketioIcon },
        { name: 'Redis', icon: redisIcon }
      ]
    },
    {
      title: 'Dev Tools',
      skills: [
        { name: 'Git', icon: gitIcon },
        { name: 'GitHub', icon: githubIcon },
        { name: 'AWS', icon: awsIcon },
        { name: 'Docker', icon: dockerIcon },
        { name: 'GenAI', icon: genaiIcon },
        { name: 'Langchain', icon: langchainIcon },
        { name: 'Postman', icon: postmanIcon },
        { name: 'Render', icon: renderIcon },
        { name: 'Vercel', icon: vercelIcon }
      ]
    },
    {
      title: 'Design Tools',
      skills: [
        { name: 'Figma', icon: figmaIcon },
        { name: 'Photoshop', icon: photoshopIcon },
        { name: 'Illustrator', icon: illustratorIcon },
        { name: 'Framer Motion', icon: framerIcon }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">My Skills</h2>
            <div className="w-24 h-1 mx-auto rounded bg-blue-600 dark:bg-blue-400"></div>
          </div>

          {/* Skills Grid - 2x2 Layout with optimized spacing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className="group"
              >
                {/* Category Box - Minimal and clean design */}
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl p-5 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 h-[380px] flex flex-col">

                  {/* Minimal Category Title */}
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                      {category.title}
                    </h3>
                    <div className="w-12 h-px bg-gray-300 dark:bg-gray-600 mx-auto"></div>
                  </div>

                  {/* Skills Icons Grid - Accommodate up to 12 icons (3 rows x 4 cols) */}
                  <div className="grid grid-cols-4 gap-2 flex-1 content-start auto-rows-min">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={`${skill.name}-${index}`}
                        variants={skillVariants}
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                          transition: {
                            duration: 0.2,
                            ease: "easeOut"
                          }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="group/skill cursor-pointer flex flex-col items-center justify-start py-1 min-h-[60px]"
                      >
                        {/* Icon - Optimized size */}
                        <motion.div
                          className="mb-1.5 relative"
                          whileHover={{
                            rotate: [0, -2, 2, 0],
                            transition: { duration: 0.3 }
                          }}
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-8 h-8 sm:w-10 sm:h-10 object-contain filter transition-all duration-300 group-hover/skill:brightness-110 group-hover/skill:drop-shadow-md"
                            onError={(e) => {
                              console.error(`Failed to load icon for ${skill.name}:`, skill.icon);
                              e.target.style.display = 'none';
                            }}
                            onLoad={() => {
                              console.log(`Successfully loaded icon for ${skill.name}`);
                            }}
                          />
                        </motion.div>

                        {/* Skill Name - Optimized typography */}
                        <motion.p
                          className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center leading-tight group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-300"
                          whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                          {skill.name}
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>
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