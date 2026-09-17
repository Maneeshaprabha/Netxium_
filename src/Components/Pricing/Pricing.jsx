"use client";
import React from "react";
import { motion } from "framer-motion";

const pricingData = [
  {
    name: "STARTER",
    price: "15,000",
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

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#333333]">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const DashIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-300">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
);

export default function Pricing() {
  return (
    <div className="relative w-full overflow-x-hidden border-t border-gray-200 bg-white font-sans">
      
      {/* ==================================================
          BACKGROUND WIREFRAME GRID (Matching Contact Form)
      ================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-center">
        <div className="relative h-full w-full max-w-7xl border-x border-gray-100" />
      </div>

      {/* ==================================================
          MAIN SECTION
      ================================================== */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:py-32">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 py-2 text-[40px] font-normal leading-[1.2] tracking-tight text-black md:text-[64px] md:leading-[1.1]"
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
            Choose the perfect social media management package to grow your brand and identify areas where we can add value to your business.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
          {pricingData.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              className={`relative flex flex-col w-full rounded-3xl p-6 sm:p-10 md:rounded-[2.5rem] transition-all duration-300 ${
                tier.highlight 
                  ? "bg-[#F4F5F7] border border-gray-200 shadow-sm scale-100 lg:scale-105 z-10" 
                  : "bg-white border border-gray-100 hover:border-gray-200"
              }`}
            >
              {/* Popular Badge */}
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#333333] text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
                  Most Popular
                </div>
              )}

              {/* Tier Info */}
              <h3 className="mb-3 text-lg font-semibold tracking-tight text-black">
                {tier.name}
              </h3>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-sm font-semibold text-gray-500">LKR</span>
                <span className="text-[40px] md:text-[50px] font-normal leading-none tracking-tight text-black">
                  {tier.price}
                </span>
                <span className="text-[15px] text-gray-500">/mo</span>
              </div>
              
              <p className="mb-8 pb-8 text-[15px] text-gray-500 border-b border-gray-200">
                {tier.description}
              </p>

              {/* Features List */}
              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <span className={`text-[15px] ${feature.value === "-" ? "text-gray-400" : "text-gray-600"}`}>
                      {feature.name}
                    </span>
                    
                    {/* Render specific numbers, checkmarks, or dashes */}
                    <div className="flex-shrink-0 ml-4 font-medium">
                      {typeof feature.value === "string" && feature.value !== "-" ? (
                        <span className="inline-flex items-center justify-center bg-white border border-gray-200 text-black px-2.5 py-0.5 rounded text-xs font-semibold">
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
                className={`group flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-[14px] font-semibold transition-all active:scale-[0.98] ${
                  tier.highlight 
                    ? "bg-[#333333] text-white hover:bg-black" 
                    : "bg-white text-black border border-gray-200 hover:bg-gray-50"
                }`}
              >
                Select Package
              </a>
            </motion.div>
          ))}
        </div>
        
      </section>
    </div>
  );
}