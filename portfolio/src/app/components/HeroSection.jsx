"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-20 relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{backgroundColor: 'rgba(212, 175, 55, 0.05)'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{backgroundColor: 'rgba(184, 115, 51, 0.05)', animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-gray-400 text-lg font-light tracking-widest uppercase">
                Hello, My Name Is
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white mb-8 text-6xl sm:text-7xl lg:text-8xl font-light leading-tight"
            >
              <span className="block font-thin">Yoseph</span>
              <span className="block font-medium">Tesfaye</span>
            </motion.h1>

            {/* Role description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mr-6"></div>
                <span className="text-gray-300 text-xl font-light">
                  A Creative Developer & Full Stack Engineer
                </span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                I hold a bachelor's degree in Software Engineering from the University of Arbaminch. 
                Building elegant solutions that bridge creativity and technology.
              </p>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <Link
                href="/#contact"
                className="group relative px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-medium transition-all duration-300 hover-lift"
              >
                <span className="relative z-10">Let's Connect</span>
              </Link>
              
              <a
                href="/Professional_Cv.pdf"
                download="Yoseph_Tesfaye_Cv.pdf"
                className="group relative px-10 py-4 glass border border-gray-600 hover:border-yellow-500 text-gray-300 hover:text-yellow-500 transition-all duration-300 hover-lift"
              >
                <span className="relative z-10">Download CV</span>
              </a>
            </motion.div>

            {/* Tech stack indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-16 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {['React', 'Next.js', 'Django', 'Python', 'Docker', 'Kubernetes'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  className="px-4 py-2 glass text-sm text-gray-300 border border-gray-600 hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Elegant frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-yellow-600/20 rounded-full blur-2xl"></div>
              
              {/* Main image container */}
              <div className="relative glass-strong rounded-full p-3 overflow-hidden group">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/images/cvEdited.png"
                    alt="Yoseph Tesfaye"
                    className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full transition-transform duration-700 group-hover:scale-105"
                    width={400}
                    height={400}
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-6 h-6 rounded-full border border-yellow-500/30"
                style={{backgroundColor: 'rgba(255, 193, 7, 0.1)'}}
              ></motion.div>
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-4 h-4 rounded-full border border-yellow-600/30"
                style={{backgroundColor: 'rgba(255, 193, 7, 0.1)'}}
              ></motion.div>
              <motion.div
                animate={{ y: [-5, 10, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -left-6 w-3 h-3 rounded-full border border-yellow-400/30"
                style={{backgroundColor: 'rgba(255, 193, 7, 0.1)'}}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
