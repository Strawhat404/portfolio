"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const projectsData = [
  {
    id: 1,
    title: "Emawa Shopping",
    description: "A comprehensive e-commerce platform providing modern shopping experience with advanced features and seamless user interface",
    image: "/images/projects/emawa.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://emawas.com",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "neon-blue"
  },
  {
    id: 2,
    title: "Beacon Proximity Device",
    description: "Advanced proximity detection system with admin dashboard for managing beacon devices and monitoring real-time location data",
    image: "/images/projects/beacon.png",
    tag: ["All", "Web", "IoT"],
    gitUrl: "/",
    previewUrl: "https://beacon-admin-zeta.vercel.app/login",
    tech: ["Next.js", "TypeScript", "IoT", "Real-time"],
    color: "neon-purple"
  },
  {
    id: 3,
    title: "Sheba Software",
    description: "Professional software development company website showcasing services, portfolio, and client solutions with modern design and functionality",
    image: "/images/projects/sheba.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://shebasoftware.vercel.app/",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    color: "neon-green"
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setCurrentIndex(0);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.section 
      id="projects" 
      ref={ref}
      className="py-20 relative overflow-hidden min-h-screen flex flex-col justify-center"
      style={{ opacity }}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(255,193,7,0.1) 0%, rgba(255,193,7,0.05) 50%, transparent 100%)",
            x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
            y: useTransform(scrollYProgress, [0, 1], [0, -200]),
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute right-0 bottom-0 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, rgba(245,158,11,0.03) 50%, transparent 100%)",
            x: useTransform(scrollYProgress, [0, 1], [100, -100]),
            y: useTransform(scrollYProgress, [0, 1], [0, 200]),
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Interactive particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: mousePosition.x * 0.02 * (i % 3 + 1),
              y: mousePosition.y * 0.02 * (i % 3 + 1),
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-light text-black dark:text-white mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            style={{
              background: "linear-gradient(90deg, #ffffff, #fbbf24, #f59e0b, #ffffff)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Featured Work
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-black dark:text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Crafting digital experiences that blend innovation with purpose
          </motion.p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center items-center gap-4 mb-16"
        >
          {["All", "Web", "Python"].map((filterTag) => (
            <motion.button
              key={filterTag}
              variants={itemVariants}
              onClick={() => handleTagChange(filterTag)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                tag === filterTag
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-lg shadow-yellow-500/25"
                  : "glass border border-black dark:border-gray-600 text-black dark:text-gray-300 hover:border-yellow-500 hover:text-yellow-500"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {filterTag}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Featured Project Display */}
          <div className="mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl mx-auto"
              >
                <ProjectCard
                  {...filteredProjects[currentIndex]}
                  featured={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-8 mb-12">
            <motion.button
              onClick={prevProject}
              className="w-12 h-12 rounded-full glass border border-gray-600 hover:border-yellow-500 flex items-center justify-center transition-all duration-300"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 193, 7, 0.1)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeftIcon className="w-6 h-6 text-black dark:text-gray-300 hover:text-yellow-500" />
            </motion.button>

            {/* Project Indicators */}
            <div className="flex gap-3">
              {filteredProjects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-yellow-500 shadow-lg shadow-yellow-500/50"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextProject}
              className="w-12 h-12 rounded-full glass border border-gray-600 hover:border-yellow-500 flex items-center justify-center transition-all duration-300"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 193, 7, 0.1)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRightIcon className="w-6 h-6 text-black dark:text-gray-300 hover:text-yellow-500" />
            </motion.button>
          </div>

          {/* Project Grid Preview */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`relative cursor-pointer group ${
                  index === currentIndex ? "ring-2 ring-yellow-500 ring-opacity-50" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="aspect-video rounded-lg overflow-hidden glass border border-gray-700/30 group-hover:border-yellow-500/50 transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-black dark:text-white text-sm font-medium truncate">{project.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['React', 'Vue', 'Python', 'Node', 'Next', 'Django'].map((tech, i) => (
          <motion.div
            key={tech}
            className="absolute text-yellow-500/5 text-4xl font-bold select-none"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
