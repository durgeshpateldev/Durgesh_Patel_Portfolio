import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const ExperienceSection = () => {
  const experienceRef = useRef();
  const isVisible = useIntersectionObserver(experienceRef, {
    threshold: 0.2,
  });

  const experiences = [
    {
      title: "MERN Stack Development",
      type: "Self-directed Learning",
      period: "2026 – Present",
      description:
        "Currently learning full-stack web development with JavaScript, React.js, Node.js, Express.js, and MongoDB. Building practical projects while developing a strong understanding of modern frontend and backend development.",
    },
    {
      title: "Frontend Development",
      type: "Self-directed Projects",
      period: "2024 – 2026",
      description:
        "Built a strong foundation in HTML, CSS, and JavaScript and expanded into React.js and Tailwind CSS through hands-on projects. Focused on creating responsive, interactive, and user-friendly web interfaces.",
    },
  ];

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="py-20 px-4 sm:px-8 bg-black text-white dark:bg-white dark:text-black transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
     
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-20 orbitron neon-glow-purple dark:neon-glow-none ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          Experience
        </h2>

        
        <div className="relative">
          
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className={`relative flex ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                } items-start ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
               
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-1 w-4 h-4 rounded-full bg-cyan-400 border-4 border-black dark:border-white z-10 shadow-[0_0_15px_rgba(34,211,238,0.6)]"></div>

                <div
                  className={`w-full md:w-5/12 ml-10 md:ml-0 ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}
                >
                  <span className="inline-block text-sm font-medium text-purple-400 dark:text-purple-600 mb-2">
                    {experience.period}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 dark:text-cyan-600">
                    {experience.title}
                  </h3>

                  <h4 className="text-base sm:text-lg font-medium text-pink-400 dark:text-pink-500 mt-1">
                    {experience.type}
                  </h4>

                  <p className="text-gray-300 dark:text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
                    {experience.description}
                  </p>
                </div>

                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
