import React from "react";
import { FaJava, FaGitAlt, FaGithub, FaAws } from "react-icons/fa";
import { SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss, SiChakraui, SiFramer, SiNodedotjs, SiExpress, SiMongodb, SiMongoose, SiMysql, SiGraphql, SiPostman } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeInBottomVariant, fadeInLeftVariant, fadeInRightVariant, fadeInTopVariant } from "../animations/Variants";
import fadeImage  from '../assets/right.png'

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: <SiReact /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mongoose", icon: <SiMongoose /> },
      { name: "REST APIs", icon: <SiGraphql /> },
    ],
  },
  {
    category: "Others",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "AWS (S3, EC2)", icon: <FaAws /> },
      { name: "Data Structures & Algorithms", icon: "🖥" },
      { name: "OOPS", icon: "📚" },
      { name: "Problem Solving", icon: "🧠" },
    ],
  },
];

const MySkills = () => {
  return (
    <section id="skills" className="bg-[#000111] w-full overflow-hidden pt-34 pb-34 relative">
      {/* Right side fade image */}
      <div className="absolute top-0 right-0 w-1/3 flex items-center pointer-events-none">
        <img 
          src={fadeImage}
          alt="Background fade" 
          className="h-full w-full object-cover object-left"
        />
      </div>
      
      <div className="w-[90%] mx-auto relative z-10">
        {/* heading of the page */}
        <div className="">
          <motion.h3 
            className="sm:text-2xl text-[18px] font-bold text-white pb-3"
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
          >
            MY SKILLS
          </motion.h3>
          <motion.h1 
            className="sm:text-6xl text-4xl font-bold text-white pb-14"
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
          >
            What <span className="text-[#84AB91]">I can do</span>
          </motion.h1>
        </div>

        {/* skills section  */}
        <div>
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="flex flex-wrap mt-8 gap-5" 
              variants={fadeInLeftVariant}
              initial="hidden"
              whileInView="visible" 
            >
              <div className="">
                <h3 className="text-2xl font-semibold font-serif mb-4 text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {skill.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 bg-[#19919] text-white px-4 py-2 rounded-lg border hover:bg-white hover:text-black"
                  >
                    <span className="text-[#88AB8E] text-2xl">{item.icon}</span>
                    {item.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;