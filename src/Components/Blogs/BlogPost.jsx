"use client";
import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Twitter, Linkedin, Link2, Calendar, Clock } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";

// --- FULL BLOG DATABASE ---
// This acts as your database. /blog/1 loads the first item, /blog/2 loads the second, etc.
const allBlogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Workflows: A 2026 Perspective",
    category: "Artificial Intelligence",
    date: "May 24, 2026",
    readTime: "8 min read",
    author: {
      name: "Elena Rodriguez",
      role: "Head of AI Strategy",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
    },
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    content: (
      <>
        <p className="text-xl md:text-[22px] leading-relaxed text-gray-600 mb-10 font-light">
          The integration of artificial intelligence into enterprise workflows is no longer a speculative future; it is the definitive present. As we look toward the end of 2026, the question is no longer <em className="text-black font-medium">whether</em> AI will disrupt operations, but <em className="text-black font-medium">how rapidly</em> organizations can adapt their architecture to support it.
        </p>

        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mt-16 mb-6">
          The Shift from Passive Tools to Active Agents
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          Historically, software has been passive. You click a button, and the software executes a predefined function. The next generation of enterprise tools—powered by Large Language Models (LLMs)—are active agents. They anticipate needs, draft preliminary responses, and orchestrate complex multi-step workflows without explicit human triggers.
        </p>

        {/* Structured Blockquote matching the Grid theme */}
        <blockquote className="border-l-4 border-black bg-gray-50 rounded-r-2xl p-6 md:p-8 my-12 shadow-sm border-y border-r border-y-gray-200 border-r-gray-200">
          <p className="text-2xl md:text-3xl font-medium leading-snug text-black m-0">
            "By 2026, over 60% of routine knowledge work will be initiated by AI agents, requiring human intervention only for strategic approvals and creative deviations."
          </p>
        </blockquote>

        <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black mt-12 mb-6">
          Restructuring Data Architecture
        </h3>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          To enable this future, companies must fundamentally restructure how they store data. AI models require unstructured data lakes combined with vector databases to perform semantic search. Siloed data in legacy CRMs or ERPs becomes a bottleneck. 
        </p>

        {/* Image Inside Article (Bento Style) */}
        <div className="my-14">
          <div className="rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-200 aspect-[4/3] sm:aspect-[21/9] mb-4 shadow-sm p-2">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Data Architecture" className="w-full h-full object-cover rounded-3xl" />
          </div>
          <p className="text-sm text-center text-gray-500 font-medium">Fig 1. A modern vector database architecture supporting LLM queries.</p>
        </div>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          The agencies and enterprises that win this decade will be those that view AI not as a feature to bolt onto existing products, but as the foundational layer upon which all new products are built.
        </p>
      </>
    )
  },
  {
    id: 2,
    title: "Designing for the Next Generation of Spatial Computing",
    category: "UI/UX Design",
    date: "May 18, 2026",
    readTime: "5 min read",
    author: {
      name: "Marcus Chen",
      role: "Lead Product Designer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    },
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    content: (
      <>
        <p className="text-xl md:text-[22px] leading-relaxed text-gray-600 mb-10 font-light">
          With the explosion of AR and VR hardware, traditional flat 2D interfaces are becoming obsolete. Spatial computing requires a completely new design language focused on depth, light, and physical interaction.
        </p>
        
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mt-16 mb-6">Embracing the Z-Axis</h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          When designing for spatial environments, typography and buttons must exist in 3D space. We must consider user fatigue, focal points, and immersive feedback. Z-axis positioning becomes just as critical as X and Y.
        </p>

        <blockquote className="border-l-4 border-black bg-gray-50 rounded-r-2xl p-6 md:p-8 my-12 shadow-sm border-y border-r border-y-gray-200 border-r-gray-200">
          <p className="text-2xl md:text-3xl font-medium leading-snug text-black m-0">
            "In spatial design, you are no longer designing a screen; you are designing a room. Shadows and depth cues are not aesthetic choices, they are functional necessities."
          </p>
        </blockquote>
      </>
    )
  },
  {

    id: 3,

    title: "Scaling Next.js Applications for High Traffic Events",

    category: "Engineering",

    date: "May 12, 2026",

    readTime: "12 min read",

    author: { name: "Sarah Jenkins", role: "Senior Systems Architect", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },

    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",

    content: (

      <>

        <p className="text-xl md:text-[22px] leading-relaxed text-gray-600 mb-10 font-light">

          Handling a million concurrent users during a product launch requires more than just scaling up servers. It requires intelligent edge caching and strict database connection pooling.

        </p>

      </>

    )

  }

];

export default function BlogPostGridStyle() {
  // 1. DYNAMIC ROUTING: Grab the ID from the URL (e.g., /blog/1)
  const { id } = useParams();

  // 2. DATA MATCHING: Find the article that matches the URL ID
  const article = allBlogPosts.find((post) => post.id === parseInt(id));

  // Reading progress bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll to top automatically when a new blog is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 3. FALLBACK: If the user types a bad URL (e.g., /blog/99), send them back to the main blog page
  if (!article) {
    return <Navigate to="/blogs" />;
  }

  return (
    // FULL-WIDTH WRAPPER: Top border & white background
    <div className="relative w-full border-t border-gray-200 bg-white font-sans pb-24">
      
      {/* Top Reading Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#29AAE3] origin-left z-50"
      />

      {/* --- GRID DIVIDERS (The Wireframe Background) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center hidden lg:flex">
        <div className="w-full max-w-7xl h-full border-x border-gray-100 relative">
          <div className="absolute left-1/4 top-0 bottom-0 border-l border-gray-100" />
          <div className="absolute left-1/2 top-0 bottom-0 border-l border-gray-100" />
          <div className="absolute left-3/4 top-0 bottom-0 border-l border-gray-100" />
        </div>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:border-x md:border-gray-200 overflow-hidden pt-32 md:pt-40">
        
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pb-10 border-b border-gray-200 mb-10"
        >
          <Link to="/blogs" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 group font-medium text-sm">
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            Back to Insights
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full border border-[#29AAE3]/30 bg-[#29AAE3]/5 text-[#29AAE3] text-xs font-bold tracking-widest uppercase">
              {article.category}
            </span>
            <span className="text-gray-500 text-sm font-medium flex items-center gap-2">
              <Calendar size={14} /> {article.date}
            </span>
            <span className="text-gray-500 text-sm font-medium flex items-center gap-2">
              <Clock size={14} /> {article.readTime}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.05] font-medium tracking-tight text-black max-w-5xl">
            {article.title}
          </h1>
        </motion.div>

        {/* --- Hero Image (Bento Box Style) --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-video md:aspect-[21/9] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-200 shadow-sm mb-16"
        >
          <img src={article.heroImage} alt="Article Hero" className="w-full h-full object-cover" />
        </motion.div>

        {/* --- Content Layout (Sidebar + Article) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* LEFT SIDEBAR: Author & Share (Bento Cards) */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6"
          >
            {/* Author Bento Box */}
            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm">
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4 block">Author</span>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-white shadow-sm overflow-hidden bg-gray-200">
                  <img src={article.author.avatar} alt={article.author.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-base font-semibold text-black leading-tight">{article.author.name}</p>
                  <p className="text-sm text-[#29AAE3] font-medium mt-0.5">{article.author.role}</p>
                </div>
              </div>
            </div>

            {/* Share Bento Box */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm sticky top-32">
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4 block">Share Article</span>
              <div className="flex items-center gap-3">
                <button className="flex-1 h-12 rounded-2xl flex items-center justify-center text-gray-600 bg-gray-50 border border-gray-200 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all">
                  <Twitter size={18} />
                </button>
                <button className="flex-1 h-12 rounded-2xl flex items-center justify-center text-gray-600 bg-gray-50 border border-gray-200 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all">
                  <Linkedin size={18} />
                </button>
                <button className="flex-1 h-12 rounded-2xl flex items-center justify-center text-gray-600 bg-gray-50 border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all">
                  <Link2 size={18} />
                </button>
              </div>
            </div>
          </motion.aside>

          {/* RIGHT SIDE: Article Body (Injected dynamically) */}
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8 xl:col-span-9 prose prose-lg md:prose-xl prose-gray max-w-none pb-12 lg:pr-8"
          >
            {article.content}
          </motion.article>

        </div>
      </section>
    </div>
  );
}