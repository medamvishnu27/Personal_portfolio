import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaJsSquare, FaReact, FaCode } from 'react-icons/fa';
import { LuScreenShare } from "react-icons/lu";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projectData = {
    html: [
      {
        id: "html_1",
        title: "Wedding Planner Website",
        description: "A comprehensive website showcasing all the services offered by wedding planners. Users can explore packages, view testimonials, and get in touch with planners.",
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80',
        technologies: ["HTML", "CSS"],
        websiteUrl: "https://drive.google.com/drive/folders/1qfNE885_nvv5_MEtKr1btQ8CWSJFC7lB?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/wedding_planners_website.git",
      },
      {
        id: "html_2",
        title: "Hungry Buds Restaurant Website",
        description: "An informative site for the Hungry Buds restaurant, including its menu, special offers, and reservation options.",
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80',
        technologies: ["HTML", "CSS"],
        websiteUrl: "https://drive.google.com/drive/folders/15BPDVA0VluyVdxsOQsc7PnAaI_RCQYgq?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/food_website.git",
      },
    ],
    javascript: [
      {
        id: "js_1",
        title: "Real-time Weather Update Website",
        description: "Provides accurate real-time weather updates using a weather API.",
        image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80',
        technologies: ["JavaScript", "CSS", "HTML"],
        websiteUrl: "https://drive.google.com/drive/folders/1GrdgxPbf7Z1pKR2zZgpKETvyQ2MbIcTv?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/realtime_weather_update.git",
      },
      {
        id: "js_2",
        title: "Simple Calculator",
        description: "A basic calculator for arithmetic operations.",
        image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80',
        technologies: ["JavaScript", "CSS", "HTML"],
        websiteUrl: "https://example.com/calculator",
        sourceCodeUrl: "https://github.com/medamvishnu27/Simple-calculator.git",
      },
      {
        id: "js_3",
        title: 'BMI Calculator',
        description: 'Calculate Body Mass Index (BMI) with height and weight input.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80',
        sourceCodeUrl: 'https://github.com/medamvishnu27/BMI-_calculator.git',
        websiteUrl: 'https://drive.google.com/drive/folders/18nrWi2hn8ODj7ZgwmJeWiQZHyOELEXJ4?usp=sharing',
        technologies: ['JavaScript', 'CSS', 'HTML']
      },
      {
        id: "js_4",
        title: 'Random Quote Generator',
        description: 'This generator displays a new quote every time you refresh.',
        image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80',
        sourceCodeUrl: 'https://github.com/medamvishnu27/Quote-generator.git',
        websiteUrl: 'https://drive.google.com/drive/folders/1btX3ZaQdgvOORhRsZdqYFlnmi6j_HTZT?usp=sharing',
        technologies: ['JavaScript', 'CSS', 'HTML']
      },
      {
        id: "js_5",
        title: 'Stopwatch',
        description: 'Track time with a clean stopwatch interface including lap and reset.',
        image: 'https://images.unsplash.com/photo-1593950323882-bd07c1a9d2d8?auto=format&fit=crop&q=80',
        sourceCodeUrl: 'https://github.com/medamvishnu27/Stop_watch.git',
        websiteUrl: 'https://drive.google.com/drive/folders/1VXy16TYutd20ZEgkecL39rHzZkUOD4UT?usp=sharing',
        technologies: ['JavaScript', 'CSS', 'HTML']
      },
    ],
    react: [
      {
        id: "react_1",
        title: "CA Profiles",
        description: "A solution to organize and access Chartered Accountants' data easily.",
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
        technologies: ["React.js", "JavaScript", "Tailwind CSS"],
        websiteUrl: "https://drive.google.com/drive/folders/1VXy16TYutd20ZEgkecL39rHzZkUOD4UT?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/CAProfiles.git",
      },
      {
        id: "react_2",
        title: "Expense Tracker",
        description: "Track daily expenses with easy-to-use UI.",
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80',
        technologies: ["React.js", "JavaScript", "Bootstrap"],
        websiteUrl: "https://drive.google.com/drive/folders/1AbUpjSbpjaQdE88B0jeEJ0tJPM36o3W3?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/Expense-Tracker.git",
      },
      {
        id: "react_3",
        title: 'E-commerce Website',
        description: 'E-commerce store with product catalog, cart, and checkout.',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80',
        sourceCodeUrl: 'https://github.com/medamvishnu27/Ecommarce_project.git',
        websiteUrl: 'https://drive.google.com/drive/folders/1LUo-C7COsjD5bZVt-5RXEavQqzCoH0MP?usp=sharing',
        technologies: ['React.js', 'JavaScript', 'Bootstrap']
      },
      {
        id: "react_4",
        title: 'Music App',
        description: 'Music streaming app with playlist creation and artist discovery.',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80',
        sourceCodeUrl: 'https://github.com/medamvishnu27/Music-app.git',
        websiteUrl: 'https://drive.google.com/drive/folders/1_3dfWZFP_SdICaCYZo-O2kwvounkwn1l?usp=sharing',
        technologies: ['React.js', 'JavaScript', 'Bootstrap']
      },
      {
        id: "react_5",
        title: 'Quiz App',
        description: 'Quiz platform on HTML, CSS, Bootstrap, and React with scoring.',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80',
        sourceCodeUrl: 'https://github.com/medamvishnu27/QuizApp_React.git',
        websiteUrl: 'https://drive.google.com/drive/folders/19xo9DVmGpRMFW1DnPEJ6K4twQabOute0?usp=sharing',
        technologies: ['React.js', 'JavaScript', 'Bootstrap']
      },
      {
        id: "react_6",
        title: "Task Management Application",
        image: '/4871715.jpg',
        description: "Create to-dos, set reminders, and track goals.",
        technologies: ["React.js", "JavaScript", "Bootstrap"],
        websiteUrl: "https://drive.google.com/drive/folders/1St0GBFzjNi8g_eD6e8s6f2ZQKGRkcKkT?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/Task_mangment_application.git",
      },
      {
        id: "react_7",
        title: "Socialhire",
        image: 'public/Socialhire.png',
        description: "Get weather updates with a responsive interface.",
        technologies: ["React.js", "Redux", "Tailwind CSS"],
        websiteUrl: "https://drive.google.com/drive/folders/1AbUpjSbpjaQdE88B0jeEJ0tJPM36o3W?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/Weather_app",
      }
    ],
    typescript: [
      {
        id: "typescript_1",
        title: "Personal portfolio",
        description: "A modern and interactive developer portfolio built with TypeScript.",
        image: 'public/portfolio.png',
        technologies: ["TypeScript", "Framer Motion", "Tailwind CSS"],
        websiteUrl: "https://personalportfoliovishnu.vercel.app/",
        sourceCodeUrl: "https://github.com/medamvishnu27/Personal_portfolio.git",
      }
    ]
  };

  useEffect(() => {
    const projects = selectedCategory === 'All'
      ? [...projectData.html, ...projectData.javascript, ...projectData.react, ...projectData.typescript]
      : projectData[selectedCategory.toLowerCase()] || [];
    setFilteredProjects(projects);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Some <span className="text-blue-600">Projects</span> I've Built
      </motion.h2>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {['All', 'Html', 'JavaScript', 'React', 'TypeScript'].map((category) => (
          <motion.button
            key={category}
            className={`px-6 py-2 rounded-full ${selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'Html' && <FaHtml5 className="inline mr-2" />}
            {category === 'JavaScript' && <FaJsSquare className="inline mr-2" />}
            {category === 'React' && <FaReact className="inline mr-2" />}
            {category}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-6">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl text-gray-800 font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-500 transition-colors"
                  >
                    <LuScreenShare className="mr-2" />
                    View Project
                  </a>
                  <a
                    href={project.sourceCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <FaCode className="mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
