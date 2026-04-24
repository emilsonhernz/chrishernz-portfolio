type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, className = "" }: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p> : null}
      <div className="space-y-4">
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-zinc-50 md:text-5xl">{title}</h2>
        {description ? <p className="max-w-2xl text-base leading-7 text-zinc-400">{description}</p> : null}
      </div>
    </div>
  );
}
