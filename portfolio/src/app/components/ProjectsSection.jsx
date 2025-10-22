"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Agriconnect Website",
    description: "A system that connects farmers,merchants,logistics and other services like guide,loan packages and such for farmers",
    image: "/images/projects/agriconnect.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://agribuyer.vercel.app/",
    tech: ["React", "Node.js", "MongoDB"],
    color: "neon-blue"
  },
  {
    id: 2,
    title: "Real states Website",
    description: "A website for real states to show case their buildings and for retailers to buy houses",
    image: "/images/projects/realstates.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "http://josephrealestates.pages.dev",
    tech: ["Vue.js", "Firebase", "CSS3"],
    color: "neon-purple"
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "An ecommerce app for modern shopping",
    image: "/images/projects/E-commerce.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    color: "neon-green"
  },
  {
    id: 4,
    title: "python Word Dictionary Application",
    description: "An English dictionary that gives definitions of any English word. made in love with python",
    image: "/images/projects/Python-word-dictionary.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/P1R47E/python-English-word-Dictionary",
    previewUrl: "/",
    tech: ["Python", "Tkinter", "API"],
    color: "neon-pink"
  },
  {
    id: 5,
    title: "Good grade system",
    description: "Web based learning management system using Angular. Project while i was an Intern at creavers p.l.c",
    image: "/images/projects/lms.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/P1R47E/Good_Grade_System",
    previewUrl: "https://lms.goodgradestudent.com/",
    tech: ["Angular", "TypeScript", "Bootstrap"],
    color: "neon-blue"
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "A roadmap for full stackers",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tech: ["React", "D3.js", "Markdown"],
    color: "neon-purple"
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0, rotateX: -15 },
    animate: { y: 0, opacity: 1, rotateX: 0 },
  };

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{backgroundColor: 'rgba(255, 193, 7, 0.05)'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{backgroundColor: 'rgba(245, 158, 11, 0.05)', animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl animate-pulse-slow" style={{backgroundColor: 'rgba(234, 179, 8, 0.05)', animationDelay: '4s'}}></div>
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 gradient-text"
      >
        My Projects
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-white flex flex-row justify-center items-center gap-2 py-6 mb-8"
      >
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
      </motion.div>

      <motion.ul 
        ref={ref} 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        style={{ perspective: "1000px" }}
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
            style={{ transformStyle: "preserve-3d" }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tech={project.tech}
              color={project.color}
            />
          </motion.li>
        ))}
      </motion.ul>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        {['React', 'Vue', 'Python', 'Node', 'Next', 'Django'].map((tech, i) => (
          <motion.div
            key={tech}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            className="absolute text-yellow-500/10 text-2xl font-bold"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
