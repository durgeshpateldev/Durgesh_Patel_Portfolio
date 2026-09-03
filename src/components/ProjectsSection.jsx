import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const ProjectsSection = () => {
  const projectsRef = useRef();
  const isVisible = useIntersectionObserver(projectsRef, {
    threshold: 0.2,
  });

  const projects = [
    {
      title: "TextUtils",
      description:
        "A React-based text utility application for analyzing, formatting, and transforming text through a clean and simple interface.",
      technologies: ["React.js", "Bootstrap"],
      github: "https://github.com/gurjardurgesh88/Text-editor-app",
      live: "https://text-editor-online.vercel.app/",
    },

    {
      title: "X Social App",
      description:
        "A modern social media web application inspired by X, built with React.js and Tailwind CSS with a responsive and interactive interface.",
      technologies: ["React.js", "Tailwind CSS"],
      github: "https://github.com/gurjardurgesh88/x-social",
      live: "https://x-social-app.vercel.app/",
    },

    {
      title: "Snake Game",
      description:
        "A classic Snake Game built with HTML, CSS, and JavaScript featuring interactive gameplay, score tracking, and smooth controls.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/gurjardurgesh88/Snakemania",
      live: "https://snakemania-game.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-20 px-4 sm:px-8 bg-black text-white dark:bg-white dark:text-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 orbitron neon-glow dark:neon-glow-none ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          My Projects
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group glass-effect dark:bg-gray-100 rounded-xl border border-gray-800 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="p-6">
                
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                  {project.title}
                </h3>

                
                <p className="text-gray-300 dark:text-gray-700 leading-relaxed min-h-30">
                  {project.description}
                </p>

                
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 text-sm rounded-full border border-cyan-400/30 text-cyan-400 dark:text-cyan-600 bg-cyan-400/5"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              
                <div className="flex gap-3 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-lg border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
