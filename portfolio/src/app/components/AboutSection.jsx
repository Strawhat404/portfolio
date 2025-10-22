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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 gap-4"
      >
        {[
          "Full Stack Development", "Django", "Node.js", "Next.js", 
          "Vue.js", "React", "Tailwind CSS", "Docker", 
          "Kubernetes", "SEO", "Python", "JavaScript"
        ].map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="glass rounded-lg p-3 text-center transition-all duration-300 group hover:border-yellow-500/50 hover:shadow-elegant border border-gray-700/30"
          >
            <span className="text-gray-300 group-hover:text-yellow-500 transition-colors duration-300 font-medium">
              {skill}
            </span>
          </motion.div>
        ))}
      </motion.div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        {[
          {
            institution: "Arbaminch University & Mekelle University",
            degree: "Software Engineering",
            type: "Bachelor's Degree"
          },
          {
            institution: "Zsecurity",
            degree: "Ethical Hacking and CyberSecurity",
            type: "Certification"
          },
          {
            institution: "Hedera Hashgraph",
            degree: "Development",
            type: "Certification"
          },
          {
            institution: "MeliaCred",
            degree: "AI Mastery",
            type: "Certification"
          },
          {
            institution: "Awaki",
            degree: "Digital Marketing and Social Media Algorithms",
            type: "Certification"
          },
          {
            institution: "2025 Art School",
            degree: "Photography and PhotoEditing",
            type: "Upcoming"
          }
        ].map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="glass rounded-lg p-4 transition-all duration-300 group hover:border-yellow-500/50 hover:shadow-elegant border border-gray-700/30"
          >
            <div className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 group-hover:shadow-elegant transition-all duration-300"></div>
              <div>
                <h4 className="text-white font-semibold group-hover:text-yellow-500 transition-colors duration-300">
                  {edu.degree}
                </h4>
                <p className="text-gray-300 text-sm">{edu.institution}</p>
                <span className="inline-block px-2 py-1 mt-1 text-xs rounded-full glass border border-yellow-500/30 text-yellow-500 group-hover:border-yellow-500 group-hover:text-yellow-400 transition-all duration-300">
                  {edu.type}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        {[
          {
            name: "MeliaCred AI Mastery",
            status: "Completed",
            color: "neon-green"
          },
          {
            name: "CASE Innovator of 2024, Arbaminch Ethiopia",
            status: "Award",
            color: "neon-blue"
          },
          {
            name: "ICDFA Cybersecurity and Forensics",
            status: "Coming Soon",
            color: "neon-purple"
          },
          {
            name: "Hedera Hashgraph Developer",
            status: "Completed",
            color: "neon-green"
          },
          {
            name: "First ever Ethiopian NID Hackathon Finalist",
            status: "Achievement",
            color: "neon-pink"
          },
          {
            name: "Awaki Digital Marketing and Social Media Algorithms",
            status: "Completed",
            color: "neon-green"
          },
          {
            name: "10Academy AI mastery",
            status: "Coming Soon",
            color: "neon-purple"
          }
        ].map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="glass rounded-lg p-4 transition-all duration-300 group hover:border-yellow-500/50 hover:shadow-elegant border border-gray-700/30"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  cert.color === 'neon-green' ? 'bg-yellow-400' :
                  cert.color === 'neon-blue' ? 'bg-yellow-500' :
                  cert.color === 'neon-purple' ? 'bg-yellow-600' :
                  cert.color === 'neon-pink' ? 'bg-yellow-700' : 'bg-yellow-500'
                }`}></div>
                <span className="text-white font-medium group-hover:text-yellow-500 transition-colors duration-300">
                  {cert.name}
                </span>
              </div>
              <span className={`px-3 py-1 text-xs rounded-full glass transition-all duration-300 ${
                cert.color === 'neon-green' ? 'border-yellow-400/30 text-yellow-400 group-hover:border-yellow-400' :
                cert.color === 'neon-blue' ? 'border-yellow-500/30 text-yellow-500 group-hover:border-yellow-500' :
                cert.color === 'neon-purple' ? 'border-yellow-600/30 text-yellow-600 group-hover:border-yellow-600' :
                'border-yellow-700/30 text-yellow-700 group-hover:border-yellow-700'
              }`}>
                {cert.status}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
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

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
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

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl font-bold text-white mb-4 gradient-text"
          >
            About Me
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-300 text-base lg:text-lg leading-relaxed mb-4"
          >
            I'm an innovative software engineer with a deep interest in leveraging technology to solve real world problems. My work is centered around creating impactful digital solutions.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8"
          >
            I am driven by a desire to share knowledge, empower others, and create meaningful change through technology and finance. I'm always looking for opportunities to collaborate, innovate, and push the boundaries of what's possible in both technology and leads.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-row justify-start mb-8 space-x-2"
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
            transition={{ duration: 0.6, delay: 1.2 }}
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
      </div>
    </section>
  );
};

export default AboutSection;
