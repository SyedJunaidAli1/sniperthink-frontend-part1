"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { sendInterest } from "@/lib/api";

const animations = [
  { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
];

export default function StepCard({ step, index }: any) {
  const [loading, setLoading] = useState(false);

  const handleInterest = async () => {
    setLoading(true);

    try {
      await sendInterest({
        name: "Test User",
        email: "test@example.com",
        step: step.id,
      });

      alert("Interest submitted successfully!");
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  const animation = animations[index % animations.length];

  return (
    <motion.div
      className="p-6 border rounded-xl shadow-sm"
      variants={animation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

      <p className="mb-4 text-muted-foreground">{step.description}</p>

      <button
        onClick={handleInterest}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading ? "Sending..." : "I'm Interested"}
      </button>
    </motion.div>
  );
}
