import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);

  const roles = [
    "MERN Stack Developer",
    "React.js Developer",
    "Full Stack Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[calc(100svh-4rem)] sm:min-h-screen flex items-center justify-center px-4 sm:px-8 bg-black text-white dark:bg-white dark:text-black transition-colors duration-500"
    >
      <div className="max-w-6xl w-full mx-auto text-center">
        
        <p className="text-cyan-400 dark:text-cyan-600 text-base sm:text-lg mb-3">
          Hi, I'm
        </p>

       
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold orbitron neon-glow-purple dark:neon-glow-none">
          Durgesh Patel
        </h1>

        
        <div className="h-10 sm:h-12 mt-5 overflow-hidden">
          <h2
            key={currentText}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-pink-400 dark:text-pink-500 animate-fade-in"
          >
            {roles[currentText]}
          </h2>
        </div>

        
        <p className="max-w-2xl mx-auto mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 dark:text-gray-700">
          I build modern, responsive web applications with React and the MERN
          stack.
        </p>

       
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="/Durgesh_Patel_Resume.pdf"
            download
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,92,246,0.25)]"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold border border-cyan-400/50 text-cyan-400 dark:text-cyan-600 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/10 hover:border-cyan-400"
          >
            Contact Me
          </a>
        </div>

        
        <div className="mt-10 sm:mt-14 animate-bounce">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="inline-flex flex-col items-center text-gray-400 dark:text-gray-600 hover:text-cyan-400 transition-colors duration-300"
          >
            <span className="text-xs mb-2">Scroll Down</span>
            <i className="fas fa-chevron-down text-sm"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
