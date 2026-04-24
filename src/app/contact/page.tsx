import { BriefcaseBusiness, Code2, Mail, Network } from "lucide-react";
import { ContactFormShell } from "@/components/ContactFormShell";
import { MotionSection } from "@/components/MotionSection";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Contact",
  description:
    "Contact Emil Hernaez for back-end engineering, automation, API integration, and NetSuite support."
};

export default function ContactPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:px-6 md:py-24">
      <MotionSection className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Contact"
            title="Build reliable systems that connect tools and reduce manual work."
            description="Whether you need a back-end developer or someone to automate your business workflows, I can help build reliable systems that connect your tools and reduce manual work."
          />
          <div className="grid gap-3">
            <a className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm text-zinc-300 transition hover:border-cyan-300/30 hover:text-zinc-50" href={`mailto:${profile.email}`}>
              <Mail size={17} className="text-cyan-300" />
              {profile.email}
            </a>
            <a className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm text-zinc-300 transition hover:border-cyan-300/30 hover:text-zinc-50" href={profile.links.linkedin}>
              <Network size={17} className="text-cyan-300" />
              LinkedIn
            </a>
            <a className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm text-zinc-300 transition hover:border-cyan-300/30 hover:text-zinc-50" href={profile.links.github}>
              <Code2 size={17} className="text-cyan-300" />
              GitHub
            </a>
            <a className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm text-zinc-300 transition hover:border-cyan-300/30 hover:text-zinc-50" href={profile.links.upwork}>
              <BriefcaseBusiness size={17} className="text-cyan-300" />
              Upwork
            </a>
          </div>
        </div>
        <ContactFormShell />
      </MotionSection>
    </main>
  );
}
