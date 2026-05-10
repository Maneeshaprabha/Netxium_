"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Creative() {
  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    // Top border to maintain the full-width wireframe grid
    <div className="w-full border-t border-gray-200 bg-white">
      {/* Main container with side borders */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-x border-gray-200 font-sans flex flex-col lg:flex-row gap-12 lg:gap-20 items-center overflow-hidden">
        {/* LEFT COLUMN: Image */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="w-full lg:w-1/2 flex items-center justify-center"
>
  <img
    src="src/assets/creative.png"
    alt="Futuristic Robot Profile"
    className="w-full max-w-[500px] h-auto object-contain transition-transform duration-700 group-hover:scale-105"
  />
</motion.div>

        {/* RIGHT COLUMN: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          {/* Subtitle */}
          <motion.span
            variants={textVariants}
            className="font-mono text-sm tracking-widest uppercase mb-6 block tracking-wide"
          >
            // About us
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={textVariants}
            className="text-5xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold tracking-tight mb-8"
          >
            <h2 className=" text-gray-400 "> Where Technology</h2>
            <span className=""> Meets Human Creativity.</span>
          </motion.h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
            <motion.p variants={textVariants}>
              At Netxium, we build the tools businesses need to lead. From AI
              and machine learning to custom software and UI/UX design, we
              bridge the gap between complex technology and practical business
              solutions.{" "}
            </motion.p>

            <motion.p variants={textVariants}>
              We don't do "one-size-fits-all." We craft smart, scalable systems
              that adapt to your specific needs. Every project we deliver is
              built with precision, ensuring your tech stack evolves as fast as
              your business does.{" "}
            </motion.p>

            <motion.p variants={textVariants}>
              Whether you’re a startup or an enterprise, our mission is simple:
              to help you automate operations and improve user experiences. We
              transform your challenges into intelligent digital products that
              drive measurable growth.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
