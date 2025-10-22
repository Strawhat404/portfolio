import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(name)}
      className={`relative px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
        isSelected
          ? 'glass-strong border border-yellow-500 text-yellow-500 shadow-elegant'
          : 'glass border border-gray-600/30 text-gray-300 hover:border-yellow-500 hover:text-yellow-500'
      }`}
    >
      <span className="relative z-10">{name}</span>
      
      {/* Active indicator */}
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-500 rounded-full shadow-elegant"
        />
      )}
      
      {/* Hover effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </motion.button>
  );
};

export default ProjectTag;
