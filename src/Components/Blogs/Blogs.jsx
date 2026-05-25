"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// --- Mock Blog Data ---
const featuredPost = {
  id: 1,
  title: "The Future of AI in Enterprise Workflows: A 2026 Perspective",
  excerpt: "Discover how intelligent automation and large language models are fundamentally restructuring how modern agencies and enterprises handle complex daily operations.",
  category: "Artificial Intelligence",
  date: "May 24, 2026",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop", 
};

const allBlogPosts = [
  {
    id: 2, title: "Next-Gen Spatial Computing", excerpt: "Why traditional 2D UI principles fall short in AR/VR environments and how to adapt your design system.", category: "UI/UX Design", date: "May 18, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3, title: "Scaling Next.js for High Traffic", excerpt: "A deep dive into caching strategies, edge computing, and database optimization for million-user spikes.", category: "Engineering", date: "May 12, 2026", readTime: "12 min read", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4, title: "The Micro-Interaction Audit", excerpt: "How tiny, almost invisible animations can drastically improve user retention and perceived performance.", category: "Design Systems", date: "May 05, 2026", readTime: "6 min read", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5, title: "Death of the Traditional Dashboard", excerpt: "Moving from static charts to generative, conversational data interfaces that actually answer questions.", category: "Product Strategy", date: "April 28, 2026", readTime: "7 min read", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6, title: "Serverless vs Edge in 2026", excerpt: "Analyzing the cost-to-performance ratio of modern deployment architectures for global applications.", category: "Cloud Architecture", date: "April 20, 2026", readTime: "9 min read", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 7, title: "Mastering Framer Motion", excerpt: "A comprehensive guide to orchestrating complex, performant layout animations without sacrificing load times.", category: "Frontend Dev", date: "April 15, 2026", readTime: "11 min read", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
  }
];

export default function BlogGridStyle() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    // 1. FULL-WIDTH WRAPPER: Top border & white background
    <div className="relative w-full border-t border-gray-200 bg-white font-sans pt-20 pb-24 md:pt-32">
      
      {/* 2. BACKGROUND WIREFRAME GRID (Matches your Projects section) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center hidden lg:flex">
        <div className="w-full max-w-7xl h-full border-x border-gray-100 relative">
          <div className="absolute left-1/4 top-0 bottom-0 border-l border-gray-100" />
          <div className="absolute left-1/2 top-0 bottom-0 border-l border-gray-100" />
          <div className="absolute left-3/4 top-0 bottom-0 border-l border-gray-100" />
        </div>
      </div>

      {/* 3. MAIN CONTENT WRAPPER: Vertical side lines constrained to max-w-7xl */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:border-x md:border-gray-200 overflow-hidden">
        
        {/* --- Header Section (Flush against bottom grid line) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 pb-12 mb-12 items-end border-b border-gray-200"
        >
          <h2 className="text-4xl md:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight">
           
            <span className="text-gray-400 font-normal block mb-2">
              Ideas that shape
            </span>
            <span className="text-black font-normal block">
              The digital future.
            </span>
          </h2>

          <p className="text-gray-500 text-[15px] md:text-lg md:text-right max-w-md ml-auto leading-relaxed mb-2">
            Thoughts, technical deep dives, and industry perspectives from the team building the next generation of software and AI.
          </p>
        </motion.div>

   <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <Link to={`/blog/${featuredPost.id}`} className="group block relative w-full h-[500px] md:h-[650px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gray-100">
            <img src={featuredPost.image} alt={featuredPost.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
            
            {/* Soft dark gradient just at the bottom */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Floating Glassmorphic Content Card */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-6 md:p-10 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-white text-black text-[10px] md:text-xs font-bold tracking-widest uppercase">
                  {featuredPost.category}
                </span>
                <span className="text-white/80 text-xs md:text-sm font-medium">{featuredPost.readTime}</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.1] tracking-tight mb-4">
                {featuredPost.title}
              </h2>
              
              <p className="text-gray-300 text-sm md:text-base leading-relaxed hidden md:block">
                {featuredPost.excerpt}
              </p>
            </div>
          </Link>
        </motion.div>

        {/* --- DYNAMIC BLOG GRID (Bento Cards) --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {allBlogPosts.slice(0, visibleCount).map((post) => (
              <motion.div 
                key={post.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Link to={`/blog/${post.id}`} className="group flex flex-col h-full bg-white border border-gray-200 rounded-[2rem] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  
                  {/* Image Container (Strict Border Bottom) */}
                  <div className="relative w-full h-56 border-b border-gray-200 overflow-hidden bg-gray-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
                      <span className="text-[#29AAE3]">{post.category}</span>
                    </div>

                    <h4 className="text-xl md:text-2xl font-medium leading-[1.2] tracking-tight text-black mb-4 group-hover:text-[#29AAE3] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      {/* Animated Arrow Button */}
                      <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                        <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- PREMIUM LOAD MORE BUTTON --- */}
        {visibleCount < allBlogPosts.length && (
          <motion.div 
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 md:mt-16 flex justify-center"
          >
            <button 
              onClick={handleLoadMore}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] active:scale-[0.98]"
            >
              <div className="absolute inset-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22,1,0.36,1]" />
              <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                <span>Load More Articles</span>
                <ArrowRight size={18} strokeWidth={2.5} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </span>
            </button>
          </motion.div>
        )}

      </section>
    </div>
  );
}