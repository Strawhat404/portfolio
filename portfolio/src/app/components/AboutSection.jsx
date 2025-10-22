"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, AnimatePresence } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {[
          "Full Stack Development",
          "Django",
          "Node.js",
          "Next.js",
          "Vue.js",
          "React",
          "Tailwind CSS",
          "Docker",
          "Kubernetes",
          "SEO",
          "Python",
          "JavaScript"
        ].map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -3 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer group"
          >
            <p className="text-gray-300 text-sm font-medium group-hover:text-yellow-500 transition-colors duration-300 text-center">
              {skill}
            </p>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          "Software Engineering, Arbaminch University & Mekelle University",
          "Zsecurity Ethical Hacking and CyberSecurity",
          "Hedera Hashgraph Development",
          "MeliaCred AI Mastery",
          "Awaki Digital Marketing and Social Media Algorithms",
          "2025 Art School in Photography and PhotoEditing"
        ].map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -3 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer group"
          >
            <p className="text-gray-300 text-sm group-hover:text-yellow-500 transition-colors duration-300">
              {edu}
            </p>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          "MeliaCred AI Mastery",
          "CASE Innovator of 2024, Arbaminch Ethiopia",
          "ICDFA Cybersecurity and Forensics..coming soon",
          "Hedera Hashgraph Developer",
          "First ever Ethiopian NID Hackathon Finalist",
          "Awaki Digital Marketing and Social Media Algorithms",
          "10Academy AI mastery ..coming soon"
        ].map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -3 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer group"
          >
            <p className="text-gray-300 text-sm group-hover:text-yellow-500 transition-colors duration-300">
              {cert}
            </p>
          </motion.div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-16 relative overflow-hidden" id="about">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="py-8 px-4 sm:py-16 xl:px-16 relative z-10">
        {/* Skills, Education, Certifications Card - TOP */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-2xl p-8 mb-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-row justify-center mb-8 space-x-2"
          >
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="min-h-[300px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
            {TAB_DATA.find((t) => t.id === tab).content}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* About Me Card - BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-strong rounded-2xl p-8"
        >
          <div className="md:grid md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              {/* Holographic image frame */}
              <div className="relative glass-strong rounded-2xl p-4 overflow-hidden group">
                <Image 
                  src="/images/hero.jpg" 
                  width={500} 
                  height={300}
                  className="rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/20 via-transparent to-neon-purple/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-neon-blue rounded-full shadow-neon"
                ></motion.div>
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-neon-purple rounded-full shadow-neon-purple"
                ></motion.div>
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 md:mt-0 text-left flex flex-col"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-4xl font-bold text-white mb-4 gradient-text"
              >
                About Me
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-gray-300 text-base lg:text-lg leading-relaxed mb-4"
              >
                I'm an innovative software engineer with a deep interest in leveraging technology to solve real world problems. My work is centered around creating impactful digital solutions.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-gray-300 text-base lg:text-lg leading-relaxed"
              >
                I am driven by a desire to share knowledge, empower others, and create meaningful change through technology and finance. I'm always looking for opportunities to collaborate, innovate, and push the boundaries of what's possible in both technology and leads.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
