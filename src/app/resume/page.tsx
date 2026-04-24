import { Download } from "lucide-react";
import { CTA } from "@/components/CTA";
import { MotionSection } from "@/components/MotionSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillGroup } from "@/components/SkillGroup";
import { Timeline } from "@/components/Timeline";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { professionalSummary, skillGroups } from "@/data/resume";

export const metadata = {
  title: "Resume",
  description: "Resume for Emil Hernaez, Back-End Software Engineer and Automation & Integration Specialist."
};

export default function ResumePage() {
  const engineeringProjects = projects.filter((project) => project.filters.includes("Back-End")).slice(0, 3);

  return (
    <main className="mx-auto grid max-w-6xl gap-20 px-4 py-16 md:px-6 md:py-24">
      <MotionSection className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader eyebrow="Resume" title={profile.name} description={profile.role} />
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <p className="text-lg leading-8 text-zinc-300">{professionalSummary}</p>
          <a href={profile.links.cv} className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/5">
            <Download size={16} />
            Download CV
          </a>
        </div>
      </MotionSection>

      <MotionSection className="space-y-8">
        <SectionHeader eyebrow="Technical skills" title="Grouped by the way the work actually gets delivered." />
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => <SkillGroup key={group.title} title={group.title} skills={group.skills} />)}
        </div>
      </MotionSection>

      <MotionSection className="space-y-8">
        <SectionHeader eyebrow="Timeline" title="Experience and education." />
        <Timeline />
      </MotionSection>

      <MotionSection className="space-y-8">
        <SectionHeader eyebrow="Engineering projects" title="Selected projects relevant to back-end roles." />
        <div className="grid gap-4 lg:grid-cols-3">
          {engineeringProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </MotionSection>

      <CTA
        title="Need a back-end developer who understands business systems?"
        description="I bring engineering fundamentals together with hands-on integration and automation experience."
        primaryHref="/contact?intent=hiring"
        primaryLabel="Talk About a Role"
        secondaryHref="/projects"
        secondaryLabel="Review Projects"
      />
    </main>
  );
}
