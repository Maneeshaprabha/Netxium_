"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
  };

  return (
    // FULL-WIDTH WRAPPER: Creates the horizontal line spanning the entire screen
    <div className="w-full border-t border-gray-200">
      
      {/* MAIN CONTENT WRAPPER: 
        Added 'border-x border-gray-200' to create the vertical side lines.
        These lines will be constrained to the max-w-7xl width.
      */}
      <section className="max-w-7xl mx-auto px-6 py-20 overflow-hidden border-x border-gray-200">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center space-y-6"
        >
          <h2 className="font-mono text-sm tracking-widest uppercase mb-6 block text-center">
            //Introducing Netxium
          </h2>
          <h2 className="text-5xl md:text-5xl lg:text-[56px] leading-[1.1] font-semibold tracking-tight mb-8 text-center">
           <span className="text-gray-400 font-medium ">
            AI-powered solutions and expert software 
            </span>
              <span className="text-black font-semibold block">     services to accelerate your
            business</span>
        
          </h2>
          <p className=" text-gray-500 text-sm md:text-base   ml-autotext-base text-center mt-6 max-w-3xl mx-auto">
            Netxium delivers intelligent systems and cutting-edge software
            solutions that automate, analyze, and enhance your operations. We
            combine AI, machine learning, and design expertise to craft seamless
            digital experiences and scalable applications
          </p>
        </motion.div>

        {/* Grid Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid gap-8 justify-center grid-cols-1 md:grid-cols-2 max-w-[1200px]"
        >
          {/* Card 1 */}
          <motion.div variants={cardVariants} className="bg-[#F2F6FF] rounded-[44px] p-8 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-[40px] md:text-[48px] font-normal mb-3 leading-tight">
                Unify and Optimize Your Workflows
              </h2>
              <p className="text-base text-gray-600 mb-6">
                Integrate your tools, databases, and systems into a unified,
                intelligent platform. Netxium uncovers insights hidden in your data,
                enabling smarter strategies, faster decisions, and measurable
                business growth.
              </p>
            </div>
            <img
              src="src/assets/card_01.png"
              className="w-full h-64 rounded-2xl object-cover mt-auto"
              alt="Workflow visualization"
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={cardVariants} className="bg-[#F2F6FF] rounded-[44px] p-8 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-[40px] md:text-[48px] font-normal mb-3 leading-tight">
                Automate and Streamline Processes
              </h2>
              <p className="text-base text-black mb-6">
                Transform repetitive, time-consuming tasks into efficient, AI-driven
                workflows. Our solutions ensure precision, speed, and consistency
                empowering your team to focus on what matters most.
              </p>
            </div>
            <img
              src="src/assets/card_2.jpeg"
              className="w-full h-64 rounded-2xl object-cover mt-auto"
              alt="Automation graphics"
            />
          </motion.div>

          {/* Highlight Card (Blue – Left) */}
          <motion.div variants={cardVariants} className="bg-[#29AAE3] rounded-[44px] p-8 flex items-center min-h-[400px] h-full">
            <p className="text-white text-[36px] md:text-[48px] leading-tight">
              Bridge the gap <br />
              between{" "}
              <span className="inline-block mt-2 px-4 py-1 rounded-xl bg-[#0D4DB1]">
                business
              </span>
              <br />
              <span className="inline-block mt-2 px-4 py-1 rounded-xl bg-[#0D4DB1]">
                vision and technology
              </span>
              <br />
              execution with expert <br />
              guidance.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={cardVariants} className="bg-[#F2F6FF] rounded-[44px] p-8 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-[40px] md:text-[48px] font-normal mb-3 leading-tight">
                Design and Develop with Impact
              </h2>
              <p className="text-base text-gray-600 mb-6">
                From stunning UI/UX experiences to robust web and mobile
                applications, Netxium combines creativity with technology. We
                deliver solutions that engage users, accelerate delivery, and adapt
                dynamically to your business needs.
              </p>
            </div>
            <img
              src="src/assets/card_4.jpeg"
              className="w-full h-64 rounded-2xl object-cover mt-auto"
              alt="UI/UX Design"
            />
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={cardVariants} className="bg-[#F2F6FF] rounded-[44px] p-8 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-[40px] md:text-[48px] font-normal mb-3 leading-tight">
                Scale with Confidence
              </h2>
              <p className="text-base text-black mb-6">
                Whether building AI-driven features, developing mobile apps, or
                designing intuitive digital interfaces, Netxium grows with you. Our
                services are crafted to ensure performance, reliability, and
                scalability at every stage.
              </p>
            </div>
            <img
              src="src/assets/card_3.jpeg"
              className="w-full h-64 rounded-2xl object-cover mt-auto"
              alt="Scaling infrastructure"
            />
          </motion.div>

          {/* Highlight Card (Right with Video) */}
          <motion.div variants={cardVariants} className="relative rounded-[44px] overflow-hidden min-h-[400px] h-full">
            {/* <img
              src="src/assets/card_06.jpg"
              alt="Expert software services"
              className="absolute inset-0 w-full h-full object-cover"
            /> */}
            <video
              src="src/assets/blue.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            
            <div className="relative z-10 p-8 text-white h-full flex items-end">
              <p className="text-[36px] md:text-[48px] max-w-sm leading-snug">
                Elevate your business with intelligent solutions and expert
                software services.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}