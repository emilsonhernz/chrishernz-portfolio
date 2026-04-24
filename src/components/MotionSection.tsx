"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewport } from "@/lib/motion";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
};

export function MotionSection({ children, className }: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
