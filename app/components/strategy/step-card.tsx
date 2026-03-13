"use client";

import { motion } from "framer-motion";

export default function StepCard({ step }: any) {
  return (
    <motion.div
      className="p-6 border rounded-xl shadow-sm"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

      <p className="text-muted-foreground">{step.description}</p>
    </motion.div>
  );
}
