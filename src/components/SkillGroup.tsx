"use client";

import { useState } from "react";

type Skill = {
  name: string;
  description: string;
};

type SkillGroupProps = {
  title: string;
  skills: Skill[];
};

export function SkillGroup({ title, skills }: SkillGroupProps) {
  const [activeSkill, setActiveSkill] = useState(skills[0]);

  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
      <div className="mb-5 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-zinc-50">{title}</h3>
        <span className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-xs text-cyan-200">
          {skills.length}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <button
            key={skill.name}
            type="button"
            onMouseEnter={() => setActiveSkill(skill)}
            onFocus={() => setActiveSkill(skill)}
            className={`rounded-md border px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-zinc-950 ${
              activeSkill.name === skill.name
                ? "border-cyan-300/50 bg-cyan-300/10 text-cyan-100"
                : "border-white/10 text-zinc-300 hover:border-cyan-300/30 hover:bg-white/5"
            }`}
          >
            {skill.name}
          </button>
        ))}
      </div>
      <p className="mt-5 min-h-14 text-sm leading-6 text-zinc-400">{activeSkill.description}</p>
    </article>
  );
}
