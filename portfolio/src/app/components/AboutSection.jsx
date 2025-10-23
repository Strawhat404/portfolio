"use client";
import React, { useTransition, useState, useRef, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { 
  CodeBracketIcon, 
  AcademicCapIcon, 
  TrophyIcon,
  StarIcon,
  CheckBadgeIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CloudIcon
} from "@heroicons/react/24/outline";

const skillsData = [
  { name: "React", level: 95, category: "Frontend", color: "from-blue-500 to-cyan-500" },
  { name: "Next.js", level: 90, category: "Frontend", color: "from-gray-700 to-gray-900" },
  { name: "Python", level: 88, category: "Backend", color: "from-green-500 to-emerald-500" },
  { name: "Django", level: 85, category: "Backend", color: "from-green-600 to-green-800" },
  { name: "JavaScript", level: 92, category: "Frontend", color: "from-yellow-400 to-orange-500" },
  { name: "TypeScript", level: 80, category: "Frontend", color: "from-blue-600 to-blue-800" },
  { name: "Docker", level: 75, category: "DevOps", color: "from-blue-400 to-blue-600" },
  { name: "Kubernetes", level: 70, category: "DevOps", color: "from-purple-500 to-purple-700" },
  { name: "Cybersecurity", level: 85, category: "Security", color: "from-red-500 to-red-700" },
  { name: "AWS", level: 78, category: "Cloud", color: "from-orange-400 to-orange-600" },
  { name: "Vue.js", level: 82, category: "Frontend", color: "from-green-400 to-green-600" },
  { name: "Tailwind CSS", level: 90, category: "Frontend", color: "from-teal-400 to-teal-600" }
];

const educationData = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "University of Arbaminch & Mekelle University",
    year: "2020 - 2024",
    description: "Specialized in software development, algorithms, system design, and cybersecurity fundamentals",
    icon: AcademicCapIcon,
    status: "Completed",
    color: "from-blue-500 to-purple-600"
  },
  {
    degree: "Ethical Hacking & Cybersecurity",
    institution: "Zsecurity Academy",
    year: "2023",
    description: "Advanced penetration testing, network security, and ethical hacking methodologies",
    icon: ShieldCheckIcon,
    status: "Certified",
    color: "from-red-500 to-pink-600"
  },
  {
    degree: "Hedera Hashgraph Development",
    institution: "Hedera Developer Program",
    year: "2023",
    description: "Distributed ledger technology, smart contracts, and decentralized applications",
    icon: CodeBracketIcon,
    status: "Certified",
    color: "from-purple-500 to-indigo-600"
  },
  {
    degree: "AI Mastery Program",
    institution: "MeliaCred & 10Academy",
    year: "2023 - 2024",
    description: "Machine learning, deep learning, and artificial intelligence applications",
    icon: LightBulbIcon,
    status: "Ongoing",
    color: "from-yellow-500 to-orange-600"
  },
  {
    degree: "Digital Marketing & Social Media",
    institution: "Awaki Academy",
    year: "2024",
    description: "Social media algorithms, digital marketing strategies, and content optimization",
    icon: RocketLaunchIcon,
    status: "Completed",
    color: "from-green-500 to-teal-600"
  },
  {
    degree: "Photography & Photo Editing",
    institution: "Art School",
    year: "2025",
    description: "Professional photography techniques and advanced photo editing skills",
    icon: SparklesIcon,
    status: "Upcoming",
    color: "from-pink-500 to-rose-600"
  }
];

const certificationsData = [
  {
    name: "MeliaCred AI Mastery",
    issuer: "MeliaCred",
    year: "2023",
    status: "Certified",
    icon: LightBulbIcon,
    color: "from-yellow-500 to-orange-500"
  },
  {
    name: "CASE Innovator of 2024",
    issuer: "Arbaminch Ethiopia",
    year: "2024",
    status: "Awarded",
    icon: TrophyIcon,
    color: "from-yellow-400 to-yellow-600"
  },
  {
    name: "Hedera Hashgraph Developer",
    issuer: "Hedera",
    year: "2023",
    status: "Certified",
    icon: CodeBracketIcon,
    color: "from-purple-500 to-indigo-500"
  },
  {
    name: "Ethiopian NID Hackathon Finalist",
    issuer: "National ID Program",
    year: "2024",
    status: "Finalist",
    icon: StarIcon,
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Digital Marketing Specialist",
    issuer: "Awaki Academy",
    year: "2024",
    status: "Certified",
    icon: RocketLaunchIcon,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "ICDFA Cybersecurity & Forensics",
    issuer: "ICDFA",
    year: "2025",
    status: "Coming Soon",
    icon: ShieldCheckIcon,
    color: "from-red-500 to-pink-500"
  },
  {
    name: "10Academy AI Mastery",
    issuer: "10Academy",
    year: "2025",
    status: "Coming Soon",
    icon: LightBulbIcon,
    color: "from-indigo-500 to-purple-500"
  }
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: CodeBracketIcon,
    content: skillsData,
  },
  {
    title: "Education",
    id: "education", 
    icon: AcademicCapIcon,
    content: educationData,
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: TrophyIcon,
    content: certificationsData,
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', updateMousePosition);
      return () => element.removeEventListener('mousemove', updateMousePosition);
    }
  }, []);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <motion.section 
      ref={ref}
      className="py-20 relative overflow-hidden min-h-screen flex items-center" 
      id="about"
      style={{ opacity }}
    >
      {/* Dynamic Interactive Background */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient orbs */}
        <motion.div 
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(255,193,7,0.08) 0%, rgba(255,193,7,0.02) 50%, transparent 100%)",
            left: `${mousePosition.x * 0.05}%`,
            top: `${mousePosition.y * 0.05}%`,
            x: useTransform(scrollYProgress, [0, 1], [-50, 50]),
            y: useTransform(scrollYProgress, [0, 1], [0, -100]),
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
            background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, rgba(245,158,11,0.01) 50%, transparent 100%)",
            right: `${mousePosition.x * 0.03}%`,
            bottom: `${mousePosition.y * 0.03}%`,
            x: useTransform(scrollYProgress, [0, 1], [50, -50]),
            y: useTransform(scrollYProgress, [0, 1], [0, 100]),
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

        {/* Interactive floating elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: mousePosition.x * 0.01 * (i % 4 + 1),
              y: mousePosition.y * 0.01 * (i % 4 + 1),
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          >
            {i % 4 === 0 ? (
              <div className="w-2 h-2 bg-yellow-500/20 rounded-full" />
            ) : i % 4 === 1 ? (
              <div className="w-3 h-3 bg-yellow-400/15 rotate-45 border border-yellow-500/20" />
            ) : i % 4 === 2 ? (
              <div className="w-1 h-8 bg-gradient-to-b from-yellow-500/20 to-transparent" />
            ) : (
              <div className="w-6 h-1 bg-gradient-to-r from-yellow-500/20 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-light text-black dark:text-white mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            style={{
              background: "linear-gradient(90deg, #000000, #fbbf24, #000000)",
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
            About Me
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-black dark:text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Passionate software engineer creating innovative solutions that bridge technology and real-world impact
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-12">
          {/* Personal Description - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-2xl p-8 border border-black dark:border-gray-700/30"
          >
            <h3 className="text-3xl font-semibold text-black dark:text-white mb-6 flex items-center gap-3">
              <SparklesIcon className="w-8 h-8 text-yellow-500" />
              My Journey
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-black dark:text-gray-300 leading-relaxed">
              <div className="space-y-4">
                <p>
                  I'm an innovative software engineer with a deep passion for leveraging technology to solve real-world problems. 
                  My work centers around creating impactful digital solutions that make a difference.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  From cybersecurity to full-stack development, I've built everything from simple applications to complex IoT systems. 
                  I'm driven by curiosity, powered by coffee, and motivated by the endless possibilities of technology.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills, Education, Certifications - Optimized Layout */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Tab Navigation */}
            <div className="flex justify-center">
              <div className="flex glass rounded-2xl p-2 border border-black dark:border-gray-600">
                {TAB_DATA.map((tabData) => (
                  <motion.button
                    key={tabData.id}
                    onClick={() => handleTabChange(tabData.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      tab === tabData.id
                        ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-lg"
                        : "text-black dark:text-gray-300 hover:text-yellow-500"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <tabData.icon className="w-5 h-5" />
                    {tabData.title}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Tab Content - Optimized for Full Width */}
            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                {tab === "skills" && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                  >
                    {skillsData.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="glass rounded-xl p-4 border border-black dark:border-gray-700/30 hover:border-yellow-500/50 transition-all duration-300 group"
                        whileHover={{ y: -3, scale: 1.02 }}
                      >
                        <div className="mb-3">
                          <h4 className="font-semibold text-black dark:text-white group-hover:text-yellow-500 transition-colors duration-300">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-black dark:text-gray-400">{skill.category}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-black dark:text-gray-300">Proficiency</span>
                            <span className="text-xs font-medium text-yellow-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-black/10 dark:bg-gray-700/30 rounded-full h-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: index * 0.05 + 0.3, ease: "easeOut" }}
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {tab === "education" && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                  >
                    {educationData.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass rounded-xl p-6 border border-black dark:border-gray-700/30 hover:border-yellow-500/50 transition-all duration-300 group"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-start gap-4">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-12 h-12 rounded-xl bg-transparent border border-yellow-500/30 p-3 flex items-center justify-center"
                          >
                            <edu.icon className="w-6 h-6 text-yellow-500" />
                          </motion.div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-black dark:text-white group-hover:text-yellow-500 transition-colors duration-300">
                                {edu.degree}
                              </h4>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                edu.status === 'Completed' ? 'bg-green-500/20 text-green-600 border border-green-500/30' :
                                edu.status === 'Certified' ? 'bg-blue-500/20 text-blue-600 border border-blue-500/30' :
                                edu.status === 'Ongoing' ? 'bg-yellow-500/20 text-yellow-600 border border-yellow-500/30' :
                                'bg-gray-500/20 text-gray-600 border border-gray-500/30'
                              }`}>
                                {edu.status}
                              </span>
                            </div>
                            <p className="text-yellow-500 font-medium text-sm mb-1">{edu.institution}</p>
                            <p className="text-xs text-black dark:text-gray-400 mb-2">{edu.year}</p>
                            <p className="text-sm text-black dark:text-gray-300 leading-relaxed">{edu.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {tab === "certifications" && (
                  <motion.div
                    key="certifications"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {certificationsData.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="glass rounded-xl p-4 border border-black dark:border-gray-700/30 hover:border-yellow-500/50 transition-all duration-300 group"
                        whileHover={{ y: -2, scale: 1.01 }}
                      >
                        <div className="flex items-center gap-4">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-10 h-10 rounded-lg bg-transparent border border-yellow-500/30 p-2 flex items-center justify-center"
                          >
                            <cert.icon className="w-5 h-5 text-yellow-500" />
                          </motion.div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-black dark:text-white group-hover:text-yellow-500 transition-colors duration-300">
                                {cert.name}
                              </h4>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                cert.status === 'Certified' ? 'bg-green-500/20 text-green-600 border border-green-500/30' :
                                cert.status === 'Awarded' ? 'bg-yellow-500/20 text-yellow-600 border border-yellow-500/30' :
                                cert.status === 'Finalist' ? 'bg-blue-500/20 text-blue-600 border border-blue-500/30' :
                                'bg-gray-500/20 text-gray-600 border border-gray-500/30'
                              }`}>
                                {cert.status}
                              </span>
                            </div>
                            <p className="text-sm text-yellow-500 font-medium">{cert.issuer}</p>
                            <p className="text-xs text-black dark:text-gray-400">{cert.year}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

export default AboutSection;
