"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// --- MOCK DATA: OPEN POSITIONS ---
const openPositions = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Global",
  },
  {
    id: 2,
    title: "Frontend Architect (React/Next.js)",
    department: "Engineering",
    type: "Full-time",
    location: "Hybrid",
  },
  {
    id: 3,
    title: "UI/UX Product Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 4,
    title: "Quality Assurance (QA) Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 5,
    title: "Digital Strategist",
    department: "Consulting",
    type: "Contract",
    location: "Hybrid",
  }
];

// --- MOCK DATA: CORE VALUES / BENEFITS (No Icons, Editorial Style) ---
const coreValues = [
  {
    num: "01",
    title: "Work from Anywhere",
    desc: "We operate on a remote-first philosophy. Whether you're at home, a local cafe, or traveling the world, your workspace is wherever you feel most productive."
  },
  {
    num: "02",
    title: "Fast-Paced Growth",
    desc: "Immerse yourself in cutting-edge AI and modern tech stacks. We actively invest in your career with generous annual budgets for courses, books, and global conferences."
  },
  {
    num: "03",
    title: "Radical Autonomy",
    desc: "We don't micromanage. We hire exceptional talent, provide them with clear objectives, and give them the absolute freedom to execute and innovate."
  },
  {
    num: "04",
    title: "Top-Tier Equipment",
    desc: "Do your best work with the best tools. Every team member receives a premium MacBook Pro, high-end monitors, and a complete home-office setup allowance."
  }
];

export default function Careers() {
  return (
    // 1. FULL-WIDTH WRAPPER
    <div className="relative w-full border-t border-gray-200 bg-white font-sans pt-20 pb-24 md:pt-32 overflow-x-hidden">
      
      {/* 2. BACKGROUND WIREFRAME GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center hidden lg:flex">
        <div className="w-full max-w-7xl h-full border-x border-gray-100 relative">
          <div className="absolute left-1/4 top-0 bottom-0 border-l border-gray-100" />
          <div className="absolute left-1/2 top-0 bottom-0 border-l border-gray-100" />
          <div className="absolute left-3/4 top-0 bottom-0 border-l border-gray-100" />
        </div>
      </div>

      {/* 3. MAIN CONTENT WRAPPER */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:border-x md:border-gray-200">
        
        {/* ================= HERO SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 pb-16 md:pb-24 border-b border-gray-200 items-end mt-8 md:mt-0"
        >
          <h1 className="text-[42px] sm:text-[56px] md:text-[64px] lg:text-[72px] leading-[1.1] font-normal text-black tracking-tight py-2">
            <span className="text-gray-400 block mb-2">Build the</span>
            <span className="block">Digital future.</span>
          </h1>

          <p className="text-gray-500 text-[15px] md:text-lg md:text-right max-w-md ml-auto leading-relaxed mb-3">
            Join a team of forward-thinkers, engineers, and designers at Netxium. We are always looking for passionate people to help us shape the next generation of AI and software.
          </p>
        </motion.div>

        {/* ================= CULTURE & BENEFITS (EDITORIAL NUMBERED LIST) ================= */}
        <div className="py-16 md:py-24 border-b border-gray-200">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-black tracking-tight leading-[1.1] mb-4">
                Why join Netxium?
              </h2>
              <p className="text-gray-500 text-[15px] md:text-lg max-w-lg leading-relaxed">
                We build an environment where top talent can thrive, create, and disrupt without boundaries. Here is what you get.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group pl-6 md:pl-10 border-l border-gray-200 hover:border-black transition-colors duration-500"
              >
                {/* Big Background Number */}
                <span className="absolute -top-10 md:-top-12 left-0 text-[80px] md:text-[100px] leading-none font-light text-gray-100 group-hover:text-[#29AAE3]/10 transition-colors duration-500 z-0 pointer-events-none">
                  {value.num}
                </span>
                
                {/* Content */}
                <div className="relative z-10 mt-6 md:mt-8">
                  <h3 className="text-2xl md:text-3xl font-medium text-black mb-4 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-sm">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= OPEN POSITIONS LIST ================= */}
        <div className="py-16 md:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-black tracking-tight">Open Positions</h2>
            <span className="px-4 py-2 rounded-full bg-gray-100 text-black text-xs font-bold tracking-widest uppercase">
              {openPositions.length} Roles Available
            </span>
          </motion.div>

          <div className="flex flex-col border-t border-gray-200">
            {openPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to={`/careers/${job.id}`} 
                  className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  {/* Job Title & Dept */}
                  <div className="flex flex-col gap-3 mb-4 md:mb-0">
                    <h3 className="text-2xl md:text-3xl font-medium text-black group-hover:text-[#29AAE3] transition-colors tracking-tight">
                      {job.title}
                    </h3>
                    <span className="text-[11px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {job.department}
                    </span>
                  </div>

                  {/* Meta Info & Button */}
                  <div className="flex items-center gap-6 md:gap-10 mt-4 md:mt-0 pt-4 md:pt-0 border-t border-gray-100 md:border-none">
                    <div className="flex flex-col gap-1 text-sm md:text-[15px] text-gray-500 font-medium">
                      <span>{job.location}</span>
                      <span>{job.type}</span>
                    </div>
                    
                    {/* Animated Arrow Button */}
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300 shadow-sm ml-auto md:ml-0">
                      <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= GENERAL APPLICATION CTA ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-[#1A1A1A] rounded-3xl md:rounded-[3rem] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-xl"
        >
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight leading-[1.1]">
              Don't see a perfect fit?
            </h3>
            <p className="text-gray-400 text-[15px] md:text-lg mb-10 leading-relaxed">
              We are always on the lookout for talented developers, designers, and strategists. Send us your resume and portfolio, and we’ll reach out if something opens up.
            </p>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(255,255,255,0.15)] active:scale-[0.98]">
              <span className="relative flex items-center gap-2 transition-colors duration-300">
                <span>Submit General Application</span>
                <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-all duration-300" />
              </span>
            </button>
          </div>
        </motion.div>

      </section>
    </div>
  );
}