"use client";

import { motion } from "framer-motion";
import { timelineItems } from "@/data/resume";
import { fadeUp, viewport } from "@/lib/motion";

export function Timeline() {
  return (
    <div className="relative space-y-4 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/10">
      {timelineItems.map((item) => (
        <motion.article
          key={`${item.type}-${item.title}`}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative grid gap-2 rounded-lg border border-white/10 bg-white/[0.035] p-5 pl-12"
        >
          <span className="absolute left-[11px] top-6 size-3 rounded-full border border-cyan-300 bg-zinc-950 shadow-[0_0_18px_rgba(103,232,249,0.55)]" />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{item.type}</p>
          <div>
            <h3 className="text-xl font-semibold text-zinc-50">{item.title}</h3>
            <p className="text-sm text-zinc-400">{item.organization}</p>
          </div>
          <p className="text-sm font-medium text-zinc-300">{item.period}</p>
          <p className="max-w-3xl text-sm leading-6 text-zinc-400">{item.summary}</p>
        </motion.article>
      ))}
    </div>
  );
}
