import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <motion.button
      onClick={selectTab}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <div className={`px-6 py-3 rounded-lg transition-all duration-300 ${
        active 
          ? 'glass-strong border border-yellow-500 shadow-elegant' 
          : 'glass border border-gray-600/30 hover:border-yellow-500'
      }`}>
        <p className={`font-semibold transition-colors duration-300 ${
          active 
            ? 'text-yellow-500' 
            : 'text-gray-300 group-hover:text-yellow-500'
        }`}>
          {children}
        </p>
        
        {/* Active indicator */}
        {active && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-500 rounded-full shadow-elegant"
          />
        )}
        
        {/* Hover effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.button>
  );
};

export default TabButton;
