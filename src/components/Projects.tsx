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
        description: "A comprehenwebsiteUrl website that showcases all the services offered by wedding planners. Users can explore various packages, view testimonials, and get in touch with planners to make their special day memorable.",
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80',
        technologies: ["HTML", "CSS"],
        websiteUrl: "https://drive.google.com/drive/folders/1qfNE885_nvv5_MEtKr1btQ8CWSJFC7lB?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/wedding_planners_website.git",
      },
      {
        id: "html_2",
        title: "Hungry Buds Restaurant Website",
        description: "This website provides a complete overview of the Hungry Buds restaurant, including its menu, special offers, and reservation options.",
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
        description: "This website provides accurate real-time weather updates for various locations using weather API integration.",
        image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80',
        technologies: ["JavaScript", "CSS", "HTML"],
        websiteUrl: "https://drive.google.com/drive/folders/1GrdgxPbf7Z1pKR2zZgpKETvyQ2MbIcTv?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/realtime_weather_update.git",
      },
      {
        id: "js_2",
        title: "Simple Calculator",
        description: "A straightforward calculator that can perform basic arithmetic operations.",
        image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80',
        technologies: ["JavaScript", "CSS", "HTML"],
        websiteUrl: "https://example.com/calculator",
        sourceCodeUrl: "https://github.com/medamvishnu27/Simple-calculator.git",
      },
      {
        id: "js_3",
        title: 'BMI Calculator',
        description: 'Easily calculate your Body Mass Index (BMI) with this simple and accurate tool. Enter your height and weight, and instantly recwebsiteUrl your BMI result along with a healthy weight range interpretation.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80',
        sourceCodeUrl: 'https://github.com/medamvishnu27/BMI-_calculator.git',
        websiteUrl: 'https://drive.google.com/drive/folders/18nrWi2hn8ODj7ZgwmJeWiQZHyOELEXJ4?usp=sharing',
        technologies: ['JavaScript', 'CSS', 'HTML']
      },
      {
        id: "js_4",
        title: 'Random Quote Generator',
        description: 'Find inspiration and motivation with a daily dose of wisdom. This generator dewebsiteUrlrs a new and insightful quote each time you refresh, offering words to websiteUrl by and spark creativity.',
        image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80',
        sourceCodeUrl: 'https://github.com/medamvishnu27/Quote-generator.git',
        websiteUrl: 'https://drive.google.com/drive/folders/1btX3ZaQdgvOORhRsZdqYFlnmi6j_HTZT?usp=sharing',
        technologies: ['JavaScript', 'CSS', 'HTML']
      },
      {
        id: "js_5",
        title: 'Stopwatch',
        description: 'Time yourself with precision using this sleek and easy-to-use stopwatch. Track elapsed time, record lap times, and reset with a single click. Ideal for sports, work, or any activity requiring accurate timekeeping.',
        image: '/public/caucasian-businessman-holding-old-fashioned-metal-stopwatch-generated-by-ai.jpg',
        sourceCodeUrl: 'https://github.com/medamvishnu27/Stop_watch.git',
        websiteUrl: 'https://drive.google.com/drive/folders/1VXy16TYutd20ZEgkecL39rHzZkUOD4UT?usp=sharing',
        technologies: ['JavaScript', 'CSS', 'HTML']
      },
    ],
    react: [
      {
        id: "react_1",
        title: "CA Profiles",
        description: "A one-stop solution for all Chartered Accountants' data with user-friendly interface.",
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
        technologies: ["React.js", "JavaScript", "Tailwind CSS"],
        websiteUrl: "https://drive.google.com/drive/folders/1VXy16TYutd20ZEgkecL39rHzZkUOD4UT?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/CAProfiles.git",
      },
      {
        id: "react_2",
        title: "Expense Tracker",
        description: "An elegant tracker that helps users monitor their expenses according to different categories.",
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80',
        technologies: ["React.js", "JavaScript", "Bootstrap"],
        websiteUrl: "https://drive.google.com/drive/folders/1AbUpjSbpjaQdE88B0jeEJ0tJPM36o3W3?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/Expense-Tracker.git",
      },
      {
        id: "react_3",
        title: 'E-commerce Website',
        description: 'A foundation for your online store. This e-commerce website provides essential features to start selling products online, including product catalogs, shopping carts, and secure checkout.',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80',
        sourceCodeUrl: 'https://github.com/medamvishnu27/Ecommarce_project.git',
        websiteUrl: 'https://drive.google.com/drive/folders/1LUo-C7COsjD5bZVt-5RXEavQqzCoH0MP?usp=sharing',
        technologies: ['React.js', 'JavaScript', 'Bootstrap']
      },
      {
        id: "react_4",
        title: 'Music App',
        description: 'Discover, explore, and enjoy your favorite music. This app allows you to create playlists, stream music, and discover new artists with an intuitive and engaging interface.',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80',
        sourceCodeUrl: 'https://github.com/medamvishnu27/Music-app.git',
        websiteUrl: 'https://drive.google.com/drive/folders/1_3dfWZFP_SdICaCYZo-O2kwvounkwn1l?usp=sharing',
        technologies: ['React.js', 'JavaScript', 'Bootstrap']
      },
      {
        id: "react_5",
        title: 'Quiz App',
        description: 'Test your web development skills with this comprehensive quiz app. Covering fundamental concepts of HTML, CSS, Bootstrap, and React, the app features multiple-choice questions, detailed explanations, and score tracking. Challenge yourself, identify areas for improvement, and solidify your understanding of these core web technologies.',
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80',
        sourceCodeUrl: 'https://github.com/medamvishnu27/QuizApp_React.git',
        websiteUrl: 'https://drive.google.com/drive/folders/19xo9DVmGpRMFW1DnPEJ6K4twQabOute0?usp=sharing',
        technologies: ['React.js', 'JavaScript', 'Bootstrap']
      },{
        id: "react_6",
        title: "Task Management Application",
        image:'/public/4871715.jpg',
        description: "Stay organized and productive with this powerful task management application. Create to-do lists, set reminders, track progress, and collaborate with others to achieve your goals.",
        technologies: ["React.js", "JavaScript", "Bootstrap"],
        websiteUrl: "https://drive.google.com/drive/folders/1St0GBFzjNi8g_eD6e8s6f2ZQKGRkcKkT?usp=sharing",
        sourceCodeUrl: "https://github.com/medamvishnu27/Task_mangment_application.git",
      },
    ],
  };

  useEffect(() => {
    const projects = selectedCategory === 'All'
      ? [...projectData.html, ...projectData.javascript, ...projectData.react]
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
        {['All', 'Html', 'JavaScript', 'React'].map((category) => (
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
                <img src={project.image} alt="" />
                <h3 className="text-xl text-gray-800 p-1 font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
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