"use client";
import React from "react";
import { motion } from "framer-motion";

export default function FutureTech() {
  return (
    // Outer wrapper to maintain the wireframe grid
    <div className="w-full bg-white">
      <section className="max-w-7xl mx-auto px-6 py-20 border-x border-gray-200 font-sans">
        
        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full min-h-[500px] md:min-h-[600px] rounded-[2rem] overflow-hidden shadow-sm border border-gray-100"
        >
          {/* Background Image */}
          <img
            src="../../src/assets/FutureTech.png" // Replace with your actual image path
            alt="Woman working with futuristic technology"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Gradient Overlay (Crucial for text readability) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

          {/* Content Wrapper */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 py-16 absolute inset-y-0 left-0">
            
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-[56px] font-normal text-white leading-[1.1] tracking-tight mb-6 max-w-2xl"
            >
              
              

                <h2 className="text-5xl md:text-[80px] leading-[1.05] font-normal tracking-tight max-w-4xl">
            Investing In Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">
             Technologies.
            </span>
          </h2>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base md:text-lg text-gray-300 leading-relaxed mb-10 max-w-xl"
            >
              Leverage the power of AI and machine learning to transform your
              business. Our solutions analyze data, uncover insights, and automate
              processes to keep you ahead of the curve.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* Glassmorphism Button matching the screenshot */}
              <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-2 py-2 pr-6 rounded-full transition-all group w-fit">
                <span className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-black shadow-sm group-hover:scale-105 transition-transform">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path d="M7 17L17 7M17 7H9M17 7V15" />
                  </svg>
                </span>
                <span className="text-white font-medium tracking-wide text-sm md:text-base">
                  Work with me
                </span>
              </button>
            </motion.div>
            
          </div>
        </motion.div>
        
      </section>
    </div>
  );
}