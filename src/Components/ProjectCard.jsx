"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import reachMoreImage from '../assets/reachmore1.webp';

export default function ProjectSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-40 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

      {/* 1. ReachMore Adz Card (NOW WITH IMAGE) */}
      <ProjectCard 
        title="ReachMore Adz" 
        category="Marketing Agency" 
        bgColor="bg-[#0f172a]" 
        // Replace this URL with your actual image path or import!
        imageUrl={reachMoreImage}
        link="https://reachmoreadz.site/"
      />

      {/* 2. Kora Card (Still using text placeholder) */}
      <ProjectCard 
        title="Kora" 
        category="Consulting Site" 
        bgColor="bg-[#1e293b]"
        heroText="Your growth partner for companies ready to scale."
        link="#"
      />

      {/* 3. KYMA Card */}
      {/* <ProjectCard 
        title="KYMA" 
        category="AI Agency" 
        bgColor="bg-[#020617]"
        heroText="SCALE YOUR OPERATIONS [10X] WITHOUT HIRING [100] PEOPLE."
        link="#"
      /> */}

      {/* 4. Mugen Studio Card */}
      <ProjectCard 
        title="Mugen Studio" 
        category="Creative Agency" 
        bgColor="bg-[#171717]"
        heroText="MUGEN STUDIO"
        link="#"
      />

      {/* 5. Large "Built for Real Performance" Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ y: -8 }}
       className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-neutral-900 group cursor-pointer border border-white/5 shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 z-10" />
        <div className="relative z-20 h-full w-full p-10 flex flex-col justify-end">
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter text-white">
            Built for <br /> Real Performance
          </h2>
          <div className="mt-8 self-end">
             <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center text-black group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-xl">
               <Play fill="currentColor" size={24} className="ml-1" />
             </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}

// Internal Card Component for reuse (Updated for Images!)
function ProjectCard({ title, category, bgColor, heroText, link, imageUrl }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {/* Removed p-8 from this wrapper so the image can touch the edges */}
        <div className={`relative aspect-[4/3] overflow-hidden rounded-[2.5rem] ${bgColor} border border-white/5`}>

          {/* Conditional Rendering: Show Image if provided, else show Text Placeholder */}
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={`${title} Preview`}
              className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="h-full w-full p-8 flex items-center justify-center text-center">
              <span className="text-2xl md:text-3xl font-bold uppercase tracking-tighter opacity-40 max-w-[80%] leading-tight text-white">
                {heroText}
              </span>
            </div>
          )}

          {/* Dark overlay specifically for the hover state so the button stands out over images */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-10">
            <div className="rounded-full bg-white/10 px-6 py-3 backdrop-blur-md border border-white/20 text-white font-medium flex items-center gap-2 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              View Project <ArrowUpRight size={18} />
            </div>
          </div>

          {/* Bottom Right Launch Button */}
          <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
            <button className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-[0_10px_20px_rgba(37,99,235,0.3)]">
              <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
              LaunchNow
            </button>
          </div>
        </div>
      </a>

      {/* Text Below Card */}
      <div className="mt-6 flex justify-between items-start px-2">
        <div>
          <h3 className="text-2xl font-semibold text-black tracking-tight">{title}</h3>
          <p className="text-neutral-500 font-medium mt-1">{category}</p>
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="h-10 w-10 rounded-full border border-neutral-300 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-300"
        >
          <ArrowUpRight size={18} />
        </a>
      </div>
    </motion.div>
  );
}