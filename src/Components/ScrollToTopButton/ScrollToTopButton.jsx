"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll කරනකොට Button එක පෙන්වන එක පාලනය කිරීම
  useEffect(() => {
    const toggleVisibility = () => {
      // Pixels 300ක් පල්ලෙහාට ගියාම Button එක පෙන්වනවා
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // උඩටම Scroll වෙන Function එක
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
          onClick={scrollToTop}
          // දකුණු පැත්තේ යට කෙළවරේ Button එක තියෙන තැන
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60] p-3 md:p-4 rounded-full bg-black/80 text-white backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-[#29AAE3] hover:border-[#29AAE3] transition-colors duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp 
            size={20} 
            strokeWidth={2.5} 
            className="group-hover:-translate-y-1 transition-transform duration-300" 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}