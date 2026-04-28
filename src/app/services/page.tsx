import { CheckCircle2 } from "lucide-react";
import { CTA } from "@/components/CTA";
import { CommandPaletteCTA } from "@/components/CommandPaletteCTA";
import { MotionSection } from "@/components/MotionSection";
import { SectionHeader } from "@/components/SectionHeader";
import { ServicesList } from "@/components/ServicesList";
import { WorkflowVisualizer } from "@/components/WorkflowVisualizer";
import { problemsSolved, processSteps } from "@/data/services";

const tools = [
  "n8n",
  "GoHighLevel",
  "REST APIs",
  "SOAP APIs",
  "Webhooks",
  "Postman",
  "SQL Server",
  "PostgreSQL",
  "WooCommerce",
  "JSON"
];

export const metadata = {
  title: "Services",
  description:
    "Automation and integration services for businesses that want less manual work."
};

export default function ServicesPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-20 px-4 py-16 md:px-6 md:py-24">
      <MotionSection className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <SectionHeader
          eyebrow="Services"
          title="Automation and Integration Services for Businesses That Want Less Manual Work"
          description="I build practical workflows that connect systems, move data cleanly, and reduce operational mistakes."
        />
        <CommandPaletteCTA />
      </MotionSection>

      <MotionSection className="space-y-8">
        <SectionHeader eyebrow="Problems I solve" title="The work usually starts with friction that should not exist." />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {problemsSolved.map((problem) => (
            <div key={problem} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm text-zinc-300">
              <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={17} />
              {problem}
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="space-y-8">
        <SectionHeader
          eyebrow="Services offered"
          title="Click a service to see use cases, tools, and the expected outcome."
        />
        <ServicesList />
      </MotionSection>

      <MotionSection className="space-y-8">
        <SectionHeader eyebrow="Tools I work with" title="Platforms and integration surfaces I use to build practical automations." />
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span key={tool} className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-zinc-300">
              {tool}
            </span>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="space-y-8">
        <SectionHeader
          eyebrow="Workflow visualizer"
          title="Example automations, shown as simple pipelines."
          description="Select a workflow to see how the handoff moves from source event to useful output."
        />
        <WorkflowVisualizer />
      </MotionSection>

      <MotionSection className="space-y-8">
        <SectionHeader eyebrow="Simple process" title="A practical build path from workflow to monitored automation." />
        <div className="grid gap-3 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">0{index + 1}</p>
              <p className="text-sm font-medium text-zinc-100">{step}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <CTA
        title="Have a workflow that still depends on manual copy-paste?"
        description="I can map the systems, build the automation, test edge cases, and set up monitoring so it keeps working."
        primaryHref="/contact?intent=automation"
        primaryLabel="Start an Automation Project"
        secondaryHref="/projects"
        secondaryLabel="View Related Work"
      />
    </main>
  );
}
