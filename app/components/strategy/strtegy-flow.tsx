"use client";

import { steps } from "@/app/components/data/steps";
import StepCard from "@/app/components/strategy/step-card";

export default function StrategyFlow() {
  return (
    <section className="py-24 container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
       SniperThink Module part 1
      </h2>

      <div className="grid md:grid-cols-2 gap-12 px-2 lg:px-0">
        {steps.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
}
