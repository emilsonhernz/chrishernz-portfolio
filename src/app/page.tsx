import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { MotionSection } from "@/components/MotionSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ArticleCard } from "@/components/ArticleCard";
import { projects } from "@/data/projects";
import { professionalSummary, skillGroups, timelineItems } from "@/data/resume";
import { services } from "@/data/services";
import { getSortedArticles } from "@/data/articles";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const resumePreview = skillGroups.find((group) => group.title === "Automation & Integration") ?? skillGroups[0];
  const servicesPreview = services.filter((service) =>
    ["n8n Workflow Automation", "API Integration", "Webhook and Middleware Development"].includes(service.title)
  );
  const resumeSkills = resumePreview.skills.slice(0, 6);
  const experienceSnapshot = timelineItems[0];
  const latestArticles = getSortedArticles().slice(0, 3);

  return (
    <main>
      <Hero />

      <div className="mx-auto grid max-w-6xl gap-20 px-4 py-20 md:px-6">
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

            <div className="mt-5 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Experience snapshot</p>
              <p className="mt-3 text-sm font-semibold text-zinc-100">{experienceSnapshot.title} • {experienceSnapshot.period}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{professionalSummary}</p>
            </div>

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

              <div className="mt-5 grid gap-3">
                {servicesPreview.map((service) => (
                  <div key={service.title} className="rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3">
                    <h4 className="text-sm font-semibold text-zinc-100">{service.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">{service.summary}</p>
                  </div>
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

        <MotionSection className="space-y-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Latest articles"
              title="Recent writing on APIs, automation, and reliable operations."
              description="Short practical notes from the same areas covered across the resume and services pages."
            />
            <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200">
              View all articles
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {latestArticles.map((article) => <ArticleCard key={article.slug} article={article} />)}
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
