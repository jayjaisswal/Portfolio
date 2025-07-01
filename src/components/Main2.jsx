import React from 'react';
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import profileImage from '../assets/logo.svg';
import { LuMouse } from 'react-icons/lu';

function Main() {
  return (
    <>
      {/* Home Page */}
      <div className='h-[calc(100vh)] w-full bg-[#000213] flex justify-center'>
        <div className='w-[90%] flex justify-between items-center'>

          {/* Left Section */}
          <div className='h-[80%] flex flex-col'>
            <h1 className='text-3xl font-bold text-white mb-[40px] mt-6'>
              Hello, I'm <span className="text-[#84AB91] text-6xl font-bold">Jay Kumar!</span>
            </h1>

            <h2 className='text-4xl font-bold text-white mb-6'>
              A {' '}
              <TypeAnimation
                className='text-[#84AB91]'
                sequence={[
                  "MERN Stack Developer", 1000,
                  "Problem solver", 1000,
                  "Tech enthusiast", 1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h2>

            {/* Paragraph - Adjusted Width */}
            <p className='text-[1.1rem] text-white max-w-[600px] leading-[1.6]'>
              I'm a passionate Software Developer with a strong background in backend development. 
              Final year IT student at GNDEC Ludhiana, I have a deep interest in building scalable web applications. 
              Always eager to learn, solve complex problems, and contribute to impactful projects.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-8">
              <a href="https://www.linkedin.com/in/ayushsen07" target="_blank" rel="noopener noreferrer"
                className=" p-2 rounded-full">
                <FaLinkedin className="text-[#ffffff] text-4xl" />
              </a>

              <a href="https://github.com/ayushsen07" target="_blank" rel="noopener noreferrer"
                className=" p-2 rounded-full">
                <FaGithub className="text-white text-4xl" />
              </a>

              <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer"
                className=" p-2 rounded-full">
                <SiLeetcode className="text-white text-4xl" />
              </a>

              {/* Email Icon */}
              <a href='https://mail.google.com/mail/?view=cm&fs=1&to=senayush920@gmail.com' target='blank' className=" p-2 rounded-full">
                <MdEmail className="text-white text-4xl" />
              </a>
            </div>
          </div>

          {/* Right Section - Fixed Image Compression */}
          <div className=''>
            <div className=''>
              <img className='w-[650px] h-[500px] object-cover rounded-3xl' src={profileImage} alt="Profile" />
            </div>
          </div>

          {/* Scroll Mouse */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <LuMouse className="text-white text-4xl animate-bounce mt-28" />
            <p className="text-white text-sm mt-2">Scroll Down</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
