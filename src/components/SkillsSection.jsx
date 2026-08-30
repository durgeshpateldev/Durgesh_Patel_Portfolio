import React, { useRef } from "react";
import {
  Code2,
  Atom,
  Server,
  Braces,
  Database,
  FileCode2,
  Palette,
  Wind,
} from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const SkillsSection = () => {
  const skillsRef = useRef();

  const isVisible = useIntersectionObserver(skillsRef, {
    threshold: 0.3,
  });

  const skills = [
    {
      name: "JavaScript",
      description: "Core Programming",
      icon: Code2,
    },
    {
      name: "React.js",
      description: "Frontend Development",
      icon: Atom,
    },
    {
      name: "Node.js",
      description: "Backend Development",
      icon: Server,
    },
    {
      name: "Express.js",
      description: "Backend Framework",
      icon: Braces,
    },
    {
      name: "MongoDB",
      description: "NoSQL Database",
      icon: Database,
    },
    {
      name: "HTML5",
      description: "Web Structure",
      icon: FileCode2,
    },
    {
      name: "CSS3",
      description: "Web Styling",
      icon: Palette,
    },
    {
      name: "Tailwind CSS",
      description: "Utility-First CSS",
      icon: Wind,
    },
  ];

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-14 sm:py-20 px-4 sm:px-8 bg-black text-white dark:bg-white dark:text-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-16 orbitron neon-glow dark:neon-glow-none ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          My Skills
        </h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className={`group w-full max-w-sm mx-auto min-h-[88px]
                  glass-effect dark:bg-gray-100 dark:text-black
                  px-5 py-4
                  rounded-xl
                  border border-cyan-400/30 sm:border-gray-800
                  flex items-center
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-cyan-400/50
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
                  ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center gap-4 w-full">
                  
                  <div className="flex items-center justify-center shrink-0 text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={28} strokeWidth={2} />
                  </div>

                 
                  <div className="min-w-0 text-left">
                    <h3 className="text-lg sm:text-xl font-bold truncate">
                      {skill.name}
                    </h3>

                    <p className="text-sm text-gray-400 dark:text-gray-600 mt-1 truncate">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
