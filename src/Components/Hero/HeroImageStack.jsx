"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroImageStack() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 100]); 
  const opacityParallax = useTransform(scrollY, [0, 400], [1, 0]);

  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div 
      style={{ y: yParallax, opacity: opacityParallax }}
      // INCREASED SIZING: w-[60%] and max-w-[900px] gives it much more horizontal room
      // POSITIONING: -right-12 pushes it slightly off-center so it doesn't crush the text
      className="relative w-full max-w-3xl mx-auto mt-16 md:mt-0 lg:absolute lg:-right-12 lg:top-1/2 lg:-translate-y-1/2 lg:w-[60%] lg:max-w-[900px] flex justify-center items-center z-10 pointer-events-none"
    >
      <motion.div animate={floatAnimation} className="w-full h-full flex justify-center">
        <img 
          src="../src/assets/home_01.png" 
          alt="AI Humanoid" 
          // INCREASED HEIGHT: max-h-[900px] allows it to grow much taller
          // SCALE: Added lg:scale-110 to give it a 10% visual boost on desktop
          className="w-full h-auto max-h-[1000px] lg:max-h-[1000px] lg:scale-200 object-contain drop-shadow-2xl pointer-events-auto" 
        />
      </motion.div>
    </motion.div>
  );
}