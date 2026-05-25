"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import humanandrobot from "../../assets/robot_and_human.webp";
import womentechImage from "../../assets/womentech.webp";
import robotImage from "../../assets/robot.webp";

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
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center hidden md:flex">
        <div className="w-full max-w-7xl h-full border-x border-gray-100 relative"></div>
      </div>

      {/* 2. MAIN CONTENT WRAPPER */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 border-transparent md:border-gray-200 md:border-x overflow-hidden font-sans">
        
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 md:gap-12 pb-8 mb-8 md:pb-12 md:mb-12 items-center border-b border-gray-200"
        >
          <h2 className="text-4xl sm:text-5xl md:text-[64px] leading-[1.05] md:leading-[0.9] tracking-tight font-sans">
            <span className="text-gray-400 font-medium block md:inline">
              Impact Delivered Across{" "}
            </span>
            <span className="text-black font-semibold block">
              Our Projects.
            </span>
          </h2>

          <p className="text-gray-500 text-[15px] sm:text-base md:text-right max-w-md md:ml-auto leading-relaxed">
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
          className="grid md:grid-cols-3 gap-4 sm:gap-6"
        >
          {/* LEFT SIDE */}
          <div className="md:col-span-2 space-y-4 sm:space-y-6">
            {/* Top Wide Image */}
            <motion.div
              variants={itemVariants}
              className="col-span-1 sm:col-span-4 rounded-3xl md:rounded-[2rem] overflow-hidden group border border-gray-100 shadow-sm"
            >
              <img
                src={humanandrobot}
                alt="AI project"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* Metrics grid - Changed to grid-cols-1 on mobile, sm:grid-cols-2 on tablet/desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Card 1 */}
              <motion.div
                variants={itemVariants}
                className={`p-6 md:p-8 rounded-3xl md:rounded-[2rem] ${metrics[0].bg} ${metrics[0].text} flex flex-col justify-between border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className="mb-6 md:mb-8">
                  <h4 className="text-2xl md:text-3xl font-medium">{metrics[0].label}</h4>
                  <p className="text-sm md:text-base mt-2 md:mt-3 opacity-70 leading-relaxed max-w-[250px]">
                    {metrics[0].desc}
                  </p>
                </div>
                <span className="text-5xl md:text-6xl font-bold tracking-tighter">
                  <AnimatedCounter to={metrics[0].value} suffix={metrics[0].suffix} />
                </span>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={itemVariants}
                className={`relative p-6 md:p-8 rounded-3xl md:rounded-[2rem] ${metrics[1].bg} ${metrics[1].text} flex flex-col justify-between overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className="z-10 relative mb-6 md:mb-8">
                  <h4 className="text-2xl md:text-3xl font-medium">{metrics[1].label}</h4>
                  <p className="text-sm md:text-base mt-2 md:mt-3 opacity-90 leading-relaxed max-w-[250px]">
                    {metrics[1].desc}
                  </p>
                </div>
                <span className="text-5xl md:text-6xl font-bold tracking-tighter z-10 relative">
                  <AnimatedCounter to={metrics[1].value} suffix={metrics[1].suffix} />
                </span>

                {/* Background Image with Blue Overlay */}
                <div className="absolute inset-0 z-0 transition-transform duration-700 hover:scale-105">
                  <img
                    src={womentechImage}
                    alt="Clients"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#29AAE3] opacity-90 mix-blend-multiply"></div>
                </div>
              </motion.div>

              {/* Card 3 (FULL WIDTH ON ALL SCREENS) */}
              <motion.div
                variants={itemVariants}
                className={`col-span-1 sm:col-span-2 p-6 md:p-8 rounded-3xl md:rounded-[2rem] ${metrics[2].bg} ${metrics[2].text} flex flex-col md:flex-row justify-between items-start md:items-center shadow-sm hover:-translate-y-1 transition-transform duration-300`}
              >
                <div className="mb-4 md:mb-0">
                  <h4 className="text-2xl md:text-3xl font-medium">{metrics[2].label}</h4>
                  <p className="text-sm md:text-base mt-2 md:mt-3 text-gray-400 leading-relaxed max-w-sm">
                    {metrics[2].desc}
                  </p>
                </div>
                <span className="text-5xl md:text-6xl font-bold tracking-tighter">
                  <AnimatedCounter to={metrics[2].value} suffix={metrics[2].suffix} />
                </span>
              </motion.div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={itemVariants}
            className="h-full rounded-3xl md:rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm group"
          >
            <img
              src={robotImage}
              className="w-full h-[300px] sm:h-[400px] md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Robot"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}