import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTA({ eyebrow, title, description, primaryHref, primaryLabel, secondaryHref, secondaryLabel }: CTAProps) {
  return (
    <section className="rounded-lg border border-cyan-300/20 bg-cyan-300/[0.04] p-6 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-3">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p> : null}
          <h2 className="text-2xl font-semibold text-zinc-50 md:text-4xl">{title}</h2>
          <p className="leading-7 text-zinc-400">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200" href={primaryHref}>
            {primaryLabel}
            <ArrowRight size={16} />
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link className="inline-flex items-center justify-center rounded-md border border-white/10 px-4 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/5" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
