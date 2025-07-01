import React from 'react';
import clgLogo from '../assets/clg_logo.png';
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant, fadeInTopVariant } from '../animations/Variants';

const educationData = [
  {
    side: 'left',
    title: 'Central Progressive School, Samastipur',
    degree: '10th (CBSE)',
    duration: 'Completed in 2018',
    score: 'CGPA: 10 (95%)',
  },
  {
    side: 'right',
    title: 'BD Public School, Hajipur',
    degree: '12th (CBSE)',
    duration: '2018 - 2020',
    score: 'Percentage: 83%',
  },
  {
    side: 'left',
    title: 'Guru Nanak Dev Engineering College, Ludhiana',
    degree: 'B.Tech in Computer Science',
    duration: '2022 - 2026',
    score: 'Currently Pursuing',
    logo: clgLogo,
    // extras: [
    //   'Head Coordinator, TNP Cell',
    //   'Public Representative, ISTE SC MANIT',
    // ],
  },
];

function Education() {
  return (
    <section id="education" className="bg-[#000111] py-28 w-full overflow-hidden">
    <div className="bg-[#000213] w-full pb-20">
      <div className="w-[90%] mx-auto">
        <motion.div
          variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible"
        >
          <h3 className="text-2xl font-bold text-white pb-3">MY EDUCATION</h3>
          <h1 className="text-4xl sm:text-6xl font-bold text-white pb-14">
            Where <span className="text-[#84AB91]">I'm Learning</span>
          </h1>
        </motion.div>

        {/* Timeline container */}
        <div className="relative flex flex-col items-center">
          {/* Center vertical line */}
          <div className="absolute w-1 bg-gradient-to-b from-[#84AB91] to-white h-full z-0"></div>

          {/* Timeline entries */}
          {educationData.map((edu, index) => {
            const isLeft = edu.side === 'left';
            const MotionVariant = isLeft ? fadeInLeftVariant : fadeInRightVariant;

            return (
              <motion.div
                key={index}
                className={`w-full flex justify-between items-center mb-4 relative z-10`}
                variants={MotionVariant}
                initial="hidden"
                whileInView="visible"
              >
                {/* Left content */}
                {isLeft && (
                  <div className="sm:text-right w-[45%] text-center">
                    <div className="bg-[#101828] p-5 rounded-xl text-white shadow-lg">
                      <h2 className="text-2xl font-bold">{edu.title}</h2>
                      <p>{edu.degree}</p>
                      <p className="italic">{edu.duration}</p>
                      <p className="font-semibold">{edu.score}</p>
                      {edu.extras && (
                        <ul className="list-disc list-inside mt-2 text-left">
                          {edu.extras.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}

                {/* Center dot */}
                <div className="w-[10%] flex justify-center items-center">
                  {/* <div className="w-5 h-5 bg-[#84AB91] rounded-full border-4 border-white"></div> */}
                </div>

                {/* Right content */}
                {!isLeft && (
               <div className="sm:text-left w-[45%] text-center">
                    <div className="bg-[#101828] p-5 rounded-xl text-white shadow-lg">
                      <h2 className="text-2xl font-bold">{edu.title}</h2>
                      <p>{edu.degree}</p>
                      <p className="italic">{edu.duration}</p>
                      <p className="font-semibold">{edu.score}</p>
                      {edu.extras && (
                        <ul className="list-disc list-inside mt-2">
                          {edu.extras.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
    </section>
  );
}

export default Education;
