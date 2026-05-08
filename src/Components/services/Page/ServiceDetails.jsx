"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- COMPLETE SERVICES DATA ---
const servicesData = {
  "AI and ML": {
    category: "// Project overview",
    title: "We serve quality services fundamental component of Artificial Intelligence (AI) systems",
    description: [
      "At Netxium, we harness the power of Artificial Intelligence (AI) and Machine Learning (ML) to transform data into strategic business intelligence.",
      "Our AI systems are built to analyze complex datasets, detect patterns, and make predictions—helping organizations automate decisions, increase efficiency, and innovate faster. We design adaptive AI models that grow smarter over time, integrating seamlessly with your existing systems. Whether it's automating operations, improving customer experience, or unlocking new insights, Netxium's AI & ML solutions bring intelligence to every layer of your business.",
      "We don't just deploy algorithms—we deliver intelligent ecosystems that continuously learn, optimize, and create measurable impact."
    ],
    image: "/src/assets/ai-robot.jpg",
    postImageText: "We design AI-powered features that solve real problems—no bloat, just smart tools that make work faster, decisions clearer, and operations smoother. From automation to insights, every solution is built for performance, scalability, and ease of use.",
    bullets: [
      "Pacific hake false trevally queen parrotfish black",
      "Prickleback mora modify-queen parrotfish black",
      "Queen parrotfish black prickleback mora pacific",
      "Hake false trevally queen"
    ],
    keyServices: [
      { id: 1, label: "Predictive Analytics", text: "Use data-driven forecasting to identify trends, customer behavior, and business opportunities before they happen." },
      { id: 2, label: "Intelligent Automation", text: "Automate repetitive, rule-based processes using smart algorithms that enhance accuracy and efficiency." },
      { id: 3, label: "Natural Language Processing (NLP)", text: "Enable systems to understand and communicate in human language—through chatbots, voice assistants, and smart interfaces." },
      { id: 4, label: "Computer Vision Solutions", text: "Empower your systems to analyze images and videos for object detection, facial recognition, and quality control." },
      { id: 5, label: "Recommendation Systems", text: "Deliver personalized user experiences with intelligent recommendation engines that learn and adapt over time." },
      { id: 6, label: "AI Strategy & Consultation", text: "Get expert guidance on how to implement AI effectively—aligning your technology roadmap with your business goals." }
    ],
    highlight: {
      title: "Smart Analytics Platform",
      client: "Portdge Analytics",
      industry: "Financial Services",
      goal: "Automate data analysis and generate actionable insights using AI.",
      solution: "We developed a machine learning-powered analytics engine that processes large financial datasets, predicts market trends, and delivers real-time performance dashboards.",
      results: [
        "Reduced manual reporting time by 70%",
        "Increased forecast accuracy by 35%",
        "Enabled data-driven decision-making across departments"
      ]
    }
  },
  "Software Development": {
    category: "// Engineering",
    title: "Engineering robust software architectures for modern digital growth",
    description: [
      "Our software development team focuses on building scalable, secure, and high-performance applications that serve as the backbone of your business operations.",
      "We utilize agile methodologies to ensure rapid delivery and constant iteration. Whether it's a custom ERP, a SaaS platform, or internal tools, we prioritize clean code and future-proof scalability.",
      "Beyond just writing code, we focus on the entire lifecycle—from discovery and architecture to deployment and long-term maintenance."
    ],
    image: "/src/assets/software-dev.jpg",
    postImageText: "Our solutions are engineered to handle high traffic and complex data workflows without compromising on speed or security.",
    bullets: [
      "Custom enterprise solutions",
      "Legacy system modernization",
      "Scalable backend architectures",
      "Cloud-native development"
    ],
    keyServices: [
      { id: 1, label: "Custom Web Applications", text: "Responsive and feature-rich web applications built with React, Node.js, and modern tech stacks." },
      { id: 2, label: "API Development & Integration", text: "Developing secure REST and GraphQL APIs to connect your services seamlessly." },
      { id: 3, label: "Database Design", text: "Optimizing data storage and retrieval with high-performance SQL and NoSQL solutions." },
      { id: 4, label: "DevOps & Cloud", text: "Automating deployments and ensuring 99.9% uptime with AWS and Azure infrastructure." }
    ],
    highlight: {
      title: "E-Commerce Infrastructure",
      client: "Global Retail Inc.",
      industry: "Retail",
      goal: "Handle 10x traffic spikes during holiday seasons.",
      solution: "Implemented a microservices architecture with auto-scaling capabilities and a global CDN integration.",
      results: [
        "0% downtime during Black Friday",
        "Page load speeds improved by 45%",
        "Increased conversion rate by 12%"
      ]
    }
  },
  "Mobile App Development": {
    category: "// Mobile First",
    title: "Intuitive mobile experiences for iOS and Android platforms",
    description: [
      "We design and develop premium mobile applications that put your business directly in your customers' pockets.",
      "Using both native and cross-platform technologies, we ensure your app feels responsive, looks stunning, and functions flawlessly across all device types."
    ],
    image: "/src/assets/mobile-apps.jpg",
    postImageText: "Focusing on performance and accessibility, we build apps that users actually want to keep on their home screens.",
    bullets: ["iOS (Swift) Development", "Android (Kotlin) Development", "React Native Solutions", "App Store Optimization"],
    keyServices: [
      { id: 1, label: "Native App Development", text: "High-performance apps built specifically for iOS and Android hardware." },
      { id: 2, label: "Cross-Platform Build", text: "Reach both platforms with a single codebase using React Native or Flutter." },
      { id: 3, label: "Mobile UI/UX", text: "Interfaces designed specifically for touch interactions and small screen ergonomics." }
    ],
    highlight: {
      title: "FinTech Wallet",
      client: "NeoBank",
      industry: "FinTech",
      goal: "Simplify peer-to-peer transfers for Gen Z users.",
      solution: "Developed a native iOS app with biometric security and a 3-tap transfer flow.",
      results: ["4.9/5 stars on App Store", "500k+ downloads in first quarter", "User retention increased by 30%"]
    }
  },
  "UI/UX Design": {
    category: "// User Experience",
    title: "Design that bridges the gap between complex tech and human needs",
    description: [
      "Design is more than just aesthetics; it's about how it works. We create interfaces that are intuitive, accessible, and aligned with your business goals.",
      "Our research-driven approach ensures that every design decision is backed by user data and psychological principles."
    ],
    image: "/src/assets/uiux-design.jpg",
    postImageText: "We turn complex architectural problems into simple, beautiful, and high-converting visual interfaces.",
    bullets: ["User Research & Personas", "Wireframing & Prototyping", "Design System Creation", "Accessibility (WCAG) Audits"],
    keyServices: [
      { id: 1, label: "Interactive Prototyping", text: "Validate ideas with clickable models before moving to full development." },
      { id: 2, label: "Visual Identity", text: "Defining the colors, typography, and mood that represent your digital brand." },
      { id: 3, label: "Usability Testing", text: "Observing real users to identify and fix friction points in the interface." }
    ],
    highlight: {
      title: "SaaS Dashboard Redesign",
      client: "CloudOps",
      industry: "SaaS",
      goal: "Reduce onboarding time for new enterprise users.",
      solution: "Streamlined the navigation and created a unified design system for all 50+ internal modules.",
      results: ["Support tickets reduced by 40%", "Onboarding time cut from 5 days to 2 hours", "Task completion rate up by 85%"]
    }
  },
  "Digital Strategy & Consulting": {
    category: "// Digital Strategy & Consulting",
    title: "Navigating the digital landscape with data-driven strategy",
    description: [
      "We act as your technology partners, helping you choose the right tools and strategies to outpace your competition.",
      "From AI readiness audits to omnichannel roadmaps, we provide the clarity you need to invest your budget effectively."
    ],
    image: "/src/assets/strategy.jpg",
    postImageText: "Strategy isn't just a document; it's a blueprint for measurable business growth.",
    bullets: ["AI Readiness Assessments", "Tech Stack Audits", "Omnichannel Roadmaps", "Growth Consulting"],
    keyServices: [
      { id: 1, label: "Digital Transformation", text: "Modernizing legacy business models for the 21st-century digital economy." },
      { id: 2, label: "CTO Advisory", text: "Fractional leadership for startups and enterprises needing high-level technical guidance." },
      { id: 3, label: "ROI Analysis", text: "Calculating the impact of tech investments before you commit to development." }
    ],
    highlight: {
      title: "Transformation Roadmap",
      client: "Vertex Logistics",
      industry: "Manufacturing",
      goal: "Identify bottlenecks in the supply chain.",
      solution: "Conducted a 4-week audit and proposed a 12-month digital overhaul strategy.",
      results: ["Projected $2M savings in year 1", "Unified 3 legacy systems", "Approved for full-scale rollout"]
    }
  }
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("AI and ML");
  const current = servicesData[activeTab];

  return (
    <div className="w-full bg-white border-t border-gray-200">
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 border-x border-gray-200 font-sans flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative">
        
        {/* LEFT COLUMN: Sidebar matching image_ef933b.png exactly */}
        <div className="w-full lg:w-[380px] flex-shrink-0 flex flex-col gap-6 lg:sticky lg:top-32 z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F4F7FB] rounded-[2.5rem] p-8 md:p-10 shadow-sm"
          >
            <h3 className="text-[28px] font-semibold text-black mb-8">Our Service</h3>
            <div className="flex flex-col gap-4">
              {Object.keys(servicesData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full py-4 px-6 rounded-full text-[15px] font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-[#1A1A1A] text-white shadow-lg scale-[1.02]"
                      : "bg-white text-[#4A5568] hover:bg-gray-50 border border-gray-100 shadow-sm"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#1A1A1A] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-xl"
          >
            <h3 className="text-3xl md:text-[34px] leading-tight font-bold mb-6 relative z-10">
              We value ideas, talent & voices of people!
            </h3>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-10 relative z-10">
              Transform repetitive, time-consuming tasks into efficient, AI-driven workflows. Our solutions ensure
            </p>
            
            <button className="flex items-center justify-between w-full bg-white text-black px-8 py-5 rounded-full font-bold transition-all hover:bg-gray-100 group relative z-10 shadow-xl">
              <span className="text-lg">Work with me</span>
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Long-form Content */}
        <div className="w-full lg:flex-1 relative min-h-[1000px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col gap-10 text-gray-600 leading-relaxed"
            >
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold block">
                  {current.category}
                </span>
                <h2 className="text-4xl md:text-[52px] leading-[1.1] font-bold text-black tracking-tighter">
                  {current.title}
                </h2>
              </div>

              <div className="space-y-6">
                {current.description.map((p, i) => (
                  <p key={i} className="text-lg md:text-xl text-gray-600">
                    {p}
                  </p>
                ))}
              </div>

              {/* Large Content Image */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full my-4 rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm aspect-[16/9]"
              >
                <img 
                  src={current.image} 
                  alt={activeTab} 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <p className="text-lg">{current.postImageText}</p>

              {/* Bulleted List */}
              <ul className="list-disc pl-5 space-y-2 text-gray-600 marker:text-gray-400">
                {current.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>

              {/* Key Services Section */}
              <div className="mt-4">
                <h3 className="text-xl text-black font-semibold mb-6">Key Services</h3>
                <div className="space-y-5">
                  {current.keyServices.map((service) => (
                    <div key={service.id} className="text-lg">
                      <span className="text-black font-bold">{service.id}. {service.label}:</span> {service.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Highlight Section */}
              <div className="mt-4 bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-inner">
                <h3 className="text-2xl text-black font-bold mb-8 uppercase tracking-tight">
                  Project Highlight: {current.highlight.title}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8 border-b border-gray-200 pb-8">
                  <div className="space-y-4">
                    <p><span className="text-gray-400 font-bold text-xs uppercase block mb-1">Client</span> <span className="text-black font-semibold text-lg">{current.highlight.client}</span></p>
                    <p><span className="text-gray-400 font-bold text-xs uppercase block mb-1">Industry</span> <span className="text-black font-semibold text-lg">{current.highlight.industry}</span></p>
                  </div>
                  <div className="space-y-4">
                    <p><span className="text-gray-400 font-bold text-xs uppercase block mb-1">Goal</span> <span className="text-black font-semibold text-lg">{current.highlight.goal}</span></p>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="text-gray-400 font-bold text-xs uppercase block mb-1">Solution</span>
                  <p className="text-gray-700 text-lg leading-relaxed">{current.highlight.solution}</p>
                </div>

                <div>
                  <span className="text-gray-400 font-bold text-xs uppercase block mb-3">Results</span>
                  <ul className="flex flex-col gap-3">
                    {current.highlight.results.map((result, i) => (
                      <li key={i} className="flex items-center gap-4 text-black font-bold text-lg">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </section>
    </div>
  );
}