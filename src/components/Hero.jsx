import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "motion/react";

const container = (delay) => {
  return {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { delay: delay, duration: 0.5 },
  };
};

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              {...container(0)}
              className="pb-16 text-6xl font-thin tracking-tight lg:text-8xl lg:mt-16"
            >
              Nishant Chaudhary
            </motion.h1>
            <motion.span
              {...container(0.3)}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl text-transparent tracking-tight"
            >
              Full Stack Developer & ML Engineer
            </motion.span>
            <motion.p
              {...container(0.6)}
              className="py-6 max-w-xl text-lg font-light tracking-tight text-neutral-400"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="w-full rounded-full lg:w-96"
              src={profilePic}
              alt="profilePic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
