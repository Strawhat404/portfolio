"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";

// Use CountUp for stable, non-overlapping counting animation
const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const achievementsList = [
  {
    metric: "Projects",
    value: "40",
    postfix: "+",
    color: "yellow-500",
    description: "Completed Projects"
  },
  {
    prefix: "~",
    metric: "Participants",
    value: "1000",
    postfix: "+",
    color: "yellow-600",
    description: "Community Members"
  },
  {
    metric: "Awards",
    value: "4",
    color: "yellow-400",
    description: "Recognition Awards"
  },
  {
    metric: "Years",
    value: "3",
    color: "yellow-700",
    description: "Experience"
  },
];

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{backgroundColor: 'rgba(255, 193, 7, 0.05)'}}></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{backgroundColor: 'rgba(245, 158, 11, 0.05)', animationDelay: '1s'}}></div>
      </div>

      <div className="glass-strong rounded-2xl py-12 px-8 flex flex-col sm:flex-row items-center justify-between relative z-10">
        {achievementsList.map((achievement, index) => {
          const digitCount = String(achievement.value).length;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 group"
            >
              {/* Icon/Indicator */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, delay: index * 0.2 }}
                className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 group-hover:shadow-elegant transition-all duration-300 ${
                  achievement.color === 'yellow-500' ? 'bg-yellow-500/20 border-yellow-500/30' :
                  achievement.color === 'yellow-600' ? 'bg-yellow-600/20 border-yellow-600/30' :
                  achievement.color === 'yellow-400' ? 'bg-yellow-400/20 border-yellow-400/30' :
                  'bg-yellow-700/20 border-yellow-700/30'
                }`}
              >
                <div className={`w-8 h-8 rounded-full shadow-elegant ${
                  achievement.color === 'yellow-500' ? 'bg-yellow-500' :
                  achievement.color === 'yellow-600' ? 'bg-yellow-600' :
                  achievement.color === 'yellow-400' ? 'bg-yellow-400' :
                  'bg-yellow-700'
                }`}></div>
              </motion.div>

              {/* Animated Number */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="text-white text-4xl font-bold flex flex-row items-center mb-2"
              >
                {achievement.prefix && (
                  <span className="mr-1 opacity-80">{achievement.prefix}</span>
                )}
                <span
                  className={`inline-flex items-end justify-center h-10 leading-none tabular-nums overflow-hidden font-mono ${
                    achievement.color === 'yellow-500' ? 'text-yellow-500' :
                    achievement.color === 'yellow-600' ? 'text-yellow-600' :
                    achievement.color === 'yellow-400' ? 'text-yellow-400' :
                    'text-yellow-700'
                  }`}
                  style={{ minWidth: `${digitCount + (achievement.postfix ? 0 : 0)}ch` }}
                >
                  {isVisible && (
                    <CountUp
                      end={parseInt(achievement.value)}
                      start={0}
                      duration={1.6}
                      separator="," 
                      preserveValue={false}
                      className="leading-none font-mono tabular-nums"
                    />
                  )}
                </span>
                {achievement.postfix && (
                  <span className="ml-1">{achievement.postfix}</span>
                )}
              </motion.h2>

              {/* Metric Label */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className={`text-lg font-semibold mb-1 ${
                  achievement.color === 'yellow-500' ? 'text-yellow-500' :
                  achievement.color === 'yellow-600' ? 'text-yellow-600' :
                  achievement.color === 'yellow-400' ? 'text-yellow-400' :
                  'text-yellow-700'
                }`}
              >
                {achievement.metric}
              </motion.p>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                className="text-gray-400 text-sm text-center"
              >
                {achievement.description}
              </motion.p>

              {/* Progress Bar */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.1 + 0.9 }}
                className={`w-full h-1 rounded-full mt-3 overflow-hidden ${
                  achievement.color === 'yellow-500' ? 'bg-yellow-500/20' :
                  achievement.color === 'yellow-600' ? 'bg-yellow-600/20' :
                  achievement.color === 'yellow-400' ? 'bg-yellow-400/20' :
                  'bg-yellow-700/20'
                }`}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: index * 0.1 + 1.2 }}
                  className={`h-full rounded-full shadow-elegant ${
                    achievement.color === 'yellow-500' ? 'bg-gradient-to-r from-yellow-500 to-yellow-500/60' :
                    achievement.color === 'yellow-600' ? 'bg-gradient-to-r from-yellow-600 to-yellow-600/60' :
                    achievement.color === 'yellow-400' ? 'bg-gradient-to-r from-yellow-400 to-yellow-400/60' :
                    'bg-gradient-to-r from-yellow-700 to-yellow-700/60'
                  }`}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className={`absolute w-2 h-2 rounded-full ${
              i % 2 === 0 ? 'bg-yellow-500' : 'bg-yellow-600'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AchievementsSection;
