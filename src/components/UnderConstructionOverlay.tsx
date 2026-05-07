export function UnderConstructionOverlay() {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/45 p-4 backdrop-blur-md"
      aria-modal="true"
      role="dialog"
      aria-labelledby="under-construction-title"
      aria-describedby="under-construction-description"
    >
      <div className="w-full max-w-lg rounded-2xl border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(9,9,11,0.96),rgba(16,24,39,0.94))] p-6 text-center shadow-[0_30px_90px_rgba(3,7,18,0.45)] md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Notice</p>
        <h2 id="under-construction-title" className="mt-4 text-3xl font-semibold text-zinc-50">
          Website Under Construction
        </h2>
        <p id="under-construction-description" className="mt-4 text-base leading-7 text-zinc-300">
          This website is currently being updated. Some sections, links, and content may still be in progress while the new version is being completed.
        </p>
        <p className="mt-4 text-sm leading-6 text-zinc-400">
          To disable this popup later, set <code className="rounded bg-white/5 px-1.5 py-0.5 text-zinc-200">showUnderConstructionOverlay</code> to <code className="rounded bg-white/5 px-1.5 py-0.5 text-zinc-200">false</code> in <code className="rounded bg-white/5 px-1.5 py-0.5 text-zinc-200">src/data/site.ts</code>.
        </p>
      </div>
    </div>
  );
}
