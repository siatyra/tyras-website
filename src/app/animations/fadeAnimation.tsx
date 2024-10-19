"use client";

import { motion } from "framer-motion";

import { TransitionProps } from "../interfaces";

export const FadeIn = ({
  children,
  delay = 0,
  duration = 5,
}: TransitionProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: duration,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};
