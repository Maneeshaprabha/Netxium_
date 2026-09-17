"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// 1. SOCIAL MEDIA MARKETING DATA
// ==========================================
const marketingData = [
  {
    name: "STARTER",
    price: "15,000",
    suffix: "/mo",
    description: "Best for New Businesses",
    highlight: false,
    features: [
      { name: "Social Media Posts", value: "4" },
      { name: "Stories", value: "2" },
      { name: "Reels", value: "-" },
      { name: "Facebook", value: true },
      { name: "Instagram", value: true },
      { name: "TikTok", value: "-" },
      { name: "Graphic Design", value: true },
      { name: "Caption Writing", value: true },
      { name: "Hashtag Research", value: true },
      { name: "Content Planning", value: true },
      { name: "Post Scheduling", value: true },
      { name: "Competitor Research", value: "-" },
      { name: "Social Media Management", value: "-" },
      { name: "Basic SEO", value: "-" },
      { name: "Google Business Profile", value: "-" },
      { name: "Monthly Report", value: "-" },
      { name: "Content Strategy", value: "-" },
    ],
  },
  {
    name: "GROWTH",
    price: "25,000",
    suffix: "/mo",
    description: "Best for Growing Businesses",
    highlight: true,
    features: [
      { name: "Social Media Posts", value: "8" },
      { name: "Stories", value: "4" },
      { name: "Reels", value: "-" },
      { name: "Facebook", value: true },
      { name: "Instagram", value: true },
      { name: "TikTok", value: "-" },
      { name: "Graphic Design", value: true },
      { name: "Caption Writing", value: true },
      { name: "Hashtag Research", value: true },
      { name: "Content Planning", value: true },
      { name: "Post Scheduling", value: true },
      { name: "Competitor Research", value: true },
      { name: "Social Media Management", value: true },
      { name: "Basic SEO", value: true },
      { name: "Google Business Profile", value: "-" },
      { name: "Monthly Report", value: true },
      { name: "Content Strategy", value: "-" },
    ],
  },
  {
    name: "PRO",
    price: "50,000",
    suffix: "/mo",
    description: "Best for Businesses Ready to Scale",
    highlight: false,
    features: [
      { name: "Social Media Posts", value: "12" },
      { name: "Stories", value: "8" },
      { name: "Reels", value: "4" },
      { name: "Facebook", value: true },
      { name: "Instagram", value: true },
      { name: "TikTok", value: true },
      { name: "Graphic Design", value: true },
      { name: "Caption Writing", value: true },
      { name: "Hashtag Research", value: true },
      { name: "Content Planning", value: true },
      { name: "Post Scheduling", value: true },
      { name: "Competitor Research", value: true },
      { name: "Social Media Management", value: true },
      { name: "Basic SEO", value: true },
      { name: "Google Business Profile", value: true },
      { name: "Monthly Report", value: true },
      { name: "Content Strategy", value: true },
    ],
  },
];

// ==========================================
// 2. WEBSITE DEVELOPMENT DATA
// ==========================================
const webDevData = [
  {
    name: "STARTER",
    price: "65,000",
    suffix: "/project",
    description: "Perfect for landing pages and small sites.",
    highlight: false,
    features: [
      { name: "Pages", value: "1–3" },
      { name: "Custom UI/UX", value: true },
      { name: "Responsive", value: true },
      { name: "SEO", value: "Basic" },
      { name: "Analytics", value: "-" },
      { name: "CMS", value: "-" },
      { name: "WhatsApp Integration", value: true },
      { name: "Forms", value: true },
      { name: "Blog", value: "-" },
      { name: "Animations", value: "-" },
      { name: "Payment Gateway", value: "-" },
      { name: "Admin Dashboard", value: "-" },
      { name: "Support", value: "-" },
    ],
  },
  {
    name: "BUSINESS",
    price: "120,000",
    suffix: "/project",
    description: "Great for growing companies with more content.",
    highlight: false,
    features: [
      { name: "Pages", value: "Up to 6" },
      { name: "Custom UI/UX", value: true },
      { name: "Responsive", value: true },
      { name: "SEO", value: "Standard" },
      { name: "Analytics", value: true },
      { name: "CMS", value: "-" },
      { name: "WhatsApp Integration", value: true },
      { name: "Forms", value: true },
      { name: "Blog", value: true },
      { name: "Animations", value: "Basic" },
      { name: "Payment Gateway", value: "-" },
      { name: "Admin Dashboard", value: "-" },
      { name: "Support", value: "-" },
    ],
  },
  {
    name: "PROFESSIONAL",
    price: "200,000",
    suffix: "/project",
    description: "Advanced features with full content management.",
    highlight: true,
    features: [
      { name: "Pages", value: "Up to 10" },
      { name: "Custom UI/UX", value: true },
      { name: "Responsive", value: true },
      { name: "SEO", value: "Advanced" },
      { name: "Analytics", value: true },
      { name: "CMS", value: true },
      { name: "WhatsApp Integration", value: true },
      { name: "Forms", value: true },
      { name: "Blog", value: true },
      { name: "Animations", value: "Advanced" },
      { name: "Payment Gateway", value: "-" },
      { name: "Admin Dashboard", value: true },
      { name: "Support", value: "3 Months" },
    ],
  },
  {
    name: "E-COMMERCE",
    price: "250,000+",
    suffix: " starting",
    description: "Complete online store ready to drive sales.",
    highlight: false,
    features: [
      { name: "Pages", value: "Custom" },
      { name: "Custom UI/UX", value: true },
      { name: "Responsive", value: true },
      { name: "SEO", value: "Advanced" },
      { name: "Analytics", value: true },
      { name: "CMS", value: true },
      { name: "WhatsApp Integration", value: true },
      { name: "Forms", value: true },
      { name: "Blog", value: true },
      { name: "Animations", value: "Advanced" },
      { name: "Payment Gateway", value: true },
      { name: "Admin Dashboard", value: true },
      { name: "Support", value: "3 Months" },
    ],
  },
];

// ==========================================
// ICONS
// ==========================================
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#333333]">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const DashIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-300">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
);

export default function Pricing() {
  // Toggle State: "marketing" or "website"
  const [activeTab, setActiveTab] = useState("marketing");

  // Determine which data array and grid style to use based on the active tab
  const currentData = activeTab === "marketing" ? marketingData : webDevData;
  const gridColumns = activeTab === "marketing" ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";

  return (
    <div className="relative w-full overflow-x-hidden border-t border-gray-200 bg-white font-sans">
      
      {/* BACKGROUND WIREFRAME GRID */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-center">
        <div className="relative h-full w-full max-w-7xl border-x border-gray-100" />
      </div>

      {/* MAIN SECTION */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-32 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 py-2 text-[40px] font-normal leading-[1.2] tracking-tight text-black md:text-[56px] md:leading-[1.1]"
          >
            Simple, transparent pricing.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="max-w-2xl text-[15px] leading-relaxed text-gray-500 md:text-base"
          >
            Choose the perfect package to grow your brand and identify areas where we can add value to your business.
          </motion.p>
        </div>

        {/* ==========================================
            TAB TOGGLE BUTTONS
        ========================================== */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex bg-[#F4F5F7] p-1.5 rounded-full border border-gray-200 mb-12 md:mb-16 relative"
        >
          <button
            onClick={() => setActiveTab("marketing")}
            className={`relative px-6 py-3 rounded-full text-[13px] md:text-[14px] font-semibold transition-all duration-300 z-10 ${
              activeTab === "marketing" ? "text-black" : "text-gray-500 hover:text-black"
            }`}
          >
            Social Media Marketing
          </button>
          
          <button
            onClick={() => setActiveTab("website")}
            className={`relative px-6 py-3 rounded-full text-[13px] md:text-[14px] font-semibold transition-all duration-300 z-10 ${
              activeTab === "website" ? "text-black" : "text-gray-500 hover:text-black"
            }`}
          >
            Website Development
          </button>

          {/* Animated Background Pill */}
          <div
            className={`absolute top-1.5 bottom-1.5 w-1/2 bg-white rounded-full shadow-sm border border-gray-100 transition-all duration-500 ease-out z-0 ${
              activeTab === "website" ? "left-1/2 -ml-1.5" : "left-1.5"
            }`}
            style={{ width: "calc(50% - 6px)" }}
          />
        </motion.div>

        {/* ==========================================
            PRICING CARDS GRID
        ========================================== */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab} // Changing the key forces Framer Motion to animate the exit/enter
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`grid ${gridColumns} gap-6 lg:gap-6 items-start`}
            >
              {currentData.map((tier, index) => (
                <div
                  key={tier.name}
                  className={`relative flex flex-col w-full rounded-[2rem] p-6 lg:p-8 transition-all duration-300 ${
                    tier.highlight 
                      ? "bg-[#F4F5F7] border border-gray-200 shadow-sm z-10 scale-100 md:scale-[1.02]" 
                      : "bg-white border border-gray-100 hover:border-gray-200"
                  }`}
                >
                  {/* Popular Badge */}
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#333333] text-white px-4 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase">
                      Most Popular
                    </div>
                  )}

                  {/* Tier Info */}
                  <h3 className="mb-2 text-base font-semibold tracking-tight text-black">
                    {tier.name}
                  </h3>
                  
                  <div className="flex flex-col gap-1 mb-4">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-semibold text-gray-500">LKR</span>
                      <span className="text-3xl lg:text-4xl font-normal leading-none tracking-tight text-black">
                        {tier.price}
                      </span>
                    </div>
                    <span className="text-[13px] text-gray-500 font-medium">{tier.suffix}</span>
                  </div>
                  
                  <p className="mb-6 pb-6 text-[14px] text-gray-500 border-b border-gray-200 min-h-[65px]">
                    {tier.description}
                  </p>

                  {/* Features List */}
                  <ul className="flex flex-col gap-3.5 mb-8 flex-grow">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-between">
                        <span className={`text-[13px] lg:text-[14px] ${feature.value === "-" ? "text-gray-400" : "text-gray-600"}`}>
                          {feature.name}
                        </span>
                        
                        {/* Render specific numbers, text, checkmarks, or dashes */}
                        <div className="flex-shrink-0 ml-2 font-medium">
                          {typeof feature.value === "string" && feature.value !== "-" ? (
                            <span className="inline-flex items-center justify-center bg-white border border-gray-200 text-black px-2 py-0.5 rounded text-[11px] font-semibold whitespace-nowrap">
                              {feature.value}
                            </span>
                          ) : feature.value === true ? (
                            <CheckIcon />
                          ) : (
                            <DashIcon />
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a 
                    href="/contact" 
                    className={`group flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[13px] font-semibold transition-all active:scale-[0.98] mt-auto ${
                      tier.highlight 
                        ? "bg-[#333333] text-white hover:bg-black" 
                        : "bg-white text-black border border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    Select Package
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
      </section>
    </div>
  );
}