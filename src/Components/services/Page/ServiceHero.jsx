"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ServicesHero() {
  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 300, damping: 24 } 
    },
  };

  return (
    // Outer wrapper for the full-width top border (wireframe grid look)
    <div className="w-full border-t border-gray-200 bg-white pt-10">
      
      {/* Main container with side borders */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24 border-x border-gray-200 font-sans">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          
          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-[40px] md:text-[64px] leading-tight font-normal text-black tracking-tight mb-6"
          >
            We serve quality services
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl mb-16 md:mb-24 px-4"
          >
            We design AI-powered features that solve real problems—no bloat, just smart tools that make
            work faster, decisions clearer, and operations smoother. From automation to insights, every
            solution is built for performance, scalability, and ease of use.
          </motion.p>

          {/* Large Hero Image */}
          <motion.div 
            variants={itemVariants}
            className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gray-100 border border-gray-200 shadow-sm relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] group"
          >
            <img
              src="../src/assets/robot.jpg" // Replace with your actual image path
              alt="Advanced AI Robot"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
            />
          </motion.div>

        </motion.div>

      </section>
    </div>
  );
}