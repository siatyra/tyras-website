"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "./navLink";

export const Navbar = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const className = "text-3xl cursor-crosshair text-white hover:text-[#4EB17A]";

  return (
    <motion.div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`${className} border-b flex gap-5 justify-start align-end mb-10 pb-4 ${isOpen && "text-[#4EB17A]"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 5,
      }}
    >
      <div className="cursor-not-allowed">Menu</div>
      <AnimatePresence>
        {isOpen && (
          <div className="flex gap-5">
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
