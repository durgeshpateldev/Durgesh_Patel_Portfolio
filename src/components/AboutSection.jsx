import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import ProfileImage from "./ProfileImage";

const AboutSection = () => {
  const aboutRef = useRef();
  const isVisible = useIntersectionObserver(aboutRef, {
    threshold: 0.3,
  });

  const highlights = [
    ["MERN", "Stack"],
    ["React.js", "Frontend"],
    ["Node.js", "Backend"],
    ["Learning", "Every Day"],
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 px-4 sm:px-8 bg-black text-white dark:bg-white dark:text-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
       
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 orbitron neon-glow-purple dark:neon-glow-none ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       
          <div className={`${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <ProfileImage />
          </div>

          <div
            className={`${
              isVisible ? "animate-slide-right" : "opacity-0"
            } space-y-6`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold neon-glow-pink dark:neon-glow-none text-center md:text-left">
              MERN Stack Developer
            </h3>

            <p className="text-gray-300 dark:text-gray-700 text-base sm:text-lg leading-relaxed">
              Hi, I'm{" "}
              <span className="font-semibold text-cyan-400 dark:text-cyan-600">
                Durgesh Patel
              </span>
              , a BCA student and aspiring{" "}
              <span className="font-semibold">MERN Stack Developer</span>. I
              enjoy building modern, responsive web applications and currently
              focus on strengthening my skills in{" "}
              <span className="font-semibold">
                JavaScript, React.js, Node.js, Express.js, and MongoDB
              </span>
              .
            </p>

            <p className="text-gray-300 dark:text-gray-700 text-base sm:text-lg leading-relaxed">
              I started with frontend development and have been expanding into
              backend development to understand how complete web applications
              are built. I enjoy learning through hands-on projects and turning
              ideas into functional, user-friendly experiences.
            </p>

            <p className="text-gray-300 dark:text-gray-700 text-base sm:text-lg leading-relaxed">
              I'm continuously improving my development skills through practical
              projects and learning new technologies. My goal is to grow as a
              full-stack developer and contribute to real-world projects.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pt-2">
              {highlights.map(([value, label], index) => (
                <div
                  key={index}
                  className="glass-effect dark:bg-gray-100 dark:text-black p-4 rounded-lg border border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]"
                >
                  <p className="font-bold text-cyan-400 dark:text-cyan-600">
                    {value}
                  </p>

                  <p className="text-sm text-gray-400 dark:text-gray-600 mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
