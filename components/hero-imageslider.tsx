"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import TypewriterTitle from "./ui/TypewriterTitle";
import Home from "@/app/page";
import { WobbleCardDemo } from "./hero-wobblecard";
import { Hero } from "./pages/Hero";

export function ImagesSliderDemo() {
  const images = [
    "/herocover1.jpg",
    "/herocover2.jpg",
    "/herocover3.jpg",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >

        <motion.p className="font-bold text-5xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-0">
          POPE
        </motion.p>

        <motion.p className="font-bold text-xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2">
          <TypewriterTitle />
        </motion.p>
        <button
          className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight, // Adjust this value as needed
              behavior: 'smooth'
            });
          }}
        >          <span>Explore Now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
