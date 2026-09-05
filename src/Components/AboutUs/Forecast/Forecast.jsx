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
      img: "src/assets/project1.webp" // Replace with your actual image path
    },
    {
      id: 2,
      status: "Finalized",
      title: "Neximum – Digital Ecosystem",
      desc: "A comprehensive design system built for high-scale AI applications and real-time data monitoring.",
      img: "src/assets/project2.webp" // Replace with your actual image path
    },
    {
      id: 3,
      status: "In Review",
      title: "HealthSync – Mobile Interface",
      desc: "An intuitive patient portal prioritizing accessibility, fast load times, and clear data visualization.",
      img: "src/assets/project3.webp" // Replace with your actual image path
    }
  ];

  // --- DRAG (SWIPE) HANDLER FOR BOTH MOUSE & TOUCH ---
  const handleDragEnd = (event, info) => {
    // Swipe කරන්න ඕනෙ අවම දුර
    const swipeThreshold = 50;
    const distance = info.offset.x;

    if (distance < -swipeThreshold) {
      // වමට ඇද්දොත් -> ඊළඟ Project එකට යනවා
      setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    } else if (distance > swipeThreshold) {
      // දකුණට ඇද්දොත් -> කලින් Project එකට යනවා
      setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }
  };

  return (
    // 1. FULL-WIDTH WRAPPER
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 border-x border-gray-200 font-sans w-full relative overflow-visible">
      
      {/* 2. MAIN CONTENT WRAPPER */}
      <section className="max-w-7xl mx-auto overflow-visible">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16 mt-8 md:mt-4 text-center space-y-4 md:space-y-6 overflow-visible"
        >
          <h2 className="text-[42px] sm:text-[48px] md:text-[64px] leading-normal md:leading-[1.1] font-normal text-black tracking-tight mb-6 pb-4 pt-4">
            Our Projects
          </h2>
        </motion.div>

        {/* 3. SHOWCASE CONTAINER WITH DRAG EVENTS (Mouse + Touch) */}
        <motion.div 
          className="relative w-full min-h-[520px] md:min-h-0 md:aspect-[21/9] rounded-3xl md:rounded-[44px] overflow-hidden bg-[#F2F6FF] shadow-sm cursor-grab active:cursor-grabbing"
          // Framer motion drag properties:
          drag="x"
          dragConstraints={{ left: 0, right: 0 }} // ඇද්දට පස්සේ ආපහු මැදටම එන්න
          dragElastic={0.05} // ඇදෙද්දී දැනෙන බර ගතිය (Premium feel)
          onDragEnd={handleDragEnd}
        >
          
          {/* ANIMATED BLURRED IMAGE BACKGROUND */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(30px)", scale: 1.1 }}
              animate={{ opacity: 1, filter: "blur(10px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(30px)", scale: 1.1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <img
                src={projects[index].img}
                alt={projects[index].title}
                className="w-full h-full object-cover opacity-60"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dimming overlay so the white card pops */}
          <div className="absolute inset-0 bg-black/10 md:bg-black/5 pointer-events-none" />

          {/* THE FLOATING CENTRAL CARD */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <AnimatePresence mode="wait">
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-[2.5rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] max-w-[90%] sm:max-w-[480px] w-full text-center z-20"
              >
                {/* Status indicator */}
                <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
                  <span className={`w-2 h-2 rounded-full ${projects[index].status === 'In Progress' ? 'bg-yellow-400 animate-pulse' : 'bg-[#29AAE3]'}`} />
                  <span className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                    {projects[index].status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[22px] md:text-[32px] font-medium text-black mb-3 md:mb-4 leading-snug md:leading-tight tracking-tight">
                  {projects[index].title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-[13px] md:text-[15px] mb-8 md:mb-10 leading-relaxed max-w-sm mx-auto">
                  {projects[index].desc}
                </p>

                {/* Action Button - Pointer Events අවහිර නොවෙන්න stopPropagation දාලා තියෙනවා */}
                <button 
                  onPointerDownCapture={(e) => e.stopPropagation()} 
                  className="w-full py-3.5 md:py-4 bg-black text-white rounded-xl md:rounded-2xl font-medium text-[14px] flex items-center justify-center gap-2 hover:bg-gray-800 transition-all hover:gap-3 active:scale-[0.98] cursor-pointer"
                >
                  Live Preview <span>→</span>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DOT PAGINATION */}
          <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2.5 md:gap-3 z-30 bg-white/30 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/40">
            {projects.map((_, i) => (
              <button
                key={i}
                onPointerDownCapture={(e) => e.stopPropagation()} // DOTS උඩ Drag වෙන එක නවත්වන්න
                onClick={() => setIndex(i)}
                className="group p-1 cursor-pointer"
                aria-label={`Go to project ${i + 1}`}
              >
                <div 
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === i ? "w-8 md:w-10 bg-black" : "w-2 bg-black/40 group-hover:bg-black/60"
                  }`} 
                />
              </button>
            ))}
          </div>

        </motion.div>
      </section>
    </div>
  );
}