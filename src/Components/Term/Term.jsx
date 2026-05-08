"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";

// --- DUMMY LEGAL DATA ---
const termsData = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p>
          Welcome to Netxium. These Terms and Conditions govern your use of our website, 
          products, and services. By accessing or using our platform, you agree to be bound 
          by these terms. If you disagree with any part of the terms, then you do not have 
          permission to access the service.
        </p>
        <p>
          Our services are designed to provide cutting-edge AI and software solutions. 
          The information provided on this platform is for general informational purposes 
          only and is subject to change without notice.
        </p>
      </>
    )
  },
  {
    id: "user-accounts",
    title: "2. User Accounts",
    content: (
      <>
        <p>
          When you create an account with us, you must provide information that is accurate, 
          complete, and current at all times. Failure to do so constitutes a breach of the 
          Terms, which may result in immediate termination of your account on our Service.
        </p>
        <ul className="list-none space-y-3 mt-4">
          <li className="flex gap-3"><span className="text-[#29AAE3] font-bold">2.1</span> You are responsible for safeguarding the password that you use to access the Service.</li>
          <li className="flex gap-3"><span className="text-[#29AAE3] font-bold">2.2</span> You agree not to disclose your password to any third party.</li>
          <li className="flex gap-3"><span className="text-[#29AAE3] font-bold">2.3</span> You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
        </ul>
      </>
    )
  },
  {
    id: "intellectual-property",
    title: "3. Intellectual Property",
    content: (
      <>
        <p>
          The Service and its original content, features, and functionality are and will 
          remain the exclusive property of Netxium and its licensors. The Service is 
          protected by copyright, trademark, and other laws of both the United States and 
          foreign countries.
        </p>
        <p>
          Our trademarks and trade dress may not be used in connection with any product or 
          service without the prior written consent of Netxium.
        </p>
      </>
    )
  },
  {
    id: "prohibited-uses",
    title: "4. Prohibited Uses",
    content: (
      <>
        <p>
          You may use the Service only for lawful purposes and in accordance with Terms. 
          You agree not to use the Service:
        </p>
        <div className="bg-[#F4F7FB] p-6 rounded-2xl border border-gray-100 mt-6">
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              In any way that violates any applicable national or international law or regulation.
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              To exploit, harm, or attempt to exploit or harm minors in any way.
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              To transmit, or procure the sending of, any advertising or promotional material.
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              To impersonate or attempt to impersonate Netxium, a Netxium employee, or another user.
            </li>
          </ul>
        </div>
      </>
    )
  },
  {
    id: "limitation-liability",
    title: "5. Limitation of Liability",
    content: (
      <>
        <p>
          In no event shall Netxium, nor its directors, employees, partners, agents, suppliers, 
          or affiliates, be liable for any indirect, incidental, special, consequential or 
          punitive damages, including without limitation, loss of profits, data, use, goodwill, 
          or other intangible losses, resulting from your access to or use of or inability to 
          access or use the Service.
        </p>
      </>
    )
  },
  {
    id: "governing-law",
    title: "6. Governing Law",
    content: (
      <>
        <p>
          These Terms shall be governed and construed in accordance with the laws of New York, 
          United States, without regard to its conflict of law provisions.
        </p>
        <p>
          Our failure to enforce any right or provision of these Terms will not be considered a 
          waiver of those rights. If any provision of these Terms is held to be invalid or 
          unenforceable by a court, the remaining provisions of these Terms will remain in effect.
        </p>
      </>
    )
  }
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("introduction");

  // Scroll Spy Logic: Updates the sidebar active state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = termsData.map(section => 
        document.getElementById(section.id)
      );
      
      const currentScrollPos = window.scrollY + 200; // Offset for header

      sectionElements.forEach(element => {
        if (!element) return;
        const { offsetTop, offsetHeight, id } = element;
        if (currentScrollPos >= offsetTop && currentScrollPos < offsetTop + offsetHeight) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section when clicking sidebar link
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120, // Leave space for a fixed header if you have one
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative w-full bg-white font-sans selection:bg-[#29AAE3]/20 selection:text-black">
      
      {/* 1. BACKGROUND WIREFRAME GRID */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center fixed">
        <div className="w-full max-w-7xl h-full border-x border-gray-100 relative">
          <div className="absolute left-1/4 top-0 bottom-0 border-l border-gray-100" />
          <div className="absolute left-1/2 top-0 bottom-0 border-l border-gray-100" />
          <div className="absolute left-3/4 top-0 bottom-0 border-l border-gray-100" />
        </div>
      </div>

      {/* 2. HERO HEADER */}
      <div className="relative z-10 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <a href="#" className="inline-flex items-center gap-2 text-gray-500 hover:text-black font-medium text-sm mb-8 transition-colors group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </a>
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-normal tracking-tight text-black mb-6 leading-none">
              Terms & Conditions
            </h1>
            <p className="text-gray-500 text-lg md:text-xl">
              Please read these terms carefully before using our platform.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-start md:items-end gap-4"
          >
            <div className="flex items-center gap-3 px-5 py-2.5 bg-[#F4F7FB] border border-gray-100 rounded-full text-sm font-medium text-gray-600">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Last Updated: October 12, 2024
            </div>
            <button className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#29AAE3] transition-colors">
              <Download size={16} /> Download PDF
            </button>
          </motion.div>
        </div>
      </div>

      {/* 3. MAIN CONTENT: SIDEBAR + LEGAL TEXT */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* LEFT: Sticky Table of Contents */}
        <div className="w-full lg:w-[320px] flex-shrink-0 lg:sticky lg:top-32 hidden md:block">
          <div className="flex flex-col gap-1 pr-6 border-l-2 border-gray-100 pl-6">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4 ml-2">
              On this page
            </span>
            {termsData.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left py-2.5 px-4 rounded-xl text-[14px] transition-all duration-300 relative ${
                    isActive 
                      ? "text-black font-semibold bg-gray-50" 
                      : "text-gray-500 hover:text-black hover:bg-gray-50/50"
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div 
                      layoutId="active-toc"
                      className="absolute left-[-26px] top-0 bottom-0 w-0.5 bg-black"
                    />
                  )}
                  {section.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Document Content */}
        <div className="w-full lg:flex-1 max-w-3xl">
          {termsData.map((section) => (
            <div 
              key={section.id} 
              id={section.id} 
              className="mb-20 scroll-mt-32"
            >
              <h2 className="text-3xl md:text-[36px] font-normal text-black tracking-tight mb-8">
                {section.title}
              </h2>
              <div className="space-y-6 text-[16px] md:text-[17px] text-gray-600 leading-[1.8] font-light">
                {section.content}
              </div>
            </div>
          ))}

          {/* End of document confirmation block */}
          <div className="mt-24 pt-12 border-t border-gray-200 bg-[#F4F7FB] p-10 rounded-[2rem]">
            <h3 className="text-2xl font-medium text-black tracking-tight mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-8 max-w-md">
              If you have any questions about these Terms, please contact our legal team for clarification.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-2xl text-sm font-semibold hover:bg-gray-800 transition-colors shadow-lg">
              Contact Legal Team
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}