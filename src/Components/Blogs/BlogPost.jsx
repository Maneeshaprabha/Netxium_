"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowLeft, Twitter, Linkedin, Link2, Calendar, Clock, ArrowUpRight, ArrowRight } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import phpSecurityImage from "../../assets/PHPSecurityUpdateonSmartphone.webp";

// --- FULL BLOG DATABASE ---
const allBlogPosts = [
  {
    id: 1,
    title: "PHP2Shell: Critical PHP Vulnerabilities That Could Put Web Servers at Risk",
    category: "Cybersecurity",
    date: "October 25, 2026",
    readTime: "6 min read",
    author: {
      name: "Maneesha Herath",
      role: "Software Engineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maneeshaa",
    },
    heroImage: phpSecurityImage, 
    content: (
      <>
        <p className="text-xl md:text-[22px] leading-relaxed text-gray-600 mb-10 font-light">
          Two critical security vulnerabilities in PHP have raised concerns among developers, website owners, and system administrators. Known collectively as PHP2Shell, the vulnerabilities are tracked as CVE-2026-109618 and CVE-2026-109619.
        </p>

        <blockquote className="border-l-4 border-red-500 bg-red-50/50 rounded-r-2xl p-6 md:p-8 my-10 shadow-sm border-y border-r border-y-red-100 border-r-red-100">
          <p className="text-xl md:text-2xl font-medium leading-snug text-black m-0">
            According to security advisories, successful exploitation could allow an unauthenticated attacker to execute code remotely on a vulnerable server. Both vulnerabilities have a reported CVSS v4.0 severity score of 9.2 out of 10.
          </p>
        </blockquote>

        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mt-16 mb-6">What Is PHP2Shell?</h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
          PHP is a widely used server-side programming language that powers dynamic websites and web applications. It is also used by popular platforms such as WordPress, Drupal, and Joomla.
        </p>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          PHP2Shell refers to two vulnerabilities in the PHP runtime itself. This is important because the issue is not limited to a particular website theme, plugin, or application. A vulnerable PHP runtime can expose the applications running on it to security risks. The vulnerabilities involve memory-safety problems that can occur during error handling and request processing.
        </p>

        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mt-16 mb-6">Understanding the Two Vulnerabilities</h2>
        
        <h3 className="text-2xl font-medium tracking-tight text-black mt-8 mb-4">1. CVE-2026-109618: Out-of-Memory Corruption</h3>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
          This vulnerability relates to how PHP handles certain out-of-memory conditions. Under specific circumstances, PHP may leave internal request data in an invalid or partially initialized state. Subsequent cleanup operations can then handle that data incorrectly. If successfully exploited, this flaw could allow an attacker to execute arbitrary code on an affected server.
        </p>

        <h3 className="text-2xl font-medium tracking-tight text-black mt-8 mb-4">2. CVE-2026-109619: Stale Global State</h3>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          The second vulnerability involves internal PHP state that may continue referencing memory after that memory has been released. This is associated with a memory-safety issue known as a use-after-free vulnerability. Under certain conditions, an attacker could trigger the vulnerable behaviour and potentially achieve remote code execution.
        </p>

        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mt-16 mb-6">What Is Remote Code Execution (RCE)?</h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
          Remote Code Execution, commonly abbreviated as RCE, occurs when an attacker can cause a computer or server to execute code remotely. If an attacker successfully exploits a vulnerability like PHP2Shell, the consequences may include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          <li>Unauthorized execution of commands.</li>
          <li>Exposure or theft of sensitive information.</li>
          <li>Unauthorized access to application data or databases.</li>
          <li>Installation of malicious software.</li>
          <li>Further compromise of the affected server.</li>
        </ul>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          The actual impact depends on the server configuration, the privileges of the affected process, and the security controls in place.
        </p>

        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mt-16 mb-6">Which PHP Versions Are Affected?</h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
          The initial PHP2Shell advisories identify the following fixed releases:
        </p>
        
        {/* Styled HTML Table */}
        <div className="overflow-x-auto mb-8 border border-gray-200 rounded-2xl shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 font-semibold text-black">PHP Branch</th>
                <th className="p-4 font-semibold text-black border-l border-gray-200">Fixed Release</th>
              </tr>
            </thead>
            <tbody className="text-lg text-gray-600">
              <tr className="border-b border-gray-200"><td className="p-4">PHP 8.5</td><td className="p-4 border-l border-gray-200">8.5.12</td></tr>
              <tr className="border-b border-gray-200"><td className="p-4 bg-gray-50/50">PHP 8.4</td><td className="p-4 bg-gray-50/50 border-l border-gray-200">8.4.27</td></tr>
              <tr className="border-b border-gray-200"><td className="p-4">PHP 8.3</td><td className="p-4 border-l border-gray-200">8.3.36</td></tr>
              <tr><td className="p-4 bg-gray-50/50">PHP 8.2</td><td className="p-4 bg-gray-50/50 border-l border-gray-200">8.2.35</td></tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          Earlier releases in these branches are affected. PHP 8.1 and older versions are also affected, although they no longer receive regular security updates from the PHP project. Some operating-system vendors may provide backported security fixes. Always verify the exact status of your installed version with the official PHP security advisories.
        </p>

        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mt-16 mb-6">How Can Website Owners Protect Their Websites?</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-black mb-2">1. Check Your PHP Version</h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">Identify the PHP version actually used by your production website. Remember that the version running in your local development environment may differ from the version running on your hosting server.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black mb-2">2. Install the Appropriate Security Updates</h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">Upgrade to a fixed PHP release or install a security-patched package provided by your operating-system or hosting vendor. Updating PHP is the primary and complete remediation for these vulnerabilities.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black mb-2">3. Review Your Hosting Environment</h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">Check whether PHP is running through PHP-FPM, Apache with mod_php, CGI, or another supported configuration. Also check third-party applications, containers, and hosting tools that may include their own PHP runtime.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black mb-2">4. Review Logs for Suspicious Activity</h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">Examine web server, application, authentication, and system logs for unusual requests, unexpected processes, unfamiliar files, or suspicious outbound connections. If you suspect a compromise, investigate it rather than assuming that installing a patch alone removes any existing malicious activity.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black mb-2">5. Restrict Exposure if You Cannot Patch</h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">If you cannot apply the required fix immediately, assess the risk and consider isolating the vulnerable server from public access until it can be patched. Temporary configuration changes may reduce certain attack paths, but they do not replace the official update.</p>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mt-16 mb-6">Does This Affect WordPress Websites?</h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          Potentially, yes. WordPress relies on PHP, so a WordPress website running an affected PHP runtime may be exposed even if WordPress and its plugins are up to date. Updating WordPress alone does not fix a vulnerability in the PHP runtime. Website owners should check both their application updates and their hosting environment.
        </p>

        <blockquote className="border-l-4 border-black bg-gray-50 rounded-r-2xl p-6 md:p-8 my-12 shadow-sm border-y border-r border-y-gray-200 border-r-gray-200 text-center">
          <p className="text-2xl md:text-3xl font-bold tracking-widest leading-snug text-black m-0 uppercase">
            PATCH • VERIFY • PROTECT
          </p>
        </blockquote>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          PHP2Shell highlights an important cybersecurity lesson: securing a website involves more than protecting passwords and updating application code. The underlying runtime, server configuration, dependencies, and monitoring practices also matter. Keeping your server software updated is an essential part of maintaining a secure web application.
        </p>

        <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
          <h4 className="font-bold text-black mb-4">Official Resources</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>PHP Security Advisories — PHP News Archive</li>
            <li>NHS England Digital — Critical PHP Vulnerabilities</li>
            <li>Canadian Centre for Cyber Security — PHP Vulnerability Alert</li>
          </ul>
          <p className="text-sm text-gray-500 mt-6 italic">
            Security note: This article covers the PHP2Shell vulnerabilities disclosed on October 21, 2026. Check the official advisories for subsequent updates and newly disclosed vulnerabilities before taking action.
          </p>
        </div>
      </>
    )
  },
  {
    id: 2,
    title: "The Future of AI in Enterprise Workflows: A 2026 Perspective",
    category: "Artificial Intelligence",
    date: "May 24, 2026",
    readTime: "8 min read",
    author: {
      name: "Maneesha Herath",
      role: "Head of AI Strategy",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maneesha",
    },
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    excerpt: "Discover how intelligent automation and large language models are fundamentally restructuring how modern agencies and enterprises handle complex daily operations.",
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
    id: 3,
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
    excerpt: "Why traditional 2D UI principles fall short in AR/VR environments and how to adapt your design system.",
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
    id: 4,
    title: "Scaling Next.js Applications for High Traffic Events",
    category: "Engineering",
    date: "May 12, 2026",
    readTime: "12 min read",
    author: { name: "Sarah Jenkins", role: "Senior Systems Architect", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
    excerpt: "A deep dive into caching strategies, edge computing, and database optimization for million-user spikes.",
    content: (
      <>
        <p className="text-xl md:text-[22px] leading-relaxed text-gray-600 mb-10 font-light">
          Handling a million concurrent users during a product launch requires more than just scaling up servers. It requires intelligent edge caching, strict database connection pooling, and a deep understanding of Next.js rendering strategies.
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mt-16 mb-6">The Magic of ISR and Edge Computing</h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          By utilizing Incremental Static Regeneration (ISR), you can serve static pages to 99% of your users while regenerating them in the background. Pushing middleware to the Edge ensures that authentication and redirects happen closer to the user, saving precious milliseconds.
        </p>
      </>
    )
  },
  {
    id: 5,
    title: "The Micro-Interaction Audit",
    category: "Design Systems",
    date: "May 05, 2026",
    readTime: "6 min read",
    author: { name: "David Kim", role: "UX Engineer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David" },
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    excerpt: "How tiny, almost invisible animations can drastically improve user retention and perceived performance.",
    content: (
      <>
        <p className="text-xl md:text-[22px] leading-relaxed text-gray-600 mb-10 font-light">
          Micro-interactions are the subtle moments in a product that users barely notice, yet they fundamentally shape the experience. A button that compresses slightly when clicked, a skeleton loader that shimmers organically, or a success state that springs into place.
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mt-16 mb-6">The Psychology of Feedback</h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          When humans interact with the physical world, there is immediate sensory feedback. Digital interfaces often lack this. Micro-interactions bridge the gap between digital and physical, reassuring the user that their action was acknowledged by the system.
        </p>
        <blockquote className="border-l-4 border-black bg-gray-50 rounded-r-2xl p-6 md:p-8 my-12 shadow-sm border-y border-r border-y-gray-200 border-r-gray-200">
          <p className="text-2xl md:text-3xl font-medium leading-snug text-black m-0">
            "Good design is invisible, but great design feels alive. Animation shouldn't just be decoration; it should be communication."
          </p>
        </blockquote>
      </>
    )
  },
  {
    id: 6,
    title: "Death of the Traditional Dashboard",
    category: "Product Strategy",
    date: "April 28, 2026",
    readTime: "7 min read",
    author: { name: "Amara Singh", role: "Product Manager", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amara" },
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop",
    excerpt: "Moving from static charts to generative, conversational data interfaces that actually answer questions.",
    content: (
      <>
        <p className="text-xl md:text-[22px] leading-relaxed text-gray-600 mb-10 font-light">
          For the past decade, B2B software has been defined by the dashboard: a grid of pie charts, line graphs, and data tables. But users don't want to look at charts; they want answers to business questions.
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mt-16 mb-6">The Rise of Conversational UI</h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          Instead of forcing users to filter through complex datasets to figure out why revenue dropped in Q3, modern interfaces allow them to simply ask. Powered by LLMs and Generative UI, the system dynamically renders the exact chart needed for that specific question.
        </p>
      </>
    )
  },
  {
    id: 7,
    title: "Serverless vs Edge in 2026",
    category: "Cloud Architecture",
    date: "April 20, 2026",
    readTime: "9 min read",
    author: { name: "Tom Baker", role: "DevOps Lead", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom" },
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    excerpt: "Analyzing the cost-to-performance ratio of modern deployment architectures for global applications.",
    content: (
      <>
        <p className="text-xl md:text-[22px] leading-relaxed text-gray-600 mb-10 font-light">
          The debate between traditional Serverless functions (like AWS Lambda) and Edge functions (like Cloudflare Workers) has matured. In 2026, the choice isn't just about cold starts anymore; it's about global data distribution and compliance.
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mt-16 mb-6">Latency is the New Currency</h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          Edge computing executes code physically closer to the user. For personalization engines, A/B testing, and AI middleware, those saved 50 milliseconds per request translate directly into higher conversion rates and better UX.
        </p>
      </>
    )
  },
  {
    id: 8,
    title: "Mastering Framer Motion",
    category: "Frontend Dev",
    date: "April 15, 2026",
    readTime: "11 min read",
    author: { name: "Lisa Wong", role: "Frontend Architect", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa" },
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    excerpt: "A comprehensive guide to orchestrating complex, performant layout animations without sacrificing load times.",
    content: (
      <>
        <p className="text-xl md:text-[22px] leading-relaxed text-gray-600 mb-10 font-light">
          React developers have long struggled with complex animations, especially when elements enter, exit, or change their layout in the DOM. Framer Motion revolutionized this space, making 60fps animations declarative and accessible.
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mt-16 mb-6">The Magic of Layout Animations</h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          The `layout` prop in Framer Motion is arguably its most powerful feature. By simply adding it to a component, the library automatically calculates the transform differences between re-renders, creating buttery smooth transitions without CSS headaches.
        </p>
      </>
    )
  }
];

export default function BlogPostGridStyle() {
  const { id } = useParams();
  const [visibleCount, setVisibleCount] = useState(6);
  
  const article = id ? allBlogPosts.find((post) => post.id === parseInt(id)) : null;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  // --- SINGLE ARTICLE VIEW ---
  if (article) {
    return (
      <div className="relative w-full border-t border-gray-200 bg-white font-sans pb-24 overflow-x-hidden">
        
        {/* Top Reading Progress Bar */}
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-1.5 bg-[#29AAE3] origin-left z-50"
        />

        <div className="absolute inset-0 z-0 pointer-events-none flex justify-center hidden lg:flex">
          <div className="w-full max-w-7xl h-full border-x border-gray-100 relative">
            <div className="absolute left-1/4 top-0 bottom-0 border-l border-gray-100" />
            <div className="absolute left-1/2 top-0 bottom-0 border-l border-gray-100" />
            <div className="absolute left-3/4 top-0 bottom-0 border-l border-gray-100" />
          </div>
        </div>

        {/* Removed overflow-hidden so sticky works properly */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:border-x md:border-gray-200 pt-32 md:pt-40">
          
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

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full aspect-video md:aspect-[21/9] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-gray-50 border border-gray-200 shadow-sm mb-16"
          >
            <img src={article.heroImage} alt="Article Hero" className="w-full h-full object-cover" />
          </motion.div>

          {/* CONTENT LAYOUT: items-start allows sidebar to stick inside its grid column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative">
            
            {/* STICKY SIDEBAR: Stays pinned while reading the article */}
            <motion.aside 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-4 xl:col-span-3 flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start lg:h-fit z-20"
            >
              {/* Author Box */}
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

              {/* Share Box */}
              <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm">
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

            {/* SCROLLING ARTICLE BODY */}
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

  // --- MAIN BLOG GRID VIEW (/blogs) ---
  const featuredPostObj = allBlogPosts[0];
  
  return (
    <div className="relative w-full border-t border-gray-200 bg-white font-sans pt-20 pb-24 md:pt-32 overflow-x-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center hidden lg:flex">
        <div className="w-full max-w-7xl h-full border-x border-gray-100 relative">
          <div className="absolute left-1/4 top-0 bottom-0 border-l border-gray-100" />
          <div className="absolute left-1/2 top-0 bottom-0 border-l border-gray-100" />
          <div className="absolute left-3/4 top-0 bottom-0 border-l border-gray-100" />
        </div>
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:border-x md:border-gray-200">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 pb-12 mb-12 items-end border-b border-gray-200"
        >
          <h2 className="text-4xl md:text-[56px] lg:text-[64px] leading-[1.2] md:leading-[1.05] tracking-tight py-2 mt-10 md:mt-0">
            <span className="text-gray-400 font-normal block mb-2">Ideas that shape</span>
            <span className="text-black font-normal block">The digital future.</span>
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
          <Link to={`/blog/${featuredPostObj.id}`} className="group block relative w-full h-[500px] md:h-[650px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gray-100">
            <img src={featuredPostObj.heroImage} alt={featuredPostObj.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-6 md:p-10 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-white text-black text-[10px] md:text-xs font-bold tracking-widest uppercase">
                  {featuredPostObj.category}
                </span>
                <span className="text-white/80 text-xs md:text-sm font-medium">{featuredPostObj.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.1] tracking-tight mb-4">
                {featuredPostObj.title}
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed hidden md:block">
                {featuredPostObj.excerpt}
              </p>
            </div>
          </Link>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {allBlogPosts.slice(1, visibleCount + 1).map((post) => (
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
                  <div className="relative w-full h-56 border-b border-gray-200 overflow-hidden bg-gray-100">
                    <img src={post.heroImage} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
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

        {visibleCount < allBlogPosts.length - 1 && (
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