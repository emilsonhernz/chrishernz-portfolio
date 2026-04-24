"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projectFilters, projects, type ProjectFilter } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { staggerContainer } from "@/lib/motion";
import type { Project } from "@/data/projects";

export function ProjectFilter() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.filters.includes(activeFilter)),
    [activeFilter]
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-md border px-3 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-zinc-950 ${
              activeFilter === filter
                ? "border-cyan-300 bg-cyan-300 text-zinc-950"
                : "border-white/10 text-zinc-300 hover:border-cyan-300/40 hover:bg-white/5"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout variants={staggerContainer} initial="hidden" animate="visible" className="grid gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} onSelect={setSelectedProject} />
          ))}
        </AnimatePresence>
      </motion.div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
