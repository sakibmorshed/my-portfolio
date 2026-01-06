import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from './ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactTyped } from 'react-typed';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const controls = useAnimation();
  const titleRef = useRef(null);

  useEffect(() => {
    // GSAP parallax-like subtle background movement
    gsap.to(".gradient-bg", {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Framer Motion entrance
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 px-6 relative overflow-hidden hero-section">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-bg bg-gradient-to-tr from-primary/20 via-blue-500/10 to-purple-600/20 blur-3xl scale-150" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end order-last lg:order-first"
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px]">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden relative z-10"
            >
              <img
                alt="Portrait of Sakib, Full Stack Developer"
                className="w-full h-full object-cover transform scale-110 hover:scale-105 transition-transform duration-700"
                style={{ objectPosition: '50% 34%' }}
                src="/my-profile.jpeg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:left-20 lg:translate-x-0 z-20"
            >
              
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col space-y-8 order-first lg:order-last text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="font-mono text-sm sm:text-base">
            <span className="text-code-tag dark:text-code-tag opacity-80">&lt;span&gt;</span>
            <span className="mx-2 text-gray-700 dark:text-gray-200 font-medium">Hey, I'm Sakib Morshed</span>
            <span className="text-code-tag dark:text-code-tag opacity-80">&lt;/span&gt;</span>
          </motion.div>

          <motion.h1
            ref={titleRef}
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          >
            <span className="text-gray-900 dark:text-white">Junior</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-mono">{'{Full Stack}'}</span>
            <br />
            <span className="text-gray-900 dark:text-white">
              <ReactTyped
                strings={[
                  'Web Developer',
                  'Frontend Developer', 
                  'Backend Developer',
                  'Full Stack Developer'
                ]}
                typeSpeed={80}
                backSpeed={50}
                backDelay={2000}
                loop
                showCursor={true}
                cursorChar="_"
              />
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="relative">
            <div className="font-mono text-xs sm:text-sm text-gray-400 mb-2 select-none">&lt;p&gt;</div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed pl-4 border-l-2 border-blue-200 dark:border-blue-800 ml-1">
              With expertise in cutting-edge technologies such as 
              <span className="text-blue-600 dark:text-blue-400 font-mono font-semibold"> NodeJS</span>,
              <span className="text-purple-600 dark:text-purple-400 font-mono font-semibold"> ReactJS</span>,
              <span className="text-indigo-600 dark:text-indigo-400 font-mono font-semibold"> NextJS</span>, and
              <span className="text-violet-600 dark:text-violet-400 font-mono font-semibold"> PHP</span>...
              I deliver web solutions that are both innovative and robust.
            </p>
            <div className="font-mono text-xs sm:text-sm text-gray-400 mt-2 select-none">&lt;/p&gt;</div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
            {/* Icons with hover lift */}
            {['fa-node-js', 'fa-js-square', 'fa-js-square', 'fa-react'].map((icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-blue-400 group-hover:scale-110 transition-transform cursor-default">
                  {i === 2 ? (
                    // Custom Next.js icon using text
                    <span className="text-xl font-bold">N</span>
                  ) : (
                    <i className={`fa-brands ${icon} text-3xl ${icon.includes('react') ? 'animate-spin-slow' : ''}`}></i>
                  )}
                </div>
              </motion.div>
            ))}
            <span className="text-gray-500 dark:text-gray-400 text-sm font-mono ml-2">... and more</span>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-6">
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-full font-medium transition-colors shadow-lg shadow-primary/25"
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Talk
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;