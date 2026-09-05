"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Process() {
  const timelineData = [
    {
      phase: "Discovery",
      tracks: [
        [
          { name: "Business analysis", left: 0, width: 22 },
          { name: "User research & Market insights", left: 24, width: 30 },
        ],
      ],
    },
    {
      phase: "Strategy",
      tracks: [
        [{ name: "Creative & AI strategy", left: 8, width: 32 }],
        [{ name: "System architecture", left: 24, width: 28 }],
        [{ name: "Product planning", left: 28, width: 45, active: true }],
      ],
    },
    {
      phase: "Design",
      tracks: [
        [{ name: "UI/UX designs", left: 40, width: 35 }],
        [{ name: "Wireframes & prototypes", left: 48, width: 35 }],
      ],
    },
    {
      phase: "Development",
      tracks: [
        [{ name: "Developing intelligent systems", left: 55, width: 30, active: true }],
        [{ name: "Web & mobile solutions", left: 62, width: 35 }],
      ],
    },
    {
      phase: "Optimize",
      tracks: [
        [{ name: "Testing & QA", left: 55, width: 30 }],
        [{ name: "Performance tuning", left: 62, width: 35 }],
        [{ name: "System optimization", left: 68, width: 30 }],
      ],
    },
    {
      phase: "Launch",
      tracks: [
        [{ name: "Deployment & monitoring", left: 75, width: 25, active: true }],
        [{ name: "Post-launch support", left: 80, width: 20 }],
      ],
    },
  ];

  // --- Animation Variants ---
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    // FULL WIDTH DARK CANVAS - Reverted to purely black
    <div className="w-full bg-black relative overflow-hidden font-sans border-t border-white/10">
      
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 md:py-32 relative z-10">
        
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-24 relative z-10"
        >
          {/* Reverted text color to neutral-500 */}
          <span className="text-neutral-500 text-sm mb-4 block font-medium tracking-widest uppercase">
            // Our Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[64px] leading-[1.1] font-normal text-white tracking-tight mb-8">
            From Vision to Real-World Impact
          </h2>
          <p className="text-gray-400 text-base md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            At Netxium, every project follows a clear, collaborative, and result-driven process. 
            We turn your ideas into intelligent, scalable digital solutions — step by step.
          </p>
        </motion.div>

        {/* Timeline / Gantt Chart Section */}
        <div className="w-full overflow-x-auto pb-8 hide-scrollbar cursor-grab active:cursor-grabbing">
          <div className="min-w-[900px] w-full relative pt-10">
            
            {/* Background Grid Lines */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px)",
                backgroundSize: "10% 100%",
              }}
            />

            {/* Animated Vertical Progress Line - Reverted to White gradient */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: "100%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/50 to-white/0 left-[35%] z-20"
            >
              {/* Infinite Scanning Dot - Reverted to White */}
              <motion.div
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_3px_rgba(255,255,255,0.8)]"
              />
            </motion.div>

            {/* Timeline Rows */}
            <div className="relative z-10 flex flex-col gap-8 md:gap-10">
              {timelineData.map((phase, phaseIndex) => (
                <div key={phaseIndex} className="flex items-start">
                  
                  {/* Phase Label */}
                  <motion.div
                    variants={sidebarVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: phaseIndex * 0.15 }}
                    className="w-32 md:w-48 flex-shrink-0 pt-2"
                  >
                    <span className="text-white/90 text-sm md:text-lg font-medium tracking-wide">
                      {phase.phase}
                    </span>
                  </motion.div>

                  {/* Tracks Area */}
                  <div className="flex-1 flex flex-col gap-3 relative border-l border-white/10 pl-6 md:pl-0">
                    {phase.tracks.map((track, trackIndex) => (
                      <div key={trackIndex} className="relative h-12 w-full">
                        {track.map((task, taskIndex) => (
                          <motion.div
                            key={taskIndex}
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: `${task.width}%`, opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                              duration: 0.8,
                              delay: phaseIndex * 0.2 + taskIndex * 0.1,
                              ease: "easeOut",
                            }}
                            whileHover={{ scale: 1.02, filter: "brightness(1.2)" }}
                            className={`absolute top-0 h-11 rounded-full flex items-center px-5 overflow-hidden shadow-lg transition-colors cursor-pointer ${
                              task.active
                                ? "bg-[#0D4DB1] border border-blue-400/50 z-20"
                                : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 z-10 backdrop-blur-sm"
                            }`}
                            style={{
                              left: `${task.left}%`,
                              transformOrigin: "left center",
                            }}
                          >
                            {/* Infinite Shimmer Effect for Active Task */}
                            {task.active && (
                              <motion.div
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                              />
                            )}

                            <span
                              className={`text-xs md:text-[15px] whitespace-nowrap truncate font-medium relative z-10 ${
                                task.active ? "text-white drop-shadow-md" : "text-gray-300"
                              }`}
                            >
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
      </section>
    </div>
  );
}