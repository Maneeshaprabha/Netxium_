"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Creative() {
  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 300, damping: 24 } 
    },
  };

  return (
    // Top border to maintain the full-width wireframe grid
    <div className="w-full border-t border-gray-200 bg-white">
      
      {/* Main container with side borders */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-x border-gray-200 font-sans flex flex-col lg:flex-row gap-12 lg:gap-20 items-center overflow-hidden">
        
        {/* LEFT COLUMN: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative group rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-sm aspect-square md:aspect-[4/3] lg:aspect-square"
        >
          <img
            src="src/assets/robot-profile.png" // Replace with your actual image path
            alt="Futuristic Robot Profile"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

        {/* RIGHT COLUMN: Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          {/* Subtitle */}
          <motion.span 
            variants={textVariants}
            className="font-mono text-sm tracking-widest uppercase mb-6 block tracking-wide"
          >
            // About us
          </motion.span>

          {/* Heading */}
          <motion.h2 
            variants={textVariants}
            className="text-5xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold tracking-tight mb-8"
          >
           <h2 className=" text-gray-400 "> Where Technology</h2> 
           <span className="">  Meets Human Creativity.</span>
          </motion.h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
            <motion.p variants={textVariants}>
              At Netxium, we blend innovation, creativity, and technology to build 
              intelligent digital solutions that drive real business impact. Our team 
              specializes in AI & machine learning, custom software development, 
              mobile applications, and UI/UX design—helping brands stay ahead in 
              an ever-evolving digital world.
            </motion.p>
            
            <motion.p variants={textVariants}>
              We don't just develop products—we craft smart, scalable systems that 
              learn, adapt, and grow with your business. Every project we deliver is 
              guided by precision, design excellence, and a commitment to 
              measurable results.
            </motion.p>

            <motion.p variants={textVariants}>
              From startups to enterprises, Netxium empowers organizations to 
              transform operations, enhance user experiences, and accelerate 
              growth through intelligent technology.
            </motion.p>
          </div>
        </motion.div>

      </section>
    </div>
  );
}