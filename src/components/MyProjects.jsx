import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Zap, Calendar } from "lucide-react";
import { useState } from "react";
// Sample project data - replace with your actual projects
const projects = [
  {
    title: "HackChain Network",
    description: "A platform for developers and hackers to connect, form teams, and win hackathons together. Features real-time chat, team matching, and project collaboration tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind", "Socket.io", "OpenAI API"],
    liveLink: "https://www.linkedin.com/company/hackchain-network/",
    codeLink: "https://github.com/sadique-2004/HackChain-Network",
    status: "In Development",
    category: "Full Stack"
  },
  {
    title: "LearnMate",
    description: "AI-powered learning platform with doubt solving, resources, and a student community. Smart recommendations and personalized learning paths.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
    technologies: ["React", "VectorDB", "Gemini API", "Tailwind", "TypeScript"],
    liveLink: "https://lern-mate.vercel.app/",
    codeLink: "https://github.com/sadique-2004/LernMate",
    status: "In Development",
    category: "AI/ML"
  },
  {
    title: "TrippyStay",
    description: "A travel and listing app to discover, host, and review places with full CRUD operations. Complete booking system with reviews and ratings.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop",
    technologies: ["EJS", "Node.js", "Express", "MongoDB", "Cloudinary", "Passport.js"],
    liveLink: "https://trippystay.onrender.com/listings",
    codeLink: "https://github.com/sadique-2004/TrippyStay.git",
    status: "Completed",
    category: "Full Stack"
  },
  {
    title: "Invoicify",
    description: "Create and manage invoices with a clean UI, print & download features, and backend storage. Professional invoice generation with PDF export.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
    technologies: ["React", "MongoDB", "Express", "Tailwind"],
    liveLink: "https://invoicify-nine.vercel.app/",
    codeLink: "https://github.com/sadique-2004/Invoicify",
    status: "In Development",
    category: "Business"
  },
  {
    title: "Invoicify",
    description: "Create and manage invoices with a clean UI, print & download features, and backend storage. Professional invoice generation with PDF export.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
    technologies: ["React", "MongoDB", "Express", "Tailwind"],
    liveLink: "https://invoicify-nine.vercel.app/",
    codeLink: "https://github.com/sadique-2004/Invoicify",
    status: "In Development",
    category: "Business"
  },
  {
    title: "Invoicify",
    description: "Create and manage invoices with a clean UI, print & download features, and backend storage. Professional invoice generation with PDF export.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
    technologies: ["React", "MongoDB", "Express", "Tailwind"],
    liveLink: "https://invoicify-nine.vercel.app/",
    codeLink: "https://github.com/sadique-2004/Invoicify",
    status: "In Development",
    category: "Business"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const buttonVariants = {
  rest: { scale: 1, backgroundColor: "rgba(132, 171, 145, 0.1)" },
  hover: { 
    scale: 1.05,
    backgroundColor: "rgba(132, 171, 145, 0.2)",
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.95 }
};


const MyProjects = () => {
      const [showAll, setShowAll] = useState(false);
      const displayedProjects = showAll ? projects : projects.slice(0, 4);
  return (
    
     <div id='projects' className='bg-[#000111] w-full pb-10 overflow-hidden '>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "300px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-[#84AB91] to-[#A1C1AE] mx-auto mb-6"
          />
          {/* <h3 className="text-lg font-semibold mb-4 text-[#84AB91] tracking-wider  uppercase">
            Portfolio
          </h3> */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#84AB91]">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84AB91] to-[#A1C1AE]">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work in full-stack development, featuring modern technologies and creative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover="hover"
              initial="rest"
              className="group"
            >
              <div className="bg-gradient-to-br from-[#0F1629] to-[#1A2332] rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#84AB91]/10 transition-all duration-500 border border-gray-800/50 hover:border-[#84AB91]/30">
                
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    variants={imageVariants}
                    className="h-48 sm:h-56 w-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1629]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-300 border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                    }`}>
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#84AB91]/20 text-[#84AB91] border border-[#84AB91]/30 backdrop-blur-sm">
                      <Zap className="w-3 h-3 mr-1" />
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-4">
                  <h3 className="text-xl sm:text-xl font-bold mb-3 text-white group-hover:text-[#84AB91] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm sm:text-base mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        className="text-xs sm:text-sm bg-gradient-to-r from-[#1E293B] to-[#334155] text-gray-300 px-3 py-1 rounded-full border border-gray-700/50 hover:border-[#84AB91]/30 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="flex items-center justify-center gap-2 px-2 py-2 bg-gradient-to-r from-[#84AB91] to-[#A1C1AE] text-black rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#84AB91]/25 flex-1"
                    >
                      <ExternalLink className="w-2 h-2" />
                      <span>Live Demo</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="flex items-center justify-center gap-2 px-2 py-2 border-2 border-[#84AB91]/30 text-[#84AB91] rounded-xl font-medium transition-all duration-300 hover:bg-[#84AB91]/10 hover:border-[#84AB91]/50 flex-1"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        {projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 border border-[#84AB91] text-[#84AB91] rounded hover:bg-[#84AB91]/10 transition-colors"
            >
              {showAll ? "Show Less" : "Show More Projects"}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MyProjects;