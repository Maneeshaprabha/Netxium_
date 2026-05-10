// const  frequentlyAskedQuestions = [
//     {
//         question: "Do you want to learn more about us, let’s go the blog page.",
//         answer: "AI Supply agents handle end-to-end workflows — from gathering data to executing actions — without needing constant human input.",
//     },{
//         question: "How can I get started with your services?",
//         answer: "Getting started is easy! Simply reach out to us through our contact page, and our team will guide you through the process.",
//     },{
//         question: "What industries do you specialize in?",
//         answer: "We specialize in a wide range of industries including healthcare, finance, retail, and technology, tailoring our solutions to meet specific industry needs.",
//     },{
//         question: "What is your pricing model?",
//         answer: "Our pricing model is flexible and depends on the scope and complexity of the project. We offer both fixed-price and hourly-rate options to suit your budget.",    
//     }
// ];

// export function FQA() {  
//     return (
//         <div>
//             <h1>Frequently Asked Questions</h1>
//             <div>
//                 {frequentlyAskedQuestions.map((faq, index) => (
//                     <div key={index}>
//                         <h2>{faq.question}</h2>
//                         <p>{faq.answer}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// } 



"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const faqData = [
  {
    question: "What services does Netxium provide?",
    answer:
      "Netxium specializes in AI & machine learning, software development, mobile app development, UI/UX design, and intelligent automation solutions.",
  },
  {
    question: "What industries does Netxium work with?",
    answer:
      "We work with startups, enterprises, and businesses across industries including finance, retail, healthcare, education, and technology.",
  },
  {
    question: "Can Netxium build custom software solutions?",
    answer:
      "Yes. We develop scalable and fully customized web, mobile, and enterprise software tailored to your business needs.",
  },
  {
    question: "Do you provide AI and machine learning solutions?",
    answer:
      "Absolutely. We create intelligent systems for automation, predictive analytics, data processing, and AI-powered business optimization.",
  },
  {
    question: "Does Netxium offer UI/UX design services?",
    answer:
      "Yes. Our team designs modern, intuitive, and user-focused digital experiences for web and mobile platforms.",
  },
  {
    question: "Can you develop mobile applications for iOS and Android?",
    answer:
      "Yes. We build high-performance mobile applications for both iOS and Android using modern technologies.",
  },
  {
    question: "How does Netxium manage projects?",
    answer:
      "We follow a structured process including discovery, planning, design, development, testing, and launch to ensure successful project delivery.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing maintenance, optimization, updates, and technical support after deployment.",
  },
  {
    question: "How can I start a project with Netxium?",
    answer:
      "You can contact our team through the website to discuss your ideas, goals, and project requirements.",
  },
  {
    question: "Why choose Netxium?",
    answer:
      "Netxium combines innovation, intelligent technology, and creative design to deliver scalable solutions that drive real business growth.",
  },
];

export default function FAQ() {
  // Set the first item (index 0) to be open by default, just like the image
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    // If clicking the currently open item, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    // Outer wrapper with slight off-white background to make the white cards pop
    <div className="w-full bg-[#FAFAFA] border-t border-gray-200">
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-x border-gray-200 font-sans flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* LEFT COLUMN: FAQ Accordion */}
        <div className="lg:w-7/12">
          
          {/* Header */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-[64px] leading-[1.05] font-normal tracking-tight mb-12 md:mb-16"
          >
            <span className="text-black block">Your questions</span>
            <span className="text-gray-400 block">answered.</span>
          </motion.h2>

          {/* Accordion List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-4"
          >
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              // Format number to have a leading zero (01, 02, etc.)
              const number = String(index + 1).padStart(2, '0');

              return (
                <motion.div 
                  variants={itemVariants}
                  key={index} 
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 md:px-8 bg-white cursor-pointer hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-6 text-left">
                      {/* Hide number on very small screens, visible on md and up */}
                      <span className="hidden md:block text-gray-400 font-mono text-sm tracking-widest">
                        {number}
                      </span>
                      <span className="text-black font-medium text-base md:text-lg">
                        {faq.question}
                      </span>
                    </div>
                    
                    {/* Plus / Minus Icon */}
                    <div className="flex-shrink-0 ml-4">
                      <svg 
                        width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-black" : "text-gray-500"}`}
                      >
                        {isOpen ? (
                          <line x1="5" y1="12" x2="19" y2="12" /> // Minus icon
                        ) : (
                          <>
                            <line x1="12" y1="5" x2="12" y2="19" /> // Plus icon (vertical line)
                            <line x1="5" y1="12" x2="19" y2="12" /> // Plus icon (horizontal line)
                          </>
                        )}
                      </svg>
                    </div>
                  </button>

                  {/* Expandable Answer Area */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-2 text-gray-600 text-sm md:text-base leading-relaxed md:pl-[68px]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Sticky CTA Card */}
        <div className="lg:w-5/12 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sticky top-32 bg-white border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
          {/* Logo */}
<div className="w-40 h-20 overflow-hidden mb-8  flex items-center justify-center">
  <img
    src="src/assets/NETXIUM_LBOO.png"
    alt="Netxium Logo"
    className="max-h-full max-w-full object-contain"
  />
</div>

            {/* Text Content */}
            <h3 className="text-2xl md:text-3xl text-gray-400 font-medium tracking-tight mb-2">
              Still not sure?
            </h3>
            <h2 className="text-3xl md:text-4xl text-black font-medium tracking-tight mb-6 leading-tight">
              Book a free discovery call.
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-10 leading-relaxed max-w-sm">
              Learn more about how I work and how I can help you and your business take the next step.
            </p>

            {/* Button & Cal.com Branding */}
            <div className="flex flex-wrap items-center gap-4">
              
              {/* Your sleek dark button */}
              <button className="flex items-center gap-2.5 bg-gradient-to-b from-neutral-800 to-black border border-neutral-700/50 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 px-6 py-3 rounded-full transition-all w-fit group">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-90 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <path d="M9 16l2 2 4-4" />
                </svg>
                <span className="text-white font-bold text-sm md:text-base tracking-wide">
                  Schedule Now
                </span>
              </button>

              {/* Branding */}
              <span className="text-gray-400 font-medium tracking-wide">
                Cal.com
              </span>
            </div>

          </motion.div>
        </div>

      </section>
    </div>
  );
}