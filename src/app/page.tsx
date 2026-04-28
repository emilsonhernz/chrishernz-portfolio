import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { MotionSection } from "@/components/MotionSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { professionalSummary, skillGroups, timelineItems } from "@/data/resume";
import { services } from "@/data/services";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const resumePreview = skillGroups.find((group) => group.title === "Automation & Integration") ?? skillGroups[0];
  const servicesPreview = services.filter((service) =>
    ["n8n Workflow Automation", "API Integration", "Webhook and Middleware Development"].includes(service.title)
  );
  const resumeSkills = resumePreview.skills.slice(0, 4);
  const experienceSnapshot = timelineItems[0];

  return (
    <main>
      <Hero />

      <div className="mx-auto grid max-w-6xl gap-20 px-4 py-20 md:px-6">
        <MotionSection className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-5 shadow-[0_18px_55px_rgba(4,8,20,0.18)] md:p-6">
          <div className="grid gap-5 md:grid-cols-[auto_1fr] md:items-center">
            <div className="flex size-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#101a2d] p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <Image
                src="/brand/official-logo.png"
                alt={`${profile.name} logo`}
                width={48}
                height={48}
                className="size-12 rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">About Emil</p>
              <div className="space-y-3">
                <h2 className="max-w-3xl text-2xl font-semibold leading-tight text-zinc-50 md:text-3xl">
                  Engineering systems that stay reliable after launch, not just during the demo.
                </h2>
                <p className="max-w-4xl text-base leading-7 text-zinc-300 md:text-lg">
                  I&apos;m {profile.name}, a back-end engineer and automation specialist focused on APIs, workflow design, and business systems that need to stay clear, maintainable, and useful in day-to-day operations.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-200">
                  6+ years in back-end systems
                </span>
                <span className="rounded-md border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-200">
                  APIs and integration work
                </span>
                <span className="rounded-md border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-200">
                  n8n automation delivery
                </span>
                <span className="rounded-md border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-200">
                  Real operational workflows
                </span>
              </div>
              <p className="text-sm leading-6 text-zinc-400">
                The work usually lives where technical reliability, process clarity, and business practicality need to meet.
              </p>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="space-y-8">
          <SectionHeader
            eyebrow="Two paths"
            title="Choose the track that matches what you need."
            description="One side is for hiring teams reviewing technical experience. The other is for businesses looking for automation and API integration help."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Resume</p>
              <h3 className="mt-3 text-2xl font-semibold text-zinc-50">Technical skills and back-end experience.</h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
                A brief view of the stack behind the resume page, focused on integration work, APIs, and business systems.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {resumeSkills.map((skill) => (
                  <span key={skill.name} className="rounded-md border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-200">
                    {skill.name}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-zinc-400">
                {experienceSnapshot.title} • {experienceSnapshot.period}. {professionalSummary}
              </p>

              <Link href="/resume" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                View resume
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Services</p>
              <h3 className="mt-3 text-2xl font-semibold text-zinc-50">Automation and API integration with n8n.</h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
                Practical service work for connecting systems, reducing manual tasks, and building reliable workflows.
              </p>

              <div className="mt-5 space-y-3">
                {servicesPreview.map((service) => (
                  <p key={service.title} className="text-sm leading-6 text-zinc-300">
                    <span className="font-semibold text-zinc-100">{service.title}:</span> {service.summary}
                  </p>
                ))}
              </div>

              <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                View services
                <ArrowRight size={16} />
              </Link>
            </div>
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
          primaryLabel="Book a Call"
          secondaryHref="/services"
          secondaryLabel="View Services"
        />
      </div>
    </main>
  );
}
