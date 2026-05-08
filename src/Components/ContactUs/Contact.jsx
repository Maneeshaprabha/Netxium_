"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Facebook, Linkedin, Youtube } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative w-full bg-white font-sans overflow-hidden border-t border-gray-200">
      
      {/* --- BACKGROUND WIREFRAME GRID --- */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl h-full border-x border-gray-100 relative">
          <div className="absolute left-1/4 top-0 bottom-0 border-l border-gray-100" />
          <div className="absolute left-1/2 top-0 bottom-0 border-l border-gray-100" />
          <div className="absolute left-3/4 top-0 bottom-0 border-l border-gray-100" />
        </div>
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: Text & Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <h2 className="text-[44px] md:text-[56px] lg:text-[64px] font-normal leading-[1.05] text-black tracking-tight mb-8">
            We are always ready to help you and answer your questions
          </h2>
          
          <p className="text-[15px] md:text-base text-gray-500 leading-relaxed mb-16 max-w-md">
            Pacific hake false trevally queen parrotfish black prickleback 
            mosshead warbonnet sweeper! Greenling sleeper.
          </p>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            
            {/* Call Center */}
            <div>
              <h4 className="text-black font-semibold text-lg mb-4 tracking-tight">Call Center</h4>
              <div className="space-y-2 text-[15px] text-gray-600">
                <p>800 100 975 20 34</p>
                <p>+ (123) 1800-234-5678</p>
              </div>
            </div>

            {/* Our Location */}
            <div>
              <h4 className="text-black font-semibold text-lg mb-4 tracking-tight">Our Location</h4>
              <div className="space-y-2 text-[15px] text-gray-600">
                <p>welimada 90216</p>
                <p>No 04, Nugathalawa</p>
              </div>
            </div>

            {/* Email */}
            <div>
              <h4 className="text-black font-semibold text-lg mb-4 tracking-tight">Email</h4>
              <div className="text-[15px] text-gray-600">
                <p> netxium@mail.com</p>
              </div>
            </div>

            {/* Social Network */}
            <div>
              <h4 className="text-black font-semibold text-lg mb-4 tracking-tight">Social network</h4>
              <div className="flex items-center gap-5 text-black">
                <a href="#" className="hover:text-gray-500 transition-colors">
                  <Facebook size={18} strokeWidth={2} />
                </a>
                <a href="#" className="hover:text-gray-500 transition-colors font-medium text-lg leading-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-500 transition-colors">
                  <Linkedin size={18} strokeWidth={2} />
                </a>
                <a href="#" className="hover:text-gray-500 transition-colors">
                  <Youtube size={20} strokeWidth={2} />
                </a>
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT COLUMN: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <div className="bg-[#F4F5F7] rounded-[2.5rem] p-10 md:p-14 w-full relative z-10 shadow-sm border border-gray-100">
            <h3 className="text-3xl font-normal text-black tracking-tight mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-500 text-[15px] mb-12 max-w-sm">
              Define your goals and identify areas where AI can add value to your business
            </p>

            <form className="flex flex-col gap-8">
              {/* Minimalist Input Fields */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Full name" 
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div className="relative mt-2 mb-4">
                <textarea 
                  placeholder="Message" 
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button 
                  type="submit" 
                  className="inline-flex items-center gap-3 bg-[#333333] text-white px-8 py-4 rounded-full text-[14px] font-semibold hover:bg-black transition-all active:scale-[0.98] group"
                >
                  <ChevronRight size={18} strokeWidth={3} className="text-white group-hover:translate-x-1 transition-transform" />
                  Send a message
                </button>
              </div>
            </form>
          </div>
        </motion.div>

      </section>
    </div>
  );
}