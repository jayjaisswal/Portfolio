import React, { useState, useEffect } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-white tracking-wide">
          Jay Kumar<span className="text-[#84AB91]">.dev</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 justify-center items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white hover:text-[#84AB91] transition duration-300 relative group"
              >
                {link.name}
                <span className="block h-[2px] bg-[#84AB91] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </li>
          ))}
          {/* Resume Button */}
          <li>
            <a
              href="https://drive.google.com/file/d/1TDXuF_xJw7dy7gnGg4GNYtqj-2fySjAJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#84AB91] text-black font-semibold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-[#6a9d7c] transition-all"
            >
              Resume <FaDownload size={16} />
            </a>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden w-full ${
          menuOpen ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 bg-[#000213] py-4 rounded-b-xl w-full">
          {navLinks.map((link) => (
            <li key={link.href} className="w-full text-center">
              <a
                href={link.href}
                className="block w-full py-2 text-white font-semibold hover:text-[#84AB91] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1TDXuF_xJw7dy7gnGg4GNYtqj-2fySjAJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black hover:bg-black hover:border hover:border-white hover:text-white transition-all duration-300 font-semibold px-6 py-2 rounded-xl flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              Resume <FaDownload size={16} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
