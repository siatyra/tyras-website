"use client";

import { motion } from "framer-motion";
import { ScrollSectionProps } from "../interfaces";

export const ScrollSection = ({ children, className }: ScrollSectionProps) => {
  return (
    <>
      <motion.div
        className={`${className}`}
        initial={{
          x: "-100px",
          opacity: 0.2,
          scale: 0.9,
        }}
        whileInView={{
          x: "0px",
          opacity: 1,
          scale: 1,
          transition: { duration: 1 },
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
