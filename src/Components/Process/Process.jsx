"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Process() {
  const timelineData = [
    {
      phase: "Discovery",
      tracks: [
        [
          { name: "Stakeholder interviews & briefing", left: 0, width: 22 },
          { name: "User & market research", left: 24, width: 20 },
        ],
      ],
    },
    {
      phase: "Concept",
      tracks: [
        [{ name: "Creative & strategic exploration", left: 8, width: 32 }],
        [{ name: "Direction alignment", left: 24, width: 28 }],
        [{ name: "Concept refinement", left: 28, width: 45, active: true }],
      ],
    },
    {
      phase: "Execution",
      tracks: [
        [{ name: "Design systems", left: 40, width: 35 }],
        [{ name: "Iterative testing & QA", left: 48, width: 35 }],
      ],
    },
    {
      phase: "Launch",
      tracks: [
        [{ name: "Rollout & support", left: 55, width: 30 }],
        [{ name: "Post-launch optimizations", left: 62, width: 35 }],
      ],
    },
  ];

  // --- Animation Variants ---
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="w-full bg-white border-t border-gray-200">
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-x border-gray-200 font-sans">
        
        {/* Dark Card Container */}
        <div className="bg-[#111111] rounded-[2.5rem] md:rounded-[3rem] px-6 py-16 md:p-20 overflow-hidden relative shadow-2xl">
          
          {/* Header Section */}
          <motion.div 
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-20 relative z-10"
          >
            <span className="text-neutral-500 text-sm mb-4 block font-medium tracking-widest uppercase">
            //  Our Process
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-normal text-white  tracking-tight mb-8">
              From Vision to Real-World Impact
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              At Netxium, every project follows a clear, collaborative, and result-driven process. 
              We turn your ideas into intelligent, scalable digital solutions — step by step.
            </p>
          </motion.div>

          {/* Timeline / Gantt Chart Section */}
          <div className="w-full overflow-x-auto pb-8 hide-scrollbar cursor-grab active:cursor-grabbing">
            <div className="min-w-[800px] w-full relative pt-10">
              
              {/* Background Grid Lines */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px)',
                  backgroundSize: '10% 100%'
                }}
              />

              {/* Animated Vertical Progress Line */}
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: "100%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/50 to-white/0 left-[35%] z-20"
              >
                {/* Infinite Scanning Dot */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_3px_rgba(255,255,255,0.8)]" 
                />
              </motion.div>

              {/* Timeline Rows */}
              <div className="relative z-10 flex flex-col gap-6 md:gap-8">
                {timelineData.map((phase, phaseIndex) => (
                  <div key={phaseIndex} className="flex items-start">
                    
                    {/* Phase Label (Staggered Entry) */}
                    <motion.div 
                      variants={sidebarVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      transition={{ delay: phaseIndex * 0.15 }}
                      className="w-32 md:w-40 flex-shrink-0 pt-2"
                    >
                      <span className="text-white text-sm md:text-base font-medium opacity-90">
                        {phase.phase}
                      </span>
                    </motion.div>

                    {/* Tracks Area */}
                    <div className="flex-1 flex flex-col gap-3 relative border-l border-white/10 pl-4 md:pl-0">
                      {phase.tracks.map((track, trackIndex) => (
                        <div key={trackIndex} className="relative h-10 w-full">
                          {track.map((task, taskIndex) => (
                            <motion.div
                              key={taskIndex}
                              // Initial entry animation
                              initial={{ width: 0, opacity: 0 }}
                              whileInView={{ width: `${task.width}%`, opacity: 1 }}
                              viewport={{ once: true, margin: "-100px" }}
                              transition={{ duration: 0.8, delay: (phaseIndex * 0.2) + (taskIndex * 0.1), ease: "easeOut" }}
                              // Hover interactions
                              whileHover={{ scale: 1.02, filter: "brightness(1.2)" }}
                              className={`absolute top-0 h-10 rounded-full flex items-center px-4 overflow-hidden shadow-lg transition-colors cursor-pointer ${
                                task.active 
                                  ? "bg-[#0D4DB1] border border-blue-400/50 z-20" 
                                  : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 z-10"
                              }`}
                              style={{ left: `${task.left}%`, transformOrigin: "left center" }}
                            >
                              {/* Infinite Shimmer Effect for Active Task */}
                              {task.active && (
                                <motion.div
                                  animate={{ x: ["-100%", "200%"] }}
                                  transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                                />
                              )}

                              <span className={`text-xs md:text-sm whitespace-nowrap truncate font-medium relative z-10 ${
                                task.active ? "text-white drop-shadow-md" : "text-gray-300"
                              }`}>
                                {task.name}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}