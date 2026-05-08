"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function WhoWeAreModern() {
  const [activeIndex, setActiveIndex] = useState(0);

  // --- ACCORDION DATA ---
  const pillars = [
    {
      id: "01",
      title: "Artificial Intelligence & ML",
      tag1: "Innovation",
      tag2: "Technology",
      image: "src/assets/ai-ml-team.jpg",
      color: "bg-gray-100",
    },
    {
      id: "02",
      title: "Custom Software Development",
      tag1: "Engineering",
      tag2: "Scalability",
      image: "src/assets/software-team.jpg",
      color: "bg-[#F4F8FC]",
    },
    {
      id: "03",
      title: "Intuitive UI/UX Design",
      tag1: "Creative",
      tag2: "Experience",
      image: "src/assets/design-team.jpg",
      color: "bg-[#29AAE3]",
    },
    {
      id: "04",
      title: "Digital Transformation",
      tag1: "Consulting",
      tag2: "Strategy",
      image: "src/assets/strategy-team.jpg",
      color: "bg-[#0D4DB1]",
    },
    {
      id: "05",
      title: "Cloud & Infrastructure",
      tag1: "DevOps",
      tag2: "Security",
      image: "src/assets/cloud-team.jpg",
      color: "bg-[#1A1A1A]",
    },
  ];

  return (
    <div className="w-full border-t border-gray-200">
      {/* 1. BACKGROUND WIREFRAME GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full border-x border-gray-200 relative"></div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-20 overflow-hidden border-x border-gray-200">
        {/* 2. HEADER TEXT WITH STAGGERED REVEAL */}
        <div className="mb-16 md:mb-24 text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[40px] md:text-[56px] lg:text-[64px] font-normal leading-tight text-black tracking-tight mb-8"
          >
            Who we are
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-base md:text-lg text-gray-500 leading-relaxed mx-auto max-w-3xl"
          >
            We design AI-powered features that solve real problems — no bloat,
            just smart tools that make work faster, decisions clearer, and
            operations smoother. From automation to insights, every solution is
            built for performance, scalability, and ease of use.
          </motion.p>
        </div>

        {/* 3. CINEMATIC HORIZONTAL ACCORDION */}
        <div className="w-full h-[450px] md:h-[550px] flex gap-3 md:gap-4">
          {pillars.map((pillar, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={pillar.id}
                onClick={() => setActiveIndex(index)}
                layout
                initial={false}
                animate={{ flex: isActive ? "10" : "1" }}
                whileHover={!isActive ? { scale: 0.98, opacity: 0.8 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 200, // Lower stiffness for a smoother, slower glide
                  damping: 25,
                  mass: 1,
                }}
                className={`relative overflow-hidden cursor-pointer group ${
                  isActive
                    ? "rounded-[2.5rem] shadow-2xl"
                    : `rounded-full ${pillar.color} shadow-inner`
                }`}
              >
                {/* INACTIVE STATE (Sleek vertical number at bottom) */}
                {!isActive && (
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-50 font-mono text-sm font-bold mix-blend-difference text-white transition-opacity group-hover:opacity-100">
                    {pillar.id}
                  </div>
                )}

                {/* ACTIVE STATE (Animated Content) */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      key={`content-${pillar.id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      {/* Cinematic Image Zoom */}
                      <motion.img
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src={pillar.image}
                        alt={pillar.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* Premium Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                      {/* Content Container */}
                      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                        {/* Top Content (Tags & Title) */}
                        <div className="overflow-hidden">
                          <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                              delay: 0.3,
                              duration: 0.5,
                              ease: "easeOut",
                            }}
                            className="flex gap-3 mb-6"
                          >
                            <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-xs md:text-sm font-medium border border-white/20 shadow-sm">
                              {pillar.tag1}
                            </span>
                            <span className="px-5 py-2 rounded-full bg-[#29AAE3]/20 backdrop-blur-md text-white text-xs md:text-sm font-medium border border-[#29AAE3]/30 shadow-sm">
                              {pillar.tag2}
                            </span>
                          </motion.div>

                          <motion.h3
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                              delay: 0.4,
                              duration: 0.5,
                              ease: "easeOut",
                            }}
                            className="text-3xl md:text-5xl lg:text-[52px] font-normal text-white max-w-lg leading-[1.1] tracking-tight"
                          >
                            {pillar.title}
                          </motion.h3>
                        </div>

                        {/* Bottom Content (Button) */}
                        <motion.div
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            delay: 0.5,
                            duration: 0.5,
                            ease: "easeOut",
                          }}
                        >
                          <button className="group/btn flex items-center gap-4 bg-white/95 backdrop-blur-sm pl-3 pr-6 py-3 rounded-full hover:bg-white transition-all active:scale-[0.97] shadow-xl">
                            <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white group-hover/btn:bg-[#29AAE3] transition-colors duration-300">
                              <ArrowUpRight
                                size={20}
                                strokeWidth={2.5}
                                className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                              />
                            </div>
                            <span className="font-bold text-[14px] text-black tracking-wide">
                              Contact us
                            </span>
                          </button>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
