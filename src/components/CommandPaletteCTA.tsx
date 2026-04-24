"use client";

import { Terminal } from "lucide-react";
import { commandOptions } from "@/data/profile";

export function CommandPaletteCTA() {
  function handleSelect(intentId: string) {
    const url = new URL("/contact", window.location.origin);
    url.searchParams.set("intent", intentId);
    window.location.href = url.toString();
  }

  return (
    <section className="rounded-lg border border-white/10 bg-zinc-950/80 p-5 shadow-2xl shadow-cyan-950/20">
      <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
        <span className="grid size-9 place-items-center rounded-md bg-cyan-300/10 text-cyan-300">
          <Terminal size={17} />
        </span>
        <div>
          <p className="text-sm font-semibold text-zinc-50">Open a conversation</p>
          <p className="text-xs text-zinc-500">Select the closest path.</p>
        </div>
      </div>
      <div className="grid gap-2">
        {commandOptions.map((option) => (
          <button
            key={option.intentId}
            type="button"
            onClick={() => handleSelect(option.intentId)}
            className="rounded-md border border-white/10 px-4 py-3 text-left text-sm text-zinc-300 transition hover:border-cyan-300/40 hover:bg-white/5 hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-zinc-950"
          >
            <span className="mr-3 text-cyan-300">$</span>
            {option.label}
          </button>
        ))}
      </div>
    </section>
  );
}
