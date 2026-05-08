"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function FloatingContact() {
  // 1. State to control the popup modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Fixed positioning wrapper for the button */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        
        {/* Floating Button */}
        <motion.button 
          onClick={() => setIsModalOpen(true)} // 2. Opens the modal on click
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 25, 
            delay: 0.5 
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-5 rounded-full bg-black/80 pl-8 pr-2 py-2 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer"
        >
          {/* Text Content */}
          <div className="flex flex-col text-left py-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-0.5">
              Speak to me
            </span>
            <span className="text-sm font-medium text-white">
              Email or book a call
            </span>
          </div>

          {/* Icon Container */}
          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-black group-hover:bg-[#0D4DB1] group-hover:text-white transition-colors duration-300 shadow-inner">
            <Mail size={20} />
          </div>
        </motion.button>
      </div>

      {/* 3. THE CONTACT POP-UP MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-sans">
            
            {/* Dark Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)} // Closes modal if you click outside
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Content Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <h3 className="text-3xl font-medium text-white tracking-tight mb-2">Let's talk.</h3>
              <p className="text-neutral-400 mb-8">Fill out the form and I'll get back to you within 24 hours.</p>

              {/* Contact Form */}
              <form className="flex flex-col gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                />
                <textarea 
                  placeholder="Tell me about your project..." 
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"
                ></textarea>

                {/* Submit Button */}
                <button 
                  type="button"
                  className="w-full mt-4 bg-white text-black font-medium py-4 rounded-xl hover:bg-gray-200 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}