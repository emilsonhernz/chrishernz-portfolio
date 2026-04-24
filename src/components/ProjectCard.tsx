"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { fadeUp } from "@/lib/motion";

type ProjectCardProps = {
  project: Project;
  onSelect?: (project: Project) => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const isInteractive = Boolean(onSelect);

  return (
    <motion.button
      layout
      type="button"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.28, ease: "easeOut" }}
      onClick={() => onSelect?.(project)}
      className={`group grid gap-5 rounded-lg border border-white/10 bg-white/[0.035] p-5 text-left transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.045] focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-zinc-950 ${
        isInteractive ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{project.category}</p>
        <h3 className="text-xl font-semibold text-zinc-50">{project.title}</h3>
      </div>
      <div className="grid gap-4 text-sm leading-6 text-zinc-400">
        <p><span className="text-zinc-200">Problem:</span> {project.problem}</p>
        <p><span className="text-zinc-200">Built:</span> {project.built}</p>
        <p><span className="text-zinc-200">Result:</span> {project.result}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span key={item} className="rounded-md border border-white/10 bg-zinc-950/70 px-2.5 py-1 text-xs text-zinc-300">
            {item}
          </span>
        ))}
      </div>
      {isInteractive ? <span className="text-sm font-semibold text-cyan-300">Open project details</span> : null}
    </motion.button>
  );
}
