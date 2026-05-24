"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WhoWeAreModern() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  // --- ACCORDION DATA ---
  const pillars = [
    {
      id: "01",
      title: "Innovation-Driven Team",
      topic: "We are a team focused on building modern digital and AI-powered solutions.",
      tag1: "Innovation",
      tag2: "AI",
      image: "/innovation.webp",
      color: "bg-gray-100",
    },
    {
      id: "02",
      title: "Technology Expert Solutions",
      topic: "We specialize in AI, software development, mobile apps, and UI/UX design.",
      tag1: "Technology",
      tag2: "Development",
      image: "/expert.webp",
      color: "bg-[#F4F8FC]",
    },
    {
      id: "03",
      title: "Smart Problem Solvers",
      topic: "We turn complex business challenges into simple, smart solutions.",
      tag1: "Solutions",
      tag2: "Strategy",
      image: "/technology.webp",
      color: "bg-[#29AAE3]",
    },
    {
      id: "04",
      title: "Growth Focused Strategy",
      topic: "We help businesses scale with efficient and intelligent technology.",
      tag1: "Scalability",
      tag2: "Growth",
      image: "/growing.webp",
      color: "bg-[#0D4DB1]",
    },
    {
      id: "05",
      title: "Future Ready Builders",
      topic: "We create scalable systems that grow and adapt with your business.",
      tag1: "Future-ready",
      tag2: "Systems",
      image: "/future.webp",
      color: "bg-[#1A1A1A]",
    },
  ];

  return (
    <div className="w-full border-t border-gray-200">
      {/* 1. BACKGROUND WIREFRAME GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center hidden md:flex">
        <div className="w-full max-w-7xl h-full border-x border-gray-200 relative"></div>
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 overflow-hidden md:border-x border-gray-200">
        
        {/* 2. HEADER TEXT */}
        <div className="mb-12 md:mb-24 text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-[56px] lg:text-[64px] font-normal leading-tight text-black tracking-tight mb-6 md:mb-8"
          >
            We Build What’s Next
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-sm md:text-lg text-gray-500 leading-relaxed mx-auto max-w-3xl px-2"
          >
            Netxium is a technology company that builds AI, software, and mobile solutions. We help businesses grow by creating smart, simple, and scalable digital products.
          </motion.p>
        </div>

        {/* 3. CINEMATIC ACCORDION (Vertical on Mobile, Horizontal on Desktop) */}
        {/* Adjusted container height: Taller on mobile to accommodate vertical stacking */}
        <div className="w-full h-[600px] md:h-[550px] flex flex-col md:flex-row gap-3 md:gap-4">
          {pillars.map((pillar, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={pillar.id}
                onClick={() => setActiveIndex(index)}
                layout
                initial={false}
                // On mobile, flex dictates height. On desktop, flex dictates width.
                animate={{ flex: isActive ? "10" : "1" }}
                whileHover={!isActive ? { scale: 0.98, opacity: 0.8 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  mass: 1,
                }}
                className={`relative overflow-hidden cursor-pointer group ${
                  isActive
                    ? "rounded-3xl md:rounded-[2.5rem] shadow-2xl"
                    : `rounded-full md:rounded-full ${pillar.color} shadow-inner`
                }`}
              >
                {/* INACTIVE STATE */}
                {!isActive && (
                  // Centered on mobile (horizontal bar), bottom-aligned on desktop (vertical pillar)
                  <div className="absolute inset-0 md:inset-auto md:bottom-6 md:left-0 md:right-0 flex items-center justify-center opacity-50 font-mono text-sm md:text-base font-bold mix-blend-difference text-white transition-opacity group-hover:opacity-100">
                    {pillar.id}
                  </div>
                )}

                {/* ACTIVE STATE */}
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
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/50 md:via-black/40 to-transparent md:to-transparent" />

                      {/* Content Container */}
                      <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between">
                        
                        {/* Top Content (Tags, Title & Topic) */}
                        <div className="overflow-hidden mt-auto md:mt-0">
                          <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                            className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6"
                          >
                            <span className="px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] md:text-sm font-medium border border-white/20 shadow-sm">
                              {pillar.tag1}
                            </span>
                            <span className="px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-[#29AAE3]/20 backdrop-blur-md text-white text-[10px] md:text-sm font-medium border border-[#29AAE3]/30 shadow-sm">
                              {pillar.tag2}
                            </span>
                          </motion.div>

                          <motion.h3
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                            className="text-2xl sm:text-3xl md:text-5xl lg:text-[52px] font-normal text-white max-w-lg leading-[1.1] tracking-tight"
                          >
                            {pillar.title}
                          </motion.h3>

                          <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
                            // line-clamp-2 prevents text from overflowing on very small mobile screens
                            className="text-white/80 mt-2 md:mt-4 text-xs sm:text-sm md:text-lg font-light max-w-md leading-relaxed line-clamp-2 md:line-clamp-none"
                          >
                            {pillar.topic}
                          </motion.p>
                        </div>

                        {/* Bottom Content (Button) */}
                        <motion.div
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.55, duration: 0.5, ease: "easeOut" }}
                          className="mt-6 md:mt-auto"
                        >
                          <button 
                            onClick={() => navigate("/contact")} 
                            className="group/btn inline-flex items-center gap-3 md:gap-4 bg-white/95 backdrop-blur-sm pl-2.5 pr-5 py-2.5 md:pl-3 md:pr-6 md:py-3 rounded-full hover:bg-white transition-all active:scale-[0.97] shadow-xl"
                          >
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white group-hover/btn:bg-[#29AAE3] transition-colors duration-300">
                              <ArrowUpRight
                                size={18}
                                strokeWidth={2.5}
                                className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                              />
                            </div>
                            <span className="font-bold text-xs md:text-[14px] text-black tracking-wide">
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