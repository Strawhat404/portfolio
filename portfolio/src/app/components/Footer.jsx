"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative glass-strong border-t border-gray-600/30 text-white overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{backgroundColor: 'rgba(255, 193, 7, 0.05)'}}></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{backgroundColor: 'rgba(245, 158, 11, 0.05)', animationDelay: '2s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            className={`absolute w-1 h-1 rounded-full ${
              i % 2 === 0 ? 'bg-yellow-500' : 'bg-yellow-600'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container p-12 flex flex-col md:flex-row justify-between items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 md:mb-0"
        >
          <span className="gradient-text text-2xl font-bold tracking-wider">
            Yoseph
          </span>
          <div className="w-full h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600 mt-2"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center md:text-right"
        >
          <p className="text-gray-400 mb-2">
            Building the future, one line of code at a time
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Yoseph Tesfaye. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
    </motion.footer>
  );
};

export default Footer;
