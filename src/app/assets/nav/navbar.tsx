"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "./navLink";

export const Navbar = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const className = "text-xl sm:text-2xl md:text-3xl cursor-crosshair text-white hover:text-[#4EB17A]";

  return (
    <motion.div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`${className} border-b flex md:flex-row gap-2 md:gap-5 justify-start items-start mb-5 md:mb-10 pb-2 md:pb-4 ${
        isOpen && "text-[#fce803]"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 5,
      }}
    >
      <div className="cursor-not-allowed text-lg sm:text-xl md:text-2xl">Menu</div>
      <AnimatePresence>
        {isOpen && (
          <div className="flex gap-2 md:flex-row md:gap-5">
            <NavLink>
              <Link href="/" className={className}>
                Home
              </Link>
            </NavLink>
            <NavLink delay={0.4}>
              <Link href="/about" className={className}>
                About
              </Link>
            </NavLink>
            <NavLink delay={0.8}>
              <Link href="/portfolio" className={className}>
                Portfolio
              </Link>
            </NavLink>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
