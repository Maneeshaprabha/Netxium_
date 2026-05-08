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
//         <span>⭐ 99+ Happy clients</span>
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
import HeroImageStack from "../Hero/HeroImageStack";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
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
    <section className="relative w-full min-h-[80vh] overflow-hidden">
      {/* FULL WIDTH VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="../src/assets/smooth.mp4" type="video/mp4" />
      </video>

      {/* CONTENT */}
      <header className="relative z-10 mx-auto max-w-[1400px] px-6 pt-40 pb-20 min-h-[80vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          {/* Left Side */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="pt-10"
          >
            <motion.h1
              variants={item}
              className="max-w-[800px] text-5xl font-medium leading-[1.05] md:text-7xl tracking-tight text-black/80"
            >
              Where Advanced Intelligence Meets{" "}
              <span className="text-neutral-500">
                Human-Centric Design to Drive Measurable Growth.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-lg text-lg md:text-xl text-neutral-400 leading-relaxed font-light"
            >
              We design, develop, and deploy AI-powered software solutions
              tailored to your business needs.
            </motion.p>

            {/* RESTORED SOCIAL PROOF & MEDIA LINKS */}
            <motion.div
              variants={item}
              className="mt-12 flex flex-col sm:flex-row sm:items-center gap-8"
            >
              {/* Social Proof (Avatars + Stars) */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {/* Replace bg-neutral-800 with actual image paths using standard HTML img tags if needed */}
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-white bg-neutral-800 shadow-sm"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-500 text-sm tracking-widest">
                    ★★★★★
                  </div>

                  <p className="text-sm text-neutral-400 font-medium mt-0.5">
                    99+ Happy clients
                  </p>
                </div>
              </div>

              {/* Vertical Divider (Hidden on mobile, visible on desktop) */}
              {/* <div className="hidden sm:block w-px h-10 bg-neutral-200"></div> */}

              {/* Social Media Links */}
              {/* <div className="flex items-center gap-5 text-sm font-medium text-neutral-400 uppercase tracking-wider">
                <a href="#" className="hover:text-black transition-colors duration-300">Twitter</a>
                <a href="#" className="hover:text-black transition-colors duration-300">LinkedIn</a>
                <a href="#" className="hover:text-black transition-colors duration-300">Dribbble</a>
              </div> */}
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <div className="relative w-full h-full">
            <HeroImageStack />
          </div>
        </div>
      </header>
    </section>
  );
}
