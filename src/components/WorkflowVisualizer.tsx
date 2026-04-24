"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { workflows } from "@/data/services";

export function WorkflowVisualizer() {
  const [activeWorkflow, setActiveWorkflow] = useState(workflows[0]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="grid gap-2">
        {workflows.map((workflow) => (
          <button
            key={workflow.title}
            type="button"
            onClick={() => setActiveWorkflow(workflow)}
            className={`rounded-md border px-4 py-3 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-zinc-950 ${
              activeWorkflow.title === workflow.title
                ? "border-cyan-300/60 bg-cyan-300/10 text-cyan-100"
                : "border-white/10 text-zinc-300 hover:border-cyan-300/30 hover:bg-white/5"
            }`}
          >
            {workflow.label}
          </button>
        ))}
      </div>
      <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
        <div className="grid gap-4 md:grid-cols-3">
          {activeWorkflow.steps.map((step, index) => (
            <motion.div
              key={`${activeWorkflow.title}-${step}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.25 }}
              className="relative rounded-lg border border-white/10 bg-zinc-950/70 p-4"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Step {index + 1}</p>
              <p className="text-sm font-medium text-zinc-100">{step}</p>
              {index < activeWorkflow.steps.length - 1 ? (
                <span className="absolute -right-4 top-1/2 hidden h-px w-8 bg-cyan-300/40 md:block" aria-hidden="true" />
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
