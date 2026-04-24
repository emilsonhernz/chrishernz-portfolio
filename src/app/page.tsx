import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { MotionSection } from "@/components/MotionSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

const strengths = [
  "API design and service logic",
  "NetSuite and SuiteScript automation",
  "n8n workflow orchestration",
  "SQL-backed reporting and monitoring",
  "Business system integrations"
];

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main>
      <Hero />

      <div className="mx-auto grid max-w-6xl gap-20 px-4 py-20 md:px-6">
        <MotionSection className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader
            eyebrow="Technical focus"
            title="Reliable back-end work, practical automation, and business systems that stay understandable."
            description="The site is split into two clear paths: resume for engineering roles, services for business automation and integration work."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div key={strength} className="rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm font-medium text-zinc-200">
                {strength}
              </div>
            ))}
          </div>
        </MotionSection>

        <MotionSection className="space-y-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Featured work"
              title="Projects that connect engineering depth with operational outcomes."
            />
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200">
              View all projects
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {featuredProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </MotionSection>

        <CTA
          eyebrow="Next step"
          title="Hiring for backend work or trying to remove manual operations?"
          description="I can help build reliable systems that connect tools, reduce repeated work, and make operational data easier to trust."
          primaryHref="/contact"
          primaryLabel="Contact Emil"
          secondaryHref="/services"
          secondaryLabel="View Services"
        />
      </div>
    </main>
  );
}
