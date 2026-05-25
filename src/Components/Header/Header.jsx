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







import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react'; 
import { nav as navData } from "../data/data";
import logo from "../../assets/NETXIUM_LBOO.webp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Hover state restored
  const [isMobileOpen, setIsMobileOpen] = useState(false); 
  
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile menu if screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileOpen) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileOpen]);

  // RESTORED: Compact mode now respects the hover state
  const isCompact = isScrolled && !isHovered && !isMobileOpen;

  const textColor = isScrolled ? "text-white" : "text-black";
  
  // Mobile Animation Variants
  const menuVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
  <>
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex justify-center w-[95%] max-w-[1200px]">
      <motion.div
        // Restored mouse events for desktop hover expansion
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        layout
        initial={{ borderRadius: 9999 }}
        animate={{
          width: isCompact ? "100px" : "100%",
          padding: isCompact ? "0.75rem" : "0.5rem",
          backgroundColor: isScrolled
            ? "rgba(10, 10, 10, 0.75)" 
            : "rgba(255, 255, 255, 0.4)", 
          borderColor: isScrolled ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.4)"
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="flex items-center backdrop-blur-xl backdrop-saturate-[150%] border shadow-xl overflow-hidden rounded-full"
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
                <img
                  src={logo}
                  alt="Netxium Logo"
                  className={`h-4 w-auto object-contain transition-all duration-300 ${isScrolled ? 'invert brightness-0' : ''}`}
                />

                <span className={`font-medium tracking-tight text-sm whitespace-nowrap transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-black'}`}>
                  Netxium
                </span>

                <div className="hidden md:flex items-center gap-1.5 ml-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                    Available
                  </span>
                </div>
              </div>

              {/* Center Nav Links */}
              <nav className="hidden md:flex mr-20">
                <ul className="flex items-center space-x-4">
                  {navData.map((item, index) => {
                    const isActive = pathname === item.link;
                  const activeClass = isScrolled 
                      ? "bg-white text-black shadow-md" // Scrolled + Active
                      : "bg-black text-white shadow-md"; 
                   const inactiveClass = isScrolled 
                      ? "text-white hover:bg-neutral-800" // Scrolled + Inactive
                      : "text-black hover:bg-gray-200";

                    return (
                      <li key={index}>
                        <Link
                          to={item.link}
                          className={`px-4 py-1.5 rounded-full text-sm font-normal transition-all duration-300 ${isActive ? activeClass : inactiveClass}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Right Side: Desktop CTA & Mobile Toggle */}
              <div className="flex items-center gap-2">
            <a   href="https://cal.com/netxium-solution-0h0glw/software-discussion" className={`hidden md:block rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 active:scale-95 whitespace-nowrap shadow-lg ${
                isScrolled 
                  ? "bg-white text-black hover:bg-gray-200" 
                  : "bg-black text-white hover:bg-gray-900"
              }`}>
                Book a call with us
              </a>
                
                {/* 3 ANIMATED DOTS MENU TOGGLE (MOBILE ONLY AT TOP) */}
                <button 
                  onClick={() => setIsMobileOpen(true)}
                  className="md:hidden p-2 -mr-1 rounded-full hover:bg-black/5 transition-colors flex items-center gap-1 w-10 h-10 justify-center"
                >
                  {[0, 1, 2].map((index) => (
                    <motion.div
                      key={index}
                      animate={{ opacity: [0.5, 1, 0.5], scale: [0.85, 1.15, 0.85] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut",
                      }}
                      className={`w-1.5 h-1.5 rounded-full ${isScrolled ? 'bg-white' : 'bg-black'}`}
                    />
                  ))}
                </button>
              </div>
            </motion.div>
          ) : (
            /* --- COMPACT SCROLLED STATE (3 DOTS) --- */
            <motion.div
              key="compact-nav"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              // Click handler added for mobile devices where hover isn't present
              onClick={() => {
                if (window.innerWidth < 768) {
                  setIsMobileOpen(true);
                }
              }}
              className="flex items-center justify-center gap-1.5 w-full h-[38px] cursor-pointer"
            >
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
                  className={`w-1.5 h-1.5 rounded-full ${isScrolled ? 'bg-white' : 'bg-black'}`}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
   
    {/* --- POPUP MENU WITH PURE GLASS --- */}
    <AnimatePresence>
      {isMobileOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 z-[65] bg-black/30 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-4 left-4 right-4 md:w-[400px] md:left-1/2 md:-translate-x-1/2 md:right-auto z-[70] bg-white/60 backdrop-blur-3xl backdrop-saturate-[200%] shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-[32px] p-6 flex flex-col font-sans border border-white/60"
          >
            {/* Profile Header */}
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-white/60 shadow-sm">
                  <img src={logo} alt="Netxium Logo" className="w-5 h-5 object-contain" />
                </div>
                <span className="text-[16px] font-semibold text-gray-900 tracking-tight">Netxium</span>
              </div>
              
              {/* Close Button */}
              <button 
                onClick={() => setIsMobileOpen(false)}
                className="p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors border border-white/30"
              >
                <X size={18} className="text-gray-700" strokeWidth={2.5} />
              </button>
            </div>

            {/* Navigation Links */}
            <motion.div 
              variants={menuVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-5 py-3"
            >
              {navData.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Link
                    to={item.link}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-[19px] font-medium text-gray-900 hover:text-black transition-colors tracking-tight block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6"
            >
              <a 
                 href="https://cal.com/netxium-solution-0h0glw/software-discussion"
                className="w-full bg-black backdrop-blur-md text-white border border-white/80 py-3.5 rounded-2xl text-[15px] font-semibold hover:bg-white active:scale-[0.98] transition-all shadow-sm"
              >
                Book a call with us
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </>
  );
}