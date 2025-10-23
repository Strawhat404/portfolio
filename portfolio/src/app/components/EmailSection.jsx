"use client";
import React, { useState, useEffect, useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { 
  PaperAirplaneIcon, 
  SparklesIcon, 
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: ""
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', updateMousePosition);
      return () => element.removeEventListener('mousemove', updateMousePosition);
    }
  }, []);

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
    <motion.section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
      style={{ opacity }}
    >
      {/* Dynamic Interactive Background */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient orbs */}
        <motion.div 
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(255,193,7,0.15) 0%, rgba(255,193,7,0.05) 50%, transparent 100%)",
            left: `${mousePosition.x * 0.1}%`,
            top: `${mousePosition.y * 0.1}%`,
            x: useTransform(scrollYProgress, [0, 1], [-50, 50]),
            y: useTransform(scrollYProgress, [0, 1], [0, -100]),
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute right-0 bottom-0 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, rgba(245,158,11,0.04) 50%, transparent 100%)",
            right: `${mousePosition.x * 0.05}%`,
            bottom: `${mousePosition.y * 0.05}%`,
            x: useTransform(scrollYProgress, [0, 1], [50, -50]),
            y: useTransform(scrollYProgress, [0, 1], [0, 100]),
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Interactive mesh gradient */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,193,7,0.1) 0%, transparent 50%)`
          }}
        />

        {/* Floating geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: mousePosition.x * 0.02 * (i % 4 + 1),
              y: mousePosition.y * 0.02 * (i % 4 + 1),
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-2 h-2 bg-yellow-500/20 rounded-full" />
            ) : i % 3 === 1 ? (
              <div className="w-3 h-3 bg-yellow-400/15 rotate-45 border border-yellow-500/20" />
            ) : (
              <div className="w-1 h-6 bg-gradient-to-b from-yellow-500/20 to-transparent" />
            )}
          </motion.div>
        ))}

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,193,7,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,193,7,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center"
                >
                  <SparklesIcon className="w-6 h-6 text-black" />
                </motion.div>
                <div>
                  <h2 className="text-5xl md:text-6xl font-light text-black dark:text-white">
                    Let's Create
                  </h2>
                  <motion.h3 
                    className="text-3xl md:text-4xl font-medium"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    style={{
                      background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)",
                      backgroundSize: "200% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Something Amazing
                  </motion.h3>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-black dark:text-gray-300 text-lg leading-relaxed max-w-lg"
              >
                Ready to bring your vision to life? I'm passionate about creating innovative solutions that make a difference. Let's collaborate and build something extraordinary together.
              </motion.p>
            </div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              {[
                { icon: EnvelopeIcon, label: "Email", value: "yosephtesfaye@example.com", href: "mailto:yosephtesfaye@example.com" },
                { icon: PhoneIcon, label: "Phone", value: "+251 912 345 678", href: "tel:+251912345678" },
                { icon: MapPinIcon, label: "Location", value: "Addis Ababa, Ethiopia", href: "#" }
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="group"
                >
                  <Link href={contact.href} className="flex items-center gap-4 p-4 glass rounded-xl border border-gray-700/30 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors duration-300">
                      <contact.icon className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-black dark:text-gray-400 text-sm">{contact.label}</p>
                      <p className="text-black dark:text-white font-medium">{contact.value}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="space-y-4"
            >
              <h4 className="text-black dark:text-white font-medium text-lg">Connect With Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: GithubIcon, href: "https://github.com/P1R47E", label: "GitHub" },
                  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/yoseph-tesfaye-2656b5319/", label: "LinkedIn" }
                ].map((social, index) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  >
                    <Link href={social.href} className="group">
                      <div className="w-14 h-14 glass rounded-xl border border-gray-600/30 hover:border-yellow-500 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20">
                        <Image 
                          src={social.icon} 
                          alt={`${social.label} Icon`} 
                          className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" 
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {emailSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="glass rounded-3xl p-12 text-center border border-yellow-500/30 relative overflow-hidden"
                >
                  {/* Success Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-600/10" />
                  
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
                    className="relative w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <SparklesIcon className="w-10 h-10 text-black" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-2xl font-bold text-yellow-500 mb-4"
                  >
                    Message Sent Successfully!
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-black dark:text-gray-300 text-lg leading-relaxed"
                  >
                    Thank you for reaching out! I'll get back to you within 24 hours. 
                    Looking forward to our conversation.
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="glass rounded-3xl p-8 border border-gray-700/30 relative overflow-hidden"
                >
                  {/* Form Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent" />
                  
                  <motion.form
                    className="relative space-y-6"
                    onSubmit={handleSubmit}
                  >
                    {/* Form Header */}
                    <div className="text-center mb-8">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl font-light text-black dark:text-white mb-2"
                      >
                        Send Me a Message
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-black dark:text-gray-400"
                      >
                        I'd love to hear about your project
                      </motion.p>
                    </div>

                    {/* Form Fields */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        className="relative group"
                      >
                        <label
                          htmlFor="name"
                          className="text-yellow-500 block mb-3 text-sm font-medium"
                        >
                          Your Name
                        </label>
                        <div className="relative">
                          <input
                            name="name"
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-6 py-4 glass rounded-xl border border-black dark:border-gray-600/30 focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 transition-all duration-300 text-black dark:text-white placeholder-gray-400 bg-transparent"
                            placeholder="Enter your name"
                          />
                          <motion.div
                            className="absolute inset-0 rounded-xl border-2 border-yellow-500/50 pointer-events-none"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ 
                              opacity: focusedField === 'name' ? 1 : 0,
                              scale: focusedField === 'name' ? 1 : 1.05
                            }}
                            transition={{ duration: 0.2 }}
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        className="relative group"
                      >
                        <label
                          htmlFor="email"
                          className="text-yellow-500 block mb-3 text-sm font-medium"
                        >
                          Your Email
                        </label>
                        <div className="relative">
                          <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-6 py-4 glass rounded-xl border border-black dark:border-gray-600/30 focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 transition-all duration-300 text-black dark:text-white placeholder-gray-400 bg-transparent"
                            placeholder="your.email@example.com"
                          />
                          <motion.div
                            className="absolute inset-0 rounded-xl border-2 border-yellow-500/50 pointer-events-none"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ 
                              opacity: focusedField === 'email' ? 1 : 0,
                              scale: focusedField === 'email' ? 1 : 1.05
                            }}
                            transition={{ duration: 0.2 }}
                          />
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      className="relative group"
                    >
                      <label
                        htmlFor="subject"
                        className="text-yellow-500 block mb-3 text-sm font-medium"
                      >
                        Subject
                      </label>
                      <div className="relative">
                        <input
                          name="subject"
                          type="text"
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-6 py-4 glass rounded-xl border border-black dark:border-gray-600/30 focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 transition-all duration-300 text-black dark:text-white placeholder-gray-400 bg-transparent"
                          placeholder="What's this about?"
                        />
                        <motion.div
                          className="absolute inset-0 rounded-xl border-2 border-yellow-500/50 pointer-events-none"
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ 
                            opacity: focusedField === 'subject' ? 1 : 0,
                            scale: focusedField === 'subject' ? 1 : 1.05
                          }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                      className="relative group"
                    >
                      <label
                        htmlFor="message"
                        className="text-yellow-500 block mb-3 text-sm font-medium"
                      >
                        Message
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          id="message"
                          rows={6}
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-6 py-4 glass rounded-xl border border-black dark:border-gray-600/30 focus:border-yellow-500 focus:shadow-lg focus:shadow-yellow-500/20 transition-all duration-300 text-black dark:text-white placeholder-gray-400 bg-transparent resize-none"
                          placeholder="Tell me about your project, ideas, or just say hello..."
                        />
                        <motion.div
                          className="absolute inset-0 rounded-xl border-2 border-yellow-500/50 pointer-events-none"
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ 
                            opacity: focusedField === 'message' ? 1 : 0,
                            scale: focusedField === 'message' ? 1 : 1.05
                          }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    </motion.div>

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
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          className="text-red-400 text-sm bg-red-400/10 border border-red-400/30 rounded-xl p-4 backdrop-blur-sm"
                        >
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.0 }}
                      className="pt-4"
                    >
                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        whileHover={{ scale: isLoading ? 1 : 1.02, y: isLoading ? 0 : -2 }}
                        whileTap={{ scale: isLoading ? 1 : 0.98 }}
                        className={`relative w-full px-8 py-4 rounded-xl font-medium transition-all duration-300 group overflow-hidden ${
                          isLoading 
                            ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40'
                        }`}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {isLoading ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full"
                              />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <PaperAirplaneIcon className="w-5 h-5" />
                              Send Message
                            </>
                          )}
                        </span>
                        {!isLoading && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                            whileHover={{ scale: 1.05 }}
                          />
                        )}
                      </motion.button>
                    </motion.div>
                  </motion.form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default EmailSection;
