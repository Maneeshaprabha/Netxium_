"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectShowcase() {
  const [index, setIndex] = useState(0);

  // --- PROJECTS DATA ---
  const projects = [
    {
      id: 1,
      status: "In Progress",
      title: "Luxina – Brand Studio Template",
      desc: "A bold and expressive template for creatives and agencies. Currently fine-tuning layout and animations.",
      img: "src/assets/project1.jpg" // Replace with your actual image path
    },
    {
      id: 2,
      status: "Finalized",
      title: "Neximum – Digital Ecosystem",
      desc: "A comprehensive design system built for high-scale AI applications and real-time data monitoring.",
      img: "src/assets/project2.jpg" // Replace with your actual image path
    },
    {
      id: 3,
      status: "In Review",
      title: "HealthSync – Mobile Interface",
      desc: "An intuitive patient portal prioritizing accessibility, fast load times, and clear data visualization.",
      img: "src/assets/project3.jpg" // Replace with your actual image path
    }
  ];

  return (

    
    // 1. FULL-WIDTH WRAPPER (Exactly like Intro)
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 border-t border-gray-200 font-sans">
      
      {/* 2. MAIN CONTENT WRAPPER (Exactly like Intro: border-x on max-w-7xl) */}
      <section className="max-w-7xl mx-auto px-6 py-20 overflow-hidden  ">
        
        {/* Header matching your typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center space-y-6"
        >
       
          <h2 className="text-[40px] md:text-[64px] leading-tight font-normal text-black tracking-tight mb-6">
            Our Projects
          </h2>
        </motion.div>

        {/* 3. SHOWCASE CONTAINER */}
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[44px] overflow-hidden bg-[#F2F6FF] shadow-sm">
          
          {/* ANIMATED BLURRED IMAGE BACKGROUND */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(30px)", scale: 1.1 }}
              animate={{ opacity: 1, filter: "blur(10px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(30px)", scale: 1.1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={projects[index].img}
                alt={projects[index].title}
                className="w-full h-full object-cover opacity-60"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dimming overlay so the white card pops */}
          <div className="absolute inset-0 bg-black/5" />

          {/* THE FLOATING CENTRAL CARD */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] max-w-[480px] w-full text-center z-20"
            >
              {/* Status indicator */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className={`w-2 h-2 rounded-full ${projects[index].status === 'In Progress' ? 'bg-yellow-400 animate-pulse' : 'bg-[#29AAE3]'}`} />
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                  {projects[index].status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-[32px] font-normal text-black mb-4 leading-tight tracking-tight">
                {projects[index].title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm md:text-[15px] mb-10 leading-relaxed max-w-sm mx-auto">
                {projects[index].desc}
              </p>

              {/* Action Button */}
              <button className="w-full py-4 bg-black text-white rounded-2xl font-medium text-[14px] flex items-center justify-center gap-2 hover:bg-gray-800 transition-all hover:gap-3 active:scale-[0.98]">
                Live Preview <span>→</span>
              </button>
            </motion.div>
          </div>

          {/* DOT PAGINATION */}
          <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/40">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="group p-1"
                aria-label={`Go to project ${i + 1}`}
              >
                <div 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === i ? "w-10 bg-black" : "w-2 bg-black/40 group-hover:bg-black/60"
                  }`} 
                />
              </button>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}