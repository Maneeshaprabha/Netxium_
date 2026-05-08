"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck } from "lucide-react";

// --- DUMMY PRIVACY DATA ---
const privacyData = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p>
          At Netxium, we respect your privacy and are committed to protecting your personal data. 
          This Privacy Policy will inform you as to how we look after your personal data when you 
          visit our website and tell you about your privacy rights and how the law protects you.
        </p>
        <p>
          This policy applies to all information collected through our website, mobile applications, 
          and any related services, sales, marketing, or events.
        </p>
      </>
    )
  },
  {
    id: "data-collection",
    title: "2. Information We Collect",
    content: (
      <>
        <p>
          We may collect, use, store and transfer different kinds of personal data about you 
          which we have grouped together as follows:
        </p>
        <div className="bg-[#F4F7FB] p-6 rounded-2xl border border-gray-100 mt-6">
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#29AAE3] mt-2 flex-shrink-0" />
              <div>
                <strong className="text-black block mb-1">Identity Data:</strong>
                Includes first name, last name, username or similar identifier, and title.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#29AAE3] mt-2 flex-shrink-0" />
              <div>
                <strong className="text-black block mb-1">Contact Data:</strong>
                Includes billing address, delivery address, email address and telephone numbers.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#29AAE3] mt-2 flex-shrink-0" />
              <div>
                <strong className="text-black block mb-1">Technical Data:</strong>
                Includes internet protocol (IP) address, your login data, browser type and version, 
                time zone setting and location, and operating system.
              </div>
            </li>
          </ul>
        </div>
      </>
    )
  },
  {
    id: "data-usage",
    title: "3. How We Use Your Data",
    content: (
      <>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use 
          your personal data in the following circumstances:
        </p>
        <ul className="list-none space-y-3 mt-4">
          <li className="flex gap-3"><span className="text-[#29AAE3] font-bold">3.1</span> Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li className="flex gap-3"><span className="text-[#29AAE3] font-bold">3.2</span> Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li className="flex gap-3"><span className="text-[#29AAE3] font-bold">3.3</span> Where we need to comply with a legal or regulatory obligation.</li>
        </ul>
      </>
    )
  },
  {
    id: "cookies",
    title: "4. Cookies and Tracking",
    content: (
      <>
        <p>
          You can set your browser to refuse all or some browser cookies, or to alert you when 
          websites set or access cookies. If you disable or refuse cookies, please note that some 
          parts of this website may become inaccessible or not function properly.
        </p>
        <p>
          We use Google Analytics and other similar tracking technologies to track the activity on 
          our Service and hold certain information to improve and analyze our Service.
        </p>
      </>
    )
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: (
      <>
        <p>
          We have put in place appropriate security measures to prevent your personal data from 
          being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. 
          In addition, we limit access to your personal data to those employees, agents, contractors, 
          and other third parties who have a business need to know.
        </p>
        <p>
          They will only process your personal data on our instructions, and they are subject to a 
          duty of confidentiality.
        </p>
      </>
    )
  },
  {
    id: "your-rights",
    title: "6. Your Legal Rights",
    content: (
      <>
        <p>
          Under certain circumstances, you have rights under data protection laws in relation to 
          your personal data, including the right to:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="p-5 border border-gray-100 rounded-xl bg-white shadow-sm">
            <strong className="text-black block mb-2 text-sm uppercase tracking-wide">Access</strong>
            <p className="text-sm">Request access to your personal data.</p>
          </div>
          <div className="p-5 border border-gray-100 rounded-xl bg-white shadow-sm">
            <strong className="text-black block mb-2 text-sm uppercase tracking-wide">Correction</strong>
            <p className="text-sm">Request correction of the personal data we hold about you.</p>
          </div>
          <div className="p-5 border border-gray-100 rounded-xl bg-white shadow-sm">
            <strong className="text-black block mb-2 text-sm uppercase tracking-wide">Erasure</strong>
            <p className="text-sm">Request erasure of your personal data ("Right to be forgotten").</p>
          </div>
          <div className="p-5 border border-gray-100 rounded-xl bg-white shadow-sm">
            <strong className="text-black block mb-2 text-sm uppercase tracking-wide">Transfer</strong>
            <p className="text-sm">Request the transfer of your personal data to you or a third party.</p>
          </div>
        </div>
      </>
    )
  }
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction");

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = privacyData.map(section => 
        document.getElementById(section.id)
      );
      
      const currentScrollPos = window.scrollY + 200;

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120, 
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
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-lg md:text-xl">
              How we collect, use, and protect your personal information.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-start md:items-end gap-4"
          >
            <div className="flex items-center gap-3 px-5 py-2.5 bg-[#F4F7FB] border border-gray-100 rounded-full text-sm font-medium text-gray-600">
              <div className="w-2 h-2 rounded-full bg-[#29AAE3] animate-pulse" />
              Last Updated: October 12, 2024
            </div>
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
            {privacyData.map((section) => {
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
                  {isActive && (
                    <motion.div 
                      layoutId="active-privacy-toc"
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
          {privacyData.map((section) => (
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
          <div className="mt-24 pt-12 border-t border-gray-200 bg-[#1A1A1A] text-white p-10 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck size={24} className="text-[#29AAE3]" />
                  <h3 className="text-2xl font-normal tracking-tight">
                    Data Protection Officer
                  </h3>
                </div>
                <p className="text-gray-400 max-w-md text-[15px] leading-relaxed">
                  If you have any questions about this Privacy Policy or our privacy practices, 
                  please contact our DPO.
                </p>
              </div>
              
              <button className="bg-white text-black px-8 py-4 rounded-full text-[14px] font-bold hover:bg-gray-100 transition-colors shadow-xl flex-shrink-0">
                privacy@netxium.com
              </button>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}