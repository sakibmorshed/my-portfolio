import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fa-solid fa-code",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "jQuery", level: 85 }
      ]
    },
    {
      title: "Styling",
      icon: "fa-solid fa-palette",
      skills: [
        { name: "Bootstrap", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Responsive Design", level: 95 },
        { name: "Animation", level: 80 }
      ]
    },
    {
      title: "Backend",
      icon: "fa-solid fa-server",
      skills: [
        { name: "PHP", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 78 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "Database",
      icon: "fa-solid fa-database",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Programming",
      icon: "fa-solid fa-terminal",
      skills: [
        { name: "C Programming", level: 80 }
      ]
    },
    {
      title: "Design",
      icon: "fa-solid fa-pen-nib",
      skills: [
        { name: "Figma", level: 75 },
        { name: "Logo Design", level: 80 }
      ]
    }
  ];

  useEffect(() => {
    // Section title fade-in
    gsap.fromTo(
      ".skills-title",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
        },
      }
    );

    // Cards stagger reveal on scroll
    gsap.utils.toArray(".skill-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });

    // Progress bars animate when in view - using a more reliable approach
    const progressBars = document.querySelectorAll(".progress-fill");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.getAttribute("data-width");
          
          // Animate the progress bar
          gsap.to(bar, {
            width: width + "%",
            duration: 1.4,
            ease: "power3.out",
            delay: 0.2
          });
          
          // Stop observing this element
          observer.unobserve(bar);
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: "0px 0px -10% 0px"
    });

    progressBars.forEach((bar) => {
      observer.observe(bar);
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-24 px-6 relative bg-white/50 dark:bg-[#0a0a0a]" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 skills-title">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Skills & Expertise</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-card"
              whileHover={{ y: -8, transition: { duration: 0.4 } }} // subtle lift on hover
            >
              <Card className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-cyan-500/30 transition-all shadow-sm dark:shadow-lg group">
                <CardHeader className="p-0 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                      <i className={`${category.icon} text-xl`}></i>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="p-0 space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-cyan-600 dark:text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="progress-fill h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                          data-width={skill.level}
                          style={{ width: "0%" }} // initial state for animation
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;