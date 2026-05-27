// import HeroImage from "../../assets/home_image.png";
// import Button from "../UI/Button";

// export default function Hero() {
//   return (
//     <section className="w-full min-h-screen relative">
//    <div className="w-full rounded-3xl h-[500px] md:h-[650px]">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${HeroImage})` }}
//         />
//       </div>
//       {/* Left */}
//      <div className="absolute inset-0">
//   <div className="max-w-7xl mx-auto h-full flex flex-col justify-center px-6">
//         <h1 className="text-3xl md:text-[64px] font-normal leading-[1.2] ">
//           We build exceptional <br/>  Digital products and  <br/>AI solutions
//         </h1>

//         <p className="mt-5 text-[16px]  text-gray-900 max-w-2xl">
//           We design, develop, and deploy AI-powered <br />software solutions tailored to your business needs.
//         </p>

//         <div className="mt-8 flex gap-4">
//           <Button  variant="primary" size="sm">
//             Work with Us
//           </Button>
//           {/* <button className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-[#EAECF8] rounded-full">
//             Services
//           </button> */}

//           <Button
//             variant="secondary"
//           >
//             Our Services
//           </Button>
//         </div>
//         </div>
//       </div>

//       {/* Right */}

//     </section>
//   );
// }

// export default function Hero() {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">

//       {/* Navbar */}
//       <header className="flex justify-between items-center px-8 py-6">
//         <div className="font-semibold text-lg">Joseph Alexander</div>

//         <nav className="hidden md:flex items-center gap-6 text-sm">
//           <a href="#">Work</a>
//           <a href="#">Services</a>
//           <a href="#">Pricing</a>
//           <a href="#">Blog</a>
//           <button className="border px-4 py-1 rounded-full">Contact</button>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16">

//         {/* Left */}
//         <div className="max-w-xl">
//           <span className="inline-block bg-gray-200 text-sm px-4 py-1 rounded-full mb-6">
//             ● Available for August ‘25
//           </span>

//           <h1 className="text-4xl md:text-6xl font-light leading-tight">
//             Design that <br />
//             <span className="font-semibold">delivers results.</span>
//           </h1>

//           <p className="mt-6 text-gray-600">
//             Strategic design that drives growth, not just looks good.
//             I create everything your brand needs to attract customers
//             and turn them into sales.
//           </p>

//           <button className="mt-6 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
//             Book a call with me
//           </button>
//         </div>

//         {/* Right (Floating Cards) */}
//         <div className="relative mt-12 md:mt-0">

//           <img
//             src="/mockup1.png"
//             alt=""
//             className="w-72 rounded-xl shadow-xl rotate-[-10deg] absolute top-0 left-0"
//           />

//           <img
//             src="/mockup2.png"
//             alt=""
//             className="w-72 rounded-xl shadow-xl rotate-[8deg] relative z-10"
//           />

//           <img
//             src="/mockup3.png"
//             alt=""
//             className="w-72 rounded-xl shadow-xl rotate-[15deg] absolute top-10 right-0"
//           />

//         </div>
//       </section>

//       {/* Clients Strip */}
//       <div className="px-8 md:px-16 py-8 border-t flex flex-wrap items-center gap-6 text-gray-500 text-sm">
//         <span>⭐ 15+ Happy clients</span>
//         <span>Kintsugi</span>
//         <span>CoreOS</span>
//         <span>Luminary</span>
//       </div>

//     </div>
//   );
// }






"use client";
import React from "react";
import { motion } from "framer-motion";

// --- Media Imports ---
import HeroVideo from "../../assets/smooth.mp4";
import HeroImageStack from "../Hero/HeroImageStack"; // Restored your component

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <section className="relative w-full min-h-[100svh] md:min-h-[80vh] overflow-hidden flex items-center">
      
      {/* FULL WIDTH VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 pt-32 pb-16 md:pt-40 md:pb-20 w-full">
        
        {/* Changed to flex-col on mobile for better stacking control, grid on large screens */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-10 w-full items-center">
          
          {/* LEFT SIDE: Text & Social Proof */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full pt-4 md:pt-10 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.h1
              variants={item}
              className="max-w-[800px] text-4xl sm:text-5xl md:text-[64px] lg:text-7xl font-medium leading-[1.05] tracking-tight text-black/80"
            >
              Where Advanced Intelligence Meets{" "}
              <span className="text-neutral-500 block mt-2">
                Human-Centric Design to Drive Measurable Growth.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 md:mt-8 max-w-lg text-base sm:text-lg md:text-xl text-neutral-500 leading-relaxed font-light"
            >
              We design, develop, and deploy AI-powered software solutions
              tailored to your business needs.
            </motion.p>

            {/* RESTORED SOCIAL PROOF */}
            <motion.div
              variants={item}
              className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8"
            >
              {/* Avatars + Stars */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {/* Mock Avatars */}
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="Client" className="h-10 w-10 rounded-full border-2 border-white bg-gray-100 shadow-sm" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Client" className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 shadow-sm" />
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" alt="Client" className="h-10 w-10 rounded-full border-2 border-white bg-gray-300 shadow-sm" />
                  <div className="h-10 w-10 rounded-full border-2 border-white bg-neutral-800 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                    12+
                  </div>
                </div>
                
                <div className="text-left">
                  <div className="flex text-yellow-500 text-sm tracking-widest">
                    ★★★★★
                  </div>
                  <p className="text-sm text-neutral-500 font-medium mt-0.5">
                    15+ Happy clients
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: HeroImageStack Component */}
          <div className="relative w-full h-full flex justify-center lg:justify-end mt-4 lg:mt-0 min-h-[400px] lg:min-h-[600px]">
            {/* Your component is safely back inside the responsive container. 
              The parent div gives it height on mobile so it doesn't collapse! 
            */}
            <HeroImageStack />
          </div>

        </div>
      </div>
    </section>
  );
}