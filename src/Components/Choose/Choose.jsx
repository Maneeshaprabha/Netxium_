"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhyChooseUsModern() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reasons = [
    {
      num: "01",
      title: "Expertise That Delivers Results",
      desc: "Our team brings deep experience in AI, machine learning, software development, and design ensuring every project is executed with precision and purpose.",
      // Replace these with your actual image paths
      image: "../src/assets/robot.jpg", 
    },
    {
      num: "02",
      title: "Ongoing Support & Partnership",
      desc: "Our commitment doesn't end at launch. We provide continuous optimization, updates, and insights to keep your solutions at their best.",
      image: "src/assets/partnership.jpg",
    },
    {
      num: "03",
      title: "Tailored Solutions for Every Business",
      desc: "We don't believe in one-size-fits-all. Every solution we craft is customized to meet your goals, challenges, and growth ambitions.",
      image: "src/assets/tailored.jpg",
    },
  ];

  return (
    <div className="w-full bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      <section className="max-w-7xl mx-auto px-6 py-32 border-x border-white/10 font-sans flex flex-col lg:flex-row gap-16 lg:gap-20 min-h-screen">
        
        {/* LEFT COLUMN: Sticky Image Reveal Container */}
        <div className="lg:w-1/2 relative flex flex-col justify-center">
          <div className="sticky top-32 w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex} // Changing the key triggers the crossfade
                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                src={reasons[activeIndex].image}
                alt={reasons[activeIndex].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Dark gradient overlay so the image isn't too bright */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent mix-blend-multiply" />
          </div>
        </div>

        {/* RIGHT COLUMN: Typography-Driven Interactive List */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-neutral-500 text-sm mb-4 block font-medium tracking-widest uppercase">
              // The Netxium Advantage
            </span>
            <h2 className="text-5xl md:text-[72px] leading-[0.9] font-normal tracking-tight">
              Why Choose <br />  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">Us.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col">
            {reasons.map((item, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className="group relative py-8 md:py-10 border-t border-white/10 cursor-pointer"
                >
                  {/* Subtle active border indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="active-border"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-white"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className={`pl-6 md:pl-10 transition-all duration-500 ${isActive ? "opacity-100 translate-x-2" : "opacity-40 group-hover:opacity-70"}`}>
                    <div className="flex items-start gap-6">
                      <span className="text-sm md:text-base font-medium font-mono pt-2">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight mb-4">
                          {item.title}
                        </h3>
                        
                        {/* Height animation for the description (Accordion effect) */}
                        <motion.div
                          initial={false}
                          animate={{ 
                            height: isActive ? "auto" : 0,
                            opacity: isActive ? 1 : 0,
                            marginTop: isActive ? 16 : 0
                          }}
                          className="overflow-hidden"
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
                            {item.desc}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Bottom border for the last item */}
            <div className="border-t border-white/10" />
          </div>
        </div>

      </section>
    </div>
  );
}