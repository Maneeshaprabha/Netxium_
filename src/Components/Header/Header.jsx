// import { useEffect, useState } from "react";
// import { nav as navData } from "../data/data";

// export default function Header() {

//   // Keep nav in state so active change re-renders
//   const [nav, setNav] = useState(navData);

//   useEffect(() => {
//     const hash = window.location.hash;

//     if (hash) {
//       const element = document.querySelector(hash);
//       if (element) {
//         setTimeout(() => {
//           element.scrollIntoView({ behavior: "smooth" });
//         }, 100);
//       }
//     }
//   }, []);   // no pathname needed

//   const handleNavClick = (index) => {
//     const updated = nav.map((item, i) => ({
//       ...item,
//       active: i === index,
//     }));

//     setNav(updated);
//   };

//   return (
// <header className="fixed top-0 left-0 w-full z-50 bg-[#F2F6FF]/80 backdrop-blur-md">
//   <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-16">

//     {/* Logo */}
//     <img
//       src="/src/assets/nexuim.png"
//       alt="logo"
//       className="w-24 h-24 object-contain"
//     />

//     {/* Navigation */}
//     <nav className="hidden md:flex mr-20">
//       <ul className="flex items-center space-x-4">
//         {nav.map((item, index) => (
//           <li key={index}>
//             <a
//               href={item.link}
//               onClick={() => handleNavClick(index)}
//               className={`px-4  py-1.5 rounded-full text-m font-normal transition ${
//                 item.active
//                   ? "bg-black text-white"
//                   : "text-gray-900 hover:bg-[#e8efff] hover:text-black"
//               }`}
//             >
//               {item.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>

//   </div>
// </header>

//   );
// }"use client";












"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { nav as navData } from "../data/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (index) => {
    setActiveIndex(index);
  };

  const isCompact = isScrolled && !isHovered;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex justify-center w-[95%] max-w-[1200px]">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        layout 
        initial={{ borderRadius: 9999 }}
        animate={{
          width: isCompact ? "100px" : "100%",
          padding: isCompact ? "0.75rem" : "0.5rem",
          backgroundColor: isCompact ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="flex items-center backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden rounded-full"
      >
        <AnimatePresence mode="wait">
          {!isCompact ? (
            /* --- FULL NAVBAR STATE --- */
            <motion.div
              key="full-nav"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              className="flex items-center justify-between w-full px-2"
            >
              {/* Left Side: Profile & Status */}
              <div className="flex items-center gap-3 pl-2">
                
                {/* --- LOGO UPDATED HERE --- */}
                <img 
                  src="../src/assets/NETXIUM_LBOO.png" 
                  alt="Netxium Logo" 
                  className="h-4 w-auto object-contain" 
                />
                {/* ----------------------- */}

                <span className="font-medium tracking-tight text-sm text-black whitespace-nowrap">
                  Netxium
                </span>
                <div className="hidden md:flex items-center gap-1.5 ml-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                    Available
                  </span>
                </div>
              </div>

              {/* Center Nav Links */}
              <nav className="hidden md:flex mr-20">
                <ul className="flex items-center space-x-4">
                  {navData.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        onClick={() => handleNavClick(index)}
                        className={`px-4 py-1.5 rounded-full text-sm font-normal transition ${
                          activeIndex === index
                            ? "bg-black text-white"
                            : "text-black hover:bg-gray-200"
                        }`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Right Side: CTA Button */}
              <button className="rounded-full bg-black px-6 py-2.5 text-sm font-bold text-white hover:bg-gray-900 transition-transform active:scale-95 whitespace-nowrap">
                Book a call with me
              </button>
            </motion.div>
          ) : (
            /* --- COMPACT SCROLLED STATE (3 DOTS) --- */
            <motion.div
              key="compact-nav"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center gap-1.5 w-full h-[38px] cursor-pointer"
            >
              {/* Animated Dots (Wave Effect) */}
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2, 
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-black"
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}