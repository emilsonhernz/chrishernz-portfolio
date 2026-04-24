import { MotionSection } from "@/components/MotionSection";
import { ProjectFilter } from "@/components/ProjectFilter";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = {
  title: "Projects",
  description:
    "Selected back-end, automation, integration, and NetSuite projects by Emil Hernaez."
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:px-6 md:py-24">
      <MotionSection>
        <SectionHeader
          eyebrow="Projects"
          title="Shared project library for engineering roles and automation clients."
          description="Filter by the type of work you care about. Each card explains the problem, what I built, the stack, and the result."
        />
      </MotionSection>
      <ProjectFilter />
    </main>
  );
}
