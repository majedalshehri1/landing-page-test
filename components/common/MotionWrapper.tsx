"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface MotionWrapperProps {
  children: React.ReactNode;
  variants: any;
  className?: string;
}

export default function MotionWrapper({
  children,
  variants,
  className,
}: MotionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
