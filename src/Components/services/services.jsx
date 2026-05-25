"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();
  
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
    // Added overflow-x-clip to prevent background blur from causing horizontal scroll on mobile
    <div className="bg-[#050505] text-white min-h-screen relative font-sans selection:bg-white selection:text-black overflow-x-clip">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] md:h-[500px] bg-white/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32 lg:py-48 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24 lg:mb-40"
        >
          <span className="text-neutral-500 font-mono text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6 block">
            // Core Capabilities
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-[80px] leading-[1.15] md:leading-[1.05] font-normal tracking-tight max-w-4xl">
            Expertise that drives <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">
              measurable impact.
            </span>
          </h2>
        </motion.div>

        {/* Sticky Card Stack Container */}
        <div className="flex flex-col gap-6 md:gap-10 pb-20 md:pb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="sticky w-full rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden backdrop-blur-xl bg-[#0a0a0a]/90 border border-white/10 shadow-2xl"
              style={{
                // Adjusted mobile/desktop offset logic to prevent aggressive overlap on small screens
                top: `calc(10vh + ${index * 30}px)`, 
              }}
            >
              {/* Subtle top gradient glow for each card */}
              <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50`} />
              <div className={`absolute -top-32 left-1/2 -translate-x-1/2 w-full md:w-3/4 h-32 bg-gradient-to-b ${service.color} blur-[50px] opacity-40 pointer-events-none`} />

              {/* Tighter padding and gaps for mobile */}
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-20 p-6 sm:p-8 md:p-12 lg:p-20 relative z-10">
                
                {/* Left Side: Number & Title */}
                <div className="lg:w-5/12 flex flex-col justify-between">
                  <span className="text-[60px] md:text-[100px] lg:text-[120px] leading-none font-medium text-white/5 tracking-tighter select-none mb-4 lg:mb-0">
                    {service.number}
                  </span>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Right Side: Details & CTA */}
                <div className="lg:w-7/12 flex flex-col justify-end mt-2 lg:mt-0">
                  <p className="text-neutral-400 text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-10 max-w-xl">
                    {service.description}
                  </p>

                  {/* Tech Stack Pills - Wrap cleanly on mobile */}
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
                    {service.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-mono font-medium border bg-white/5 text-neutral-300 ${service.borderColor}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Sleek Arrow Button */}
                  <button onClick={() => navigate("/services")} className="flex items-center gap-3 md:gap-4 text-white group w-max">
                    <span className="text-xs md:text-sm font-bold tracking-widest uppercase">Explore Service</span>
                    <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
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