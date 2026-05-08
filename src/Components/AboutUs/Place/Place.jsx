"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutEditorial() {
  return (
    <div className="relative w-full min-h-screen bg-white font-sans overflow-hidden flex items-center border-t border-gray-200">
      
      {/* 1. BACKGROUND WIREFRAME GRID (Subtle Red/Gray to match image) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full border-x border-gray-200 relative">
          
        </div>
      </div>

      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* LEFT COLUMN: Modern Animated Blur / Mesh Gradient */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 aspect-square lg:aspect-[4/5] relative flex items-center justify-center"
        >
          {/* This creates the smooth, ethereal glow effect */}
          <div className="absolute inset-0 overflow-hidden rounded-[3rem] bg-[#E8F2F6]">
            {/* Dark Blue Orb */}
            <motion.div 
              animate={{ 
                x: [0, 30, 0], 
                y: [0, -40, 0] 
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute -bottom-20 -left-20 w-[120%] h-[120%] bg-[#0A3B99] rounded-full mix-blend-multiply filter blur-[120px] opacity-80"
            />
            {/* Cyan/Light Blue Orb */}
            <motion.div 
              animate={{ 
                x: [0, -30, 0], 
                y: [0, 40, 0] 
              }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
              className="absolute -top-20 -right-20 w-[100%] h-[100%] bg-[#29AAE3] rounded-full mix-blend-multiply filter blur-[100px] opacity-70"
            />
            {/* White Soft Overlay */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Editorial Typography */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[40px] md:text-[52px] lg:text-[56px] font-normal leading-[1.1] text-black tracking-tight mb-10"
          >
            Aiero, a marketing firm based in New York, helps businesses
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-500 text-[15px] md:text-base leading-relaxed max-w-lg"
          >
            <p>
              Artificial Intelligence refers to the development of computer systems
              that can perform tasks that would typically require human intelligence.
              It involves the creation of algorithms and models that enable machines
              to learn, reason, perceive, and make decisions.
            </p>
            <p>
              There are generally two types of AI: Narrow or Weak AI, which is
              designed to perform specific tasks, and General or Strong AI, which
              possesses human-level intelligence and can handle a wide range of
              tasks.
            </p>
          </motion.div>

          {/* LOGOS / PARTNERS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-10 border-t border-gray-100 flex flex-wrap items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
          >
            {/* Placeholder Logos imitating your image */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-sm flex items-center justify-center font-bold text-white text-xs">ND2</div>
              <div className="text-[10px] leading-tight font-bold text-gray-500 uppercase">Nordyne<br/>Defense<br/>Dynamics</div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-16 h-8 rounded-full border border-gray-300 flex items-center justify-center text-[10px] font-medium text-gray-500">
                Metriks
              </div>
              <div className="text-[9px] leading-tight text-gray-400">Data<br/>Center</div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl font-serif text-gray-500 tracking-wider">QUO</span>
              <div className="text-[9px] leading-tight font-bold text-gray-400 uppercase">Legal<br/>Firm</div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}