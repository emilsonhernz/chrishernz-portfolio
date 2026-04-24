"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type ServiceCardProps = {
  service: {
    title: string;
    summary: string;
    useCases: string[];
    tools: string[];
    outcome: string;
  };
  isOpen: boolean;
  onToggle: () => void;
};

export function ServiceCard({ service, isOpen, onToggle }: ServiceCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.035] transition hover:border-cyan-300/30">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-4 p-5 text-left focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-zinc-950"
      >
        <span className="space-y-2">
          <span className="block text-lg font-semibold text-zinc-50">{service.title}</span>
          <span className="block text-sm leading-6 text-zinc-400">{service.summary}</span>
        </span>
        <ChevronDown className={`mt-1 shrink-0 text-cyan-300 transition ${isOpen ? "rotate-180" : ""}`} size={18} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="grid gap-5 border-t border-white/10 p-5 text-sm text-zinc-400 md:grid-cols-3">
              <div>
                <p className="mb-2 font-semibold text-zinc-200">Common use cases</p>
                <ul className="space-y-2">
                  {service.useCases.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold text-zinc-200">Tools involved</p>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <span key={tool} className="rounded-md border border-white/10 bg-zinc-950/70 px-2 py-1 text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 font-semibold text-zinc-200">Example outcome</p>
                <p className="leading-6">{service.outcome}</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
