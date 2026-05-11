"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutEditorial() {
  return (
    <div className="relative w-full min-h-screen bg-white font-sans overflow-hidden flex items-center border-t border-gray-200">
      
      {/* 1. BACKGROUND WIREFRAME GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full border-x border-gray-200 relative">
        </div>
      </div>

      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* LEFT COLUMN: Video Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 aspect-square lg:aspect-[4/5] relative flex items-center justify-center"
        >
          {/* Video Frame */}
          <div className="absolute inset-0 overflow-hidden rounded-[3rem] bg-gray-100 shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              {/* Ensure the path to your video is correct */}
              <source src="../src/assets/about.png" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Subtle Overlay to maintain editorial look */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
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
            Netxium powers businesses with intelligent digital solutions
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-500 text-[15px] md:text-base leading-relaxed max-w-lg"
          >
            <p>
              Artificial Intelligence at Netxium is focused on creating smart systems that analyze data, automate workflows, and enhance business operations. By combining AI, machine learning, software development, and modern design, we deliver solutions that improve efficiency, decision-making, and user experiences.
            </p>
            <p>
              Our approach integrates intelligent algorithms and scalable technologies to help businesses adapt faster in a rapidly evolving digital world. From AI-powered automation to custom web and mobile applications, Netxium transforms ideas into impactful digital products.
            </p>
            <p>
              We specialize in building intelligent systems that learn, optimize, and grow alongside your business—empowering organizations with innovation, performance, and long-term scalability.
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