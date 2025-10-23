import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon, InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, tech = [], color = "neon-blue", featured = false }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  if (featured) {
    return (
      <motion.div
        className="group relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Featured Card Layout */}
        <div className="relative glass rounded-3xl overflow-hidden border border-gray-700/30 group-hover:border-yellow-500/50 transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 md:h-96 overflow-hidden">
              <Image
                src={imgUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
              
              {/* Floating Action Buttons */}
              <div className="absolute top-6 right-6 flex gap-3">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href={gitUrl}
                    className="w-12 h-12 rounded-full glass border border-yellow-500/40 hover:border-yellow-500 flex items-center justify-center backdrop-blur-md transition-all duration-300"
                  >
                    <CodeBracketIcon className="h-5 w-5 text-yellow-500" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href={previewUrl}
                    className="w-12 h-12 rounded-full glass border border-yellow-500/40 hover:border-yellow-500 flex items-center justify-center backdrop-blur-md transition-all duration-300"
                  >
                    <EyeIcon className="h-5 w-5 text-yellow-500" />
                  </Link>
                </motion.div>
                <motion.button
                  onClick={toggleDescription}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full glass border border-yellow-500/40 hover:border-yellow-500 flex items-center justify-center backdrop-blur-md transition-all duration-300"
                >
                  <InformationCircleIcon className="h-5 w-5 text-yellow-500" />
                </motion.button>
              </div>

                  {/* See Description Button for Featured */}
              <motion.button
                onClick={toggleDescription}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-yellow-500/30 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300">
                  <InformationCircleIcon className="w-5 h-5 text-yellow-500" />
                  <span className="text-yellow-500 font-medium">
                    {showDescription ? "Hide Description" : "See Full Description"}
                  </span>
                </div>
              </motion.button>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl md:text-4xl font-light text-black dark:text-white mb-6 group-hover:text-yellow-500 transition-colors duration-300">
                  {title}
                </h3>
                
                <p className="text-black dark:text-gray-300 text-lg leading-relaxed mb-8">
                  {description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {tech.map((techItem, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="px-4 py-2 rounded-full glass border border-black dark:border-gray-600/50 text-black dark:text-gray-300 hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {techItem}
                    </motion.span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={previewUrl}
                      className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-medium rounded-full transition-all duration-300"
                    >
                      View Live
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={gitUrl}
                      className="px-8 py-3 glass border border-black dark:border-gray-600 hover:border-yellow-500 text-black dark:text-gray-300 hover:text-yellow-500 rounded-full transition-all duration-300"
                    >
                      View Code
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Dropdown Description for Featured */}
          <AnimatePresence>
            {showDescription && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="overflow-hidden border-t border-gray-700/30"
              >
                <div className="p-8 glass bg-black/20 backdrop-blur-sm">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Extended Description */}
                    <div className="space-y-4">
                      <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="text-black dark:text-white font-medium text-lg mb-3"
                      >
                        Project Details
                      </motion.h4>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="space-y-3"
                      >
                        <div>
                          <h5 className="text-black dark:text-gray-300 font-medium text-sm mb-2">Key Features:</h5>
                          <ul className="text-black dark:text-gray-400 space-y-1 text-sm">
                            <li>• Modern, responsive design with mobile-first approach</li>
                            <li>• Optimized performance and fast loading times</li>
                            <li>• Cross-platform compatibility across all devices</li>
                            <li>• User-friendly interface with intuitive navigation</li>
                            <li>• Scalable architecture for future enhancements</li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-black dark:text-gray-300 font-medium text-sm mb-2">Development Approach:</h5>
                          <p className="text-black dark:text-gray-400 text-sm leading-relaxed">
                            Built using modern development practices with a focus on clean code, 
                            maintainability, and performance optimization. Implemented with 
                            accessibility standards and SEO best practices.
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Technologies & Actions */}
                    <div className="space-y-4">
                      <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="text-black dark:text-white font-medium text-lg mb-3"
                      >
                        Technologies & Tools
                      </motion.h4>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="flex flex-wrap gap-2 mb-6"
                      >
                        {tech.map((techItem, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.5 + index * 0.05 }}
                            className="px-3 py-1 rounded-full glass border border-black dark:border-gray-600/50 text-black dark:text-gray-300 text-sm hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300"
                          >
                            {techItem}
                          </motion.span>
                        ))}
                      </motion.div>

                      {/* Enhanced Action Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        className="space-y-3"
                      >
                        <Link
                          href={previewUrl}
                          className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-medium rounded-xl transition-all duration-300 text-center block hover:shadow-lg hover:shadow-yellow-500/25"
                        >
                          🚀 View Live Project
                        </Link>
                        <Link
                          href={gitUrl}
                          className="w-full px-6 py-3 glass border border-black dark:border-gray-600 hover:border-yellow-500 text-black dark:text-gray-300 hover:text-yellow-500 rounded-xl transition-all duration-300 text-center block hover:bg-yellow-500/5"
                        >
                          💻 View Source Code
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }

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

              <motion.button
                onClick={toggleDescription}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full glass border-2 border-yellow-500/40 hover:border-yellow-500 flex items-center justify-center transition-all duration-300 hover:shadow-elegant"
              >
                <InformationCircleIcon className="h-7 w-7 text-yellow-500 group-hover:text-white transition-colors duration-300" />
              </motion.button>
            </div>
          </div>

          {/* See Description Button */}
          <motion.button
            onClick={toggleDescription}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <div className="flex items-center gap-2 px-3 py-2 glass rounded-full border border-yellow-500/30 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300">
              <InformationCircleIcon className="w-4 h-4 text-yellow-500" />
              <span className="text-yellow-500 text-sm font-medium">
                {showDescription ? "Hide Description" : "See Description"}
              </span>
            </div>
          </motion.button>

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
            className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300"
          >
            {title}
          </motion.h5>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-black dark:text-gray-300 text-sm leading-relaxed mb-4"
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
                className="px-3 py-1 text-xs rounded-full glass border border-black dark:border-gray-700/30 text-black dark:text-gray-300 hover:border-yellow-500 hover:text-yellow-500 hover:shadow-elegant transition-all duration-300"
              >
                {techItem}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

        {/* Dropdown Description for Regular Cards */}
        <AnimatePresence>
          {showDescription && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden border-t border-gray-700/30"
            >
              <div className="p-6 glass bg-black/20 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="space-y-4"
                >
                  <h4 className="text-black dark:text-white font-medium text-lg mb-3">
                    {title} - Details
                  </h4>

                  <div className="space-y-3">
                    <div>
                      <h5 className="text-black dark:text-gray-300 font-medium text-sm mb-2">Key Features:</h5>
                      <ul className="text-black dark:text-gray-400 text-sm space-y-1">
                        <li>• Responsive design with modern UI/UX</li>
                        <li>• Built with latest technologies and best practices</li>
                        <li>• Optimized for performance and accessibility</li>
                        <li>• Cross-browser compatibility</li>
                        <li>• Clean, maintainable code structure</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-black dark:text-gray-300 font-medium text-sm mb-2">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tech.map((techItem, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.2 + index * 0.05 }}
                            className="px-3 py-1 text-xs rounded-full glass border border-black dark:border-gray-600/50 text-black dark:text-gray-300 hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300"
                          >
                            {techItem}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="flex gap-3 pt-2"
                    >
                      <Link
                        href={previewUrl}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-medium rounded-lg transition-all duration-300 text-center text-sm hover:shadow-lg hover:shadow-yellow-500/25"
                      >
                        🚀 View Live
                      </Link>
                      <Link
                        href={gitUrl}
                        className="flex-1 px-4 py-2 glass border border-black dark:border-gray-600 hover:border-yellow-500 text-black dark:text-gray-300 hover:text-yellow-500 rounded-lg transition-all duration-300 text-center text-sm hover:bg-yellow-500/5"
                      >
                        💻 View Code
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
