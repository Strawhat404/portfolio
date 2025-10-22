import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, tech = [], color = "neon-blue" }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      {/* 3D Card Container */}
      <div className="relative glass rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:shadow-elegant group-hover:border-yellow-500/40 border border-gray-700/30">
        {/* Image Section */}
        <div className="relative h-52 md:h-72 overflow-hidden">
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Hover Actions */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={gitUrl}
                  className="w-14 h-14 rounded-full glass border-2 border-yellow-500/40 hover:border-yellow-500 flex items-center justify-center transition-all duration-300 hover:shadow-elegant"
                >
                  <CodeBracketIcon className="h-7 w-7 text-yellow-500 group-hover:text-white transition-colors duration-300" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={previewUrl}
                  className="w-14 h-14 rounded-full glass border-2 border-yellow-500/40 hover:border-yellow-500 flex items-center justify-center transition-all duration-300 hover:shadow-elegant"
                >
                  <EyeIcon className="h-7 w-7 text-yellow-500 group-hover:text-white transition-colors duration-300" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Tech Stack Badge */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-wrap gap-1">
              {tech.slice(0, 2).map((techItem, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full glass border border-yellow-500/30 text-yellow-500"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <motion.h5
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300"
          >
            {title}
          </motion.h5>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-gray-300 text-sm leading-relaxed mb-4"
          >
            {description}
          </motion.p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {tech.map((techItem, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="px-3 py-1 text-xs rounded-full glass border border-gray-700/30 text-gray-300 hover:border-yellow-500 hover:text-yellow-500 hover:shadow-elegant transition-all duration-300"
              >
                {techItem}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
