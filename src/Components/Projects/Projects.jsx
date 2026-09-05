"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

// --- Media Imports ---
import humanandrobot from "../../assets/robot_and_human.webp";
import womentechImage from "../../assets/womentech.webp";
import robotImage from "../../assets/robot.webp";

// --- Custom Animated Counter Component ---
function AnimatedCounter({ from = 0, to, suffix = "", duration = 2.5 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (inView) {
      animate(count, to, { 
        duration: duration, 
        ease: [0.16, 1, 0.3, 1] // Super smooth Apple-like easing
      });
    }
  }, [inView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Projects() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="w-full bg-white text-[#1D1D1F] py-24 md:py-32 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* HEADER SECTION */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-medium tracking-tighter leading-[0.95]">
            Impact <br/>
            <span className="text-[#A1A1A6]">Delivered.</span>
          </h2>
          <p className="max-w-md text-lg text-[#86868B] pb-2 leading-relaxed font-light">
            Custom software, AI, and mobile app solutions that drive measurable results for businesses worldwide.
          </p>
        </motion.div>

        {/* MINIMALIST BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CARD 1: Large Image + Glassmorphism Stat (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 rounded-[32px] bg-[#F5F5F7] overflow-hidden relative h-[400px] md:h-[500px] group"
          >
            <img 
              src={humanandrobot} 
              alt="AI Collaboration" 
              className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
            />
            {/* Glass pill box for stat */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-white/70 backdrop-blur-xl px-8 py-6 rounded-3xl shadow-sm">
              <div className="text-4xl sm:text-5xl font-bold tracking-tighter">
                <AnimatedCounter to={20} suffix="+" />
              </div>
              <div className="text-sm font-medium mt-1 text-gray-600 uppercase tracking-wide">
                Projects Delivered
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Dark Mode Sleek Card (Spans 1 column) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-1 rounded-[32px] bg-black text-white p-10 flex flex-col justify-between h-[400px] md:h-[500px]"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight">Workflow Automations</h3>
              <p className="text-[#A1A1A6] mt-4 font-light leading-relaxed">
                Streamlined business processes that save time and fundamentally improve your daily efficiency.
              </p>
            </div>
            <div className="text-7xl sm:text-8xl font-light tracking-tighter text-white/90">
              <AnimatedCounter to={20} suffix="+" />
            </div>
          </motion.div>

          {/* CARD 3: Clean White Card (Spans 1 column) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-1 rounded-[32px] bg-[#F5F5F7] p-10 flex flex-col justify-between h-[400px] md:h-[450px]"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight">Satisfied Clients</h3>
              <p className="text-[#86868B] mt-4 font-light leading-relaxed">
                From early-stage startups to massive enterprises, we build trusted partnerships.
              </p>
            </div>
            <div className="text-7xl sm:text-8xl font-medium tracking-tighter">
              <AnimatedCounter to={75} suffix="+" />
            </div>
          </motion.div>

          {/* CARD 4: Image Only (Spans 1 column) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-1 rounded-[32px] overflow-hidden relative h-[400px] md:h-[450px] group"
          >
            <img 
              src={womentechImage} 
              alt="Tech Women" 
              className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" 
            />
          </motion.div>

          {/* CARD 5: Image Only (Spans 1 column) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-1 rounded-[32px] overflow-hidden relative h-[400px] md:h-[450px] group bg-[#F5F5F7]"
          >
            <img 
              src={robotImage} 
              alt="Robot" 
              className="w-full h-full object-cover mix-blend-multiply transition-transform duration-[2s] ease-out group-hover:scale-110" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}