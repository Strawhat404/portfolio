"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setEmailSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
      } else {
        setError(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-neon-blue' : i % 3 === 1 ? 'bg-neon-purple' : 'bg-neon-pink'
            }`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl font-bold text-white my-2 gradient-text"
        >
          Let&apos;s Connect
        </motion.h5>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-300 mb-6 max-w-md leading-relaxed"
        >
          I am actively seeking new opportunities and always open to connecting. Whether you have a question, a potential collaboration, or simply want to say hello, feel free to reach out. I'll do my best to respond promptly and look forward to engaging with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="socials flex flex-row gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="https://github.com/P1R47E" className="group">
              <div className="glass rounded-lg p-3 border border-gray-600/30 hover:border-yellow-500 hover:shadow-elegant transition-all duration-300">
                <Image src={GithubIcon} alt="Github Icon" className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="https://www.linkedin.com/in/yoseph-tesfaye-2656b5319/" className="group">
              <div className="glass rounded-lg p-3 border border-gray-600/30 hover:border-yellow-500 hover:shadow-elegant transition-all duration-300">
                <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10"
      >
        {emailSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-strong rounded-2xl p-8 text-center border border-yellow-500/30"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            </motion.div>
            <h3 className="text-yellow-500 text-xl font-bold mb-2">Message Sent!</h3>
            <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="relative group">
              <label
                htmlFor="name"
                className="text-yellow-500 block mb-2 text-sm font-semibold"
              >
                Your Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 glass rounded-lg border border-gray-600/30 focus:border-yellow-500 focus:shadow-elegant transition-all duration-300 text-white placeholder-gray-400 bg-transparent"
                placeholder="Your name"
              />
            </div>

            <div className="relative group">
              <label
                htmlFor="email"
                className="text-yellow-500 block mb-2 text-sm font-semibold"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 glass rounded-lg border border-gray-600/30 focus:border-yellow-500 focus:shadow-elegant transition-all duration-300 text-white placeholder-gray-400 bg-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="relative group">
              <label
                htmlFor="subject"
                className="text-yellow-500 block mb-2 text-sm font-semibold"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 glass rounded-lg border border-gray-600/30 focus:border-yellow-500 focus:shadow-elegant transition-all duration-300 text-white placeholder-gray-400 bg-transparent"
                placeholder="Let's discuss..."
              />
            </div>

            <div className="relative group">
              <label
                htmlFor="message"
                className="text-yellow-500 block mb-2 text-sm font-semibold"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 glass rounded-lg border border-gray-600/30 focus:border-yellow-500 focus:shadow-elegant transition-all duration-300 text-white placeholder-gray-400 bg-transparent resize-none"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>

            {/* Honeypot field (hidden) */}
            <input
              name="honeypot"
              type="text"
              value={formData.honeypot}
              onChange={handleInputChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Error message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm bg-red-400/10 border border-red-400/30 rounded-lg p-3"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className={`relative px-8 py-4 rounded-lg font-semibold transition-all duration-300 group overflow-hidden ${
                isLoading 
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black hover:shadow-elegant'
              }`}
            >
              <span className="relative z-10">
                {isLoading ? "Sending..." : "Send Message"}
              </span>
              {!isLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </motion.button>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
};

export default EmailSection;
