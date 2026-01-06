import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const projects = [
  {
    title: "LocalChef Bazaar",
    category: "MERN Stack , Real life Restaurant Application",
    image: "/project11.jpg",
    liveLink: "https://localchefbazaar-c2f05.web.app/"
  },
  {
    title: "Habit Tracker",
    category: "MERN Stack, Chase Your Habits",
    image: "project10.jpg",
    liveLink: "https://cerulean-snickerdoodle-48d018.netlify.app/"
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.children,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      {/* Heading */}
      <div className="mb-20">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight
          text-gray-900 dark:text-white">
          My Beautiful Works
        </h2>
        <p className="mt-4 text-gray-600 dark:text-text-muted">
          Selected projects & creative works
        </p>
      </div>

      {/* Grid */}
      <div
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-y-32 gap-x-12 lg:gap-x-20"
      >
        {projects.map((project, index) => (
          <motion.article
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className={`group ${
              index % 2 !== 0 ? "md:mt-24" : ""
            }`}
          >
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block cursor-pointer"
            >
            {/* Card */}
            <div className="relative w-full max-w-[420px] mx-auto
              overflow-hidden rounded-2xl
              bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800
              shadow-xl hover:shadow-2xl transition-all duration-500
              group-hover:-translate-y-2 cursor-pointer">
              {project.image ? (
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover
                      transition-all duration-700 scale-100
                      group-hover:scale-110 group-hover:grayscale"
                  />
                  {/* Live link indicator */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="fa-solid fa-external-link-alt text-gray-700 dark:text-gray-300 text-sm"></i>
                  </div>
                </div>
              ) : (
                <div className="aspect-[4/3] bg-primary flex items-center justify-center">
                  <h3 className="text-5xl font-black italic text-white">
                    标识
                  </h3>
                </div>
              )}
              
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Text */}
            <div className="mt-8 text-center md:text-left px-2">
              <h3
                className="text-2xl md:text-3xl font-bold
                text-gray-900 dark:text-white
                group-hover:text-primary transition-colors duration-300
                leading-tight"
              >
                {project.title}
              </h3>
              <p
                className="mt-3 text-sm uppercase tracking-wider font-medium
                text-gray-500 dark:text-gray-400
                group-hover:text-gray-600 dark:group-hover:text-gray-300
                transition-colors duration-300"
              >
                {project.category}
              </p>
              {/* Click indicator */}
              <p className="mt-2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center md:justify-start gap-1">
                <i className="fa-solid fa-mouse-pointer text-xs"></i>
                Click to view live
              </p>
            </div>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
