"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

// --- Custom Animated Counter Component ---
function AnimatedCounter({ from = 0, to, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  // Trigger animation when the element comes into view
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(from);
  // Round the motion value to a whole number and append the suffix
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (inView) {
      animate(count, to, { 
        duration: duration, 
        ease: "easeOut" 
      });
    }
  }, [inView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// --- Metrics Data ---
const metrics = [
  {
    label: "Projects Delivered",
    value: 20,
    suffix: "+",
    desc: "Custom software, AI, and mobile app solutions that drive results for businesses of all sizes.",
    bg: "bg-[#F2F6FF]",
    text: "text-black",
  },
  {
    label: "Satisfied Clients",
    value: 75,
    suffix: "+",
    desc: "From startups to enterprises, we build trusted partnerships that last.",
    bg: "bg-[#29AAE3]",
    text: "text-white",
  },
  {
    label: "Workflow Automations",
    value: 20,
    suffix: "+",
    desc: "Streamlined business processes that save time and improve efficiency.",
    bg: "bg-black",
    text: "text-white",
  },
];

export default function Projects() {
  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    // 1. FULL-WIDTH WRAPPER
    <div className="w-full border-t border-gray-200 bg-white relative">
      
      {/* BACKGROUND WIREFRAME GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full border-x border-gray-100 relative">
          <div className="absolute left-1/4 top-0 bottom-0 border-l border-gray-100" />
          <div className="absolute left-1/2 top-0 bottom-0 border-l border-gray-100" />
          <div className="absolute left-3/4 top-0 bottom-0 border-l border-gray-100" />
        </div>
      </div>

      {/* 2. MAIN CONTENT WRAPPER */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-x border-gray-200 overflow-hidden font-sans">
        
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 pb-12 mb-12 items-center border-b border-gray-200"
        >
          <h2 className="text-4xl md:text-[64px] leading-[0.9] tracking-tight font-sans">
            <span className="text-gray-400 font-medium ">
              Impact Delivered Across
            </span>
            <span className="text-black font-semibold block">
              Our Projects.
            </span>
          </h2>

          <p className="text-gray-500 text-sm md:text-base md:text-right max-w-md ml-auto">
            Leverage the power of AI and machine learning to transform your
            business. Our solutions analyze data, uncover insights, and automate
            processes.
          </p>
        </motion.div>

        {/* Content Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* LEFT SIDE */}
          <div className="md:col-span-2 space-y-6">
            {/* Top Wide Image */}
            <motion.div
              variants={itemVariants}
              className="col-span-4 rounded-[2rem] overflow-hidden group border border-gray-100 shadow-sm"
            >
              <img
                src="src/assets/robot_and_human.png"
                alt="AI project"
                className="w-full h-64 md:h-80 lg:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Card 1 */}
              <motion.div
                variants={itemVariants}
                className={`p-8 rounded-[2rem] ${metrics[0].bg} ${metrics[0].text} flex flex-col justify-between border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className="mb-8">
                  <h4 className="text-3xl font-medium">{metrics[0].label}</h4>
                  <p className="text-m mt-3 opacity-70 leading-relaxed max-w-[250px]">
                    {metrics[0].desc}
                  </p>
                </div>
                <span className="text-6xl font-normal tracking-tighter">
                  <AnimatedCounter to={metrics[0].value} suffix={metrics[0].suffix} />
                </span>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={itemVariants}
                className={`relative p-8 rounded-[2rem] ${metrics[1].bg} ${metrics[1].text} flex flex-col justify-between overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className="z-10 relative mb-8">
                  <h4 className="text-3xl font-medium">{metrics[1].label}</h4>
                  <p className="text-m mt-3 opacity-90 leading-relaxed max-w-[250px]">
                    {metrics[1].desc}
                  </p>
                </div>
                <span className="text-6xl font-normal tracking-tighter z-10 relative">
                  <AnimatedCounter to={metrics[1].value} suffix={metrics[1].suffix} />
                </span>

                {/* Background Image with Blue Overlay */}
                <div className="absolute inset-0 z-0 transition-transform duration-700 hover:scale-105">
                  <img
                    src="src/assets/womentech.jpg"
                    alt="Clients"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#29AAE3] opacity-90 mix-blend-multiply"></div>
                </div>
              </motion.div>

              {/* Card 3 (FULL WIDTH) */}
              <motion.div
                variants={itemVariants}
                className={`col-span-2 p-8 rounded-[2rem] ${metrics[2].bg} ${metrics[2].text} flex flex-col md:flex-row justify-between items-start md:items-center shadow-sm hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className="mb-6 md:mb-0">
                  <h4 className="text-3xl font-medium">{metrics[2].label}</h4>
                  <p className="text-m mt-3 text-gray-400 leading-relaxed max-w-sm">
                    {metrics[2].desc}
                  </p>
                </div>
                <span className="text-6xl font-normal tracking-tighter">
                  <AnimatedCounter to={metrics[2].value} suffix={metrics[2].suffix} />
                </span>
              </motion.div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={itemVariants}
            className="h-full rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm group"
          >
            <img
              src="src/assets/robot.jpg"
              className="w-full h-[400px] md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Robot"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}