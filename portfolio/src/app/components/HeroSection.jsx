"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Cursor tracking
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Scroll-based transforms
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [cursorX, cursorY]);

  return (
    <section className="min-h-screen flex items-center pt-16 pb-20 relative overflow-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 bg-yellow-500/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Interactive background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            backgroundColor: 'rgba(212, 175, 55, 0.05)',
            x: useTransform(scrollY, [0, 1000], [0, -100]),
            y: useTransform(scrollY, [0, 1000], [0, 50]),
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            backgroundColor: 'rgba(184, 115, 51, 0.05)',
            x: useTransform(scrollY, [0, 1000], [0, 100]),
            y: useTransform(scrollY, [0, 1000], [0, -50]),
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 3
          }}
        />
        
        {/* Floating particles that follow cursor */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-500/20 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 8}%`,
            }}
            animate={{
              x: mousePosition.x * 0.01 * (i + 1),
              y: mousePosition.y * 0.01 * (i + 1),
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-6"
        style={{ y, opacity, scale }}
      >
        <div className="flex justify-center items-center">
          {/* Main Content - Full Width */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-7xl w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
              whileHover={{ y: -5 }}
            >
              <span className="text-black dark:text-gray-400 text-sm font-light tracking-widest uppercase drop-shadow-lg">
                Hello, My Name Is{" "}
                <motion.span 
                  className="font-bold text-yellow-500 text-2xl inline-block"
                  whileHover={{ 
                    scale: 1.1,
                    textShadow: "0 0 20px rgba(255, 193, 7, 0.8)",
                    transition: { duration: 0.3 }
                  }}
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(255, 193, 7, 0.3)",
                      "0 0 20px rgba(255, 193, 7, 0.6)",
                      "0 0 10px rgba(255, 193, 7, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Yoseph Tesfaye
                </motion.span>
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-black dark:text-white mb-8 text-2xl sm:text-3xl lg:text-4xl font-light leading-tight"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.span 
                className="block font-medium"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                className="bg-gradient-to-r from-black via-yellow-500 to-black dark:from-white dark:via-yellow-400 dark:to-white bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% 100%",
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                A Creative Developer, Cybersecurity Analyst & Full Stack Engineer
              </motion.span>
            </motion.h1>

            {/* Role description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <p className="text-black dark:text-gray-400 text-xl leading-relaxed max-w-6xl mx-auto mb-6">
                With 3+ years of experience in full-stack development, I've built everything from simple snake games and websites to massive IoT solutions and recognized, award-winning systems. From guarding the nation in cybersecurity to crafting state-of-the-art systems.
              </p>
              <p className="text-black dark:text-gray-300 text-lg italic max-w-4xl mx-auto">
                "Code with purpose, design with soul, and always leave a little magic behind."
              </p>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255, 193, 7, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/#contact"
                  className="group relative px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-medium transition-all duration-300 hover-lift block"
                >
                  <motion.span 
                    className="relative z-10"
                    whileHover={{ x: 5 }}
                  >
                    Let's Connect
                  </motion.span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255, 193, 7, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/Professional_Cv.pdf"
                  download="Yoseph_Tesfaye_Cv.pdf"
                  className="group relative px-10 py-4 glass border border-black dark:border-gray-600 hover:border-yellow-500 text-black dark:text-gray-300 hover:text-yellow-500 transition-all duration-300 hover-lift block"
                >
                  <motion.span 
                    className="relative z-10"
                    whileHover={{ x: 5 }}
                  >
                    Download CV
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>

            {/* Tech stack indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-16 flex flex-wrap gap-4 justify-center"
            >
              {['React', 'Next.js', 'Django', 'Python', 'Docker', 'Kubernetes'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  className="px-4 py-2 glass text-sm text-black dark:text-gray-300 border border-black dark:border-gray-600 hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300 cursor-pointer"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    borderColor: "#fbbf24",
                    color: "#fbbf24",
                    boxShadow: "0 5px 15px rgba(255, 193, 7, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
