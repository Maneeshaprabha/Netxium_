"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      id: "ai-ml",
      number: "01",
      title: "AI & Machine Learning",
      description: "Leverage the power of AI to transform your business. Our solutions analyze data, uncover hidden insights, and automate complex processes.",
      tags: ["OpenAI", "TensorFlow", "Predictive Models", "Automation"],
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/20",
    },
    {
      id: "software-dev",
      number: "02",
      title: "Software Development",
      description: "From rapid prototypes to enterprise-grade production systems, we design and build robust software tailored precisely to your growth ambitions.",
      tags: ["React", "Node.js", "Python", "Cloud Architecture"],
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/20",
    },
    {
      id: "mobile-app",
      number: "03",
      title: "Mobile App Development",
      description: "User-centered mobile applications with flawless performance and accessibility at their core—built natively to engage and retain your audience.",
      tags: ["iOS", "Android", "React Native", "Swift"],
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/20",
    },
    {
      id: "ui-ux",
      number: "04",
      title: "Digital UI/UX Design",
      description: "Human-centered design that aligns your business goals with user needs. We turn complex architectural problems into absolute visual clarity.",
      tags: ["Wireframing", "Prototyping", "Design Systems", "Figma"],
      color: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/20",
    },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen relative font-sans selection:bg-white selection:text-black">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <section className="max-w-7xl mx-auto px-6 py-32 md:py-48 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 md:mb-40"
        >
          <span className="text-neutral-500 font-mono text-sm tracking-widest uppercase mb-6 block">
            // Core Capabilities
          </span>
          <h2 className="text-5xl md:text-[80px] leading-[1.05] font-normal tracking-tight max-w-4xl">
            Expertise that drives <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">
              measurable impact.
            </span>
          </h2>
        </motion.div>

        {/* Sticky Card Stack Container */}
        <div className="flex flex-col gap-6 md:gap-10 pb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // The magic CSS that makes them stack:
              className="sticky w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden backdrop-blur-xl bg-[#0a0a0a]/90 border border-white/10 shadow-2xl"
              style={{
                // Calculates the top offset so they stack perfectly like a deck of cards
                top: `calc(15vh + ${index * 40}px)`, 
              }}
            >
              {/* Subtle top gradient glow for each card */}
              <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50`} />
              <div className={`absolute -top-32 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b ${service.color} blur-[50px] opacity-40 pointer-events-none`} />

              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 p-8 md:p-16 lg:p-20 relative z-10">
                
                {/* Left Side: Number & Title */}
                <div className="lg:w-5/12 flex flex-col justify-between">
                  <span className="text-[80px] md:text-[120px] leading-none font-medium text-white/5 tracking-tighter select-none mb-6 lg:mb-0">
                    {service.number}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-normal tracking-tight leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Right Side: Details & CTA */}
                <div className="lg:w-7/12 flex flex-col justify-end">
                  <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                    {service.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-3 mb-12">
                    {service.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className={`px-4 py-2 rounded-full text-xs font-mono font-medium border bg-white/5 text-neutral-300 ${service.borderColor}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Sleek Arrow Button */}
                  <button className="flex items-center gap-4 text-white group w-fit">
                    <span className="text-sm font-bold tracking-widest uppercase">Explore Service</span>
                    <span className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <line x1="5" y1="19" x2="19" y2="5"></line>
                        <polyline points="10 5 19 5 19 14"></polyline>
                      </svg>
                    </span>
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
}