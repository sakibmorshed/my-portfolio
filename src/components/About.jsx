import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      ".about-text p",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%",
        },
      }
    );

    gsap.to(".philosophy-card", {
      y: 0,
      opacity: 1,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".philosophy-card",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="py-24 px-6 relative" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 flex flex-col gap-6 sticky top-32"
          >
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-[2px] bg-primary group-hover:w-20 transition-all duration-300"></div>
              <span className="font-mono text-primary text-lg font-bold">01.</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
            </div>

            <div className="hidden lg:block philosophy-card translate-y-20 opacity-0">
              <div className="w-full aspect-square rounded-2xl bg-surface-dark/5 dark:bg-surface-light/5 border border-gray-200 dark:border-gray-800 p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  <i className="fa-solid fa-code text-6xl text-primary/20"></i>
                </div>
                <p className="font-mono text-sm text-gray-500 mb-4">// My Philosophy</p>
                <p className="text-xl font-medium text-gray-800 dark:text-gray-200 italic">"Good code is its own best documentation."</p>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-2/3 space-y-8 about-text">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                I am a Computer Science and Engineering (CSE) student passionate about coding and building impactful digital solutions. I specialize in full-stack development, with expertise in the MERN stack and Next.js, alongside traditional technologies like Bootstrap , JQuery , PHP and MySQL. <br/>


              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mt-4">
                Fast-forward to today and I've had the privilege of building website an <span className="text-primary font-medium">UAE VISA agency </span>and a <span className="text-primary font-medium">start-up</span>. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
              <br/>
              <br/>
             <span className='text-primary font-medium'><b> Fast learner • Problem solver • Always curious • Driven by consistency and growth</b></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;