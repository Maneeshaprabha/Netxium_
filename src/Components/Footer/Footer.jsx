"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from './../ContactUs/Contact';

export default function Footer() {
  // --- TEXT SWAPPER LOGIC ---
  const words = ["design", "develop", "build", "scale"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500); // Swaps every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative w-full bg-[#0a0a0a] text-white overflow-hidden pt-24 md:pt-40 font-sans">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- ANIMATED HEADLINE --- */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-5xl md:text-[80px] lg:text-[100px] leading-[1.1] tracking-tight font-medium flex flex-col">
            
            {/* Top row with the animated word */}
            <div className="flex flex-wrap items-center gap-3 md:gap-6 text-white">
              <span>Let's</span>
              {/* Fixed height and min-width container prevents layout jumping */}
              <div className="relative inline-block h-[1.2em] min-w-[160px] md:min-w-[280px] lg:min-w-[350px] overflow-hidden text-white">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={words[index]}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Smooth Apple-like spring curve
                    className="absolute left-0 block font-semibold"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom row */}
            <span className="text-neutral-500 block mt-2 md:mt-4">
              incredible work together.
            </span>
          </h2>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* Email */}
          <div>
            <span className="text-neutral-500 text-sm mb-3 block font-medium">Email</span>
            <a 
              href="mailto:hello@netxium.design" 
              className="text-lg md:text-xl font-medium hover:text-white/80 transition-colors duration-300"
            >
              hello@netxium.design
            </a>
          </div>

          {/* Call Me */}
          <div>
            <span className="text-neutral-500 text-sm mb-3 block font-medium">Call Me</span>
            <a 
              href="/contact" 
              className="text-lg md:text-xl font-medium hover:text-white/80 transition-colors duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Social */}
          <div>
            <span className="text-neutral-500 text-sm mb-3 block font-medium">Social</span>
            <div className="flex flex-wrap items-center gap-3">
              {/* X (Twitter) Pill */}
              <a href="/social/x" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
                <span className="text-sm font-bold tracking-tight">1,214</span>
              </a>
              
              {/* Other Social Circles */}
              {['Ig', 'Dr', 'Be', 'In'].map((platform, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-9 h-9 bg-neutral-800 text-white rounded-full flex items-center justify-center text-xs font-bold hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-neutral-800 mb-12" />

        {/* Bottom Links & Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start mb-20 md:mb-0">
          
          {/* Menu */}
          <div>
            <span className="text-neutral-500 text-sm mb-6 block font-medium">Menu</span>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8 w-fit">
              <li><a href="/" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/services" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="/about" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <span className="text-neutral-500 text-sm mb-6 block font-medium">Legal</span>
            <ul className="flex flex-col gap-4">
              <li><a href="/term-of-service" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Terms of service</a></li>
              <li><a href="/privacy-policy" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="md:text-right mt-auto pt-8 md:pt-0">
            <span className="text-neutral-500 text-sm font-medium">
              © 2026 Netxium
            </span>
          </div>

        </div>
      </div>

      {/* Massive Blurred Background Text */}
         <div className="relative w-full flex justify-center mt-10 md:-mt-10 overflow-hidden select-none pointer-events-none">

        <motion.h1

          initial={{ opacity: 0, y: 50 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 1, ease: "easeOut" }}

          className="text-[22vw] leading-none font-bold text-center tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 blur-[2px] md:blur-[4px] opacity-80"

        >

          NETXIUM

        </motion.h1>

      </div>

    </footer>
  );
}