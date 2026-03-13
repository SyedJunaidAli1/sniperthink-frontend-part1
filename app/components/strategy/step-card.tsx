"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { sendInterest } from "@/lib/api";

export default function StepCard({ step }: any) {
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
