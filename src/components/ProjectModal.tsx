"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className="absolute inset-0 bg-zinc-950/82 backdrop-blur-md" type="button" aria-label="Close modal backdrop" onClick={onClose} />
          <motion.article
            className="relative max-h-[88svh] w-full max-w-5xl overflow-y-auto rounded-lg border border-white/10 bg-zinc-950 p-5 shadow-2xl shadow-cyan-950/30 md:p-7"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="mb-6 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{project.category}</p>
                <h2 id="project-modal-title" className="text-2xl font-semibold text-zinc-50 md:text-4xl">
                  {project.title}
                </h2>
                <p className="max-w-3xl leading-7 text-zinc-400">{project.overview}</p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="grid size-10 shrink-0 place-items-center rounded-md border border-white/10 text-zinc-300 transition hover:border-cyan-300/40 hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-zinc-950"
                aria-label="Close project details"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
              <div className="space-y-5">
                <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                  <p className="mb-2 text-sm font-semibold text-zinc-200">Problem</p>
                  <p className="text-sm leading-6 text-zinc-400">{project.problem}</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                  <p className="mb-2 text-sm font-semibold text-zinc-200">What I built</p>
                  <p className="text-sm leading-6 text-zinc-400">{project.built}</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                  <p className="mb-3 text-sm font-semibold text-zinc-200">Implementation notes</p>
                  <ul className="space-y-2 text-sm leading-6 text-zinc-400">
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <aside className="space-y-5">
                <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/[0.055] p-5">
                  <p className="mb-2 text-sm font-semibold text-cyan-100">Result / impact</p>
                  <p className="text-sm leading-6 text-zinc-300">{project.result}</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                  <p className="mb-3 text-sm font-semibold text-zinc-200">Tech used</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span key={item} className="rounded-md border border-white/10 bg-zinc-950/70 px-2.5 py-1 text-xs text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid gap-3">
                  {project.media.map((media) => (
                    <div key={media.label} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
                      {media.src ? (
                        media.type === "video" ? (
                          <video className="aspect-video w-full bg-black object-cover" controls poster={media.poster}>
                            <source src={media.src} />
                          </video>
                        ) : (
                          <Image
                            className="aspect-video w-full bg-zinc-900 object-cover"
                            src={media.src}
                            alt={media.alt ?? media.label}
                            width={media.width ?? 1280}
                            height={media.height ?? 720}
                          />
                        )
                      ) : (
                        <div className="grid aspect-video place-items-center bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(255,255,255,0.03))] p-5 text-center text-sm text-zinc-400">
                          Add {media.type} asset here
                        </div>
                      )}
                      <p className="border-t border-white/10 px-4 py-3 text-sm text-zinc-300">{media.label}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
