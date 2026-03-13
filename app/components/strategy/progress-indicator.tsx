"use client";

import { motion, useScroll } from "framer-motion";

export default function ProgressIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="bg-primary"
      style={{
        scaleX: scrollYProgress,
        originX: 0,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 10,
      }}
    />
  );
}
